"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { getTreatmentBySlug } from "@/data/treatments";

const treatment = getTreatmentBySlug("skin-boosters");

const FALLBACK_IMG = "https://picsum.photos/seed/fallback/800/600";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

function Section({ title, className = "", children }: { title?: string; className?: string; children: React.ReactNode }) {
  return (
    <motion.div variants={fadeUp} className={className}>
      {title && <h2 className="mb-5 font-display text-2xl font-bold text-[#F6F1E8]">{title}</h2>}
      {children}
    </motion.div>
  );
}

function ListSection({ title, items }: { title: string; items: string[] }) {
  return (
    <Section title={title}>
      <div className="grid gap-2 sm:grid-cols-2">
        {items.map((item, i) => (
          <div key={i} className="flex items-start gap-3 rounded-xl border border-[#F6F1E8]/[0.06] bg-white/[0.02] px-4 py-3">
            <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#C9A14A]/20">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#C9A14A" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
            </div>
            <span className="font-sans text-sm text-[#F6F1E8]/60">{item}</span>
          </div>
        ))}
      </div>
    </Section>
  );
}

export default function SkinBoostersPage() {
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  if (!treatment) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#100D0A]">
        <div className="text-center">
          <h1 className="font-display text-4xl font-bold text-[#F6F1E8]">Treatment Not Found</h1>
          <Link href="/treatments" className="mt-4 inline-block font-sans text-[#C9A14A] underline">Back to Treatments</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#100D0A]">
      <div className="relative h-[50vh] min-h-[320px] w-full overflow-hidden bg-[#100D0A]">
        <img
          src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1600&q=80"
          alt="Skin Boosters"
          className="h-full w-full object-cover opacity-60"
          onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#100D0A] via-[#100D0A]/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0">
          <div className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
            <span className="inline-block font-sans text-xs tracking-[0.25em] uppercase text-[#C9A14A]">
              INJECTABLE SKIN QUALITY
            </span>
            <h1 className="mt-3 font-display text-4xl font-bold text-[#F6F1E8] md:text-5xl lg:text-6xl">
              Skin Boosters
            </h1>
            <p className="mt-3 max-w-2xl font-sans text-base leading-relaxed text-[#F6F1E8]/60">
              Micro-injections of hyaluronic acid to deeply hydrate, smooth, and restore natural glow.
            </p>
            <div className="mt-5 flex flex-wrap gap-5">
              <div>
                <p className="font-sans text-[10px] tracking-wider uppercase text-[#A67C2E]">Duration</p>
                <p className="font-sans text-sm text-[#F6F1E8]/70">30&ndash;45 min</p>
              </div>
              <div>
                <p className="font-sans text-[10px] tracking-wider uppercase text-[#A67C2E]">Results</p>
                <p className="font-sans text-sm text-[#F6F1E8]/70">Visible after 2&ndash;3 sessions</p>
              </div>
              <div>
                <p className="font-sans text-[10px] tracking-wider uppercase text-[#A67C2E]">Longevity</p>
                <p className="font-sans text-sm text-[#F6F1E8]/70">6&ndash;9 months</p>
              </div>
              <div>
                <p className="font-sans text-[10px] tracking-wider uppercase text-[#A67C2E]">Sessions</p>
                <p className="font-sans text-sm text-[#F6F1E8]/70">2&ndash;3 initial, maintenance every 6 months</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Back */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <Link
            href="/treatments"
            className="mb-10 inline-flex items-center gap-2 font-sans text-sm text-[#F6F1E8]/40 transition-colors hover:text-[#C9A14A]"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
            Back to Treatments
          </Link>
        </motion.div>

        {/* 1. What are Skin Boosters? */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <Section title="What are Skin Boosters?">
            <div className="rounded-2xl border border-[#F6F1E8]/[0.06] bg-white/[0.02] px-6 py-5">
              <p className="font-sans text-base leading-relaxed text-[#F6F1E8]/60">
                {treatment.longDescription}
              </p>
            </div>
            <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { label: "Deep Hydration", text: "Micro-doses of HA hydrate the skin from within" },
                { label: "No Volume", text: "Improves skin quality without adding bulk or volume" },
                { label: "Versatile", text: "Face, neck, d\u00e9colletage, and hands" },
                { label: "Natural Glow", text: "Gradual, radiant improvement with minimal downtime" },
              ].map(s => (
                <div key={s.label} className="rounded-xl border border-[#C9A14A]/10 bg-[#C9A14A]/5 px-4 py-3">
                  <p className="font-sans text-[10px] tracking-wider uppercase text-[#A67C2E]">{s.label}</p>
                  <p className="mt-1 font-sans text-sm text-[#F6F1E8]/70">{s.text}</p>
                </div>
              ))}
            </div>
          </Section>
        </motion.div>

        {/* 2. How It Works */}
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-14">
          <Section title="How It Works">
            <div className="rounded-2xl border border-[#F6F1E8]/[0.06] bg-white/[0.02] px-6 py-5">
              <p className="font-sans text-sm leading-relaxed text-[#F6F1E8]/60">{treatment.howItWorks}</p>
            </div>
            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { step: "01", text: "Skin is cleansed and topical numbing cream is applied" },
                { step: "02", text: "Micro-injections of HA are placed evenly across the treatment area" },
                { step: "03", text: "HA attracts and binds water molecules, deeply hydrating the skin" },
                { step: "04", text: "Skin becomes smoother, firmer, and more radiant over successive sessions" },
              ].map(s => (
                <div key={s.step} className="rounded-xl border border-[#F6F1E8]/[0.06] bg-white/[0.02] px-4 py-4">
                  <span className="font-sans text-xs text-[#A67C2E]">{s.step}</span>
                  <p className="mt-1 font-sans text-sm text-[#F6F1E8]/70">{s.text}</p>
                </div>
              ))}
            </div>
          </Section>
        </motion.div>

        {/* 3. Indications */}
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-14">
          <ListSection title="Indications" items={treatment.indications} />
        </motion.div>

        {/* 4. Contraindications */}
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-14">
          <ListSection title="Contraindications" items={treatment.contraindications} />
        </motion.div>

        {/* 5. Photo Gallery */}
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-14">
          <Section title="Photo Gallery">
            <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
              {treatment.gallery.map((src, i) => (
                <div key={i} className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-[#F6F1E8]/[0.06]">
                  <img
                    src={src}
                    alt={`Skin Boosters gallery ${i + 1}`}
                    loading="lazy"
                    onError={(e) => { (e.target as HTMLImageElement).src = FALLBACK_IMG; }}
                    className="h-full w-full object-cover transition-all duration-500 hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </Section>
        </motion.div>

        {/* 6. FAQ */}
        {treatment.faq && treatment.faq.length > 0 && (
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-14">
            <Section title="Frequently Asked Questions">
              <div className="space-y-3">
                {treatment.faq.map((item, fi) => (
                  <div key={fi} className="overflow-hidden rounded-2xl border border-[#F6F1E8]/[0.06] transition-all duration-300 hover:border-[#C9A14A]/20">
                    <button
                      onClick={() => setOpenFaq(openFaq === `q-${fi}` ? null : `q-${fi}`)}
                      className="flex w-full items-center justify-between px-6 py-4 text-left"
                      style={{ background: "rgba(246,241,232,0.03)" }}
                    >
                      <span className="flex-1 pr-4 font-sans text-sm font-medium text-[#F6F1E8]/80">{item.question}</span>
                      <svg
                        className={`h-4 w-4 shrink-0 text-[#F6F1E8]/40 transition-transform duration-300 ${openFaq === `q-${fi}` ? "rotate-180" : ""}`}
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
                          <div className="border-t border-[#F6F1E8]/[0.06] px-6 py-4">
                            <p className="font-sans text-sm leading-relaxed text-[#F6F1E8]/50">{item.answer}</p>
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

        {/* 7. Disclaimer + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-14"
        >
          <p className="font-sans text-xs text-[#F6F1E8]/30 leading-relaxed max-w-lg mb-6">
            Results and experience may vary. Skin boosters should only be administered by a qualified medical professional after consultation.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-[#C9A14A] px-6 py-3 font-sans text-sm font-semibold text-[#100D0A] transition-all duration-300 hover:bg-[#DDBB6C] hover:shadow-lg hover:shadow-[#C9A14A]/25"
            >
              Book Consultation
            </Link>
            <Link
              href="/partners"
              className="inline-flex items-center gap-2 rounded-xl border border-[#F6F1E8]/10 bg-[#F6F1E8]/5 px-6 py-3 font-sans text-sm font-semibold text-[#F6F1E8] transition-all duration-300 hover:border-[#C9A14A]/40 hover:text-[#C9A14A]"
            >
              Find a Clinic
            </Link>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
