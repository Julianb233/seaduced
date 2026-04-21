import type { Metadata } from "next";
import { SubpageHero } from "@/components/layout/SubpageHero";
import { SubpageSection } from "@/components/layout/SubpageSection";

export const metadata: Metadata = {
  title: "The Bottle — Seaduced",
  description:
    "Seaduced is a sea moss-infused personal lubricant designed for inclusive intimate wellness — plant-based, pH-balanced, body-positive.",
};

export default function ProductPage() {
  return (
    <>
      <SubpageHero
        eyebrow="The Product"
        title="Naturally Intimate."
        subtitle="5 oz of sea moss-infused personal lubricant. Plant-based. pH-balanced. Designed for every body."
      />
      <SubpageSection title="Made for how you actually want to feel">
        <p>
          Seaduced was built around one idea: the products that go on and in your
          body should feel as clean and considered as the ones you eat. Sea moss is
          nature&apos;s mineral-rich hydrator — 92 of the 102 minerals your body
          needs. We suspend it in a pH-balanced, plant-based base with no
          parabens, petroleum, or glycerin.
        </p>
        <p>
          The result is a silky, long-lasting personal lubricant that lets you
          stay present with a partner, with yourself, and with your body — through
          every season of life, every chapter of change.
        </p>
      </SubpageSection>
      <SubpageSection title="What&apos;s inside" background="charcoal">
        <ul className="space-y-4">
          <li>
            <strong className="text-[#C5A55A]">Sea moss extract</strong> — 92 of
            the 102 essential minerals; natural carrageenan for silk-smooth
            slip.
          </li>
          <li>
            <strong className="text-[#C5A55A]">Aloe leaf juice</strong> —
            soothing, water-based hydration that absorbs without residue.
          </li>
          <li>
            <strong className="text-[#C5A55A]">Plant-based humectants</strong> —
            keeps moisture where you need it.
          </li>
          <li>
            <strong className="text-[#C5A55A]">Nothing hiding</strong> — no
            petroleum, parabens, glycerin, artificial fragrance, or dyes.
          </li>
        </ul>
      </SubpageSection>
      <SubpageSection title="Details">
        <ul className="space-y-2">
          <li>5 oz / 148 ml pump bottle</li>
          <li>Water-based, condom-compatible</li>
          <li>Vegan & cruelty-free</li>
          <li>Made in the USA</li>
          <li>Price: $20–$35 (exact price set at launch)</li>
        </ul>
      </SubpageSection>
    </>
  );
}
