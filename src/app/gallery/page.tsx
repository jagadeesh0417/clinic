"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import PageLayout from "@/components/PageLayout";

const sections = [
  {
    title: "KO Clinics Tour",
    images: [
      { src: "/images/dr-vikas.png", label: "Dr. Vikas Singh" },
      { src: "/images/dr-subramini.png", label: "Dr. Subramini" },
      { src: "/images/dr-nandita.png", label: "Dr. Nandita" },
      { src: "/images/dr-sekhar.png", label: "Dr. D R Sekhar" },
      { src: "/images/Dr-Surindher.png", label: "Dr. Surindher D.S.A" },
      { src: "/images/Dr-AamodRao.png", label: "Dr. Aamod Rao" },
      { src: "/images/Dr- Arivazhagan.png", label: "Dr. Arivazhagan" },
      { src: "/images/Dr-mohsinpasha.png", label: "Dr. Mohsin Pasha" },
      { src: "/images/Screenshot 2026-07-09 232729.png", label: "Clinic Tour 1" },
      { src: "/images/Screenshot 2026-07-09 232743.png", label: "Clinic Tour 2" },
      { src: "/images/Screenshot 2026-07-09 232757.png", label: "Clinic Tour 3" },
      { src: "/images/Screenshot 2026-07-09 232814.png", label: "Clinic Tour 4" },
      { src: "/images/Screenshot 2026-07-09 232823.png", label: "Clinic Tour 5" },
      { src: "/images/Screenshot 2026-07-09 232839.png", label: "Clinic Tour 6" },
      { src: "/images/Screenshot 2026-07-09 232848.png", label: "Clinic Tour 7" },
      { src: "/images/Screenshot 2026-07-09 232854.png", label: "Clinic Tour 8" },
      { src: "/images/Screenshot 2026-07-09 232909.png", label: "Clinic Tour 9" },
    ],
  },
  {
    title: "La Crown Wellness",
    images: [
      { src: "/images/dr-vikas.png", label: "Expert Care" },
      { src: "/images/dr-subramini.png", label: "Wellness Team" },
      { src: "/images/Dr-mohsinpasha.png", label: "Health Consultation" },
    ],
  },
  {
    title: "Our KO Clinics Treatments",
    images: [
      { src: "/images/sculptra-overview-1.png", label: "Sculptra Treatment" },
      { src: "/images/sculptra-results-1.png", label: "Sculptra Results" },
      { src: "/images/profhilo-1.png", label: "Profhilo" },
      { src: "/images/lfl-1.png", label: "Liquid Face Lift" },
      { src: "/images/skb-1.png", label: "Skin Boosters" },
      { src: "/images/nsfl-1.png", label: "Non-Surgical Face Lift" },
      { src: "/images/nstt-1.png", label: "Non-Surgical Tummy Tuck" },
      { src: "/images/mbio-1.png", label: "Micro Bio-FUE" },
      { src: "/images/breastlift-1.png", label: "Breast Lift" },
      { src: "/images/breastlift-2.png", label: "Breast Augmentation" },
    ],
  },
  {
    title: "Our Videos",
    videos: [
      { url: "https://www.youtube.com/embed/dQw4w9WgXcQ", label: "KO Clinics Overview" },
      { url: "https://www.youtube.com/embed/dQw4w9WgXcQ", label: "Treatment Journey" },
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

                {'images' in section && section.images && (
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
                )}

                {'videos' in section && section.videos && (
                  <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                    {section.videos.map((video, vi) => (
                      <motion.div
                        key={video.label}
                        variants={fadeUp} custom={vi + 1}
                        className="aspect-video rounded-2xl overflow-hidden"
                        style={{
                          border: "1px solid rgba(255,255,255,0.08)",
                        }}
                      >
                        <iframe
                          src={video.url}
                          title={video.label}
                          className="w-full h-full"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      </motion.div>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
