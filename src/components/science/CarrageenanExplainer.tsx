"use client";

import { motion } from "framer-motion";

export function CarrageenanExplainer() {
  return (
    <section className="bg-luxe-teal noise-overlay py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        {/* Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
          className="relative aspect-square rounded-2xl bg-gradient-to-br from-[#FDF8F0] to-[#AACAD1] p-8 md:p-10 shadow-lg ring-1 ring-[#325360]/15 overflow-hidden"
        >
          <svg
            viewBox="0 0 400 400"
            className="w-full h-full"
            aria-label="Molecular carrageenan structure — linked sugar rings forming a hydrating gel network"
          >
            <defs>
              <linearGradient id="gel-grad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#6793A0" />
                <stop offset="100%" stopColor="#325360" />
              </linearGradient>
              <radialGradient id="ring-grad">
                <stop offset="0%" stopColor="#6793A0" stopOpacity="0.95" />
                <stop offset="100%" stopColor="#325360" stopOpacity="0.9" />
              </radialGradient>
            </defs>

            {/* connecting strands */}
            {Array.from({ length: 10 }).map((_, i) => (
              <motion.path
                key={`strand-${i}`}
                d={`M${30 + i * 38},${60 + (i % 3) * 110} Q ${60 + i * 38},${150 + (i % 3) * 60} ${100 + i * 38},${80 + ((i + 1) % 3) * 110}`}
                fill="none"
                stroke="#325360"
                strokeWidth="1.5"
                strokeOpacity="0.4"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.4, delay: i * 0.05 }}
              />
            ))}

            {/* sugar rings */}
            {Array.from({ length: 12 }).map((_, i) => {
              const x = 60 + (i % 4) * 95;
              const y = 80 + Math.floor(i / 4) * 100;
              return (
                <motion.g
                  key={`ring-${i}`}
                  initial={{ opacity: 0, scale: 0.4 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: 0.2 + i * 0.05,
                    ease: [0.25, 0.4, 0.25, 1],
                  }}
                >
                  <polygon
                    points={hexPoints(x, y, 26)}
                    fill="url(#ring-grad)"
                    stroke="#FDF8F0"
                    strokeWidth="1.5"
                  />
                  <circle cx={x} cy={y} r="5" fill="#FDF8F0" opacity="0.7" />
                </motion.g>
              );
            })}

            {/* water molecules as small dots */}
            {Array.from({ length: 24 }).map((_, i) => (
              <motion.circle
                key={`h2o-${i}`}
                cx={30 + (i * 37) % 360}
                cy={30 + ((i * 71) % 340)}
                r="2.5"
                fill="#AACAD1"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.9 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.9 + i * 0.02 }}
              />
            ))}
          </svg>
          <div className="absolute bottom-4 left-6 right-6 font-mono text-[10px] tracking-[0.25em] uppercase text-[#325360]/70 flex justify-between">
            <span>κ-carrageenan</span>
            <span>Hydrating Matrix</span>
          </div>
        </motion.div>

        {/* Copy */}
        <div>
          <div className="overflow-hidden">
            <motion.span
              className="inline-block font-mono text-[#325360]/70 text-xs tracking-[0.3em] uppercase mb-4"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              The Slip, Explained
            </motion.span>
          </div>
          <div className="overflow-hidden">
            <motion.h2
              className="text-4xl md:text-5xl text-[#263747] leading-[1.05] tracking-tight mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
              initial={{ y: 80, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
            >
              Carrageenan — nature&apos;s gel, without the synthetics.
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-5 text-[#263747]/85 text-base md:text-lg leading-relaxed"
          >
            <p>
              Sea moss produces <strong>carrageenan</strong>, a family of
              naturally occurring polysaccharides — long chains of sugars that
              hold water between their links. When extracted gently, it forms a
              silky, cushioning gel that behaves like biology, not like
              chemistry.
            </p>
            <p>
              That is the &ldquo;slip&rdquo; people feel with Seaduced. It is
              not mineral oil, not petrolatum, not dimethicone. It is
              water-soluble, rinses clean, and does not coat tissue with a
              residue your body has to process.
            </p>
            <p className="text-[#325360] font-medium">
              Think of it as the ocean&apos;s version of a hydrating mesh: it
              holds moisture exactly where you want it, for as long as you want
              it there.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function hexPoints(cx: number, cy: number, r: number): string {
  const pts: string[] = [];
  for (let i = 0; i < 6; i++) {
    const angle = (Math.PI / 3) * i - Math.PI / 6;
    pts.push(`${cx + r * Math.cos(angle)},${cy + r * Math.sin(angle)}`);
  }
  return pts.join(" ");
}
