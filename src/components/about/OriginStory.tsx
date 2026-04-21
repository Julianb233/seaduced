"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function OriginStory() {
  return (
    <section className=" relative py-20 md:py-28 bg-luxe-teal noise-overlay overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#AACAD1] via-[#FDF8F0]/20 to-[#AACAD1]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Text column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <motion.span
              className="inline-block font-mono text-[#325360] text-xs tracking-[0.3em] uppercase"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Where it started
            </motion.span>

            <h2
              className="text-4xl md:text-5xl text-[#263747] leading-[1.05] tracking-tight"
              style={{ fontFamily: "var(--font-serif), 'Playfair Display', serif", fontWeight: 700 }}
            >
              Why we made this
            </h2>

            <div className="h-[2px] w-16 bg-[#AD9952]" />

            <div className="space-y-5 text-base md:text-lg text-[#263747]/85 leading-relaxed">
              <p>
                Seaduced started with a simple question: why are the products
                we use during the most tender moments of our lives the ones
                we know the least about?
              </p>
              <p>
                So many &quot;personal lubricants&quot; are made with petroleum,
                parabens, glycerin, and a long ingredient list that reads more
                like a chemistry final than self-care.
              </p>
              <p>
                We wanted something cleaner. Something that worked with the
                body instead of against it. So we turned to the sea — where
                sea moss has been quietly producing the silkiest, most
                hydrating plant polysaccharides on earth. That became our
                hero ingredient. Everything else fell into place around it.
              </p>
            </div>
          </motion.div>

          {/* Image column */}
          <motion.div
            initial={{ opacity: 0, x: 30, scale: 0.96 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
            className="relative"
          >
            <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/social/tile-01-ocean-seaweed.png"
                alt="Ocean tide with sea moss filaments — the source of Seaduced's hero ingredient"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Tint overlay for palette cohesion */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#325360]/20 via-transparent to-[#6793A0]/20" />
            </div>

            {/* Gold frame accent */}
            <motion.div
              className="absolute -inset-2 rounded-2xl border border-[#AD9952]/40 -z-10"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />

            {/* Floating caption chip */}
            <motion.div
              className="absolute -bottom-4 -left-4 md:-left-6 bg-[#FDF8F0] px-4 py-2 rounded-full shadow-lg border border-[#AD9952]/20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#263747]">
                Wild-harvested sea moss
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
