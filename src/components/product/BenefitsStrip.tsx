"use client";

import { motion } from "framer-motion";
import { Gem, Droplets, Leaf, Waves } from "lucide-react";

const pills = [
  {
    icon: Gem,
    stat: "92",
    label: "Essential minerals",
    note: "Sourced from whole-food sea moss.",
    accent: "#AD9952",
  },
  {
    icon: Droplets,
    stat: "3.8–4.5",
    label: "pH balanced",
    note: "Formulated to match the body's own range.",
    accent: "#6793A0",
  },
  {
    icon: Leaf,
    stat: "100%",
    label: "Plant-based",
    note: "No petroleum, parabens, or glycerin.",
    accent: "#2F4E3D",
  },
  {
    icon: Waves,
    stat: "Wild",
    label: "Sea moss infused",
    note: "Chondrus crispus, Atlantic harvest.",
    accent: "#325360",
  },
];

export function BenefitsStrip() {
  return (
    <section className="relative py-14 md:py-20 bg-luxe-cream noise-overlay overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-mono text-[11px] tracking-[0.3em] uppercase text-[#325360]/70">
            What you get
          </span>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {pills.map((pill, i) => {
            const Icon = pill.icon;
            return (
              <motion.div
                key={pill.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.1,
                  ease: [0.25, 0.4, 0.25, 1],
                }}
                whileHover={{ y: -4 }}
                className="group relative bg-[#FAFBFB] rounded-2xl border border-[#325360]/10 p-6 overflow-hidden"
              >
                <div
                  className="absolute -top-16 -right-16 w-32 h-32 rounded-full opacity-0 group-hover:opacity-20 blur-2xl transition-opacity"
                  style={{ backgroundColor: pill.accent }}
                />
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${pill.accent}18` }}
                >
                  <Icon className="w-5 h-5" style={{ color: pill.accent }} />
                </div>
                <div
                  className="text-3xl md:text-4xl font-black tracking-tight text-[#263747]"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  {pill.stat}
                </div>
                <div className="mt-1 text-sm font-semibold text-[#263747]">
                  {pill.label}
                </div>
                <p className="mt-2 text-xs text-[#263747]/60 font-mono leading-relaxed">
                  {pill.note}
                </p>
                <motion.div
                  className="h-[2px] rounded-full mt-4"
                  style={{ backgroundColor: pill.accent }}
                  initial={{ scaleX: 0, originX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.8,
                    delay: 0.3 + i * 0.1,
                    ease: [0.25, 0.4, 0.25, 1],
                  }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
