"use client";

import { motion } from "framer-motion";
import { Anchor, Shield, FileCheck } from "lucide-react";

const STANDARDS = [
  {
    icon: Anchor,
    title: "Traceable Harvest",
    body: "Every batch of sea moss is traced to a specific bay and harvest window. We work with partner co-ops in Ireland and Nova Scotia regulated under EU and Canadian sustainable harvest quotas.",
  },
  {
    icon: Shield,
    title: "Third-Party Tested",
    body: "Every production run is sent to an independent lab for heavy metals, microbial contamination, and pH verification. Nothing ships without a clean panel.",
  },
  {
    icon: FileCheck,
    title: "Batch Traceability",
    body: "Every bottle carries a batch code on the base. Give it to us and we can tell you the harvest bay, the formulation date, and the lab panel that cleared it.",
  },
];

export function SourcingStandards() {
  return (
    <section className="bg-luxe-teal noise-overlay py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#AACAD1] via-[#FDF8F0]/30 to-[#AACAD1]" />
      <div className="relative max-w-5xl mx-auto px-6">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <div className="overflow-hidden">
            <motion.span
              className="inline-block font-mono text-[#325360]/70 text-xs tracking-[0.3em] uppercase mb-4"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Sourcing Standards
            </motion.span>
          </div>
          <div className="overflow-hidden">
            <motion.h2
              className="text-4xl md:text-5xl text-[#263747] leading-[1.05] tracking-tight mb-4"
              style={{ fontFamily: "var(--font-sans)" }}
              initial={{ y: 80, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
            >
              Ocean to bottle, on the record.
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-[#263747]/80 leading-relaxed"
          >
            The cleanest formulations start with the cleanest inputs. Here is
            how we keep every link in that chain accountable.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {STANDARDS.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.1,
                  ease: [0.25, 0.4, 0.25, 1],
                }}
                className="rounded-2xl bg-[#FDF8F0] ring-1 ring-[#325360]/15 p-7 shadow-sm"
              >
                <div className="mb-5 inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#325360]/10 ring-1 ring-[#325360]/20">
                  <Icon className="w-6 h-6 text-[#325360]" strokeWidth={1.5} />
                </div>
                <h3
                  className="text-2xl text-[#263747] mb-3 tracking-tight"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  {s.title}
                </h3>
                <p className="text-sm text-[#263747]/80 leading-relaxed">
                  {s.body}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
