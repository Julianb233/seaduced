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
    <section className="bg-luxe-deep noise-overlay py-20 md:py-28 relative overflow-hidden">
      <motion.div
        className="absolute -top-24 -left-20 w-64 h-64 rounded-full bg-[#AD9952]/18 blur-3xl pointer-events-none"
        animate={{ x: [0, 40, 0], y: [0, 20, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-20 -right-24 w-72 h-72 rounded-full bg-[#325360]/20 blur-3xl pointer-events-none"
        animate={{ x: [0, -40, 0], y: [0, -20, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative max-w-2xl mx-auto px-6 text-center">
        <motion.span
          className="inline-block font-mono text-[#325360] text-xs tracking-[0.3em] uppercase mb-4"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          The Journal
        </motion.span>
        <motion.h2
          className="text-3xl md:text-5xl text-[#263747] leading-[1.05] tracking-tight mb-5"
          style={{ fontFamily: "var(--font-sans)", fontWeight: 800 }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Get the Journal delivered
        </motion.h2>
        <motion.p
          className="text-[#263747]/75 text-base md:text-lg leading-relaxed mb-10"
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
            className="flex-1 bg-white/50 backdrop-blur-md border-2 border-white/60 rounded-xl px-4 py-3 text-[#263747] placeholder:text-[#263747]/40 font-mono text-sm focus:outline-none focus:border-[#AD9952] transition-all duration-300"
          />
          <motion.button
            className="btn-champagne px-6 py-3 rounded-xl font-bold text-sm tracking-wide whitespace-nowrap"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            onClick={handleSubmit}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Joining..." : "Subscribe"}
          </motion.button>
        </motion.div>
        <p className="text-[#263747]/55 font-mono text-[10px] tracking-wider mt-4">
          No spam. Unsubscribe in one click.
        </p>
      </div>
    </section>
  );
}
