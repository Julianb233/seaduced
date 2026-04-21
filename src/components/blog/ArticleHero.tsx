"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { BlogPost } from "@/lib/blog-posts";

export function ArticleHero({ post }: { post: BlogPost }) {
  return (
    <section className="relative bg-luxe-teal noise-overlay pt-32 pb-12 md:pt-40 md:pb-16 overflow-hidden noise-overlay">
      <div className="absolute inset-0 bg-gradient-to-br from-[#AACAD1] via-[#FDF8F0]/30 to-[#AACAD1]" />
      <div className="relative max-w-4xl mx-auto px-6">
        <motion.div
          className="flex items-center gap-3 mb-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-[#325360]">
            {post.category}
          </span>
          <span className="text-[#325360]/50">·</span>
          <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-[#325360]/70">
            {post.readingTimeMin} min read
          </span>
          <span className="text-[#325360]/50">·</span>
          <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-[#325360]/70">
            Seaduced Journal
          </span>
        </motion.div>

        <div className="overflow-hidden mb-6">
          <motion.h1
            className="text-4xl md:text-6xl text-[#263747] leading-[1.05] tracking-tight"
            style={{ fontFamily: "var(--font-sans)", fontWeight: 800 }}
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
          >
            {post.title}
          </motion.h1>
        </div>

        <motion.p
          className="text-lg md:text-xl text-[#263747]/80 leading-relaxed max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {post.dek}
        </motion.p>
      </div>

      <motion.div
        className="relative max-w-5xl mx-auto mt-12 md:mt-16 px-6"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div className="relative h-[280px] md:h-[480px] rounded-3xl overflow-hidden shadow-2xl">
          <Image
            src={post.heroImage}
            alt={post.title}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 80vw"
            priority
          />
        </div>
      </motion.div>
    </section>
  );
}
