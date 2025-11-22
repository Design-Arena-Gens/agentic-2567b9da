import "./globals.css";
import { Inter, Space_Grotesk } from "next/font/google";
import type { Metadata } from "next";
import { ReactNode } from "react";
import RootProviders from "@/components/RootProviders";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-grotesk"
});

export const metadata: Metadata = {
  title: "ازدواجية الموجة والجسيم",
  description:
    "تجربة تفاعلية تشرح مفهوم ازدواجية الموجة والجسيم وكيفية تطوره في الفيزياء الحديثة."
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ar" dir="rtl" className={`${inter.variable} ${grotesk.variable}`}>
      <body className="min-h-screen bg-space-950 text-space-50 antialiased">
        <RootProviders>{children}</RootProviders>
      </body>
    </html>
  );
}
