import type { Metadata } from "next";
import { SubpageHero } from "@/components/layout/SubpageHero";
import { CTABand } from "@/components/layout/CTABand";
import { SeaMossIntro } from "@/components/science/SeaMossIntro";
import { Minerals92 } from "@/components/science/Minerals92";
import { CarrageenanExplainer } from "@/components/science/CarrageenanExplainer";
import { PhMatters } from "@/components/science/PhMatters";
import { FormulationFlow } from "@/components/science/FormulationFlow";
import { WhatWeDontClaim } from "@/components/science/WhatWeDontClaim";
import { FurtherReading } from "@/components/science/FurtherReading";

export const metadata: Metadata = {
  title: "The Science — Seaduced",
  description:
    "Why sea moss. Why pH matters. The plant biology and peer-reviewed evidence behind a clean, plant-based personal lubricant.",
  openGraph: {
    title: "The Science — Seaduced",
    description:
      "Why sea moss. Why pH matters. The plant biology and peer-reviewed evidence behind a clean, plant-based personal lubricant.",
    type: "website",
  },
};

export default function SciencePage() {
  return (
    <>
      <SubpageHero
        eyebrow="The Science"
        title="Why sea moss."
        subtitle="The ocean's most mineral-dense plant, matched to your body's natural pH, translated into a personal lubricant that respects biology."
      />
      <SeaMossIntro />
      <Minerals92 />
      <CarrageenanExplainer />
      <PhMatters />
      <FormulationFlow />
      <WhatWeDontClaim />
      <FurtherReading />
      <CTABand
        eyebrow="Shop The Result"
        title="Science, in a 5 oz bottle."
        subtitle="Plant-based. pH 4.2. Tested, traceable, and made for every body."
        primary={{ label: "Shop Seaduced", href: "/product" }}
        secondary={{ label: "See Ingredients", href: "/ingredients" }}
      />
    </>
  );
}
