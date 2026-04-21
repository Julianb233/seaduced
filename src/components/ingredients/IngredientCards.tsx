"use client";

import { motion } from "framer-motion";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

const INGREDIENTS = [
  {
    id: "sea-moss",
    common: "Sea Moss Extract",
    botanical: "Chondrus crispus",
    role: "Star hydrator & carrageenan source",
    source: "Wild-harvested, North Atlantic (Ireland & Nova Scotia)",
    percent: "8 – 12%",
    body: "The hero of the formula. Chondrus crispus is a red algae that naturally produces κ-carrageenan — a plant polysaccharide that behaves like a silky hydrating mesh, holding moisture against tissue without coating it. It also brings 92 of the 102 minerals the human body recognizes.",
  },
  {
    id: "aloe",
    common: "Aloe Leaf Juice",
    botanical: "Aloe barbadensis",
    role: "Soothing base & humectant",
    source: "Cold-pressed from organic inner-leaf gel, Mexico",
    percent: "20 – 28%",
    body: "Provides the calming, cooling, non-sticky base. Contains mucopolysaccharides that reinforce moisture retention and support sensitive skin. We use inner-leaf juice only — no aloin, no latex.",
  },
  {
    id: "hyaluronic",
    common: "Plant-Derived Hyaluronic Acid",
    botanical: "Saccharomyces / fermented glucose",
    role: "Deep hydration",
    source: "Fermentation-produced, pharma-grade, USA",
    percent: "0.2 – 0.5%",
    body: "A vegan, fermentation-derived hyaluronic acid that binds up to 1,000 times its weight in water. It draws and holds moisture exactly where you want it, for as long as you want it there — without the animal-sourced origin of legacy hyaluronic.",
  },
  {
    id: "vitamin-e",
    common: "Vitamin E",
    botanical: "Tocopherol (non-GMO soy)",
    role: "Antioxidant & natural preservative",
    source: "Non-GMO soy, cold-pressed, USA",
    percent: "0.1 – 0.3%",
    body: "A gentle, natural preservative and antioxidant that stabilizes the formula and supports skin-barrier integrity. Chosen instead of parabens, phenoxyethanol, or synthetic stabilizers.",
  },
  {
    id: "water",
    common: "Purified Water",
    botanical: "Aqua",
    role: "Base solvent",
    source: "Triple-filtered, USP-grade",
    percent: "60 – 70%",
    body: "Triple-filtered, USP-grade water. No fancy story here — just the clean starting point every formulation needs.",
  },
];

export function IngredientCards() {
  return (
    <section className="relative bg-luxe-cream noise-overlay py-24 md:py-32 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-14">
          <div className="overflow-hidden">
            <motion.span
              className="inline-block font-mono text-[#325360]/70 text-xs tracking-[0.3em] uppercase mb-4"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Every Ingredient Earns Its Place
            </motion.span>
          </div>
          <div className="overflow-hidden">
            <motion.h2
              className="text-4xl md:text-5xl text-[#263747] leading-[1.05] tracking-tight"
              style={{ fontFamily: "var(--font-sans)" }}
              initial={{ y: 80, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
            >
              Five ingredients. No hiding.
            </motion.h2>
          </div>
        </div>

        <Accordion.Root
          type="multiple"
          className="space-y-4"
        >
          {INGREDIENTS.map((ing, i) => (
            <motion.div
              key={ing.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: i * 0.06,
                ease: [0.25, 0.4, 0.25, 1],
              }}
            >
              <Accordion.Item
                value={ing.id}
                className="group rounded-2xl bg-[#FAFBFB] ring-1 ring-[#325360]/15 overflow-hidden shadow-sm data-[state=open]:ring-[#AD9952]/60 data-[state=open]:shadow-md transition-all"
              >
                <Accordion.Header>
                  <Accordion.Trigger className="w-full flex items-center justify-between gap-6 p-6 md:p-7 text-left hover:bg-[#AACAD1]/20 transition-colors">
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                        <h3
                          className="text-2xl md:text-3xl text-[#263747] tracking-tight"
                          style={{ fontFamily: "var(--font-sans)" }}
                        >
                          {ing.common}
                        </h3>
                        <span className="italic text-[#325360] text-sm">
                          {ing.botanical}
                        </span>
                      </div>
                      <p className="mt-1 text-sm text-[#263747]/70">
                        {ing.role}
                      </p>
                    </div>
                    <div className="flex items-center gap-4 shrink-0">
                      <span className="hidden sm:inline font-mono text-[10px] tracking-[0.2em] uppercase text-[#AD9952]">
                        {ing.percent}
                      </span>
                      <ChevronDown
                        className="w-5 h-5 text-[#325360] transition-transform duration-300 group-data-[state=open]:rotate-180"
                        aria-hidden
                      />
                    </div>
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
                  <div className="px-6 md:px-7 pb-7 pt-2 grid md:grid-cols-[minmax(0,1fr)_auto] gap-6 items-start border-t border-[#325360]/10">
                    <p className="text-[#263747]/85 leading-relaxed text-base">
                      {ing.body}
                    </p>
                    <dl className="grid grid-cols-2 md:grid-cols-1 gap-3 md:min-w-[200px] md:border-l md:border-[#325360]/15 md:pl-6">
                      <div>
                        <dt className="font-mono text-[9px] tracking-[0.25em] uppercase text-[#325360]/70">
                          Source
                        </dt>
                        <dd className="mt-1 text-sm text-[#263747]">
                          {ing.source}
                        </dd>
                      </div>
                      <div>
                        <dt className="font-mono text-[9px] tracking-[0.25em] uppercase text-[#325360]/70">
                          Formula %
                        </dt>
                        <dd className="mt-1 text-sm text-[#AD9952]">
                          {ing.percent}
                        </dd>
                      </div>
                    </dl>
                  </div>
                </Accordion.Content>
              </Accordion.Item>
            </motion.div>
          ))}
        </Accordion.Root>
      </div>
    </section>
  );
}
