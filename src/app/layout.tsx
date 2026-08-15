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
  title: "ProxyUniverse Pro - The Smartest Way to Buy Proxies",
  description:
    "Buy residential, ISP, datacenter, and mobile proxies instantly with real-time stock, transparent pricing, and global coverage.",
  keywords: [
    "proxy",
    "residential proxy",
    "datacenter proxy",
    "mobile proxy",
    "ISP proxy",
    "proxy marketplace",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} dark`}
    >
      <body className="min-h-screen bg-navy-950 text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
