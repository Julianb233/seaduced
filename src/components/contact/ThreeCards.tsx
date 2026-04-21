"use client";

import { motion } from "framer-motion";
import { Mail, Megaphone, ShoppingBag } from "lucide-react";

type Card = {
  icon: typeof Mail;
  eyebrow: string;
  title: string;
  description: string;
  email: string;
};

const cards: Card[] = [
  {
    icon: Mail,
    eyebrow: "General",
    title: "Say hi, ask anything.",
    description:
      "Product questions, feedback, kind notes, tough questions. We read every email.",
    email: "hello@seaducedproducts.com",
  },
  {
    icon: Megaphone,
    eyebrow: "Press & creators",
    title: "Press, podcasts, partnerships.",
    description:
      "If you write about wellness, intimacy, or clean beauty, we would love to talk.",
    email: "press@seaducedproducts.com",
  },
  {
    icon: ShoppingBag,
    eyebrow: "Retail & wholesale",
    title: "Stock Seaduced.",
    description:
      "Boutiques, wellness studios, and retailers who care about where ingredients come from.",
    email: "wholesale@seaducedproducts.com",
  },
];

export function ThreeCards() {
  return (
    <section className=" relative bg-luxe-teal noise-overlay py-20 md:py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="max-w-2xl mx-auto text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="block font-mono text-xs tracking-[0.3em] uppercase text-[#325360] mb-3">
            Pick the right inbox
          </span>
          <h2
            className="text-3xl md:text-4xl font-serif text-[#263747] tracking-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Three ways to reach us.
          </h2>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-3">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.a
                key={card.email}
                href={`mailto:${card.email}`}
                className="group relative flex flex-col justify-between rounded-2xl bg-[#FDF8F0]/80 backdrop-blur-sm border border-[#263747]/10 p-7 hover:border-[#325360]/50 hover:shadow-lg transition-all"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: idx * 0.08 }}
                whileHover={{ y: -4 }}
              >
                <div>
                  <div className="w-11 h-11 rounded-full bg-[#325360]/10 flex items-center justify-center mb-5 group-hover:bg-[#325360] transition-colors">
                    <Icon className="w-5 h-5 text-[#325360] group-hover:text-[#FDF8F0] transition-colors" />
                  </div>
                  <span className="font-mono text-xs tracking-[0.2em] uppercase text-[#AD9952]">
                    {card.eyebrow}
                  </span>
                  <h3
                    className="mt-2 text-xl font-serif text-[#263747] leading-tight"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm text-[#263747]/80 leading-relaxed">
                    {card.description}
                  </p>
                </div>
                <div className="mt-6 pt-5 border-t border-[#263747]/10">
                  <span className="font-mono text-sm text-[#325360] group-hover:text-[#AD9952] transition-colors break-all">
                    {card.email}
                  </span>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
