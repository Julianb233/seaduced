"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export type TimelineNode = {
  label: string;
  title: string;
  description: string;
  duration?: string;
};

export function Timeline({
  nodes,
  title,
  eyebrow,
  background = "light",
}: {
  nodes: TimelineNode[];
  title?: string;
  eyebrow?: string;
  background?: "light" | "cream";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 20%"],
  });

  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const bg = background === "cream" ? "bg-[#FDF8F0]" : "bg-[#AACAD1]";

  return (
    <section className={`${bg} py-20 md:py-28 relative overflow-hidden`}>
      <div className="max-w-5xl mx-auto px-6">
        {eyebrow && (
          <motion.span
            className="block font-mono text-xs tracking-[0.3em] uppercase text-[#325360] mb-3"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {eyebrow}
          </motion.span>
        )}
        {title && (
          <motion.h2
            className="text-3xl md:text-4xl font-black text-[#263747] tracking-tight mb-12 md:mb-16"
            style={{ fontFamily: "var(--font-sans)" }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {title}
          </motion.h2>
        )}

        <div ref={ref} className="relative pl-6 md:pl-8">
          {/* Vertical rail */}
          <div className="absolute left-2 md:left-3 top-2 bottom-2 w-[2px] bg-[#263747]/15 rounded-full" />
          <motion.div
            className="absolute left-2 md:left-3 top-2 w-[2px] bg-[#325360] origin-top rounded-full"
            style={{ scaleY: lineScale, height: "calc(100% - 1rem)" }}
          />

          <ol className="space-y-10 md:space-y-14">
            {nodes.map((node, idx) => (
              <motion.li
                key={idx}
                className="relative"
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: idx * 0.08, ease: [0.25, 0.4, 0.25, 1] }}
              >
                {/* Node dot */}
                <span
                  className="absolute -left-[1.35rem] md:-left-[1.65rem] top-1.5 flex items-center justify-center w-5 h-5 rounded-full bg-[#FDF8F0] border-2 border-[#325360] shadow-sm"
                  aria-hidden
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#325360]" />
                </span>

                <div className="flex items-baseline gap-3 flex-wrap mb-1">
                  <span className="font-mono text-xs tracking-[0.2em] uppercase text-[#325360]">
                    {node.label}
                  </span>
                  {node.duration && (
                    <span className="font-mono text-xs text-[#263747]/60">
                      {node.duration}
                    </span>
                  )}
                </div>
                <h3
                  className="text-xl md:text-2xl font-black text-[#263747] mb-2"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  {node.title}
                </h3>
                <p className="text-[#263747]/80 leading-relaxed max-w-2xl">
                  {node.description}
                </p>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
