import type { Metadata } from "next";
import { AccountView } from "@/components/shop/AccountView";

export const metadata: Metadata = {
  title: "Your Orders — Seaduced",
  description: "Review your previous Seaduced orders.",
  robots: { index: false, follow: false },
};

export default function OrdersPage() {
  return (
    <main className="min-h-screen bg-[#FDF8F0] overflow-x-clip pt-28 pb-24">
      <AccountView tab="orders" />
    </main>
  );
}
