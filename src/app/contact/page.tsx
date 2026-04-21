import type { Metadata } from "next";
import { SubpageHero } from "@/components/layout/SubpageHero";
import { SubpageSection } from "@/components/layout/SubpageSection";

export const metadata: Metadata = {
  title: "Contact — Seaduced",
  description: "Questions, partnerships, press. We&apos;d love to hear from you.",
};

export default function ContactPage() {
  return (
    <>
      <SubpageHero
        eyebrow="Contact"
        title="Say hello."
        subtitle="Press, partnerships, product questions, or just a hi — we read everything."
      />
      <SubpageSection title="Get in touch">
        <div className="space-y-6">
          <div>
            <p className="font-mono text-xs tracking-widest text-[#C5A55A] uppercase mb-1">
              General
            </p>
            <a
              href="mailto:hello@seaducedproducts.com"
              className="text-xl underline decoration-[#C5A55A]/40 hover:decoration-[#C5A55A] underline-offset-4"
            >
              hello@seaducedproducts.com
            </a>
          </div>
          <div>
            <p className="font-mono text-xs tracking-widest text-[#C5A55A] uppercase mb-1">
              Press & creators
            </p>
            <a
              href="mailto:press@seaducedproducts.com"
              className="text-xl underline decoration-[#C5A55A]/40 hover:decoration-[#C5A55A] underline-offset-4"
            >
              press@seaducedproducts.com
            </a>
          </div>
          <div>
            <p className="font-mono text-xs tracking-widest text-[#C5A55A] uppercase mb-1">
              Retail & wholesale
            </p>
            <a
              href="mailto:wholesale@seaducedproducts.com"
              className="text-xl underline decoration-[#C5A55A]/40 hover:decoration-[#C5A55A] underline-offset-4"
            >
              wholesale@seaducedproducts.com
            </a>
          </div>
        </div>
      </SubpageSection>
      <SubpageSection title="Follow along" background="charcoal">
        <p>
          Instagram{" "}
          <a
            href="https://instagram.com/seaduced"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#C5A55A] underline decoration-[#C5A55A]/40 hover:decoration-[#C5A55A] underline-offset-4"
          >
            @seaduced
          </a>{" "}
          — behind the bottle, tips, community.
        </p>
      </SubpageSection>
    </>
  );
}
