"use client";

import { useRef, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  useMotionValue,
  useSpring,
  animate,
  type MotionValue,
} from "framer-motion";
import Image from "next/image";

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

const platformFeatures = [
  {
    title: "Technology",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    title: "Digital Marketing",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 6V2M8 10l-4 4 4 4M16 10l4 4-4 4" />
        <circle cx="12" cy="14" r="4" />
      </svg>
    ),
  },
  {
    title: "Telemedicine",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
  {
    title: "Healthcare Products",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
        <rect x="8" y="2" width="8" height="4" rx="1" />
        <line x1="12" y1="11" x2="12" y2="17" />
        <line x1="9" y1="14" x2="15" y2="14" />
      </svg>
    ),
  },
  {
    title: "AI Health Screening",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a4 4 0 0 1 4 4c0 2-2 3-2 5h-4c0-2-2-3-2-5a4 4 0 0 1 4-4z" />
        <path d="M12 14v4" />
        <path d="M8 22h8" />
        <path d="M12 18c-2 0-4-1-4-3" />
      </svg>
    ),
  },
  {
    title: "Doctor Networking",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: "Patient Acquisition",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="8.5" cy="7" r="4" />
        <line x1="20" y1="8" x2="20" y2="14" />
        <line x1="23" y1="11" x2="17" y2="11" />
      </svg>
    ),
  },
  {
    title: "Business Growth Support",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
  },
];

const locations = [
  "Bengaluru",
  "Hong Kong",
  "Dubai",
  "Canada",
];

const stats = [
  { value: 500, suffix: "+", label: "Partner Clinics" },
  { value: 50, suffix: "K+", label: "Patients Served" },
  { value: 98, suffix: "%", label: "Satisfaction Rate" },
  { value: 24, suffix: "/7", label: "Support" },
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

function AnimatedCounter({
  value,
  suffix,
}: {
  value: number;
  suffix: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const count = useMotionValue(0);
  const smoothCount = useSpring(count, { stiffness: 80, damping: 20 });
  const displayValue = useTransform(smoothCount, Math.round);

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, {
        duration: 2.5,
        ease: "easeOut" as const,
      });
      return () => controls.stop();
    }
  }, [isInView]);

  return (
    <span ref={ref} className="inline-flex items-baseline gap-0.5">
      <motion.span className="text-4xl md:text-5xl font-bold text-[#CBA135] tabular-nums">
        {displayValue}
      </motion.span>
      <span className="text-2xl md:text-3xl font-bold text-[#CBA135]">
        {suffix}
      </span>
    </span>
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
              className="text-[#B7B7B7] text-lg leading-relaxed mb-8"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              KO Clinics is an AI-powered healthcare ecosystem committed to
              making quality healthcare accessible while helping clinics improve
              visibility, operational efficiency and profitability.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-white/50 text-sm tracking-wider uppercase mb-5"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              The platform combines
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-3 mb-10"
            >
              {platformFeatures.map((feature) => (
                <motion.div
                  key={feature.title}
                  whileHover={{ y: -2 }}
                  className="group rounded-xl p-4 transition-all duration-300"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    backdropFilter: "blur(12px)",
                    WebkitBackdropFilter: "blur(12px)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <div className="text-[#CBA135] mb-2 transition-colors duration-300 group-hover:text-[#F5D779]">
                    {feature.icon}
                  </div>
                  <p
                    className="text-white text-sm font-medium leading-tight"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {feature.title}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="mb-8"
            >
              <p
                className="text-white/50 text-sm tracking-wider uppercase mb-4"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Current Presence
              </p>
              <div className="flex flex-wrap gap-3">
                {locations.map((location) => (
                  <motion.span
                    key={location}
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
                    {location}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-white text-xl md:text-2xl font-semibold mb-10 italic"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              &ldquo;Building a truly global healthcare network.&rdquo;
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-white/10"
            >
              {stats.map((stat) => (
                <div key={stat.label} className="text-center md:text-left">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  <p
                    className="text-[#B7B7B7] text-sm mt-1"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
