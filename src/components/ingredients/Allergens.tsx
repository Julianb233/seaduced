"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const FREE_FROM = [
  "Peanut-free",
  "Tree-nut-free",
  "Gluten-free",
  "Soy protein-free",
  "Latex-free",
  "Dairy-free",
  "Egg-free",
  "Shellfish-free",
];

export function Allergens() {
  return (
    <section className="relative bg-luxe-cream noise-overlay py-24 md:py-32 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] gap-12 md:gap-16 items-start">
        <div>
          <div className="overflow-hidden">
            <motion.span
              className="inline-block font-mono text-[#325360]/70 text-xs tracking-[0.3em] uppercase mb-4"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Allergens · Our Take
            </motion.span>
          </div>
          <div className="overflow-hidden">
            <motion.h2
              className="text-4xl md:text-5xl text-[#263747] leading-[1.05] tracking-tight mb-6"
              style={{ fontFamily: "var(--font-sans)" }}
              initial={{ y: 80, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
            >
              Common allergens, answered plainly.
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-5 text-[#263747]/85 text-base md:text-lg leading-relaxed"
          >
            <p>
              Intimate wellness products sit at the top of the list for
              anything you are already sensitive to elsewhere. Here is where we
              stand on the questions we hear most.
            </p>
            <p>
              Our Vitamin E is derived from non-GMO soy oil. The refining
              process removes the soy protein that typically triggers
              allergies, but if you are severely soy-reactive, please patch-
              test first.
            </p>
            <p className="text-[#325360] font-medium">
              If you are unsure about any ingredient, email{" "}
              <a
                href="mailto:hello@seaducedproducts.com"
                className="underline decoration-[#AD9952] underline-offset-4"
              >
                hello@seaducedproducts.com
              </a>{" "}
              — we will send you the full spec sheet.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="rounded-2xl bg-[#AACAD1]/40 ring-1 ring-[#325360]/20 p-7 md:p-9"
        >
          <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-[#325360]/80 mb-5">
            Free-From Panel
          </div>
          <ul className="grid grid-cols-2 gap-y-4 gap-x-5">
            {FREE_FROM.map((f, i) => (
              <motion.li
                key={f}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.05 }}
                className="flex items-center gap-3 text-[#263747]"
              >
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#325360] shrink-0">
                  <Check className="w-3.5 h-3.5 text-[#FAFBFB]" strokeWidth={3} />
                </span>
                <span className="text-sm font-medium">{f}</span>
              </motion.li>
            ))}
          </ul>
          <div className="mt-7 pt-5 border-t border-[#325360]/20 text-xs text-[#263747]/70 leading-relaxed">
            Manufactured in a facility that does not handle tree nuts, peanuts,
            shellfish, dairy, eggs, or latex. Good Manufacturing Practice (GMP)
            certified.
          </div>
        </motion.div>
      </div>
    </section>
  );
}
