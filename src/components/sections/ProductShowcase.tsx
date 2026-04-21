"use client";

import type React from "react";
import { motion, useSpring } from "framer-motion";
import Image from "next/image";

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
  // Visual language for the bottle cluster
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
    pitch: "One bottle to begin. The same clean, sea-moss-infused formula, sized for first-time intention.",
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
    pitch: "Stock the drawer, the nightstand, the travel bag. Enough to make the ritual a habit.",
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
    pitch: "For the household, the group gift, the long-haul supply. Best value per bottle.",
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
    pitch: "One bottle, presented the way it deserves. Linen-textured box, satin ribbon, hand-written card option.",
    visual: "gift",
  },
];

function BundleVisual({ visual }: { visual: Bundle["visual"] }) {
  // All visuals compose from the isolated bottle for a consistent single-SKU story.
  const src = "/images/bottle-isolated.png";

  if (visual === "single") {
    return (
      <div className="relative w-full h-full flex items-center justify-center">
        <div className="relative w-[60%] h-[85%]">
          <Image
            src={src}
            alt=""
            fill
            className="object-contain drop-shadow-[0_24px_30px_rgba(38,55,71,0.28)]"
            sizes="(max-width: 768px) 60vw, 260px"
          />
        </div>
      </div>
    );
  }

  if (visual === "triple") {
    // Three bottles overlapping with a small fan
    return (
      <div className="relative w-full h-full flex items-end justify-center">
        {[-1, 0, 1].map((i) => (
          <div
            key={i}
            className="relative h-[82%] aspect-[1/3]"
            style={{
              transform: `translateX(${i * 28}%) rotate(${i * 4}deg)`,
              zIndex: i === 0 ? 3 : 2,
              filter: `drop-shadow(0 ${18 + Math.abs(i) * 4}px ${22 + Math.abs(i) * 4}px rgba(38,55,71,${0.22 - Math.abs(i) * 0.04}))`,
            }}
          >
            <Image
              src={src}
              alt=""
              fill
              className="object-contain"
              sizes="(max-width: 768px) 40vw, 120px"
            />
          </div>
        ))}
      </div>
    );
  }

  if (visual === "sextet") {
    // Six bottles fanned
    const positions = [-2.5, -1.5, -0.5, 0.5, 1.5, 2.5];
    return (
      <div className="relative w-full h-full flex items-end justify-center">
        {positions.map((i) => (
          <div
            key={i}
            className="relative h-[78%] aspect-[1/3]"
            style={{
              transform: `translateX(${i * 16}%) rotate(${i * 5}deg)`,
              zIndex: 10 - Math.round(Math.abs(i) * 2),
              filter: `drop-shadow(0 ${16 + Math.abs(i) * 3}px ${20 + Math.abs(i) * 3}px rgba(38,55,71,${0.2 - Math.abs(i) * 0.02}))`,
            }}
          >
            <Image
              src={src}
              alt=""
              fill
              className="object-contain"
              sizes="(max-width: 768px) 30vw, 90px"
            />
          </div>
        ))}
      </div>
    );
  }

  // gift
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="relative w-[60%] h-[85%]">
        <Image
          src={src}
          alt=""
          fill
          className="object-contain drop-shadow-[0_24px_30px_rgba(38,55,71,0.28)]"
          sizes="(max-width: 768px) 60vw, 260px"
        />
      </div>
      {/* Ribbon overlay */}
      <div
        aria-hidden
        className="absolute inset-y-[8%] left-1/2 -translate-x-1/2 w-[12%] bg-[#AD9952]/85 rounded-sm shadow-[0_6px_14px_rgba(173,153,82,0.35)]"
      />
      <div
        aria-hidden
        className="absolute top-[6%] left-1/2 -translate-x-1/2 w-[36%] h-[10%]"
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="block w-[48%] h-full bg-[#AD9952]/85 rounded-t-full -rotate-[22deg] origin-bottom-right" />
          <span className="block w-[48%] h-full bg-[#AD9952]/85 rounded-t-full rotate-[22deg] origin-bottom-left" />
        </div>
        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[18%] h-[70%] bg-[#AD9952] rounded-sm" />
      </div>
    </div>
  );
}

function BundleCard({ bundle, index }: { bundle: Bundle; index: number }) {
  const rotateX = useSpring(0, { stiffness: 150, damping: 20 });
  const rotateY = useSpring(0, { stiffness: 150, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const x = (e.clientX - centerX) / (rect.width / 2);
    const y = (e.clientY - centerY) / (rect.height / 2);
    rotateY.set(x * 5);
    rotateX.set(-y * 5);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.article
      role="group"
      aria-label={`${bundle.name} bundle — ${bundle.contents} — $${bundle.price}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
        ease: [0.25, 0.4, 0.25, 1],
      }}
      whileHover={{ y: -8 }}
      className="relative h-full"
      style={{ perspective: 1000 }}
    >
      <motion.div
        className={`relative h-full flex flex-col bg-white rounded-3xl border-2 overflow-hidden shadow-xl shadow-[#263747]/10 ${
          bundle.featured ? "border-[#AD9952]/70" : "border-[#263747]/10"
        }`}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* Featured pill */}
        {bundle.featured ? (
          <div className="absolute top-4 right-4 z-10 px-3 py-1 rounded-full bg-[#AD9952] text-white font-mono text-[10px] tracking-[0.25em] uppercase shadow-md shadow-[#AD9952]/40">
            Best Value
          </div>
        ) : null}

        {/* Visual well */}
        <div className="relative aspect-[4/3] bg-gradient-to-br from-[#AACAD1]/50 via-[#FDF8F0]/40 to-[#6793A0]/25 border-b border-[#263747]/5">
          <BundleVisual visual={bundle.visual} />
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1 p-5 md:p-6 gap-3">
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
            className="text-xl md:text-2xl font-serif text-[#263747] tracking-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {bundle.name}
          </h3>

          <p className="text-xs font-mono tracking-wide uppercase text-[#263747]/55">
            {bundle.contents}
          </p>

          <p className="text-sm text-[#263747]/75 leading-relaxed">
            {bundle.pitch}
          </p>

          <div className="flex items-baseline gap-2 mt-auto pt-3">
            <span
              className="text-3xl md:text-4xl font-serif text-[#263747] tracking-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
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
            className={`relative overflow-hidden w-full px-5 py-3 rounded-full font-semibold text-sm tracking-wide shadow-md transition-shadow ${
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
            <span className="relative">Add to Ritual</span>
          </motion.button>
        </div>
      </motion.div>
    </motion.article>
  );
}

export function ProductShowcase() {
  return (
    <section
      id="product"
      className="relative py-16 md:py-24 bg-[#AACAD1] overflow-hidden"
      aria-labelledby="bundles-heading"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#AACAD1] via-[#FDF8F0]/30 to-[#AACAD1]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          className="text-center mb-12 md:mb-14"
        >
          <motion.span
            className="font-mono text-[#325360]/70 text-[11px] tracking-[0.3em] uppercase"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            One bottle. Four ways in.
          </motion.span>
          <h2
            id="bundles-heading"
            className="text-3xl md:text-5xl font-serif text-[#263747] tracking-tight mt-2 overflow-hidden"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            <motion.span
              className="inline-block"
              initial={{ y: 80 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
            >
              Choose your{" "}
            </motion.span>
            <motion.span
              className="inline-block italic text-[#325360]"
              initial={{ y: 80 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1], delay: 0.1 }}
            >
              ritual
            </motion.span>
          </h2>
          <motion.p
            className="mt-4 max-w-xl mx-auto text-sm md:text-base text-[#263747]/70"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Same formula, same 5 oz bottle. Pick the pack that fits how you live.
          </motion.p>
        </motion.div>

        <div
          role="list"
          className="grid gap-5 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
        >
          {bundles.map((bundle, i) => (
            <div role="listitem" key={bundle.id} className="h-full">
              <BundleCard bundle={bundle} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
