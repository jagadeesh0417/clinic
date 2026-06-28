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

const features = [
  "Healthcare Services",
  "Quantum Health Products",
  "Consultation Space Rental",
  "AI Healthcare Solutions",
  "Patient Acquisition",
  "Digital Marketing",
  "Business Development",
  "Equipment Support",
  "Healthcare Networking",
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
        <div className="absolute inset-0 bg-gradient-to-tr from-[#00D5FF]/10 via-transparent to-transparent z-10 pointer-events-none" />
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
      <motion.span className="text-4xl md:text-5xl font-bold text-[#00D5FF] tabular-nums">
        {displayValue}
      </motion.span>
      <span className="text-2xl md:text-3xl font-bold text-[#00D5FF]">
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
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-[#00D5FF]/5 rounded-full blur-[120px] pointer-events-none" />
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
                className="inline-block text-[#00D5FF] font-mono text-sm tracking-[0.2em] uppercase"
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
              A Modern{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D5FF] to-[#CBA135]">
                Healthcare
              </span>{" "}
              Ecosystem
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-[#B7B7B7] text-lg leading-relaxed mb-6"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              KO Clinics is a modern healthcare ecosystem designed to empower
              independent clinics and healthcare providers through technology,
              strategic partnerships, product distribution, and business
              expansion opportunities.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-[#B7B7B7] text-lg leading-relaxed mb-10"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              We help healthcare providers increase revenue, improve patient
              engagement, expand service offerings, and participate in India&apos;s
              growing healthcare economy.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-3 mb-12"
            >
              {features.map((feature) => (
                <div
                  key={feature}
                  className="group px-4 py-3 rounded-xl transition-all duration-300 hover:bg-[#00D5FF]/5"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    backdropFilter: "blur(12px)",
                    WebkitBackdropFilter: "blur(12px)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#00D5FF] shrink-0 group-hover:scale-150 transition-transform duration-300" />
                    <span
                      className="text-sm md:text-base text-white/80 group-hover:text-white transition-colors duration-300"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      {feature}
                    </span>
                  </div>
                </div>
              ))}
            </motion.div>

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
