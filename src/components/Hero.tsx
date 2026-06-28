"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=1920&q=80",
  "https://images.unsplash.com/photo-1551076805-e1869033e561?w=1920&q=80",
  "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1920&q=80",
  "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=1920&q=80",
];

const STATS = [
  { label: "Clinics Target", value: 5000, suffix: "+" },
  { label: "Cities", value: 100, suffix: "+" },
  { label: "Countries", value: 4, suffix: "+" },
  { label: "AI Enabled Ecosystem", value: 1, suffix: "" },
];

const VERTICALS = [
  { name: "Healthcare Services", icon: "cross" },
  { name: "Quantum Health Products", icon: "hex" },
  { name: "Clinic Space Rental", icon: "building" },
];

function useCountUp(target: number, duration: number, trigger: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;
    let startTime: number | null = null;
    let raf: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) raf = requestAnimationFrame(step);
    };

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, duration, trigger]);

  return count;
}

function useInView(ref: React.RefObject<HTMLElement>) {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [ref]);

  return inView;
}

interface StatItemProps {
  label: string;
  value: number;
  suffix: string;
  trigger: boolean;
}

function StatItem({ label, value, suffix, trigger }: StatItemProps) {
  const count = useCountUp(value, 2, trigger);
  return (
    <motion.div
      className="stat-item"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <span className="stat-value">
        {count}{suffix}
      </span>
      <span className="stat-label">{label}</span>
    </motion.div>
  );
}

interface Particle {
  id: number;
  x: number;
  size: number;
  duration: number;
  delay: number;
}

function Particles() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const items: Particle[] = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      size: Math.random() * 3 + 1.5,
      duration: Math.random() * 10 + 8,
      delay: Math.random() * 6,
    }));
    setParticles(items);
  }, []);

  return (
    <div className="particles-container">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="particle"
          style={{
            left: `${p.x}%`,
            width: p.size,
            height: p.size,
          }}
          animate={{
            y: [0, -120],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}

function VerticalBadge({ name, index }: { name: string; index: number }) {
  return (
    <motion.div
      className="vertical-badge"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.9 + index * 0.15 }}
    >
      <span className="vertical-badge-dot" />
      {name}
    </motion.div>
  );
}

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const statsRef = useRef<HTMLDivElement>(null);
  const statsInView = useInView(statsRef as React.RefObject<HTMLElement>);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">
      <style>{`
        .hero {
          position: relative;
          width: 100%;
          height: 100vh;
          min-height: 750px;
          background: #050505;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          font-family: "Space Grotesk", sans-serif;
        }

        .hero-slideshow {
          position: absolute;
          inset: 0;
        }

        .hero-slideshow img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            135deg,
            rgba(5, 5, 5, 0.88) 0%,
            rgba(5, 5, 5, 0.45) 35%,
            rgba(5, 5, 5, 0.25) 65%,
            rgba(5, 5, 5, 0.88) 100%
          );
          z-index: 1;
        }

        .hero-overlay::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            transparent 0%,
            rgba(5, 5, 5, 0.15) 40%,
            rgba(5, 5, 5, 0.95) 100%
          );
        }

        .hero-content {
          position: relative;
          z-index: 2;
          max-width: 1200px;
          width: 100%;
          padding: 0 24px;
          text-align: center;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 20px;
          border: 1px solid rgba(203, 161, 53, 0.25);
          border-radius: 100px;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #CBA135;
          background: rgba(203, 161, 53, 0.06);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          margin-bottom: 28px;
        }

        .hero-badge-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #CBA135;
          animation: pulse-dot 2s ease-in-out infinite;
        }

        @keyframes pulse-dot {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }

        .hero-headline {
          font-family: "Playfair Display", serif;
          font-size: clamp(36px, 7.5vw, 82px);
          font-weight: 700;
          line-height: 1.05;
          color: #ffffff;
          margin: 0 0 16px;
          letter-spacing: -0.03em;
        }

        .hero-headline-accent {
          background: linear-gradient(135deg, #00D5FF, #7EE8FA, #CBA135);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-subheadline {
          font-family: "Space Grotesk", sans-serif;
          font-size: clamp(14px, 1.8vw, 20px);
          font-weight: 400;
          color: rgba(255, 255, 255, 0.75);
          letter-spacing: 0.06em;
          text-transform: uppercase;
          margin: 0 0 8px;
        }

        .hero-secondary-line {
          font-family: "Inter", sans-serif;
          font-size: clamp(11px, 1.1vw, 14px);
          font-weight: 300;
          color: rgba(255, 255, 255, 0.35);
          letter-spacing: 0.12em;
          text-transform: uppercase;
          margin: 0 0 20px;
        }

        .hero-description {
          font-size: clamp(13px, 1.3vw, 17px);
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.5);
          max-width: 620px;
          margin: 0 auto 36px;
          font-weight: 300;
        }

        .verticals-row {
          display: flex;
          justify-content: center;
          gap: 12px;
          flex-wrap: wrap;
          margin-bottom: 36px;
        }

        .vertical-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 16px;
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 100px;
          font-size: 11px;
          font-weight: 400;
          letter-spacing: 0.05em;
          color: rgba(255, 255, 255, 0.45);
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          transition: all 0.3s ease;
        }

        .vertical-badge:hover {
          border-color: rgba(0, 213, 255, 0.2);
          color: rgba(255, 255, 255, 0.7);
          background: rgba(0, 213, 255, 0.05);
        }

        .vertical-badge-dot {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: #00D5FF;
          opacity: 0.6;
        }

        .hero-buttons {
          display: flex;
          gap: 16px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 16px 40px;
          border: none;
          border-radius: 60px;
          font-family: "Space Grotesk", sans-serif;
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 0.02em;
          color: #050505;
          background: linear-gradient(135deg, #00D5FF, #7EE8FA);
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          position: relative;
          overflow: hidden;
          text-decoration: none;
        }

        .btn-primary::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, #7EE8FA, #00D5FF, #CBA135);
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .btn-primary:hover::before {
          opacity: 1;
        }

        .btn-primary:hover {
          transform: translateY(-2px) scale(1.02);
          box-shadow: 0 20px 40px rgba(0, 213, 255, 0.25);
        }

        .btn-primary span {
          position: relative;
          z-index: 1;
        }

        .btn-primary svg {
          position: relative;
          z-index: 1;
          width: 16px;
          height: 16px;
          transition: transform 0.3s ease;
        }

        .btn-primary:hover svg {
          transform: translateX(4px);
        }

        .btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 16px 40px;
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 60px;
          font-family: "Space Grotesk", sans-serif;
          font-size: 14px;
          font-weight: 500;
          letter-spacing: 0.02em;
          color: rgba(255, 255, 255, 0.85);
          background: rgba(255, 255, 255, 0.04);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          text-decoration: none;
        }

        .btn-secondary:hover {
          border-color: rgba(255, 255, 255, 0.25);
          background: rgba(255, 255, 255, 0.08);
          transform: translateY(-2px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }

        .hero-stats {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: 3;
          display: flex;
          justify-content: center;
          padding: 28px 24px 32px;
          background: linear-gradient(
            to top,
            rgba(5, 5, 5, 0.96) 0%,
            rgba(5, 5, 5, 0.7) 50%,
            transparent 100%
          );
        }

        .hero-stats-inner {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 32px;
          max-width: 1000px;
          width: 100%;
        }

        .stat-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
        }

        .stat-value {
          font-family: "Playfair Display", serif;
          font-size: clamp(26px, 3.2vw, 42px);
          font-weight: 700;
          color: #ffffff;
          letter-spacing: -0.02em;
        }

        .stat-label {
          font-size: clamp(9px, 0.9vw, 12px);
          font-weight: 400;
          color: rgba(255, 255, 255, 0.35);
          text-transform: uppercase;
          letter-spacing: 0.12em;
          text-align: center;
        }

        .particles-container {
          position: absolute;
          inset: 0;
          z-index: 1;
          pointer-events: none;
          overflow: hidden;
        }

        .particle {
          position: absolute;
          bottom: 0;
          border-radius: 50%;
          background: rgba(0, 213, 255, 0.25);
          box-shadow: 0 0 6px rgba(0, 213, 255, 0.1);
        }

        .glass-line {
          position: absolute;
          bottom: 140px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 2;
          width: 1px;
          height: 60px;
          background: linear-gradient(to bottom, rgba(255,255,255,0.3), transparent);
        }

        @media (max-width: 768px) {
          .hero-stats-inner {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }

          .hero-buttons {
            flex-direction: column;
            align-items: center;
          }

          .btn-primary,
          .btn-secondary {
            width: 100%;
            max-width: 320px;
            justify-content: center;
          }

          .glass-line {
            display: none;
          }

          .verticals-row {
            gap: 8px;
          }
        }

        @media (max-width: 480px) {
          .hero-stats-inner {
            grid-template-columns: repeat(2, 1fr);
            gap: 16px;
          }
        }
      `}</style>

      <div className="hero-slideshow">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            src={HERO_IMAGES[currentIndex]}
            alt=""
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] as const }}
          />
        </AnimatePresence>
      </div>

      <div className="hero-overlay" />

      <Particles />

      <div className="hero-content">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as const }}
        >
          <motion.div
            className="hero-badge"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="hero-badge-dot" />
            India&apos;s Premier Healthcare Ecosystem
          </motion.div>

          <motion.h1
            className="hero-headline"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            India&apos;s Largest{" "}
            <span className="hero-headline-accent">AI-Powered</span>
            <br />
            Healthcare Growth Network
          </motion.h1>

          <motion.p
            className="hero-subheadline"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Three Businesses. One Powerful Ecosystem.
          </motion.p>

          <motion.p
            className="hero-secondary-line"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Healthcare Services &bull; Quantum Health Products &bull; Clinic Space Rental
          </motion.p>

          <motion.div
            className="verticals-row"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {VERTICALS.map((v, i) => (
              <VerticalBadge key={v.name} name={v.name} index={i} />
            ))}
          </motion.div>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            KO Clinics enables clinics, hospitals, wellness centres, aesthetic
            practices, and healthcare entrepreneurs to grow through technology,
            branding, patient acquisition, products, and healthcare infrastructure
            solutions.
          </motion.p>
        </motion.div>

        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          <a href="/contact" className="btn-primary">
            <span>Become a Partner</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
          <a href="/services" className="btn-secondary">
            <span>Explore Services</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 16 16 12 12 8" />
              <line x1="8" y1="12" x2="16" y2="12" />
            </svg>
          </a>
        </motion.div>
      </div>

      <div className="glass-line" />

      <div className="hero-stats" ref={statsRef}>
        <div className="hero-stats-inner">
          {STATS.map((stat) => (
            <StatItem
              key={stat.label}
              label={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              trigger={statsInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
