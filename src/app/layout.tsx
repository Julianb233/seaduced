import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { LenisProvider } from "@/components/layout/LenisProvider";
import ClickSpark from "@/components/layout/ClickSpark";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Seaduced — Plant-Based Intimate Wellness",
  description:
    "Sea moss-infused, pH-balanced, plant-based intimate wellness crafted for every body. Clean ingredients, considered design.",
  keywords: [
    "sea moss",
    "intimate wellness",
    "plant-based lubricant",
    "pH-balanced",
    "menopause-inclusive",
    "clean beauty",
  ],
  openGraph: {
    title: "Seaduced — Plant-Based Intimate Wellness",
    description:
      "Sea moss-infused, pH-balanced, plant-based intimate wellness crafted for every body.",
    type: "website",
  },
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
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground">
        <ClickSpark
          sparkColor="#C5A55A"
          sparkSize={12}
          sparkRadius={20}
          sparkCount={8}
          duration={400}
          easing="ease-out"
        >
          <LenisProvider>
            <Navigation />
            {children}
            <Footer />
          </LenisProvider>
        </ClickSpark>
      </body>
    </html>
  );
}
