"use client";

import { motion } from "framer-motion";

export default function FinalCTA() {
  return (
    <section id="cta" className="cta-section">
      <style>{`
        .cta-section {
          position: relative;
          width: 100%;
          padding: 120px 24px;
          background: #100D0A;
          overflow: hidden;
          font-displayamily: var(--font-displayans), sans-serif;
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
          background: rgba(246,241,232,0.04);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(246,241,232,0.08);
        }

        .cta-headline {
          font-displayamily: var(--font-displayisplay), serif;
          font-displayize: clamp(32px, 5vw, 56px);
          font-weight: 700;
          line-height: 1.1;
          color: #ffffff;
          margin: 0 0 12px;
          letter-spacing: -0.02em;
        }

        .cta-headline span {
          color: #C9A14A;
        }

        .cta-description {
          font-displayamily: var(--font-displayans), sans-serif;
          font-displayize: clamp(13px, 1.4vw, 16px);
          font-weight: 400;
          color: #C9A14A;
          letter-spacing: 0.08em;
          margin: 0 0 36px;
          opacity: 0.9;
        }

        .cta-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 16px 40px;
          border: none;
          border-radius: 60px;
          font-displayamily: var(--font-displayans), sans-serif;
          font-displayize: 15px;
          font-weight: 600;
          letter-spacing: 0.02em;
          color: #100D0A;
          background: linear-gradient(135deg, #C9A14A, #e0b84c);
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
          background: linear-gradient(135deg, #e0b84c, #C9A14A, #d4a843);
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

        @media (max-width: 640px) {
          .cta-glass {
            padding: 40px 20px;
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
            Partner with <span>KO Clinics Today</span>
          </motion.h2>

          <motion.p
            className="cta-description"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Join India's growing healthcare ecosystem.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.45 }}
          >
            <a href="/contact" className="cta-btn-primary">
              <span>Become A Partner</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
