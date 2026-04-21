"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export type FaqItem = {
  question: string;
  answer: string;
};

export function FAQ({
  items,
  title = "Frequently asked",
  eyebrow = "FAQ",
}: {
  items: FaqItem[];
  title?: string;
  eyebrow?: string;
}) {
  return (
    <section className="bg-luxe-teal noise-overlay py-20 md:py-28 relative overflow-hidden">
      <motion.div
        className="absolute -top-12 -right-12 w-56 h-56 rounded-full bg-[#FDF8F0]/40 blur-3xl pointer-events-none"
        animate={{ x: [0, 20, 0], y: [0, -12, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="relative max-w-3xl mx-auto px-6">
        <motion.span
          className="block font-mono text-xs tracking-[0.3em] uppercase text-[#263747]/60 mb-3"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {eyebrow}
        </motion.span>
        <motion.h2
          className="text-3xl md:text-4xl font-black text-[#263747] tracking-tight mb-10"
          style={{ fontFamily: "var(--font-sans)" }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {title}
        </motion.h2>

        <Accordion.Root
          type="single"
          collapsible
          className="divide-y divide-[#263747]/15 border-y border-[#263747]/15"
        >
          {items.map((item, idx) => (
            <Accordion.Item key={idx} value={`item-${idx}`}>
              <Accordion.Header>
                <Accordion.Trigger className="group flex w-full items-center justify-between gap-4 py-5 text-left text-[#263747] hover:text-[#325360] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#325360]/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#AACAD1]">
                  <span className="text-base md:text-lg font-medium tracking-tight">
                    {item.question}
                  </span>
                  <ChevronDown
                    className="w-5 h-5 shrink-0 text-[#325360] transition-transform duration-300 group-data-[state=open]:rotate-180"
                    aria-hidden
                  />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="overflow-hidden data-[state=open]:animate-[slideDown_260ms_ease-out] data-[state=closed]:animate-[slideUp_200ms_ease-in]">
                <div className="pb-5 pr-9 text-[#263747]/80 leading-relaxed text-base">
                  {item.answer}
                </div>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>

      <style jsx global>{`
        @keyframes slideDown {
          from {
            height: 0;
            opacity: 0;
          }
          to {
            height: var(--radix-accordion-content-height);
            opacity: 1;
          }
        }
        @keyframes slideUp {
          from {
            height: var(--radix-accordion-content-height);
            opacity: 1;
          }
          to {
            height: 0;
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
}
