"use client";

import { motion } from "framer-motion";

const GRID_ROWS = 10;
const GRID_COLS = 11;
const TOTAL = GRID_ROWS * GRID_COLS;
const PRESENT = 92;

export function Minerals92() {
  const cells = Array.from({ length: TOTAL }, (_, i) => i < PRESENT);

  return (
    <section className="bg-[#FDF8F0] py-24 md:py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] gap-12 md:gap-16 items-center">
          {/* Big-number card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
            className="relative rounded-2xl bg-gradient-to-br from-[#263747] via-[#325360] to-[#263747] text-[#FAFBFB] p-10 md:p-12 shadow-xl overflow-hidden"
          >
            <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-[#6793A0]/20 blur-3xl" />
            <div className="relative">
              <div className="font-mono text-[10px] tracking-[0.35em] uppercase text-[#AD9952] mb-6">
                Mineral Profile
              </div>
              <div className="flex items-baseline gap-4">
                <div
                  className="text-[140px] md:text-[180px] leading-none tracking-tighter"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  92
                </div>
                <div className="text-[#FAFBFB]/70 pb-6">
                  <div className="text-sm tracking-wide">of 102</div>
                  <div className="font-mono text-[10px] tracking-[0.2em] uppercase">
                    Human-Body Minerals
                  </div>
                </div>
              </div>
              <p className="mt-8 text-[#FAFBFB]/85 leading-relaxed text-sm md:text-base">
                Sea moss carries 92 of the 102 minerals that make up the human
                body. No other commonly-cultivated plant source even comes
                close.
              </p>
              <div className="mt-8 grid grid-cols-3 gap-4 text-center">
                {[
                  { el: "I", name: "Iodine" },
                  { el: "Zn", name: "Zinc" },
                  { el: "Mg", name: "Magnesium" },
                  { el: "K", name: "Potassium" },
                  { el: "Fe", name: "Iron" },
                  { el: "Se", name: "Selenium" },
                ].map((m) => (
                  <div
                    key={m.el}
                    className="rounded-md border border-[#AD9952]/40 bg-[#FAFBFB]/5 py-3"
                  >
                    <div
                      className="text-2xl text-[#AD9952]"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {m.el}
                    </div>
                    <div className="font-mono text-[9px] tracking-[0.15em] uppercase text-[#FAFBFB]/60 mt-1">
                      {m.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* SVG density grid */}
          <div>
            <div className="overflow-hidden">
              <motion.h2
                className="text-4xl md:text-5xl text-[#263747] leading-[1.05] tracking-tight mb-4"
                style={{ fontFamily: "'Playfair Display', serif" }}
                initial={{ y: 80, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
              >
                Mineral density, visualized.
              </motion.h2>
            </div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-[#263747]/80 leading-relaxed mb-8 max-w-prose"
            >
              Each filled square represents one of the 92 minerals your body
              recognizes. The 10 empty squares are what is not present — still
              one of the most complete natural mineral sources on earth.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl bg-[#FAFBFB] ring-1 ring-[#325360]/15 p-6 md:p-8 shadow-sm"
            >
              <div
                className="grid gap-1.5"
                style={{
                  gridTemplateColumns: `repeat(${GRID_COLS}, minmax(0, 1fr))`,
                }}
              >
                {cells.map((present, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.6 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.25,
                      delay: Math.min(i * 0.004, 0.45),
                    }}
                    className={`aspect-square rounded-sm ${
                      present
                        ? "bg-gradient-to-br from-[#6793A0] to-[#325360]"
                        : "bg-[#AACAD1]/40 ring-1 ring-[#325360]/15"
                    }`}
                  />
                ))}
              </div>
              <div className="mt-6 flex items-center gap-6 font-mono text-[10px] tracking-[0.2em] uppercase text-[#263747]/60">
                <span className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-sm bg-gradient-to-br from-[#6793A0] to-[#325360]" />
                  Present · 92
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-sm bg-[#AACAD1]/40 ring-1 ring-[#325360]/20" />
                  Not Present · 10
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
