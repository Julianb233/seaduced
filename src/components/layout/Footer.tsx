"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { motion, useInView, type Variants } from "framer-motion";
import { BRAND, FOOTER_LINKS } from "@/lib/constants";

/* --- animation variants --- */

const textReveal: Variants = {
  hidden: { y: 100 },
  visible: (i: number) => ({
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.1,
      ease: [0.25, 0.4, 0.25, 1],
    },
  }),
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.15 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 20 },
  },
};

/* --- 4-column link sections derived from constants --- */

const footerSections = [
  { title: "Products", links: FOOTER_LINKS.products },
  { title: "Quick Links", links: FOOTER_LINKS.quickLinks },
  { title: "Company", links: FOOTER_LINKS.company },
  { title: "Legal", links: FOOTER_LINKS.legal },
];

/* --- component --- */

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const isInView = useInView(footerRef, { once: true, margin: "-100px" });
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isEasterEggHover, setIsEasterEggHover] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setEmail("");
    }, 2000);
  };

  return (
    <footer
      ref={footerRef}
      className="relative overflow-hidden bg-charcoal pt-16 pb-6"
    >
      {/* Noise overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-[1] opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
        }}
      />

      {/* Giant ghost wordmark -- slides up from y:100 on view */}
      <motion.div
        className="pointer-events-none absolute bottom-0 left-1/2 z-0 -translate-x-1/2 select-none text-[15rem] font-black leading-none text-white/[0.02] md:text-[30rem]"
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        aria-hidden="true"
      >
        SEADUCED
      </motion.div>

      {/* Main content (z-10 above ghost wordmark) */}
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Mega headline "READY TO / DIVE IN?" with text-reveal from y+100 */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl font-black leading-[0.9] tracking-tighter text-white md:text-6xl">
            {/* First line -- white */}
            <span className="block overflow-hidden">
              <motion.span
                className="block"
                custom={0}
                variants={textReveal}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                READY TO
              </motion.span>
            </span>
            {/* Second line -- gold */}
            <span className="block overflow-hidden">
              <motion.span
                className="block text-gold"
                custom={1}
                variants={textReveal}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                DIVE IN?
              </motion.span>
            </span>
          </h2>
        </motion.div>

        {/* Email capture: gold focus-glow ring, shimmer submit, "Joining..." state */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mb-12 max-w-xl"
        >
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-3 sm:flex-row"
          >
            {/* Input with gold focus-glow ring */}
            <div className="relative flex-1">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="peer w-full rounded-xl border-2 border-white/20 bg-white/5 px-4 py-3 font-mono text-sm text-white placeholder:text-white/40 transition-all duration-300 focus:border-gold focus:outline-none"
              />
              {/* Gold glow ring appears on focus */}
              <div
                className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 peer-focus:opacity-100"
                style={{ boxShadow: "0 0 20px rgba(197,165,90,0.25)" }}
              />
            </div>

            {/* Shimmer submit button */}
            <motion.button
              type="submit"
              className="group relative overflow-hidden whitespace-nowrap rounded-xl bg-gold px-6 py-3 text-sm font-bold tracking-wide text-charcoal"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              {/* Shimmer sweep on hover */}
              <span
                className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full"
                aria-hidden="true"
              />
              {/* "Joining..." animate state */}
              <motion.span
                className="relative z-10"
                animate={
                  isSubmitting ? { opacity: [1, 0.5, 1] } : { opacity: 1 }
                }
                transition={{
                  duration: 0.5,
                  repeat: isSubmitting ? Infinity : 0,
                }}
              >
                {isSubmitting ? "Joining..." : "Join the Wave"}
              </motion.span>
            </motion.button>
          </form>

          {/* "Join 5k+ in the wave" subtext */}
          <motion.p
            className="mt-2 text-center font-mono text-xs text-white/40"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Join 5k+ in the wave. No spam, just wellness.
          </motion.p>
        </motion.div>

        {/* Brand blurb */}
        <motion.div
          className="mb-10 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <p className="mx-auto max-w-xl font-mono text-xs leading-relaxed text-white/60">
            Seaduced is a premium sea moss-infused personal lubricant.
            Plant-based, pH-balanced, and naturally silky — designed for intimate
            wellness.
          </p>
        </motion.div>

        {/* 4-column link grid with container stagger + whileHover x:4 */}
        <motion.div
          className="grid grid-cols-2 gap-6 border-t border-white/10 py-8 md:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {footerSections.map((section) => (
            <motion.div key={section.title} variants={itemVariants}>
              <h4 className="mb-3 text-sm font-bold text-white">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    {/* whileHover x:4 on each link */}
                    <motion.div
                      whileHover={{ x: 4 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 17,
                      }}
                    >
                      <Link
                        href={link.href}
                        className="inline-block font-mono text-xs text-white/60 transition-colors hover:text-gold"
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom row: logo (white + gold ED), copyright, easter-egg */}
        <motion.div
          className="flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 md:flex-row"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          {/* "SEADUCED" logo -- white + gold ED */}
          <motion.div
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <span className="text-xl font-black">
              <span className="text-white">SEADUC</span>
              <span className="text-gold">ED</span>
            </span>
          </motion.div>

          {/* Copyright */}
          <p className="font-mono text-xs text-white/40">
            &copy; {BRAND.year} Seaduced. All rights reserved.
          </p>

          {/* "made with wellness" easter-egg shake on hover */}
          <motion.p
            className="cursor-pointer font-mono text-xs text-white/30"
            onHoverStart={() => setIsEasterEggHover(true)}
            onHoverEnd={() => setIsEasterEggHover(false)}
            animate={
              isEasterEggHover
                ? {
                    rotate: [0, -5, 5, -5, 5, 0],
                    scale: [1, 1.1, 1],
                    color: "#C5A55A",
                  }
                : {
                    rotate: 0,
                    scale: 1,
                    color: "rgba(255,255,255,0.3)",
                  }
            }
            transition={{ duration: 0.5 }}
          >
            made with wellness
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
}
