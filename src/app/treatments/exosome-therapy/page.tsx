"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { getTreatmentBySlug } from "@/data/treatments";

const treatment = getTreatmentBySlug("exosome-therapy");

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
      {title && <h2 className="mb-5 font-['Fraunces'] text-2xl font-bold text-[#F5F1E8]">{title}</h2>}
      {children}
    </motion.div>
  );
}

function ListSection({ title, items }: { title: string; items: string[] }) {
  return (
    <Section title={title}>
      <div className="grid gap-2 sm:grid-cols-2">
        {items.map((item, i) => (
          <div key={i} className="flex items-start gap-3 rounded-xl border border-[#F5F1E8]/[0.06] bg-white/[0.02] px-4 py-3">
            <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#B8935A]/20">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#B8935A" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
            </div>
            <span className="font-['Inter'] text-sm text-[#F5F1E8]/60">{item}</span>
          </div>
        ))}
      </div>
    </Section>
  );
}

export default function ExosomeTherapyPage() {
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  if (!treatment) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#0F0F0E]">
        <div className="text-center">
          <h1 className="font-['Fraunces'] text-4xl font-bold text-[#F5F1E8]">Treatment Not Found</h1>
          <Link href="/treatments" className="mt-4 inline-block font-['Inter'] text-[#B8935A] underline">Back to Treatments</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0F0F0E]">
      <div className="relative h-[50vh] min-h-[320px] w-full overflow-hidden bg-[#0F0F0E]">
        <img
          src="https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?w=1600&q=80"
          alt="Exosome Therapy"
          className="h-full w-full object-cover opacity-60"
          onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0E] via-[#0F0F0E]/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0">
          <div className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
            <span className="inline-block font-['IBM_Plex_Mono'] text-xs tracking-[0.25em] uppercase text-[#B8935A]">
              REGENERATIVE MEDICINE
            </span>
            <h1 className="mt-3 font-['Fraunces'] text-4xl font-bold text-[#F5F1E8] md:text-5xl lg:text-6xl">
              Exosome Therapy
            </h1>
            <p className="mt-3 max-w-2xl font-['Inter'] text-base leading-relaxed text-[#F5F1E8]/60">
              Next-generation, cell-free regenerative signaling for advanced skin and hair rejuvenation.
            </p>
            <div className="mt-5 flex flex-wrap gap-5">
              <div>
                <p className="font-['IBM_Plex_Mono'] text-[10px] tracking-wider uppercase text-[#4A5D3A]">Duration</p>
                <p className="font-['Inter'] text-sm text-[#F5F1E8]/70">45&ndash;60 min</p>
              </div>
              <div>
                <p className="font-['IBM_Plex_Mono'] text-[10px] tracking-wider uppercase text-[#4A5D3A]">Results</p>
                <p className="font-['Inter'] text-sm text-[#F5F1E8]/70">Visible in 2&ndash;4 weeks, continued over 2&ndash;3 months</p>
              </div>
              <div>
                <p className="font-['IBM_Plex_Mono'] text-[10px] tracking-wider uppercase text-[#4A5D3A]">Longevity</p>
                <p className="font-['Inter'] text-sm text-[#F5F1E8]/70">6&ndash;12 months</p>
              </div>
              <div>
                <p className="font-['IBM_Plex_Mono'] text-[10px] tracking-wider uppercase text-[#4A5D3A]">Sessions</p>
                <p className="font-['Inter'] text-sm text-[#F5F1E8]/70">2&ndash;4 sessions</p>
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
            className="mb-10 inline-flex items-center gap-2 font-['Inter'] text-sm text-[#F5F1E8]/40 transition-colors hover:text-[#B8935A]"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
            Back to Treatments
          </Link>
        </motion.div>

        {/* 1. What is Exosome Therapy? */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <Section title="What is Exosome Therapy?">
            <div className="rounded-2xl border border-[#F5F1E8]/[0.06] bg-white/[0.02] px-6 py-5">
              <p className="font-['Inter'] text-base leading-relaxed text-[#F5F1E8]/60">
                {treatment.longDescription}
              </p>
            </div>
            <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { label: "Cell-Free", text: "Regenerative benefits of stem cells without using the cells themselves" },
                { label: "Messenger Vesicles", text: "Exosomes carry growth factors and genetic material to cells" },
                { label: "Versatile", text: "Treats skin, hair, and post-procedure recovery" },
                { label: "Natural Results", text: "Powerful regeneration with minimal downtime" },
              ].map(s => (
                <div key={s.label} className="rounded-xl border border-[#B8935A]/10 bg-[#B8935A]/5 px-4 py-3">
                  <p className="font-['IBM_Plex_Mono'] text-[10px] tracking-wider uppercase text-[#4A5D3A]">{s.label}</p>
                  <p className="mt-1 font-['Inter'] text-sm text-[#F5F1E8]/70">{s.text}</p>
                </div>
              ))}
            </div>
          </Section>
        </motion.div>

        {/* 2. How It Works */}
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-14">
          <Section title="How It Works">
            <div className="rounded-2xl border border-[#F5F1E8]/[0.06] bg-white/[0.02] px-6 py-5">
              <p className="font-['Inter'] text-sm leading-relaxed text-[#F5F1E8]/60">{treatment.howItWorks}</p>
            </div>
            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { step: "01", text: "Purified exosomes are prepared from ethically sourced stem cells" },
                { step: "02", text: "Micro-channels are created with microneedling or fractional laser" },
                { step: "03", text: "Exosomes penetrate deep to communicate with skin and hair cells" },
                { step: "04", text: "Cellular repair, collagen, and follicle activation occur over weeks" },
              ].map(s => (
                <div key={s.step} className="rounded-xl border border-[#F5F1E8]/[0.06] bg-white/[0.02] px-4 py-4">
                  <span className="font-['IBM_Plex_Mono'] text-xs text-[#4A5D3A]">{s.step}</span>
                  <p className="mt-1 font-['Inter'] text-sm text-[#F5F1E8]/70">{s.text}</p>
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
                <div key={i} className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-[#F5F1E8]/[0.06]">
                  <img
                    src={src}
                    alt={`Exosome Therapy gallery ${i + 1}`}
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
                  <div key={fi} className="overflow-hidden rounded-2xl border border-[#F5F1E8]/[0.06] transition-all duration-300 hover:border-[#B8935A]/20">
                    <button
                      onClick={() => setOpenFaq(openFaq === `q-${fi}` ? null : `q-${fi}`)}
                      className="flex w-full items-center justify-between px-6 py-4 text-left"
                      style={{ background: "rgba(255,255,255,0.03)" }}
                    >
                      <span className="flex-1 pr-4 font-['Inter'] text-sm font-medium text-[#F5F1E8]/80">{item.question}</span>
                      <svg
                        className={`h-4 w-4 shrink-0 text-[#F5F1E8]/40 transition-transform duration-300 ${openFaq === `q-${fi}` ? "rotate-180" : ""}`}
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
                          <div className="border-t border-[#F5F1E8]/[0.06] px-6 py-4">
                            <p className="font-['Inter'] text-sm leading-relaxed text-[#F5F1E8]/50">{item.answer}</p>
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
          <p className="font-['Inter'] text-xs text-[#F5F1E8]/30 leading-relaxed max-w-lg mb-6">
            Results and experience may vary. Exosome therapy should only be performed by a qualified medical professional after consultation. Regulatory approval and available indications may vary by region.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-[#B8935A] px-6 py-3 font-['Inter'] text-sm font-semibold text-[#0F0F0E] transition-all duration-300 hover:bg-[#C9A46B] hover:shadow-lg hover:shadow-[#B8935A]/25"
            >
              Book Consultation
            </Link>
            <Link
              href="/partners"
              className="inline-flex items-center gap-2 rounded-xl border border-[#F5F1E8]/10 bg-[#F5F1E8]/5 px-6 py-3 font-['Inter'] text-sm font-semibold text-[#F5F1E8] transition-all duration-300 hover:border-[#B8935A]/40 hover:text-[#B8935A]"
            >
              Find a Clinic
            </Link>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
