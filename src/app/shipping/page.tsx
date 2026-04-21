import type { Metadata } from 'next';
import Link from 'next/link';
import StaticPageShell from '@/components/layout/StaticPageShell';
import { BRAND } from '@/lib/constants';

export const metadata: Metadata = {
  title: `Shipping Policy - ${BRAND.name}`,
  description:
    'Shipping policy for Seaduced products. Learn about delivery times, shipping methods, and return procedures.',
};

export default function ShippingPage() {
  return (
    <StaticPageShell
      eyebrow="Shipping"
      title="Shipping Policy"
      subtitle="Last updated April 2026"
    >
      <h2>Domestic Shipping</h2>
      <p>
        We currently ship to all 50 US states. Orders are processed within 1–2
        business days. Once shipped, delivery typically takes 3–7 business days
        depending on your location.
      </p>
      <ul>
        <li>
          <strong>Standard Shipping:</strong> 5–7 business days
        </li>
        <li>
          <strong>Expedited Shipping:</strong> 2–3 business days
        </li>
        <li>
          <strong>Free Shipping:</strong> On orders over $50
        </li>
      </ul>

      <h2>Order Processing</h2>
      <p>
        Orders placed before 2:00 PM PST on business days are typically
        processed the same day. Orders placed after this time or on
        weekends/holidays will be processed the next business day.
      </p>
      <p>
        You will receive a confirmation email with tracking information once your
        order has shipped.
      </p>

      <h2>Discreet Packaging</h2>
      <p>
        All Seaduced orders are shipped in plain, unmarked packaging with no
        product descriptions visible on the outside. Your privacy is our
        priority.
      </p>

      <h2>Returns &amp; Exchanges</h2>
      <p>
        Due to the intimate nature of our products, we can only accept returns
        for unopened, sealed items within 30 days of delivery. Damaged or
        defective products will be replaced at no cost.
      </p>
      <p>
        To initiate a return or report a damaged product, please contact us at{' '}
        <a href="mailto:support@seaduced.com">support@seaduced.com</a>.
      </p>

      <h2>International Shipping</h2>
      <p>
        We do not currently ship internationally. We are working on expanding our
        shipping options and will announce availability on our website and social
        media channels.
      </p>

      <h2>Questions?</h2>
      <p>
        If you have questions about your order or shipping, reach out to us at{' '}
        <a href="mailto:support@seaduced.com">support@seaduced.com</a>. We
        typically respond within 24 hours.
      </p>

      <p className="mt-8 text-center text-sm">
        <Link href="/privacy" className="mr-4">
          Privacy Policy
        </Link>
        <Link href="/terms">Terms of Service</Link>
      </p>
    </StaticPageShell>
  );
}
