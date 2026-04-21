"use client";

import { motion } from "framer-motion";
import { CreditCard, UserCircle, BarChart3 } from "lucide-react";

const bullets = [
  {
    icon: CreditCard,
    title: "When you place an order",
    body: "Name, shipping address, email, and payment information. Card details go straight to Stripe — we never see or store your card number.",
  },
  {
    icon: UserCircle,
    title: "When you subscribe",
    body: "Your email and anything else you choose to share (birthday, preferences). Everything beyond email is optional.",
  },
  {
    icon: BarChart3,
    title: "When you browse",
    body: "Standard site analytics — anonymous page views and device type — so we can tell what is working. No cross-site tracking.",
  },
];

export function WhatWeCollect() {
  return (
    <section className="bg-[#AACAD1] py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-6">
        <motion.span
          className="block font-mono text-xs tracking-[0.3em] uppercase text-[#325360] mb-3"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          What we collect
        </motion.span>
        <motion.h2
          className="text-3xl md:text-4xl font-serif text-[#263747] tracking-tight mb-4"
          style={{ fontFamily: "'Playfair Display', serif" }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Only what we need, and only to do our job.
        </motion.h2>
        <motion.p
          className="text-[#263747]/75 max-w-2xl text-base md:text-lg mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Three situations where we collect information. That is the whole
          list.
        </motion.p>

        <div className="grid gap-5 md:grid-cols-3">
          {bullets.map((b, idx) => {
            const Icon = b.icon;
            return (
              <motion.div
                key={b.title}
                className="rounded-2xl bg-[#FDF8F0]/80 border border-[#263747]/10 p-6 hover:border-[#325360]/40 transition-colors"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
              >
                <div className="w-11 h-11 rounded-full bg-[#325360]/10 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-[#325360]" />
                </div>
                <h3 className="text-lg font-semibold text-[#263747] mb-2">
                  {b.title}
                </h3>
                <p className="text-sm text-[#263747]/80 leading-relaxed">
                  {b.body}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
