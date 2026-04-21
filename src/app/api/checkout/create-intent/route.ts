// POST /api/checkout/create-intent
//
// MOCKED until Stripe is provisioned. Accepts the cart payload and returns a
// fake client_secret + order id so the checkout flow is end-to-end testable.
//
// TODO(stripe): replace the mock block with a real Stripe.paymentIntents.create
// call. The request contract (cart lines, email, amount in cents) is already
// the real Stripe shape — only the response changes.

import type { NextRequest } from "next/server";
import { bundlesBySlug } from "@/lib/bundles";

interface Line {
  slug: string;
  qty: number;
}

interface CreateIntentBody {
  email: string;
  lines: Line[];
  amountCents: number;
  promoCode?: string | null;
}

export async function POST(request: NextRequest) {
  let body: CreateIntentBody;
  try {
    body = (await request.json()) as CreateIntentBody;
  } catch {
    return Response.json({ error: "Invalid JSON" }, { status: 400 });
  }

  if (!body.email || !body.lines || body.lines.length === 0) {
    return Response.json(
      { error: "Email and at least one cart line are required" },
      { status: 400 }
    );
  }

  // Validate every cart line against the canonical bundle list.
  const serverSubtotalCents = body.lines.reduce((sum, line) => {
    const bundle = bundlesBySlug[line.slug as keyof typeof bundlesBySlug];
    if (!bundle) return sum;
    return sum + bundle.price * 100 * line.qty;
  }, 0);

  if (serverSubtotalCents === 0) {
    return Response.json({ error: "No valid cart lines" }, { status: 400 });
  }

  // -------- MOCK PAYMENT INTENT --------
  // TODO(stripe): replace with:
  //   const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
  //   const intent = await stripe.paymentIntents.create({
  //     amount: body.amountCents,
  //     currency: "usd",
  //     receipt_email: body.email,
  //     metadata: { lines: JSON.stringify(body.lines) },
  //   });
  //   return Response.json({ clientSecret: intent.client_secret, orderId: intent.id });

  const fakeOrderId = `mock_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 8)}`;
  const fakeClientSecret = `pi_mock_${fakeOrderId}_secret_testing`;

  return Response.json({
    clientSecret: fakeClientSecret,
    orderId: fakeOrderId,
    mocked: true,
    // TODO(stripe): remove this echo once real Stripe is wired. It's only here
    // so the checkout page can display a "Mock mode" banner.
  });
}

// Guard other methods so they return 405 rather than crash.
export async function GET() {
  return Response.json(
    { error: "POST required. See /api/checkout/create-intent." },
    { status: 405 }
  );
}
