import type { Metadata } from "next";
import { CartView } from "@/components/shop/CartView";

export const metadata: Metadata = {
  title: "Your Cart — Seaduced",
  description: "Review your Seaduced ritual before checkout.",
};

export default function CartPage() {
  return (
    <main className="min-h-screen bg-[#AACAD1] overflow-x-clip pt-32 pb-24">
      <CartView />
    </main>
  );
}
