"use client";

import { motion } from "framer-motion";
import { useState, FormEvent } from "react";

export function CTABand() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const trimmed = email.trim();
    if (!trimmed || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    setSubmitted(true);
    // TODO: wire to Seaduced email capture endpoint
  };

  return (
    <section className="bg-luxe-deep noise-overlay text-[#263747] relative py-24 md:py-32 overflow-hidden">
      {/* Ambient color blobs */}
      <motion.div
        className="absolute -top-20 left-1/4 w-96 h-96 rounded-full bg-[#6793A0]/22 blur-[100px]"
        animate={{ x: [0, 40, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-20 right-1/4 w-96 h-96 rounded-full bg-[#AD9952]/18 blur-[100px]"
        animate={{ x: [0, -40, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <motion.span
          className="inline-block font-mono text-[#AD9952] text-xs tracking-[0.3em] uppercase mb-4"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Stay in the loop
        </motion.span>

        <div className="overflow-hidden">
          <motion.h2
            className="text-4xl md:text-6xl lg:text-7xl text-[#263747] tracking-tight leading-[1]"
            style={{ fontFamily: "var(--font-serif), 'Playfair Display', serif", fontWeight: 800 }}
            initial={{ y: 70, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
          >
            Join the wave.
          </motion.h2>
        </div>

        <motion.p
          className="mt-6 text-base md:text-lg text-[#263747]/75 max-w-xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          First batch early access, launch pricing, and the story behind
          everything we put in the bottle. No spam. Ever.
        </motion.p>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 flex flex-col sm:flex-row gap-3 max-w-xl mx-auto"
        >
          <label htmlFor="cta-email" className="sr-only">
            Email address
          </label>
          <input
            id="cta-email"
            type="email"
            autoComplete="email"
            required
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={submitted}
            className="flex-1 bg-white/55 backdrop-blur-md border border-white/65 text-[#263747] placeholder-[#263747]/45 rounded-full px-5 py-3.5 text-sm font-mono tracking-wide focus:outline-none focus:border-[#AD9952] focus:bg-white/70 transition-all disabled:opacity-50"
          />
          <motion.button
            type="submit"
            disabled={submitted}
            className="bg-[#AD9952] text-[#263747] px-7 py-3.5 rounded-full font-bold text-sm tracking-wide relative overflow-hidden disabled:opacity-60 disabled:cursor-not-allowed"
            whileHover={!submitted ? { scale: 1.03 } : {}}
            whileTap={!submitted ? { scale: 0.98 } : {}}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full"
              whileHover={{ x: "200%" }}
              transition={{ duration: 0.6 }}
            />
            <span className="relative z-10">
              {submitted ? "Welcome aboard" : "Count me in"}
            </span>
          </motion.button>
        </motion.form>

        {error && (
          <p className="mt-3 font-mono text-xs text-[#F87171]">{error}</p>
        )}

        {submitted && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-5 font-mono text-xs tracking-[0.2em] uppercase text-[#325360]"
          >
            You&apos;re in. We&apos;ll be in touch.
          </motion.p>
        )}

        <p className="mt-8 font-mono text-[10px] tracking-[0.2em] uppercase text-[#325360]/55">
          By joining you agree to receive occasional emails from Seaduced.
        </p>
      </div>
    </section>
  );
}
