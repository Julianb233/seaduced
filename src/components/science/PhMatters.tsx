"use client";

import { motion } from "framer-motion";

const PH_STOPS = [
  { v: 0, label: "0", color: "#E0614C" },
  { v: 1, label: "1", color: "#E47D4C" },
  { v: 2, label: "2", color: "#E8924C" },
  { v: 3, label: "3", color: "#D4A64C" },
  { v: 3.8, label: "3.8", color: "#AD9952" },
  { v: 4.2, label: "4.2", color: "#6793A0" },
  { v: 4.5, label: "4.5", color: "#325360" },
  { v: 5, label: "5", color: "#3B6A74" },
  { v: 6, label: "6", color: "#3F7F6A" },
  { v: 7, label: "7", color: "#407C57" },
  { v: 8, label: "8", color: "#3E7F75" },
  { v: 10, label: "10", color: "#44609A" },
  { v: 12, label: "12", color: "#53489E" },
  { v: 14, label: "14", color: "#6D3C8C" },
];

export function PhMatters() {
  return (
    <section className="bg-luxe-deep noise-overlay text-[#263747] py-24 md:py-32 relative overflow-hidden">
      <div className="absolute -top-32 -left-20 w-96 h-96 rounded-full bg-[#6793A0]/25 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-20 w-96 h-96 rounded-full bg-[#AD9952]/18 blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="overflow-hidden">
            <motion.span
              className="inline-block font-mono text-[#AD9952] text-xs tracking-[0.3em] uppercase mb-4"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              pH Matters
            </motion.span>
          </div>
          <div className="overflow-hidden">
            <motion.h2
              className="text-4xl md:text-6xl leading-[1.05] tracking-tight max-w-3xl mx-auto"
              style={{ fontFamily: "var(--font-sans)" }}
              initial={{ y: 80, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
            >
              Your body lives in a narrow range. Our formula meets it there.
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-[#263747]/80 text-lg leading-relaxed max-w-2xl mx-auto"
          >
            Healthy intimate pH sits between{" "}
            <span className="text-[#AD9952] font-medium">3.8 and 4.5</span> —
            slightly acidic, protective, and easily disrupted. Most mainstream
            lubricants are alkaline (pH 7+), which can shift the microbiome and
            cause irritation.
          </motion.p>
        </div>

        {/* pH scale */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="rounded-2xl bg-white/55 ring-1 ring-white/70 backdrop-blur-md p-6 md:p-10 shadow-lg"
        >
          <div className="flex items-center justify-between font-mono text-[10px] tracking-[0.2em] uppercase text-[#325360]/70 mb-3">
            <span>Acidic</span>
            <span>Neutral</span>
            <span>Alkaline</span>
          </div>

          {/* scale bar */}
          <div className="relative">
            <div className="flex h-12 rounded-full overflow-hidden ring-1 ring-[#325360]/20">
              {PH_STOPS.slice(0, -1).map((stop, i) => {
                const next = PH_STOPS[i + 1];
                const width = ((next.v - stop.v) / 14) * 100;
                return (
                  <motion.div
                    key={stop.v}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.4 + i * 0.03 }}
                    style={{
                      width: `${width}%`,
                      background: `linear-gradient(to right, ${stop.color}, ${next.color})`,
                      transformOrigin: "left",
                    }}
                  />
                );
              })}
            </div>

            {/* highlight band 3.8 - 4.5 */}
            <motion.div
              initial={{ opacity: 0, scaleY: 0.6 }}
              whileInView={{ opacity: 1, scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1 }}
              className="absolute -inset-y-3 rounded-xl ring-2 ring-[#AD9952] bg-[#AD9952]/15 pointer-events-none"
              style={{
                left: `${(3.8 / 14) * 100}%`,
                width: `${((4.5 - 3.8) / 14) * 100}%`,
              }}
            >
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap font-mono text-[10px] tracking-[0.2em] uppercase text-[#AD9952]">
                Healthy Range
              </div>
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap">
                <span
                  className="text-lg text-[#AD9952]"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  3.8 – 4.5
                </span>
              </div>
            </motion.div>

            {/* Seaduced marker at 4.2 */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1.3 }}
              className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2"
              style={{ left: `${(4.2 / 14) * 100}%` }}
            >
              <div className="w-4 h-4 rounded-full bg-[#FAFBFB] ring-4 ring-[#263747] shadow-lg" />
            </motion.div>
          </div>

          {/* tick labels */}
          <div className="flex justify-between mt-14 font-mono text-[10px] tracking-[0.15em] text-[#325360]/60">
            {[0, 2, 4, 6, 7, 8, 10, 12, 14].map((v) => (
              <span key={v} className="tabular-nums">
                {v}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Callout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid md:grid-cols-3 gap-6"
        >
          {[
            {
              n: "4.2",
              label: "Seaduced formulation",
              body: "Centered in the healthy range. Your body recognizes it.",
            },
            {
              n: "7+",
              label: "Typical alkaline lube",
              body: "Shifts pH upward. Can disrupt beneficial flora.",
            },
            {
              n: "<3.8",
              label: "Too acidic",
              body: "Can sting on sensitive tissue. Rare but worth knowing.",
            },
          ].map((c, i) => (
            <div
              key={c.n}
              className={`rounded-xl p-6 border ${
                i === 0
                  ? "bg-[#AD9952]/10 border-[#AD9952]/40"
                  : "bg-white/50 border-white/60 backdrop-blur-md"
              }`}
            >
              <div
                className={`text-4xl mb-2 ${
                  i === 0 ? "text-[#AD9952]" : "text-[#263747]/80"
                }`}
                style={{ fontFamily: "var(--font-sans)" }}
              >
                {c.n}
              </div>
              <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#325360]/70 mb-2">
                {c.label}
              </div>
              <p className="text-sm text-[#263747]/80 leading-relaxed">
                {c.body}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
