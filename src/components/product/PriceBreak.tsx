"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

type Bundle = {
  id: string;
  name: string;
  eyebrow: string;
  contents: string;
  price: number;
  compareAt: number | null;
  savings: string | null;
  pitch: string;
  featured?: boolean;
  visual: "single" | "triple" | "sextet" | "gift";
};

const bundles: Bundle[] = [
  {
    id: "single",
    name: "Single",
    eyebrow: "Start the ritual",
    contents: "1 x 5 oz bottle",
    price: 28,
    compareAt: null,
    savings: null,
    pitch: "One bottle to begin.",
    visual: "single",
  },
  {
    id: "ritual-3",
    name: "Ritual 3-Pack",
    eyebrow: "For the routine",
    contents: "3 x 5 oz bottles",
    price: 75,
    compareAt: 84,
    savings: "Save $9",
    pitch: "Stock the drawer, the nightstand, the travel bag.",
    visual: "triple",
  },
  {
    id: "wave-6",
    name: "Wave 6-Pack",
    eyebrow: "Share the wave",
    contents: "6 x 5 oz bottles",
    price: 140,
    compareAt: 168,
    savings: "Save $28",
    pitch: "Best value per bottle. For the household or the long haul.",
    featured: true,
    visual: "sextet",
  },
  {
    id: "gift-set",
    name: "Gift Set",
    eyebrow: "Wrap it with intention",
    contents: "1 x 5 oz bottle + gift box, ribbon, card",
    price: 45,
    compareAt: null,
    savings: null,
    pitch: "Linen-textured box, satin ribbon, hand-written card option.",
    visual: "gift",
  },
];

const included = [
  "Sea moss-infused formulation",
  "5 oz / 148 ml pump bottle",
  "Ships in discreet, unbranded packaging",
  "Flat-rate shipping in the US",
  "30-day satisfaction guarantee on unopened bottles",
];

function MiniVisual({ visual }: { visual: Bundle["visual"] }) {
  const src = "/images/bottle-isolated.png";

  if (visual === "single") {
    return (
      <div className="relative w-full h-full flex items-center justify-center">
        <div className="relative w-[55%] h-[85%]">
          <Image src={src} alt="" fill className="object-contain drop-shadow-[0_16px_22px_rgba(38,55,71,0.25)]" sizes="160px" />
        </div>
      </div>
    );
  }

  if (visual === "triple") {
    return (
      <div className="relative w-full h-full flex items-end justify-center">
        {[-1, 0, 1].map((i) => (
          <div
            key={i}
            className="relative h-[80%] aspect-[1/3]"
            style={{
              transform: `translateX(${i * 32}%) rotate(${i * 4}deg)`,
              zIndex: i === 0 ? 3 : 2,
              filter: `drop-shadow(0 ${12 + Math.abs(i) * 3}px ${16 + Math.abs(i) * 3}px rgba(38,55,71,${0.2 - Math.abs(i) * 0.04}))`,
            }}
          >
            <Image src={src} alt="" fill className="object-contain" sizes="80px" />
          </div>
        ))}
      </div>
    );
  }

  if (visual === "sextet") {
    const positions = [-2.5, -1.5, -0.5, 0.5, 1.5, 2.5];
    return (
      <div className="relative w-full h-full flex items-end justify-center">
        {positions.map((i) => (
          <div
            key={i}
            className="relative h-[76%] aspect-[1/3]"
            style={{
              transform: `translateX(${i * 18}%) rotate(${i * 5}deg)`,
              zIndex: 10 - Math.round(Math.abs(i) * 2),
              filter: `drop-shadow(0 ${10 + Math.abs(i) * 2}px ${14 + Math.abs(i) * 2}px rgba(38,55,71,${0.18 - Math.abs(i) * 0.02}))`,
            }}
          >
            <Image src={src} alt="" fill className="object-contain" sizes="60px" />
          </div>
        ))}
      </div>
    );
  }

  // gift
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="relative w-[55%] h-[85%]">
        <Image src={src} alt="" fill className="object-contain drop-shadow-[0_16px_22px_rgba(38,55,71,0.25)]" sizes="160px" />
      </div>
      <div aria-hidden className="absolute inset-y-[8%] left-1/2 -translate-x-1/2 w-[12%] bg-[#AD9952]/85 rounded-sm shadow-[0_4px_10px_rgba(173,153,82,0.35)]" />
      <div aria-hidden className="absolute top-[6%] left-1/2 -translate-x-1/2 w-[36%] h-[10%]">
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="block w-[48%] h-full bg-[#AD9952]/85 rounded-t-full -rotate-[22deg] origin-bottom-right" />
          <span className="block w-[48%] h-full bg-[#AD9952]/85 rounded-t-full rotate-[22deg] origin-bottom-left" />
        </div>
        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[18%] h-[70%] bg-[#AD9952] rounded-sm" />
      </div>
    </div>
  );
}

function BundleGridCard({ bundle, index }: { bundle: Bundle; index: number }) {
  return (
    <motion.article
      role="group"
      aria-label={`${bundle.name} bundle — ${bundle.contents} — $${bundle.price}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, delay: index * 0.07, ease: [0.25, 0.4, 0.25, 1] }}
      whileHover={{ y: -6 }}
      className={`relative flex flex-col bg-white rounded-3xl overflow-hidden border-2 shadow-xl shadow-[#263747]/10 ${
        bundle.featured ? "border-[#AD9952]/70" : "border-[#263747]/10"
      }`}
    >
      {bundle.featured ? (
        <div className="absolute top-4 right-4 z-10 px-3 py-1 rounded-full bg-[#AD9952] text-white font-mono text-[10px] tracking-[0.25em] uppercase shadow-md shadow-[#AD9952]/40">
          Best Value
        </div>
      ) : null}

      <div className="relative aspect-[4/3] bg-gradient-to-br from-[#AACAD1]/50 via-[#FDF8F0]/40 to-[#6793A0]/25 border-b border-[#263747]/5">
        <MiniVisual visual={bundle.visual} />
      </div>

      <div className="flex flex-col flex-1 p-5 md:p-6 gap-2.5">
        <div className="flex items-center justify-between">
          <span
            className="font-mono text-[10px] tracking-[0.25em] uppercase text-[#AD9952]"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            {bundle.eyebrow}
          </span>
          {bundle.savings ? (
            <span className="font-mono text-[10px] tracking-widest uppercase text-[#325360] bg-[#AACAD1]/50 px-2 py-1 rounded-full">
              {bundle.savings}
            </span>
          ) : null}
        </div>

        <h3
          className="text-xl md:text-2xl font-black text-[#263747] tracking-tight"
          style={{ fontFamily: "var(--font-sans)" }}
        >
          {bundle.name}
        </h3>

        <p className="text-xs font-mono tracking-wide uppercase text-[#263747]/55">
          {bundle.contents}
        </p>

        <p className="text-sm text-[#263747]/75 leading-relaxed">{bundle.pitch}</p>

        <div className="flex items-baseline gap-2 mt-auto pt-2">
          <span
            className="text-3xl md:text-4xl font-black text-[#263747] tracking-tight"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            ${bundle.price}
          </span>
          {bundle.compareAt ? (
            <span className="font-mono text-xs text-[#263747]/40 line-through">
              ${bundle.compareAt}
            </span>
          ) : null}
        </div>

        <motion.button
          type="button"
          aria-label={`Add ${bundle.name} to ritual — $${bundle.price}`}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          className={`relative mt-2 overflow-hidden w-full px-5 py-3 rounded-full font-semibold text-sm tracking-wide shadow-md transition-shadow ${
            bundle.featured
              ? "bg-[#AD9952] text-white shadow-[#AD9952]/30 hover:shadow-lg hover:shadow-[#AD9952]/40"
              : "bg-[#263747] text-white shadow-[#263747]/25 hover:shadow-lg hover:shadow-[#263747]/35"
          }`}
        >
          <motion.span
            className="absolute inset-0 bg-white/15"
            initial={{ x: "-110%" }}
            whileHover={{ x: "110%" }}
            transition={{ duration: 0.6 }}
          />
          <span className="relative">Add to cart &mdash; ${bundle.price}</span>
        </motion.button>
      </div>
    </motion.article>
  );
}

export function PriceBreak() {
  return (
    <section id="price" className="relative py-20 md:py-28 bg-luxe-teal noise-overlay overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#AACAD1] via-[#FDF8F0]/30 to-[#AACAD1]" />
      <motion.div
        className="absolute top-16 right-[10%] w-72 h-72 rounded-full bg-[#AD9952]/15 blur-3xl"
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center mb-10 md:mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span
            className="font-mono text-[11px] tracking-[0.3em] uppercase text-[#325360]/70"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            The packs
          </span>
          <div className="overflow-hidden mt-2">
            <motion.h2
              className="text-3xl md:text-5xl font-black text-[#263747] tracking-tight"
              style={{ fontFamily: "var(--font-sans)" }}
              initial={{ y: 80 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
            >
              One bottle. <span className="italic text-[#325360]">Four ways to stock it.</span>
            </motion.h2>
          </div>
          <p className="mt-4 text-sm md:text-base text-[#263747]/70 max-w-xl mx-auto">
            Same 5 oz bottle, same clean formula. Choose the pack that fits your routine,
            your household, or the person you&rsquo;re gifting.
          </p>
        </motion.div>

        {/* Bundle grid — 2x2 on tablet+, stacked on mobile */}
        <div className="grid gap-5 md:gap-6 grid-cols-1 sm:grid-cols-2">
          {bundles.map((b, i) => (
            <BundleGridCard key={b.id} bundle={b} index={i} />
          ))}
        </div>

        {/* Shared "everything inside" detail band */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
          className="mt-10 md:mt-14 bg-[#FAFBFB] rounded-[2rem] border border-[#325360]/10 shadow-lg shadow-[#263747]/10 p-6 md:p-10"
        >
          <div className="grid md:grid-cols-[0.8fr,1.2fr] gap-8 items-center">
            <div className="flex items-center justify-center">
              <div className="relative w-full max-w-[240px] aspect-[3/4]">
                <Image
                  src="/images/bottle-isolated.png"
                  alt="Seaduced 5 oz bottle"
                  fill
                  className="object-contain drop-shadow-[0_24px_32px_rgba(38,55,71,0.22)]"
                  sizes="(max-width: 768px) 60vw, 280px"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-3 font-mono text-[10px] tracking-[0.3em] uppercase text-[#AD9952]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#AD9952]" />
                Every pack, every bottle
              </div>
              <h3
                className="mt-3 text-2xl md:text-3xl font-black text-[#263747] tracking-tight"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                The same bottle, always.
              </h3>
              <p className="mt-2 text-sm text-[#263747]/65">
                5 oz &bull; Sea moss infused &bull; pH balanced
              </p>
              <ul className="mt-5 space-y-2.5">
                {included.map((item, i) => (
                  <motion.li
                    key={item}
                    className="flex items-start gap-3 text-sm text-[#263747]/80"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 + i * 0.07 }}
                  >
                    <span className="w-5 h-5 rounded-full bg-[#6793A0]/20 text-[#325360] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3" strokeWidth={3} />
                    </span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
              <p className="mt-5 text-xs text-[#263747]/55 font-mono">
                Ships in 2&#8209;3 business days. Free US shipping over $50.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
