"use client";

import { motion } from "framer-motion";
import { ShieldCheck, MailQuestion, RefreshCcw } from "lucide-react";

const points = [
  {
    icon: ShieldCheck,
    title: "Sealed, unopened, 30 days",
    body: "Because of the intimate nature of the product, we can only accept returns on sealed, unopened bottles within 30 days of delivery.",
  },
  {
    icon: MailQuestion,
    title: "Damaged or defective",
    body: "If your order arrives damaged, email hello@seaducedproducts.com with your order number and a photo. We will replace it or refund you — your pick.",
  },
  {
    icon: RefreshCcw,
    title: "Not the right fit?",
    body: "If the product just is not for you, message us and we will work something out. We would rather you feel good about the whole experience than hold you to a technicality.",
  },
];

export function ReturnsPolicy() {
  return (
    <section className="bg-[#263747] py-20 md:py-28 relative overflow-hidden">
      <motion.div
        className="absolute -right-24 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-[#AD9952]/8 blur-3xl pointer-events-none"
        animate={{ x: [0, -20, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="relative max-w-5xl mx-auto px-6">
        <motion.span
          className="block font-mono text-xs tracking-[0.3em] uppercase text-[#AD9952] mb-3"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Returns policy
        </motion.span>
        <motion.h2
          className="text-3xl md:text-4xl font-serif text-[#FAFBFB] tracking-tight mb-4"
          style={{ fontFamily: "'Playfair Display', serif" }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          If something is not right, we will make it right.
        </motion.h2>
        <motion.p
          className="text-[#FAFBFB]/75 max-w-2xl text-base md:text-lg leading-relaxed mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Here is the short version, in plain English. No restocking fees,
          no return-label runaround.
        </motion.p>

        <div className="grid gap-5 md:grid-cols-3">
          {points.map((p, idx) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.title}
                className="rounded-2xl bg-[#FAFBFB]/5 border border-[#FAFBFB]/12 p-6 backdrop-blur-sm"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: idx * 0.08 }}
              >
                <div className="w-11 h-11 rounded-full bg-[#AD9952]/15 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-[#AD9952]" />
                </div>
                <h3 className="text-lg font-semibold text-[#FAFBFB] mb-2">
                  {p.title}
                </h3>
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
