"use client";

import { motion } from "framer-motion";
import { X } from "lucide-react";

const BANNED = [
  {
    name: "Petroleum",
    body: "No mineral oil, no petrolatum. These coat tissue and can trap bacteria.",
  },
  {
    name: "Parabens",
    body: "No methyl-, ethyl-, propyl-, or butylparaben. Period.",
  },
  {
    name: "Glycerin",
    body: "Skipped because it can feed yeast overgrowth for people who are prone.",
  },
  {
    name: "Fragrance",
    body: "No synthetic fragrance, no essential oils. Zero irritant load.",
  },
  {
    name: "Dyes",
    body: "No colorants. What you see in the bottle is the formula itself.",
  },
  {
    name: "Animal Products",
    body: "Fully vegan. No animal-derived HA, no beeswax, no testing on animals.",
  },
];

export function WhatNotInIt() {
  return (
    <section className="bg-luxe-deep noise-overlay text-[#263747] py-24 md:py-32 relative overflow-hidden">
            <div className="absolute -top-32 -right-20 w-[32rem] h-[32rem] rounded-full bg-[#6793A0]/22 blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="overflow-hidden">
            <motion.span
              className="inline-block font-mono text-[#AD9952] text-xs tracking-[0.3em] uppercase mb-4"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Not In The Bottle
            </motion.span>
          </div>
          <div className="overflow-hidden">
            <motion.h2
              className="text-4xl md:text-6xl leading-[1.05] tracking-tight max-w-3xl mx-auto"
              style={{ fontFamily: "var(--font-sans)" }}
              initial={{ y: 80, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
            >
              Six things you will never find inside.
            </motion.h2>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {BANNED.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: i * 0.07,
                ease: [0.25, 0.4, 0.25, 1],
              }}
              whileHover={{ y: -4 }}
              className="rounded-xl bg-white/55 border border-white/65 backdrop-blur-md shadow-md p-6 md:p-7 backdrop-blur-sm hover:border-[#AD9952]/50 transition-colors"
            >
              <div className="relative mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#AD9952]/15 ring-1 ring-[#AD9952]/40">
                <X className="w-6 h-6 text-[#AD9952]" strokeWidth={2.5} />
              </div>
              <h3
                className="text-2xl tracking-tight mb-2"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                {item.name}
              </h3>
              <p className="text-sm text-[#263747]/75 leading-relaxed">
                {item.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
