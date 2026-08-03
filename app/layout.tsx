import type { Metadata } from "next";
import { Space_Grotesk, DM_Mono } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import "./sections.css";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-display" });
const dmMono = DM_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "Avery Stone — Creative Developer",
  description: "Avery Stone creates expressive digital products and content systems for ambitious teams.",
  keywords: ["creative developer", "web3", "digital products", "portfolio"],
  openGraph: {
    title: "Avery Stone — Creative Developer",
    description: "Digital experiences with signal, soul, and momentum.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${spaceGrotesk.variable} ${dmMono.variable}`}>
        <div className="noise" aria-hidden="true" />
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
