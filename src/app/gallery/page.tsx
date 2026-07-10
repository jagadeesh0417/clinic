"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import PageLayout from "@/components/PageLayout";

const sections = [
  {
    title: "KO Clinics Tour",
    images: [
      { src: "/images/ko-clinic-tour-1.png", label: "KO Clinics Tour 1" },
      { src: "/images/ko-clinic-tour-2.png", label: "KO Clinics Tour 2" },
      { src: "/images/ko-clinic-tour-3.png", label: "KO Clinics Tour 3" },
      { src: "/images/ko-clinic-tour-4.png", label: "KO Clinics Tour 4" },
      { src: "/images/ko-clinic-tour-5.png", label: "KO Clinics Tour 5" },
      { src: "/images/ko-clinic-tour-6.png", label: "KO Clinics Tour 6" },
      { src: "/images/ko-clinic-tour-7.png", label: "KO Clinics Tour 7" },
      { src: "/images/ko-clinic-tour-8.png", label: "KO Clinics Tour 8" },
      { src: "/images/ko-clinic-tour-9.png", label: "KO Clinics Tour 9" },
    ],
  },
  {
    title: "Our KO Clinics Treatments",
    images: [
      { src: "/images/treatment-1.png", label: "Treatment 1" },
      { src: "/images/treatment-2.png", label: "Treatment 2" },
      { src: "/images/treatment-3.png", label: "Treatment 3" },
      { src: "/images/treatment-4.png", label: "Treatment 4" },
      { src: "/images/treatment-5.png", label: "Treatment 5" },
      { src: "/images/treatment-6.png", label: "Treatment 6" },
    ],
  },
  {
    title: "Before & After",
    images: [
      { src: "/images/before-after-1.png", label: "Before & After 1" },
      { src: "/images/before-after-2.png", label: "Before & After 2" },
      { src: "/images/before-after-3.png", label: "Before & After 3" },
      { src: "/images/before-after-4.png", label: "Before & After 4" },
      { src: "/images/before-after-5.png", label: "Before & After 5" },
      { src: "/images/before-after-6.png", label: "Before & After 6" },
      { src: "/images/before-after-7.png", label: "Before & After 7" },
      { src: "/images/before-after-8.png", label: "Before & After 8" },
      { src: "/images/before-after-9.png", label: "Before & After 9" },
      { src: "/images/before-after-10.png", label: "Before & After 10" },
      { src: "/images/before-after-11.png", label: "Before & After 11" },
      { src: "/images/before-after-12.png", label: "Before & After 12" },
      { src: "/images/before-after-13.png", label: "Before & After 13" },
      { src: "/images/before-after-14.png", label: "Before & After 14" },
      { src: "/images/before-after-15.png", label: "Before & After 15" },
      { src: "/images/before-after-16.png", label: "Before & After 16" },
      { src: "/images/before-after-17.png", label: "Before & After 17" },
      { src: "/images/before-after-18.png", label: "Before & After 18" },
      { src: "/images/before-after-19.png", label: "Before & After 19" },
      { src: "/images/before-after-20.png", label: "Before & After 20" },
      { src: "/images/before-after-21.png", label: "Before & After 21" },
      { src: "/images/before-after-22.png", label: "Before & After 22" },
      { src: "/images/before-after-23.png", label: "Before & After 23" },
      { src: "/images/before-after-24.png", label: "Before & After 24" },
      { src: "/images/before-after-25.png", label: "Before & After 25" },
      { src: "/images/before-after-26.png", label: "Before & After 26" },
      { src: "/images/before-after-27.png", label: "Before & After 27" },
      { src: "/images/before-after-28.png", label: "Before & After 28" },
      { src: "/images/before-after-29.png", label: "Before & After 29" },
      { src: "/images/before-after-30.png", label: "Before & After 30" },
      { src: "/images/before-after-31.png", label: "Before & After 31" },
      { src: "/images/before-after-32.png", label: "Before & After 32" },
      { src: "/images/before-after-33.png", label: "Before & After 33" },
      { src: "/images/before-after-34.png", label: "Before & After 34" },
      { src: "/images/before-after-35.png", label: "Before & After 35" },
      { src: "/images/before-after-36.png", label: "Before & After 36" },
      { src: "/images/before-after-37.png", label: "Before & After 37" },
      { src: "/images/before-after-38.png", label: "Before & After 38" },
      { src: "/images/before-after-39.png", label: "Before & After 39" },
      { src: "/images/before-after-40.png", label: "Before & After 40" },
      { src: "/images/before-after-41.png", label: "Before & After 41" },
    ],
  },
  {
    title: "La Crown Wellness",
    images: [
      { src: "/images/la-crown-1.png", label: "La Crown 1" },
      { src: "/images/la-crown-2.png", label: "La Crown 2" },
      { src: "/images/la-crown-3.png", label: "La Crown 3" },
      { src: "/images/la-crown-4.png", label: "La Crown 4" },
      { src: "/images/la-crown-5.png", label: "La Crown 5" },
      { src: "/images/la-crown-6.png", label: "La Crown 6" },
      { src: "/images/la-crown-7.png", label: "La Crown 7" },
      { src: "/images/la-crown-8.png", label: "La Crown 8" },
      { src: "/images/la-crown-9.png", label: "La Crown 9" },
      { src: "/images/la-crown-10.png", label: "La Crown 10" },
      { src: "/images/la-crown-11.png", label: "La Crown 11" },
      { src: "/images/la-crown-12.png", label: "La Crown 12" },
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.1 * i, ease: "easeOut" as const },
  }),
};

export default function GalleryPage() {
  return (
    <PageLayout>
      <section className="relative bg-[#100D0A] py-24 md:py-32 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#C9A14A]/5 rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 xl:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span
              className="inline-block text-[#C9A14A] font-mono text-sm tracking-[0.2em] uppercase mb-4"
              style={{ fontFamily: "var(--font-sans), sans-serif" }}
            >
              Gallery
            </span>
            <h2
              className="text-4xl md:text-5xl font-bold text-white"
              style={{ fontFamily: "var(--font-display), serif" }}
            >
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C9A14A] to-[#DDBB6C]">World</span>
            </h2>
          </motion.div>

          <div className="space-y-20">
            {sections.map((section, si) => (
              <motion.div
                key={section.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
              >
                <motion.h3
                  variants={fadeUp} custom={0}
                  className="text-2xl md:text-3xl font-bold text-white mb-8 text-center"
                  style={{ fontFamily: "var(--font-display), serif" }}
                >
                  {section.title}
                </motion.h3>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {section.images.map((img, ii) => (
                    <motion.div
                      key={img.label}
                      variants={fadeUp} custom={ii + 1}
                      className="group relative overflow-hidden rounded-2xl aspect-[4/5] cursor-pointer"
                      style={{
                        background: "rgba(246,241,232,0.04)",
                        border: "1px solid rgba(246,241,232,0.08)",
                      }}
                    >
                      <Image
                        src={img.src}
                        alt={img.label}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 768px) 50vw, 25vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#100D0A] via-transparent to-transparent opacity-60" />
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <p
                          className="text-white text-sm font-medium"
                          style={{ fontFamily: "var(--font-sans), sans-serif" }}
                        >
                          {img.label}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
