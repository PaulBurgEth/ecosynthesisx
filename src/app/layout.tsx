import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import Analytics from "./components/Analytics";
import JsonLd from "./components/JsonLd";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ecosynthesisx.com"),
  title: "EcoSynthesisX | Web3 Public Good Studio behind Regen Bazaar & DeCleanup",
  description: "EcoSynthesisX is the Web3 public good studio behind Regen Bazaar, DeCleanup and the first tRWI (Tokenized Real-World Impact) pilots. We build tools that let non-profits prove their work and let anyone fund it.",
  keywords: ["dMRV", "Regenerative Finance", "ReFi", "Web3 Impact", "Regen Bazaar", "DeCleanup", "Impact Tokenization", "tRWI", "Tokenized Real-World Impact", "EcoSynthesisX"],
  alternates: {
    canonical: "https://www.ecosynthesisx.com",
  },
  openGraph: {
    title: "EcoSynthesisX | Web3 Public Good Studio",
    description: "The studio behind Regen Bazaar, DeCleanup and the first tRWI (Tokenized Real-World Impact) pilots.",
    url: "https://www.ecosynthesisx.com",
    siteName: "EcoSynthesisX",
    images: [
      {
        url: "https://www.ecosynthesisx.com/images/og-image.png", // 1200×630px — create this image and upload to /public/images/
        width: 1200,
        height: 630,
        alt: "EcoSynthesisX, Web3 public good studio behind Regen Bazaar and DeCleanup",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@EcoSynthesisX",
    creator: "@EcoSynthesisX",
    title: "EcoSynthesisX | Web3 Public Good Studio",
    description: "The studio behind Regen Bazaar, DeCleanup and the first tRWI (Tokenized Real-World Impact) pilots.",
    images: ["https://www.ecosynthesisx.com/images/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32", type: "image/x-icon" },
      { url: "/icon.png", sizes: "512x512", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} ${inter.variable} antialiased`}
      >
        <JsonLd />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
