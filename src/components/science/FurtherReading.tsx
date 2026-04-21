"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const REFERENCES = [
  {
    title:
      "Nutritional and therapeutic potential of Chondrus crispus (Irish moss)",
    caption:
      "Peer-reviewed review of the mineral profile and bioactive compounds in Chondrus crispus, published in the Journal of Applied Phycology.",
    source: "PubMed · Journal of Applied Phycology",
    url: "https://pubmed.ncbi.nlm.nih.gov/32801434/",
    tag: "Sea Moss",
  },
  {
    title:
      "Safety assessment of carrageenan and its derivatives in topical products",
    caption:
      "Cosmetic Ingredient Review (CIR) expert panel finding on topical and mucosal safety of κ-carrageenan and related polysaccharides.",
    source: "NIH · Cosmetic Ingredient Review",
    url: "https://www.ncbi.nlm.nih.gov/pubmed/24861894",
    tag: "Carrageenan",
  },
  {
    title:
      "Vaginal pH and microbiome: the role of pH in mucosal homeostasis",
    caption:
      "Clinical review of how acidic pH (3.8–4.5) supports Lactobacillus-dominant flora and why pH-mismatched products can disrupt balance.",
    source: "NIH PMC · Frontiers in Cellular and Infection Microbiology",
    url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5585977/",
    tag: "pH Science",
  },
];

export function FurtherReading() {
  return (
    <section className="bg-[#FDF8F0] py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="overflow-hidden">
            <motion.span
              className="inline-block font-mono text-[#325360]/70 text-xs tracking-[0.3em] uppercase mb-4"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Further Reading
            </motion.span>
          </div>
          <div className="overflow-hidden">
            <motion.h2
              className="text-4xl md:text-5xl text-[#263747] leading-[1.05] tracking-tight max-w-2xl mx-auto"
              style={{ fontFamily: "'Playfair Display', serif" }}
              initial={{ y: 80, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
            >
              Sources we stand on.
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-4 text-[#263747]/75 max-w-xl mx-auto"
          >
            Three peer-reviewed starting points if you want to go deeper into
            the biology behind the bottle.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {REFERENCES.map((ref, i) => (
            <motion.a
              key={ref.url}
              href={ref.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: i * 0.1,
                ease: [0.25, 0.4, 0.25, 1],
              }}
              whileHover={{ y: -4 }}
              className="group rounded-2xl bg-[#FAFBFB] ring-1 ring-[#325360]/15 p-7 shadow-sm hover:shadow-lg transition-shadow flex flex-col"
            >
              <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-[#AD9952] mb-4">
                {ref.tag}
              </div>
              <h3
                className="text-xl text-[#263747] leading-snug mb-4 tracking-tight"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {ref.title}
              </h3>
              <p className="text-sm text-[#263747]/75 leading-relaxed flex-1">
                {ref.caption}
              </p>
              <div className="mt-6 pt-4 border-t border-[#325360]/15 flex items-center justify-between text-[#325360]">
                <span className="font-mono text-[10px] tracking-[0.2em] uppercase">
                  {ref.source}
                </span>
                <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
