"use client";

import { motion } from "framer-motion";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#1E1E2E]"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#1E1E2E] via-[#141420] to-[#1E1E2E]" />

      <div className="relative z-10 text-center px-6">
        <motion.p
          className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#C5A55A]"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Naturally Intimate
        </motion.p>

        <motion.h1
          className="mt-4 text-5xl font-black tracking-tight text-white md:text-7xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <span>SEADUC</span>
          <span className="text-[#C5A55A]">ED</span>
        </motion.h1>

        <motion.p
          className="mx-auto mt-4 max-w-md text-lg leading-relaxed text-white/60"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          Sea moss-based moisturizing lubricant. Clean, plant-based, pH-balanced.
        </motion.p>

        <motion.div
          className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
        >
          <a
            href="#product"
            className="inline-flex items-center gap-2 rounded-full bg-[#C5A55A] px-8 py-3 text-sm font-bold tracking-wide text-[#1E1E2E] transition-colors hover:bg-[#d4b76a]"
          >
            Explore Products
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
            </svg>
          </a>
          <a
            href="#benefits"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-3 text-sm font-medium text-white/70 transition-colors hover:border-[#C5A55A]/50 hover:text-white"
          >
            The Science
          </a>
        </motion.div>
      </div>
    </section>
  );
}
