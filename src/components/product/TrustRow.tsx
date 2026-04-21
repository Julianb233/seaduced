"use client";

import { motion } from "framer-motion";

type Trust = {
  label: string;
  sublabel: string;
  svg: React.ReactNode;
};

const trust: Trust[] = [
  {
    label: "Vegan",
    sublabel: "Plant-based, certified",
    svg: (
      <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
        <path
          d="M8 28c0-8 6-16 20-16 6 0 12 2 12 8 0 12-10 20-20 20-7 0-12-4-12-12z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M16 32c6-4 14-10 18-18"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    label: "Cruelty-free",
    sublabel: "Never tested on animals",
    svg: (
      <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
        <circle cx="24" cy="28" r="10" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="15" cy="17" r="3.5" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="33" cy="17" r="3.5" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="10" cy="24" r="2.5" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="38" cy="24" r="2.5" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="21" cy="27" r="0.9" fill="currentColor" />
        <circle cx="27" cy="27" r="0.9" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "No parabens",
    sublabel: "Or sulfates, ever",
    svg: (
      <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
        <circle cx="24" cy="24" r="16" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M13 13l22 22"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M20 16h8l2 4h-12l2-4zM18 20h12v14a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2V20z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: "No petroleum",
    sublabel: "No glycerin, no mystery",
    svg: (
      <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
        <path
          d="M24 8c-4 6-10 12-10 20a10 10 0 0 0 20 0c0-8-6-14-10-20z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M13 13l22 22"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    label: "Made in USA",
    sublabel: "Formulated + bottled here",
    svg: (
      <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
        <rect x="8" y="12" width="32" height="24" rx="3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 18h32" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 24h32" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 30h32" stroke="currentColor" strokeWidth="1.5" />
        <rect x="8" y="12" width="14" height="10" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="12" cy="15.5" r="0.7" fill="currentColor" />
        <circle cx="16" cy="15.5" r="0.7" fill="currentColor" />
        <circle cx="14" cy="18.5" r="0.7" fill="currentColor" />
        <circle cx="18" cy="18.5" r="0.7" fill="currentColor" />
      </svg>
    ),
  },
];

export function TrustRow() {
  return (
    <section className="relative py-16 md:py-20 bg-[#FDF8F0]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-mono text-[11px] tracking-[0.3em] uppercase text-[#325360]/70">
            Seal of honesty
          </span>
          <h3
            className="mt-2 text-2xl md:text-3xl font-serif text-[#263747] tracking-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            What you won&apos;t find, and where we&apos;re from.
          </h3>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {trust.map((t, i) => (
            <motion.div
              key={t.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: i * 0.08,
                ease: [0.25, 0.4, 0.25, 1],
              }}
              className="group flex flex-col items-center text-center bg-[#FAFBFB] rounded-2xl border border-[#325360]/10 p-5 hover:border-[#325360]/30 transition-colors"
            >
              <div className="w-12 h-12 text-[#325360] group-hover:text-[#AD9952] transition-colors">
                {t.svg}
              </div>
              <div className="mt-3 text-sm font-semibold text-[#263747]">
                {t.label}
              </div>
              <div className="mt-1 text-[10px] tracking-[0.15em] uppercase font-mono text-[#263747]/55">
                {t.sublabel}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
