"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Check, Gift } from "lucide-react";

const included = [
  "5 oz / 148 ml pump bottle",
  "Sea moss-infused formulation",
  "Ships in discreet, unbranded packaging",
  "Flat-rate shipping in the US",
  "30-day satisfaction guarantee on unopened bottles",
];

export function PriceBreak() {
  return (
    <section id="price" className="relative py-20 md:py-28 bg-luxe-teal noise-overlay overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#AACAD1] via-[#FDF8F0]/30 to-[#AACAD1]" />
      <motion.div
        className="absolute top-16 right-[10%] w-72 h-72 rounded-full bg-[#AD9952]/15 blur-3xl"
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-mono text-[11px] tracking-[0.3em] uppercase text-[#325360]/70">
            The bottle
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
              One bottle. <span className="italic text-[#325360]">Everything inside.</span>
            </motion.h2>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          whileHover={{ y: -6 }}
          className="relative bg-[#FAFBFB] rounded-[2rem] border border-[#325360]/10 shadow-2xl shadow-[#263747]/15 overflow-hidden"
        >
          <div className="grid md:grid-cols-[1fr,1.2fr] gap-0">
            {/* Left — bottle */}
            <div className="relative aspect-square md:aspect-auto bg-gradient-to-br from-[#AACAD1]/40 via-[#FDF8F0]/60 to-[#6793A0]/30 p-8 md:p-10 flex items-center justify-center">
              <div className="relative w-full h-full max-w-[320px] mx-auto">
                <Image
                  src="/images/hero-bottle.png"
                  alt="Seaduced 5 oz bottle"
                  fill
                  className="object-contain drop-shadow-[0_30px_40px_rgba(38,55,71,0.2)]"
                  sizes="(max-width: 768px) 80vw, 400px"
                />
              </div>
            </div>

            {/* Right — details */}
            <div className="p-8 md:p-12">
              <div className="flex items-center gap-3 font-mono text-[10px] tracking-[0.3em] uppercase text-[#AD9952]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#AD9952]" />
                Signature edition
              </div>
              <h3
                className="mt-3 text-3xl md:text-4xl font-serif text-[#263747] tracking-tight"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Naturally Intimate
              </h3>
              <p className="mt-2 text-sm text-[#263747]/65">
                5 oz &bull; Sea moss infused &bull; pH balanced
              </p>

              <div className="flex items-baseline gap-3 mt-6">
                <span
                  className="text-5xl md:text-6xl font-serif text-[#263747] tracking-tight"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  $28
                </span>
                <span className="font-mono text-xs tracking-[0.25em] uppercase text-[#263747]/50">
                  USD &bull; single bottle
                </span>
              </div>

              <ul className="mt-6 space-y-2.5">
                {included.map((item, i) => (
                  <motion.li
                    key={item}
                    className="flex items-start gap-3 text-sm text-[#263747]/80"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 + i * 0.07 }}
                  >
                    <span className="w-5 h-5 rounded-full bg-[#6793A0]/20 text-[#325360] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3" strokeWidth={3} />
                    </span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative flex-1 inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-[#AD9952] text-[#FAFBFB] font-semibold text-sm tracking-wide shadow-lg shadow-[#AD9952]/25 hover:shadow-xl hover:shadow-[#AD9952]/35 transition-shadow overflow-hidden"
                >
                  <motion.span
                    className="absolute inset-0 bg-white/15"
                    initial={{ x: "-110%" }}
                    whileHover={{ x: "110%" }}
                    transition={{ duration: 0.6 }}
                  />
                  <span className="relative">Add to cart &mdash; $28</span>
                </motion.button>
                <button className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full border border-[#325360]/40 text-[#325360] font-medium text-sm tracking-wide hover:bg-[#325360] hover:text-[#FAFBFB] transition-colors">
                  <Gift className="w-4 h-4" />
                  Send as a gift
                </button>
              </div>

              <p className="mt-4 text-xs text-[#263747]/55 font-mono">
                Ships in 2&#8209;3 business days. Free US shipping over $50.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
