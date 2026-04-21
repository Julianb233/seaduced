/** Site-wide navigation links — anchor-scroll for homepage sections, route for Contact */
export const NAV_LINKS = [
  { label: "Home", href: "#hero" },
  { label: "Product", href: "#product" },
  { label: "Science", href: "#science" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "/contact" },
] as const;

/** Brand copy */
export const BRAND = {
  name: "SEADUCED",
  tagline: "Naturally Intimate!",
  description: "Sea Moss Infused Personal Lubricant",
  year: new Date().getFullYear(),
} as const;
