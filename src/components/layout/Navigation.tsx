"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useLenis } from "lenis/react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const lenis = useLenis();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href) as HTMLElement | null;
      if (element && lenis) {
        lenis.scrollTo(element, { offset: -100 });
      }
    }
    setMobileMenuOpen(false);
  };

  const isAnchor = (href: string) => href.startsWith("#");

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-charcoal/95 backdrop-blur-md border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo: "SEADUCED" in Playfair (font-brand), last 2 chars "ED" in gold
            with pulsing text-shadow when scrolled */}
        <Link href="/" className="flex items-center gap-2">
          <motion.span
            className="text-2xl font-brand"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <span className="text-white">SEADUC</span>
            <motion.span
              className="text-gold"
              animate={{
                textShadow: scrolled
                  ? [
                      "0 0 10px rgba(197,165,90,0.5)",
                      "0 0 20px rgba(197,165,90,0.8)",
                      "0 0 10px rgba(197,165,90,0.5)",
                    ]
                  : "none",
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              ED
            </motion.span>
          </motion.span>
        </Link>

        {/* Desktop nav links with hover underline that grows from left (scaleX 0->1) */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((item, i) =>
            isAnchor(item.href) ? (
              <motion.button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="text-sm font-medium tracking-wide transition-colors relative text-white/80 hover:text-gold group"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: i * 0.1,
                  duration: 0.4,
                  ease: [0.25, 0.4, 0.25, 1],
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
                <motion.span
                  className="absolute -bottom-1 left-0 w-full h-0.5 bg-gold origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{
                    duration: 0.3,
                    ease: [0.25, 0.4, 0.25, 1],
                  }}
                />
              </motion.button>
            ) : (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: i * 0.1,
                  duration: 0.4,
                  ease: [0.25, 0.4, 0.25, 1],
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={item.href}
                  className="text-sm font-medium tracking-wide transition-colors relative text-white/80 hover:text-gold group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gold origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </Link>
              </motion.div>
            )
          )}
        </div>

        {/* CTA pill: "Pre-order" with shimmer + pulse-glow loop (gold) */}
        <motion.button
          className="hidden md:block bg-gold text-charcoal px-6 py-2.5 rounded-full font-bold text-sm tracking-wide relative overflow-hidden"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          {/* Pulse glow */}
          <motion.div
            className="absolute inset-0"
            animate={{
              boxShadow: [
                "0 0 20px rgba(197,165,90,0.3)",
                "0 0 40px rgba(197,165,90,0.6)",
                "0 0 20px rgba(197,165,90,0.3)",
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          {/* Shimmer sweep */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full"
            animate={{ x: ["-100%", "200%"] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 3,
            }}
          />
          <span className="relative z-10">Pre-order</span>
        </motion.button>

        {/* Mobile hamburger / X icon with rotate-swap via AnimatePresence mode=wait */}
        <motion.button
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          whileTap={{ scale: 0.9 }}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          <AnimatePresence mode="wait">
            {mobileMenuOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="text-white" size={24} />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu className="text-white" size={24} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Mobile slide-in menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
            className="md:hidden bg-charcoal/95 backdrop-blur-md border-t border-white/10 overflow-hidden"
          >
            <div className="px-6 py-4 space-y-4">
              {NAV_LINKS.map((item, i) =>
                isAnchor(item.href) ? (
                  <motion.button
                    key={item.label}
                    onClick={() => scrollToSection(item.href)}
                    className="block w-full text-left text-white/80 hover:text-gold text-lg font-medium py-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    {item.label}
                  </motion.button>
                ) : (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className="block w-full text-left text-white/80 hover:text-gold text-lg font-medium py-2"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                )
              )}
              {/* Mobile CTA */}
              <motion.button
                className="w-full bg-gold text-charcoal px-6 py-3 rounded-full font-bold text-sm tracking-wide mt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Pre-order
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
