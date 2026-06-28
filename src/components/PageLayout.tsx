"use client";

import { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PageLayout({ children }: { children: ReactNode }) {
  return (
    <main className="relative min-h-screen bg-[#050505] overflow-hidden">
      <Navbar />
      {children}
      <Footer />
    </main>
  );
}
