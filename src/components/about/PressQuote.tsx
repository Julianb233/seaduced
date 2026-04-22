"use client";

import { motion } from "framer-motion";

/**
 * PressQuote — placeholder editorial testimonial for /about.
 *
 * TODO (Gina): swap copy + source with a real editorial mention once Seaduced
 * has press coverage. Keep two lines max; source line should be outlet + writer.
 * Example final shape: "Seaduced is the first intimate wellness brand that
 * feels like skincare, not stigma." — WELL+GOOD, Lara Parker, May 2026.
 */
export function PressQuote() {
  return (
    <section className=" relative py-20 md:py-24 bg-luxe-teal noise-overlay overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#AACAD1] via-[#AACAD1] to-[#AACAD1]" />

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="relative bg-[#FDF8F0] border border-[#325360]/15 rounded-3xl p-8 md:p-14 shadow-xl"
        >
          {/* Gold accent bar */}
          <motion.div
            className="absolute -top-3 left-10 h-1 w-20 bg-[#AD9952] rounded-full"
            initial={{ scaleX: 0, originX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          />

          <span className="inline-block font-mono text-[#AD9952] text-[10px] tracking-[0.3em] uppercase mb-4">
            In the press &middot; Placeholder
          </span>

          <p
            className="text-2xl md:text-4xl text-[#263747] leading-[1.25] tracking-tight"
            style={{ fontFamily: "var(--font-sans)", fontWeight: 500 }}
          >
            &ldquo;Seaduced treats the body like a landscape worth protecting —
            and the care around it like something worth elevating.&rdquo;
          </p>

          <div className="mt-8 flex items-center gap-3">
            <div className="h-[1px] w-10 bg-[#AD9952]" />
            <p className="font-mono text-xs tracking-[0.25em] uppercase text-[#263747]/70">
              Editorial placeholder &middot; Pending press pickup
            </p>
          </div>

          {/* TODO marker for Gina — visible only to dev in comment; UI hint below */}
          <p className="mt-3 font-mono text-[10px] tracking-[0.2em] uppercase text-[#AD9952]/80">
            TODO: Replace with real quote + outlet once press lands.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
