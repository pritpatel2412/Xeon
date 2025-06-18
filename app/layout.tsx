import "./globals.css"
import "easymde/dist/easymde.min.css"

import type { Metadata, Viewport } from "next"
import { Outfit } from "next/font/google"

import { Toaster } from "@/components/ui/toaster"
import { cn } from "@/lib/utils"
import { Analytics } from "@vercel/analytics/next"

const outfit = Outfit({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Xeon – More Than Just Pitches",
  description:
    "A dynamic platform where bold ideas thrive, founders connect, and the startup ecosystem grows beyond the pitch",
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
}

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: [{ media: "(prefers-color-scheme: dark)", color: "black" }],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={cn(
          "relative h-full scroll-smooth text-white antialiased selection:bg-pink-700/20 selection:text-pink-400",
          outfit.className,
        )}
      >
        <Toaster />
        {children}
        <Analytics /> {/* ✅ This line activates Vercel Analytics */}
      </body>
    </html>
  )
}
