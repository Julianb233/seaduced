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
  // palette promotion. API signature preserved for backward compat with subpages.
  const bg =
    background === "charcoal"
      ? "bg-[#263747] text-[#FDF8F0]"
      : background === "white"
      ? "bg-white text-[#263747]"
      : "bg-[#AACAD1] text-[#263747]";

  return (
    <section className={`${bg} py-20 md:py-28`}>
      <div className="max-w-3xl mx-auto px-6">
        {title && (
          <motion.h2
            className="text-3xl md:text-4xl font-serif mb-8 tracking-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
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
