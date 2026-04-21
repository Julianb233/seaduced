"use client";

import { motion } from "framer-motion";
import { Gift } from "lucide-react";

export function CTABand() {
  return (
    <section className="relative py-20 md:py-28 bg-[#FDF8F0] overflow-hidden">
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[80vw] rounded-full bg-[#AACAD1]/50 blur-3xl"
        animate={{ scale: [1, 1.05, 1], opacity: [0.4, 0.55, 0.4] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.span
          className="inline-block font-mono text-[11px] tracking-[0.3em] uppercase text-[#AD9952]"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Feel Seaduced
        </motion.span>

        <div className="overflow-hidden mt-4">
          <motion.h2
            className="text-4xl md:text-6xl lg:text-7xl font-serif text-[#263747] tracking-tight leading-[1.02]"
            style={{ fontFamily: "'Playfair Display', serif" }}
            initial={{ y: 80 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          >
            Ready to feel <span className="italic text-[#325360]">Seaduced</span>?
          </motion.h2>
        </div>

        <motion.p
          className="mt-5 text-base md:text-lg text-[#263747]/70 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          One 5 oz bottle. 92 minerals. No mystery ingredients.
          Made for every body, every chapter.
        </motion.p>

        <motion.div
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.35 }}
        >
          <a
            href="#price"
            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#AD9952] text-[#FAFBFB] font-semibold text-sm tracking-wide shadow-lg shadow-[#AD9952]/25 hover:shadow-xl hover:shadow-[#AD9952]/35 transition-shadow overflow-hidden"
          >
            <span className="relative">Add to cart &mdash; $28</span>
          </a>
          <a
            href="#price"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-full border border-[#325360]/50 text-[#325360] font-medium text-sm tracking-wide hover:bg-[#325360] hover:text-[#FAFBFB] transition-colors"
          >
            <Gift className="w-4 h-4" />
            Send as a gift
          </a>
        </motion.div>

        <motion.div
          className="mt-8 font-mono text-[10px] tracking-[0.3em] uppercase text-[#263747]/50"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Free US shipping over $50 &mdash; discreet packaging
        </motion.div>
      </div>
    </section>
  );
}
