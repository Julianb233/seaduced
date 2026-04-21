"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import type { BlogPost } from "@/lib/blog-posts";

export function RelatedReading({ posts }: { posts: BlogPost[] }) {
  if (posts.length === 0) return null;

  return (
    <section className=" relative bg-luxe-teal noise-overlay py-16 md:py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-[#325360]/80">
            Keep reading
          </span>
          <h2
            className="text-3xl md:text-4xl text-[#263747] tracking-tight mt-2"
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}
          >
            More from the Journal
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Link
                href={`/blog/${post.slug}`}
                className="group block bg-[#FDF8F0] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="relative h-40 overflow-hidden">
                  <Image
                    src={post.heroImage}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-[1.04] transition-transform duration-500"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                </div>
                <div className="p-5">
                  <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-[#325360]/80">
                    {post.category}
                  </span>
                  <h3
                    className="text-lg text-[#263747] leading-tight tracking-tight mt-2 mb-2 group-hover:text-[#325360] transition-colors"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontWeight: 700,
                    }}
                  >
                    {post.title}
                  </h3>
                  <p className="text-xs text-[#263747]/70 leading-relaxed line-clamp-2">
                    {post.dek}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
