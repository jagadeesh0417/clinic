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

const benefits = [
  { label: "Instant Health Check", value: 92, icon: "⚡" },
  { label: "Risk Prediction", value: 88, icon: "🛡️" },
  { label: "Lifestyle Analysis", value: 78, icon: "📊" },
  { label: "Body Composition", value: 85, icon: "🧬" },
  { label: "Vital Parameters", value: 95, icon: "❤️" },
  { label: "Health Score", value: 82, icon: "🏆" },
  { label: "Preventive Recommendations", value: 76, icon: "📋" },
  { label: "Digital Reports", value: 90, icon: "📱" },
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

function CircularProgress({
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
  const radius = 36;
  const circumference = 2 * Math.PI * radius;
  const progress = useMotionValue(0);
  const smoothProgress = useSpring(progress, { stiffness: 60, damping: 20 });
  const dashOffset = useTransform(
    smoothProgress,
    [0, 100],
    [circumference, circumference * (1 - value / 100)]
  );

  useEffect(() => {
    if (trigger) {
      const controls = animate(progress, value, {
        duration: 2,
        delay: index * 0.1,
        ease: "easeOut",
      });
      return () => controls.stop();
    }
  }, [trigger, value, index]);

  return (
    <motion.div
      variants={itemVariants}
      className="flex flex-col items-center gap-2"
    >
      <div className="relative w-[88px] h-[88px]">
        <svg width="88" height="88" viewBox="0 0 88 88" className="transform -rotate-90">
          <circle
            cx="44"
            cy="44"
            r={radius}
            fill="none"
            stroke="rgba(255,255,255,0.06)"
            strokeWidth="5"
          />
          <motion.circle
            cx="44"
            cy="44"
            r={radius}
            fill="none"
            stroke="url(#cyanGrad)"
            strokeWidth="5"
            strokeLinecap="round"
            strokeDasharray={circumference}
            style={{ strokeDashoffset: dashOffset }}
          />
        </svg>
        <svg width="0" height="0" className="absolute">
          <defs>
            <linearGradient id="cyanGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00D5FF" />
              <stop offset="100%" stopColor="#7EE8FA" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-lg font-bold text-white font-['Space_Grotesk',sans-serif]">
            {value}%
          </span>
        </div>
      </div>
      <span className="text-[11px] text-white/60 text-center leading-tight font-['Inter',sans-serif] uppercase tracking-wider">
        {label}
      </span>
    </motion.div>
  );
}

function BenefitCard({
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
      className="group flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 hover:bg-[#00D5FF]/5 cursor-default"
      style={{
        background: "rgba(255,255,255,0.04)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        border: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div className="w-9 h-9 rounded-lg bg-[#00D5FF]/10 flex items-center justify-center text-lg shrink-0 group-hover:scale-110 transition-transform duration-300">
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
        <div className="absolute inset-0 bg-gradient-to-tr from-[#00D5FF]/20 via-transparent to-transparent z-10" />
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
            <span className="text-xs font-medium text-[#00D5FF] font-['Space_Grotesk',sans-serif] uppercase tracking-[0.15em]">
              AI-Powered Diagnostics
            </span>
            <p className="text-sm text-white/70 mt-1 font-['Inter',sans-serif]">
              Complete health assessment in under 3 minutes
            </p>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute -top-4 -right-4 w-24 h-24 rounded-full border border-[#00D5FF]/20 z-0"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full bg-[#00D5FF]/5 blur-xl z-0"
        animate={{
          scale: [1, 1.15, 1],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

function MetricItem({
  label,
  value,
  index,
  trigger,
}: {
  label: string;
  value: number;
  index: number;
  trigger: boolean;
}) {
  const radius = 28;
  const circumference = 2 * Math.PI * radius;
  const metricProgress = useMotionValue(0);
  const smooth = useSpring(metricProgress, { stiffness: 60, damping: 20 });
  const offset = useTransform(
    smooth,
    [0, 100],
    [circumference, circumference * (1 - value / 100)]
  );
  const displayVal = useTransform(smooth, (v) => Math.round(v));

  useEffect(() => {
    if (trigger) {
      const controls = animate(metricProgress, value, {
        duration: 2,
        delay: index * 0.15,
        ease: "easeOut",
      });
      return () => controls.stop();
    }
  }, [trigger, value, index]);

  return (
    <div className="flex flex-col items-center gap-1.5">
      <div className="relative w-[72px] h-[72px]">
        <svg width="72" height="72" viewBox="0 0 72 72" className="transform -rotate-90">
          <circle
            cx="36"
            cy="36"
            r={radius}
            fill="none"
            stroke="rgba(255,255,255,0.06)"
            strokeWidth="4"
          />
          <motion.circle
            cx="36"
            cy="36"
            r={radius}
            fill="none"
            stroke={index % 2 === 0 ? "#00D5FF" : "#CBA135"}
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray={circumference}
            style={{ strokeDashoffset: offset }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.span className="text-sm font-bold text-white font-['Space_Grotesk',sans-serif]">
            {displayVal}
          </motion.span>
        </div>
      </div>
      <span className="text-[10px] text-white/50 uppercase tracking-wider font-['Inter',sans-serif]">
        {label}
      </span>
    </div>
  );
}

function InfographicsPanel({
  trigger,
}: {
  trigger: boolean;
}) {
  const metrics = [
    { label: "Accuracy", value: 97 },
    { label: "Speed", value: 94 },
    { label: "Coverage", value: 90 },
    { label: "Reliability", value: 96 },
  ];

  return (
    <div
      className="p-6 rounded-2xl"
      style={{
        background: "rgba(255,255,255,0.03)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        border: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <h4 className="text-white/80 text-sm font-semibold mb-5 font-['Space_Grotesk',sans-serif] uppercase tracking-[0.12em]">
        Performance Metrics
      </h4>
      <div className="grid grid-cols-2 gap-5">
        {metrics.map((m, i) => (
          <MetricItem
            key={m.label}
            label={m.label}
            value={m.value}
            index={i}
            trigger={trigger}
          />
        ))}
      </div>
    </div>
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
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#00D5FF]/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-[10%] w-80 h-80 bg-[#CBA135]/5 rounded-full blur-[120px] pointer-events-none" />

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
                  className="inline-flex items-center gap-2 text-[#00D5FF] font-mono text-sm tracking-[0.2em] uppercase"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00D5FF] animate-pulse" />
                  Next-Gen Technology
                </span>
              </motion.div>

              <motion.h2
                variants={itemVariants}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                QScan{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D5FF] via-[#7EE8FA] to-[#00D5FF]">
                  AI Health ATM
                </span>
              </motion.h2>

              <motion.p
                variants={itemVariants}
                className="text-[#B7B7B7] text-lg leading-relaxed mb-8"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Our AI-powered health kiosk delivers comprehensive body analysis,
                vital parameter tracking, and personalized health insights in
                minutes. Walk in, scan, and walk out with your complete digital
                health profile.
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-10"
              >
                {benefits.map((b, i) => (
                  <BenefitCard key={b.label} icon={b.icon} label={b.label} index={i} />
                ))}
              </motion.div>

              <motion.div variants={itemVariants}>
                <InfographicsPanel trigger={isInView} />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
