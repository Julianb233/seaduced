"use client";

import type React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { Droplets, Scale, Leaf, Heart, Shield, Sparkles } from "lucide-react";
import {
  staggerContainer,
  staggerItem,
  viewportOnce,
  easeSmooth,
  tiltSpring,
} from "@/lib/motion";

const ingredients = [
  {
    icon: Droplets,
    title: "Organic Irish Sea Moss",
    description:
      "Wildcrafted Chondrus crispus rich in carrageenan - a natural thickener that creates silky, long-lasting glide.",
    accent: "#C5A55A",
    span: "md:col-span-2",
  },
  {
    icon: Scale,
    title: "pH-Balanced Formula",
    description:
      "Formulated between 3.8-4.5 to match your body's natural acidity, supporting healthy flora.",
    accent: "#3B5EAB",
    span: "",
  },
  {
    icon: Leaf,
    title: "Aloe Vera Extract",
    description:
      "Soothing, moisturizing botanical that helps prevent irritation and supports natural hydration.",
    accent: "#1A6B5C",
    span: "",
  },
  {
    icon: Shield,
    title: "Zero Harsh Chemicals",
    description:
      "No parabens, glycerin, petroleum, silicone, or artificial fragrances. Clean from cap to last drop.",
    accent: "#C5A55A",
    span: "",
  },
  {
    icon: Heart,
    title: "Vegan & Cruelty-Free",
    description:
      "100% plant-based formulation. Never tested on animals. Good for you and the planet.",
    accent: "#C5A55A",
    span: "",
  },
  {
    icon: Sparkles,
    title: "92 Essential Minerals",
    description:
      "Sea moss delivers 92 of the 102 minerals your body needs - zinc, magnesium, potassium, and more.",
    accent: "#3B5EAB",
    span: "md:col-span-2",
  },
];

function TiltCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mx = useSpring(x, tiltSpring);
  const my = useSpring(y, tiltSpring);

  const rotateX = useTransform(my, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mx, [-0.5, 0.5], ["-10deg", "10deg"]);

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
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      variants={staggerItem}
    >
      {children}
    </motion.div>
  );
}

export default function IngredientHighlights() {
  return (
    <section className="relative py-20 sm:py-28 overflow-hidden bg-[#1E1E2E]">
      <div className="absolute inset-0 bg-gradient-to-b from-[#1E1E2E] via-[#0f0f1a] to-[#1E1E2E]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewportOnce}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="inline-block font-mono text-[10px] font-semibold uppercase tracking-[0.3em] text-[#C5A55A]"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ delay: 0.1 }}
          >
            What&apos;s Inside
          </motion.span>

          <div className="overflow-hidden mt-2">
            <motion.h2
              className="font-[var(--font-playfair)] text-3xl font-extrabold tracking-tight text-white md:text-5xl"
              initial={{ y: 60 }}
              whileInView={{ y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.6, ease: easeSmooth, delay: 0.15 }}
            >
              Ingredient Highlights
            </motion.h2>
          </div>

          <motion.div
            className="mx-auto mt-4 h-[2px] w-12 rounded-full bg-[#C5A55A]"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={viewportOnce}
            transition={{ duration: 0.6, delay: 0.4, ease: easeSmooth }}
          />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {ingredients.map((item) => {
            const Icon = item.icon;
            return (
              <TiltCard
                key={item.title}
                className={`group cursor-default ${item.span}`}
              >
                <div className="relative h-full rounded-2xl border border-white/10 bg-[#1E1E2E] p-6 overflow-hidden transition-colors duration-300 hover:border-white/20">
                  <div
                    className="absolute -inset-[1px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md"
                    style={{
                      background: `linear-gradient(135deg, ${item.accent}30, transparent, ${item.accent}30)`,
                    }}
                  />
                  <div className="relative z-10">
                    <div
                      className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl"
                      style={{ backgroundColor: `${item.accent}20` }}
                    >
                      <Icon
                        className="h-5 w-5"
                        style={{ color: item.accent }}
                      />
                    </div>
                    <h3 className="text-sm font-bold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-white/50">
                      {item.description}
                    </p>
                  </div>
                </div>
              </TiltCard>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
