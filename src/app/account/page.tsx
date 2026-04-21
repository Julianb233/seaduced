import type { Metadata } from "next";
import { AccountView } from "@/components/shop/AccountView";

export const metadata: Metadata = {
  title: "Your Account — Seaduced",
  description: "Manage your Seaduced orders, addresses, and preferences.",
  robots: { index: false, follow: false },
};

export default function AccountPage() {
  return (
    <main className="min-h-screen bg-[#FDF8F0] overflow-x-clip pt-28 pb-24">
      <AccountView tab="overview" />
    </main>
  );
}
