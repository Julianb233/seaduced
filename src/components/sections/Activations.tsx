"use client";

import { motion } from "framer-motion";
import { Store, Sparkles, Stethoscope, Megaphone } from "lucide-react";

const activations = [
  {
    icon: Store,
    title: "Retail Partners",
    description: "Carry Seaduced in your wellness boutique",
  },
  {
    icon: Sparkles,
    title: "Founder's Circle",
    description: "Early access, behind-the-scenes, founder calls",
  },
  {
    icon: Stethoscope,
    title: "Wellness Practitioners",
    description: "Recommend Seaduced to your clients",
  },
  {
    icon: Megaphone,
    title: "Press & Creators",
    description: "Editorial samples and feature opportunities",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring" as const, stiffness: 300, damping: 24 },
  },
};

export default function Activations() {
  return (
    <section id="activations" className="bg-cream py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Eyebrow + Headline */}
        <div className="text-center">
          <p className="font-tagline text-sm uppercase tracking-[0.25em] text-gold">
            Activations
          </p>
          <h2 className="mt-3 font-brand text-3xl text-charcoal sm:text-4xl lg:text-5xl">
            BE PART OF
            <br />
            <span className="text-gradient-gold">SEADUCED</span>
          </h2>
        </div>

        {/* Cards */}
        <motion.div
          className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {activations.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative cursor-pointer overflow-hidden rounded-2xl border border-charcoal/5 bg-white p-8 shadow-sm transition-colors duration-300 hover:bg-gold hover:border-gold"
              >
                {/* Icon */}
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 text-gold transition-colors duration-300 group-hover:bg-white/20 group-hover:text-charcoal">
                  <Icon className="h-6 w-6" />
                </div>

                {/* Text */}
                <h3 className="font-brand text-lg text-charcoal transition-colors duration-300 group-hover:text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal/60 transition-colors duration-300 group-hover:text-white/80">
                  {item.description}
                </p>

                {/* Arrow hint */}
                <div className="mt-4 flex items-center text-sm font-medium text-gold transition-colors duration-300 group-hover:text-white">
                  Learn more
                  <svg
                    className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
