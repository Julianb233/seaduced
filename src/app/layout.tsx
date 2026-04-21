import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { LenisProvider } from "@/components/layout/lenis-provider";
import ClickSpark from "@/components/layout/click-spark";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Seaduced - Sea Moss Lubricant | Naturally Intimate",
  description:
    "Discover Seaduced, the first sea moss-infused personal lubricant. Plant-based, pH-balanced, and naturally silky for intimate wellness.",
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
      <body className="min-h-full flex flex-col">
        <LenisProvider>
          <ClickSpark sparkColor="#C5A55A" sparkRadius={25} sparkCount={10}>
            <div className="flex min-h-screen flex-col">
              <Navigation />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
          </ClickSpark>
        </LenisProvider>
      </body>
    </html>
  );
}
