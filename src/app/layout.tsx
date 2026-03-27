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
  title: "EcoSynthesisX DAO | dMRV Infrastructure & Impact Tokenization",
  description: "EcoSynthesisX DAO builds AI and Blockchain tools to verify, measure, and tokenize real-world environmental impact. Enterprise-grade dMRV for the regenerative economy.",
  keywords: ["dMRV", "Regenerative Finance", "ReFi", "Web3 Impact", "Carbon Credit Verification", "Blockchain ESG", "Impact Tokenization", "EcoSynthesisX", "DAO"],
  alternates: {
    canonical: "https://www.ecosynthesisx.com",
  },
  openGraph: {
    title: "EcoSynthesisX | Web3 Public Good Studio",
    description: "Bridging the gap between blockchain technology and real-world impact.",
    url: "https://www.ecosynthesisx.com",
    siteName: "EcoSynthesisX",
    images: [
      {
        url: "https://www.ecosynthesisx.com/images/og-image.png", // 1200×630px — create this image and upload to /public/images/
        width: 1200,
        height: 630,
        alt: "EcoSynthesisX DAO — dMRV Infrastructure & Impact Tokenization",
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
    description: "Bridging the gap between blockchain technology and real-world impact.",
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
