"use client";

import { motion } from "framer-motion";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Products", href: "/products" },
  { label: "Space Rental", href: "/space-rental" },
  { label: "Partners", href: "/partners" },
  { label: "Requirements", href: "/partner-requirements" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

const socialIcons = [
  { name: "Instagram", path: "M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 0 2.5 1.25 1.25 0 0 1 0-2.5M12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10m0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" },
  { name: "Twitter", path: "M22.46 6c-.85.38-1.78.64-2.73.76 1-.6 1.76-1.54 2.12-2.68-.93.55-1.96.95-3.06 1.17a4.77 4.77 0 0 0-8.12 4.35A13.55 13.55 0 0 1 3.26 4.5a4.77 4.77 0 0 0 1.48 6.37c-.76-.02-1.48-.23-2.1-.58v.06a4.77 4.77 0 0 0 3.83 4.68 4.82 4.82 0 0 1-2.16.08 4.78 4.78 0 0 0 4.46 3.32A9.57 9.57 0 0 1 2 19.77a13.5 13.5 0 0 0 7.3 2.14c8.76 0 13.55-7.26 13.55-13.55 0-.2 0-.42-.02-.63A9.7 9.7 0 0 0 24 5.56a9.5 9.5 0 0 1-2.54.7z" },
  { name: "LinkedIn", path: "M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" },
  { name: "YouTube", path: "M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73z" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function Footer() {
  return (
    <footer className="relative bg-[#050505] border-t border-white/[0.06] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="relative max-w-7xl mx-auto px-6 xl:px-12 pt-20 pb-8"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          <motion.div variants={itemVariants} className="sm:col-span-2 lg:col-span-1">
            <a href="/" className="inline-flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#CBA135] to-[#E8C960] flex items-center justify-center">
                <span className="text-[#050505] font-bold font-[family-name:var(--font-heading)] text-lg">K</span>
              </div>
              <div>
                <span className="text-lg font-semibold tracking-tight text-white font-[family-name:var(--font-heading)]">KO</span>
                <span className="text-lg font-light text-white/70 font-[family-name:var(--font-heading)]"> Clinics</span>
              </div>
            </a>
            <p className="text-white/50 text-sm leading-relaxed font-[family-name:var(--font-body)] mb-6 max-w-xs">
              India&apos;s Largest AI-Powered Healthcare Growth Network
            </p>
            <div className="flex items-center gap-3">
              {socialIcons.map((icon) => (
                <span
                  key={icon.name}
                  className="w-9 h-9 rounded-full bg-white/5 border border-white/[0.06] flex items-center justify-center cursor-pointer hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-4 h-4 text-white/40 group-hover:text-white/80 transition-colors duration-300"
                  >
                    <path d={icon.path} />
                  </svg>
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-xs font-semibold tracking-[0.15em] uppercase text-white/40 mb-6 font-[family-name:var(--font-body)]">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/50 hover:text-white transition-all duration-300 font-[family-name:var(--font-body)] hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-xs font-semibold tracking-[0.15em] uppercase text-white/40 mb-6 font-[family-name:var(--font-body)]">
              Contact
            </h3>
            <ul className="flex flex-col gap-4">
              <li>
                <a href="mailto:hello@koclinics.com" className="text-sm text-white/50 hover:text-white transition-all duration-300 font-[family-name:var(--font-body)] hover:translate-x-1 inline-block">
                  hello@koclinics.com
                </a>
              </li>
              <li>
                <a href="tel:+919910099100" className="text-sm text-white/50 hover:text-white transition-all duration-300 font-[family-name:var(--font-body)] hover:translate-x-1 inline-block">
                  +91 99100 99100
                </a>
              </li>
              <li>
                <span className="text-sm text-white/50 leading-relaxed font-[family-name:var(--font-body)] block">
                  7th Floor, Indiqube Alpha<br />
                  Bellandur, Bengaluru<br />
                  Karnataka 560103, India
                </span>
              </li>
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-xs font-semibold tracking-[0.15em] uppercase text-white/40 mb-6 font-[family-name:var(--font-body)]">
              Newsletter
            </h3>
            <p className="text-sm text-white/50 leading-relaxed mb-4 font-[family-name:var(--font-body)]">
              Stay informed about the latest in AI-powered healthcare.
            </p>
            <div className="relative">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full bg-white/5 border border-white/[0.06] rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 font-[family-name:var(--font-body)] outline-none focus:border-[#CBA135]/40 focus:bg-white/[0.08] transition-all duration-300"
              />
              <button className="absolute right-1.5 top-1/2 -translate-y-1/2 px-4 py-1.5 rounded-lg bg-[#CBA135] text-[#050505] text-xs font-semibold font-[family-name:var(--font-body)] hover:bg-[#D4A843] transition-colors duration-300">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>

        <div className="relative my-12">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-white/[0.06]" />
          </div>
          <div className="relative flex justify-center">
            <span className="bg-[#050505] px-6 text-[10px] tracking-[0.2em] uppercase text-white/20 font-[family-name:var(--font-body)]">
              Excellence in Healthcare
            </span>
          </div>
        </div>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30 font-[family-name:var(--font-body)] tracking-wide">
            &copy; 2026 KO Clinics. All rights reserved.
          </p>
          <p className="text-xs text-white/20 font-[family-name:var(--font-body)] tracking-wide">
            Built with{" "}
            <span className="text-red-400/60 inline-block">&#9829;</span>{" "}
            for healthcare
          </p>
        </motion.div>
      </motion.div>
    </footer>
  );
}
