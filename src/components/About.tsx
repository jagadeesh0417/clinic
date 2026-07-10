"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import Image from "next/image";
import { useCountUp } from "@/hooks/useCountUp";

const images = [
  {
    src: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80",
    alt: "Modern medical facility reception area",
    positionClass: "top-0 left-0 w-full h-[320px] md:h-[400px] z-[1]",
    parallaxOffset: -60,
    initialX: -60,
  },
  {
    src: "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=800&q=80",
    alt: "Healthcare professional consulting patient",
    positionClass:
      "top-[180px] md:top-[220px] right-0 w-[80%] md:w-[70%] h-[260px] md:h-[340px] z-[2]",
    parallaxOffset: -40,
    initialX: 60,
  },
  {
    src: "https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?w=800&q=80",
    alt: "Advanced medical technology and equipment",
    positionClass:
      "top-[360px] md:top-[460px] left-[5%] md:left-[8%] w-[70%] md:w-[60%] h-[200px] md:h-[260px] z-[3]",
    parallaxOffset: -80,
    initialX: -40,
  },
];

/**
 * Patients Served and Satisfaction Rate were removed because we lack
 * a verifiable source for either number. Re-add only when a data
 * source can be cited.
 */
const stats = [
  { value: 500, suffix: "+", label: "Partner Clinics" },
];

function CountUp({ end }: { end: number }) {
  const { ref, value } = useCountUp({ end });
  return (
    <span ref={ref} className="text-4xl md:text-5xl font-bold text-[#CBA135] tabular-nums">
      {value}
    </span>
  );
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

function ParallaxImage({
  src,
  alt,
  scrollYProgress,
  offset,
  positionClass,
  initialX,
}: {
  src: string;
  alt: string;
  scrollYProgress: MotionValue<number>;
  offset: number;
  positionClass: string;
  initialX: number;
}) {
  const y = useTransform(scrollYProgress, [0, 1], [0, offset]);
  return (
    <motion.div
      style={{ y }}
      className={`absolute ${positionClass}`}
      initial={{ opacity: 0, x: initialX }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, ease: "easeOut" as const }}
    >
      <div className="group relative w-full h-full overflow-hidden rounded-2xl">
        <div className="absolute inset-0 bg-gradient-to-tr from-[#CBA135]/10 via-transparent to-transparent z-10 pointer-events-none" />
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          unoptimized
        />
      </div>
    </motion.div>
  );
}

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative bg-[#050505] py-24 md:py-32 overflow-hidden"
    >
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-[#CBA135]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#CBA135]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="relative h-[500px] md:h-[650px] lg:sticky lg:top-32">
            <div className="relative w-full h-full">
              {images.map((img, i) => (
                <ParallaxImage
                  key={i}
                  src={img.src}
                  alt={img.alt}
                  scrollYProgress={scrollYProgress}
                  offset={img.parallaxOffset}
                  positionClass={img.positionClass}
                  initialX={img.initialX}
                />
              ))}
            </div>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="mb-2">
              <span
                className="inline-block text-[#CBA135] font-mono text-sm tracking-[0.2em] uppercase"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                About KO Clinics
              </span>
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              About{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CBA135] to-[#F5D779]">
                KO Clinics
              </span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-[#B7B7B7] text-lg leading-relaxed mb-6"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Founded in 2005 by Dr. Vikas Singh, Kosmedixx (KO) Clinics is
              positioned as a pioneer in advanced aesthetic and cosmetic medicine
              in India.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-[#B7B7B7] text-lg leading-relaxed mb-6"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Among the first to introduce LIPODISSOLVE Ultra and laser-based
              inch-loss treatments to Bangalore and India. Dr. Singh is also
              credited as the founder of Bodyline Clinic and Ree Age Clinic, and
              established the Kosmedixx Global Aesthetic Institute, with an
              association to the European Federation of Aesthetic Medicine and
              Surgery (EFAMS).
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-[#B7B7B7] text-lg leading-relaxed mb-10"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              KO Clinics began in 2005 as a single aesthetic practice in
              Bengaluru. Two decades of running clinics taught us where the real
              friction sits — not in clinical skill, but in patient acquisition,
              diagnostics, and the technology gap between a standalone clinic and
              a hospital chain. We built KO Clinics to close that gap. Today we
              operate as a healthcare network, giving independent clinics the
              diagnostics, digital infrastructure, and patient flow that were
              once available only to large groups.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-white/50 text-sm tracking-wider uppercase mb-5"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Focus Areas
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-3 mb-10"
            >
              {[
                "Anti-ageing",
                "Advanced Hair Restoration",
                "Stem Cell Therapy",
                "Weight & Inch Loss",
                "Cosmetic Surgery",
              ].map((area) => (
                <motion.span
                  key={area}
                  whileHover={{ scale: 1.05 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-white"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(203,161,53,0.15) 0%, rgba(203,161,53,0.05) 100%)",
                    border: "1px solid rgba(203,161,53,0.3)",
                    fontFamily: "'Space Grotesk', sans-serif",
                  }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#CBA135]" />
                  {area}
                </motion.span>
              ))}
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-[#B7B7B7] text-lg leading-relaxed mb-6"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Our team comprises internationally trained, board-certified
              dermatologists, plastic surgeons and aesthetic physicians dedicated
              to delivering world-class care.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-[#B7B7B7] text-lg leading-relaxed mb-10"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              We extend an open invitation to practitioners to partner with or
              join the KO Clinics network as it expands across India and
              internationally.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-white text-xl md:text-2xl font-semibold mb-10 italic"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              &ldquo;Aesthetics with Ethics&rdquo;
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-white/10"
            >
              {stats.map((stat) => (
                <div key={stat.label} className="text-center md:text-left">
                  <span className="inline-flex items-baseline gap-0.5">
                    <CountUp end={stat.value} />
                    <span className="text-2xl md:text-3xl font-bold text-[#CBA135]">
                      {stat.suffix}
                    </span>
                  </span>
                  <p
                    className="text-[#B7B7B7] text-sm mt-1"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
              <div className="text-center md:text-left">
                <span className="inline-flex items-baseline gap-0.5">
                  <span className="text-4xl md:text-5xl font-bold text-[#CBA135] tabular-nums">
                    24
                  </span>
                  <span className="text-2xl md:text-3xl font-bold text-[#CBA135]">
                    /7
                  </span>
                </span>
                <p
                  className="text-[#B7B7B7] text-sm mt-1"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Support
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
