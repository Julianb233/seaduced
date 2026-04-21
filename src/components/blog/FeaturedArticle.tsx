"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import type { BlogPost } from "@/lib/blog-posts";

export function FeaturedArticle({ post }: { post: BlogPost }) {
  return (
    <section className="bg-[#AACAD1] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="grid md:grid-cols-2 gap-8 md:gap-12 items-stretch bg-[#FDF8F0] rounded-3xl overflow-hidden shadow-xl"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
        >
          <div className="relative min-h-[320px] md:min-h-[520px] overflow-hidden">
            <Image
              src={post.heroImage}
              alt={post.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
            <div className="absolute top-5 left-5">
              <span className="inline-block bg-[#263747] text-[#FDF8F0] text-[11px] font-mono tracking-[0.25em] uppercase px-3 py-1.5 rounded-full">
                Featured
              </span>
            </div>
          </div>

          <div className="flex flex-col justify-center p-8 md:p-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-[#325360]">
                {post.category}
              </span>
              <span className="text-[#325360]/50">·</span>
              <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-[#325360]/70">
                {post.readingTimeMin} min read
              </span>
            </div>

            <h2
              className="text-3xl md:text-5xl text-[#263747] leading-[1.05] tracking-tight mb-5"
              style={{ fontFamily: "'Playfair Display', serif", fontWeight: 800 }}
            >
              {post.title}
            </h2>

            <p className="text-base md:text-lg text-[#263747]/80 leading-relaxed mb-8">
              {post.dek}
            </p>

            <Link
              href={`/blog/${post.slug}`}
              className="inline-flex items-center gap-2 self-start bg-[#AD9952] text-[#FDF8F0] px-6 py-3 rounded-full font-bold text-sm tracking-wide hover:scale-[1.03] transition-transform"
            >
              Read the article
              <span aria-hidden>→</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
