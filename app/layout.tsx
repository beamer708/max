import type { Metadata } from "next";
import { Oswald, Source_Serif_4 } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { ScrollAnimatorInit } from "@/components/ui/ScrollAnimatorInit";
import "./globals.css";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Home | MNCK Property Maintenance",
    template: "%s | MNCK Property Maintenance",
  },
  description:
    "Property maintenance and repair services in Delaware County, PA. Veteran owned, family owned, licensed. Call for a free phone quote.",
  metadataBase: new URL("https://www.mnckpropertymaintenance.com"),
  alternates: { canonical: "/" },
  icons: {
    icon: "/MNCKLogo.svg",
    shortcut: "/MNCKLogo.svg",
    apple: "/MNCKLogo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className={`${oswald.variable} ${sourceSerif.variable}`}>
        {/* Loading screen — shown on first load and navigation */}
        <div id="loading-screen" aria-hidden="true">
          <div id="loading-bar"></div>
          <div id="loading-content">
            <div id="loading-logo">
              <span className="loading-mnck">MNCK</span>
              <span className="loading-pm">Property Maintenance</span>
            </div>
            <p id="loading-tagline">
              Delaware County&apos;s Trusted Maintenance Team
            </p>
            <a href="tel:+12677485636" id="loading-phone">
              267-748-5636
            </a>
          </div>
        </div>

        <ScrollAnimatorInit />
        <Navbar />
        {children}
        <Footer />

        {/* Sticky mobile call bar */}
        <a
          href="tel:+12677485636"
          className="sticky-call"
          aria-label="Call MNCK Property Maintenance at 267-748-5636"
        >
          Call Now &middot; 267-748-5636
        </a>
      </body>
    </html>
  );
}
