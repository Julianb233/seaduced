"use client";

import { motion } from "framer-motion";
import { X } from "lucide-react";

const items = [
  {
    title: "Sell your data to third parties.",
    body: "Ever. Not to advertisers, not to data brokers, not to anyone.",
  },
  {
    title: "Share your purchase history with ad networks.",
    body: "What you bought is your business. We do not pipe it into retargeting or lookalike audiences.",
  },
  {
    title: "Email you more than you signed up for.",
    body: "If you join the list, you get the list. No surprise upsells or extra lists you did not ask for.",
  },
  {
    title: "Keep your information longer than we need it.",
    body: "We prune. When an account is dormant or a request to delete comes in, we honor it.",
  },
];

export function WhatWeNeverDo() {
  return (
    <section className="bg-[#263747] py-20 md:py-28 relative overflow-hidden">
      <motion.div
        className="absolute -left-20 top-0 w-80 h-80 rounded-full bg-[#AD9952]/8 blur-3xl pointer-events-none"
        animate={{ y: [0, 40, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="relative max-w-5xl mx-auto px-6">
        <motion.span
          className="block font-mono text-xs tracking-[0.3em] uppercase text-[#AD9952] mb-3"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          What we never do
        </motion.span>
        <motion.h2
          className="text-3xl md:text-4xl font-serif text-[#FAFBFB] tracking-tight mb-10"
          style={{ fontFamily: "'Playfair Display', serif" }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Four things we will not do with your data.
        </motion.h2>

        <ul className="grid gap-4 md:grid-cols-2">
          {items.map((item, idx) => (
            <motion.li
              key={item.title}
              className="flex gap-4 rounded-2xl bg-[#FAFBFB]/5 border border-[#FAFBFB]/10 p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: idx * 0.07 }}
            >
              <div className="shrink-0 w-9 h-9 rounded-full border-2 border-[#AD9952] flex items-center justify-center">
                <X className="w-4 h-4 text-[#AD9952]" aria-hidden />
              </div>
              <div>
                <h3 className="text-[#FAFBFB] font-semibold mb-1">
                  {item.title}
                </h3>
                <p className="text-[#FAFBFB]/70 text-sm leading-relaxed">
                  {item.body}
                </p>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
