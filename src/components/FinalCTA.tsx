"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const BG_IMAGES = [
  "https://images.unsplash.com/photo-1551076805-e1869033e561?w=800&q=80",
  "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
  "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=800&q=80",
  "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&q=80",
];

const FEATURES = [
  { label: "Zero Investment Model", icon: "Z" },
  { label: "AI Healthcare Platform", icon: "A" },
  { label: "Patient Network", icon: "P" },
  { label: "Marketing Support", icon: "M" },
  { label: "Website Presence", icon: "W" },
  { label: "Branding", icon: "B" },
  { label: "Corporate Tie-ups", icon: "C" },
  { label: "International Expansion", icon: "I" },
];

export default function FinalCTA() {
  const [showSticky, setShowSticky] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      setShowSticky(rect.bottom < 0);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <section
        id="cta"
        ref={sectionRef}
        className="cta-section"
      >
        <style>{`
          .cta-section {
            position: relative;
            width: 100%;
            padding: 100px 24px;
            background: #050505;
            overflow: hidden;
            font-family: "Space Grotesk", sans-serif;
          }

          .cta-montage {
            position: absolute;
            inset: 0;
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 1fr 1fr;
            gap: 4px;
            z-index: 0;
          }

          .cta-montage img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }

          .cta-overlay {
            position: absolute;
            inset: 0;
            z-index: 1;
            background: linear-gradient(
              135deg,
              rgba(5, 5, 5, 0.92) 0%,
              rgba(5, 5, 5, 0.7) 40%,
              rgba(5, 5, 5, 0.6) 60%,
              rgba(5, 5, 5, 0.92) 100%
            );
          }

          .cta-overlay::after {
            content: "";
            position: absolute;
            inset: 0;
            background: linear-gradient(
              to bottom,
              transparent 0%,
              rgba(5, 5, 5, 0.3) 50%,
              rgba(5, 5, 5, 0.95) 100%
            );
          }

          .cta-glow {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            width: 800px;
            height: 800px;
            background: radial-gradient(circle, rgba(0, 213, 255, 0.12) 0%, transparent 70%);
            z-index: 1;
            pointer-events: none;
          }

          .cta-container {
            position: relative;
            z-index: 2;
            max-width: 800px;
            margin: 0 auto;
            text-align: center;
          }

          .cta-glass {
            padding: 60px 48px;
            border-radius: 24px;
            background: rgba(255, 255, 255, 0.04);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.08);
          }

          .cta-tag {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 6px 16px;
            border: 1px solid rgba(203, 161, 53, 0.3);
            border-radius: 100px;
            font-size: 11px;
            font-weight: 500;
            letter-spacing: 0.15em;
            text-transform: uppercase;
            color: #CBA135;
            background: rgba(203, 161, 53, 0.06);
            margin-bottom: 24px;
          }

          .cta-headline {
            font-family: "Playfair Display", serif;
            font-size: clamp(32px, 5vw, 56px);
            font-weight: 700;
            line-height: 1.1;
            color: #ffffff;
            margin: 0 0 12px;
            letter-spacing: -0.02em;
          }

          .cta-headline span {
            background: linear-gradient(135deg, #00D5FF, #7EE8FA, #CBA135);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }

          .cta-subheadline {
            font-family: "Space Grotesk", sans-serif;
            font-size: clamp(14px, 1.6vw, 18px);
            font-weight: 400;
            color: rgba(255, 255, 255, 0.6);
            letter-spacing: 0.06em;
            margin: 0 0 40px;
          }

          .cta-features {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 10px;
            margin-bottom: 40px;
          }

          .cta-feature-badge {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 8px 16px;
            border-radius: 100px;
            font-size: 12px;
            font-weight: 500;
            color: rgba(255, 255, 255, 0.8);
            background: rgba(255, 255, 255, 0.04);
            border: 1px solid rgba(255, 255, 255, 0.06);
            transition: all 0.3s ease;
          }

          .cta-feature-badge:hover {
            border-color: rgba(0, 213, 255, 0.3);
            background: rgba(0, 213, 255, 0.06);
            box-shadow: 0 0 20px rgba(0, 213, 255, 0.08);
            transform: translateY(-2px);
          }

          .cta-feature-icon {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 22px;
            height: 22px;
            border-radius: 50%;
            font-size: 10px;
            font-weight: 700;
            color: #050505;
            background: linear-gradient(135deg, #00D5FF, #7EE8FA);
            flex-shrink: 0;
          }

          .cta-buttons {
            display: flex;
            gap: 16px;
            justify-content: center;
            flex-wrap: wrap;
          }

          .cta-btn-primary {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            padding: 16px 40px;
            border: none;
            border-radius: 60px;
            font-family: "Space Grotesk", sans-serif;
            font-size: 15px;
            font-weight: 600;
            letter-spacing: 0.02em;
            color: #050505;
            background: linear-gradient(135deg, #CBA135, #e0b84c);
            cursor: pointer;
            transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            position: relative;
            overflow: hidden;
          }

          .cta-btn-primary::before {
            content: "";
            position: absolute;
            inset: 0;
            background: linear-gradient(135deg, #e0b84c, #CBA135, #00D5FF);
            opacity: 0;
            transition: opacity 0.4s ease;
          }

          .cta-btn-primary:hover::before {
            opacity: 1;
          }

          .cta-btn-primary:hover {
            transform: translateY(-2px) scale(1.02);
            box-shadow: 0 20px 40px rgba(203, 161, 53, 0.3);
          }

          .cta-btn-primary span,
          .cta-btn-primary svg {
            position: relative;
            z-index: 1;
          }

          .cta-btn-primary svg {
            width: 18px;
            height: 18px;
            transition: transform 0.3s ease;
          }

          .cta-btn-primary:hover svg {
            transform: translateX(4px);
          }

          .cta-btn-secondary {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            padding: 16px 40px;
            border: 1px solid rgba(0, 213, 255, 0.25);
            border-radius: 60px;
            font-family: "Space Grotesk", sans-serif;
            font-size: 15px;
            font-weight: 500;
            letter-spacing: 0.02em;
            color: #ffffff;
            background: rgba(0, 213, 255, 0.06);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            cursor: pointer;
            transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          }

          .cta-btn-secondary:hover {
            border-color: #00D5FF;
            background: rgba(0, 213, 255, 0.12);
            transform: translateY(-2px);
            box-shadow: 0 20px 40px rgba(0, 213, 255, 0.15);
          }

          /* Sticky CTA */
          .sticky-cta {
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            z-index: 999;
            padding: 12px 20px;
            background: rgba(5, 5, 5, 0.92);
            backdrop-filter: blur(24px);
            -webkit-backdrop-filter: blur(24px);
            border-top: 1px solid rgba(255, 255, 255, 0.06);
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 16px;
            transform: translateY(100%);
            transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            font-family: "Space Grotesk", sans-serif;
          }

          .sticky-cta.visible {
            transform: translateY(0);
          }

          .sticky-cta-text {
            font-size: 13px;
            font-weight: 500;
            color: rgba(255, 255, 255, 0.8);
            letter-spacing: 0.02em;
            display: none;
          }

          .sticky-cta-buttons {
            display: flex;
            gap: 10px;
            width: 100%;
          }

          .sticky-btn {
            flex: 1;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            padding: 12px 20px;
            border: none;
            border-radius: 50px;
            font-family: "Space Grotesk", sans-serif;
            font-size: 13px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            letter-spacing: 0.01em;
          }

          .sticky-btn-gold {
            color: #050505;
            background: linear-gradient(135deg, #CBA135, #e0b84c);
          }

          .sticky-btn-gold:hover {
            box-shadow: 0 8px 24px rgba(203, 161, 53, 0.3);
            transform: translateY(-1px);
          }

          .sticky-btn-ghost {
            color: #ffffff;
            background: rgba(255, 255, 255, 0.06);
            border: 1px solid rgba(255, 255, 255, 0.1);
          }

          .sticky-btn-ghost:hover {
            background: rgba(255, 255, 255, 0.1);
          }

          @media (min-width: 640px) {
            .sticky-cta-text {
              display: block;
            }
            .sticky-cta-buttons {
              width: auto;
            }
            .sticky-btn {
              flex: initial;
              padding: 10px 28px;
            }
          }

          @media (max-width: 640px) {
            .cta-glass {
              padding: 40px 20px;
            }
            .cta-features {
              gap: 8px;
            }
            .cta-feature-badge {
              font-size: 11px;
              padding: 6px 12px;
            }
            .cta-buttons {
              flex-direction: column;
              align-items: center;
            }
            .cta-btn-primary,
            .cta-btn-secondary {
              width: 100%;
              max-width: 320px;
              justify-content: center;
            }
          }
        `}</style>

        {/* Image montage grid */}
        <div className="cta-montage">
          {BG_IMAGES.map((src, i) => (
            <motion.img
              key={src}
              src={src}
              alt=""
              initial={{ opacity: 0, scale: 1.1 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
            />
          ))}
        </div>

        <div className="cta-overlay" />
        <div className="cta-glow" />

        <div className="cta-container">
          <motion.div
            className="cta-glass"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <motion.div
              className="cta-tag"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="#CBA135">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              Premium Partnership
            </motion.div>

            <motion.h2
              className="cta-headline"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Ready To Grow <span>Your Clinic?</span>
            </motion.h2>

            <motion.p
              className="cta-subheadline"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.35 }}
            >
              Become a KO Clinics Premium Partner Today
            </motion.p>

            <motion.div
              className="cta-features"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {FEATURES.map((f) => (
                <span key={f.label} className="cta-feature-badge">
                  <span className="cta-feature-icon">{f.icon}</span>
                  {f.label}
                </span>
              ))}
            </motion.div>

            <motion.div
              className="cta-buttons"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.65 }}
            >
              <button className="cta-btn-primary">
                <span>Become Partner</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
              <button className="cta-btn-secondary">
                <span>Schedule Consultation</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Sticky CTA bar */}
      <div className={`sticky-cta${showSticky ? " visible" : ""}`}>
        <span className="sticky-cta-text">
          Become a KO Clinics Premium Partner
        </span>
        <div className="sticky-cta-buttons">
          <button className="sticky-btn sticky-btn-gold">
            Become Partner
          </button>
          <button className="sticky-btn sticky-btn-ghost">
            Schedule Consultation
          </button>
        </div>
      </div>
    </>
  );
}
