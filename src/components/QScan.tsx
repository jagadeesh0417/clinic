"use client";

import React, { useRef, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  useMotionValue,
  useSpring,
  animate,
} from "framer-motion";
import { useCountUp } from "@/hooks/useCountUp";
import { Zap, Shield, Activity, Dna, Heart, Trophy, ClipboardList, Smartphone } from "lucide-react";

const features = [
  { label: "Instant Health Check", icon: Zap },
  { label: "AI-Assisted Wellness Insights", icon: Shield },
  { label: "Lifestyle Assessment", icon: Activity },
  { label: "Body Composition", icon: Dna },
  { label: "Vital Parameters", icon: Heart },
  { label: "Health Score", icon: Trophy },
  { label: "Lifestyle Guidance", icon: ClipboardList },
  { label: "Digital Reports", icon: Smartphone },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
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

function AnimatedRing({
  value,
  label,
  trigger,
  index,
}: {
  value: number;
  label: string;
  trigger: boolean;
  index: number;
}) {
  const radius = 32;
  const circumference = 2 * Math.PI * radius;
  const progress = useMotionValue(0);
  const smoothProgress = useSpring(progress, { stiffness: 60, damping: 20 });
  const dashOffset = useTransform(
    smoothProgress,
    [0, 100],
    [circumference, circumference * (1 - value / 100)]
  );
  const displayVal = useTransform(smoothProgress, (v) => Math.round(v));

  const started = useRef(false);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (started.current) return;
    const el = ringRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          animate(progress, value, {
            duration: 2,
            delay: index * 0.1,
            ease: "easeOut" as const,
          });
        }
      },
      { threshold: 0 }
    );

    observer.observe(el);

    if (el.getBoundingClientRect().top < window.innerHeight && !started.current) {
      started.current = true;
      const id = setTimeout(() => {
        animate(progress, value, {
          duration: 2,
          delay: index * 0.1,
          ease: "easeOut" as const,
        });
      }, 100);
      return () => {
        clearTimeout(id);
        observer.disconnect();
      };
    }

    return () => observer.disconnect();
  }, [trigger, value, index, progress]);

  return (
    <motion.div
      variants={itemVariants}
      className="flex flex-col items-center gap-1.5"
      ref={ringRef}
    >
      <div className="relative w-[80px] h-[80px]">
        <svg width="80" height="80" viewBox="0 0 80 80" className="transform -rotate-90">
          <circle
            cx="40"
            cy="40"
            r={radius}
            fill="none"
            stroke="rgba(255,255,255,0.06)"
            strokeWidth="4"
          />
          <motion.circle
            cx="40"
            cy="40"
            r={radius}
            fill="none"
            stroke={index % 2 === 0 ? "#CBA135" : "#E8D48B"}
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray={circumference}
            style={{ strokeDashoffset: dashOffset }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.span className="text-sm font-bold text-white font-['Space_Grotesk',sans-serif]">
            {displayVal}
          </motion.span>
        </div>
      </div>
      <span className="text-[10px] text-white/50 text-center uppercase tracking-wider font-['Inter',sans-serif] leading-tight max-w-[72px]">
        {label}
      </span>
    </motion.div>
  );
}

function FeatureCard({
  icon: Icon,
  label,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  index: number;
}) {
  return (
    <motion.div
      variants={itemVariants}
      className="group flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 hover:bg-[#CBA135]/5 cursor-default"
      style={{
        background: "rgba(255,255,255,0.04)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        border: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div className="w-9 h-9 rounded-lg bg-[#CBA135]/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
        <Icon className="w-4 h-4 text-[#CBA135]" />
      </div>
      <span className="text-sm md:text-base text-white/80 group-hover:text-white transition-colors duration-300 font-['Space_Grotesk',sans-serif]">
        {label}
      </span>
    </motion.div>
  );
}

function ImageShowcase() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <div ref={ref} className="relative w-full h-full min-h-[500px]">
      <motion.div
        style={{ scale, y }}
        className="relative w-full h-full rounded-2xl overflow-hidden bg-[#1A1A1A] flex items-center justify-center border border-white/10"
      >
        <div className="text-center p-8">
          <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-[#CBA135]/10 flex items-center justify-center">
            <svg className="w-8 h-8 text-[#CBA135]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="3" width="20" height="14" rx="2" />
              <line x1="8" y1="21" x2="16" y2="21" />
              <line x1="12" y1="17" x2="12" y2="21" />
            </svg>
          </div>
          <span className="text-[#B7B7B7] text-sm font-['Inter',sans-serif]">
            QScan unit photo — pending
          </span>
        </div>
      </motion.div>
    </div>
  );
}

function HealthScoreMeter({ trigger }: { trigger: boolean }) {
  const score = 86;
  const radius = 60;
  const circumference = 2 * Math.PI * radius;
  const progress = useMotionValue(0);
  const smooth = useSpring(progress, { stiffness: 40, damping: 15 });
  const offset = useTransform(
    smooth,
    [0, 100],
    [circumference, circumference * (1 - score / 100)]
  );
  const { ref, value } = useCountUp({ end: score });

  const startedRef = useRef(false);

  useEffect(() => {
    if (startedRef.current) return;
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !startedRef.current) {
          startedRef.current = true;
          animate(progress, score, {
            duration: 2.5,
            ease: "easeOut" as const,
          });
        }
      },
      { threshold: 0 }
    );

    observer.observe(el);

    if (el.getBoundingClientRect().top < window.innerHeight && !startedRef.current) {
      startedRef.current = true;
      const id = setTimeout(() => {
        animate(progress, score, {
          duration: 2.5,
          ease: "easeOut" as const,
        });
      }, 100);
      return () => {
        clearTimeout(id);
        observer.disconnect();
      };
    }

    return () => observer.disconnect();
  }, [trigger, score, progress, ref]);

  return (
    <motion.div
      variants={itemVariants}
      className="p-6 rounded-2xl text-center"
      style={{
        background: "rgba(255,255,255,0.03)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        border: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <h4 className="text-white/80 text-sm font-semibold mb-4 font-['Space_Grotesk',sans-serif] uppercase tracking-[0.12em]">
        Overall Health Score
      </h4>
      <div className="relative w-[140px] h-[140px] mx-auto">
        <svg width="140" height="140" viewBox="0 0 140 140" className="transform -rotate-90">
          <circle
            cx="70"
            cy="70"
            r={radius}
            fill="none"
            stroke="rgba(255,255,255,0.06)"
            strokeWidth="6"
          />
          <motion.circle
            cx="70"
            cy="70"
            r={radius}
            fill="none"
            stroke="url(#goldGrad)"
            strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray={circumference}
            style={{ strokeDashoffset: offset }}
          />
        </svg>
        <svg width="0" height="0" className="absolute">
          <defs>
            <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#CBA135" />
              <stop offset="100%" stopColor="#E8D48B" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span ref={ref} className="text-3xl font-bold text-white font-['Playfair_Display',serif]">
            {value}
          </span>
          <span className="text-[10px] text-white/40 uppercase tracking-wider font-['Inter',sans-serif]">
            / 100
          </span>
        </div>
      </div>
      <p className="text-xs text-white/50 mt-3 font-['Inter',sans-serif]">
        Excellent wellness rating based on comprehensive assessment
      </p>
      <p className="text-[10px] text-white/30 mt-2 font-['Inter',sans-serif] leading-relaxed max-w-xs mx-auto">
        Not a diagnostic test. Results are indicative and do not replace consultation with a qualified physician.
      </p>
    </motion.div>
  );
}

export default function QScan() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(contentRef, { once: true, margin: "-50px" });

  return (
    <section
      ref={sectionRef}
      id="qscan"
      className="relative bg-[#050505] py-24 md:py-32 overflow-hidden"
    >
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#CBA135]/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-[10%] w-80 h-80 bg-[#E8D48B]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <ImageShowcase />
          </div>

          <div ref={contentRef} className="order-1 lg:order-2">
            <motion.div
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={containerVariants}
            >
              <motion.div variants={itemVariants} className="mb-2">
                <span
                  className="inline-flex items-center gap-2 text-[#CBA135] font-mono text-sm tracking-[0.2em] uppercase"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#CBA135] animate-pulse" />
                  Next-Gen Technology
                </span>
              </motion.div>

              <motion.h2
                variants={itemVariants}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-2"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                QScan{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CBA135] via-[#E8D48B] to-[#CBA135]">
                  AI Health ATM
                </span>
              </motion.h2>

              <motion.p
                variants={itemVariants}
                className="text-[#B7B7B7] text-lg leading-relaxed mb-8 font-['Inter',sans-serif]"
              >
                Comprehensive Wellness Assessment System
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-10"
              >
                {features.map((f, i) => (
                  <FeatureCard key={f.label} icon={f.icon} label={f.label} index={i} />
                ))}
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <HealthScoreMeter trigger={isInView} />

                <motion.div
                  variants={itemVariants}
                  className="p-6 rounded-2xl"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    backdropFilter: "blur(20px)",
                    WebkitBackdropFilter: "blur(20px)",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <h4 className="text-white/80 text-sm font-semibold mb-5 font-['Space_Grotesk',sans-serif] uppercase tracking-[0.12em]">
                    Key Metrics
                  </h4>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { label: "Speed", value: 94 },
                      { label: "Coverage", value: 90 },
                    ].map((m, i) => (
                      <AnimatedRing
                        key={m.label}
                        label={m.label}
                        value={m.value}
                        index={i}
                        trigger={isInView}
                      />
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
