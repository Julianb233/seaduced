"use client";

import { motion } from "framer-motion";

/* -------------------------------------------------------------------------- */
/*  Instagram SVG — lucide-react doesn't export one in the installed version   */
/* -------------------------------------------------------------------------- */
function IgIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

/* -------------------------------------------------------------------------- */
/*  Animation config (inlined — the shared motion lib lives on another branch) */
/* -------------------------------------------------------------------------- */
const viewportOnce = { once: true, margin: "-80px" as const };
const easeSmooth: [number, number, number, number] = [0.25, 0.4, 0.25, 1];

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
};

const staggerItem = {
  hidden: { opacity: 0, y: 30, scale: 0.92 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring" as const, stiffness: 200, damping: 22 },
  },
};

/* -------------------------------------------------------------------------- */
/*  Grid data — gradient placeholders until Gina provides real IG images       */
/* -------------------------------------------------------------------------- */
const socialImages = [
  { id: 1, gradient: "from-[#3B5EAB]/40 to-[#1A6B5C]/40", label: "Ocean Fresh", alt: "Sea moss wellness lifestyle" },
  { id: 2, gradient: "from-[#C5A55A]/40 to-[#3B5EAB]/30", label: "Natural Texture", alt: "Ocean-inspired natural beauty" },
  { id: 3, gradient: "from-[#1A6B5C]/40 to-[#C5A55A]/30", label: "Naturally Intimate", alt: "Clean intimate wellness" },
  { id: 4, gradient: "from-[#3B5EAB]/30 to-[#1A6B5C]/50", label: "Sustainably Sourced", alt: "Natural plant-based care" },
  { id: 5, gradient: "from-[#C5A55A]/30 to-[#3B5EAB]/40", label: "Plant-Based", alt: "Seaduced intimate wellness" },
  { id: 6, gradient: "from-[#1A6B5C]/30 to-[#C5A55A]/40", label: "Connection", alt: "Clean beauty essentials" },
] as const;

/* -------------------------------------------------------------------------- */
/*  Social section — Instagram grid with gold hover overlay                    */
/* -------------------------------------------------------------------------- */
export function Social() {
  return (
    <section
      id="social"
      className="relative overflow-hidden bg-[#1E1E2E] py-20 sm:py-28"
    >
      {/* Subtle gradient bg */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1E1E2E] via-[#141420] to-[#1E1E2E]" />

      {/* Ambient gold glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C5A55A]/[0.04] blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        {/* Header */}
        <motion.div
          className="mb-14 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewportOnce}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="inline-block text-[10px] font-semibold uppercase tracking-[0.3em] text-[#C5A55A]"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ delay: 0.1 }}
          >
            Follow The Wave
          </motion.span>

          <div className="mt-2 overflow-hidden">
            <motion.h2
              className="text-4xl font-black tracking-tight text-white md:text-6xl"
              initial={{ y: 60 }}
              whileInView={{ y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.6, ease: easeSmooth, delay: 0.15 }}
            >
              @SEADUCED
              <span className="text-[#C5A55A]">.WELLNESS</span>
            </motion.h2>
          </div>

          <motion.div
            className="mx-auto mt-4 h-[2px] w-12 rounded-full bg-[#C5A55A]"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={viewportOnce}
            transition={{ duration: 0.6, delay: 0.4, ease: easeSmooth }}
          />
        </motion.div>

        {/* Instagram Grid 3x2 */}
        <motion.div
          className="grid grid-cols-2 gap-3 sm:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {socialImages.map((img) => (
            <motion.a
              key={img.id}
              href="#"
              aria-label={img.alt}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden rounded-2xl"
              variants={staggerItem}
            >
              {/* Placeholder gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${img.gradient}`} />

              {/* Dot-grid pattern */}
              <div className="absolute inset-0 opacity-20">
                <div className="h-full w-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:20px_20px]" />
              </div>

              {/* Placeholder label */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-sm font-medium text-white/40 transition-opacity duration-300 group-hover:opacity-0">
                  {img.label}
                </span>
              </div>

              {/* Gold gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#C5A55A]/40 via-[#C5A55A]/10 to-transparent transition-opacity duration-500" />

              {/* Instagram icon on hover */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#C5A55A]/90 text-[#1E1E2E] shadow-lg backdrop-blur-sm">
                  <IgIcon className="h-5 w-5" />
                </div>
              </div>

              {/* Border highlight on hover */}
              <div className="absolute inset-0 rounded-2xl ring-1 ring-white/5 transition-all duration-300 group-hover:ring-[#C5A55A]/40" />
            </motion.a>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="mt-10 flex justify-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.5, delay: 0.6, ease: easeSmooth }}
        >
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2.5 rounded-full bg-[#C5A55A] px-8 py-3.5 text-sm font-bold tracking-wide text-[#1E1E2E] transition-colors hover:bg-[#d4b76a]"
          >
            <IgIcon className="h-4 w-4" />
            Follow @seaduced.wellness
            <svg
              className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
