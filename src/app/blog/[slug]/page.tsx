import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleHero } from "@/components/blog/ArticleHero";
import { ArticleBody } from "@/components/blog/ArticleBody";
import { RelatedReading } from "@/components/blog/RelatedReading";
import { ArticleCTA } from "@/components/blog/ArticleCTA";
import {
  BLOG_POSTS,
  getPostBySlug,
  getRelatedPosts,
} from "@/lib/blog-posts";

// Next 16 treats dynamic route params as async.
type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) {
    return { title: "Article not found — Seaduced Journal" };
  }
  return {
    title: `${post.title} — Seaduced Journal`,
    description: post.dek,
    openGraph: {
      title: post.title,
      description: post.dek,
      type: "article",
      images: [{ url: post.heroImage }],
    },
  };
}

export default async function BlogArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const related = getRelatedPosts(slug, 3);

  return (
    <>
      <ArticleHero post={post} />
      <ArticleBody post={post} />
      <ArticleCTA post={post} />
      <RelatedReading posts={related} />
    </>
  );
}
