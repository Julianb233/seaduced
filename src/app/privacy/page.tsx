import type { Metadata } from 'next';
import Link from 'next/link';
import StaticPageShell from '@/components/layout/StaticPageShell';
import { BRAND } from '@/lib/constants';

export const metadata: Metadata = {
  title: `Privacy Policy - ${BRAND.name}`,
  description:
    'Seaduced privacy policy. Learn how we collect, use, and protect your personal information.',
};

export default function PrivacyPage() {
  return (
    <StaticPageShell
      eyebrow="Legal"
      title="Privacy Policy"
      subtitle="Last updated April 2026"
    >
      <p>
        Seaduced (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;)
        respects your privacy and is committed to protecting your personal
        information. This Privacy Policy explains how we collect, use, disclose,
        and safeguard your information when you visit our website or purchase our
        products.
      </p>

      <h2>Information We Collect</h2>
      <p>We may collect the following types of information:</p>
      <ul>
        <li>
          <strong>Personal Information:</strong> Name, email address, shipping
          address, and payment information when you make a purchase.
        </li>
        <li>
          <strong>Usage Data:</strong> Pages visited, time spent on our site,
          browser type, and referring URL.
        </li>
        <li>
          <strong>Cookies:</strong> Small data files stored on your device to
          improve your browsing experience.
        </li>
      </ul>

      <h2>How We Use Your Information</h2>
      <ul>
        <li>Process and fulfill your orders</li>
        <li>Send order confirmations and shipping updates</li>
        <li>Improve our website and product offerings</li>
        <li>Send marketing communications (only with your explicit consent)</li>
        <li>Respond to customer service inquiries</li>
        <li>Comply with legal obligations</li>
      </ul>

      <h2>Information Sharing</h2>
      <p>
        We do not sell, trade, or rent your personal information to third
        parties. We may share your information with:
      </p>
      <ul>
        <li>
          <strong>Service Providers:</strong> Payment processors, shipping
          carriers, and email service providers who help us operate our business.
        </li>
        <li>
          <strong>Legal Compliance:</strong> When required by law, regulation, or
          legal process.
        </li>
      </ul>

      <h2 id="cookies">Cookie Policy</h2>
      <p>
        We use cookies and similar tracking technologies to enhance your
        experience. You can control cookie preferences through your browser
        settings. Disabling cookies may limit some site features.
      </p>
      <ul>
        <li>
          <strong>Essential Cookies:</strong> Required for site functionality
          (cart, checkout).
        </li>
        <li>
          <strong>Analytics Cookies:</strong> Help us understand how visitors use
          our site.
        </li>
        <li>
          <strong>Marketing Cookies:</strong> Used to deliver relevant
          advertisements (opt-in only).
        </li>
      </ul>

      <h2>Data Security</h2>
      <p>
        We implement industry-standard security measures including SSL
        encryption, secure payment processing, and regular security audits.
        However, no method of transmission over the Internet is 100% secure, and
        we cannot guarantee absolute security.
      </p>

      <h2>Your Rights</h2>
      <p>Depending on your jurisdiction, you may have the right to:</p>
      <ul>
        <li>Access the personal data we hold about you</li>
        <li>Request correction of inaccurate data</li>
        <li>Request deletion of your data</li>
        <li>Opt out of marketing communications</li>
        <li>Request data portability</li>
      </ul>
      <p>
        To exercise any of these rights, contact us at{' '}
        <a href="mailto:privacy@seaduced.com">privacy@seaduced.com</a>.
      </p>

      <h2>Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. Changes will be
        posted on this page with an updated revision date. We encourage you to
        review this page periodically.
      </p>

      <h2>Contact Us</h2>
      <p>
        If you have questions about this Privacy Policy, please contact us at{' '}
        <a href="mailto:privacy@seaduced.com">privacy@seaduced.com</a>.
      </p>

      <p className="mt-8 text-center text-sm">
        <Link href="/terms" className="mr-4">
          Terms of Service
        </Link>
        <Link href="/shipping">Shipping Policy</Link>
      </p>
    </StaticPageShell>
  );
}
