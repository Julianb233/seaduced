import { Hero } from "@/components/sections/Hero";
import { ProductShowcase } from "@/components/sections/ProductShowcase";
import BenefitsBento from "@/components/sections/BenefitsBento";
import { Activations } from "@/components/sections/Activations";
import { Social } from "@/components/sections/Social";
import { generatePageMetadata, PAGE_SEO } from "@/lib/seo";

export const metadata = generatePageMetadata(PAGE_SEO.home);

export default function Home() {
  return (
    <>
      <Hero />
      <ProductShowcase />
      <BenefitsBento />
      <Activations />
      <Social />
    </>
  );
}
