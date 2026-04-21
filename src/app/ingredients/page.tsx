import type { Metadata } from "next";
import { SubpageHero } from "@/components/layout/SubpageHero";
import { SubpageSection } from "@/components/layout/SubpageSection";

export const metadata: Metadata = {
  title: "Ingredients — Seaduced",
  description:
    "Every ingredient in Seaduced, and why it's there. Plant-based, pH-balanced, made for real bodies.",
};

export default function IngredientsPage() {
  return (
    <>
      <SubpageHero
        eyebrow="Ingredients"
        title="Clean, on purpose."
        subtitle="Every ingredient earns its place. Nothing hiding behind a label."
      />
      <SubpageSection title="What&apos;s in every 5 oz bottle">
        <ul className="space-y-5">
          <li>
            <strong className="text-[#C5A55A]">Sea moss (Chondrus crispus) extract</strong>
            <p className="mt-1">
              The hero. A red algae that carries 92 of the 102 minerals your
              body needs, and produces natural carrageenan — the silky gel
              texture that makes our formula glide.
            </p>
          </li>
          <li>
            <strong className="text-[#C5A55A]">Aloe barbadensis (aloe vera) leaf juice</strong>
            <p className="mt-1">
              Soothing, calming, and hydrating. Absorbs cleanly. No sticky
              finish.
            </p>
          </li>
          <li>
            <strong className="text-[#C5A55A]">Hyaluronic acid (plant-derived)</strong>
            <p className="mt-1">
              Holds up to 1,000 times its weight in water — keeps moisture
              locked in where you need it.
            </p>
          </li>
          <li>
            <strong className="text-[#C5A55A]">Vitamin E (tocopherol)</strong>
            <p className="mt-1">
              Antioxidant, natural preservative, skin-friendly.
            </p>
          </li>
          <li>
            <strong className="text-[#C5A55A]">Purified water</strong>
            <p className="mt-1">
              The base. Nothing fancy — just clean.
            </p>
          </li>
        </ul>
      </SubpageSection>
      <SubpageSection title="What&apos;s NOT in it" background="charcoal">
        <ul className="space-y-2 text-[#FDF8F0]">
          <li>No petroleum</li>
          <li>No parabens</li>
          <li>No glycerin</li>
          <li>No artificial fragrance</li>
          <li>No synthetic dyes</li>
          <li>No animal products or testing</li>
        </ul>
      </SubpageSection>
    </>
  );
}
