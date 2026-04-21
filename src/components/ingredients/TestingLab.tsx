"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const PANELS = [
  { label: "Heavy Metals", result: "PASS", note: "Below ppb thresholds" },
  { label: "Microbial", result: "PASS", note: "Zero aerobic bacteria" },
  { label: "pH Stability", result: "4.2", note: "Locked within tolerance" },
  { label: "Viscosity", result: "PASS", note: "Within batch spec" },
];

export function TestingLab() {
  return (
    <section className="bg-luxe-teal noise-overlay py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        {/* Lab image with overlay panel card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
          className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-xl ring-1 ring-[#325360]/20"
        >
          <Image
            src="/images/social/tile-05-marble-drops.png"
            alt="Independent lab panel showing pH-stable, mineral-rich formulation in a glass beaker"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#263747]/70 via-[#263747]/20 to-transparent" />

          <div className="absolute bottom-4 left-4 right-4 rounded-xl bg-[#263747]/90 backdrop-blur-md ring-1 ring-[#FAFBFB]/10 p-4 text-[#FAFBFB]">
            <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-[#AD9952] mb-3">
              Batch · SD-2026-04
            </div>
            <dl className="grid grid-cols-2 gap-x-4 gap-y-2.5 text-sm">
              {PANELS.map((p) => (
                <div key={p.label} className="flex flex-col">
                  <dt className="text-[10px] uppercase tracking-wider text-[#FAFBFB]/60">
                    {p.label}
                  </dt>
                  <dd className="flex items-baseline gap-2">
                    <span className="text-[#AD9952] font-medium">
                      {p.result}
                    </span>
                    <span className="text-[10px] text-[#FAFBFB]/60">
                      {p.note}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </motion.div>

        {/* Copy */}
        <div>
          <div className="overflow-hidden">
            <motion.span
              className="inline-block font-mono text-[#325360]/70 text-xs tracking-[0.3em] uppercase mb-4"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Independent Testing
            </motion.span>
          </div>
          <div className="overflow-hidden">
            <motion.h2
              className="text-4xl md:text-5xl text-[#263747] leading-[1.05] tracking-tight mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
              initial={{ y: 80, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
            >
              A third-party lab signs off before you ever open the box.
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
              Every production run is tested by an independent, ISO 17025-
              accredited lab. The panel covers microbial load, heavy metals,
              pH stability, viscosity, and preservative efficacy.
            </p>
            <p>
              If a batch fails anything on the panel, it does not ship — full
              stop. Nothing that does not clear lands in a bottle.
            </p>
            <p className="text-[#325360] font-medium">
              Want a specific certificate of analysis? Email your batch code
              and we will send the full panel within 24 hours.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
