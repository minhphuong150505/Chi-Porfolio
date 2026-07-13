import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { profile } from "@/data/content";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "vietnamese"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin", "vietnamese"],
});

export const metadata: Metadata = {
  title: `${profile.name} — Integrated Marketing Portfolio`,
  description: `${profile.role} senior at ${profile.school}. ${profile.headline}`,
  openGraph: {
    title: `${profile.name} — Integrated Marketing Portfolio`,
    description: profile.headline,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
