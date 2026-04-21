// Lazy-loaded Stripe.js client. Only loads when checkout is rendered, not on
// every route. The publishable key MUST be a `NEXT_PUBLIC_*` env var because
// it's embedded into the client bundle.
//
// TODO(stripe): provide NEXT_PUBLIC_STRIPE_PK at build time. Until Gina
// provisions a Stripe account we export `null` and the UI displays a
// "Payment not yet configured" notice rather than crashing.
"use client";

import { loadStripe, type Stripe } from "@stripe/stripe-js";

let stripePromise: Promise<Stripe | null> | null = null;

export function getStripe(): Promise<Stripe | null> {
  if (stripePromise) return stripePromise;
  const pk = process.env.NEXT_PUBLIC_STRIPE_PK;
  if (!pk) {
    // No key yet — return a resolved null so the caller can branch on it.
    stripePromise = Promise.resolve(null);
    return stripePromise;
  }
  stripePromise = loadStripe(pk);
  return stripePromise;
}

export const STRIPE_CONFIGURED = Boolean(process.env.NEXT_PUBLIC_STRIPE_PK);
