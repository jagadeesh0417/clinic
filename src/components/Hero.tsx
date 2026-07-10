"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { URLS, img } from "@/config/images";
import { EyebrowRule, IconCircle } from "@/components/primitives";
import { Stethoscope, Shield, Globe, Zap, Heart } from "lucide-react";

const HERO_IMAGES = [
  img(URLS.MEDICAL_TEAM_CONFERENCE, 1920),
  img(URLS.SURGERY, 1920),
  img(URLS.MEDICAL_TECH, 1920),
  img(URLS.DENTAL, 1920),
];

const features = [
  { icon: Stethoscope, label: "Diagnostics" },
  { icon: Shield, label: "Trust & Compliance" },
  { icon: Globe, label: "Pan-India Network" },
  { icon: Zap, label: "AI Technology" },
  { icon: Heart, label: "Patient Flow" },
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[88vh] bg-ink overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-[45fr_55fr] min-h-[88vh]">
        {/* Copy column */}
        <div className="relative z-10 flex flex-col justify-center px-6 sm:px-12 lg:px-16 xl:px-20 py-32 lg:py-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="mb-8">
              <EyebrowRule text="KO Clinics Network" />
            </div>

            <h1
              className="text-cream font-displayisplay"
              style={{
                fontSize: "clamp(48px, 6vw, 80px)",
                letterSpacing: "-0.01em",
                lineHeight: 1.05,
              }}
            >
              An AI-powered
              <br />
              clinic network,
              <br />
              built by clinicians.
            </h1>

            <p
              className="text-cream font-displayisplay uppercase mt-6"
              style={{
                fontSize: "clamp(22px, 2.6vw, 34px)",
                letterSpacing: "0.25em",
                lineHeight: 1.4,
              }}
            >
              One Network. One Standard. Real Growth.
            </p>

            <p
              className="text-body mt-6 max-w-lg"
              style={{
                fontSize: "16px",
                lineHeight: 1.7,
                fontFamily: "var(--font-displayans), sans-serif",
              }}
            >
              KO Clinics is a healthcare network connecting aesthetic clinics,
              hospitals, dermatology centres, wellness facilities, diagnostic
              centres and specialist doctors under one trusted brand. We empower
              healthcare providers through technology, patient acquisition, AI
              diagnostics, branding, digital marketing and operational support.
            </p>

            {/* Feature icon row */}
            <div className="flex gap-6 mt-10">
              {features.map((f) => (
                <div key={f.label} className="flex flex-col items-center gap-2">
                  <IconCircle icon={f.icon} />
                  <span
                    className="text-[10px] font-displayans uppercase tracking-[0.12em] text-gold-500 text-center"
                    style={{ minHeight: "32px" }}
                  >
                    {f.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Primary CTA */}
            <div className="mt-10">
              <a
                href="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-displayans uppercase tracking-[0.12em] text-[13px] font-semibold transition-all duration-300 hover:brightness-110"
                style={{
                  background: "linear-gradient(135deg, #E6C578 0%, #B8873C 100%)",
                  color: "var(--on-gold)",
                }}
              >
                Become a Partner
                <span className="w-5 h-5 rounded-full border border-on-gold/30 flex items-center justify-center">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Image column — bleeds right */}
        <div className="relative lg:block hidden overflow-hidden">
          <div
            className="absolute inset-0"
            style={{
              maskImage: "linear-gradient(to right, transparent 0%, black 35%)",
              WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 35%)",
            }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                className="absolute inset-0"
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <Image
                  src={HERO_IMAGES[currentIndex]}
                  alt=""
                  aria-hidden="true"
                  fill
                  sizes="55vw"
                  className="object-cover"
                  unoptimized
                  priority
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile image — below copy */}
        <div className="relative h-[40vh] lg:hidden overflow-hidden">
          <div
            className="absolute inset-0 z-10 pointer-events-none"
            style={{
              background: "linear-gradient(to top, var(--ink) 0%, transparent 30%)",
            }}
          />
          <Image
            src={HERO_IMAGES[currentIndex]}
            alt=""
            aria-hidden="true"
            fill
            sizes="100vw"
            className="object-cover"
            unoptimized
          />
        </div>
      </div>
    </section>
  );
}
