import type { Metadata } from "next";
import { Playfair_Display, DM_Sans, Inter, Cinzel } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-inter",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-cinzel",
});

export const metadata: Metadata = {
  title: "Legacy Vault Wealth Management",
  description:
    "Legacy Vault Wealth Management provides trusted guidance in retirement planning, life insurance, business solutions, and long-term investment strategy for individuals, families, and businesses across the United States.",
  robots: {
    index: true,
    follow: true,
  },
  authors: [{ name: "Legacy Vault Wealth Management" }],
  openGraph: {
    title: "Legacy Vault Wealth Management",
    description:
      "Legacy Vault Wealth Management offers personalized insurance and wealth advisory services — including retirement planning, life insurance, and investment strategy — for clients across the U.S.",
    siteName: "Legacy Vault Wealth Management",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Legacy Vault Wealth Management",
    description:
      "Legacy Vault Wealth Management — trusted insurance and wealth advisory services for individuals, families, and businesses across the U.S.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable} ${inter.variable} ${cinzel.variable}`}>
      <body>{children}</body>
    </html>
  );
}
