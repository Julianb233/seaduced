"use client";

import { motion } from "framer-motion";

export function FounderNote() {
  return (
    <section className="relative py-24 md:py-32 bg-luxe-teal noise-overlay overflow-hidden">
      {/* Cream accent gradient — cream is SECONDARY only */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#AACAD1] via-[#FDF8F0]/40 to-[#AACAD1]" />

      {/* Decorative quote mark */}
      <motion.div
        className="absolute top-8 left-6 md:left-20 text-[12rem] md:text-[18rem] leading-none text-[#AD9952]/15 pointer-events-none select-none"
        style={{ fontFamily: "var(--font-sans)", fontWeight: 900 }}
        initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        &ldquo;
      </motion.div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.span
          className="inline-block font-mono text-[#325360] text-xs tracking-[0.3em] uppercase mb-6"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          A note from our founder
        </motion.span>

        <motion.blockquote
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          className="text-2xl md:text-4xl lg:text-5xl text-[#263747] leading-[1.2] tracking-tight"
          style={{ fontFamily: "var(--font-sans)", fontWeight: 500 }}
        >
          I built Seaduced because I couldn&apos;t find a product I trusted to
          put on the parts of me I care about most.
          <span className="block mt-5 italic text-[#325360]">
            If this bottle ends up on your nightstand, it&apos;s because I
            wanted to put something there worth keeping.
          </span>
        </motion.blockquote>

        {/* Signature */}
        <motion.div
          className="mt-12 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.p
            className="text-5xl md:text-6xl text-[#AD9952] leading-none"
            style={{
              fontFamily: "var(--font-script), 'Dancing Script', cursive",
              fontWeight: 700,
            }}
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.5 }}
          >
            Gina
          </motion.p>
          <div className="h-[1px] w-20 bg-[#AD9952]/40" />
          <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-[#263747]/60">
            Gina Grek &middot; Founder
          </p>
        </motion.div>
      </div>
    </section>
  );
}
