import type { Metadata } from "next";
import { AboutHero } from "@/components/about/AboutHero";
import { OriginStory } from "@/components/about/OriginStory";
import { ValuesGrid } from "@/components/about/ValuesGrid";
import { WhoItsFor } from "@/components/about/WhoItsFor";
import { FounderNote } from "@/components/about/FounderNote";
import { PressQuote } from "@/components/about/PressQuote";
import { Timeline } from "@/components/about/Timeline";
import { CTABand } from "@/components/about/CTABand";

export const metadata: Metadata = {
  title: "Our Story — Seaduced",
  description:
    "Seaduced is a plant-based intimate wellness brand made for every body, every age, every kind of love. Built on sea moss, guided by the ocean, written for real people.",
  openGraph: {
    title: "Our Story — Seaduced",
    description:
      "Plant-based intimate wellness, made from the sea and made for you. Inclusive, body-positive, earth-first.",
    type: "article",
  },
};

export default function AboutPage() {
  return (
    <main className="bg-[#AACAD1] overflow-x-hidden">
      <AboutHero />
      <OriginStory />
      <ValuesGrid />
      <WhoItsFor />
      <FounderNote />
      <PressQuote />
      <Timeline />
      <CTABand />
    </main>
  );
}
