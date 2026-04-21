"use client";

import { motion } from "framer-motion";
import { CreditCard, Receipt, RotateCcw, ShieldAlert } from "lucide-react";

const rows = [
  {
    icon: CreditCard,
    title: "Payment methods",
    body: "We accept major credit cards, Apple Pay, Google Pay, and Stripe Link. Your card is authorized at checkout and charged when the order ships.",
  },
  {
    icon: Receipt,
    title: "Order confirmation",
    body: "You will get an email confirmation with your order number within a few minutes of checkout. Shipping confirmation and tracking follow when the order ships.",
  },
  {
    icon: RotateCcw,
    title: "Cancellations",
    body: "Need to cancel? Email us within an hour of placing your order and we will do our best to catch it before it ships.",
  },
  {
    icon: ShieldAlert,
    title: "Fraud prevention",
    body: "We reserve the right to cancel any order we believe is fraudulent. If we do, you are refunded in full — no questions asked.",
  },
];

export function OrdersPayments() {
  return (
    <section className=" relative bg-luxe-teal noise-overlay py-20 md:py-28 overflow-hidden">
      <div className="max-w-4xl mx-auto px-6">
        <motion.span
          className="block font-mono text-xs tracking-[0.3em] uppercase text-[#325360] mb-3"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Orders and payments
        </motion.span>
        <motion.h2
          className="text-3xl md:text-4xl font-serif text-[#263747] tracking-tight mb-10"
          style={{ fontFamily: "'Playfair Display', serif" }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Simple checkout, no surprises.
        </motion.h2>

        <div className="rounded-2xl overflow-hidden border border-[#263747]/15 bg-[#FDF8F0]/70 backdrop-blur-sm divide-y divide-[#263747]/10">
          {rows.map((row, idx) => {
            const Icon = row.icon;
            return (
              <motion.div
                key={row.title}
                className="flex gap-5 px-6 py-6 items-start"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: idx * 0.06 }}
              >
                <div className="shrink-0 w-10 h-10 rounded-full bg-[#325360]/10 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-[#325360]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#263747] mb-1">
                    {row.title}
                  </h3>
                  <p className="text-[#263747]/80 text-sm md:text-base leading-relaxed">
                    {row.body}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
