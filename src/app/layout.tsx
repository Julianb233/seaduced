import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import { LenisProvider } from "@/components/layout/lenis-provider";
import { Navigation } from "@/components/layout/Navigation";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-brand",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

export const metadata: Metadata = {
  title: "Seaduced - Sea Moss Lubricant | Naturally Intimate",
  description:
    "Discover Seaduced, the first sea moss-infused personal lubricant. Plant-based, pH-balanced, and naturally silky for intimate wellness.",
};

export const viewport: Viewport = {
  themeColor: "#C5A55A",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${playfairDisplay.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-charcoal text-white font-sans">
        <LenisProvider>
          <Navigation />
          <main className="flex-1">{children}</main>
        </LenisProvider>
      </body>
    </html>
  );
}
