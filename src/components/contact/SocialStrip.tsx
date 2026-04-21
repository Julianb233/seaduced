"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Instagram } from "lucide-react";

const tiles = [
  { image: "/images/social/tile-01-ocean-seaweed.png", alt: "Sea moss floating in calm ocean water" },
  { image: "/images/social/tile-02-woman-morning-light.png", alt: "Woman in morning light" },
  { image: "/images/social/tile-03-bathroom-marble.png", alt: "Marble bathroom still life" },
  { image: "/images/social/tile-04-couple-hands.png", alt: "Couple holding hands" },
  { image: "/images/social/tile-05-marble-drops.png", alt: "Droplets on marble surface" },
  { image: "/images/social/tile-06-ocean-horizon.png", alt: "Ocean horizon at golden hour" },
];

export function SocialStrip() {
  return (
    <section className="bg-[#AACAD1] py-20 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <span className="block font-mono text-xs tracking-[0.3em] uppercase text-[#325360] mb-2">
              Or come say hi on
            </span>
            <h2
              className="text-3xl md:text-4xl font-serif text-[#263747] tracking-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              @seaduced
            </h2>
          </div>
          <a
            href="https://instagram.com/seaduced"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 self-start md:self-auto bg-[#AD9952] text-[#263747] px-5 py-2.5 rounded-full font-bold text-sm tracking-wide shadow-sm hover:shadow-md transition-all"
          >
            <Instagram className="w-4 h-4" />
            Follow
          </a>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {tiles.map((tile, idx) => (
            <motion.a
              key={tile.image}
              href="https://instagram.com/seaduced"
              target="_blank"
              rel="noopener noreferrer"
              className="relative aspect-square rounded-xl overflow-hidden group"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              whileHover={{ scale: 1.04, zIndex: 10 }}
            >
              <Image
                src={tile.image}
                alt={tile.alt}
                fill
                sizes="(max-width: 768px) 50vw, 200px"
                className="object-cover saturate-90 group-hover:saturate-100 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-[#325360]/0 group-hover:bg-[#325360]/30 transition-colors" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
