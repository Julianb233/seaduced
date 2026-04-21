"use client";

import { motion, useScroll, useTransform, useSpring, MotionValue } from "framer-motion";
import { useRef } from "react";

type Node = {
  year: string;
  title: string;
  body: string;
};

const nodes: Node[] = [
  {
    year: "2024",
    title: "Concept",
    body:
      "Gina sketches the idea: a sea-moss-based intimate wellness brand that doesn't hide what's in it. First label comp, first color pulls, first doubt.",
  },
  {
    year: "2025",
    title: "Formulation",
    body:
      "The pH-balanced, plant-based formula locks in. Sea moss becomes the hero ingredient. The Naturally Intimate product line takes shape.",
  },
  {
    year: "2026",
    title: "Launch",
    body:
      "Bottle design finalized, site goes live, Seaduced ships. The first batch reaches real people — menopause, couples, LGBTQ+, self-care.",
  },
  {
    year: "2027",
    title: "What's next",
    body:
      "Expanded line, retail partnerships, and deeper community — building the intimate wellness brand the industry has been missing.",
  },
];

function TimelineNode({
  node,
  index,
  total,
  progress,
}: {
  node: Node;
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const nodeStart = index / total;
  const nodeEnd = nodeStart + 0.1;

  const dotOpacity = useTransform(progress, [nodeStart, nodeEnd], [0.35, 1]);
  const dotScale = useTransform(progress, [nodeStart, nodeEnd], [0.75, 1]);
  const fillOpacity = useTransform(progress, [nodeStart, nodeEnd], [0, 1]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative flex flex-col items-center text-center"
    >
      {/* Node dot */}
      <motion.div
        className="relative z-10 w-[76px] h-[76px] rounded-full bg-[#FDF8F0] border-[3px] border-[#325360] flex items-center justify-center shadow-lg"
        style={{ opacity: dotOpacity, scale: dotScale }}
      >
        <motion.div
          className="absolute inset-[6px] rounded-full bg-gradient-to-br from-[#6793A0] to-[#325360]"
          style={{ opacity: fillOpacity }}
        />
        <span
          className="relative z-10 font-mono text-sm tracking-wider text-[#FDF8F0]"
          style={{ fontWeight: 700 }}
        >
          {node.year}
        </span>
      </motion.div>

      <h3
        className="mt-5 text-2xl text-[#263747] tracking-tight"
        style={{ fontFamily: "var(--font-serif), 'Playfair Display', serif", fontWeight: 700 }}
      >
        {node.title}
      </h3>

      <p className="mt-2 text-sm text-[#263747]/75 leading-relaxed max-w-[240px]">
        {node.body}
      </p>
    </motion.div>
  );
}

export function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 70%", "end 30%"],
  });

  const smooth = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 22,
    restDelta: 0.0005,
  });

  const progressWidth = useTransform(smooth, [0, 1], ["0%", "100%"]);

  return (
    <section
      ref={containerRef}
      className="relative py-24 md:py-32 bg-[#AACAD1] overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#AACAD1] via-[#FDF8F0]/15 to-[#AACAD1]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span
            className="inline-block font-mono text-[#325360] text-xs tracking-[0.3em] uppercase mb-3"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            The story so far
          </motion.span>

          <div className="overflow-hidden">
            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl text-[#263747] tracking-tight"
              style={{ fontFamily: "var(--font-serif), 'Playfair Display', serif", fontWeight: 800 }}
              initial={{ y: 60, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
            >
              Three years. Four chapters.
            </motion.h2>
          </div>
        </div>

        {/* Timeline rail */}
        <div className="relative">
          {/* Base rail */}
          <div className="hidden md:block absolute top-[38px] left-[5%] right-[5%] h-[3px] bg-[#325360]/20 rounded-full" />

          {/* Filled progress rail */}
          <motion.div
            className="hidden md:block absolute top-[38px] left-[5%] h-[3px] bg-gradient-to-r from-[#6793A0] via-[#AD9952] to-[#325360] rounded-full origin-left"
            style={{ width: progressWidth, maxWidth: "90%" }}
          />

          {/* Nodes */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-6 relative">
            {nodes.map((node, i) => (
              <TimelineNode
                key={node.year}
                node={node}
                index={i}
                total={nodes.length}
                progress={smooth}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
