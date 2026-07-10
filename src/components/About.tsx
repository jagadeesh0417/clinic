"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import Image from "next/image";
import { URLS, img } from "@/config/images";

const images = [
  {
    src: img(URLS.RECEPTION),
    alt: "Modern medical facility reception area",
    positionClass: "top-0 left-0 w-full h-[320px] md:h-[400px] z-[1]",
    parallaxOffset: -60,
    initialX: -60,
  },
  {
    src: img(URLS.CONSULTATION),
    alt: "Healthcare professional consulting patient",
    positionClass:
      "top-[180px] md:top-[220px] right-0 w-[80%] md:w-[70%] h-[260px] md:h-[340px] z-[2]",
    parallaxOffset: -40,
    initialX: 60,
  },
  {
    src: img(URLS.DOCTOR_TABLET),
    alt: "Advanced medical technology and equipment",
    positionClass:
      "top-[360px] md:top-[460px] left-[5%] md:left-[8%] w-[70%] md:w-[60%] h-[200px] md:h-[260px] z-[3]",
    parallaxOffset: -80,
    initialX: -40,
  },
];

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
        <div className="absolute inset-0 bg-gradient-to-tr from-[#C9A14A]/10 via-transparent to-transparent z-10 pointer-events-none" />
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

function DoctorAvatar({ name, size = "lg" }: { name: string; size?: "sm" | "md" | "lg" }) {
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2);
  const sizeMap = { sm: "w-10 h-10 text-sm", md: "w-16 h-16 text-lg", lg: "w-24 h-24 text-2xl" };
  return (
    <div
      className={`${sizeMap[size]} rounded-full bg-gradient-to-br from-[#C9A14A] to-[#E8C860] flex items-center justify-center text-[#100D0A] font-bold shrink-0`}
    >
      {initials}
    </div>
  );
}

function FounderCard() {
  return (
    <motion.div
      variants={itemVariants}
      className="flex items-center gap-6 p-6 md:p-8 rounded-2xl border border-[#C9A14A]/20 bg-[#C9A14A]/5 mb-10"
    >
      <DoctorAvatar name="Dr. Vikas Singh" size="lg" />
      <div>
        <h3 className="text-2xl md:text-3xl font-bold text-white" style={{ fontFamily: "var(--font-displayisplay), serif" }}>
          Dr. Vikas Singh
        </h3>
        <p className="text-[#CBBFAF] text-sm mt-1" style={{ fontFamily: "var(--font-displayans), sans-serif" }}>
          Founder & Chief Medical Officer, KO Clinics
        </p>
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
      className="relative bg-[#100D0A] py-24 md:py-32 overflow-hidden"
    >
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-[#C9A14A]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#C9A14A]/5 rounded-full blur-[120px] pointer-events-none" />

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
                className="inline-block text-[#C9A14A] font-mono text-sm tracking-[0.2em] uppercase"
                style={{ fontFamily: "var(--font-displayans), sans-serif" }}
              >
                About KO Clinics
              </span>
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
              style={{ fontFamily: "var(--font-displayisplay), serif" }}
            >
              About{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C9A14A] to-[#F5D779]">
                KO Clinics
              </span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-[#CBBFAF] text-lg leading-relaxed mb-6"
              style={{ fontFamily: "var(--font-displayans), sans-serif" }}
            >
              KO Clinics was founded in 2005 by Dr. Vikas Singh — starting as a
              single aesthetic practice in Bengaluru. Two decades of running
              clinics taught us where the real friction sits: not in clinical
              skill, but in patient acquisition, diagnostics, and the technology
              gap between a standalone clinic and a hospital chain. We built KO
              Clinics to close that gap. Today we operate as a healthcare
              network, giving independent clinics the diagnostics, digital
              infrastructure, and patient flow that were once available only to
              large groups.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-[#CBBFAF] text-lg leading-relaxed mb-6"
              style={{ fontFamily: "var(--font-displayans), sans-serif" }}
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
              className="text-white/50 text-sm tracking-wider uppercase mb-5"
              style={{ fontFamily: "var(--font-displayans), sans-serif" }}
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
                    fontFamily: "var(--font-displayans), sans-serif",
                  }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C9A14A]" />
                  {area}
                </motion.span>
              ))}
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-[#CBBFAF] text-lg leading-relaxed mb-6"
              style={{ fontFamily: "var(--font-displayans), sans-serif" }}
            >
              Our team comprises internationally trained, board-certified
              dermatologists, plastic surgeons and aesthetic physicians dedicated
              to delivering world-class care.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-[#CBBFAF] text-lg leading-relaxed mb-10"
              style={{ fontFamily: "var(--font-displayans), sans-serif" }}
            >
              We extend an open invitation to practitioners to partner with or
              join the KO Clinics network as it expands across India and
              internationally.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-white text-xl md:text-2xl font-semibold mb-10 italic"
              style={{ fontFamily: "var(--font-displayisplay), serif" }}
            >
              &ldquo;Aesthetics with Ethics&rdquo;
            </motion.p>

            <FounderCard />

          </motion.div>
        </div>
      </div>
    </section>
  );
}
