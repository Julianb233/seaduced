import type { Metadata } from "next";
import { SubpageHero } from "@/components/layout/SubpageHero";
import { SubpageSection } from "@/components/layout/SubpageSection";

export const metadata: Metadata = {
  title: "Terms of Service — Seaduced",
  description:
    "The rules of using Seaduced — short, readable, fair.",
};

export default function TermsPage() {
  return (
    <>
      <SubpageHero
        eyebrow="Terms"
        title="The basics, readably."
        subtitle="No 30-page legalese. Here&apos;s what buying from Seaduced actually means."
      />
      <SubpageSection title="Using this site">
        <p>
          By using seaducedproducts.com, you agree to use it for its intended
          purpose — learning about and buying Seaduced products. Don&apos;t
          attempt to scrape, abuse, reverse-engineer, or misuse the site.
        </p>
      </SubpageSection>
      <SubpageSection title="Product use" background="charcoal">
        <p>
          Seaduced is a personal lubricant intended for adult use. It is not a
          medical device, contraceptive, or treatment for any medical
          condition. Discontinue use if irritation occurs. Consult a healthcare
          provider if you have any concerns.
        </p>
        <p className="mt-4 opacity-80">
          Every body is different. What works for one person may not work for
          another. We encourage patch-testing on a small skin area before first
          full use.
        </p>
      </SubpageSection>
      <SubpageSection title="Orders & payments">
        <p>
          We accept major credit cards, Apple Pay, Google Pay, and Stripe Link.
          Orders are charged at checkout and confirmed via email. We reserve
          the right to cancel any order we believe is fraudulent — refunded
          immediately and in full.
        </p>
      </SubpageSection>
      <SubpageSection title="Limitation of liability">
        <p className="opacity-80">
          Seaduced is offered &quot;as is.&quot; We stand behind our ingredients
          and craftsmanship, but we can&apos;t guarantee specific results for
          any individual. Our total liability to you for any claim is limited
          to the amount you paid for the product.
        </p>
        <p className="mt-4 opacity-70 text-sm">
          Governing law: California. Last updated: 2026-04-21.
        </p>
      </SubpageSection>
    </>
  );
}
