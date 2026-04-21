"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export function NewsletterCTA() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = () => {
    // TODO: wire up to real newsletter endpoint (mirrors Footer stub today)
    setIsSubmitting(true);
    setTimeout(() => setIsSubmitting(false), 2000);
  };

  return (
    <section className="bg-[#263747] py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#263747] via-[#325360]/60 to-[#263747]" />
      <motion.div
        className="absolute -top-24 -left-20 w-64 h-64 rounded-full bg-[#AD9952]/10 blur-3xl"
        animate={{ x: [0, 40, 0], y: [0, 20, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-20 -right-24 w-72 h-72 rounded-full bg-[#6793A0]/15 blur-3xl"
        animate={{ x: [0, -40, 0], y: [0, -20, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative max-w-2xl mx-auto px-6 text-center">
        <motion.span
          className="inline-block font-mono text-[#AACAD1]/80 text-xs tracking-[0.3em] uppercase mb-4"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          The Journal
        </motion.span>
        <motion.h2
          className="text-3xl md:text-5xl text-[#FDF8F0] leading-[1.05] tracking-tight mb-5"
          style={{ fontFamily: "'Playfair Display', serif", fontWeight: 800 }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Get the Journal delivered
        </motion.h2>
        <motion.p
          className="text-[#FDF8F0]/70 text-base md:text-lg leading-relaxed mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Essays, rituals, and ingredient deep-dives — once a month, never
          overwrought, always worth reading.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            aria-label="Email address"
            className="flex-1 bg-white/5 border-2 border-white/20 rounded-xl px-4 py-3 text-[#FDF8F0] placeholder:text-[#FDF8F0]/40 font-mono text-sm focus:outline-none focus:border-[#AD9952] transition-all duration-300"
          />
          <motion.button
            className="bg-[#AD9952] text-[#263747] px-6 py-3 rounded-xl font-bold text-sm tracking-wide whitespace-nowrap"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            onClick={handleSubmit}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Joining..." : "Subscribe"}
          </motion.button>
        </motion.div>
        <p className="text-[#FDF8F0]/40 font-mono text-[10px] tracking-wider mt-4">
          No spam. Unsubscribe in one click.
        </p>
      </div>
    </section>
  );
}
