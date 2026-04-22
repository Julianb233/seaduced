"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

type Destination = {
  label: string;
  href: string;
  description?: string;
  variant?: "primary" | "secondary" | "ghost";
  external?: boolean;
};

const DESTINATIONS: Destination[] = [
  {
    label: "Shop Seaduced",
    href: "/product",
    description: "5 oz sea-moss-infused personal lubricant. $20-$35.",
    variant: "primary",
  },
  {
    label: "Read the Journal",
    href: "/blog",
    description: "Editorial on intimate wellness, self-care, and the ocean.",
    variant: "secondary",
  },
  {
    label: "The Science",
    href: "/science",
    description: "Why sea moss. Why pH matters. Why plant-based matters.",
    variant: "ghost",
  },
  {
    label: "Ingredients",
    href: "/ingredients",
    description: "Every ingredient, transparent and labeled.",
    variant: "ghost",
  },
  {
    label: "Our Story",
    href: "/about",
    description: "Made from the sea. Made for you.",
    variant: "ghost",
  },
  {
    label: "Instagram - @seaduced",
    href: "https://instagram.com/seaduced",
    description: "Behind the bottle.",
    variant: "ghost",
    external: true,
  },
  {
    label: "Contact",
    href: "/contact",
    description: "Press, wholesale, and hellos.",
    variant: "ghost",
  },
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 120, damping: 20 },
  },
};

export function LinkTree() {
  return (
    <main
      className="min-h-screen w-full relative overflow-hidden noise-overlay"
      style={{
        background:
          "linear-gradient(180deg, #FFFFFF 0%, #F4F8F8 14%, #DDE8EA 32%, #C0D6DA 50%, #AACAD1 72%, #9DC2C9 100%), radial-gradient(ellipse at 20% 10%, rgba(173,153,82,0.12) 0%, transparent 55%), radial-gradient(ellipse at 80% 90%, rgba(50,83,96,0.18) 0%, transparent 60%)",
        backgroundBlendMode: "normal, screen, multiply",
      }}
    >
      {/* Textured grain veil */}
      <div className="absolute inset-0 opacity-[0.06] mix-blend-multiply pointer-events-none"
        style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* Layered bokeh — luxury depth */}
      <motion.div
        className="absolute top-24 left-12 w-40 h-40 rounded-full blur-3xl pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(103,147,160,0.35) 0%, rgba(103,147,160,0) 70%)",
        }}
        animate={{ x: [0, 24, 0], y: [0, -18, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-16 right-12 w-48 h-48 rounded-full blur-3xl pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(173,153,82,0.28) 0%, rgba(173,153,82,0) 70%)",
        }}
        animate={{ x: [0, -24, 0], y: [0, 18, 0], scale: [1, 1.12, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/2 right-4 w-32 h-32 rounded-full blur-3xl pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(50,83,96,0.22) 0%, rgba(50,83,96,0) 70%)",
        }}
        animate={{ x: [0, 18, 0], y: [0, -14, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 max-w-md mx-auto px-6 pt-20 pb-24 flex flex-col items-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
          className="mb-4"
        >
          <Image
            src="/brand/seaduced-logo-blue-seamoss.png"
            alt="Seaduced"
            width={96}
            height={96}
            className="w-24 h-24 object-contain"
            priority
          />
        </motion.div>

        {/* Wordmark */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.25, 0.4, 0.25, 1] }}
          className="text-3xl md:text-4xl tracking-[0.12em] text-[#263747] text-center"
          style={{ fontFamily: "var(--font-sans)" }}
        >
          SEA<span className="text-[#AD9952]">DUCED</span>
        </motion.h1>

        {/* Bio */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-3 text-center text-[#325360] text-sm leading-relaxed max-w-sm"
          style={{ fontFamily: "var(--font-mono, monospace)" }}
        >
          Naturally Intimate. Sea-moss-infused. Made for every body.
        </motion.p>

        {/* Links */}
        <motion.nav
          variants={container}
          initial="hidden"
          animate="visible"
          className="w-full mt-10 space-y-3"
        >
          {DESTINATIONS.map((dest) => (
            <motion.div key={dest.label} variants={item}>
              {dest.external ? (
                <a
                  href={dest.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonClass(dest.variant)}
                >
                  <ButtonContent dest={dest} />
                </a>
              ) : (
                <Link href={dest.href} className={buttonClass(dest.variant)}>
                  <ButtonContent dest={dest} />
                </Link>
              )}
            </motion.div>
          ))}
        </motion.nav>

        {/* Footer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mt-16 text-xs text-[#263747]/50 tracking-wider"
          style={{ fontFamily: "var(--font-mono, monospace)" }}
        >
          seaducedproducts.com
        </motion.p>
      </div>
    </main>
  );
}

function buttonClass(variant: Destination["variant"] = "ghost") {
  // Luxury: every button has a gradient surface + subtle inner highlight + depth shadow
  const base =
    "group relative w-full block rounded-2xl px-5 py-4 transition-all duration-300 border backdrop-blur-sm hover:-translate-y-0.5 hover:shadow-xl overflow-hidden";
  if (variant === "primary") {
    // Champagne gradient — luxurious metal feel
    return `${base} text-[#FAFBFB] border-[#AD9952]/60 shadow-lg shadow-[#AD9952]/20 hover:shadow-[#AD9952]/40 bg-gradient-to-br from-[#C5B375] via-[#AD9952] to-[#8C7A3A]`;
  }
  if (variant === "secondary") {
    // Deep ocean gradient — premium dark
    return `${base} text-[#FAFBFB] border-[#263747]/80 shadow-lg shadow-[#263747]/25 hover:shadow-[#263747]/40 bg-gradient-to-br from-[#325360] via-[#263747] to-[#1a2a3a]`;
  }
  // Ghost: glassmorphism over the page gradient
  return `${base} text-[#263747] border-white/50 bg-gradient-to-br from-white/75 via-white/55 to-white/40 hover:from-white/90 hover:via-white/70 hover:to-white/55 shadow-md shadow-[#325360]/10 hover:shadow-[#325360]/25`;
}

function ButtonContent({ dest }: { dest: Destination }) {
  return (
    <div className="flex items-center justify-between gap-3">
      <div className="flex-1 text-left">
        <div className="font-semibold tracking-wide">{dest.label}</div>
        {dest.description && (
          <div
            className="mt-0.5 text-xs opacity-75"
            style={{ fontFamily: "var(--font-mono, monospace)" }}
          >
            {dest.description}
          </div>
        )}
      </div>
      <svg
        className="w-4 h-4 flex-shrink-0 opacity-70"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17 8l4 4m0 0l-4 4m4-4H3"
        />
      </svg>
    </div>
  );
}
