"use client";

import type { ReactNode } from "react";
import { motion, type Variants } from "framer-motion";

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] },
  },
};

const bodyVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: 0.15,
      ease: [0.25, 0.4, 0.25, 1],
    },
  },
};

interface StaticPageShellProps {
  /** Eyebrow label above the title (JetBrains Mono) */
  eyebrow: string;
  /** Page title (Playfair Display) */
  title: string;
  /** Optional subtitle */
  subtitle?: string;
  /** Page body content */
  children: ReactNode;
}

/**
 * Shared shell for legal / static pages.
 *
 * - Charcoal hero header with gold eyebrow + Playfair Display H1
 * - Cream (#FDF8F0) body section
 * - max-w-prose, generous line-height
 * - fadeUpVariants on page load
 *
 * Navigation + Footer come from the root layout.
 */
export default function StaticPageShell({
  eyebrow,
  title,
  subtitle,
  children,
}: StaticPageShellProps) {
  return (
    <>
      {/* Hero header */}
      <section className="bg-charcoal pt-32 pb-16">
        <motion.div
          className="mx-auto max-w-3xl px-6 text-center"
          initial="hidden"
          animate="visible"
          variants={fadeUpVariants}
        >
          {/* Eyebrow */}
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-gold">
            {eyebrow}
          </p>

          {/* Title */}
          <h1 className="mt-4 font-display text-4xl font-bold leading-tight text-white md:text-5xl">
            {title}
          </h1>

          {subtitle && (
            <p className="mt-3 font-mono text-sm text-white/50">{subtitle}</p>
          )}
        </motion.div>
      </section>

      {/* Body */}
      <section className="bg-cream py-16 md:py-24">
        <motion.article
          className="mx-auto max-w-prose px-6"
          initial="hidden"
          animate="visible"
          variants={bodyVariants}
        >
          <div
            className="space-y-6 text-charcoal [&_h2]:mt-12 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:leading-snug [&_h2]:text-charcoal [&_h3]:mt-8 [&_h3]:font-display [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-charcoal [&_p]:text-base [&_p]:leading-[1.8] [&_p]:text-charcoal/80 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:space-y-2 [&_li]:text-base [&_li]:leading-[1.8] [&_li]:text-charcoal/80 [&_a]:text-gold-dark [&_a]:underline [&_a]:underline-offset-2 [&_a]:transition-colors hover:[&_a]:text-gold [&_strong]:font-semibold [&_strong]:text-charcoal"
          >
            {children}
          </div>
        </motion.article>
      </section>
    </>
  );
}
