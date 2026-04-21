// POST /api/stripe/webhook
//
// Stub for Stripe webhook handling. In production this endpoint will:
//   1. Verify the Stripe-Signature header against STRIPE_WEBHOOK_SECRET.
//   2. Route the event type to the appropriate handler:
//        - payment_intent.succeeded   → mark order paid + send receipt email
//        - payment_intent.payment_failed → flag order + email customer
//        - charge.refunded → mark refunded
//   3. Return 200 fast to ACK to Stripe (queue real work if >2s).
//
// TODO(stripe): implement signature verification and event routing once
// STRIPE_SECRET_KEY + STRIPE_WEBHOOK_SECRET are provisioned.

import type { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const signature = request.headers.get("stripe-signature");
  const body = await request.text();

  // TODO(stripe): real signature verification
  //   const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
  //   let event;
  //   try {
  //     event = stripe.webhooks.constructEvent(
  //       body,
  //       signature!,
  //       process.env.STRIPE_WEBHOOK_SECRET!
  //     );
  //   } catch (err) {
  //     return Response.json({ error: "Bad signature" }, { status: 400 });
  //   }
  //
  //   switch (event.type) {
  //     case "payment_intent.succeeded":
  //       await handleSuccess(event.data.object);
  //       break;
  //     case "payment_intent.payment_failed":
  //       await handleFailure(event.data.object);
  //       break;
  //   }

  // For now, log and accept — so Stripe can be pointed at this URL without 500s.
  if (process.env.NODE_ENV !== "production") {
    console.log("[stripe-webhook] received", {
      signaturePresent: Boolean(signature),
      bodyBytes: body.length,
    });
  }

  return Response.json({ received: true, mocked: true });
}

export async function GET() {
  return Response.json({ status: "stripe-webhook stub — POST only" });
}
