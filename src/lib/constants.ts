/** Site-wide navigation links — anchor-scroll for homepage sections, route for Contact */
export const NAV_LINKS = [
  { label: 'Home', href: '#hero' },
  { label: 'Product', href: '#product' },
  { label: 'Science', href: '#science' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '/contact' },
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

/** Footer link groups — 4-column layout */
export const FOOTER_LINKS = {
  products: [
    { href: '/product', label: 'Seaduced 5 oz' },
    { href: '/product#bundles', label: 'Bundles' },
    { href: '/product#gift', label: 'Gift Set' },
  ],
  quickLinks: [
    { href: '/', label: 'Home' },
    { href: '/product', label: 'Product' },
    { href: '/science', label: 'Science' },
    { href: '/about', label: 'About' },
  ],
  company: [
    { href: '/about', label: 'Our Story' },
    { href: '/about#press', label: 'Press' },
    { href: '/contact', label: 'Contact' },
    { href: '/about#founder', label: 'Founder' },
  ],
  legal: [
    { href: '/privacy', label: 'Privacy Policy' },
    { href: '/terms', label: 'Terms of Service' },
    { href: '/privacy#cookies', label: 'Cookie Policy' },
  ],
} as const;
