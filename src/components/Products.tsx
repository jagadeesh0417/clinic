"use client";

import { motion } from "framer-motion";

const images = [
  "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=800&q=80",
  "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&q=80",
  "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&q=80",
  "https://images.unsplash.com/photo-1550572017-edd951b55104?w=800&q=80",
];

const productCategories = [
  { name: "Hair Care", tag: "Premium" },
  { name: "Supplements", tag: "Essential" },
  { name: "PRP Products", tag: "Clinical" },
  { name: "Collagen", tag: "Restorative" },
  { name: "NAD+", tag: "Therapy" },
  { name: "Stem Cell Solutions", tag: "Advanced" },
  { name: "Anti-ageing Products", tag: "Luxury" },
  { name: "Skin Care", tag: "Daily Regimen" },
  { name: "Cosmeceuticals", tag: "Clinical" },
  { name: "Wellness Products", tag: "Holistic" },
  { name: "Nutrition Products", tag: "Daily" },
  { name: "Wellness Products", tag: "Holistic" },
];

const partnerBenefits = [
  "30% Product Margin",
  "Wholesale Pricing",
  "Retail Branding Support",
  "Product Training",
  "Marketing Assistance",
  "Display Materials",
  "Digital Promotions",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export default function Products() {
  return (
    <section id="products" className="relative py-24 bg-[#050505] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-[#CBA135] font-['Space_Grotesk'] text-sm tracking-[0.2em] uppercase mb-4">
            KO Clinics Vertical
          </span>
          <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl lg:text-6xl text-white mb-4">
            Quantum <span className="text-[#CBA135]">Health</span> Products
          </h2>
          <p className="text-white/60 font-['Space_Grotesk'] text-lg max-w-2xl mx-auto mb-3">
            30% Product Margin for Partner Clinics
          </p>
          <p className="text-white/40 font-['Inter'] text-sm max-w-xl mx-auto">
            Every KO Clinics partner clinic receives a dedicated Quantum Health Counter. Patients can purchase premium healthcare products directly inside the clinic.
          </p>
        </motion.div>

        {/* Image grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {images.map((src, i) => (
            <div
              key={i}
              className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-white/5 border border-white/10"
            >
              <img
                src={src}
                alt=""
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/60 via-transparent to-transparent" />
            </div>
          ))}
        </motion.div>

        {/* Product categories */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-16"
        >
          {productCategories.map((product, index) => (
            <motion.div
              key={`${product.name}-${index}`}
              variants={itemVariants}
              className="group rounded-2xl p-6 bg-white/5 backdrop-blur-xl border border-white/10 transition-all duration-500 hover:scale-[1.03] hover:border-[#CBA135]/30"
            >
              <span className="inline-block px-3 py-1 text-[10px] font-['Space_Grotesk'] uppercase tracking-wider text-[#CBA135] bg-white/10 border border-[#CBA135]/20 rounded-full mb-3">
                {product.tag}
              </span>
              <h3 className="font-['Playfair_Display'] text-xl text-white mb-1">
                {product.name}
              </h3>
              <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs font-['Inter'] text-white/40">Partner pricing</span>
                <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/30 transition-all duration-300 group-hover:border-[#CBA135] group-hover:text-[#CBA135] group-hover:bg-[#CBA135]/10">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Partner Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <h4 className="font-['Space_Grotesk'] text-sm tracking-[0.15em] uppercase text-[#CBA135] mb-6">
            Partner Benefits
          </h4>
          <div className="flex flex-wrap justify-center gap-3">
            {partnerBenefits.map((benefit) => (
              <span
                key={benefit}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-['Inter'] text-white/70 bg-white/5 rounded-full border border-white/10 transition-all duration-300 hover:border-[#CBA135]/40 hover:text-[#CBA135] hover:bg-white/10"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-3.5 w-3.5 flex-shrink-0"
                  fill="none"
                  stroke="#CBA135"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                {benefit}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
