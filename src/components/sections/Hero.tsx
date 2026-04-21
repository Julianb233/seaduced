"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import { HeroBottleAnimation } from "./HeroBottleAnimation";

const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };

const fadeUpVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.8,
      ease: [0.25, 0.4, 0.25, 1] as const,
    },
  }),
};

const scaleInVariants = {
  hidden: { opacity: 0, scale: 0.8, rotate: -10 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 20,
      delay: 0.3,
    },
  },
};

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const rawY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y = useSpring(rawY, springConfig);

  const rawTextX1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const textX1 = useSpring(rawTextX1, springConfig);

  const rawTextX2 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const textX2 = useSpring(rawTextX2, springConfig);

  const rawScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);
  const scale = useSpring(rawScale, springConfig);

  const rawOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const opacity = useSpring(rawOpacity, springConfig);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-[100vh] flex items-center justify-center overflow-hidden noise-overlay bg-[#AACAD1]"
    >
      {/* Ocean-flow gradient — white at top easing down fully into light teal by the bottom
          so the seam with the next section is seamless (no white space). */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to bottom, #FFFFFF 0%, #F4F8F8 10%, #E2ECEE 30%, #C8DCE0 55%, #AACAD1 82%, #AACAD1 100%)",
          y: useTransform(scrollYProgress, [0, 1], ["0%", "-8%"]),
        }}
      />

      {/* Subtle warm side-light wash for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-[#FDF8F0]/15 to-transparent" />

      <motion.div
        className="absolute top-20 left-10 w-24 h-24 rounded-full bg-[#AD9952]/20 blur-3xl"
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-40 right-20 w-32 h-32 rounded-full bg-[#6793A0]/25 blur-3xl"
        animate={{
          x: [0, -40, 0],
          y: [0, 30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-12">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <motion.div style={{ opacity }} className="space-y-5">
            <motion.div
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              custom={0}
              className="inline-flex items-center gap-2 bg-[#263747] text-[#FAFBFB] px-3 py-1.5 rounded-full text-xs font-mono tracking-wider"
            >
              <motion.span
                className="w-2 h-2 bg-[#AD9952] rounded-full"
                animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              />
              NATURALLY INTIMATE WELLNESS
            </motion.div>

            <div className="space-y-1 overflow-hidden">
              <motion.h1
                style={{ x: textX1 }}
                className="text-5xl md:text-7xl font-black tracking-tighter text-[#263747] leading-[0.9]"
              >
                <motion.span
                  variants={fadeUpVariants}
                  initial="hidden"
                  animate="visible"
                  custom={1}
                  className="inline-block"
                >
                  FEEL
                </motion.span>
              </motion.h1>
              <motion.h1
                style={{ x: textX2 }}
                className="text-5xl md:text-7xl font-black tracking-tighter text-[#263747] leading-[0.9]"
              >
                <motion.span
                  variants={fadeUpVariants}
                  initial="hidden"
                  animate="visible"
                  custom={2}
                  className="inline-block text-[#AD9952]"
                >
                  SEADUCED
                </motion.span>
              </motion.h1>
              <motion.p
                variants={fadeUpVariants}
                initial="hidden"
                animate="visible"
                custom={3}
                className="text-lg md:text-xl font-mono text-[#263747]/70 tracking-tight pt-2 max-w-md"
              >
                Sea-moss infused. pH-balanced. Plant-based intimacy,
                crafted for every body.
              </motion.p>
            </div>

            <motion.div
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              custom={4}
              className="flex flex-wrap gap-3 pt-2"
            >
              <motion.button
                className="bg-[#AD9952] text-[#263747] px-6 py-3 rounded-full font-bold text-sm tracking-wide flex items-center gap-2 group relative overflow-hidden"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full"
                  whileHover={{ x: "200%" }}
                  transition={{ duration: 0.6 }}
                />
                <span className="relative z-10">Shop the Ritual</span>
                <motion.svg
                  className="w-4 h-4 relative z-10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  initial={{ x: 0 }}
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </motion.svg>
              </motion.button>
              <motion.button
                className="border-2 border-[#325360] text-[#325360] px-6 py-3 rounded-full font-bold text-sm tracking-wide relative overflow-hidden"
                whileHover={{ scale: 1.02, backgroundColor: "#325360", color: "#fff" }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                Learn More
              </motion.button>
            </motion.div>

            <motion.div
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              custom={5}
              className="flex flex-wrap gap-4 pt-2"
            >
              {["92 Minerals", "pH-Balanced", "Plant-Based", "Sea Moss Infused"].map(
                (benefit, i) => (
                  <motion.div
                    key={benefit}
                    className="flex items-center gap-2 text-xs font-mono text-[#263747]/70"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + i * 0.1 }}
                  >
                    <div className="w-1.5 h-1.5 bg-[#AD9952] rounded-full" />
                    {benefit}
                  </motion.div>
                ),
              )}
            </motion.div>
          </motion.div>

          <motion.div
            style={{ y, scale }}
            variants={scaleInVariants}
            initial="hidden"
            animate="visible"
            className="relative flex justify-center items-center min-h-[420px] md:min-h-[560px]"
          >
            <HeroBottleAnimation />
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-6 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          >
            <div className="w-5 h-8 border-2 border-[#263747]/30 rounded-full flex justify-center pt-1.5">
              <motion.div
                className="w-1 h-2 bg-[#263747]/30 rounded-full"
                animate={{ y: [0, 6, 0], opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
