import ProductHero from "@/components/product/ProductHero";
import IngredientHighlights from "@/components/product/IngredientHighlights";
import ProductDetails from "@/components/product/ProductDetails";
import TrustSignals from "@/components/product/TrustSignals";
import { generatePageMetadata, PAGE_SEO } from "@/lib/seo";

export const metadata = generatePageMetadata(PAGE_SEO.product);

export default function ProductPage() {
  return (
    <>
      <ProductHero />
      <IngredientHighlights />
      <ProductDetails />
      <TrustSignals />
    </>
  );
}
