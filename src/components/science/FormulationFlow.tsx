"use client";

import { motion } from "framer-motion";
import { Waves, Droplets, FlaskConical, Package } from "lucide-react";

const STEPS = [
  {
    icon: Waves,
    n: "01",
    title: "Source",
    body: "Hand-harvested Chondrus crispus from regulated Atlantic waters. Traceable to the bay.",
  },
  {
    icon: Droplets,
    n: "02",
    title: "Clean",
    body: "Four freshwater rinses. Ocean debris, salt, and sand removed. Nothing left but the plant.",
  },
  {
    icon: FlaskConical,
    n: "03",
    title: "Formulate",
    body: "Blended with aloe, plant-derived hyaluronic, and vitamin E. pH-adjusted to 4.2.",
  },
  {
    icon: Package,
    n: "04",
    title: "Bottle",
    body: "Filled in small batches, tested for consistency, sealed, and boxed in discreet packaging.",
  },
];

export function FormulationFlow() {
  return (
    <section className="bg-[#FDF8F0] py-24 md:py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="overflow-hidden">
            <motion.span
              className="inline-block font-mono text-[#325360]/70 text-xs tracking-[0.3em] uppercase mb-4"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              From Ocean to Bottle
            </motion.span>
          </div>
          <div className="overflow-hidden">
            <motion.h2
              className="text-4xl md:text-5xl text-[#263747] leading-[1.05] tracking-tight max-w-2xl mx-auto"
              style={{ fontFamily: "'Playfair Display', serif" }}
              initial={{ y: 80, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
            >
              Four steps. No shortcuts.
            </motion.h2>
          </div>
        </div>

        <div className="relative">
          {/* connector line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.6, delay: 0.4, ease: "easeInOut" }}
            className="hidden md:block absolute top-8 left-[8%] right-[8%] h-[2px] bg-gradient-to-r from-[#6793A0] via-[#325360] to-[#6793A0] origin-left"
          />

          <div className="grid md:grid-cols-4 gap-8 md:gap-6 relative">
            {STEPS.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.n}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: 0.2 + i * 0.12,
                    ease: [0.25, 0.4, 0.25, 1],
                  }}
                  className="text-center"
                >
                  <div className="relative inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#FAFBFB] ring-2 ring-[#325360]/30 shadow-md mb-6">
                    <Icon className="w-7 h-7 text-[#325360]" strokeWidth={1.5} />
                    <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-[#AD9952] text-[#FAFBFB] flex items-center justify-center font-mono text-[10px] tracking-wider">
                      {step.n}
                    </div>
                  </div>
                  <h3
                    className="text-2xl text-[#263747] mb-3 tracking-tight"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-[#263747]/75 text-sm leading-relaxed max-w-[220px] mx-auto">
                    {step.body}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
