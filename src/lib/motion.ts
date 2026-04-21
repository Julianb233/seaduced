/**
 * Motion Primitives — Seaduced
 *
 * Centralised framer-motion variants, transitions, and helpers.
 * Import from "@/lib/motion" to keep animation behaviour consistent
 * across sections and layout components.
 */

import type { Variants, Transition } from "framer-motion";

/* ═══════════════════════════════════════════════════════════
   SPRING CONFIGS
   ═══════════════════════════════════════════════════════════ */

/** Snappy interactive spring — buttons, logos, small interactive elements */
export const springSnap = {
  type: "spring" as const,
  stiffness: 400,
  damping: 17,
};

/** Standard spring — slide/enter animations, page transitions */
export const springMedium = {
  type: "spring" as const,
  stiffness: 300,
  damping: 30,
};

/** Soft spring — large layout shifts, stat counter reveals */
export const springSoft = {
  type: "spring" as const,
  stiffness: 200,
  damping: 20,
};

/** Item-level spring — grid children, stagger items */
export const springItem = {
  type: "spring" as const,
  stiffness: 300,
  damping: 24,
};

/** Parallax-ready spring */
export const springConfig = {
  stiffness: 100,
  damping: 30,
  restDelta: 0.001,
} as const;

/* ═══════════════════════════════════════════════════════════
   EASE CURVES
   ═══════════════════════════════════════════════════════════ */

/** Smooth cubic for reveal/fade animations */
export const easeSmooth: [number, number, number, number] = [0.25, 0.4, 0.25, 1];

/** Ease-reveal transition preset */
export const easeReveal: Transition = {
  duration: 0.6,
  ease: easeSmooth,
};

/* ═══════════════════════════════════════════════════════════
   FADE / REVEAL VARIANTS
   ═══════════════════════════════════════════════════════════ */

/** Simple fade in (opacity only) */
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
};

/**
 * Fade-up with optional stagger index.
 * Usage: custom={i} on each element to stagger by i * 0.1s.
 */
export const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: easeSmooth,
    },
  }),
};

/** Fade-up (simple, no custom index) */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easeSmooth },
  },
};

/** Fade-down (for nav/header drops) */
export const fadeDown: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: easeSmooth },
  },
};

/** Scale-in with rotate (product image entrance) */
export const scaleInVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8, rotate: -10 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { type: "spring" as const, stiffness: 100, damping: 20 },
  },
};

/** Scale + fade (stats, badges, icons) */
export const scaleFade: Variants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: springSoft,
  },
};

/* ═══════════════════════════════════════════════════════════
   STAGGER CONTAINERS
   ═══════════════════════════════════════════════════════════ */

/** Stagger children by 80ms with 150ms initial delay */
export const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.15,
    },
  },
};

/** Stagger children by 80ms, no initial delay */
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

/** Stagger children by 120ms (slower pacing) */
export const staggerContainerSlow: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

/** Grid item entrance (y + scale spring) */
export const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring" as const, stiffness: 100, damping: 20 },
  },
};

/** Stagger child: fade + slide-up with snappier spring */
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: springItem,
  },
};

/* ═══════════════════════════════════════════════════════════
   SLIDE VARIANTS (Carousel / transitions)
   ═══════════════════════════════════════════════════════════ */

/**
 * Directional slide with 3D tilt.
 * Usage: custom={direction} where direction = 1 (next) or -1 (prev).
 */
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
    transition: springMedium,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -300 : 300,
    opacity: 0,
    scale: 0.9,
    rotateY: direction > 0 ? -15 : 15,
    transition: springMedium,
  }),
};

/**
 * Factory: build custom slide variants with configurable distance/tilt.
 */
export function makeSlideVariants(distance = 300, tilt = 15): Variants {
  return {
    enter: (dir: number) => ({
      x: dir > 0 ? distance : -distance,
      opacity: 0,
      scale: 0.9,
      rotateY: dir > 0 ? tilt : -tilt,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: springMedium,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -distance : distance,
      opacity: 0,
      scale: 0.9,
      rotateY: dir > 0 ? -tilt : tilt,
      transition: springMedium,
    }),
  };
}

/* ═══════════════════════════════════════════════════════════
   MOBILE MENU VARIANTS
   ═══════════════════════════════════════════════════════════ */

/** Slide-in panel from right */
export const mobileMenuVariants: Variants = {
  closed: {
    x: "100%",
    transition: springMedium,
  },
  open: {
    x: 0,
    transition: springMedium,
  },
};

/** Individual mobile link stagger (pass custom={index}) */
export const mobileLinkVariants: Variants = {
  closed: { opacity: 0, x: 30 },
  open: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: 0.1 + i * 0.06, duration: 0.3, ease: "easeOut" as const },
  }),
};

/** Backdrop overlay */
export const backdropVariants: Variants = {
  closed: { opacity: 0 },
  open: { opacity: 1 },
};

/* ═══════════════════════════════════════════════════════════
   LINE / UNDERLINE REVEALS
   ═══════════════════════════════════════════════════════════ */

/** Horizontal line from left (scaleX 0 to 1) */
export const lineReveal: Variants = {
  hidden: { scaleX: 0, originX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 0.8, ease: easeSmooth },
  },
};

/* ═══════════════════════════════════════════════════════════
   HOVER / TAP PRESETS
   ═══════════════════════════════════════════════════════════ */

/** Card lift (y:-8, scale:1.02) */
export const hoverLift = {
  whileHover: { y: -8, scale: 1.02 },
} as const;

/** Button/logo scale (1.04 hover, 0.97 tap) */
export const hoverScale = {
  whileHover: { scale: 1.04 },
  whileTap: { scale: 0.97 },
  transition: springSnap,
} as const;

/* ═══════════════════════════════════════════════════════════
   TILT CARD SPRING CONFIGS
   ═══════════════════════════════════════════════════════════ */

/** Default tilt spring (light) */
export const tiltSpring = { stiffness: 150, damping: 20 } as const;

/** Strong tilt spring */
export const tiltSpringStrong = { stiffness: 300, damping: 30 } as const;

/* ═══════════════════════════════════════════════════════════
   VIEWPORT DEFAULTS
   ═══════════════════════════════════════════════════════════ */

/** Fire once, -50px trigger margin */
export const viewportOnce = { once: true, margin: "-50px" as const };

/** Fire once, 20% visible */
export const viewportPartial = { once: true, amount: 0.2 as const };
