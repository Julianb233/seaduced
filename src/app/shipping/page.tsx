import type { Metadata } from "next";
import { SubpageHero } from "@/components/layout/SubpageHero";
import { SubpageSection } from "@/components/layout/SubpageSection";

export const metadata: Metadata = {
  title: "Shipping & Returns — Seaduced",
  description:
    "Discreet packaging, standard US shipping, and an honest returns policy. Here&apos;s how it works.",
};

export default function ShippingPage() {
  return (
    <>
      <SubpageHero
        eyebrow="Shipping & Returns"
        title="Discreet. Honest."
        subtitle="How your Seaduced order travels, and what happens if something isn&apos;t right."
      />
      <SubpageSection title="Shipping">
        <ul className="space-y-4">
          <li>
            <strong className="text-[#C5A55A]">Standard US shipping</strong> —
            3–5 business days. Ships from our partner fulfillment center in
            Southern California.
          </li>
          <li>
            <strong className="text-[#C5A55A]">Discreet packaging</strong> —
            Plain exterior box. No &quot;Seaduced&quot; branding, no ingredient
            descriptions, no clues for whoever picks up your mail.
          </li>
          <li>
            <strong className="text-[#C5A55A]">Tracking</strong> — Sent to your
            email as soon as your order ships.
          </li>
          <li>
            <strong className="text-[#C5A55A]">International</strong> — Not yet,
            but on the roadmap. Sign up for the newsletter and we&apos;ll tell
            you the day we turn it on.
          </li>
        </ul>
      </SubpageSection>
      <SubpageSection title="Returns" background="charcoal">
        <p>
          Because of the intimate nature of the product, we can only accept
          returns on <strong>unopened, sealed</strong> bottles within 30 days
          of delivery. If your order arrives damaged or defective, we&apos;ll
          replace it — email{" "}
          <a href="mailto:hello@seaducedproducts.com" className="text-[#C5A55A] underline decoration-[#C5A55A]/40 hover:decoration-[#C5A55A] underline-offset-4">
            hello@seaducedproducts.com
          </a>{" "}
          with your order number and a photo and we&apos;ll make it right.
        </p>
        <p className="mt-6 opacity-80">
          If the product just isn&apos;t for you, we understand. Message us and
          we&apos;ll work something out — we&apos;d rather you feel good about
          the whole experience than hold you to a technicality.
        </p>
      </SubpageSection>
    </>
  );
}
