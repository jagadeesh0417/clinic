"use client";

import { motion } from "framer-motion";
import { treatments } from "@/data/treatments";
import Link from "next/link";

const sculptra = treatments.find(t => t.slug === "sculptra");
const breastLift = treatments.find(t => t.slug === "non-surgical-breast-lift");

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function TreatmentsPage() {
  return (
    <div className="min-h-screen bg-[#0F0F0E]">
      <div className="mx-auto max-w-7xl px-4 pt-32 pb-24 sm:px-6 lg:px-8">

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="inline-block font-['IBM_Plex_Mono'] text-xs tracking-[0.25em] uppercase text-[#B8935A]">
            Aesthetic Excellence
          </span>
          <h1 className="mt-4 font-['Fraunces'] text-4xl font-bold text-[#F5F1E8] md:text-5xl lg:text-6xl">
            Our <span className="text-[#B8935A]">Treatments</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl font-['Inter'] text-base leading-relaxed text-[#F5F1E8]/50">
            Comprehensive aesthetic and wellness treatments delivered by world-class practitioners
          </p>
        </motion.div>

        {/* Category Section: Injectables / Biostimulators */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <div className="mb-8 flex items-center gap-4">
            <div className="h-px flex-1 bg-[#B8935A]/20" />
            <span className="font-['IBM_Plex_Mono'] text-[11px] tracking-[0.25em] uppercase text-[#4A5D3A]">
              Injectables / Biostimulators
            </span>
            <div className="h-px flex-1 bg-[#B8935A]/20" />
          </div>

          {sculptra && (
            <Link
              href={`/treatments/${sculptra.slug}`}
              className="group relative block overflow-hidden rounded-3xl border border-[#F5F1E8]/[0.06] transition-all duration-500 hover:border-[#B8935A]/30"
              style={{ background: "rgba(255,255,255,0.03)" }}
            >
              <div className="p-6 md:p-8">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="flex-1">
                    <span className="inline-block rounded-full border border-[#B8935A]/20 bg-[#B8935A]/10 px-3 py-1 font-['IBM_Plex_Mono'] text-[10px] tracking-wider uppercase text-[#B8935A]">
                      {sculptra.category}
                    </span>
                    <h2 className="mt-3 font-['Fraunces'] text-2xl font-bold text-[#F5F1E8] md:text-3xl">
                      {sculptra.name}
                    </h2>
                    <p className="mt-2 max-w-2xl font-['Inter'] text-sm leading-relaxed text-[#F5F1E8]/50">
                      {sculptra.description}
                    </p>
                  </div>
                  <div className="flex shrink-0 flex-wrap gap-3">
                    <span className="inline-flex items-center gap-2 rounded-xl border border-[#F5F1E8]/10 bg-[#F5F1E8]/5 px-5 py-2.5 font-['Inter'] text-sm font-semibold text-[#F5F1E8] transition-all duration-300 group-hover:border-[#B8935A]/40 group-hover:text-[#B8935A]">
                      View Treatment
                    </span>
                    <span className="inline-flex items-center gap-2 rounded-xl bg-[#B8935A] px-5 py-2.5 font-['Inter'] text-sm font-semibold text-[#0F0F0E] transition-all duration-300 group-hover:shadow-lg group-hover:shadow-[#B8935A]/25">
                      Book Consultation
                    </span>
                  </div>
                </div>

                {/* Image grid */}
                <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
                  {sculptra.images.map((src, i) => (
                    <div
                      key={i}
                      className="group/img relative aspect-[4/3] overflow-hidden rounded-xl border border-[#F5F1E8]/[0.06] transition-all duration-500 hover:border-[#B8935A]/30 hover:shadow-lg hover:shadow-[#B8935A]/5"
                    >
                      <img
                        src={src}
                        alt={`${sculptra.name} - Image ${i + 1}`}
                        loading="lazy"
                        className="h-full w-full object-cover transition-all duration-700 group-hover/img:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0E]/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover/img:opacity-100" />
                    </div>
                  ))}
                </div>
              </div>

              <div
                className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                style={{
                  background: "radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(184,147,90,0.03), transparent 40%)"
                }}
              />
            </Link>
          )}
        </motion.div>

        {/* Category Section: Body — Non-Surgical Contouring */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-16">
          <div className="mb-8 flex items-center gap-4">
            <div className="h-px flex-1 bg-[#B8935A]/20" />
            <span className="font-['IBM_Plex_Mono'] text-[11px] tracking-[0.25em] uppercase text-[#4A5D3A]">
              Body &mdash; Non-Surgical Contouring
            </span>
            <div className="h-px flex-1 bg-[#B8935A]/20" />
          </div>

          {breastLift && (
            <Link
              href={`/treatments/${breastLift.slug}`}
              className="group relative block overflow-hidden rounded-3xl border border-[#F5F1E8]/[0.06] transition-all duration-500 hover:border-[#B8935A]/30"
              style={{ background: "rgba(255,255,255,0.03)" }}
            >
              <div className="p-6 md:p-8">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="flex-1">
                    <span className="inline-block rounded-full border border-[#B8935A]/20 bg-[#B8935A]/10 px-3 py-1 font-['IBM_Plex_Mono'] text-[10px] tracking-wider uppercase text-[#B8935A]">
                      {breastLift.category}
                    </span>
                    <h2 className="mt-3 font-['Fraunces'] text-2xl font-bold text-[#F5F1E8] md:text-3xl">
                      {breastLift.name}
                    </h2>
                    <p className="mt-2 max-w-2xl font-['Inter'] text-sm leading-relaxed text-[#F5F1E8]/50">
                      {breastLift.description}
                    </p>
                  </div>
                  <div className="flex shrink-0 flex-wrap gap-3">
                    <span className="inline-flex items-center gap-2 rounded-xl border border-[#F5F1E8]/10 bg-[#F5F1E8]/5 px-5 py-2.5 font-['Inter'] text-sm font-semibold text-[#F5F1E8] transition-all duration-300 group-hover:border-[#B8935A]/40 group-hover:text-[#B8935A]">
                      View Treatment
                    </span>
                    <span className="inline-flex items-center gap-2 rounded-xl bg-[#B8935A] px-5 py-2.5 font-['Inter'] text-sm font-semibold text-[#0F0F0E] transition-all duration-300 group-hover:shadow-lg group-hover:shadow-[#B8935A]/25">
                      Book Consultation
                    </span>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
                  {breastLift.images.map((src, i) => (
                    <div
                      key={i}
                      className="group/img relative aspect-[4/3] overflow-hidden rounded-xl border border-[#F5F1E8]/[0.06] transition-all duration-500 hover:border-[#B8935A]/30 hover:shadow-lg hover:shadow-[#B8935A]/5"
                    >
                      <img
                        src={src}
                        alt={`${breastLift.name} - Image ${i + 1}`}
                        loading="lazy"
                        className="h-full w-full object-cover transition-all duration-700 group-hover/img:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0E]/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover/img:opacity-100" />
                    </div>
                  ))}
                </div>
              </div>

              <div
                className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                style={{
                  background: "radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(184,147,90,0.03), transparent 40%)"
                }}
              />
            </Link>
          )}
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <p className="font-['Inter'] text-xs text-[#F5F1E8]/30 leading-relaxed max-w-lg mx-auto mb-6">
            Results and experience may vary. Consult Dr. Vikas Singh to determine suitability.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-xl bg-[#B8935A] px-6 py-3 font-['Inter'] text-sm font-semibold text-[#0F0F0E] transition-all duration-300 hover:bg-[#C9A46B] hover:shadow-lg hover:shadow-[#B8935A]/25"
          >
            Book a Consultation
          </Link>
        </motion.div>

      </div>
    </div>
  );
}
