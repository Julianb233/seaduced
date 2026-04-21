"use client";

import { motion } from "framer-motion";

export function WhatWeDontClaim() {
  return (
    <section className=" bg-luxe-teal noise-overlay py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <div className="overflow-hidden">
          <motion.span
            className="inline-block font-mono text-[#325360]/70 text-xs tracking-[0.3em] uppercase mb-4"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Honesty Clause
          </motion.span>
        </div>
        <div className="overflow-hidden">
          <motion.h2
            className="text-4xl md:text-5xl text-[#263747] leading-[1.05] tracking-tight mb-8"
            style={{ fontFamily: "var(--font-sans)" }}
            initial={{ y: 80, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
          >
            What we don&apos;t claim.
          </motion.h2>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-2xl bg-[#FDF8F0] ring-1 ring-[#325360]/20 p-8 md:p-10 text-left shadow-sm space-y-5"
        >
          <p className="text-[#263747]/85 text-base md:text-lg leading-relaxed">
            Seaduced is a <strong>personal lubricant</strong> designed around
            clean, plant-based ingredients and intentional pH.
          </p>
          <p className="text-[#263747]/85 text-base md:text-lg leading-relaxed">
            It is <strong>not a medical device</strong>, not a supplement, not a
            contraceptive, and not a treatment for any diagnosed condition. It
            is not intended to prevent, cure, or diagnose disease.
          </p>
          <p className="text-[#263747]/85 text-base md:text-lg leading-relaxed">
            If you are managing a specific health concern — hormonal, vaginal,
            dermatological, or otherwise — we recommend talking with your
            healthcare provider before adding any new product to your routine.
            We care more about you trusting us long-term than about
            overpromising today.
          </p>
          <div className="pt-4 border-t border-[#325360]/15 font-mono text-[10px] tracking-[0.25em] uppercase text-[#325360]/70">
            Seaduced · Naturally Intimate
          </div>
        </motion.div>
      </div>
    </section>
  );
}
