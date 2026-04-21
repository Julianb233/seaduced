"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { motion, useInView, type Variants } from "framer-motion";
import { BRAND, FOOTER_LINKS } from "@/lib/constants";

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

const footerSections = [
  { title: "Products", links: FOOTER_LINKS.products },
  { title: "Quick Links", links: FOOTER_LINKS.quickLinks },
  { title: "Company", links: FOOTER_LINKS.company },
  { title: "Legal", links: FOOTER_LINKS.legal },
];

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const isInView = useInView(footerRef, { once: true, margin: "-100px" });
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

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
      className="relative overflow-hidden bg-[#1E1E2E] pt-16 pb-6"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* CTA headline */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl font-black leading-[0.9] tracking-tighter text-white md:text-6xl">
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
            <span className="block overflow-hidden">
              <motion.span
                className="block text-[#C5A55A]"
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

        {/* Email capture */}
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
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              className="flex-1 rounded-xl border-2 border-white/20 bg-white/5 px-4 py-3 font-mono text-sm text-white placeholder:text-white/40 transition-all duration-300 focus:border-[#C5A55A] focus:outline-none"
            />
            <motion.button
              type="submit"
              className="group relative overflow-hidden whitespace-nowrap rounded-xl bg-[#C5A55A] px-6 py-3 text-sm font-bold tracking-wide text-[#1E1E2E]"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <span className="relative z-10">
                {isSubmitting ? "Joining..." : "Join the Wave"}
              </span>
            </motion.button>
          </form>
        </motion.div>

        {/* 4-column link grid */}
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
                    <Link
                      href={link.href}
                      className="inline-block font-mono text-xs text-white/60 transition-colors hover:text-[#C5A55A]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom row */}
        <div className="flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 md:flex-row">
          <span className="text-xl font-black">
            <span className="text-white">SEADUC</span>
            <span className="text-[#C5A55A]">ED</span>
          </span>
          <p className="font-mono text-xs text-white/40">
            &copy; {BRAND.year} Seaduced. All rights reserved.
          </p>
          <p className="font-mono text-xs text-white/30">
            made with wellness
          </p>
        </div>
      </div>
    </footer>
  );
}
