import type { Metadata } from "next";
import { Inter, Bodoni_Moda } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import SmoothScroll from "@/components/SmoothScroll";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  variable: "--font-hero",
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Faraz Arshad — Front-End Developer",
  description: "Building immersive digital experiences through front-end engineering, 3D interactivity, and creative code.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${bodoni.variable}`}>
      <body style={{ fontFamily: "var(--font-inter, -apple-system, sans-serif)" }}>
        <SmoothScroll />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
