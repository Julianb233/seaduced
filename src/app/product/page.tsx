import type { Metadata } from "next";
import { ProductHero } from "@/components/product/ProductHero";
import { ProductGallery } from "@/components/product/ProductGallery";
import { BenefitsStrip } from "@/components/product/BenefitsStrip";
import { IngredientsTeaser } from "@/components/product/IngredientsTeaser";
import { HowToUse } from "@/components/product/HowToUse";
import { PriceBreak } from "@/components/product/PriceBreak";
import { TrustRow } from "@/components/product/TrustRow";
import { FAQ } from "@/components/product/FAQ";
import { CTABand } from "@/components/product/CTABand";

export const metadata: Metadata = {
  title: "The Bottle — Seaduced",
  description:
    "Seaduced is a sea moss-infused personal lubricant designed for inclusive intimate wellness — plant-based, pH-balanced, body-positive. 5 oz, $28.",
};

export default function ProductPage() {
  return (
    <main className="min-h-screen bg-[#AACAD1] overflow-x-clip">
      <ProductHero />
      <ProductGallery />
      <BenefitsStrip />
      <IngredientsTeaser />
      <HowToUse />
      <PriceBreak />
      <TrustRow />
      <FAQ />
      <CTABand />
    </main>
  );
}
