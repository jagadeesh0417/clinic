"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import PageLayout from "@/components/PageLayout";

const categories = [
  "All",
  "Clinics",
  "Infrastructure",
  "Quantum Health Counters",
  "Products",
  "Healthcare Technology",
  "Doctors",
  "Events",
  "Training Sessions",
  "Corporate Programs",
  "Health Camps",
  "Equipment",
  "Facilities",
];

const images = [
  { src: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&q=80", title: "KO Clinics Premium Facility", category: "Clinics", span: "row-span-2" },
  { src: "https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?w=600&q=80", title: "Expert Consultation", category: "Doctors", span: "" },
  { src: "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=600&q=80", title: "Advanced Diagnostic Equipment", category: "Equipment", span: "row-span-2" },
  { src: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=600&q=80", title: "AI-Powered Health Monitoring", category: "Healthcare Technology", span: "" },
  { src: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80", title: "KO Product Range", category: "Products", span: "" },
  { src: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=600&q=80", title: "Community Health Camp", category: "Health Camps", span: "row-span-2" },
  { src: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=600&q=80", title: "Modern Clinic Interior", category: "Facilities", span: "" },
  { src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80", title: "Digital Health Dashboard", category: "Healthcare Technology", span: "" },
  { src: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=600&q=80", title: "Surgical Team", category: "Doctors", span: "" },
  { src: "https://images.unsplash.com/photo-1550572017-edd951b55104?w=600&q=80", title: "Annual Healthcare Summit", category: "Events", span: "row-span-2" },
  { src: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&q=80", title: "Staff Training Program", category: "Training Sessions", span: "" },
  { src: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&q=80", title: "KO Wellness Products", category: "Products", span: "" },
  { src: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&q=80", title: "Clinic Infrastructure", category: "Infrastructure", span: "row-span-2" },
  { src: "https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?w=600&q=80", title: "Doctor Meet & Greet", category: "Events", span: "" },
  { src: "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=600&q=80", title: "Q-Scan Technology", category: "Products", span: "" },
  { src: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=600&q=80", title: "Quantum Health Counter Setup", category: "Quantum Health Counters", span: "" },
  { src: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=600&q=80", title: "Rural Health Initiative", category: "Health Camps", span: "row-span-2" },
  { src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80", title: "Telemedicine Platform", category: "Healthcare Technology", span: "" },
  { src: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=600&q=80", title: "Reception & Lounge", category: "Facilities", span: "" },
  { src: "https://images.unsplash.com/photo-1550572017-edd951b55104?w=600&q=80", title: "Corporate Partnership Event", category: "Corporate Programs", span: "" },
  { src: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&q=80", title: "Nurse Training Session", category: "Training Sessions", span: "" },
  { src: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=600&q=80", title: "Pediatric Care Specialist", category: "Doctors", span: "" },
  { src: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&q=80", title: "Advanced Infrastructure", category: "Infrastructure", span: "row-span-2" },
  { src: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80", title: "Quantum Health Counter Design", category: "Quantum Health Counters", span: "" },
];

function GalleryCard({
  item,
  index,
  onSelect,
}: {
  item: (typeof images)[number];
  index: number;
  onSelect: (i: number) => void;
}) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] }}
      className={`relative overflow-hidden rounded-2xl cursor-pointer group ${item.span}`}
      onClick={() => onSelect(index)}
    >
      <div className="relative w-full h-full min-h-[220px]">
        <Image
          src={item.src}
          alt={item.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[rgba(0,213,255,0.08)]" />
      <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
        <span className="inline-block px-3 py-1 mb-2 text-[10px] font-medium tracking-widest uppercase rounded-full bg-[rgba(0,213,255,0.15)] text-[#00D5FF] border border-[rgba(0,213,255,0.2)]">
          {item.category}
        </span>
        <h3 className="text-white font-subtitle text-sm font-medium leading-tight">{item.title}</h3>
      </div>
    </motion.div>
  );
}

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = activeCategory === "All" ? images : images.filter((img) => img.category === activeCategory);

  const openLightbox = useCallback((i: number) => setLightboxIndex(i), []);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const prevImage = useCallback(() => {
    setLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : prev));
  }, []);
  const nextImage = useCallback(() => {
    setLightboxIndex((prev) => (prev !== null && prev < filtered.length - 1 ? prev + 1 : prev));
  }, [filtered.length]);

  return (
    <PageLayout>
      <section className="relative px-4 sm:px-8 lg:px-16 pt-36 pb-24">
        {/* Heading */}
        <div className="max-w-5xl mx-auto text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white mb-4"
          >
            Photo <span className="text-[#00D5FF]">Gallery</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="text-base sm:text-lg text-[#B7B7B7] font-subtitle max-w-2xl mx-auto"
          >
            Explore our ecosystem of clinics, technology, and healthcare innovation
          </motion.p>
        </div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-6xl mx-auto mb-12 flex flex-wrap justify-center gap-2 sm:gap-3"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-subtitle font-medium tracking-wide transition-all duration-500 ${
                activeCategory === cat
                  ? "bg-[#00D5FF] text-[#050505] shadow-[0_0_20px_rgba(0,213,255,0.3)]"
                  : "bg-[rgba(255,255,255,0.04)] backdrop-blur-xl border border-[rgba(255,255,255,0.08)] text-[#B7B7B7] hover:text-white hover:border-[rgba(255,255,255,0.2)]"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <div className="max-w-7xl mx-auto">
          <motion.div layout className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
            <AnimatePresence mode="popLayout">
              {filtered.map((item, i) => (
                <GalleryCard key={item.title + item.src} item={item} index={i} onSelect={openLightbox} />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {lightboxIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center bg-[rgba(5,5,5,0.95)] backdrop-blur-xl p-4"
              onClick={closeLightbox}
            >
              <button
                onClick={closeLightbox}
                className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.1)] text-white text-xl hover:bg-[rgba(255,255,255,0.12)] transition-colors z-10"
              >
                ✕
              </button>

              {lightboxIndex > 0 && (
                <button
                  onClick={(e) => { e.stopPropagation(); prevImage(); }}
                  className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.1)] text-white text-xl hover:bg-[rgba(255,255,255,0.12)] transition-colors z-10"
                >
                  ‹
                </button>
              )}

              {lightboxIndex < filtered.length - 1 && (
                <button
                  onClick={(e) => { e.stopPropagation(); nextImage(); }}
                  className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.1)] text-white text-xl hover:bg-[rgba(255,255,255,0.12)] transition-colors z-10"
                >
                  ›
                </button>
              )}

              <motion.div
                key={lightboxIndex}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="relative w-full max-w-5xl max-h-[85vh] aspect-[4/3] rounded-2xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={filtered[lightboxIndex].src.replace("w=600", "w=1600")}
                  alt={filtered[lightboxIndex].title}
                  fill
                  className="object-contain"
                  priority
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[rgba(5,5,5,0.8)] to-transparent">
                  <span className="inline-block px-3 py-1 mb-2 text-xs font-medium tracking-widest uppercase rounded-full bg-[rgba(0,213,255,0.15)] text-[#00D5FF] border border-[rgba(0,213,255,0.2)]">
                    {filtered[lightboxIndex].category}
                  </span>
                  <h3 className="text-white font-subtitle text-lg font-medium">{filtered[lightboxIndex].title}</h3>
                </div>
              </motion.div>

              {/* Counter */}
              <div className="absolute bottom-6 right-6 text-[#B7B7B7] font-subtitle text-sm">
                {lightboxIndex + 1} / {filtered.length}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </PageLayout>
  );
}
