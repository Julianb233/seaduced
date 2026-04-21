import type { Metadata } from 'next';
import Link from 'next/link';
import StaticPageShell from '@/components/layout/StaticPageShell';
import { BRAND } from '@/lib/constants';

export const metadata: Metadata = {
  title: `Terms of Service - ${BRAND.name}`,
  description:
    'Terms of service for Seaduced. Read our terms and conditions for purchasing and using our products.',
};

export default function TermsPage() {
  return (
    <StaticPageShell
      eyebrow="Legal"
      title="Terms of Service"
      subtitle="Last updated April 2026"
    >
      <p>
        Welcome to Seaduced. By accessing or using our website and purchasing
        our products, you agree to be bound by these Terms of Service. Please
        read them carefully before using our services.
      </p>

      <h2>Use of Our Website</h2>
      <p>
        You must be at least 18 years of age to use this website or purchase our
        products. By using our site, you represent that you meet this age
        requirement.
      </p>
      <p>You agree not to:</p>
      <ul>
        <li>Use the site for any unlawful purpose</li>
        <li>Attempt to gain unauthorized access to any part of the site</li>
        <li>
          Interfere with the proper functioning of the site or its
          infrastructure
        </li>
        <li>
          Reproduce, distribute, or create derivative works from site content
          without permission
        </li>
      </ul>

      <h2>Products &amp; Orders</h2>
      <p>
        All product descriptions, pricing, and availability are subject to
        change without notice. We reserve the right to limit quantities and to
        refuse or cancel any order at our discretion.
      </p>
      <p>
        Colors and appearance of products may vary slightly from what is shown on
        your screen due to monitor settings and photography.
      </p>

      <h2>Payment</h2>
      <p>
        We accept major credit cards and other payment methods as displayed at
        checkout. All prices are listed in US Dollars (USD). Sales tax may be
        applied based on your shipping location as required by law.
      </p>

      <h2>Intellectual Property</h2>
      <p>
        All content on this website&mdash;including text, graphics, logos,
        images, and software&mdash;is the property of Seaduced and is protected
        by applicable intellectual property laws. You may not use, reproduce, or
        distribute any content without our prior written consent.
      </p>

      <h2>Disclaimer of Warranties</h2>
      <p>
        Our products are provided &ldquo;as is&rdquo; without warranties of any
        kind, express or implied. We do not warrant that our products will meet
        your specific requirements or expectations. Seaduced products are
        intended for external use only. Discontinue use if irritation occurs and
        consult a healthcare professional.
      </p>

      <h2>Limitation of Liability</h2>
      <p>
        To the fullest extent permitted by law, Seaduced shall not be liable for
        any indirect, incidental, special, consequential, or punitive damages
        arising from your use of our website or products.
      </p>

      <h2>Governing Law</h2>
      <p>
        These Terms of Service shall be governed by and construed in accordance
        with the laws of the State of California, without regard to its conflict
        of law provisions.
      </p>

      <h2>Changes to These Terms</h2>
      <p>
        We reserve the right to update or modify these Terms at any time. Changes
        will be posted on this page with an updated effective date. Continued use
        of the site after changes constitutes acceptance of the new terms.
      </p>

      <h2>Contact Us</h2>
      <p>
        If you have questions about these Terms, please contact us at{' '}
        <a href="mailto:legal@seaduced.com">legal@seaduced.com</a>.
      </p>

      <p className="mt-8 text-center text-sm">
        <Link href="/privacy" className="mr-4">
          Privacy Policy
        </Link>
        <Link href="/shipping">Shipping Policy</Link>
      </p>
    </StaticPageShell>
  );
}
