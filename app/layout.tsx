import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { PreviewBanner } from "@/components/layout/PreviewBanner";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "MNCK Property Maintenance",
    template: "%s | MNCK Property Maintenance",
  },
  description:
    "Property maintenance and repair services in Delaware County, PA.",
  metadataBase: new URL("https://www.mnckpropertymaintenance.com"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/MNCKLogo.svg",
    shortcut: "/MNCKLogo.svg",
    apple: "/MNCKLogo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <PreviewBanner />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
