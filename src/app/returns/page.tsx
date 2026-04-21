import type { Metadata } from "next";
import { ReturnsForm } from "@/components/shop/ReturnsForm";

export const metadata: Metadata = {
  title: "Shipping & Returns — Seaduced",
  description:
    "30-day satisfaction guarantee on unopened bottles. Here's how to initiate a return or report damaged-in-transit items.",
};

export default function ReturnsPage() {
  return (
    <main className="min-h-screen bg-[#FDF8F0] overflow-x-clip pt-28 pb-24">
      <ReturnsForm />
    </main>
  );
}
