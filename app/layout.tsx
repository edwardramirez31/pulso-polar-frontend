import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pulso Polar",
  description: "Descubre Pulso Polar en Bucaramanga, tu centro especializado en baños de hielo y técnicas de Wim Hof. Experimenta la inmersión en hielo para mejorar tu salud y bienestar.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
