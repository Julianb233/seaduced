"use client";

import { motion } from "framer-motion";

export function AboutHero() {
  return (
    <section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden noise-overlay pt-32 pb-24 bg-luxe-teal noise-overlay">
      {/* Light teal primary + subtle cream-mist gradient (secondary accent) */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#AACAD1] via-[#FDF8F0]/25 to-[#AACAD1]" />

      {/* Floating color blobs */}
      <motion.div
        className="absolute top-20 left-12 w-40 h-40 rounded-full bg-[#6793A0]/25 blur-3xl"
        animate={{ x: [0, 30, 0], y: [0, -20, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-16 w-48 h-48 rounded-full bg-[#AD9952]/15 blur-3xl"
        animate={{ x: [0, -30, 0], y: [0, 20, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/2 left-1/3 w-32 h-32 rounded-full bg-[#325360]/10 blur-3xl"
        animate={{ y: [0, -30, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.span
          className="inline-block font-mono text-[#263747]/60 text-xs tracking-[0.3em] uppercase mb-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Story
        </motion.span>

        <div className="overflow-hidden">
          <motion.h1
            className="font-serif text-5xl md:text-7xl lg:text-8xl text-[#263747] leading-[0.95] tracking-tight"
            style={{ fontFamily: "var(--font-serif), 'Playfair Display', serif", fontWeight: 800 }}
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          >
            Made from the sea.
            <br />
            <span className="italic text-[#325360]">Made for you.</span>
          </motion.h1>
        </div>

        <motion.p
          className="mt-8 text-lg md:text-xl text-[#263747]/75 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          A brand for every body, every age, every kind of love — built on
          ingredients the ocean has been perfecting for a billion years.
        </motion.p>

        {/* Decorative divider */}
        <motion.div
          className="mt-10 mx-auto w-16 h-[2px] bg-[#AD9952]"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          style={{ originX: 0.5 }}
        />
      </div>
    </section>
  );
}
