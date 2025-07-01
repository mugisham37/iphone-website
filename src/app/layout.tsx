import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "iPhone 15 Pro - Apple",
  description: "iPhone 15 Pro. Forged in titanium and featuring the groundbreaking A17 Pro chip, customizable Action button, and the most powerful iPhone camera system ever.",
  keywords: "iPhone 15 Pro, Apple, titanium, A17 Pro chip, Action button, camera system, smartphone",
  authors: [{ name: "Apple Inc." }],
  creator: "Apple Inc.",
  publisher: "Apple Inc.",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://apple.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "iPhone 15 Pro - Apple",
    description: "iPhone 15 Pro. Forged in titanium and featuring the groundbreaking A17 Pro chip, customizable Action button, and the most powerful iPhone camera system ever.",
    url: '/',
    siteName: 'Apple',
    images: [
      {
        url: '/assets/images/hero.jpeg',
        width: 1200,
        height: 630,
        alt: 'iPhone 15 Pro',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "iPhone 15 Pro - Apple",
    description: "iPhone 15 Pro. Forged in titanium and featuring the groundbreaking A17 Pro chip, customizable Action button, and the most powerful iPhone camera system ever.",
    images: ['/assets/images/hero.jpeg'],
    creator: '@apple',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#000000" />
        <meta name="color-scheme" content="dark" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/assets/images/apple.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/assets/images/apple.svg" />
        <link rel="preload" href="/assets/videos/hero.mp4" as="video" type="video/mp4" />
        <link rel="preload" href="/assets/videos/smallHero.mp4" as="video" type="video/mp4" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white min-h-screen`}
        suppressHydrationWarning={true}
      >
        <div id="root" className="relative">
          {children}
        </div>
        <div id="portal-root" />
      </body>
    </html>
  );
}
