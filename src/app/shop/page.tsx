import type { Metadata } from "next";
import { ShopIndex } from "@/components/shop/ShopIndex";

export const metadata: Metadata = {
  title: "Shop the Ritual — Seaduced",
  description:
    "Four ways to stock the 5 oz bottle. Start with a Single at $28, stock the drawer with the Ritual 3-Pack at $75, go long on the Wave 6-Pack at $140, or wrap it in the linen Gift Set at $45.",
};

export default function ShopPage() {
  return (
    <main className="min-h-screen bg-[#AACAD1] overflow-x-clip">
      <ShopIndex />
    </main>
  );
}
