"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Why Partner", href: "/why-partner" },
  { label: "Services", href: "/services" },
  { label: "Membership", href: "/membership" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = () => setMobileOpen(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? "bg-[#050505]/90 backdrop-blur-xl border-b border-white/[0.06]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 xl:px-12">
        <div className="flex items-center justify-between h-20 xl:h-24">
          <a href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#00D5FF] to-[#7EE8FA] flex items-center justify-center">
              <span className="text-[#050505] font-bold font-[family-name:var(--font-subtitle)] text-lg">K</span>
            </div>
            <div>
              <span className="text-lg font-semibold tracking-tight text-white font-[family-name:var(--font-subtitle)]">KO</span>
              <span className="text-lg font-light text-white/70 font-[family-name:var(--font-subtitle)]"> Clinics</span>
            </div>
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-white/60 hover:text-white transition-colors duration-300 tracking-wide font-[family-name:var(--font-body)]"
              >
                {item.label}
              </a>
            ))}
            <a
              href="/contact"
              className="px-6 py-2.5 rounded-full bg-white/5 border border-white/10 text-sm font-semibold text-white hover:bg-[#00D5FF]/20 hover:border-[#00D5FF]/30 transition-all duration-500 font-[family-name:var(--font-body)]"
            >
              Become Partner
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden w-10 h-10 flex items-center justify-center"
            aria-label="Toggle menu"
          >
            <div className="w-5 h-4 relative flex flex-col justify-between">
              <span className={`block h-[1.5px] w-full bg-white transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-[6.5px]" : ""}`} />
              <span className={`block h-[1.5px] w-full bg-white transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
              <span className={`block h-[1.5px] w-full bg-white transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-[6.5px]" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-white/[0.06] bg-[#050505]/95 backdrop-blur-xl"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={handleNavClick}
                  className="text-base text-white/60 hover:text-white transition-colors py-2"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="/contact"
                onClick={handleNavClick}
                className="mt-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-sm font-semibold text-white hover:bg-[#00D5FF]/20 hover:border-[#00D5FF]/30 transition-all text-center"
              >
                Become Partner
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
