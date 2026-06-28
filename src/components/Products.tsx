"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const SHOWCASE_IMAGES = [
  "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=800&q=80",
  "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&q=80",
  "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&q=80",
  "https://images.unsplash.com/photo-1570194065650-d99fb4ee8e39?w=800&q=80",
  "https://images.unsplash.com/photo-1550572017-edd951b55104?w=800&q=80",
];

const PRODUCT_CATEGORIES = [
  { name: "Hair Care", price: "₹2,499", tag: "Best Seller", items: "12 Products" },
  { name: "PRP Kits", price: "₹4,999", tag: "Premium", items: "8 Products" },
  { name: "Stem Cell Products", price: "₹12,999", tag: "Advanced", items: "6 Products" },
  { name: "Supplements", price: "₹1,999", tag: "Essential", items: "20 Products" },
  { name: "Cosmeceuticals", price: "₹3,499", tag: "Clinical", items: "15 Products" },
  { name: "Peels", price: "₹2,999", tag: "Professional", items: "10 Products" },
  { name: "Boosters", price: "₹3,999", tag: "Concentrated", items: "7 Products" },
  { name: "Anti-ageing", price: "₹8,999", tag: "Luxury", items: "9 Products" },
  { name: "NAD+", price: "₹15,999", tag: "Therapy", items: "4 Products" },
  { name: "Collagen", price: "₹2,299", tag: "Restorative", items: "11 Products" },
  { name: "Skin Care", price: "₹2,799", tag: "Daily Regimen", items: "18 Products" },
  { name: "Wellness Products", price: "₹1,499", tag: "Holistic", items: "14 Products" },
];

const WHOLESALE_BENEFITS = [
  { title: "Bulk Pricing", desc: "Up to 40% off on bulk orders across all categories" },
  { title: "Free Shipping", desc: "Free pan-India shipping on orders above ₹5,000" },
  { title: "Priority Dispatch", desc: "Same-day dispatch for all verified partner clinics" },
  { title: "Exclusive Access", desc: "Early access to new product launches and formulations" },
];

export default function Products() {
  const [activeImage, setActiveImage] = useState(0);

  return (
    <section id="products" className="products">
      <style>{`
        .products {
          background: #050505;
          padding: 100px 24px;
          font-family: "Inter", sans-serif;
          overflow: hidden;
        }

        .products-inner {
          max-width: 1280px;
          margin: 0 auto;
        }

        .products-header {
          text-align: center;
          margin-bottom: 64px;
        }

        .products-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 20px;
          border: 1px solid rgba(203, 161, 53, 0.3);
          border-radius: 100px;
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #CBA135;
          background: rgba(203, 161, 53, 0.06);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          margin-bottom: 24px;
        }

        .products-title {
          font-family: "Playfair Display", serif;
          font-size: clamp(36px, 6vw, 64px);
          font-weight: 700;
          color: #ffffff;
          margin: 0 0 16px;
          letter-spacing: -0.03em;
        }

        .products-title-accent {
          background: linear-gradient(135deg, #CBA135, #00D5FF);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .products-subtitle {
          font-size: clamp(14px, 1.4vw, 18px);
          color: rgba(255, 255, 255, 0.55);
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.7;
        }

        .showcase {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 16px;
          margin-bottom: 80px;
        }

        .showcase-main {
          position: relative;
          border-radius: 16px;
          overflow: hidden;
          height: 400px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.06);
        }

        .showcase-main img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .showcase-main-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(5,5,5,0.6), transparent, rgba(5,5,5,0.4));
        }

        .showcase-side {
          display: grid;
          grid-template-rows: 1fr 1fr;
          gap: 16px;
        }

        .showcase-side-item {
          position: relative;
          border-radius: 16px;
          overflow: hidden;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.06);
        }

        .showcase-side-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .showcase-side-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(5,5,5,0.5), transparent);
        }

        .showcase-thumbs {
          display: flex;
          gap: 10px;
          margin-top: 16px;
          justify-content: center;
        }

        .showcase-thumb {
          width: 56px;
          height: 56px;
          border-radius: 12px;
          overflow: hidden;
          cursor: pointer;
          border: 2px solid transparent;
          transition: all 0.3s ease;
          opacity: 0.5;
        }

        .showcase-thumb.active {
          border-color: #00D5FF;
          opacity: 1;
          box-shadow: 0 0 20px rgba(0, 213, 255, 0.15);
        }

        .showcase-thumb img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .products-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          margin-bottom: 80px;
        }

        .product-card {
          position: relative;
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 20px;
          padding: 32px 24px;
          cursor: pointer;
          transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          overflow: hidden;
        }

        .product-card::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(0, 213, 255, 0.05), rgba(203, 161, 53, 0.05));
          opacity: 0;
          transition: opacity 0.5s ease;
          border-radius: 20px;
        }

        .product-card:hover::before {
          opacity: 1;
        }

        .product-card:hover {
          transform: translateY(-8px) scale(1.02);
          border-color: rgba(0, 213, 255, 0.2);
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.4), 0 0 40px rgba(0, 213, 255, 0.06);
        }

        .product-card::after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(0, 213, 255, 0.3), transparent);
          opacity: 0;
          transition: opacity 0.5s ease;
        }

        .product-card:hover::after {
          opacity: 1;
        }

        .product-card-glow {
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle at 50% 50%, rgba(0, 213, 255, 0.03), transparent 60%);
          opacity: 0;
          transition: opacity 0.5s ease;
          pointer-events: none;
        }

        .product-card:hover .product-card-glow {
          opacity: 1;
        }

        .product-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 4px 14px;
          border-radius: 100px;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 16px;
          position: relative;
          z-index: 1;
        }

        .product-badge-premium {
          background: linear-gradient(135deg, rgba(203, 161, 53, 0.15), rgba(203, 161, 53, 0.05));
          border: 1px solid rgba(203, 161, 53, 0.2);
          color: #CBA135;
        }

        .product-badge-clinical {
          background: linear-gradient(135deg, rgba(0, 213, 255, 0.12), rgba(0, 213, 255, 0.04));
          border: 1px solid rgba(0, 213, 255, 0.2);
          color: #7EE8FA;
        }

        .product-category {
          font-family: "Playfair Display", serif;
          font-size: 22px;
          font-weight: 700;
          color: #ffffff;
          margin: 0 0 8px;
          position: relative;
          z-index: 1;
        }

        .product-items {
          font-size: 13px;
          color: rgba(255, 255, 255, 0.35);
          margin: 0 0 20px;
          position: relative;
          z-index: 1;
        }

        .product-price {
          font-family: "Space Grotesk", sans-serif;
          font-size: 28px;
          font-weight: 700;
          color: #ffffff;
          margin: 0 0 4px;
          position: relative;
          z-index: 1;
        }

        .product-price-accent {
          font-family: "Space Grotesk", sans-serif;
          font-size: 28px;
          font-weight: 700;
          background: linear-gradient(135deg, #00D5FF, #CBA135);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .product-price-label {
          font-size: 11px;
          color: rgba(255, 255, 255, 0.3);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          position: relative;
          z-index: 1;
        }

        .product-card-divider {
          height: 1px;
          background: linear-gradient(90deg, rgba(255,255,255,0.06), rgba(0,213,255,0.15), rgba(255,255,255,0.06));
          margin: 20px 0;
          position: relative;
          z-index: 1;
        }

        .product-card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          position: relative;
          z-index: 1;
        }

        .product-card-footer span {
          font-size: 12px;
          color: rgba(255, 255, 255, 0.3);
          letter-spacing: 0.05em;
        }

        .product-card-arrow {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          border: 1px solid rgba(255, 255, 255, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.4s ease;
          color: rgba(255, 255, 255, 0.3);
        }

        .product-card:hover .product-card-arrow {
          border-color: #00D5FF;
          color: #00D5FF;
          background: rgba(0, 213, 255, 0.1);
          box-shadow: 0 0 20px rgba(0, 213, 255, 0.1);
        }

        .wholesale {
          background: linear-gradient(135deg, rgba(0, 213, 255, 0.03), rgba(203, 161, 53, 0.03));
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 24px;
          padding: 48px;
          position: relative;
          overflow: hidden;
        }

        .wholesale::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(203, 161, 53, 0.4), rgba(0, 213, 255, 0.4), transparent);
        }

        .wholesale-header {
          text-align: center;
          margin-bottom: 40px;
        }

        .wholesale-title {
          font-family: "Playfair Display", serif;
          font-size: clamp(28px, 3.5vw, 40px);
          font-weight: 700;
          color: #ffffff;
          margin: 0 0 12px;
        }

        .wholesale-title-accent {
          background: linear-gradient(135deg, #CBA135, #00D5FF);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .wholesale-subtitle {
          font-size: 16px;
          color: rgba(255, 255, 255, 0.5);
          margin: 0;
        }

        .wholesale-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }

        .wholesale-card {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.04);
          border-radius: 16px;
          padding: 24px;
          text-align: center;
          transition: all 0.4s ease;
        }

        .wholesale-card:hover {
          border-color: rgba(0, 213, 255, 0.15);
          background: rgba(0, 213, 255, 0.03);
          transform: translateY(-4px);
        }

        .wholesale-card-icon {
          width: 48px;
          height: 48px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 16px;
          font-size: 20px;
          background: linear-gradient(135deg, rgba(0, 213, 255, 0.1), rgba(203, 161, 53, 0.1));
          border: 1px solid rgba(0, 213, 255, 0.1);
        }

        .wholesale-card h4 {
          font-family: "Space Grotesk", sans-serif;
          font-size: 16px;
          font-weight: 600;
          color: #ffffff;
          margin: 0 0 8px;
        }

        .wholesale-card p {
          font-size: 13px;
          color: rgba(255, 255, 255, 0.45);
          margin: 0;
          line-height: 1.6;
        }

        @media (max-width: 1024px) {
          .products-grid {
            grid-template-columns: repeat(3, 1fr);
          }
          .wholesale-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .products {
            padding: 60px 16px;
          }

          .showcase {
            grid-template-columns: 1fr;
          }

          .showcase-main {
            height: 280px;
          }

          .showcase-side {
            display: none;
          }

          .products-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 14px;
          }

          .product-card {
            padding: 24px 18px;
          }

          .product-category {
            font-size: 18px;
          }

          .product-price,
          .product-price-accent {
            font-size: 22px;
          }

          .wholesale {
            padding: 32px 20px;
          }

          .wholesale-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 480px) {
          .products-grid {
            grid-template-columns: 1fr;
          }

          .showcase-thumbs {
            gap: 8px;
          }

          .showcase-thumb {
            width: 44px;
            height: 44px;
          }
        }
      `}</style>

      <div className="products-inner">
        <motion.div
          className="products-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as const }}
        >
          <div className="products-badge">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#CBA135" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
            Premium Product Range
          </div>

          <h2 className="products-title">
            Curated <span className="products-title-accent">Clinical-Grade</span>
            <br />
            Product Portfolio
          </h2>

          <p className="products-subtitle">
            Wholesale pricing on 200+ dermatology and aesthetic products from world-class manufacturers
          </p>
        </motion.div>

        <motion.div
          className="showcase"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <div className="showcase-main">
            <motion.img
              key={activeImage}
              src={SHOWCASE_IMAGES[activeImage]}
              alt=""
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as const }}
            />
            <div className="showcase-main-overlay" />
          </div>

          <div className="showcase-side">
            {[1, 2].map((idx) => {
              const imgIdx = (activeImage + idx) % SHOWCASE_IMAGES.length;
              return (
                <div key={idx} className="showcase-side-item">
                  <img src={SHOWCASE_IMAGES[imgIdx]} alt="" />
                  <div className="showcase-side-overlay" />
                </div>
              );
            })}
          </div>
        </motion.div>

        <div className="showcase-thumbs">
          {SHOWCASE_IMAGES.map((img, idx) => (
            <div
              key={idx}
              className={`showcase-thumb${idx === activeImage ? " active" : ""}`}
              onClick={() => setActiveImage(idx)}
            >
              <img src={img} alt="" />
            </div>
          ))}
        </div>

        <div className="products-grid">
          {PRODUCT_CATEGORIES.map((product, idx) => (
            <motion.div
              key={product.name}
              className="product-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.06 }}
            >
              <div className="product-card-glow" />
              <div className={`product-badge ${idx % 2 === 0 ? "product-badge-premium" : "product-badge-clinical"}`}>
                {product.tag}
              </div>
              <h3 className="product-category">{product.name}</h3>
              <p className="product-items">{product.items}</p>
              <div className="product-price">
                From{" "}
                <span className="product-price-accent">{product.price}</span>
              </div>
              <p className="product-price-label">Wholesale price per unit</p>
              <div className="product-card-divider" />
              <div className="product-card-footer">
                <span>Partner pricing</span>
                <div className="product-card-arrow">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="wholesale"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="wholesale-header">
            <h3 className="wholesale-title">
              <span className="wholesale-title-accent">Wholesale</span> Benefits for Partners
            </h3>
            <p className="wholesale-subtitle">
              Exclusive pricing and perks reserved for KO Clinics network partners
            </p>
          </div>

          <div className="wholesale-grid">
            {WHOLESALE_BENEFITS.map((benefit, idx) => (
              <motion.div
                key={benefit.title}
                className="wholesale-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div className="wholesale-card-icon">
                  {idx === 0 && (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00D5FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="12" y1="1" x2="12" y2="23" />
                      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                    </svg>
                  )}
                  {idx === 1 && (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#CBA135" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                    </svg>
                  )}
                  {idx === 2 && (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00D5FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  )}
                  {idx === 3 && (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#CBA135" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                  )}
                </div>
                <h4>{benefit.title}</h4>
                <p>{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
