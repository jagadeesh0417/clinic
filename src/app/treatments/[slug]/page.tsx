"use client";

import { useState, useCallback } from "react";
import { useParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { getTreatmentBySlug, treatments } from "@/data/treatments";

const FALLBACK_IMG = "https://picsum.photos/seed/fallback/800/600";

function TreatmentImage({ src, alt }: { src: string; alt: string }) {
  const [imgSrc, setImgSrc] = useState(src);
  return (
    <img
      src={imgSrc}
      alt={alt}
      loading="lazy"
      onError={() => setImgSrc(FALLBACK_IMG)}
      className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110"
    />
  );
}

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

function Section({ title, className = "", children }: { title?: string; className?: string; children: React.ReactNode }) {
  return (
    <motion.div variants={fadeUp} className={className}>
      {title && <h2 className="mb-5 font-display text-2xl font-bold text-white">{title}</h2>}
      {children}
    </motion.div>
  );
}

function ListSection({ title, items }: { title: string; items: string[] }) {
  return (
    <Section title={title}>
      <div className="grid gap-2 sm:grid-cols-2">
        {items.map((item, i) => (
          <div key={i} className="flex items-start gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] px-4 py-3">
            <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#C9A14A]/20">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#C9A14A" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
            </div>
            <span className="font-sans text-sm text-white/60">{item}</span>
          </div>
        ))}
      </div>
    </Section>
  );
}

export default function TreatmentDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const treatment = getTreatmentBySlug(slug);
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  if (!treatment) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#100D0A]">
        <div className="text-center">
          <h1 className="font-display text-4xl font-bold text-white">Treatment Not Found</h1>
          <a href="/treatments" className="mt-4 inline-block font-sans text-[#C9A14A] underline">Back to Treatments</a>
        </div>
      </div>
    );
  }

  const related = treatments.filter(t => t.category === treatment.category && t.slug !== treatment.slug).slice(0, 4);

  return (
    <div className="min-h-screen bg-[#100D0A]">
      <div className="mx-auto max-w-7xl px-4 pt-32 pb-24 sm:px-6 lg:px-8">
        {/* Back */}
        <motion.a
          href="/treatments"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8 inline-flex items-center gap-2 font-sans text-sm text-white/40 transition-colors hover:text-[#C9A14A]"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
          Back to Treatments
        </motion.a>

        {/* Hero */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="inline-block rounded-full border border-[#C9A14A]/20 bg-[#C9A14A]/5 px-3 py-1 font-sans text-[10px] font-medium tracking-wider uppercase text-[#C9A14A]">
            {treatment.category}
          </span>
          <h1 className="mt-4 font-display text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            {treatment.name}
          </h1>
          <p className="mt-4 max-w-3xl font-sans text-base leading-relaxed text-white/50">
            {treatment.description}
          </p>
        </motion.div>

        {/* Image Gallery - 4 cols desktop, 2 tablet, 1 mobile */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {treatment.images.map((src, i) => (
            <div
              key={i}
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/[0.06]"
            >
              <TreatmentImage src={src} alt={`${treatment.name} - ${i + 1}`} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </div>
          ))}
        </motion.div>

        {/* About This Treatment */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-14">
          <Section title="About This Treatment">
            <p className="font-sans text-base leading-relaxed text-white/60">{treatment.longDescription}</p>
          </Section>
        </motion.div>

        {/* How It Works */}
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-12">
          <Section title="How It Works">
            <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] px-6 py-5">
              <p className="font-sans text-sm leading-relaxed text-white/60">{treatment.howItWorks}</p>
            </div>
          </Section>
        </motion.div>

        {/* Indications */}
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-12">
          <ListSection title="Indications" items={treatment.indications} />
        </motion.div>

        {/* Contraindications */}
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-12">
          <ListSection title="Contraindications" items={treatment.contraindications} />
        </motion.div>

        {/* Photo Gallery */}
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-12">
          <Section title="Photo Gallery">
            <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
              {treatment.gallery.map((src, i) => (
                <div key={i} className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-white/[0.06]">
                  <img
                    src={src}
                    alt={`${treatment.name} gallery ${i + 1}`}
                    loading="lazy"
                    onError={(e) => { (e.target as HTMLImageElement).src = FALLBACK_IMG; }}
                    className="h-full w-full object-cover transition-all duration-500 hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </Section>
        </motion.div>

        {/* Video Gallery */}
        {treatment.videos && treatment.videos.length > 0 && (
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-12">
            <Section title="Video Gallery">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {treatment.videos.map((url, i) => (
                  <div key={i} className="aspect-video overflow-hidden rounded-2xl border border-white/[0.06] bg-ink/50">
                    <video src={url} controls className="h-full w-full" />
                  </div>
                ))}
              </div>
            </Section>
          </motion.div>
        )}

        {/* FAQ */}
        {treatment.faq && treatment.faq.length > 0 && (
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-14">
            <Section title="Frequently Asked Questions">
              <div className="space-y-3">
                {treatment.faq.map((item, fi) => (
                  <div key={fi} className="overflow-hidden rounded-2xl border border-white/[0.06] transition-all duration-300 hover:border-[#C9A14A]/20">
                    <button
                      onClick={() => setOpenFaq(openFaq === `q-${fi}` ? null : `q-${fi}`)}
                      className="flex w-full items-center justify-between px-6 py-4 text-left"
                      style={{ background: "rgba(246,241,232,0.03)" }}
                    >
                      <span className="flex-1 pr-4 font-sans text-sm font-medium text-white/80">{item.question}</span>
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
                            <p className="font-sans text-sm leading-relaxed text-white/50">{item.answer}</p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </Section>
          </motion.div>
        )}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-14 flex flex-wrap gap-4"
        >
          <a
            href="/contact"
            className="inline-flex items-center gap-2 rounded-xl bg-[#C9A14A] px-6 py-3 font-sans text-sm font-semibold text-black transition-all duration-300 hover:bg-[#C9A14A] hover:shadow-lg hover:shadow-[#C9A14A]/25"
          >
            Book Consultation
          </a>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3 font-sans text-sm font-semibold text-white transition-all duration-300 hover:border-[#C9A14A]/40 hover:text-[#C9A14A]"
          >
            Enquire Now
          </a>
        </motion.div>

        {/* Related Treatments */}
        {related.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-20"
          >
            <h2 className="mb-8 font-display text-2xl font-bold text-white">
              Related <span className="text-[#C9A14A]">Treatments</span>
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {related.map((t) => (
                <a
                  key={t.slug}
                  href={`/treatments/${t.slug}`}
                  className="group relative overflow-hidden rounded-2xl border border-white/[0.06] p-5 transition-all duration-500 hover:border-[#C9A14A]/20"
                  style={{ background: "rgba(246,241,232,0.03)", backdropFilter: "blur(12px)" }}
                >
                  <span className="font-display text-base font-bold text-white transition-colors duration-300 group-hover:text-[#C9A14A]">
                    {t.name}
                  </span>
                  <p className="mt-2 line-clamp-2 font-sans text-xs text-white/40">{t.description}</p>
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
