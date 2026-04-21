import type { Metadata } from "next";
import { SubpageHeroTeal } from "@/components/shared/SubpageHeroTeal";
import { InfoTable } from "@/components/shared/InfoTable";
import { Timeline } from "@/components/shared/Timeline";
import { ReturnsPolicy } from "@/components/shipping/ReturnsPolicy";
import { FAQ } from "@/components/shared/FAQ";
import { CTABand } from "@/components/shared/CTABand";

export const metadata: Metadata = {
  title: "Shipping & Returns — Seaduced",
  description:
    "Discreet packaging, estimated delivery windows, and an honest returns policy for Seaduced orders.",
};

// Note: carrier partners intentionally not named here. Only delivery
// windows are promised. Sean-style compliance guardrails do not apply
// to Seaduced, but keeping specifics vague preserves flexibility.
const shippingRows = [
  {
    label: "US Standard",
    value: "3 to 5 business days",
    note: "Ships from our fulfillment partner in Southern California.",
  },
  {
    label: "Packaging",
    value: "Plain exterior box",
    note: "No Seaduced branding on the outside, no ingredient list, no clues.",
  },
  {
    label: "Tracking",
    value: "Emailed when your order ships",
    note: "Every order gets a tracking link — no need to ask.",
  },
  {
    label: "International",
    value: "On the roadmap",
    note: "Join the newsletter and we will tell you the day we turn it on.",
  },
];

const timelineNodes = [
  {
    label: "Step 1",
    title: "Order confirmed",
    description:
      "You get a confirmation email within a few minutes of checkout with your order number.",
    duration: "Minutes",
  },
  {
    label: "Step 2",
    title: "Packed with care",
    description:
      "Our fulfillment team prepares your order. Plain outer box, no branded labels, no Seaduced wordmark on the exterior.",
    duration: "1 to 2 business days",
  },
  {
    label: "Step 3",
    title: "On the way",
    description:
      "You get a shipment email with a tracking link so you know exactly when to expect it.",
    duration: "Typically 3 to 5 business days in transit",
  },
  {
    label: "Step 4",
    title: "At your door",
    description:
      "Discreet delivery. If anything arrives damaged, snap a photo and email hello@seaducedproducts.com — we will make it right.",
    duration: "Delivered",
  },
];

const faqs = [
  {
    question: "Is my order really packed discreetly?",
    answer:
      "Yes. The outside of every box is plain — no Seaduced branding, no product name, no ingredient list. The return address is our fulfillment partner, not Seaduced. Whoever picks up your mail will have no idea what is inside.",
  },
  {
    question: "What if my package is lost or arrives damaged?",
    answer:
      "Email hello@seaducedproducts.com with your order number and a photo (for damage). We will send a replacement or refund you — your pick.",
  },
  {
    question: "Do you ship outside the US?",
    answer:
      "Not yet. International shipping is on our roadmap. Join the newsletter and we will announce it the day it is live.",
  },
  {
    question: "Can I change or cancel my order?",
    answer:
      "If you catch it within an hour of checkout, email us right away and we will do our best to intercept it before it ships. After that, we follow the standard returns policy below.",
  },
];

export default function ShippingPage() {
  return (
    <>
      <SubpageHeroTeal
        eyebrow="Shipping & Returns"
        title="Discreet. Honest."
        subtitle="How your Seaduced order travels, and what happens if something is not right."
      />
      <InfoTable
        eyebrow="Shipping at a glance"
        title="Here is how it works."
        rows={shippingRows}
        caption="Estimated delivery windows, not promises. Weather, holidays, and the occasional fulfillment hiccup can affect timing — if your order is running late, email us and we will check on it."
      />
      <Timeline
        eyebrow="Your order journey"
        title="From click to doorstep, in four steps."
        nodes={timelineNodes}
        background="cream"
      />
      <ReturnsPolicy />
      <FAQ
        items={faqs}
        eyebrow="Shipping questions"
        title="Common shipping questions."
      />
      <CTABand
        eyebrow="Still have a question?"
        title="We would love to hear from you."
        subtitle="Shipping, returns, stuck packages — email us and a real person will reply."
        primary={{ label: "Contact us", href: "/contact" }}
        secondary={{ label: "Back to shop", href: "/product" }}
      />
    </>
  );
}
