"use client";

import { motion } from "framer-motion";
import * as Tabs from "@radix-ui/react-tabs";
import { fadeUp, viewportOnce, easeSmooth } from "@/lib/motion";

const tabs = [
  {
    value: "details",
    label: "Details",
    content: {
      heading: "Product Details",
      items: [
        { label: "Size", value: "5 fl oz (148 mL)" },
        { label: "Base", value: "Water-based" },
        {
          label: "Key Ingredient",
          value: "Organic Irish Sea Moss (Chondrus crispus)",
        },
        { label: "pH Level", value: "3.8 - 4.5 (body-matched)" },
        { label: "Shelf Life", value: "24 months unopened" },
        { label: "Compatibility", value: "Latex & polyisoprene safe" },
      ],
    },
  },
  {
    value: "ingredients",
    label: "Ingredients",
    content: {
      heading: "Full Ingredient List",
      items: [
        {
          label: "Primary",
          value: "Purified Water, Chondrus Crispus (Sea Moss) Extract",
        },
        {
          label: "Botanicals",
          value:
            "Aloe Barbadensis Leaf Juice, Chamomilla Recutita Extract",
        },
        {
          label: "Humectants",
          value: "Hyaluronic Acid, Vegetable Glycerin",
        },
        {
          label: "Preservative",
          value: "Phenoxyethanol (minimal, paraben-free)",
        },
        { label: "pH Adjuster", value: "Citric Acid" },
      ],
    },
  },
  {
    value: "usage",
    label: "How to Use",
    content: {
      heading: "Directions",
      items: [
        {
          label: "Step 1",
          value: "Apply desired amount to intimate areas",
        },
        {
          label: "Step 2",
          value:
            "Reapply as needed - water-based formula washes off easily",
        },
        {
          label: "Tip",
          value: "Store in a cool, dry place. Shake gently before use.",
        },
        {
          label: "Safety",
          value:
            "For external and intimate use only. Discontinue if irritation occurs.",
        },
      ],
    },
  },
  {
    value: "shipping",
    label: "Shipping",
    content: {
      heading: "Shipping & Returns",
      items: [
        {
          label: "Processing",
          value: "Orders ship within 1-2 business days",
        },
        {
          label: "Delivery",
          value: "Standard shipping 3-7 business days (US)",
        },
        {
          label: "Packaging",
          value:
            "Ships in plain, unmarked packaging for your privacy",
        },
        {
          label: "Returns",
          value: "30-day satisfaction guarantee on unopened products",
        },
      ],
    },
  },
];

export default function ProductDetails() {
  return (
    <section className="relative py-20 sm:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#FDF8F0] via-[#FDF8F0] to-[#f5ede0]" />

      <div className="relative z-10 mx-auto max-w-4xl px-6">
        <motion.div
          className="text-center mb-10"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <span className="inline-block font-mono text-[10px] font-semibold uppercase tracking-[0.3em] text-[#C5A55A]">
            Specifications
          </span>
          <h2 className="mt-2 font-[var(--font-playfair)] text-3xl font-extrabold tracking-tight text-[#1E1E2E] md:text-5xl">
            Product Details
          </h2>
          <motion.div
            className="mx-auto mt-4 h-[2px] w-12 rounded-full bg-[#C5A55A]"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={viewportOnce}
            transition={{ duration: 0.6, delay: 0.3, ease: easeSmooth }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.5, ease: easeSmooth, delay: 0.2 }}
        >
          <Tabs.Root defaultValue="details" className="w-full">
            <Tabs.List className="flex gap-1 rounded-xl bg-[#1E1E2E]/5 p-1 mb-6">
              {tabs.map((tab) => (
                <Tabs.Trigger
                  key={tab.value}
                  value={tab.value}
                  className="flex-1 rounded-lg px-3 py-2.5 font-mono text-xs font-semibold uppercase tracking-wider text-[#1E1E2E]/50 transition-all duration-200 data-[state=active]:bg-[#1E1E2E] data-[state=active]:text-white data-[state=active]:shadow-md hover:text-[#1E1E2E]/80"
                >
                  {tab.label}
                </Tabs.Trigger>
              ))}
            </Tabs.List>

            {tabs.map((tab) => (
              <Tabs.Content
                key={tab.value}
                value={tab.value}
                className="rounded-2xl border border-[#1E1E2E]/10 bg-white p-6 shadow-sm focus:outline-none"
              >
                <h3 className="mb-4 text-lg font-bold text-[#1E1E2E]">
                  {tab.content.heading}
                </h3>
                <dl className="space-y-3">
                  {tab.content.items.map((item) => (
                    <div
                      key={item.label}
                      className="flex flex-col gap-0.5 border-b border-[#1E1E2E]/5 pb-3 last:border-0 sm:flex-row sm:gap-4"
                    >
                      <dt className="w-32 shrink-0 font-mono text-xs font-semibold uppercase tracking-wider text-[#C5A55A]">
                        {item.label}
                      </dt>
                      <dd className="text-sm leading-relaxed text-[#1E1E2E]/70">
                        {item.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </Tabs.Content>
            ))}
          </Tabs.Root>
        </motion.div>
      </div>
    </section>
  );
}
