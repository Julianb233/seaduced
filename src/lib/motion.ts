/**
 * Shared Framer Motion utilities — Seaduced brand animations
 * Used across all section components for consistent motion language.
 */

/** Standard viewport trigger — fires once when 20% visible */
export const viewportOnce = { once: true, amount: 0.2 } as const;

/** Cubic-bezier for smooth entrances (ease-out-quart feel) */
export const easeSmooth: [number, number, number, number] = [0.22, 1, 0.36, 1];

/** Stagger container — orchestrates children entry */
export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
} as const;

/** Individual stagger item — fade-up with spring */
export const staggerItem = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 16,
    },
  },
} as const;

/** Fade-up variant for simple reveals */
export const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeSmooth },
  },
} as const;

/** Spring config for tilt-card mouse-follow */
export const tiltSpring = {
  stiffness: 150,
  damping: 20,
  mass: 0.2,
} as const;

/**
 * Fade-up with stagger index.
 * Usage: custom={i} on each element to stagger by i * 0.1s.
 */
export const fadeUpVariants = {
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

/** Parallax-ready spring config */
export const springConfig = {
  stiffness: 100,
  damping: 30,
  restDelta: 0.001,
} as const;
