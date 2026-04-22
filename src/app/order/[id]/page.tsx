import type { Metadata } from "next";
import { OrderConfirmation } from "@/components/shop/OrderConfirmation";

export const metadata: Metadata = {
  title: "Order Confirmation — Seaduced",
  description: "Thank you. Your Seaduced order is on the way.",
  robots: { index: false, follow: false },
};

export default async function OrderPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <main className="min-h-screen bg-[#FDF8F0] overflow-x-clip pt-28 pb-24">
      <OrderConfirmation orderId={id} />
    </main>
  );
}
