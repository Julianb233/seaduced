"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function CTABand({
  eyebrow = "Ready to Feel Seaduced",
  title,
  subtitle,
  primary = { label: "Add to Ritual", href: "/product" },
  secondary,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
}) {
  return (
    <section className="bg-[#AACAD1] py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#AACAD1] via-[#FDF8F0]/40 to-[#AACAD1]" />
      <motion.div
        className="absolute -top-24 -right-20 w-96 h-96 rounded-full bg-[#AD9952]/10 blur-3xl"
        animate={{ x: [0, 20, 0], y: [0, -15, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-24 -left-20 w-96 h-96 rounded-full bg-[#325360]/10 blur-3xl"
        animate={{ x: [0, -20, 0], y: [0, 15, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative max-w-3xl mx-auto px-6 text-center">
        <div className="overflow-hidden">
          <motion.span
            className="inline-block font-mono text-[#325360]/70 text-xs tracking-[0.3em] uppercase mb-4"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {eyebrow}
          </motion.span>
        </div>
        <div className="overflow-hidden">
          <motion.h2
            className="text-4xl md:text-6xl text-[#263747] leading-[1.05] tracking-tight mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
            initial={{ y: 80, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
          >
            {title}
          </motion.h2>
        </div>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-[#263747]/80 text-lg mb-10 max-w-xl mx-auto leading-relaxed"
          >
            {subtitle}
          </motion.p>
        )}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link
            href={primary.href}
            className="inline-flex items-center justify-center rounded-full bg-[#AD9952] hover:bg-[#947e3f] text-[#FAFBFB] px-8 py-4 font-medium tracking-wide transition-colors shadow-md"
          >
            {primary.label}
          </Link>
          {secondary && (
            <Link
              href={secondary.href}
              className="inline-flex items-center justify-center rounded-full border-2 border-[#325360] text-[#325360] hover:bg-[#325360] hover:text-[#FAFBFB] px-8 py-4 font-medium tracking-wide transition-colors"
            >
              {secondary.label}
            </Link>
          )}
        </motion.div>
      </div>
    </section>
  );
}
