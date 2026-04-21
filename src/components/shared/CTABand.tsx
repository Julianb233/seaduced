"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CTABand({
  eyebrow,
  title,
  subtitle,
  primary,
  secondary,
  variant = "light",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
  variant?: "light" | "navy";
}) {
  const isNavy = variant === "navy";
  const bg = isNavy ? "bg-[#263747]" : "bg-[#AACAD1]";
  const heading = isNavy ? "text-[#FAFBFB]" : "text-[#263747]";
  const sub = isNavy ? "text-[#FAFBFB]/75" : "text-[#263747]/75";
  const eyeColor = isNavy ? "text-[#AD9952]" : "text-[#325360]";

  return (
    <section className={`${bg} py-20 md:py-24 relative overflow-hidden`}>
      <motion.div
        className={`absolute -left-20 top-1/2 -translate-y-1/2 w-72 h-72 rounded-full blur-3xl pointer-events-none ${
          isNavy ? "bg-[#AD9952]/10" : "bg-[#FDF8F0]/50"
        }`}
        animate={{ x: [0, 30, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="relative max-w-4xl mx-auto px-6 text-center">
        {eyebrow && (
          <motion.span
            className={`block font-mono text-xs tracking-[0.3em] uppercase mb-3 ${eyeColor}`}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {eyebrow}
          </motion.span>
        )}
        <motion.h2
          className={`text-4xl md:text-5xl font-serif tracking-tight ${heading}`}
          style={{ fontFamily: "'Playfair Display', serif" }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {title}
        </motion.h2>
        {subtitle && (
          <motion.p
            className={`mt-4 text-lg max-w-2xl mx-auto ${sub}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {subtitle}
          </motion.p>
        )}
        <motion.div
          className="mt-8 flex flex-wrap gap-3 justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Link
            href={primary.href}
            className="group inline-flex items-center gap-2 bg-[#AD9952] text-[#263747] px-6 py-3 rounded-full font-bold text-sm tracking-wide shadow-sm hover:shadow-md transition-all"
          >
            <span>{primary.label}</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
          {secondary && (
            <Link
              href={secondary.href}
              className={`inline-flex items-center gap-2 border-2 px-6 py-3 rounded-full font-bold text-sm tracking-wide transition-colors ${
                isNavy
                  ? "border-[#FAFBFB]/70 text-[#FAFBFB] hover:bg-[#FAFBFB] hover:text-[#263747]"
                  : "border-[#325360] text-[#325360] hover:bg-[#325360] hover:text-[#FDF8F0]"
              }`}
            >
              {secondary.label}
            </Link>
          )}
        </motion.div>
      </div>
    </section>
  );
}
