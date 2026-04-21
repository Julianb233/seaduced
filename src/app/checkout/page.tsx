import type { Metadata } from "next";
import { CheckoutFlow } from "@/components/shop/CheckoutFlow";

export const metadata: Metadata = {
  title: "Checkout — Seaduced",
  description: "Secure, discreet checkout. Your ritual, on the way.",
};

export default function CheckoutPage() {
  return (
    <main className="min-h-screen bg-[#FDF8F0] overflow-x-clip pt-28 pb-24">
      <CheckoutFlow />
    </main>
  );
}
