"use client";

import { motion, useScroll, useTransform, useSpring, MotionValue } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const FRAMES = [
  { src: "/images/parallax/f1-mist.jpg", alt: "Seaduced bottle emerging from sea mist", eyebrow: "From the sea", title: "Emerge." },
  { src: "/images/parallax/f2-beauty.jpg", alt: "Seaduced bottle at rest on cream marble", eyebrow: "Naturally intimate", title: "At rest." },
  { src: "/images/parallax/f3-primed.jpg", alt: "Seaduced bottle with gold halo on the pump", eyebrow: "Ready", title: "Primed." },
  { src: "/images/parallax/f4-bead.jpg", alt: "Seaduced bottle with first cream bead at the nozzle", eyebrow: "Begin", title: "A single bead." },
  { src: "/images/parallax/f5-stream.jpg", alt: "Seaduced cream stream arcing with sea-moss filaments", eyebrow: "Moment", title: "The pour." },
  { src: "/images/parallax/f6-splash.jpg", alt: "Seaduced peak splash with sea-moss strands", eyebrow: "Peak", title: "Naturally seaduced." },
  { src: "/images/parallax/f7-settle.jpg", alt: "Seaduced bottle settled with cream pool on marble", eyebrow: "Settle", title: "Nothing wasted." },
];

function FrameLayer({
  progress,
  index,
  total,
  src,
  alt,
  priority,
}: {
  progress: MotionValue<number>;
  index: number;
  total: number;
  src: string;
  alt: string;
  priority?: boolean;
}) {
  const start = index / total;
  const end = (index + 1) / total;
  const mid = (start + end) / 2;
  const isFirst = index === 0;
  const isLast = index === total - 1;

  const opacity = useTransform(
    progress,
    [
      isFirst ? -1 : start - 0.05,
      start + 0.02,
      end - 0.02,
      isLast ? 2 : end + 0.05,
    ],
    isFirst ? [1, 1, 1, 0] : isLast ? [0, 1, 1, 1] : [0, 1, 1, 0]
  );
  const scale = useTransform(progress, [start, mid, end], [1.04, 1, 1.04]);

  return (
    <motion.div
      style={{ opacity, scale }}
      className="absolute inset-0 flex items-center justify-center"
    >
      <div className="relative w-full h-full">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          className="object-contain object-center"
          sizes="100vw"
        />
      </div>
    </motion.div>
  );
}

function CaptionLayer({
  progress,
  index,
  total,
  eyebrow,
  title,
}: {
  progress: MotionValue<number>;
  index: number;
  total: number;
  eyebrow: string;
  title: string;
}) {
  const start = index / total;
  const end = (index + 1) / total;
  const opacity = useTransform(
    progress,
    [start - 0.03, start + 0.04, end - 0.04, end + 0.03],
    [0, 1, 1, 0]
  );
  const y = useTransform(progress, [start, end], [20, -20]);

  return (
    <motion.div
      style={{ opacity, y }}
      className="absolute inset-x-0 md:inset-auto text-center md:text-left"
    >
      <p
        className="font-mono text-xs tracking-[0.3em] uppercase text-[#325360]/70 mb-2"
        style={{ fontFamily: "var(--font-mono, monospace)" }}
      >
        {eyebrow}
      </p>
      <h3
        className="text-4xl md:text-6xl font-serif text-[#263747] leading-[1] tracking-tight"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        {title}
      </h3>
    </motion.div>
  );
}

export function ParallaxSplash() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smooth = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 22,
    restDelta: 0.0005,
  });

  return (
    <section
      ref={containerRef}
      className="relative bg-[#FDF8F0]"
      style={{ height: `${FRAMES.length * 100}vh` }}
      aria-label="Seaduced product story — parallax"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Soft nautical gradient behind frames */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#FDF8F0] via-[#AACAD1]/25 to-[#FDF8F0]" />

        {/* Frame stack */}
        {FRAMES.map((frame, i) => (
          <FrameLayer
            key={frame.src}
            progress={smooth}
            index={i}
            total={FRAMES.length}
            src={frame.src}
            alt={frame.alt}
            priority={i < 2}
          />
        ))}

        {/* Caption overlay */}
        <div className="absolute left-0 right-0 bottom-[10%] md:left-[6%] md:right-auto md:bottom-auto md:top-1/2 md:-translate-y-1/2 md:max-w-md z-10 px-6 md:px-0 pointer-events-none">
          {FRAMES.map((frame, i) => (
            <CaptionLayer
              key={frame.src}
              progress={smooth}
              index={i}
              total={FRAMES.length}
              eyebrow={frame.eyebrow}
              title={frame.title}
            />
          ))}
        </div>

        {/* Scroll progress bar — nautical gradient */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-48 h-[2px] bg-[#325360]/15 rounded-full overflow-hidden z-10">
          <motion.div
            className="h-full bg-gradient-to-r from-[#6793A0] to-[#AD9952] origin-left"
            style={{ scaleX: smooth, originX: 0 }}
          />
        </div>
      </div>
    </section>
  );
}
