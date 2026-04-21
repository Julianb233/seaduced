"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const ingredients = [
  {
    name: "Sea moss extract",
    role: "Natural carrageenan + 92 trace minerals",
    pct: "Hero",
  },
  {
    name: "Aloe leaf juice",
    role: "Water-based hydration, no residue",
    pct: "High",
  },
  {
    name: "Plant humectants",
    role: "Hold moisture where it belongs",
    pct: "Supporting",
  },
  {
    name: "Pentylene glycol",
    role: "Gentle plant-derived preservative",
    pct: "Trace",
  },
  {
    name: "Nothing else",
    role: "No parabens, petroleum, glycerin, fragrance, or dyes",
    pct: "0%",
  },
];

export function IngredientsTeaser() {
  return (
    <section className="relative py-20 md:py-28 bg-luxe-teal noise-overlay overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#AACAD1] via-[#FDF8F0]/25 to-[#AACAD1]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Left — image */}
          <motion.div
            className="relative aspect-[4/5] md:aspect-[4/5] rounded-3xl overflow-hidden border border-[#325360]/15 shadow-2xl shadow-[#263747]/15"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          >
            <Image
              src="/images/social/tile-01-ocean-seaweed.png"
              alt="Wild Atlantic sea moss in ocean water, macro"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 500px"
            />
            <div className="absolute bottom-6 left-6 right-6 bg-[#FAFBFB]/90 backdrop-blur rounded-2xl px-5 py-4">
              <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-[#325360]/70">
                Hero ingredient
              </div>
              <div
                className="text-xl md:text-2xl font-serif text-[#263747] tracking-tight mt-1"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Chondrus crispus
              </div>
              <p className="text-xs text-[#263747]/70 mt-1">
                Wild-harvested Atlantic sea moss.
              </p>
            </div>
          </motion.div>

          {/* Right — list */}
          <div>
            <motion.span
              className="font-mono text-[11px] tracking-[0.3em] uppercase text-[#325360]/70"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              What&apos;s inside
            </motion.span>
            <div className="overflow-hidden mt-2">
              <motion.h2
                className="text-3xl md:text-5xl font-serif text-[#263747] tracking-tight"
                style={{ fontFamily: "'Playfair Display', serif" }}
                initial={{ y: 80 }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
              >
                Five ingredients.
                <br />
                <span className="italic text-[#325360]">Zero hiding.</span>
              </motion.h2>
            </div>

            <motion.p
              className="mt-4 text-[#263747]/75 text-base md:text-lg max-w-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Every ingredient has a job. Every one is plant-derived. No mystery
              &ldquo;fragrance,&rdquo; no petroleum, no slip-of-the-hand additives.
            </motion.p>

            <ul className="mt-8 space-y-0 divide-y divide-[#325360]/20 border-y border-[#325360]/20">
              {ingredients.map((ing, i) => (
                <motion.li
                  key={ing.name}
                  className="py-4 flex items-start gap-5"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: 0.1 + i * 0.08,
                    ease: [0.25, 0.4, 0.25, 1],
                  }}
                >
                  <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-[#AD9952] pt-1 min-w-[60px]">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="flex-1">
                    <div className="text-[#263747] font-semibold">{ing.name}</div>
                    <div className="text-xs text-[#263747]/65 mt-0.5">{ing.role}</div>
                  </div>
                  <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-[#325360]/70 pt-1 text-right hidden sm:block">
                    {ing.pct}
                  </div>
                </motion.li>
              ))}
            </ul>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Link
                href="/ingredients"
                className="mt-8 inline-flex items-center gap-2 text-[#325360] font-medium text-sm tracking-wide border-b border-[#325360]/40 hover:border-[#325360] transition-colors group"
              >
                See the full ingredient breakdown
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
