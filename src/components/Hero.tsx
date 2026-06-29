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
  { top: "5000+", bottom: "Clinics" },
  { top: "100+", bottom: "Cities" },
  { top: "4+", bottom: "Countries" },
  { top: "AI", bottom: "Enabled" },
];

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
}

function CanvasParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const particles: Particle[] = Array.from({ length: 50 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 2.5 + 0.5,
      speedY: -(Math.random() * 0.5 + 0.1),
      speedX: (Math.random() - 0.5) * 0.2,
      opacity: Math.random() * 0.4 + 0.1,
    }));

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const p of particles) {
        p.y += p.speedY;
        p.x += p.speedX;
        if (p.y < -10) {
          p.y = canvas.height + 10;
          p.x = Math.random() * canvas.width;
        }
        if (p.x < -10) p.x = canvas.width + 10;
        if (p.x > canvas.width + 10) p.x = -10;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(203, 161, 53, ${p.opacity})`;
        ctx.fill();
      }
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 1,
        pointerEvents: "none",
      }}
    />
  );
}

function StatCard({
  top,
  bottom,
  index,
}: {
  top: string;
  bottom: string;
  index: number;
}) {
  return (
    <motion.div
      className="stat-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
    >
      <span className="stat-top">{top}</span>
      <span className="stat-bottom">{bottom}</span>
    </motion.div>
  );
}

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

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
            rgba(5, 5, 5, 0.92) 0%,
            rgba(5, 5, 5, 0.5) 35%,
            rgba(5, 5, 5, 0.3) 65%,
            rgba(5, 5, 5, 0.92) 100%
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
            rgba(5, 5, 5, 0.2) 40%,
            rgba(5, 5, 5, 0.95) 100%
          );
        }

        .hero-content {
          position: relative;
          z-index: 2;
          max-width: 1100px;
          width: 100%;
          padding: 0 24px;
          text-align: center;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 20px;
          border: 1px solid rgba(203, 161, 53, 0.3);
          border-radius: 100px;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #CBA135;
          background: rgba(203, 161, 53, 0.08);
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
          margin: 0 0 24px;
          letter-spacing: -0.03em;
        }

        .hero-headline-accent {
          background: linear-gradient(135deg, #CBA135, #E8C860, #CBA135);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-lines {
          margin: 0 0 16px;
        }

        .hero-line {
          font-family: "Playfair Display", serif;
          font-size: clamp(16px, 2vw, 26px);
          font-weight: 400;
          line-height: 1.4;
          color: rgba(255, 255, 255, 0.8);
          margin: 0;
          letter-spacing: -0.01em;
        }

        .hero-line:nth-child(2) {
          font-size: clamp(18px, 2.3vw, 30px);
          color: rgba(255, 255, 255, 0.9);
        }

        .hero-line:nth-child(3) {
          font-size: clamp(20px, 2.6vw, 34px);
          color: #ffffff;
        }

        .hero-line-final {
          font-family: "Playfair Display", serif;
          font-size: clamp(22px, 3vw, 40px);
          font-weight: 600;
          color: #CBA135;
          margin: 4px 0 0;
          letter-spacing: -0.01em;
        }

        .hero-description {
          font-size: clamp(13px, 1.3vw, 17px);
          line-height: 1.7;
          color: #B7B7B7;
          max-width: 620px;
          margin: 0 auto 36px;
          font-weight: 300;
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
          background: linear-gradient(135deg, #CBA135, #E8C860);
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          text-decoration: none;
        }

        .btn-primary:hover {
          transform: translateY(-2px) scale(1.02);
          box-shadow: 0 20px 40px rgba(203, 161, 53, 0.3);
        }

        .btn-primary svg {
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
          border: 1px solid rgba(203, 161, 53, 0.2);
          border-radius: 60px;
          font-family: "Space Grotesk", sans-serif;
          font-size: 14px;
          font-weight: 500;
          letter-spacing: 0.02em;
          color: #ffffff;
          background: rgba(203, 161, 53, 0.06);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          text-decoration: none;
        }

        .btn-secondary:hover {
          border-color: rgba(203, 161, 53, 0.4);
          background: rgba(203, 161, 53, 0.12);
          transform: translateY(-2px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }

        .btn-tertiary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 16px 40px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 60px;
          font-family: "Space Grotesk", sans-serif;
          font-size: 14px;
          font-weight: 400;
          letter-spacing: 0.02em;
          color: rgba(255, 255, 255, 0.45);
          background: transparent;
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          text-decoration: none;
        }

        .btn-tertiary:hover {
          color: rgba(255, 255, 255, 0.7);
          border-color: rgba(255, 255, 255, 0.15);
        }

        .btn-tertiary svg {
          width: 16px;
          height: 16px;
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
          gap: 20px;
          max-width: 1000px;
          width: 100%;
        }

        .stat-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
          padding: 18px 12px;
          border: 1px solid rgba(203, 161, 53, 0.08);
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.02);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
        }

        .stat-top {
          font-family: "Playfair Display", serif;
          font-size: clamp(22px, 2.8vw, 36px);
          font-weight: 700;
          color: #CBA135;
          letter-spacing: -0.02em;
        }

        .stat-bottom {
          font-size: clamp(9px, 0.9vw, 12px);
          font-weight: 400;
          color: rgba(255, 255, 255, 0.4);
          text-transform: uppercase;
          letter-spacing: 0.12em;
          text-align: center;
        }

        @media (max-width: 768px) {
          .hero-stats-inner {
            grid-template-columns: repeat(2, 1fr);
            gap: 12px;
          }

          .hero-buttons {
            flex-direction: column;
            align-items: center;
          }

          .btn-primary,
          .btn-secondary,
          .btn-tertiary {
            width: 100%;
            max-width: 320px;
            justify-content: center;
          }
        }

        @media (max-width: 480px) {
          .hero-stats-inner {
            grid-template-columns: repeat(2, 1fr);
            gap: 10px;
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
            transition={{
              duration: 1.2,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          />
        </AnimatePresence>
      </div>

      <div className="hero-overlay" />

      <CanvasParticles />

      <div className="hero-content">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          <motion.div
            className="hero-badge"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="hero-badge-dot" />
            KO Clinics Network
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
            Clinic Network
          </motion.h1>

          <motion.div
            className="hero-lines"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <p className="hero-line">One Network.</p>
            <p className="hero-line">Thousands of Clinics.</p>
            <p className="hero-line-final">Unlimited Growth.</p>
          </motion.div>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            KO Clinics is a global healthcare aggregator connecting aesthetic
            clinics, hospitals, dermatology centres, wellness facilities,
            diagnostic centres and specialist doctors under one trusted
            international brand. KO Clinics empowers healthcare providers
            through technology, patient acquisition, AI healthcare solutions,
            branding, digital marketing and operational support with minimal
            investment.
          </motion.p>
        </motion.div>

        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <a href="/contact" className="btn-primary">
            <span>Become a Partner</span>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
          <a href="/partners" className="btn-secondary">
            <span>Find a Clinic</span>
          </a>
          <a href="/services" className="btn-tertiary">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
            Explore Services
          </a>
        </motion.div>
      </div>

      <div className="hero-stats">
        <div className="hero-stats-inner">
          {STATS.map((stat, i) => (
            <StatCard
              key={stat.bottom}
              top={stat.top}
              bottom={stat.bottom}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
