import type { Variants, Transition } from "framer-motion";

// ---------------------------------------------------------------------------
// Shared spring configs — reuse across all animation primitives
// ---------------------------------------------------------------------------
export const springConfig = {
  stiffness: 100,
  damping: 30,
  restDelta: 0.001,
} as const;

export const snappySpring: Transition = {
  type: "spring",
  stiffness: 300,
  damping: 30,
};

export const gentleSpring: Transition = {
  type: "spring",
  stiffness: 100,
  damping: 20,
};

// ---------------------------------------------------------------------------
// fadeUpVariants — hero headline / eyebrow / CTA / benefits entrance
// Usage: pass `custom={i}` on each <motion.*> to stagger by i * 0.1s
// ---------------------------------------------------------------------------
export const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: [0.25, 0.4, 0.25, 1],
    },
  }),
};

// ---------------------------------------------------------------------------
// fadeInVariants — simple fade without vertical movement
// ---------------------------------------------------------------------------
export const fadeInVariants: Variants = {
  hidden: { opacity: 0 },
  visible: (i: number = 0) => ({
    opacity: 1,
    transition: {
      delay: i * 0.12,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

// ---------------------------------------------------------------------------
// scaleInVariants — product image entrance (scale + rotate spring)
// ---------------------------------------------------------------------------
export const scaleInVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8, rotate: -10 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { type: "spring", stiffness: 100, damping: 20 },
  },
};

// ---------------------------------------------------------------------------
// slideVariants — carousel with custom direction
// Pass `custom={direction}` (1 or -1) to control slide direction.
// ---------------------------------------------------------------------------
export const slideVariants: Variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
    scale: 0.9,
    rotateY: direction > 0 ? 15 : -15,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    rotateY: 0,
    transition: { type: "spring", stiffness: 300, damping: 30 },
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -300 : 300,
    opacity: 0,
    scale: 0.9,
    rotateY: direction > 0 ? -15 : 15,
    transition: { type: "spring", stiffness: 300, damping: 30 },
  }),
};

// ---------------------------------------------------------------------------
// containerVariants — stagger wrapper for grid / list parents
// ---------------------------------------------------------------------------
export const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.15,
    },
  },
};

// ---------------------------------------------------------------------------
// itemVariants — grid item entrance (y + scale spring)
// ---------------------------------------------------------------------------
export const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 20 },
  },
};

// ---------------------------------------------------------------------------
// mobileMenuVariants — expand / collapse for mobile navigation
// ---------------------------------------------------------------------------
export const mobileMenuVariants: Variants = {
  closed: { height: 0, opacity: 0, overflow: "hidden" as const },
  open: {
    height: "auto",
    opacity: 1,
    overflow: "hidden" as const,
    transition: { duration: 0.3, ease: [0.25, 0.4, 0.25, 1] },
  },
};

// ---------------------------------------------------------------------------
// parallaxRange — helper for scroll-linked parallax
// Returns a MotionValue-compatible range for useTransform
// ---------------------------------------------------------------------------
export const PARALLAX_OFFSET = { slow: 50, medium: 100, fast: 200 } as const;

// ---------------------------------------------------------------------------
// hoverScale — quick whileHover / whileTap presets for interactive elements
// ---------------------------------------------------------------------------
export const hoverScale = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.97 },
  transition: gentleSpring,
} as const;

export const hoverScaleSubtle = {
  whileHover: { scale: 1.02 },
  whileTap: { scale: 0.98 },
  transition: gentleSpring,
} as const;

// ---------------------------------------------------------------------------
// viewport defaults — shared IntersectionObserver-like trigger config
// ---------------------------------------------------------------------------
export const viewportOnce = {
  once: true,
  margin: "-80px" as const,
};

export const viewportRepeat = {
  once: false,
  margin: "-80px" as const,
};
