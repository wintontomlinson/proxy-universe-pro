import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "NovaBridge | Premium Proxy Infrastructure for Modern Teams",
  description:
    "Buy residential, ISP, datacenter and mobile proxies with instant activation, real-time inventory and coverage across 195+ countries. Trusted by 10,000+ businesses.",
  keywords: [
    "buy proxies",
    "residential proxies",
    "datacenter proxies",
    "ISP proxies",
    "mobile proxies",
    "proxy marketplace",
    "rotating proxies",
    "proxy API",
    "web scraping proxies",
    "NovaBridge",
  ],
  authors: [{ name: "NovaBridge" }],
  creator: "NovaBridge",
  publisher: "NovaBridge",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://novabridge.io",
    siteName: "NovaBridge",
    title: "NovaBridge | Premium Proxy Infrastructure for Modern Teams",
    description:
      "Buy residential, ISP, datacenter and mobile proxies with instant activation, real-time inventory and coverage across 195+ countries.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "NovaBridge - Premium Proxy Infrastructure",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NovaBridge | Premium Proxy Infrastructure",
    description:
      "Buy residential, ISP, datacenter and mobile proxies with instant activation and global coverage.",
    images: ["/og-image.png"],
    creator: "@novabridge",
  },
  metadataBase: new URL("https://novabridge.io"),
  alternates: {
    canonical: "https://novabridge.io",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} dark`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#050816" />
      </head>
      <body className="min-h-screen bg-navy-950 text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
