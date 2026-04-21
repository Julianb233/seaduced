"use client";

import { motion } from "framer-motion";
import { Info, AlertTriangle, Leaf, HeartHandshake } from "lucide-react";

const points = [
  {
    icon: Info,
    title: "Not a medical device",
    body: "Seaduced is a personal lubricant intended for adult personal care. It is not a medical device, contraceptive, or treatment for any condition.",
  },
  {
    icon: Leaf,
    title: "Every body is different",
    body: "Formulations interact with every body a little differently. We recommend a patch test on a small area of skin before first full use.",
  },
  {
    icon: AlertTriangle,
    title: "Discontinue if irritation occurs",
    body: "If you experience irritation, discomfort, or an allergic reaction, stop using the product and consult a healthcare professional.",
  },
  {
    icon: HeartHandshake,
    title: "Consult your provider",
    body: "For any concerns about personal wellness, pregnancy, or medical conditions, talk with a licensed healthcare provider. We are not one.",
  },
];

export function ProductUse() {
  return (
    <section className="bg-[#263747] py-20 md:py-28 relative overflow-hidden">
      <motion.div
        className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-[#6793A0]/10 blur-3xl pointer-events-none"
        animate={{ scale: [1, 1.1, 1], opacity: [0.8, 1, 0.8] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="relative max-w-5xl mx-auto px-6">
        <motion.span
          className="block font-mono text-xs tracking-[0.3em] uppercase text-[#AD9952] mb-3"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Using the product
        </motion.span>
        <motion.h2
          className="text-3xl md:text-4xl font-serif text-[#FAFBFB] tracking-tight mb-4"
          style={{ fontFamily: "'Playfair Display', serif" }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Clean, considered, and made for adult personal care.
        </motion.h2>
        <motion.p
          className="text-[#FAFBFB]/75 max-w-2xl text-base md:text-lg mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          A few things to keep in mind about how Seaduced is meant to be used.
        </motion.p>

        <div className="grid gap-5 md:grid-cols-2">
          {points.map((p, idx) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.title}
                className="rounded-2xl bg-[#FAFBFB]/5 border border-[#FAFBFB]/12 p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: idx * 0.07 }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-[#AD9952]/15 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-[#AD9952]" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#FAFBFB]">
                    {p.title}
                  </h3>
                </div>
                <p className="text-sm text-[#FAFBFB]/75 leading-relaxed">
                  {p.body}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
