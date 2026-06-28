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

const verticals = [
  {
    title: "Healthcare Services",
    description:
      "Empowering clinics with technology, branding, patient acquisition, and operational excellence.",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
  {
    title: "Quantum Health Products",
    description:
      "Distributing cutting-edge health products and solutions across our network of clinics.",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    title: "Consultation Space Rental",
    description:
      "Providing premium, fully-equipped consultation spaces for healthcare professionals.",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
        <line x1="12" y1="6" x2="12" y2="10" />
        <line x1="8" y1="6" x2="8" y2="10" />
        <line x1="16" y1="6" x2="16" y2="10" />
      </svg>
    ),
  },
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
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative h-[500px] md:h-[650px]">
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
              KO Clinics empowers independent healthcare providers through
              technology, branding, patient acquisition, product distribution,
              and healthcare infrastructure optimization.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-[#B7B7B7] text-lg leading-relaxed mb-10"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              KO Clinics operates across three integrated business verticals:
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="grid gap-4 mb-10"
            >
              {verticals.map((v, i) => (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="group relative overflow-hidden rounded-2xl p-5 transition-all duration-500 hover:translate-x-1"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(203,161,53,0.08) 0%, rgba(255,255,255,0.03) 100%)",
                    backdropFilter: "blur(16px)",
                    WebkitBackdropFilter: "blur(16px)",
                    border: "1px solid rgba(203,161,53,0.15)",
                    boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-[#CBA135] bg-[#CBA135]/10 transition-colors duration-300 group-hover:bg-[#CBA135]/20">
                      {v.icon}
                    </div>
                    <div>
                      <h3
                        className="text-white text-lg font-semibold mb-1"
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                      >
                        {v.title}
                      </h3>
                      <p
                        className="text-[#B7B7B7] text-sm leading-relaxed"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        {v.description}
                      </p>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-[#CBA135]/40 via-[#CBA135]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </motion.div>
              ))}
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-[#B7B7B7] text-base leading-relaxed mb-10 italic"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Together, these three verticals help clinics increase revenue,
              improve utilization, expand services, and participate in
              India&apos;s fastest-growing healthcare network.
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
