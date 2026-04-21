"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import type React from "react";

const steps = [
  {
    num: "01",
    title: "Apply",
    body:
      "A pea-sized pump is usually plenty. Warm it between fingertips — it activates into a silk-smooth feel.",
    tag: "30 seconds",
    accent: "#6793A0",
  },
  {
    num: "02",
    title: "Enjoy",
    body:
      "Water-based and condom-compatible, so it plays nicely with everything. Long-lasting, no tacky finish.",
    tag: "As long as you want",
    accent: "#AD9952",
  },
  {
    num: "03",
    title: "Reapply",
    body:
      "Add a little more whenever. Seaduced doesn't flake, gum up, or leave a residue — just reach for the bottle.",
    tag: "As needed",
    accent: "#325360",
  },
];

function TiltCard({
  step,
  index,
}: {
  step: (typeof steps)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 280, damping: 25 });
  const mouseYSpring = useSpring(y, { stiffness: 280, damping: 25 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
        ease: [0.25, 0.4, 0.25, 1],
      }}
      className="group relative"
    >
      <div
        className="absolute -inset-[1px] rounded-3xl opacity-0 group-hover:opacity-60 transition-opacity duration-500 blur-lg"
        style={{
          background: `linear-gradient(135deg, ${step.accent}40, transparent, ${step.accent}40)`,
        }}
      />
      <div
        className="relative bg-[#FAFBFB] rounded-3xl border border-[#325360]/10 p-8 md:p-9 overflow-hidden h-full"
        style={{ transform: "translateZ(20px)" }}
      >
        <div
          className="absolute -top-24 -right-24 w-56 h-56 rounded-full blur-3xl opacity-20"
          style={{ backgroundColor: step.accent }}
        />
        <div
          className="font-serif text-6xl md:text-7xl tracking-tight opacity-80"
          style={{
            fontFamily: "'Playfair Display', serif",
            color: step.accent,
          }}
        >
          {step.num}
        </div>
        <div
          className="mt-2 text-2xl md:text-3xl font-serif text-[#263747] tracking-tight"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {step.title}
        </div>
        <p className="mt-3 text-sm md:text-base text-[#263747]/75 leading-relaxed">
          {step.body}
        </p>
        <div
          className="mt-6 inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.3em] uppercase px-3 py-1.5 rounded-full"
          style={{
            color: step.accent,
            backgroundColor: `${step.accent}15`,
          }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full"
            style={{ backgroundColor: step.accent }}
          />
          {step.tag}
        </div>
      </div>
    </motion.div>
  );
}

export function HowToUse() {
  return (
    <section className="relative py-20 md:py-28 bg-luxe-cream noise-overlay overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-12 md:mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-mono text-[11px] tracking-[0.3em] uppercase text-[#325360]/70">
            How to use
          </span>
          <div className="overflow-hidden mt-2">
            <motion.h2
              className="text-3xl md:text-5xl font-serif text-[#263747] tracking-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
              initial={{ y: 80 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
            >
              A three&#8209;step ritual.
            </motion.h2>
          </div>
          <p className="mt-4 text-[#263747]/70 max-w-xl mx-auto">
            It&apos;s personal lubricant. It shouldn&apos;t require a manual.
          </p>
        </motion.div>

        <div
          className="grid md:grid-cols-3 gap-6"
          style={{ perspective: 1200 }}
        >
          {steps.map((s, i) => (
            <TiltCard key={s.num} step={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
