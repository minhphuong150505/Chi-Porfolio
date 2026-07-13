import type { Metadata } from "next";
import { Be_Vietnam_Pro, Playfair_Display } from "next/font/google";
import { profile } from "@/data/content";
import "./globals.css";

const beVietnam = Be_Vietnam_Pro({
  variable: "--font-be-vietnam",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin", "vietnamese"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin", "vietnamese"],
});

export const metadata: Metadata = {
  title: `${profile.name} — Integrated Marketing Portfolio`,
  description: `${profile.role} · Marketing senior at ${profile.school}. IMC planning, trade marketing, e-commerce, and creator-driven campaigns.`,
  openGraph: {
    title: `${profile.name} — Integrated Marketing Portfolio`,
    description: `${profile.role} · Marketing senior at ${profile.school}.`,
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
      className={`${beVietnam.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col leading-relaxed">
        {children}
      </body>
    </html>
  );
}
