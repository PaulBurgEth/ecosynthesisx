import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Analytics from "./components/Analytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EcoSynthesisX DAO | dMRV Infrastructure & Impact Tokenization",
  description: "EcoSynthesisX DAO builds AI and Blockchain tools to verify, measure, and tokenize real-world environmental impact. Enterprise-grade dMRV for the regenerative economy.",
  keywords: ["dMRV", "Regenerative Finance", "ReFi", "Web3 Impact", "Carbon Credit Verification", "Blockchain ESG", "Impact Tokenization", "EcoSynthesisX", "DAO"],
  openGraph: {
    title: "EcoSynthesisX | Web3 Public Good Studio",
    description: "Bridging the gap between blockchain technology and real-world impact.",
    url: "https://ecosynthesisx.github.io",
    siteName: "EcoSynthesisX",
    images: [
      {
        url: "https://avatars.githubusercontent.com/u/145981044?s=800&v=4", // Using high-res avatar as OG image
        width: 800,
        height: 800,
        alt: "EcoSynthesisX Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EcoSynthesisX | Web3 Public Good Studio",
    description: "Bridging the gap between blockchain technology and real-world impact.",
    creator: "@EcoSynthesisX",
    images: ["https://avatars.githubusercontent.com/u/145981044?s=800&v=4"],
  },
  icons: {
    icon: "/favicon.ico",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
