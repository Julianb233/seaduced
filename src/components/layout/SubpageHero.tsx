"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export function SubpageHero({
  eyebrow,
  title,
  subtitle,
  children,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden noise-overlay pt-32 pb-20">
      <div className="absolute inset-0 bg-gradient-to-br from-[#FDF8F0] via-[#C5A55A]/5 to-[#FDF8F0]" />
      <motion.div
        className="absolute top-24 left-12 w-32 h-32 rounded-full bg-[#C5A55A]/15 blur-3xl"
        animate={{ x: [0, 30, 0], y: [0, -20, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-16 right-16 w-40 h-40 rounded-full bg-[#3B5EAB]/10 blur-3xl"
        animate={{ x: [0, -30, 0], y: [0, 20, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.span
          className="inline-block font-mono text-[#1E1E2E]/60 text-xs tracking-[0.3em] uppercase mb-3"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {eyebrow}
        </motion.span>

        <div className="overflow-hidden">
          <motion.h1
            className="text-5xl md:text-7xl font-serif text-[#1E1E2E] leading-[1] tracking-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
          >
            {title}
          </motion.h1>
        </div>

        {subtitle && (
          <motion.p
            className="mt-6 text-lg md:text-xl text-[#1E1E2E]/70 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {subtitle}
          </motion.p>
        )}

        {children && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8"
          >
            {children}
          </motion.div>
        )}
      </div>
    </section>
  );
}
