"use client";

import { motion } from "framer-motion";
import { treatments } from "@/data/treatments";
import Link from "next/link";

const sculptra = treatments.find(t => t.slug === "sculptra");
const profhilo = treatments.find(t => t.slug === "profhilo");
const liquidFaceLift = treatments.find(t => t.slug === "liquid-face-lift");
const nonSurgicalFaceLift = treatments.find(t => t.slug === "non-surgical-face-lift");
const skinBoosters = treatments.find(t => t.slug === "skin-boosters");
const microBioFue = treatments.find(t => t.slug === "micro-bio-fue-hair-transplant");
const stemCellTherapy = treatments.find(t => t.slug === "stem-cell-therapy");
const exosomeTherapy = treatments.find(t => t.slug === "exosome-therapy");
const breastLift = treatments.find(t => t.slug === "non-surgical-breast-lift");
const breastAugmentationSculptra = treatments.find(t => t.slug === "breast-augmentation-sculptra");
const tummyTuck = treatments.find(t => t.slug === "non-surgical-tummy-tuck");

const rhinoplasty = treatments.find(t => t.slug === "rhinoplasty");
const faceliftSurgical = treatments.find(t => t.slug === "facelift-surgical");
const blepharoplasty = treatments.find(t => t.slug === "blepharoplasty");
const browLift = treatments.find(t => t.slug === "brow-lift");
const neckLift = treatments.find(t => t.slug === "neck-lift");
const otoplasty = treatments.find(t => t.slug === "otoplasty");
const chinAugmentation = treatments.find(t => t.slug === "chin-augmentation");
const liposuction = treatments.find(t => t.slug === "liposuction");
const tummyTuckSurgical = treatments.find(t => t.slug === "tummy-tuck");
const gynecomastiaSurgery = treatments.find(t => t.slug === "gynecomastia-surgery");
const brazilianButtLift = treatments.find(t => t.slug === "brazilian-butt-lift");
const breastAugImplants = treatments.find(t => t.slug === "breast-augmentation-implants");
const breastLiftSurgical = treatments.find(t => t.slug === "breast-lift");
const breastReduction = treatments.find(t => t.slug === "breast-reduction");
const mommyMakeover = treatments.find(t => t.slug === "mommy-makeover");

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function TreatmentsPage() {
  return (
    <div className="min-h-screen bg-[#100D0A]">
      <div className="mx-auto max-w-7xl px-4 pt-32 pb-24 sm:px-6 lg:px-8">

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="inline-block font-sans text-xs tracking-[0.25em] uppercase text-[#C9A14A]">
            Aesthetic Excellence
          </span>
          <h1 className="mt-4 font-display text-4xl font-bold text-[#F6F1E8] md:text-5xl lg:text-6xl">
            Our <span className="text-[#C9A14A]">Treatments</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl font-sans text-base leading-relaxed text-[#F6F1E8]/50">
            Comprehensive aesthetic and wellness treatments delivered by world-class practitioners
          </p>
        </motion.div>

        {/* Category Section: Injectables / Biostimulators */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <div className="mb-8 flex items-center gap-4">
            <div className="h-px flex-1 bg-[#C9A14A]/20" />
            <span className="font-sans text-[11px] tracking-[0.25em] uppercase text-[#A67C2E]">
              Injectables / Biostimulators
            </span>
            <div className="h-px flex-1 bg-[#C9A14A]/20" />
          </div>

          {sculptra && (
            <Link
              href={`/treatments/${sculptra.slug}`}
              className="group relative block overflow-hidden rounded-3xl border border-[#F6F1E8]/[0.06] transition-all duration-500 hover:border-[#C9A14A]/30"
              style={{ background: "rgba(246,241,232,0.03)" }}
            >
              <div className="p-6 md:p-8">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="flex-1">
                    <span className="inline-block rounded-full border border-[#C9A14A]/20 bg-[#C9A14A]/10 px-3 py-1 font-sans text-[10px] tracking-wider uppercase text-[#C9A14A]">
                      {sculptra.category}
                    </span>
                    <h2 className="mt-3 font-display text-2xl font-bold text-[#F6F1E8] md:text-3xl">
                      {sculptra.name}
                    </h2>
                    <p className="mt-2 max-w-2xl font-sans text-sm leading-relaxed text-[#F6F1E8]/50">
                      {sculptra.description}
                    </p>
                  </div>
                  <div className="flex shrink-0 flex-wrap gap-3">
                    <span className="inline-flex items-center gap-2 rounded-xl border border-[#F6F1E8]/10 bg-[#F6F1E8]/5 px-5 py-2.5 font-sans text-sm font-semibold text-[#F6F1E8] transition-all duration-300 group-hover:border-[#C9A14A]/40 group-hover:text-[#C9A14A]">
                      View Treatment
                    </span>
                    <span className="inline-flex items-center gap-2 rounded-xl bg-[#C9A14A] px-5 py-2.5 font-sans text-sm font-semibold text-[#100D0A] transition-all duration-300 group-hover:shadow-lg group-hover:shadow-[#C9A14A]/25">
                      Book Consultation
                    </span>
                  </div>
                </div>

                {/* Image grid */}
                <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
                  {sculptra.images.map((src, i) => (
                    <div
                      key={i}
                      className="group/img relative aspect-[4/3] overflow-hidden rounded-xl border border-[#F6F1E8]/[0.06] transition-all duration-500 hover:border-[#C9A14A]/30 hover:shadow-lg hover:shadow-[#C9A14A]/5"
                    >
                      <img
                        src={src}
                        alt={`${sculptra.name} - Image ${i + 1}`}
                        loading="lazy"
                        className="h-full w-full object-cover transition-all duration-700 group-hover/img:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#100D0A]/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover/img:opacity-100" />
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

        {/* Category Section: Injectables — Bio-Remodelling */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-16">
          <div className="mb-8 flex items-center gap-4">
            <div className="h-px flex-1 bg-[#C9A14A]/20" />
            <span className="font-sans text-[11px] tracking-[0.25em] uppercase text-[#A67C2E]">
              Injectables &mdash; Bio-Remodelling
            </span>
            <div className="h-px flex-1 bg-[#C9A14A]/20" />
          </div>

          {profhilo && (
            <Link
              href={`/treatments/${profhilo.slug}`}
              className="group relative block overflow-hidden rounded-3xl border border-[#F6F1E8]/[0.06] transition-all duration-500 hover:border-[#C9A14A]/30"
              style={{ background: "rgba(246,241,232,0.03)" }}
            >
              <div className="p-6 md:p-8">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="flex-1">
                    <span className="inline-block rounded-full border border-[#C9A14A]/20 bg-[#C9A14A]/10 px-3 py-1 font-sans text-[10px] tracking-wider uppercase text-[#C9A14A]">
                      {profhilo.category}
                    </span>
                    <h2 className="mt-3 font-display text-2xl font-bold text-[#F6F1E8] md:text-3xl">
                      {profhilo.name}
                    </h2>
                    <p className="mt-2 max-w-2xl font-sans text-sm leading-relaxed text-[#F6F1E8]/50">
                      {profhilo.description}
                    </p>
                  </div>
                  <div className="flex shrink-0 flex-wrap gap-3">
                    <span className="inline-flex items-center gap-2 rounded-xl border border-[#F6F1E8]/10 bg-[#F6F1E8]/5 px-5 py-2.5 font-sans text-sm font-semibold text-[#F6F1E8] transition-all duration-300 group-hover:border-[#C9A14A]/40 group-hover:text-[#C9A14A]">
                      View Treatment
                    </span>
                    <span className="inline-flex items-center gap-2 rounded-xl bg-[#C9A14A] px-5 py-2.5 font-sans text-sm font-semibold text-[#100D0A] transition-all duration-300 group-hover:shadow-lg group-hover:shadow-[#C9A14A]/25">
                      Book Consultation
                    </span>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
                  {profhilo.images.map((src, i) => (
                    <div
                      key={i}
                      className="group/img relative aspect-[4/3] overflow-hidden rounded-xl border border-[#F6F1E8]/[0.06] transition-all duration-500 hover:border-[#C9A14A]/30 hover:shadow-lg hover:shadow-[#C9A14A]/5"
                    >
                      <img
                        src={src}
                        alt={`${profhilo.name} - Image ${i + 1}`}
                        loading="lazy"
                        className="h-full w-full object-cover transition-all duration-700 group-hover/img:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#100D0A]/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover/img:opacity-100" />
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

        {/* Category Section: Injectables — Facial Rejuvenation */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-16">
          <div className="mb-8 flex items-center gap-4">
            <div className="h-px flex-1 bg-[#C9A14A]/20" />
            <span className="font-sans text-[11px] tracking-[0.25em] uppercase text-[#A67C2E]">
              Injectables &mdash; Facial Rejuvenation
            </span>
            <div className="h-px flex-1 bg-[#C9A14A]/20" />
          </div>

          {liquidFaceLift && (
            <Link
              href={`/treatments/${liquidFaceLift.slug}`}
              className="group relative block overflow-hidden rounded-3xl border border-[#F6F1E8]/[0.06] transition-all duration-500 hover:border-[#C9A14A]/30"
              style={{ background: "rgba(246,241,232,0.03)" }}
            >
              <div className="p-6 md:p-8">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="flex-1">
                    <span className="inline-block rounded-full border border-[#C9A14A]/20 bg-[#C9A14A]/10 px-3 py-1 font-sans text-[10px] tracking-wider uppercase text-[#C9A14A]">
                      {liquidFaceLift.category}
                    </span>
                    <h2 className="mt-3 font-display text-2xl font-bold text-[#F6F1E8] md:text-3xl">
                      {liquidFaceLift.name}
                    </h2>
                    <p className="mt-2 max-w-2xl font-sans text-sm leading-relaxed text-[#F6F1E8]/50">
                      {liquidFaceLift.description}
                    </p>
                  </div>
                  <div className="flex shrink-0 flex-wrap gap-3">
                    <span className="inline-flex items-center gap-2 rounded-xl border border-[#F6F1E8]/10 bg-[#F6F1E8]/5 px-5 py-2.5 font-sans text-sm font-semibold text-[#F6F1E8] transition-all duration-300 group-hover:border-[#C9A14A]/40 group-hover:text-[#C9A14A]">
                      View Treatment
                    </span>
                    <span className="inline-flex items-center gap-2 rounded-xl bg-[#C9A14A] px-5 py-2.5 font-sans text-sm font-semibold text-[#100D0A] transition-all duration-300 group-hover:shadow-lg group-hover:shadow-[#C9A14A]/25">
                      Book Consultation
                    </span>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
                  {liquidFaceLift.images.map((src, i) => (
                    <div
                      key={i}
                      className="group/img relative aspect-[4/3] overflow-hidden rounded-xl border border-[#F6F1E8]/[0.06] transition-all duration-500 hover:border-[#C9A14A]/30 hover:shadow-lg hover:shadow-[#C9A14A]/5"
                    >
                      <img
                        src={src}
                        alt={`${liquidFaceLift.name} - Image ${i + 1}`}
                        loading="lazy"
                        className="h-full w-full object-cover transition-all duration-700 group-hover/img:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#100D0A]/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover/img:opacity-100" />
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

        {/* Category Section: Injectables — Skin Quality */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-16">
          <div className="mb-8 flex items-center gap-4">
            <div className="h-px flex-1 bg-[#C9A14A]/20" />
            <span className="font-sans text-[11px] tracking-[0.25em] uppercase text-[#A67C2E]">
              Injectables &mdash; Skin Quality
            </span>
            <div className="h-px flex-1 bg-[#C9A14A]/20" />
          </div>

          {skinBoosters && (
            <Link
              href={`/treatments/${skinBoosters.slug}`}
              className="group relative block overflow-hidden rounded-3xl border border-[#F6F1E8]/[0.06] transition-all duration-500 hover:border-[#C9A14A]/30"
              style={{ background: "rgba(246,241,232,0.03)" }}
            >
              <div className="p-6 md:p-8">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="flex-1">
                    <span className="inline-block rounded-full border border-[#C9A14A]/20 bg-[#C9A14A]/10 px-3 py-1 font-sans text-[10px] tracking-wider uppercase text-[#C9A14A]">
                      {skinBoosters.category}
                    </span>
                    <h2 className="mt-3 font-display text-2xl font-bold text-[#F6F1E8] md:text-3xl">
                      {skinBoosters.name}
                    </h2>
                    <p className="mt-2 max-w-2xl font-sans text-sm leading-relaxed text-[#F6F1E8]/50">
                      {skinBoosters.description}
                    </p>
                  </div>
                  <div className="flex shrink-0 flex-wrap gap-3">
                    <span className="inline-flex items-center gap-2 rounded-xl border border-[#F6F1E8]/10 bg-[#F6F1E8]/5 px-5 py-2.5 font-sans text-sm font-semibold text-[#F6F1E8] transition-all duration-300 group-hover:border-[#C9A14A]/40 group-hover:text-[#C9A14A]">
                      View Treatment
                    </span>
                    <span className="inline-flex items-center gap-2 rounded-xl bg-[#C9A14A] px-5 py-2.5 font-sans text-sm font-semibold text-[#100D0A] transition-all duration-300 group-hover:shadow-lg group-hover:shadow-[#C9A14A]/25">
                      Book Consultation
                    </span>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
                  {skinBoosters.images.map((src, i) => (
                    <div
                      key={i}
                      className="group/img relative aspect-[4/3] overflow-hidden rounded-xl border border-[#F6F1E8]/[0.06] transition-all duration-500 hover:border-[#C9A14A]/30 hover:shadow-lg hover:shadow-[#C9A14A]/5"
                    >
                      <img
                        src={src}
                        alt={`${skinBoosters.name} - Image ${i + 1}`}
                        loading="lazy"
                        className="h-full w-full object-cover transition-all duration-700 group-hover/img:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#100D0A]/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover/img:opacity-100" />
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

        {/* Category Section: Facial Rejuvenation — Energy-Based */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-16">
          <div className="mb-8 flex items-center gap-4">
            <div className="h-px flex-1 bg-[#C9A14A]/20" />
            <span className="font-sans text-[11px] tracking-[0.25em] uppercase text-[#A67C2E]">
              Facial Rejuvenation &mdash; Energy-Based
            </span>
            <div className="h-px flex-1 bg-[#C9A14A]/20" />
          </div>

          {nonSurgicalFaceLift && (
            <Link
              href={`/treatments/${nonSurgicalFaceLift.slug}`}
              className="group relative block overflow-hidden rounded-3xl border border-[#F6F1E8]/[0.06] transition-all duration-500 hover:border-[#C9A14A]/30"
              style={{ background: "rgba(246,241,232,0.03)" }}
            >
              <div className="p-6 md:p-8">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="flex-1">
                    <span className="inline-block rounded-full border border-[#C9A14A]/20 bg-[#C9A14A]/10 px-3 py-1 font-sans text-[10px] tracking-wider uppercase text-[#C9A14A]">
                      {nonSurgicalFaceLift.category}
                    </span>
                    <h2 className="mt-3 font-display text-2xl font-bold text-[#F6F1E8] md:text-3xl">
                      {nonSurgicalFaceLift.name}
                    </h2>
                    <p className="mt-2 max-w-2xl font-sans text-sm leading-relaxed text-[#F6F1E8]/50">
                      {nonSurgicalFaceLift.description}
                    </p>
                  </div>
                  <div className="flex shrink-0 flex-wrap gap-3">
                    <span className="inline-flex items-center gap-2 rounded-xl border border-[#F6F1E8]/10 bg-[#F6F1E8]/5 px-5 py-2.5 font-sans text-sm font-semibold text-[#F6F1E8] transition-all duration-300 group-hover:border-[#C9A14A]/40 group-hover:text-[#C9A14A]">
                      View Treatment
                    </span>
                    <span className="inline-flex items-center gap-2 rounded-xl bg-[#C9A14A] px-5 py-2.5 font-sans text-sm font-semibold text-[#100D0A] transition-all duration-300 group-hover:shadow-lg group-hover:shadow-[#C9A14A]/25">
                      Book Consultation
                    </span>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
                  {nonSurgicalFaceLift.images.map((src, i) => (
                    <div
                      key={i}
                      className="group/img relative aspect-[4/3] overflow-hidden rounded-xl border border-[#F6F1E8]/[0.06] transition-all duration-500 hover:border-[#C9A14A]/30 hover:shadow-lg hover:shadow-[#C9A14A]/5"
                    >
                      <img
                        src={src}
                        alt={`${nonSurgicalFaceLift.name} - Image ${i + 1}`}
                        loading="lazy"
                        className="h-full w-full object-cover transition-all duration-700 group-hover/img:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#100D0A]/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover/img:opacity-100" />
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

        {/* Category Section: Hair Restoration — Surgical */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-16">
          <div className="mb-8 flex items-center gap-4">
            <div className="h-px flex-1 bg-[#C9A14A]/20" />
            <span className="font-sans text-[11px] tracking-[0.25em] uppercase text-[#A67C2E]">
              Hair Restoration &mdash; Surgical
            </span>
            <div className="h-px flex-1 bg-[#C9A14A]/20" />
          </div>

          {microBioFue && (
            <Link
              href={`/treatments/${microBioFue.slug}`}
              className="group relative block overflow-hidden rounded-3xl border border-[#F6F1E8]/[0.06] transition-all duration-500 hover:border-[#C9A14A]/30"
              style={{ background: "rgba(246,241,232,0.03)" }}
            >
              <div className="p-6 md:p-8">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="flex-1">
                    <span className="inline-block rounded-full border border-[#C9A14A]/20 bg-[#C9A14A]/10 px-3 py-1 font-sans text-[10px] tracking-wider uppercase text-[#C9A14A]">
                      {microBioFue.category}
                    </span>
                    <h2 className="mt-3 font-display text-2xl font-bold text-[#F6F1E8] md:text-3xl">
                      {microBioFue.name}
                    </h2>
                    <p className="mt-2 max-w-2xl font-sans text-sm leading-relaxed text-[#F6F1E8]/50">
                      {microBioFue.description}
                    </p>
                  </div>
                  <div className="flex shrink-0 flex-wrap gap-3">
                    <span className="inline-flex items-center gap-2 rounded-xl border border-[#F6F1E8]/10 bg-[#F6F1E8]/5 px-5 py-2.5 font-sans text-sm font-semibold text-[#F6F1E8] transition-all duration-300 group-hover:border-[#C9A14A]/40 group-hover:text-[#C9A14A]">
                      View Treatment
                    </span>
                    <span className="inline-flex items-center gap-2 rounded-xl bg-[#C9A14A] px-5 py-2.5 font-sans text-sm font-semibold text-[#100D0A] transition-all duration-300 group-hover:shadow-lg group-hover:shadow-[#C9A14A]/25">
                      Book Consultation
                    </span>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
                  {microBioFue.images.map((src, i) => (
                    <div
                      key={i}
                      className="group/img relative aspect-[4/3] overflow-hidden rounded-xl border border-[#F6F1E8]/[0.06] transition-all duration-500 hover:border-[#C9A14A]/30 hover:shadow-lg hover:shadow-[#C9A14A]/5"
                    >
                      <img
                        src={src}
                        alt={`${microBioFue.name} - Image ${i + 1}`}
                        loading="lazy"
                        className="h-full w-full object-cover transition-all duration-700 group-hover/img:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#100D0A]/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover/img:opacity-100" />
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

        {/* Category Section: Regenerative Medicine */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-16">
          <div className="mb-8 flex items-center gap-4">
            <div className="h-px flex-1 bg-[#C9A14A]/20" />
            <span className="font-sans text-[11px] tracking-[0.25em] uppercase text-[#A67C2E]">
              Regenerative Medicine
            </span>
            <div className="h-px flex-1 bg-[#C9A14A]/20" />
          </div>

          {stemCellTherapy && (
            <Link
              href={`/treatments/${stemCellTherapy.slug}`}
              className="group relative block overflow-hidden rounded-3xl border border-[#F6F1E8]/[0.06] transition-all duration-500 hover:border-[#C9A14A]/30"
              style={{ background: "rgba(246,241,232,0.03)" }}
            >
              <div className="p-6 md:p-8">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="flex-1">
                    <span className="inline-block rounded-full border border-[#C9A14A]/20 bg-[#C9A14A]/10 px-3 py-1 font-sans text-[10px] tracking-wider uppercase text-[#C9A14A]">
                      {stemCellTherapy.category}
                    </span>
                    <h2 className="mt-3 font-display text-2xl font-bold text-[#F6F1E8] md:text-3xl">
                      {stemCellTherapy.name}
                    </h2>
                    <p className="mt-2 max-w-2xl font-sans text-sm leading-relaxed text-[#F6F1E8]/50">
                      {stemCellTherapy.description}
                    </p>
                  </div>
                  <div className="flex shrink-0 flex-wrap gap-3">
                    <span className="inline-flex items-center gap-2 rounded-xl border border-[#F6F1E8]/10 bg-[#F6F1E8]/5 px-5 py-2.5 font-sans text-sm font-semibold text-[#F6F1E8] transition-all duration-300 group-hover:border-[#C9A14A]/40 group-hover:text-[#C9A14A]">
                      View Treatment
                    </span>
                    <span className="inline-flex items-center gap-2 rounded-xl bg-[#C9A14A] px-5 py-2.5 font-sans text-sm font-semibold text-[#100D0A] transition-all duration-300 group-hover:shadow-lg group-hover:shadow-[#C9A14A]/25">
                      Book Consultation
                    </span>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
                  {stemCellTherapy.images.map((src, i) => (
                    <div
                      key={i}
                      className="group/img relative aspect-[4/3] overflow-hidden rounded-xl border border-[#F6F1E8]/[0.06] transition-all duration-500 hover:border-[#C9A14A]/30 hover:shadow-lg hover:shadow-[#C9A14A]/5"
                    >
                      <img
                        src={src}
                        alt={`${stemCellTherapy.name} - Image ${i + 1}`}
                        loading="lazy"
                        className="h-full w-full object-cover transition-all duration-700 group-hover/img:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#100D0A]/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover/img:opacity-100" />
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

          {exosomeTherapy && (
            <Link
              href={`/treatments/${exosomeTherapy.slug}`}
              className="group relative mt-6 block overflow-hidden rounded-3xl border border-[#F6F1E8]/[0.06] transition-all duration-500 hover:border-[#C9A14A]/30"
              style={{ background: "rgba(246,241,232,0.03)" }}
            >
              <div className="p-6 md:p-8">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="flex-1">
                    <span className="inline-block rounded-full border border-[#C9A14A]/20 bg-[#C9A14A]/10 px-3 py-1 font-sans text-[10px] tracking-wider uppercase text-[#C9A14A]">
                      {exosomeTherapy.category}
                    </span>
                    <h2 className="mt-3 font-display text-2xl font-bold text-[#F6F1E8] md:text-3xl">
                      {exosomeTherapy.name}
                    </h2>
                    <p className="mt-2 max-w-2xl font-sans text-sm leading-relaxed text-[#F6F1E8]/50">
                      {exosomeTherapy.description}
                    </p>
                  </div>
                  <div className="flex shrink-0 flex-wrap gap-3">
                    <span className="inline-flex items-center gap-2 rounded-xl border border-[#F6F1E8]/10 bg-[#F6F1E8]/5 px-5 py-2.5 font-sans text-sm font-semibold text-[#F6F1E8] transition-all duration-300 group-hover:border-[#C9A14A]/40 group-hover:text-[#C9A14A]">
                      View Treatment
                    </span>
                    <span className="inline-flex items-center gap-2 rounded-xl bg-[#C9A14A] px-5 py-2.5 font-sans text-sm font-semibold text-[#100D0A] transition-all duration-300 group-hover:shadow-lg group-hover:shadow-[#C9A14A]/25">
                      Book Consultation
                    </span>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
                  {exosomeTherapy.images.map((src, i) => (
                    <div
                      key={i}
                      className="group/img relative aspect-[4/3] overflow-hidden rounded-xl border border-[#F6F1E8]/[0.06] transition-all duration-500 hover:border-[#C9A14A]/30 hover:shadow-lg hover:shadow-[#C9A14A]/5"
                    >
                      <img
                        src={src}
                        alt={`${exosomeTherapy.name} - Image ${i + 1}`}
                        loading="lazy"
                        className="h-full w-full object-cover transition-all duration-700 group-hover/img:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#100D0A]/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover/img:opacity-100" />
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
            <div className="h-px flex-1 bg-[#C9A14A]/20" />
            <span className="font-sans text-[11px] tracking-[0.25em] uppercase text-[#A67C2E]">
              Body &mdash; Non-Surgical Contouring
            </span>
            <div className="h-px flex-1 bg-[#C9A14A]/20" />
          </div>

          {breastLift && (
            <Link
              href={`/treatments/${breastLift.slug}`}
              className="group relative block overflow-hidden rounded-3xl border border-[#F6F1E8]/[0.06] transition-all duration-500 hover:border-[#C9A14A]/30"
              style={{ background: "rgba(246,241,232,0.03)" }}
            >
              <div className="p-6 md:p-8">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="flex-1">
                    <span className="inline-block rounded-full border border-[#C9A14A]/20 bg-[#C9A14A]/10 px-3 py-1 font-sans text-[10px] tracking-wider uppercase text-[#C9A14A]">
                      {breastLift.category}
                    </span>
                    <h2 className="mt-3 font-display text-2xl font-bold text-[#F6F1E8] md:text-3xl">
                      {breastLift.name}
                    </h2>
                    <p className="mt-2 max-w-2xl font-sans text-sm leading-relaxed text-[#F6F1E8]/50">
                      {breastLift.description}
                    </p>
                  </div>
                  <div className="flex shrink-0 flex-wrap gap-3">
                    <span className="inline-flex items-center gap-2 rounded-xl border border-[#F6F1E8]/10 bg-[#F6F1E8]/5 px-5 py-2.5 font-sans text-sm font-semibold text-[#F6F1E8] transition-all duration-300 group-hover:border-[#C9A14A]/40 group-hover:text-[#C9A14A]">
                      View Treatment
                    </span>
                    <span className="inline-flex items-center gap-2 rounded-xl bg-[#C9A14A] px-5 py-2.5 font-sans text-sm font-semibold text-[#100D0A] transition-all duration-300 group-hover:shadow-lg group-hover:shadow-[#C9A14A]/25">
                      Book Consultation
                    </span>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
                  {breastLift.images.map((src, i) => (
                    <div
                      key={i}
                      className="group/img relative aspect-[4/3] overflow-hidden rounded-xl border border-[#F6F1E8]/[0.06] transition-all duration-500 hover:border-[#C9A14A]/30 hover:shadow-lg hover:shadow-[#C9A14A]/5"
                    >
                      <img
                        src={src}
                        alt={`${breastLift.name} - Image ${i + 1}`}
                        loading="lazy"
                        className="h-full w-full object-cover transition-all duration-700 group-hover/img:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#100D0A]/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover/img:opacity-100" />
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

          {breastAugmentationSculptra && (
            <Link
              href={`/treatments/${breastAugmentationSculptra.slug}`}
              className="group relative mt-6 block overflow-hidden rounded-3xl border border-[#F6F1E8]/[0.06] transition-all duration-500 hover:border-[#C9A14A]/30"
              style={{ background: "rgba(246,241,232,0.03)" }}
            >
              <div className="p-6 md:p-8">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="flex-1">
                    <span className="inline-block rounded-full border border-[#C9A14A]/20 bg-[#C9A14A]/10 px-3 py-1 font-sans text-[10px] tracking-wider uppercase text-[#C9A14A]">
                      {breastAugmentationSculptra.category}
                    </span>
                    <h2 className="mt-3 font-display text-2xl font-bold text-[#F6F1E8] md:text-3xl">
                      {breastAugmentationSculptra.name}
                    </h2>
                    <p className="mt-2 max-w-2xl font-sans text-sm leading-relaxed text-[#F6F1E8]/50">
                      {breastAugmentationSculptra.description}
                    </p>
                  </div>
                  <div className="flex shrink-0 flex-wrap gap-3">
                    <span className="inline-flex items-center gap-2 rounded-xl border border-[#F6F1E8]/10 bg-[#F6F1E8]/5 px-5 py-2.5 font-sans text-sm font-semibold text-[#F6F1E8] transition-all duration-300 group-hover:border-[#C9A14A]/40 group-hover:text-[#C9A14A]">
                      View Treatment
                    </span>
                    <span className="inline-flex items-center gap-2 rounded-xl bg-[#C9A14A] px-5 py-2.5 font-sans text-sm font-semibold text-[#100D0A] transition-all duration-300 group-hover:shadow-lg group-hover:shadow-[#C9A14A]/25">
                      Book Consultation
                    </span>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
                  {breastAugmentationSculptra.images.map((src, i) => (
                    <div
                      key={i}
                      className="group/img relative aspect-[4/3] overflow-hidden rounded-xl border border-[#F6F1E8]/[0.06] transition-all duration-500 hover:border-[#C9A14A]/30 hover:shadow-lg hover:shadow-[#C9A14A]/5"
                    >
                      <img
                        src={src}
                        alt={`${breastAugmentationSculptra.name} - Image ${i + 1}`}
                        loading="lazy"
                        className="h-full w-full object-cover transition-all duration-700 group-hover/img:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#100D0A]/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover/img:opacity-100" />
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

        {tummyTuck && (
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-16">
            <div className="mb-8 flex items-center gap-4">
              <div className="h-px flex-1 bg-[#C9A14A]/20" />
              <span className="font-sans text-[11px] tracking-[0.25em] uppercase text-[#A67C2E]">
                Body &mdash; Non-Surgical Contouring
              </span>
              <div className="h-px flex-1 bg-[#C9A14A]/20" />
            </div>

            <Link
              href={`/treatments/${tummyTuck.slug}`}
              className="group relative block overflow-hidden rounded-3xl border border-[#F6F1E8]/[0.06] transition-all duration-500 hover:border-[#C9A14A]/30"
              style={{ background: "rgba(246,241,232,0.03)" }}
            >
              <div className="p-6 md:p-8">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="flex-1">
                    <span className="inline-block rounded-full border border-[#C9A14A]/20 bg-[#C9A14A]/10 px-3 py-1 font-sans text-[10px] tracking-wider uppercase text-[#C9A14A]">
                      {tummyTuck.category}
                    </span>
                    <h2 className="mt-3 font-display text-2xl font-bold text-[#F6F1E8] md:text-3xl">
                      {tummyTuck.name}
                    </h2>
                    <p className="mt-2 max-w-2xl font-sans text-sm leading-relaxed text-[#F6F1E8]/50">
                      {tummyTuck.description}
                    </p>
                  </div>
                  <div className="flex shrink-0 flex-wrap gap-3">
                    <span className="inline-flex items-center gap-2 rounded-xl border border-[#F6F1E8]/10 bg-[#F6F1E8]/5 px-5 py-2.5 font-sans text-sm font-semibold text-[#F6F1E8] transition-all duration-300 group-hover:border-[#C9A14A]/40 group-hover:text-[#C9A14A]">
                      View Treatment
                    </span>
                    <span className="inline-flex items-center gap-2 rounded-xl bg-[#C9A14A] px-5 py-2.5 font-sans text-sm font-semibold text-[#100D0A] transition-all duration-300 group-hover:shadow-lg group-hover:shadow-[#C9A14A]/25">
                      Book Consultation
                    </span>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
                  {tummyTuck.images.map((src, i) => (
                    <div
                      key={i}
                      className="group/img relative aspect-[4/3] overflow-hidden rounded-xl border border-[#F6F1E8]/[0.06] transition-all duration-500 hover:border-[#C9A14A]/30 hover:shadow-lg hover:shadow-[#C9A14A]/5"
                    >
                      <img
                        src={src}
                        alt={`${tummyTuck.name} - Image ${i + 1}`}
                        loading="lazy"
                        className="h-full w-full object-cover transition-all duration-700 group-hover/img:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#100D0A]/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover/img:opacity-100" />
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
          </motion.div>
        )}

        {/* ─── Cosmetic Surgery — Face ─── */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-16">
          <div className="mb-8 flex items-center gap-4">
            <div className="h-px flex-1 bg-[#C9A14A]/20" />
            <span className="font-sans text-[11px] tracking-[0.25em] uppercase text-[#A67C2E]">
              Cosmetic Surgery &mdash; Face
            </span>
            <div className="h-px flex-1 bg-[#C9A14A]/20" />
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[rhinoplasty, faceliftSurgical, blepharoplasty, browLift, neckLift, otoplasty, chinAugmentation].filter(Boolean).map((t) => t && (
              <Link key={t.slug} href={`/treatments/${t.slug}`}
                className="group relative overflow-hidden rounded-2xl border border-[#F6F1E8]/[0.06] p-5 transition-all duration-500 hover:border-[#C9A14A]/30"
                style={{ background: "rgba(246,241,232,0.03)" }}>
                <span className="inline-block rounded-full border border-[#C9A14A]/20 bg-[#C9A14A]/10 px-2.5 py-0.5 font-sans text-[9px] tracking-wider uppercase text-[#C9A14A]">
                  {t.category}
                </span>
                <h3 className="mt-3 font-display text-lg font-bold text-[#F6F1E8] group-hover:text-[#C9A14A] transition-colors">
                  {t.name}
                </h3>
                <p className="mt-2 line-clamp-2 font-sans text-sm leading-relaxed text-[#F6F1E8]/50">
                  {t.description}
                </p>
                <div className="mt-4 flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-lg border border-[#F6F1E8]/10 bg-[#F6F1E8]/5 px-3 py-1.5 font-sans text-xs font-semibold text-[#F6F1E8] transition-all duration-300 group-hover:border-[#C9A14A]/40 group-hover:text-[#C9A14A]">
                    View Treatment
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </motion.div>

        {/* ─── Cosmetic Surgery — Body ─── */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-16">
          <div className="mb-8 flex items-center gap-4">
            <div className="h-px flex-1 bg-[#C9A14A]/20" />
            <span className="font-sans text-[11px] tracking-[0.25em] uppercase text-[#A67C2E]">
              Cosmetic Surgery &mdash; Body
            </span>
            <div className="h-px flex-1 bg-[#C9A14A]/20" />
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[liposuction, tummyTuckSurgical, gynecomastiaSurgery, brazilianButtLift].filter(Boolean).map((t) => t && (
              <Link key={t.slug} href={`/treatments/${t.slug}`}
                className="group relative overflow-hidden rounded-2xl border border-[#F6F1E8]/[0.06] p-5 transition-all duration-500 hover:border-[#C9A14A]/30"
                style={{ background: "rgba(246,241,232,0.03)" }}>
                <span className="inline-block rounded-full border border-[#C9A14A]/20 bg-[#C9A14A]/10 px-2.5 py-0.5 font-sans text-[9px] tracking-wider uppercase text-[#C9A14A]">
                  {t.category}
                </span>
                <h3 className="mt-3 font-display text-lg font-bold text-[#F6F1E8] group-hover:text-[#C9A14A] transition-colors">
                  {t.name}
                </h3>
                <p className="mt-2 line-clamp-2 font-sans text-sm leading-relaxed text-[#F6F1E8]/50">
                  {t.description}
                </p>
                <div className="mt-4 flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-lg border border-[#F6F1E8]/10 bg-[#F6F1E8]/5 px-3 py-1.5 font-sans text-xs font-semibold text-[#F6F1E8] transition-all duration-300 group-hover:border-[#C9A14A]/40 group-hover:text-[#C9A14A]">
                    View Treatment
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </motion.div>

        {/* ─── Cosmetic Surgery — Breast ─── */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-16">
          <div className="mb-8 flex items-center gap-4">
            <div className="h-px flex-1 bg-[#C9A14A]/20" />
            <span className="font-sans text-[11px] tracking-[0.25em] uppercase text-[#A67C2E]">
              Cosmetic Surgery &mdash; Breast
            </span>
            <div className="h-px flex-1 bg-[#C9A14A]/20" />
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[breastAugImplants, breastLiftSurgical, breastReduction].filter(Boolean).map((t) => t && (
              <Link key={t.slug} href={`/treatments/${t.slug}`}
                className="group relative overflow-hidden rounded-2xl border border-[#F6F1E8]/[0.06] p-5 transition-all duration-500 hover:border-[#C9A14A]/30"
                style={{ background: "rgba(246,241,232,0.03)" }}>
                <span className="inline-block rounded-full border border-[#C9A14A]/20 bg-[#C9A14A]/10 px-2.5 py-0.5 font-sans text-[9px] tracking-wider uppercase text-[#C9A14A]">
                  {t.category}
                </span>
                <h3 className="mt-3 font-display text-lg font-bold text-[#F6F1E8] group-hover:text-[#C9A14A] transition-colors">
                  {t.name}
                </h3>
                <p className="mt-2 line-clamp-2 font-sans text-sm leading-relaxed text-[#F6F1E8]/50">
                  {t.description}
                </p>
                <div className="mt-4 flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-lg border border-[#F6F1E8]/10 bg-[#F6F1E8]/5 px-3 py-1.5 font-sans text-xs font-semibold text-[#F6F1E8] transition-all duration-300 group-hover:border-[#C9A14A]/40 group-hover:text-[#C9A14A]">
                    View Treatment
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </motion.div>

        {/* ─── Cosmetic Surgery — Combination ─── */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-16">
          <div className="mb-8 flex items-center gap-4">
            <div className="h-px flex-1 bg-[#C9A14A]/20" />
            <span className="font-sans text-[11px] tracking-[0.25em] uppercase text-[#A67C2E]">
              Cosmetic Surgery &mdash; Combination
            </span>
            <div className="h-px flex-1 bg-[#C9A14A]/20" />
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {mommyMakeover && (
              <Link key={mommyMakeover.slug} href={`/treatments/${mommyMakeover.slug}`}
                className="group relative overflow-hidden rounded-2xl border border-[#F6F1E8]/[0.06] p-5 transition-all duration-500 hover:border-[#C9A14A]/30"
                style={{ background: "rgba(246,241,232,0.03)" }}>
                <span className="inline-block rounded-full border border-[#C9A14A]/20 bg-[#C9A14A]/10 px-2.5 py-0.5 font-sans text-[9px] tracking-wider uppercase text-[#C9A14A]">
                  {mommyMakeover.category}
                </span>
                <h3 className="mt-3 font-display text-lg font-bold text-[#F6F1E8] group-hover:text-[#C9A14A] transition-colors">
                  {mommyMakeover.name}
                </h3>
                <p className="mt-2 line-clamp-2 font-sans text-sm leading-relaxed text-[#F6F1E8]/50">
                  {mommyMakeover.description}
                </p>
                <div className="mt-4 flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-lg border border-[#F6F1E8]/10 bg-[#F6F1E8]/5 px-3 py-1.5 font-sans text-xs font-semibold text-[#F6F1E8] transition-all duration-300 group-hover:border-[#C9A14A]/40 group-hover:text-[#C9A14A]">
                    View Treatment
                  </span>
                </div>
              </Link>
            )}
          </div>
        </motion.div>

        {/* Why Choose KO Clinics – Patient */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-24 max-w-4xl mx-auto"
        >
          <div className="mb-12 text-center">
            <span className="text-[#C9A14A] font-mono text-sm tracking-[0.2em] uppercase">Why Choose</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mt-2">
              Why Choose{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C9A14A] to-[#DDBB6C]">
                KO Clinics
              </span>
            </h2>
          </div>
          <div className="space-y-6 text-center">
            {[
              "Choose Kosmedixx for cutting-edge aesthetic and dermatological treatments designed to enhance your natural beauty and restore skin confidence. We offer advanced, US FDA-approved solutions for a wide range of concerns, including skin lightening, long-term sun damage, acne-related pigmentation, melasma, and age-related discoloration.",
              "At Kosmedixx, we go beyond skin\u2014our services also include hair transplant procedures, anti-ageing stem cell therapy, and a medically supervised weight and inch loss programme, all using FDA-approved technology to ensure safety and efficacy.",
              "Experience the Science of Kosmedixx, where board-certified dermatologists and aesthetic experts create personalised treatment plans to suit your unique needs. Whether you're looking to achieve a more even skin tone, rejuvenate your appearance, combat signs of ageing, or reshape your body, we are here to help you look and feel your best\u2014with visible, lasting results.",
              "Choose Kosmedixx\u2014where expert care meets scientific innovation for healthy, radiant skin, revitalised hair, and a confident new you.",
            ].map((text, i) => (
              <p
                key={i}
                className="text-base leading-relaxed md:text-lg"
                style={{ color: "rgba(246,241,232,0.6)", fontFamily: "var(--font-sans), sans-serif" }}
              >
                {text}
              </p>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <p className="font-sans text-xs text-[#F6F1E8]/30 leading-relaxed max-w-lg mx-auto mb-6">
            Results and experience may vary. Consult Dr. Vikas Singh to determine suitability.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-xl bg-[#C9A14A] px-6 py-3 font-sans text-sm font-semibold text-[#100D0A] transition-all duration-300 hover:bg-[#DDBB6C] hover:shadow-lg hover:shadow-[#C9A14A]/25"
          >
            Book a Consultation
          </Link>
        </motion.div>

      </div>
    </div>
  );
}
