"use client";

import { motion } from "framer-motion";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

const INCI_LIST = [
  "Aqua (Purified Water)",
  "Aloe Barbadensis Leaf Juice",
  "Chondrus Crispus (Irish Moss) Extract",
  "Sodium Hyaluronate (Plant-Derived)",
  "Tocopherol (Non-GMO Vitamin E)",
  "Glyceryl Caprylate",
  "Citric Acid",
  "Potassium Sorbate",
];

export function FullLabel() {
  return (
    <section className="relative bg-luxe-cream noise-overlay py-24 md:py-32 overflow-hidden">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-10">
          <div className="overflow-hidden">
            <motion.span
              className="inline-block font-mono text-[#325360]/70 text-xs tracking-[0.3em] uppercase mb-4"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Full Label · INCI
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
              The whole label, for the curious.
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-4 text-[#263747]/75"
          >
            For regulators, pharmacists, and anyone who enjoys a long label.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion.Root type="single" collapsible>
            <Accordion.Item
              value="inci"
              className="group rounded-2xl bg-[#FAFBFB] ring-1 ring-[#325360]/15 overflow-hidden shadow-sm"
            >
              <Accordion.Header>
                <Accordion.Trigger className="w-full flex items-center justify-between gap-6 p-6 md:p-7 text-left hover:bg-[#AACAD1]/20 transition-colors">
                  <div>
                    <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-[#AD9952] mb-1">
                      INCI · Ingredients in Descending Order
                    </div>
                    <h3
                      className="text-xl text-[#263747] tracking-tight"
                      style={{ fontFamily: "var(--font-sans)" }}
                    >
                      View the full label
                    </h3>
                  </div>
                  <ChevronDown
                    className="w-5 h-5 text-[#325360] transition-transform duration-300 group-data-[state=open]:rotate-180 shrink-0"
                    aria-hidden
                  />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
                <div className="px-6 md:px-7 pb-7 pt-2 border-t border-[#325360]/10">
                  <ol className="space-y-2.5 mt-4">
                    {INCI_LIST.map((ing, i) => (
                      <li
                        key={ing}
                        className="flex items-start gap-4 text-[#263747]"
                      >
                        <span className="font-mono text-[10px] text-[#AD9952] tracking-wider mt-1 shrink-0 w-6">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="text-sm md:text-base">{ing}</span>
                      </li>
                    ))}
                  </ol>
                  <div className="mt-6 pt-5 border-t border-[#325360]/10 text-xs text-[#263747]/65 leading-relaxed">
                    Full compliance with FDA cosmetic labeling rules (21 CFR
                    701). For the most current label including batch-specific
                    preservative levels, see the printed label on the bottle
                    base.
                  </div>
                </div>
              </Accordion.Content>
            </Accordion.Item>
          </Accordion.Root>
        </motion.div>
      </div>
    </section>
  );
}
