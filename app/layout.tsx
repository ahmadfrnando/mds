import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeModeScript } from "flowbite-react";
import "./globals.css";
import NavbarWrapper from "@/components/Navbar";
import FooterWrapper from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://medanmds.web.app"),
  keywords: [
    "jasa website medan",
    "jasa website murah",
    "jasa website company profile",
    "jasa website toko online",
    "borong web",
    "jasa website e commerce",
  ],
  title: "Borong Web",
  description: "Jasa website medan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <ThemeModeScript />
        <link rel="icon" href="/logo_tunggal.svg" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
