"use client";
import NavbarWrapper from "./Navbar";
import FooterWrapper from "./Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Layout({ children }: any) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <main className="flex min-h-screen flex-col gap-2 dark:bg-gray-800">
      <NavbarWrapper />
      {children}
      <FooterWrapper />
    </main>
  );
}
