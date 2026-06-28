"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FEATURES = [
  "100–150 Leads Monthly",
  "Zero Investment",
  "3 Revenue Streams",
  "AI Healthcare Platform",
  "Quantum Health Products",
  "Space Rental Income",
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
      <section id="cta" ref={sectionRef} className="cta-section">
        <style>{`
          .cta-section {
            position: relative;
            width: 100%;
            padding: 120px 24px;
            background: #050505;
            overflow: hidden;
            font-family: "Space Grotesk", sans-serif;
          }

          .cta-overlay {
            position: absolute;
            inset: 0;
            z-index: 1;
            background: linear-gradient(
              135deg,
              rgba(5, 5, 5, 0.95) 0%,
              rgba(5, 5, 5, 0.7) 50%,
              rgba(5, 5, 5, 0.95) 100%
            );
          }

          .cta-glow {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            width: 700px;
            height: 700px;
            background: radial-gradient(circle, rgba(203, 161, 53, 0.1) 0%, transparent 70%);
            z-index: 1;
            pointer-events: none;
          }

          .cta-container {
            position: relative;
            z-index: 2;
            max-width: 900px;
            margin: 0 auto;
            text-align: center;
          }

          .cta-glass {
            padding: 64px 48px;
            border-radius: 24px;
            background: rgba(255, 255, 255, 0.04);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.08);
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
            color: #CBA135;
          }

          .cta-subheadline {
            font-family: "Space Grotesk", sans-serif;
            font-size: clamp(14px, 1.8vw, 18px);
            font-weight: 500;
            color: rgba(255, 255, 255, 0.7);
            letter-spacing: 0.04em;
            margin: 0 0 8px;
          }

          .cta-description {
            font-family: "Inter", sans-serif;
            font-size: clamp(13px, 1.4vw, 16px);
            font-weight: 400;
            color: #CBA135;
            letter-spacing: 0.08em;
            margin: 0 0 36px;
            opacity: 0.9;
          }

          .cta-features {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 10px;
            margin-bottom: 36px;
          }

          .cta-feature-badge {
            display: inline-flex;
            align-items: center;
            padding: 8px 18px;
            border-radius: 100px;
            font-family: "Inter", sans-serif;
            font-size: 12px;
            font-weight: 500;
            color: rgba(255, 255, 255, 0.85);
            background: rgba(255, 255, 255, 0.04);
            border: 1px solid rgba(255, 255, 255, 0.06);
            transition: all 0.3s ease;
          }

          .cta-feature-badge:hover {
            border-color: rgba(203, 161, 53, 0.3);
            background: rgba(203, 161, 53, 0.06);
            box-shadow: 0 0 20px rgba(203, 161, 53, 0.08);
            transform: translateY(-2px);
          }

          .cta-tagline {
            font-family: "Playfair Display", serif;
            font-size: clamp(16px, 2vw, 24px);
            font-weight: 600;
            color: rgba(255, 255, 255, 0.5);
            letter-spacing: 0.04em;
            margin: 0 0 36px;
            font-style: italic;
          }

          .cta-tagline span {
            color: #CBA135;
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
            text-decoration: none;
            transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            position: relative;
            overflow: hidden;
          }

          .cta-btn-primary::before {
            content: "";
            position: absolute;
            inset: 0;
            background: linear-gradient(135deg, #e0b84c, #CBA135, #d4a843);
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
            border: 1px solid rgba(203, 161, 53, 0.25);
            border-radius: 60px;
            font-family: "Space Grotesk", sans-serif;
            font-size: 15px;
            font-weight: 500;
            letter-spacing: 0.02em;
            color: #ffffff;
            background: rgba(203, 161, 53, 0.06);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            cursor: pointer;
            text-decoration: none;
            transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          }

          .cta-btn-secondary:hover {
            border-color: #CBA135;
            background: rgba(203, 161, 53, 0.12);
            transform: translateY(-2px);
            box-shadow: 0 20px 40px rgba(203, 161, 53, 0.15);
          }

          .cta-btn-ghost {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            padding: 16px 40px;
            border: 1px solid rgba(255, 255, 255, 0.15);
            border-radius: 60px;
            font-family: "Space Grotesk", sans-serif;
            font-size: 15px;
            font-weight: 500;
            letter-spacing: 0.02em;
            color: #ffffff;
            background: rgba(255, 255, 255, 0.04);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            cursor: pointer;
            text-decoration: none;
            transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          }

          .cta-btn-ghost:hover {
            border-color: rgba(255, 255, 255, 0.3);
            background: rgba(255, 255, 255, 0.08);
            transform: translateY(-2px);
          }

          .sticky-cta {
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            z-index: 999;
            padding: 12px 24px;
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
            font-size: 14px;
            font-weight: 500;
            color: rgba(255, 255, 255, 0.8);
            letter-spacing: 0.02em;
            white-space: nowrap;
          }

          .sticky-cta-text span {
            color: #CBA135;
          }

          .sticky-cta-buttons {
            display: flex;
            gap: 10px;
          }

          .sticky-btn {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            padding: 10px 24px;
            border: none;
            border-radius: 50px;
            font-family: "Space Grotesk", sans-serif;
            font-size: 13px;
            font-weight: 600;
            cursor: pointer;
            text-decoration: none;
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
            .cta-btn-secondary,
            .cta-btn-ghost {
              width: 100%;
              max-width: 320px;
              justify-content: center;
            }
            .sticky-cta {
              flex-direction: column;
              padding: 10px 16px;
            }
            .sticky-cta-text {
              font-size: 12px;
            }
            .sticky-cta-buttons {
              width: 100%;
            }
            .sticky-btn {
              flex: 1;
              padding: 10px 16px;
              font-size: 12px;
            }
          }
        `}</style>

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
            <motion.h2
              className="cta-headline"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 }}
            >
              Partner Today & <span>Transform Your Clinic's Future</span>
            </motion.h2>

            <motion.p
              className="cta-subheadline"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              No Franchise Fee &bull; No Royalty &bull; No Hidden Costs
            </motion.p>

            <motion.div
              className="cta-features"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.45 }}
            >
              {FEATURES.map((f) => (
                <span key={f} className="cta-feature-badge">
                  {f}
                </span>
              ))}
            </motion.div>

            <motion.p
              className="cta-tagline"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.55 }}
            >
              <span>Grow Your Clinic.</span> We Grow Together.
            </motion.p>

            <motion.div
              className="cta-buttons"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.65 }}
            >
              <a href="/contact" className="cta-btn-primary">
                <span>Become Partner</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
              <a href="#" className="cta-btn-secondary">
                <span>Download Brochure</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
              </a>
              <a href="/contact" className="cta-btn-ghost">
                <span>Schedule Meeting</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <div className={`sticky-cta${showSticky ? " visible" : ""}`}>
        <span className="sticky-cta-text">
          <span>Grow Your Clinic.</span> We Grow Together.
        </span>
        <div className="sticky-cta-buttons">
          <a href="/contact" className="sticky-btn sticky-btn-gold">
            Become Partner
          </a>
          <a href="#" className="sticky-btn sticky-btn-ghost">
            Download Brochure
          </a>
          <a href="/contact" className="sticky-btn sticky-btn-ghost">
            Schedule Meeting
          </a>
        </div>
      </div>
    </>
  );
}
