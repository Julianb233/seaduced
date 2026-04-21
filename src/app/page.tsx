import { Hero } from "@/components/sections/Hero";
import { ParallaxSplash } from "@/components/sections/ParallaxSplash";
import { ProductShowcase } from "@/components/sections/ProductShowcase";
import { BenefitsBento } from "@/components/sections/BenefitsBento";
import { Activations } from "@/components/sections/Activations";
import { Social } from "@/components/sections/Social";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <ParallaxSplash />
      <ProductShowcase />
      <BenefitsBento />
      <Activations />
      <Social />
    </main>
  );
}
