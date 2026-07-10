"use client";

import { ReactNode } from "react";

export default function PageLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative bg-[#100D0A] overflow-hidden">
      {children}
    </div>
  );
}
