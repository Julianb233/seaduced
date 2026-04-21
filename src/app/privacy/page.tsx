import type { Metadata } from "next";
import { SubpageHero } from "@/components/layout/SubpageHero";
import { SubpageSection } from "@/components/layout/SubpageSection";

export const metadata: Metadata = {
  title: "Privacy Policy — Seaduced",
  description:
    "What we collect, why, and what we never do with it. Plain English.",
};

export default function PrivacyPage() {
  return (
    <>
      <SubpageHero
        eyebrow="Privacy"
        title="Your privacy, plainly."
        subtitle="No fine print tricks. Here&apos;s exactly what we collect and why."
      />
      <SubpageSection title="What we collect">
        <ul className="space-y-3">
          <li>
            <strong className="text-[#C5A55A]">When you place an order:</strong>{" "}
            Name, shipping address, email, payment information (handled
            securely by Stripe — we never see or store your card number).
          </li>
          <li>
            <strong className="text-[#C5A55A]">When you subscribe:</strong>{" "}
            Your email and whatever you tell us about yourself (birthday,
            preferences, etc. — all optional).
          </li>
          <li>
            <strong className="text-[#C5A55A]">When you browse:</strong>{" "}
            Standard site analytics (anonymous page views, device type) to
            understand what&apos;s working. We don&apos;t use invasive tracking.
          </li>
        </ul>
      </SubpageSection>
      <SubpageSection title="What we never do" background="charcoal">
        <ul className="space-y-2 text-[#FDF8F0]">
          <li>Sell your data to third parties. Ever.</li>
          <li>Share your purchase history with advertisers.</li>
          <li>Email you more than you signed up for.</li>
          <li>Keep information longer than we need it.</li>
        </ul>
      </SubpageSection>
      <SubpageSection title="Your rights">
        <p>
          You can request a copy of your data, ask us to delete it, or
          unsubscribe at any time. Email{" "}
          <a href="mailto:hello@seaducedproducts.com" className="text-[#C5A55A] underline decoration-[#C5A55A]/40 hover:decoration-[#C5A55A] underline-offset-4">
            hello@seaducedproducts.com
          </a>
          . We&apos;ll confirm within 48 hours.
        </p>
        <p className="mt-4 opacity-70 text-sm">
          Last updated: 2026-04-21
        </p>
      </SubpageSection>
    </>
  );
}
