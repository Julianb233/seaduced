import type { Metadata } from "next";
import { BlogHero } from "@/components/blog/BlogHero";
import { FeaturedArticle } from "@/components/blog/FeaturedArticle";
import { CategoryChips } from "@/components/blog/CategoryChips";
import { ArticleGrid } from "@/components/blog/ArticleGrid";
import { NewsletterCTA } from "@/components/blog/NewsletterCTA";
import { BLOG_POSTS } from "@/lib/blog-posts";

export const metadata: Metadata = {
  title: "Seaduced Journal — Intimate Wellness Essays, Self-Care, and Ingredient Deep-Dives",
  description:
    "Honest essays on self-care, menopause, inclusive intimate wellness, and the science of feeling good in the body you live in.",
  openGraph: {
    title: "Seaduced Journal",
    description:
      "Honest essays on intimate wellness, self-care, and the science of feeling good in the body you live in.",
    type: "website",
  },
};

export default function BlogIndexPage() {
  // Top-ranked topic (per .planning/BLOG-TOPICS.md) anchors the feature slot;
  // the other nine populate the grid.
  const [featured, ...rest] = BLOG_POSTS;

  return (
    <>
      <BlogHero />
      <FeaturedArticle post={featured} />
      <section className="bg-[#AACAD1] pt-6 pb-8">
        <CategoryChips />
      </section>
      <ArticleGrid posts={rest} />
      <NewsletterCTA />
    </>
  );
}
