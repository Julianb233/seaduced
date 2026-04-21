"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  motion,
  AnimatePresence,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { Menu, X } from "lucide-react";
import { BRAND, NAV_LINKS } from "@/lib/constants";

/* ─── animation variants ─── */

const mobileMenuVariants = {
  closed: {
    x: "100%",
    transition: { type: "spring" as const, stiffness: 300, damping: 30 },
  },
  open: {
    x: 0,
    transition: { type: "spring" as const, stiffness: 300, damping: 30 },
  },
};

const mobileLinkVariants = {
  closed: { opacity: 0, x: 30 },
  open: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: 0.1 + i * 0.06, duration: 0.3, ease: "easeOut" as const },
  }),
};

const backdropVariants = {
  closed: { opacity: 0 },
  open: { opacity: 1 },
};

/* ─── component ─── */

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const lastScrollY = useRef(0);
  const pathname = usePathname();

  const { scrollY } = useScroll();

  /* Scroll-aware: show/hide on direction, blur bg after 50px */
  useMotionValueEvent(scrollY, "change", (latest) => {
    const diff = latest - lastScrollY.current;

    // Scrolled past 50px = frosted bg
    setScrolled(latest > 50);

    // Hide on scroll down (>10px delta), show on scroll up
    if (diff > 10 && latest > 100) {
      setHidden(true);
    } else if (diff < -5) {
      setHidden(false);
    }

    lastScrollY.current = latest;
  });

  /* Close mobile menu on route change */
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  /* Lock body scroll when mobile menu open */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const toggleMobile = useCallback(() => setMobileOpen((prev) => !prev), []);

  return (
    <>
      {/* ── Desktop / mobile top bar ── */}
      <motion.header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
          scrolled
            ? "border-b border-white/10 bg-charcoal/80 backdrop-blur-xl"
            : "bg-transparent"
        }`}
        initial={{ y: 0 }}
        animate={{ y: hidden ? -100 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          {/* Logo — white SEADUC + gold ED */}
          <Link href="/" className="group flex items-center gap-1">
            <motion.span
              className="text-xl font-black tracking-tight"
              whileHover={{ scale: 1.04 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <span className="text-white">SEADUC</span>
              <span className="text-gold">ED</span>
            </motion.span>
          </Link>

          {/* Desktop links — hidden on mobile */}
          <div className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group relative font-mono text-sm text-white/70 transition-colors hover:text-white"
                >
                  {link.label}
                  {/* Active / hover underline */}
                  <span
                    className={`absolute -bottom-1 left-0 h-px bg-gold transition-all duration-300 ${
                      active ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}

            {/* Shimmer CTA button */}
            <Link href="/#product">
              <motion.span
                className="group relative inline-flex items-center overflow-hidden rounded-full bg-gold px-5 py-2 text-sm font-bold tracking-wide text-charcoal"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                {/* Shimmer sweep */}
                <span
                  className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full"
                  aria-hidden="true"
                />
                <span className="relative z-10">Shop Now</span>
              </motion.span>
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={toggleMobile}
            className="relative z-50 flex h-10 w-10 items-center justify-center rounded-lg text-white transition-colors hover:bg-white/10 md:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            <AnimatePresence mode="wait">
              {mobileOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <X size={22} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <Menu size={22} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </nav>
      </motion.header>

      {/* ── Mobile slide-in panel ── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
              variants={backdropVariants}
              initial="closed"
              animate="open"
              exit="closed"
              onClick={toggleMobile}
            />

            {/* Panel — slides in from right */}
            <motion.div
              className="fixed inset-y-0 right-0 z-40 flex w-4/5 max-w-sm flex-col bg-charcoal px-8 pt-24 pb-8"
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              {/* Noise overlay */}
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.03]"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                }}
                aria-hidden="true"
              />

              {/* Links */}
              <div className="relative flex flex-1 flex-col gap-2">
                {NAV_LINKS.map((link, i) => {
                  const active = pathname === link.href;
                  return (
                    <motion.div
                      key={link.href}
                      custom={i}
                      variants={mobileLinkVariants}
                      initial="closed"
                      animate="open"
                      exit="closed"
                    >
                      <Link
                        href={link.href}
                        onClick={toggleMobile}
                        className={`block rounded-lg px-4 py-3 text-2xl font-bold tracking-tight transition-colors ${
                          active
                            ? "bg-gold/10 text-gold"
                            : "text-white/80 hover:bg-white/5 hover:text-white"
                        }`}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              {/* Mobile CTA */}
              <motion.div
                custom={NAV_LINKS.length}
                variants={mobileLinkVariants}
                initial="closed"
                animate="open"
                exit="closed"
              >
                <Link
                  href="/#product"
                  onClick={toggleMobile}
                  className="group relative mt-4 block overflow-hidden rounded-xl bg-gold py-4 text-center text-lg font-bold tracking-wide text-charcoal"
                >
                  {/* Shimmer */}
                  <span
                    className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full"
                    aria-hidden="true"
                  />
                  <span className="relative z-10">Shop Now</span>
                </Link>
              </motion.div>

              {/* Brand footer in panel */}
              <p className="mt-6 text-center font-mono text-xs text-white/30">
                {BRAND.tagline}
              </p>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
