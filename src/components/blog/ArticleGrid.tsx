"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import type { BlogPost } from "@/lib/blog-posts";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 100, damping: 20 },
  },
};

export function ArticleGrid({ posts }: { posts: BlogPost[] }) {
  return (
    <section className="bg-[#AACAD1] pb-20 md:pb-28 pt-8">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {posts.map((post) => (
            <motion.div key={post.slug} variants={cardVariants}>
              <Link
                href={`/blog/${post.slug}`}
                className="group block bg-[#FDF8F0] rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300"
              >
                <motion.div
                  className="relative h-52 overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                >
                  <Image
                    src={post.heroImage}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-[1.05] transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-block bg-[#263747]/90 backdrop-blur-sm text-[#FDF8F0] text-[10px] font-mono tracking-[0.25em] uppercase px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                </motion.div>

                <motion.div
                  className="p-6"
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                >
                  <h3
                    className="text-xl md:text-2xl text-[#263747] leading-tight tracking-tight mb-3 group-hover:text-[#325360] transition-colors"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontWeight: 700,
                    }}
                  >
                    {post.title}
                  </h3>
                  <p className="text-sm text-[#263747]/75 leading-relaxed mb-4 line-clamp-3">
                    {post.dek}
                  </p>
                  <div className="flex items-center justify-between pt-3 border-t border-[#325360]/15">
                    <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-[#325360]/70">
                      {post.readingTimeMin} min
                    </span>
                    <span className="text-[#AD9952] text-sm font-bold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                      Read
                      <span aria-hidden>→</span>
                    </span>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
