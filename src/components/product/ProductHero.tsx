"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function ProductHero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Parallax: bottle drifts up faster than background, background mist drifts down
  const bottleY = useTransform(scrollYProgress, [0, 1], [0, -180]);
  const bottleScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const mistY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const copyOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0.3]);

  return (
    <section
      ref={ref}
      className="relative min-h-[92vh] flex items-center justify-center overflow-hidden noise-overlay pt-28 pb-16"
    >
      {/* Layer 1: base aqua-pale wash + cream-mist gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#AACAD1] via-[#FDF8F0]/40 to-[#AACAD1]" />

      {/* Layer 2: ambient blurred color bloom */}
      <motion.div
        className="absolute top-24 left-[8%] w-72 h-72 rounded-full bg-[#6793A0]/25 blur-3xl"
        animate={{ x: [0, 40, 0], y: [0, -25, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-16 right-[10%] w-96 h-96 rounded-full bg-[#AD9952]/15 blur-3xl"
        animate={{ x: [0, -35, 0], y: [0, 20, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Layer 3: parallax mist image (f2-beauty) */}
      <motion.div
        className="absolute inset-0 opacity-40 mix-blend-multiply"
        style={{ y: mistY }}
      >
        <Image
          src="/images/parallax/f2-beauty.jpg"
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#AACAD1]/60 via-transparent to-[#AACAD1]" />
      </motion.div>

      <div className="relative z-10 grid md:grid-cols-2 gap-10 md:gap-16 max-w-7xl mx-auto px-6 w-full items-center">
        {/* Copy column */}
        <motion.div style={{ opacity: copyOpacity }} className="text-center md:text-left">
          <motion.span
            className="inline-block font-mono text-[#325360]/70 text-[11px] tracking-[0.3em] uppercase mb-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            The Signature Bottle
          </motion.span>

          <div className="overflow-hidden">
            <motion.h1
              className="text-5xl md:text-7xl lg:text-[5.5rem] font-serif text-[#263747] leading-[0.95] tracking-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
            >
              Naturally
              <br />
              <span className="italic text-[#325360]">Intimate.</span>
            </motion.h1>
          </div>

          <motion.p
            className="mt-6 text-base md:text-lg text-[#263747]/75 max-w-xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            5 oz of sea moss&#8209;infused personal lubricant. 92 essential minerals,
            pH&#8209;balanced, plant&#8209;based. Made for every body, every chapter.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap items-center gap-4 justify-center md:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <a
              href="#price"
              className="group relative inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-[#AD9952] text-[#FAFBFB] font-medium text-sm tracking-wide shadow-lg shadow-[#AD9952]/20 hover:shadow-xl hover:shadow-[#AD9952]/30 transition-shadow"
            >
              <span>Add to Ritual</span>
              <span className="font-mono text-[#FAFBFB]/80">$28</span>
              <span className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/20" />
            </a>
            <a
              href="#gallery"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-[#325360]/50 text-[#325360] font-medium text-sm tracking-wide hover:bg-[#325360] hover:text-[#FAFBFB] transition-colors"
            >
              See the bottle
            </a>
          </motion.div>

          <motion.div
            className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start font-mono text-[10px] tracking-[0.25em] uppercase text-[#263747]/60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <span>5 oz / 148 ml</span>
            <span className="text-[#AD9952]">&bull;</span>
            <span>Vegan</span>
            <span className="text-[#AD9952]">&bull;</span>
            <span>Made in USA</span>
          </motion.div>
        </motion.div>

        {/* Bottle column — parallax */}
        <motion.div
          style={{ y: bottleY, scale: bottleScale }}
          className="relative mx-auto w-full max-w-md aspect-[3/4]"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.25, 0.4, 0.25, 1] }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#FDF8F0]/40 via-transparent to-[#6793A0]/20 rounded-[3rem] blur-2xl" />
          <Image
            src="/images/hero-bottle.png"
            alt="Seaduced 5 oz sea moss personal lubricant bottle"
            fill
            priority
            className="object-contain drop-shadow-[0_40px_60px_rgba(38,55,71,0.25)]"
            sizes="(max-width: 768px) 80vw, 500px"
          />
          {/* Floating mineral count */}
          <motion.div
            className="absolute top-6 right-0 md:right-[-1rem] bg-[#FAFBFB]/90 backdrop-blur border border-[#325360]/15 rounded-2xl px-4 py-3 shadow-xl"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="font-mono text-[9px] tracking-[0.25em] uppercase text-[#325360]/70">
              Minerals
            </div>
            <div
              className="text-3xl font-black text-[#AD9952] tracking-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              92
            </div>
          </motion.div>
          <motion.div
            className="absolute bottom-8 left-0 md:left-[-1rem] bg-[#325360] text-[#FAFBFB] rounded-2xl px-4 py-3 shadow-xl"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <div className="font-mono text-[9px] tracking-[0.25em] uppercase text-[#AACAD1]/80">
              pH
            </div>
            <div
              className="text-2xl font-black tracking-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              3.8&ndash;4.5
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
