"use client";

import { useState, useRef, useCallback } from "react";
import Image from "next/image";
import {
  motion,
  AnimatePresence,
  useSpring,
  useMotionValue,
  useTransform,
} from "framer-motion";

const VARIANTS = [
  {
    id: "v1",
    name: "V1 Royal",
    tagline: "Luxury Minimal",
    accent: "#3B5EAB",
    image: "/images/variant-v1.jpg",
    description: "Clean, refined elegance in every drop.",
  },
  {
    id: "v2",
    name: "V2 Ocean Organic",
    tagline: "Natural Wave",
    accent: "#1A6B5C",
    image: "/images/variant-v2.jpg",
    description: "Sea moss purity meets coastal calm.",
  },
  {
    id: "v3",
    name: "V3 Embossed Premium",
    tagline: "Tactile Gold",
    accent: "#C5A55A",
    image: "/images/variant-v3.jpg",
    description: "Textured luxury you can feel.",
  },
] as const;

type VariantItem = (typeof VARIANTS)[number];

function getSlideVariants(direction: number) {
  return {
    enter: {
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
      rotateY: direction > 0 ? 15 : -15,
    },
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        type: "spring" as const,
        stiffness: 300,
        damping: 30,
      },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -300 : 300,
      opacity: 0,
      scale: 0.9,
      rotateY: dir > 0 ? -15 : 15,
      transition: {
        type: "spring" as const,
        stiffness: 300,
        damping: 30,
      },
    }),
  };
}

function TiltCard({
  variant,
  direction,
}: {
  variant: VariantItem;
  direction: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const slideVariants = getSlideVariants(direction);

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  const rotateX = useSpring(useTransform(rawY, [-0.5, 0.5], [5, -5]), {
    stiffness: 150,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(rawX, [-0.5, 0.5], [-5, 5]), {
    stiffness: 150,
    damping: 20,
  });

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const el = cardRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      rawX.set((e.clientX - rect.left) / rect.width - 0.5);
      rawY.set((e.clientY - rect.top) / rect.height - 0.5);
    },
    [rawX, rawY]
  );

  const handleMouseLeave = useCallback(() => {
    rawX.set(0);
    rawY.set(0);
  }, [rawX, rawY]);

  return (
    <motion.div
      key={variant.id}
      custom={direction}
      variants={slideVariants}
      initial="enter"
      animate="center"
      exit="exit"
      style={{ perspective: 1000 }}
      className="absolute inset-0 flex items-center justify-center"
    >
      <div
        className="absolute inset-0 rounded-3xl"
        style={{
          background: `radial-gradient(ellipse at 60% 40%, ${variant.accent}33 0%, transparent 70%)`,
        }}
      />

      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative z-10 flex w-full max-w-2xl flex-col items-center gap-6 rounded-3xl border border-white/10 bg-white/5 p-10 shadow-2xl backdrop-blur-sm sm:flex-row sm:gap-10 sm:p-14"
      >
        <div
          className="relative h-48 w-48 shrink-0 overflow-hidden rounded-2xl sm:h-64 sm:w-64"
          style={{ boxShadow: `0 8px 40px ${variant.accent}44` }}
        >
          <div
            className="flex h-full w-full items-center justify-center text-sm font-medium"
            style={{ background: `${variant.accent}22` }}
          >
            <Image
              src={variant.image}
              alt={variant.name}
              fill
              className="object-cover"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).style.display = "none";
              }}
            />
            <span
              className="relative z-10 text-center leading-tight px-4"
              style={{ color: `${variant.accent}CC` }}
            >
              {variant.name}
              <br />
              <span className="text-xs opacity-60">Photo coming soon</span>
            </span>
          </div>
        </div>

        <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
          <span
            className="text-xs font-semibold uppercase tracking-[0.2em]"
            style={{ color: variant.accent }}
          >
            {variant.name}
          </span>
          <h3 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
            {variant.tagline}
          </h3>
          <p className="mt-3 max-w-xs text-base leading-relaxed text-white/60">
            {variant.description}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

function ChevronButton({
  dir,
  accent,
  onClick,
}: {
  dir: -1 | 1;
  accent: string;
  onClick: () => void;
}) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ rotate: dir * 5, scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label={dir === -1 ? "Previous variant" : "Next variant"}
      className="pointer-events-auto flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/60 backdrop-blur-sm transition-colors hover:border-white/20 hover:text-white focus:outline-none"
    >
      <svg
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
      >
        {dir === -1 ? (
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        ) : (
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        )}
      </svg>
    </motion.button>
  );
}

export default function ProductShowcase() {
  const [[index, direction], setPage] = useState([0, 0]);

  const paginate = useCallback((dir: number) => {
    setPage(([prev]) => {
      const next = (prev + dir + VARIANTS.length) % VARIANTS.length;
      return [next, dir];
    });
  }, []);

  const current = VARIANTS[index];

  return (
    <section
      id="product-showcase"
      className="relative overflow-hidden bg-[#080C14] py-20 sm:py-28"
    >
      <div
        className="pointer-events-none absolute inset-0 transition-all duration-700"
        style={{
          background: `radial-gradient(ellipse 80% 60% at 50% 40%, ${current.accent}1A 0%, transparent 70%)`,
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/40">
            Label Variants
          </p>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-5xl">
            Choose Your{" "}
            <span style={{ color: current.accent }}>Seaduced</span>
          </h2>
        </div>

        <div className="relative mt-14 h-[340px] sm:h-[300px]">
          <AnimatePresence mode="wait" custom={direction}>
            <TiltCard key={current.id} variant={current} direction={direction} />
          </AnimatePresence>

          <div className="pointer-events-none absolute inset-y-0 left-0 right-0 hidden items-center justify-between sm:flex">
            <ChevronButton dir={-1} accent={current.accent} onClick={() => paginate(-1)} />
            <ChevronButton dir={1} accent={current.accent} onClick={() => paginate(1)} />
          </div>
        </div>

        <div className="mt-8 flex items-center justify-center gap-2">
          {VARIANTS.map((v, i) => (
            <button
              key={v.id}
              onClick={() => setPage(([prev]) => [i, i > prev ? 1 : -1])}
              aria-label={`Go to ${v.name}`}
              style={{
                background: i === index ? v.accent : "rgba(255,255,255,0.2)",
                width: i === index ? 28 : 10,
              }}
              className="h-2.5 rounded-full transition-all duration-300 focus:outline-none"
            />
          ))}
        </div>

        <div className="mt-6 flex items-center justify-center gap-4 sm:hidden">
          <ChevronButton dir={-1} accent={current.accent} onClick={() => paginate(-1)} />
          <ChevronButton dir={1} accent={current.accent} onClick={() => paginate(1)} />
        </div>
      </div>
    </section>
  );
}
