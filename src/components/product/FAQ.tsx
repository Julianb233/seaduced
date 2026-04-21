"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";

const faqs = [
  {
    q: "Is Seaduced condom-safe?",
    a: "Yes. Our formulation is water-based, which means it is compatible with latex, polyisoprene, and polyurethane condoms. It is also safe to use with silicone and most body-safe toys.",
  },
  {
    q: "Will it stain sheets or clothing?",
    a: "Seaduced is water-based and clear. It won't stain fabrics the way oil-based or pigmented products can. If any makes its way onto sheets, a standard wash removes it easily.",
  },
  {
    q: "Does it have a scent?",
    a: "No. Seaduced is fragrance-free. You may notice a very faint, clean note from the sea moss itself — never perfume or masking agents.",
  },
  {
    q: "Is it fully vegan?",
    a: "Yes. Every ingredient is plant-derived or mineral in origin. No animal-derived ingredients, no testing on animals, ever.",
  },
  {
    q: "Where is Seaduced made?",
    a: "Formulated and bottled in the United States, in small batches, by a woman-founded team. Our sea moss is sourced from regulated Atlantic harvests.",
  },
  {
    q: "Is it safe for sensitive skin?",
    a: "Seaduced is pH-balanced (3.8–4.5) to match the body's natural range, and free of common irritants like parabens, petroleum, glycerin, fragrance, and dyes. As with any personal care product, if you have a known allergy or a diagnosed sensitivity, consult your healthcare provider before use.",
  },
];

export function FAQ() {
  return (
    <section className="relative py-20 md:py-28 bg-[#AACAD1] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#AACAD1] via-[#FDF8F0]/20 to-[#AACAD1]" />

      <div className="relative z-10 max-w-3xl mx-auto px-6">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-mono text-[11px] tracking-[0.3em] uppercase text-[#325360]/70">
            FAQ
          </span>
          <div className="overflow-hidden mt-2">
            <motion.h2
              className="text-3xl md:text-5xl font-serif text-[#263747] tracking-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
              initial={{ y: 80 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
            >
              The honest answers.
            </motion.h2>
          </div>
        </motion.div>

        <Accordion.Root type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={faq.q}
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
                value={`item-${i}`}
                className="bg-[#FAFBFB] border border-[#325360]/15 rounded-2xl overflow-hidden data-[state=open]:border-[#325360]/40 transition-colors"
              >
                <Accordion.Header>
                  <Accordion.Trigger className="group w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-[#AACAD1]/10 transition-colors">
                    <span className="font-serif text-base md:text-lg text-[#263747] tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                      {faq.q}
                    </span>
                    <span className="flex-shrink-0 w-8 h-8 rounded-full border border-[#325360]/30 text-[#325360] flex items-center justify-center group-data-[state=open]:rotate-45 group-data-[state=open]:bg-[#325360] group-data-[state=open]:text-[#FAFBFB] transition-all">
                      <Plus className="w-4 h-4" />
                    </span>
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content
                  className="overflow-hidden data-[state=open]:animate-[acc-open_240ms_ease-out] data-[state=closed]:animate-[acc-close_200ms_ease-in]"
                >
                  <div className="px-6 pb-6 text-sm md:text-base text-[#263747]/75 leading-relaxed">
                    {faq.a}
                  </div>
                </Accordion.Content>
              </Accordion.Item>
            </motion.div>
          ))}
        </Accordion.Root>
      </div>

      {/* local keyframes for smooth accordion motion */}
      <style jsx global>{`
        @keyframes acc-open {
          from { height: 0; opacity: 0; }
          to { height: var(--radix-accordion-content-height); opacity: 1; }
        }
        @keyframes acc-close {
          from { height: var(--radix-accordion-content-height); opacity: 1; }
          to { height: 0; opacity: 0; }
        }
      `}</style>
    </section>
  );
}
