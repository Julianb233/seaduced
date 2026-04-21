This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## E-commerce Flow

Full shop/cart/checkout/order/account/returns flow lives under `src/app/shop`, `src/app/cart`, `src/app/checkout`, `src/app/order/[id]`, `src/app/account`, and `src/app/returns`. Cart state is a Zustand store persisted to `localStorage` (`src/lib/cart.ts`). Bundle data is the single source of truth in `src/lib/bundles.ts`.

### Required env vars (for real Stripe wiring)

Set these in `.env.local` and on Vercel:

```
NEXT_PUBLIC_STRIPE_PK=pk_live_or_test_...
STRIPE_SECRET_KEY=sk_live_or_test_...
STRIPE_WEBHOOK_SECRET=whsec_...
```

Until these are set, `/checkout` runs in "test mode" — the `/api/checkout/create-intent` route returns a mocked `client_secret` + fake order id so the flow is end-to-end testable without charging cards. Orders are persisted to `localStorage` (`seaduced-orders` + `seaduced-order-<id>`).

### Stripe TODOs

- `src/lib/stripe.ts` — real publishable key lookup
- `src/app/api/checkout/create-intent/route.ts` — real `stripe.paymentIntents.create`
- `src/app/api/stripe/webhook/route.ts` — signature verify + event routing
- `src/components/shop/CheckoutFlow.tsx` — mount real Stripe Elements (`@stripe/react-stripe-js`) in `PaymentStep`

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
