"use client";

import { ReactNode } from "react";

export default function PageLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative bg-[#050505] overflow-hidden">
      {children}
    </div>
  );
}
