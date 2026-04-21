import type { Metadata } from "next";
import { SubpageHero } from "@/components/layout/SubpageHero";
import { SubpageSection } from "@/components/layout/SubpageSection";

export const metadata: Metadata = {
  title: "Our Story — Seaduced",
  description:
    "Seaduced was founded to make intimate wellness that actually feels like wellness — inclusive, body-positive, and honest about what goes on your body.",
};

export default function AboutPage() {
  return (
    <>
      <SubpageHero
        eyebrow="Our Story"
        title="Made from the sea. Made for you."
        subtitle="A brand for every body, every age, every kind of love."
      />
      <SubpageSection title="Why we made this">
        <p>
          Seaduced started with a simple question: why are the products we use
          during the most tender moments of our lives the ones we know the
          least about?
        </p>
        <p>
          So many &quot;personal lubricants&quot; are made with petroleum, parabens,
          glycerin, and a long ingredient list that reads more like a chemistry
          final than self-care. We wanted something cleaner. Something that
          worked with the body instead of against it. Something anyone could
          use and feel good about.
        </p>
        <p>
          We landed on sea moss — the ocean&apos;s most nutrient-dense superfood —
          as the hero ingredient. Sea moss naturally produces carrageenan,
          which gives our formula a silky, hydrating texture. It&apos;s
          plant-based, pH-balanced, and made for the way real bodies actually
          work.
        </p>
      </SubpageSection>
      <SubpageSection title="Who it&apos;s for" background="charcoal">
        <p>
          Seaduced is for women navigating hormonal changes and menopause. For
          couples looking to upgrade their self-care routine. For the LGBTQ+
          community. For anyone who wants something they can trust on the most
          intimate part of their body.
        </p>
        <p className="text-[#C5A55A]">
          You deserve ingredients you can read. You deserve a brand that
          doesn&apos;t talk down to you. You deserve to feel good.
        </p>
      </SubpageSection>
    </>
  );
}
