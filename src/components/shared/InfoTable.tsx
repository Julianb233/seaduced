"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export type InfoRow = {
  label: string;
  value: ReactNode;
  note?: string;
};

export function InfoTable({
  rows,
  title,
  eyebrow,
  caption,
}: {
  rows: InfoRow[];
  title?: string;
  eyebrow?: string;
  caption?: string;
}) {
  return (
    <section className=" relative bg-luxe-teal noise-overlay py-20 md:py-28 overflow-hidden">
      <div className="max-w-4xl mx-auto px-6">
        {eyebrow && (
          <motion.span
            className="block font-mono text-xs tracking-[0.3em] uppercase text-[#263747]/60 mb-3"
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
            className="text-3xl md:text-4xl font-serif text-[#263747] tracking-tight mb-10"
            style={{ fontFamily: "'Playfair Display', serif" }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {title}
          </motion.h2>
        )}

        <div className="rounded-2xl overflow-hidden border border-[#263747]/15 bg-[#FDF8F0]/60 backdrop-blur-sm shadow-sm">
          <dl className="divide-y divide-[#263747]/10">
            {rows.map((row, idx) => (
              <motion.div
                key={idx}
                className="grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] gap-2 md:gap-8 px-6 py-5 md:py-6"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: idx * 0.06 }}
              >
                <dt className="font-mono text-xs tracking-[0.2em] uppercase text-[#325360] pt-1">
                  {row.label}
                </dt>
                <dd className="text-[#263747] leading-relaxed">
                  <div className="text-base md:text-lg">{row.value}</div>
                  {row.note && (
                    <p className="mt-1 text-sm text-[#263747]/60">{row.note}</p>
                  )}
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>

        {caption && (
          <motion.p
            className="mt-6 text-sm text-[#263747]/70 max-w-2xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {caption}
          </motion.p>
        )}
      </div>
    </section>
  );
}
