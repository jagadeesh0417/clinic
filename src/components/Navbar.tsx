"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Treatments", href: "/treatments" },
  { label: "Locations", href: "/locations" },
  { label: "Products", href: "/products" },
  { label: "Membership", href: "/membership" },
  { label: "Partners", href: "/partners" },
  { label: "Gallery", href: "/gallery" },
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
          ? "bg-ink/95 backdrop-blur-xl border-b border-gold-600/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 xl:px-12">
        <div className="flex items-center justify-between h-20 xl:h-24">
          <a href="/" className="flex items-center gap-2" style={{ fontFamily: "var(--font-brand), serif" }}>
            <span className="text-xl font-semibold tracking-[0.08em] text-cream">KO</span>
            <span className="text-xl font-displayight text-gold-500">Clinics</span>
          </a>

          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-3 py-2 text-[12px] font-displayans uppercase tracking-[0.14em] text-body hover:text-gold-500 transition-colors duration-300 relative"
              >
                {item.label}
                <span className="absolute bottom-0 left-3 right-3 h-px bg-gold-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </a>
            ))}
            <div className="ml-6 pl-6 border-l border-gold-600/30">
              <a
                href="/contact"
                className="px-5 py-2.5 rounded-full border border-gold-500 text-gold-500 text-[12px] font-displayans uppercase tracking-[0.14em] hover:bg-gold-500/8 transition-all duration-300"
              >
                Become Partner
              </a>
            </div>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden w-10 h-10 flex items-center justify-center"
            aria-label="Toggle menu"
          >
            <div className="w-5 h-4 relative flex flex-col justify-between">
              <span className={`block h-[1.5px] w-full bg-cream transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-[6.5px]" : ""}`} />
              <span className={`block h-[1.5px] w-full bg-cream transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
              <span className={`block h-[1.5px] w-full bg-cream transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-[6.5px]" : ""}`} />
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
            className="lg:hidden border-t border-gold-600/20 bg-ink/95 backdrop-blur-xl"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={handleNavClick}
                  className="text-[12px] font-displayans uppercase tracking-[0.14em] text-body hover:text-gold-500 transition-colors py-2"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="/contact"
                onClick={handleNavClick}
                className="mt-2 px-5 py-3 rounded-full border border-gold-500 text-gold-500 text-[12px] font-displayans uppercase tracking-[0.14em] text-center hover:bg-gold-500/8 transition-all duration-300"
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
