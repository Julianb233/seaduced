import type { Metadata } from "next";
import { SubpageHero } from "@/components/layout/SubpageHero";
import { CTABand } from "@/components/layout/CTABand";
import { IngredientCards } from "@/components/ingredients/IngredientCards";
import { WhatNotInIt } from "@/components/ingredients/WhatNotInIt";
import { SourcingStandards } from "@/components/ingredients/SourcingStandards";
import { Allergens } from "@/components/ingredients/Allergens";
import { TestingLab } from "@/components/ingredients/TestingLab";
import { FullLabel } from "@/components/ingredients/FullLabel";

export const metadata: Metadata = {
  title: "Ingredients — Seaduced",
  description:
    "Every ingredient in Seaduced, named and explained. Plant-based, pH-balanced, third-party tested, made for real bodies.",
  openGraph: {
    title: "Ingredients — Seaduced",
    description:
      "Every ingredient in Seaduced, named and explained. Plant-based, pH-balanced, third-party tested, made for real bodies.",
    type: "website",
  },
};

export default function IngredientsPage() {
  return (
    <>
      <SubpageHero
        eyebrow="Ingredients"
        title="Clean, on purpose."
        subtitle="Every ingredient earns its place. Nothing hiding behind a label — just five thoughtful components, sourced, tested, and named."
      />
      <IngredientCards />
      <WhatNotInIt />
      <SourcingStandards />
      <Allergens />
      <TestingLab />
      <FullLabel />
      <CTABand
        eyebrow="Shop Confidently"
        title="Now you know what's in it."
        subtitle="Plant-based. pH 4.2. Third-party tested. Made for how you actually want to feel."
        primary={{ label: "Shop Seaduced", href: "/product" }}
        secondary={{ label: "Read The Science", href: "/science" }}
      />
    </>
  );
}
