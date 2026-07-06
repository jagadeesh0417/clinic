"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { getTreatmentBySlug, treatments } from "@/data/treatments";

export default function TreatmentDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const treatment = getTreatmentBySlug(slug);
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  if (!treatment) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#050505]">
        <div className="text-center">
          <h1 className="font-['Playfair_Display'] text-4xl font-bold text-white">Treatment Not Found</h1>
          <a href="/treatments" className="mt-4 inline-block font-['Inter'] text-[#CBA135] underline">Back to Treatments</a>
        </div>
      </div>
    );
  }

  const related = treatments.filter(t => t.category === treatment.category && t.slug !== treatment.slug).slice(0, 4);

  return (
    <div className="min-h-screen bg-[#050505]">
      <div className="mx-auto max-w-7xl px-4 pt-32 pb-24 sm:px-6 lg:px-8">
        <motion.a
          href="/treatments"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8 inline-flex items-center gap-2 font-['Inter'] text-sm text-white/40 transition-colors hover:text-[#CBA135]"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
          Back to Treatments
        </motion.a>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block rounded-full border border-[#CBA135]/20 bg-[#CBA135]/5 px-3 py-1 font-['Space_Grotesk'] text-[10px] font-medium tracking-wider uppercase text-[#CBA135]">
            {treatment.category}
          </span>
          <h1 className="mt-4 font-['Playfair_Display'] text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            {treatment.name}
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-8 grid gap-4 md:grid-cols-4"
        >
          {treatment.images.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/[0.06]"
            >
              <img
                src={src}
                alt={`${treatment.name} - ${i + 1}`}
                className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 max-w-3xl"
        >
          <h2 className="font-['Playfair_Display'] text-2xl font-bold text-white">About This Treatment</h2>
          <p className="mt-4 font-['Inter'] text-base leading-relaxed text-white/60">
            {treatment.longDescription}
          </p>
        </motion.div>

        {treatment.faq && treatment.faq.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-12"
          >
            <h2 className="font-['Playfair_Display'] text-2xl font-bold text-white">
              Frequently Asked <span className="text-[#CBA135]">Questions</span>
            </h2>
            <div className="mt-6 space-y-3">
              {treatment.faq.map((item, fi) => (
                <div key={fi} className="overflow-hidden rounded-2xl border border-white/[0.06] transition-all duration-300 hover:border-[#CBA135]/20">
                  <button
                    onClick={() => setOpenFaq(openFaq === `q-${fi}` ? null : `q-${fi}`)}
                    className="flex w-full items-center justify-between px-6 py-4 text-left"
                    style={{ background: "rgba(255,255,255,0.03)" }}
                  >
                    <span className="flex-1 font-['Inter'] text-sm font-medium text-white/80 pr-4">{item.question}</span>
                    <svg
                      className={`h-4 w-4 shrink-0 text-white/40 transition-transform duration-300 ${openFaq === `q-${fi}` ? "rotate-180" : ""}`}
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </button>
                  <AnimatePresence>
                    {openFaq === `q-${fi}` && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="border-t border-white/[0.06] px-6 py-4">
                          <p className="font-['Inter'] text-sm leading-relaxed text-white/50">{item.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <a
            href="/contact"
            className="inline-flex items-center gap-2 rounded-xl bg-[#CBA135] px-6 py-3 font-['Inter'] text-sm font-semibold text-black transition-all duration-300 hover:bg-[#d4a83a] hover:shadow-lg hover:shadow-[#CBA135]/25"
          >
            Book Consultation
          </a>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3 font-['Inter'] text-sm font-semibold text-white transition-all duration-300 hover:border-[#CBA135]/40 hover:text-[#CBA135]"
          >
            Enquire Now
          </a>
        </motion.div>

        {related.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-20"
          >
            <h2 className="mb-8 font-['Playfair_Display'] text-2xl font-bold text-white">
              Related <span className="text-[#CBA135]">Treatments</span>
            </h2>
            <div className="grid gap-4 md:grid-cols-4">
              {related.map((t, i) => (
                <a
                  key={t.slug}
                  href={`/treatments/${t.slug}`}
                  className="group relative overflow-hidden rounded-2xl border border-white/[0.06] p-5 transition-all duration-500 hover:border-[#CBA135]/20"
                  style={{ background: "rgba(255,255,255,0.03)", backdropFilter: "blur(12px)" }}
                >
                  <span className="font-['Playfair_Display'] text-base font-bold text-white transition-colors duration-300 group-hover:text-[#CBA135]">
                    {t.name}
                  </span>
                  <p className="mt-2 font-['Inter'] text-xs text-white/40 line-clamp-2">{t.description}</p>
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
