"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import {
  fadeUpVariants,
  easeSmooth,
  springConfig,
  viewportOnce,
} from "@/lib/motion";

export default function ProductHero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const bottleY = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -120]),
    springConfig
  );
  const textY = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 80]),
    springConfig
  );
  const bottleScale = useSpring(
    useTransform(scrollYProgress, [0, 0.5], [1, 1.05]),
    springConfig
  );

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-[80vh] items-center justify-center overflow-hidden bg-[#1E1E2E] pt-24"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#1E1E2E] via-[#141420] to-[#1E1E2E]" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#C5A55A]/5 blur-[120px]" />

      <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 items-center gap-8 px-6 md:grid-cols-2 md:gap-12">
        <motion.div style={{ y: textY }}>
          <motion.span
            className="inline-block font-mono text-[10px] font-semibold uppercase tracking-[0.3em] text-[#C5A55A]"
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            custom={0}
          >
            The Product
          </motion.span>

          <div className="overflow-hidden mt-2">
            <motion.h1
              className="font-[var(--font-playfair)] text-4xl font-black tracking-tight text-white md:text-6xl"
              initial={{ y: 80 }}
              whileInView={{ y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.7, ease: easeSmooth }}
            >
              Sea Moss
              <br />
              <span className="text-[#C5A55A]">Lubricant</span>
            </motion.h1>
          </div>

          <motion.p
            className="mt-4 max-w-md text-base leading-relaxed text-white/60 md:text-lg"
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            custom={2}
          >
            Sea moss-infused. Plant-based. pH-balanced. Naturally silky for
            intimate wellness.
          </motion.p>

          <motion.div
            className="mt-6 flex flex-wrap gap-3"
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            custom={3}
          >
            <span className="rounded-full border border-[#C5A55A]/30 bg-[#C5A55A]/10 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-[#C5A55A]">
              5 oz
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-white/50">
              Water-Based
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-white/50">
              Paraben-Free
            </span>
          </motion.div>
        </motion.div>

        <motion.div
          className="relative flex items-center justify-center"
          style={{ y: bottleY, scale: bottleScale }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={viewportOnce}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 20,
              delay: 0.2,
            }}
            className="relative"
          >
            <div className="absolute inset-0 scale-150 rounded-full bg-gradient-to-br from-[#C5A55A]/20 via-transparent to-[#3B5EAB]/10 blur-3xl" />
            <Image
              src="/brand/seaduced-logo-green-seamoss.png"
              alt="Seaduced Sea Moss Lubricant - 5oz bottle"
              width={400}
              height={500}
              priority
              className="relative z-10 drop-shadow-2xl"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
