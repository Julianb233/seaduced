"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function SeaMossIntro() {
  return (
    <section className="bg-luxe-teal noise-overlay py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#AACAD1] via-[#FDF8F0]/20 to-[#AACAD1]" />
      <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div>
          <div className="overflow-hidden">
            <motion.span
              className="inline-block font-mono text-[#325360]/70 text-xs tracking-[0.3em] uppercase mb-4"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Chondrus crispus
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
              An ocean plant with a thousand-year resume.
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
              Sea moss (<em>Chondrus crispus</em>) is a red algae that grows on
              the rocky Atlantic coasts of Ireland, Scotland, and the Caribbean.
              Irish coastal villagers fed it to children recovering from
              tuberculosis. Jamaican grandmothers blended it into drinks for
              vitality and stamina.
            </p>
            <p>
              Long before we had the nutritional science to explain why, people
              living next to the ocean already knew: this plant is dense,
              nourishing, and kind to the body.
            </p>
            <p className="text-[#325360] font-medium">
              Today we have the data. Sea moss carries 92 of the 102 minerals
              the human body is made of — including iodine, potassium, zinc,
              magnesium, iron, and selenium.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-[#325360]/20"
        >
          <Image
            src="/images/social/tile-01-ocean-seaweed.png"
            alt="Sea moss macro — red algae suspended in shallow Atlantic water"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#263747]/40 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 text-[#FAFBFB]">
            <div className="font-mono text-[10px] tracking-[0.3em] uppercase opacity-80 mb-1">
              Atlantic Harvest
            </div>
            <div className="text-sm leading-snug">
              Hand-harvested from regulated North Atlantic waters and rinsed
              four times before extraction.
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
