"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import PageLayout from "@/components/PageLayout";

const sections = [
  {
    title: "KO Clinics Tour",
    images: [
      { src: "/images/Screenshot 2026-07-09 232729.png", label: "KO Clinics Tour 1" },
      { src: "/images/Screenshot 2026-07-09 232743.png", label: "KO Clinics Tour 2" },
      { src: "/images/Screenshot 2026-07-09 232757.png", label: "KO Clinics Tour 3" },
      { src: "/images/Screenshot 2026-07-09 232814.png", label: "KO Clinics Tour 4" },
      { src: "/images/Screenshot 2026-07-09 232823.png", label: "KO Clinics Tour 5" },
      { src: "/images/Screenshot 2026-07-09 232839.png", label: "KO Clinics Tour 6" },
      { src: "/images/Screenshot 2026-07-09 232848.png", label: "KO Clinics Tour 7" },
      { src: "/images/Screenshot 2026-07-09 232854.png", label: "KO Clinics Tour 8" },
      { src: "/images/Screenshot 2026-07-09 232909.png", label: "KO Clinics Tour 9" },
    ],
  },
  {
    title: "Our KO Clinics Treatments",
    images: [
      { src: "/images/Screenshot 2026-07-09 233538.png", label: "Treatment 1" },
      { src: "/images/Screenshot 2026-07-09 233555.png", label: "Treatment 2" },
      { src: "/images/Screenshot 2026-07-09 233612.png", label: "Treatment 3" },
      { src: "/images/Screenshot 2026-07-09 233625.png", label: "Treatment 4" },
      { src: "/images/Screenshot 2026-07-09 233642.png", label: "Treatment 5" },
      { src: "/images/Screenshot 2026-07-09 233655.png", label: "Treatment 6" },
    ],
  },
  {
    title: "La Crown Wellness",
    images: [
      { src: "/images/Screenshot 2026-07-09 233914.png", label: "La Crown 1" },
      { src: "/images/Screenshot 2026-07-09 233923.png", label: "La Crown 2" },
      { src: "/images/Screenshot 2026-07-09 233933.png", label: "La Crown 3" },
      { src: "/images/Screenshot 2026-07-09 233938.png", label: "La Crown 4" },
      { src: "/images/Screenshot 2026-07-09 233946.png", label: "La Crown 5" },
      { src: "/images/Screenshot 2026-07-09 233953.png", label: "La Crown 6" },
      { src: "/images/Screenshot 2026-07-09 234002.png", label: "La Crown 7" },
      { src: "/images/Screenshot 2026-07-09 234007.png", label: "La Crown 8" },
      { src: "/images/Screenshot 2026-07-09 234016.png", label: "La Crown 9" },
      { src: "/images/Screenshot 2026-07-09 234022.png", label: "La Crown 10" },
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
      <section className="relative bg-[#050505] py-24 md:py-32 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#CBA135]/5 rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span
              className="inline-block text-[#CBA135] font-mono text-sm tracking-[0.2em] uppercase mb-4"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Gallery
            </span>
            <h2
              className="text-4xl md:text-5xl font-bold text-white"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CBA135] to-[#F5D779]">World</span>
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
                  style={{ fontFamily: "'Playfair Display', serif" }}
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
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(255,255,255,0.08)",
                      }}
                    >
                      <Image
                        src={img.src}
                        alt={img.label}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 768px) 50vw, 25vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60" />
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <p
                          className="text-white text-sm font-medium"
                          style={{ fontFamily: "'Inter', sans-serif" }}
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
