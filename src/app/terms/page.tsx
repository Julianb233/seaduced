import type { Metadata } from "next";
import { SubpageHeroTeal } from "@/components/shared/SubpageHeroTeal";
import { SiteUse } from "@/components/terms/SiteUse";
import { ProductUse } from "@/components/terms/ProductUse";
import { OrdersPayments } from "@/components/terms/OrdersPayments";
import { LimitationOfLiability } from "@/components/terms/LimitationOfLiability";
import { LastUpdatedTag } from "@/components/shared/LastUpdatedTag";

export const metadata: Metadata = {
  title: "Terms of Service — Seaduced",
  description:
    "The rules of using Seaduced — short, readable, fair. Product use, orders, payments, and limitation of liability.",
};

// TODO: Gina's lawyer to review before public launch. This is a plain-English
// draft that captures intent. California governing law is intentional;
// specific arbitration or class-action waiver language (if desired) should
// be added by counsel.
export default function TermsPage() {
  return (
    <>
      <SubpageHeroTeal
        eyebrow="Terms"
        title="The basics, readably."
        subtitle="No 30-page legalese. Here is what buying from Seaduced actually means."
      />
      <SiteUse />
      <ProductUse />
      <OrdersPayments />
      <LimitationOfLiability />
      <LastUpdatedTag
        date="April 21, 2026"
        governingLaw="California, USA"
        note="Questions about these terms? Email hello@seaducedproducts.com."
      />
    </>
  );
}
