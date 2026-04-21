import type { Metadata } from "next";
import { SubpageHero } from "@/components/layout/SubpageHero";
import { SubpageSection } from "@/components/layout/SubpageSection";

export const metadata: Metadata = {
  title: "The Science — Seaduced",
  description:
    "Why sea moss. Why pH matters. Why plant-based actually matters for intimate wellness.",
};

export default function SciencePage() {
  return (
    <>
      <SubpageHero
        eyebrow="The Science"
        title="Why sea moss."
        subtitle="The ocean&apos;s most nutrient-dense superfood, brought into your most personal moments."
      />
      <SubpageSection title="What sea moss actually is">
        <p>
          Sea moss (Chondrus crispus and Gracilaria species) is a red algae
          that grows on the rocky coasts of the Atlantic. It has been used in
          traditional Irish and Caribbean wellness for centuries — as a remedy
          for respiratory support, skin health, and nourishment.
        </p>
        <p>
          Modern nutritional analysis confirms what those traditions knew:
          sea moss is one of the most mineral-dense foods on the planet, with
          92 of the 102 minerals the human body is made of, including iodine,
          magnesium, zinc, potassium, iron, and selenium.
        </p>
      </SubpageSection>
      <SubpageSection title="Why it&apos;s perfect for this use">
        <p>
          Sea moss produces carrageenan — a natural polysaccharide that creates
          a silky, hydrating gel. Unlike synthetic thickeners, sea moss
          carrageenan is water-soluble, pH-neutral, and skin-compatible.
        </p>
        <p>
          That gives us a personal lubricant with long-lasting slip that won&apos;t
          dry sticky, won&apos;t disrupt your natural pH balance, and won&apos;t
          introduce synthetic polymers to one of the most absorbent parts of
          the body.
        </p>
      </SubpageSection>
      <SubpageSection title="Why pH matters" background="charcoal">
        <p>
          The healthy range for intimate pH is between 3.8 and 4.5 — slightly
          acidic. Many commercial lubricants are formulated alkaline
          (pH 7+), which can disrupt the microbiome and trigger irritation.
        </p>
        <p className="text-[#C5A55A]">
          Seaduced is formulated at pH 4.2 — matched to your body&apos;s natural
          state so nothing feels off after.
        </p>
      </SubpageSection>
      <SubpageSection title="What we don&apos;t claim">
        <p className="opacity-80">
          Seaduced is a personal lubricant. It&apos;s not a medical device,
          supplement, or treatment for any medical condition. If you&apos;re
          managing specific health concerns, talk to your provider.
        </p>
      </SubpageSection>
    </>
  );
}
