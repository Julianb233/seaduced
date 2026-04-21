import type { Metadata } from 'next'

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://seaduced.com'

/** Shared SEO defaults */
const defaults = {
  siteName: 'Seaduced',
  locale: 'en_US',
  type: 'website' as const,
}

interface PageSeoInput {
  title: string
  description: string
  path: string
  ogImagePath?: string
  type?: 'website' | 'article' | 'product'
  noIndex?: boolean
}

/**
 * Generate full Next.js Metadata for a page.
 * Every page MUST call this to get unique title, description, and OG image.
 */
export function generatePageMetadata({
  title,
  description,
  path,
  ogImagePath = '/og-default.png',
  type = 'website',
  noIndex = false,
}: PageSeoInput): Metadata {
  const url = `${BASE_URL}${path}`
  const ogImage = `${BASE_URL}${ogImagePath}`

  return {
    title,
    description,
    metadataBase: new URL(BASE_URL),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: defaults.siteName,
      locale: defaults.locale,
      type: type === 'product' ? 'website' : type,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  }
}

/**
 * Page-specific SEO configs — single source of truth.
 */
export const PAGE_SEO = {
  home: {
    title: 'Seaduced — Premium Sea Moss Personal Lubricant',
    description:
      'Discover Seaduced: the first sea moss-infused personal lubricant. Plant-based, pH-balanced, vegan, and naturally silky. Clean intimate wellness.',
    path: '/',
    ogImagePath: '/og-home.png',
  },
  product: {
    title: 'Sea Moss Lubricant — 5oz | Seaduced',
    description:
      'Shop our flagship 5oz sea moss-infused personal lubricant. Water-based, pH-balanced, paraben-free, and made with organic Irish sea moss. Ships discreetly.',
    path: '/product',
    ogImagePath: '/og-product.png',
    type: 'product' as const,
  },
  about: {
    title: 'About Seaduced — Our Story & Mission',
    description:
      'Learn about Seaduced: why we created the first sea moss personal lubricant. Our mission is clean, plant-based intimate wellness for everyone.',
    path: '/about',
    ogImagePath: '/og-about.png',
  },
  science: {
    title: 'Sea Moss Science — Why Sea Moss in Lubricant? | Seaduced',
    description:
      'Discover the science behind sea moss as a personal lubricant. Carrageenan benefits, mineral content, clinical research, and the future of natural intimate care.',
    path: '/science',
    ogImagePath: '/og-default.png',
  },
  contact: {
    title: 'Contact Seaduced — Get in Touch',
    description:
      "Have questions about Seaduced sea moss lubricant? Reach out to our team. We'd love to hear from you.",
    path: '/contact',
    ogImagePath: '/og-contact.png',
  },
} as const

export { BASE_URL }
