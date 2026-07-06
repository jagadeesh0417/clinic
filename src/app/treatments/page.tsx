"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { treatments, categories } from "@/data/treatments";
import type { FaqItem } from "@/data/treatments";

const FALLBACK_IMG = "https://picsum.photos/seed/fallback/800/600";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

export default function TreatmentsPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [expanded, setExpanded] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  const filtered = activeCategory === "All"
    ? treatments
    : treatments.filter(t => t.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#050505]">
      <div className="mx-auto max-w-7xl px-4 pt-32 pb-24 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <span className="inline-block font-['Space_Grotesk'] text-sm tracking-[0.2em] uppercase text-[#CBA135]">
            Aesthetic Excellence
          </span>
          <h1 className="mt-3 font-['Playfair_Display'] text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            Our <span className="text-[#CBA135]">Treatments</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl font-['Inter'] text-lg text-white/60">
            Comprehensive aesthetic and wellness treatments delivered by world-class practitioners
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12 flex flex-wrap justify-center gap-2"
        >
          {["All", ...categories].map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-5 py-2 font-['Inter'] text-sm font-medium tracking-wide transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-[#CBA135] text-black shadow-lg shadow-[#CBA135]/20"
                  : "border border-white/10 bg-white/5 text-white/60 hover:border-[#CBA135]/40 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="space-y-16"
        >
          <AnimatePresence mode="wait">
            {filtered.length === 0 ? (
              <motion.p
                key="empty"
                variants={fadeInUp}
                className="py-20 text-center font-['Inter'] text-white/40"
              >
                No treatments found in this category.
              </motion.p>
            ) : (
              filtered.map((treatment) => (
                <motion.div
                  key={treatment.slug}
                  layout
                  variants={fadeInUp}
                  className="group relative overflow-hidden rounded-3xl border border-white/[0.06] transition-all duration-500 hover:border-[#CBA135]/20"
                  style={{ background: "rgba(255,255,255,0.03)", backdropFilter: "blur(12px)" }}
                >
                  <div className="p-6 md:p-8">
                    <div className="mb-5 flex flex-wrap items-start justify-between gap-4">
                      <div className="flex-1">
                        <span className="inline-block rounded-full border border-[#CBA135]/20 bg-[#CBA135]/5 px-3 py-1 font-['Space_Grotesk'] text-[10px] font-medium tracking-wider uppercase text-[#CBA135]">
                          {treatment.category}
                        </span>
                        <h2 className="mt-3 font-['Playfair_Display'] text-2xl font-bold text-white md:text-3xl">
                          {treatment.name}
                        </h2>
                        <p className="mt-2 max-w-2xl font-['Inter'] text-sm leading-relaxed text-white/50">
                          {treatment.description}
                        </p>
                      </div>
                      <div className="flex shrink-0 flex-wrap gap-3">
                        <a
                          href={`/treatments/${treatment.slug}`}
                          className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-2.5 font-['Inter'] text-sm font-semibold text-white transition-all duration-300 hover:border-[#CBA135]/40 hover:bg-[#CBA135]/10 hover:text-[#CBA135]"
                        >
                          View Treatment
                        </a>
                        <a
                          href="/contact"
                          className="inline-flex items-center gap-2 rounded-xl bg-[#CBA135] px-5 py-2.5 font-['Inter'] text-sm font-semibold text-black transition-all duration-300 hover:bg-[#d4a83a] hover:shadow-lg hover:shadow-[#CBA135]/25"
                        >
                          Book Consultation
                        </a>
                      </div>
                    </div>

                    {/* Image grid - 4 cols desktop, 2 tablet, 1 mobile */}
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
                      {treatment.images.map((src, i) => (
                        <div
                          key={i}
                          className="group/img relative aspect-[4/3] overflow-hidden rounded-xl border border-white/[0.06] transition-all duration-500 hover:border-[#CBA135]/30 hover:shadow-lg hover:shadow-[#CBA135]/5"
                        >
                          <img
                            src={src}
                            alt={`${treatment.name} - Image ${i + 1}`}
                            loading="lazy"
                            onError={(e) => { (e.target as HTMLImageElement).src = FALLBACK_IMG; }}
                            className="h-full w-full object-cover transition-all duration-700 group-hover/img:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover/img:opacity-100" />
                        </div>
                      ))}
                    </div>

                    {/* FAQ Accordion */}
                    {treatment.faq && treatment.faq.length > 0 && (
                      <div className="mt-6 border-t border-white/[0.06] pt-5">
                        <button
                          onClick={() => setOpenFaq(openFaq === treatment.slug ? null : treatment.slug)}
                          className="flex w-full items-center justify-between"
                        >
                          <span className="font-['Space_Grotesk'] text-xs tracking-wider uppercase text-[#CBA135]">
                            Frequently Asked Questions
                          </span>
                          <svg
                            className={`h-4 w-4 text-white/40 transition-transform duration-300 ${openFaq === treatment.slug ? "rotate-180" : ""}`}
                            viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                          >
                            <polyline points="6 9 12 15 18 9" />
                          </svg>
                        </button>
                        <AnimatePresence>
                          {openFaq === treatment.slug && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="mt-4 space-y-3 overflow-hidden"
                            >
                              {treatment.faq.map((item, fi) => (
                                <div key={fi} className="rounded-xl border border-white/[0.06] bg-white/[0.02] px-4 py-3">
                                  <p className="font-['Inter'] text-sm font-medium text-white/80">{item.question}</p>
                                  <p className="mt-1 font-['Inter'] text-xs leading-relaxed text-white/40">{item.answer}</p>
                                </div>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    )}
                  </div>

                  <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                    style={{
                      background: "radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(203,161,53,0.03), transparent 40%)"
                    }}
                  />
                </motion.div>
              ))
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
