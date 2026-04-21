import type { Metadata } from "next";
import { SubpageHeroTeal } from "@/components/shared/SubpageHeroTeal";
import { ThreeCards } from "@/components/contact/ThreeCards";
import { ContactForm } from "@/components/contact/ContactForm";
import { FAQ } from "@/components/shared/FAQ";
import { SocialStrip } from "@/components/contact/SocialStrip";
import { CTABand } from "@/components/shared/CTABand";

export const metadata: Metadata = {
  title: "Contact — Seaduced",
  description:
    "Reach out to Seaduced — general questions, press, or retail and wholesale partnerships. We read every email.",
};

const faqs = [
  {
    question: "When will I hear back?",
    answer:
      "Usually within one business day. Press and wholesale inquiries sometimes take an extra day while we loop in the right person.",
  },
  {
    question: "Which email should I use?",
    answer:
      "General questions go to hello@. Press, podcasts, and creator collabs go to press@. Retail and wholesale inquiries go to wholesale@. All three land with a real human on our team.",
  },
  {
    question: "Do you do affiliate programs or influencer partnerships?",
    answer:
      "We are slowly building a creator program. Email press@seaducedproducts.com with your platform, audience, and what you love writing about — we review each request personally.",
  },
  {
    question: "I have a wholesale or stockist question — what do you need?",
    answer:
      "Tell us about your store (location, vibe, existing brands you carry) and we will send back our wholesale deck with pricing tiers and minimums.",
  },
];

export default function ContactPage() {
  return (
    <>
      <SubpageHeroTeal
        eyebrow="Contact"
        title="Say hello."
        subtitle="Press, partnerships, product questions, or just a hi — we read everything."
      />
      <ThreeCards />
      <ContactForm />
      <FAQ items={faqs} eyebrow="Questions" title="Common questions about reaching us." />
      <SocialStrip />
      <CTABand
        eyebrow="One more thing"
        title="Prefer to browse first?"
        subtitle="Take a look at the bottle, the science, and the ingredients."
        primary={{ label: "Meet the bottle", href: "/product" }}
        secondary={{ label: "Read the science", href: "/science" }}
      />
    </>
  );
}
