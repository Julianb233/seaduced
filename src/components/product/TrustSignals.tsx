"use client";

import { motion } from "framer-motion";
import { Shield, Leaf, Heart, Droplets, Award, Lock } from "lucide-react";
import { fadeUp, viewportOnce } from "@/lib/motion";

const signals = [
  { icon: Shield, label: "FDA-Compliant Facility" },
  { icon: Leaf, label: "100% Plant-Based" },
  { icon: Heart, label: "Cruelty-Free" },
  { icon: Droplets, label: "pH-Balanced" },
  { icon: Award, label: "GMP Certified" },
  { icon: Lock, label: "Discreet Shipping" },
  // Duplicate set for seamless marquee loop
  { icon: Shield, label: "FDA-Compliant Facility" },
  { icon: Leaf, label: "100% Plant-Based" },
  { icon: Heart, label: "Cruelty-Free" },
  { icon: Droplets, label: "pH-Balanced" },
  { icon: Award, label: "GMP Certified" },
  { icon: Lock, label: "Discreet Shipping" },
];

export default function TrustSignals() {
  return (
    <section className="relative overflow-hidden bg-[#1E1E2E] py-14">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C5A55A]/30 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#C5A55A]/30 to-transparent" />

      <motion.div
        className="mb-8 text-center"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.3em] text-[#C5A55A]">
          Why Trust Seaduced
        </span>
      </motion.div>

      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#1E1E2E] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#1E1E2E] to-transparent" />

        <div className="flex animate-marquee">
          {signals.map((signal, i) => {
            const Icon = signal.icon;
            return (
              <div
                key={`${signal.label}-${i}`}
                className="flex shrink-0 items-center gap-3 px-8"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#C5A55A]/20 bg-[#C5A55A]/10">
                  <Icon className="h-4 w-4 text-[#C5A55A]" />
                </div>
                <span className="whitespace-nowrap font-mono text-xs font-medium uppercase tracking-wider text-white/70">
                  {signal.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
