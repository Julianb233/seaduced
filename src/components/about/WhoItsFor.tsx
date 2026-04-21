"use client";

import { motion } from "framer-motion";

type Persona = {
  eyebrow: string;
  heading: string;
  body: string;
  accent: string;
};

const personas: Persona[] = [
  {
    eyebrow: "For the shift",
    heading: "Menopause & beyond",
    body:
      "Hormonal change shouldn't mean losing intimacy with your own body. Seaduced is designed for the reality of perimenopause and menopause — hydrating, pH-friendly, and honest about what your body actually needs right now.",
    accent: "#AD9952",
  },
  {
    eyebrow: "For the two of you",
    heading: "Couples upgrading care",
    body:
      "Self-care doesn't stop at skincare. Seaduced is the product you introduce when you're ready to trade what you've been tolerating for something you both feel good about — cleaner, softer, made for long nights and slow mornings.",
    accent: "#6793A0",
  },
  {
    eyebrow: "For all of us",
    heading: "LGBTQ+ & every kind of love",
    body:
      "Inclusive isn't a label we tack on — it's the brief. Seaduced was formulated and written for every body, every pairing, every orientation. No assumptions about whose hands are on the bottle.",
    accent: "#AACAD1",
  },
];

export function WhoItsFor() {
  return (
    <section className="bg-luxe-deep noise-overlay text-[#263747] relative py-20 md:py-28 overflow-hidden">
            {/* Ambient blobs */}
      <motion.div
        className="absolute top-20 -left-20 w-96 h-96 rounded-full bg-[#6793A0]/25 blur-[100px]"
        animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 -right-20 w-96 h-96 rounded-full bg-[#AD9952]/18 blur-[100px]"
        animate={{ x: [0, -40, 0], y: [0, 30, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="text-center mb-14 md:mb-16">
          <motion.span
            className="inline-block font-mono text-[#AD9952] text-xs tracking-[0.3em] uppercase mb-3"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Who it&apos;s for
          </motion.span>

          <div className="overflow-hidden">
            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl text-[#263747] tracking-tight"
              style={{ fontFamily: "var(--font-sans)", fontWeight: 800 }}
              initial={{ y: 60, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
            >
              A brand for <span className="italic text-[#AACAD1]">every body</span>.
            </motion.h2>
          </div>

          <motion.p
            className="mt-5 text-base md:text-lg text-[#263747]/75 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            We didn&apos;t write this for the model in the catalog. We wrote it for
            the people actually buying it.
          </motion.p>
        </div>

        <div className="space-y-10 md:space-y-14">
          {personas.map((persona, i) => (
            <motion.article
              key={persona.heading}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.25, 0.4, 0.25, 1] }}
              className="grid md:grid-cols-[auto_1fr] gap-6 md:gap-10 items-start"
            >
              {/* Number / accent column */}
              <div className="flex md:flex-col items-center md:items-start gap-4 md:gap-3 shrink-0">
                <span
                  className="font-mono text-xs tracking-[0.3em] uppercase"
                  style={{ color: persona.accent }}
                >
                  {persona.eyebrow}
                </span>
                <div className="h-[1px] md:h-10 w-10 md:w-[1px]" style={{ backgroundColor: persona.accent, opacity: 0.4 }} />
                <span
                  className="font-mono text-xs tracking-[0.2em] text-[#325360]/50"
                >
                  0{i + 1} / 03
                </span>
              </div>

              {/* Body */}
              <div>
                <h3
                  className="text-3xl md:text-4xl text-[#263747] leading-[1.05] tracking-tight mb-4"
                  style={{ fontFamily: "var(--font-sans)", fontWeight: 700 }}
                >
                  {persona.heading}
                </h3>
                <p className="text-base md:text-lg text-[#263747]/80 leading-relaxed max-w-2xl">
                  {persona.body}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
