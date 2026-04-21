/** Site-wide navigation links — all anchor-scroll for single-page layout */
export const NAV_LINKS = [
  { label: 'Home', href: '#hero' },
  { label: 'Product', href: '#product' },
  { label: 'Science', href: '#benefits' },
  { label: 'Activations', href: '#activations' },
  { label: 'Community', href: '#community' },
] as const;

/** Social media links (placeholders until Gina provides) */
export const SOCIAL_LINKS = [
  { label: 'Instagram', href: '#', icon: 'instagram' },
  { label: 'TikTok', href: '#', icon: 'tiktok' },
  { label: 'Facebook', href: '#', icon: 'facebook' },
] as const;

/** Brand copy */
export const BRAND = {
  name: 'SEADUCED',
  tagline: 'Naturally Intimate!',
  description: 'Sea Moss Infused Personal Lubricant',
  email: '', // TBD
  phone: '', // TBD
  year: new Date().getFullYear(),
} as const;

/** Footer link groups — 4-column layout (anchor-based for single-page) */
export const FOOTER_LINKS = {
  products: [
    { href: '#product', label: 'Seaduced 5 oz' },
    { href: '#product', label: 'Bundles' },
    { href: '#product', label: 'Gift Set' },
  ],
  quickLinks: [
    { href: '#hero', label: 'Home' },
    { href: '#product', label: 'Product' },
    { href: '#benefits', label: 'Science' },
    { href: '#activations', label: 'Activations' },
  ],
  company: [
    { href: '#activations', label: 'Our Story' },
    { href: '#activations', label: 'Press' },
    { href: '#community', label: 'Community' },
  ],
  legal: [
    { href: '/privacy', label: 'Privacy Policy' },
    { href: '/terms', label: 'Terms of Service' },
  ],
} as const;
