import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { bundles, getBundle } from "@/lib/bundles";
import { BundleDetail } from "@/components/shop/BundleDetail";

export function generateStaticParams() {
  return bundles.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const bundle = getBundle(slug);
  if (!bundle) return { title: "Bundle not found — Seaduced" };
  return {
    title: `${bundle.name} — Seaduced`,
    description: bundle.shortDescription,
    openGraph: {
      title: `${bundle.name} — Seaduced`,
      description: bundle.shortDescription,
      type: "website",
    },
  };
}

export default async function BundlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const bundle = getBundle(slug);
  if (!bundle) notFound();

  return (
    <main className="min-h-screen bg-[#AACAD1] overflow-x-clip">
      <BundleDetail bundle={bundle} />
    </main>
  );
}
