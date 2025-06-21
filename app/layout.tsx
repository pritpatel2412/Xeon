import "./globals.css";
import "easymde/dist/easymde.min.css";

import type { Metadata, Viewport } from "next";
import { Outfit } from "next/font/google";

import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/next";

const outfit = Outfit({ subsets: ["latin"] });

// ✅ SEO Metadata
export const metadata: Metadata = {
  title: "Xeon – More Than Just Pitches",
  description:
    "A dynamic platform where bold ideas thrive, founders connect, and the startup ecosystem grows beyond the pitch",
  keywords: [
    "xeon",
    "thexeon",
    "xeon startup platform",
    "startup pitch platform",
    "connect with founders",
    "startup ecosystem",
    "digital incubator",
    "pitch your startup",
  ],
  metadataBase: new URL("https://thexeon.vercel.app"),
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Xeon – More Than Just Pitches",
    description:
      "A dynamic platform where bold ideas thrive, founders connect, and the startup ecosystem grows beyond the pitch",
    url: "https://thexeon.vercel.app",
    siteName: "Xeon",
    images: [
      {
        url: "https://i.postimg.cc/SR8NBpVK/Screenshot-2025-06-18-093344.png",
        width: 1200,
        height: 630,
        alt: "Xeon – Pitch, Connect, Launch",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Xeon – More Than Just Pitches",
    description:
      "A dynamic platform where bold ideas thrive, founders connect, and the startup ecosystem grows beyond the pitch",
    images: ["https://i.postimg.cc/SR8NBpVK/Screenshot-2025-06-18-093344.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
    },
  },
};

// ✅ Viewport settings for better rendering on mobile/dark mode
export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: [{ media: "(prefers-color-scheme: dark)", color: "black" }],
};

// ✅ Main layout component
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="canonical" href="https://thexeon.vercel.app/" />
      </head>
      <body
        className={cn(
          "relative h-full scroll-smooth text-white antialiased selection:bg-pink-700/20 selection:text-pink-400",
          outfit.className
        )}
      >
        <Toaster />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
