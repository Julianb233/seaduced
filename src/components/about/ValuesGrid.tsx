"use client";

import type React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { Leaf, HeartHandshake, Users, Waves } from "lucide-react";

type Value = {
  icon: typeof Leaf;
  title: string;
  description: string;
  accent: string;
};

const values: Value[] = [
  {
    icon: Leaf,
    title: "Plant-based",
    description:
      "Sea moss instead of petroleum. Plant polysaccharides instead of glycerin. Ingredients you can actually pronounce.",
    accent: "#2F4E3D",
  },
  {
    icon: HeartHandshake,
    title: "Body-positive",
    description:
      "No shame, no shrinking. Intimate care that treats your body like something to be celebrated, not fixed.",
    accent: "#AD9952",
  },
  {
    icon: Users,
    title: "Inclusive",
    description:
      "Built for every body, every age, every kind of love. Menopause, LGBTQ+, couples, solo — welcome, all of you.",
    accent: "#6793A0",
  },
  {
    icon: Waves,
    title: "Earth-first",
    description:
      "Wild-harvested sea moss, low-impact packaging, no marine microplastics. The ocean gave us this — we give back.",
    accent: "#325360",
  },
];

function ValueCard({ value, index }: { value: Value; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const ySpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(ySpring, [-0.5, 0.5], ["8deg", "-8deg"]);
  const rotateY = useTransform(xSpring, [-0.5, 0.5], ["-8deg", "8deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  const Icon = value.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.4, 0.25, 1] }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="relative group cursor-pointer"
    >
      {/* Glow */}
      <motion.div
        className="absolute -inset-[1px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `linear-gradient(135deg, ${value.accent}40, transparent, ${value.accent}40)`,
          filter: "blur(10px)",
        }}
      />

      {/* Card */}
      <div className="relative bg-[#FDF8F0] rounded-2xl p-6 md:p-8 border border-[#325360]/10 overflow-hidden h-full">
        {/* Subtle shine on hover */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100"
          initial={false}
          animate={
            isHovered
              ? {
                  background: [
                    "linear-gradient(105deg, transparent 20%, rgba(170,202,209,0.15) 25%, transparent 30%)",
                    "linear-gradient(105deg, transparent 70%, rgba(170,202,209,0.15) 75%, transparent 80%)",
                  ],
                }
              : {}
          }
          transition={{ duration: 1.6, repeat: Infinity, ease: "linear" }}
        />

        <div className="relative z-10 flex flex-col h-full min-h-[180px]">
          {/* Icon */}
          <motion.div
            className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 relative"
            style={{ backgroundColor: `${value.accent}18` }}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <motion.div
              className="absolute inset-0 rounded-xl"
              style={{ backgroundColor: value.accent }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                isHovered
                  ? { opacity: [0.15, 0.3, 0.15], scale: [1, 1.2, 1] }
                  : { opacity: 0, scale: 0.8 }
              }
              transition={{ duration: 1.6, repeat: Infinity }}
            />
            <Icon className="w-6 h-6 relative z-10" style={{ color: value.accent }} />
          </motion.div>

          {/* Title */}
          <h3
            className="text-2xl text-[#263747] tracking-tight"
            style={{ fontFamily: "var(--font-sans)", fontWeight: 700 }}
          >
            {value.title}
          </h3>

          <p className="text-sm md:text-base text-[#263747]/70 mt-2 leading-relaxed flex-1">
            {value.description}
          </p>

          {/* Bottom accent line */}
          <motion.div
            className="h-[2px] rounded-full mt-6"
            style={{ backgroundColor: value.accent }}
            initial={{ scaleX: 0, originX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.4 + index * 0.1,
              ease: [0.25, 0.4, 0.25, 1],
            }}
          />
        </div>
      </div>
    </motion.div>
  );
}

export function ValuesGrid() {
  return (
    <section className=" relative py-20 md:py-28 bg-luxe-teal noise-overlay overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#AACAD1] via-[#FDF8F0]/20 to-[#AACAD1]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <motion.span
            className="inline-block font-mono text-[#325360] text-xs tracking-[0.3em] uppercase mb-3"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            What we stand for
          </motion.span>

          <div className="overflow-hidden">
            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl text-[#263747] tracking-tight"
              style={{ fontFamily: "var(--font-sans)", fontWeight: 800 }}
              initial={{ y: 60, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
            >
              Four non-negotiables.
            </motion.h2>
          </div>

          <motion.div
            className="h-[2px] w-16 bg-[#AD9952] mx-auto mt-5 rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {values.map((value, i) => (
            <ValueCard key={value.title} value={value} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
