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
} from "framer-motion";
import Image from "next/image";

const features = [
  { label: "Instant Health Check", icon: "⚡" },
  { label: "AI Risk Prediction", icon: "🛡️" },
  { label: "Lifestyle Assessment", icon: "📊" },
  { label: "Body Composition", icon: "🧬" },
  { label: "Vital Parameters", icon: "❤️" },
  { label: "Health Score", icon: "🏆" },
  { label: "Preventive Recommendations", icon: "📋" },
  { label: "Digital Reports", icon: "📱" },
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

  useEffect(() => {
    if (trigger) {
      const controls = animate(progress, value, {
        duration: 2,
        delay: index * 0.1,
        ease: "easeOut" as const,
      });
      return () => controls.stop();
    }
  }, [trigger, value, index, progress]);

  return (
    <motion.div
      variants={itemVariants}
      className="flex flex-col items-center gap-1.5"
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
  icon,
  label,
  index,
}: {
  icon: string;
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
      <div className="w-9 h-9 rounded-lg bg-[#CBA135]/10 flex items-center justify-center text-lg shrink-0 group-hover:scale-110 transition-transform duration-300">
        {icon}
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
        className="relative w-full h-full rounded-2xl overflow-hidden"
      >
        <Image
          src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80"
          alt="QScan AI Health ATM"
          fill
          className="object-cover"
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-[#CBA135]/20 via-transparent to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#050505]/80 z-10" />

        <motion.div
          className="absolute bottom-6 left-6 right-6 z-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div
            className="px-5 py-4 rounded-xl"
            style={{
              background: "rgba(255,255,255,0.04)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <span className="text-xs font-medium text-[#CBA135] font-['Space_Grotesk',sans-serif] uppercase tracking-[0.15em]">
              AI-Powered Diagnostics
            </span>
            <p className="text-sm text-white/70 mt-1 font-['Inter',sans-serif]">
              Complete health assessment in under 3 minutes
            </p>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute -top-4 -right-4 w-24 h-24 rounded-full border border-[#CBA135]/20 z-0"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full bg-[#CBA135]/5 blur-xl z-0"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
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
  const displayScore = useTransform(smooth, (v) => Math.round(v));

  useEffect(() => {
    if (trigger) {
      const controls = animate(progress, score, {
        duration: 2.5,
        ease: "easeOut" as const,
      });
      return () => controls.stop();
    }
  }, [trigger, score, progress]);

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
          <motion.span className="text-3xl font-bold text-white font-['Playfair_Display',serif]">
            {displayScore}
          </motion.span>
          <span className="text-[10px] text-white/40 uppercase tracking-wider font-['Inter',sans-serif]">
            / 100
          </span>
        </div>
      </div>
      <p className="text-xs text-white/50 mt-3 font-['Inter',sans-serif]">
        Excellent wellness rating based on comprehensive assessment
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
                      { label: "Accuracy", value: 97 },
                      { label: "Speed", value: 94 },
                      { label: "Coverage", value: 90 },
                      { label: "Reliability", value: 96 },
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
