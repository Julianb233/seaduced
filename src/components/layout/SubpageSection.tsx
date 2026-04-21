"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export function SubpageSection({
  title,
  children,
  background = "cream",
}: {
  title?: string;
  children: ReactNode;
  background?: "cream" | "charcoal" | "white";
}) {
  // Note: the "cream" variant now renders light teal #AACAD1 as of 2026-04-21
  // palette promotion. The "charcoal" variant was lightened 2026-04-21 per
  // Julian's directive — now renders a luxe aqua gradient, NOT flat navy.
  // Text colors adjusted to navy/deep-teal for contrast on the lighter bg.
  // API signature preserved for backward compat with subpages.
  const bg =
    background === "charcoal"
      ? "bg-luxe-deep noise-overlay text-[#263747]"
      : background === "white"
      ? "bg-luxe-cream noise-overlay text-[#263747]"
      : "bg-luxe-teal noise-overlay text-[#263747]";

  return (
    <section className={`relative ${bg} py-20 md:py-28 overflow-hidden`}>
      <div className="max-w-3xl mx-auto px-6">
        {title && (
          <motion.h2
            className="text-3xl md:text-4xl font-black mb-8 tracking-tight"
            style={{ fontFamily: "var(--font-sans)" }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {title}
          </motion.h2>
        )}
        <motion.div
          className="space-y-6 text-base md:text-lg leading-relaxed opacity-90"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 0.9, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}
