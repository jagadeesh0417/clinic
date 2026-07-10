"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const images = [
  "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=800&q=80",
  "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&q=80",
  "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&q=80",
  "https://images.unsplash.com/photo-1550572017-edd951b55104?w=800&q=80",
];

const categories = [
  {
    name: "Hair Care",
    image: images[0],
    items: ["Hair Growth Solutions", "PRP Kits", "Stem Cell Products", "Hair Supplements", "Hair Serums"],
  },
  {
    name: "Skin Care",
    image: images[1],
    items: ["Medical Grade Cosmeceuticals", "Chemical Peels", "Skin Boosters", "Facial Kits", "Sunscreens", "Cleansers"],
  },
  {
    name: "Anti-Ageing",
    image: images[2],
    items: ["Collagen Supplements", "NAD+", "Skin Rejuvenation Products", "Professional Solutions"],
  },
  {
    name: "Wellness",
    image: images[3],
    items: ["Nutrition Products", "Weight Management", "Health Supplements", "Vitamins", "Longevity Products"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
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
    <section id="products" className="relative py-24 bg-[#100D0A] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-[#C9A14A] font-sans text-sm tracking-[0.2em] uppercase mb-4">
            Product Range
          </span>
          <h2 className="font-displayisplay text-4xl md:text-5xl lg:text-6xl text-white mb-4">
            Premium <span className="text-[#C9A14A]">Products</span>
          </h2>
          <p className="text-white/60 font-sans text-lg max-w-2xl mx-auto">
            Curated healthcare products for clinics and patients
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {categories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group rounded-2xl overflow-hidden bg-[rgba(246,241,232,0.04)] backdrop-blur-xl border border-[rgba(246,241,232,0.08)] transition-all duration-500 hover:scale-[1.02] hover:border-[#C9A14A]/30"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#100D0A]/90 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
                  <h3 className="font-displayisplay text-2xl text-white">
                    {category.name}
                  </h3>
                </div>
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <span
                      key={item}
                      className="inline-block px-3 py-1.5 text-sm font-sans text-white/60 bg-white/5 rounded-full border border-white/10 transition-all duration-300 hover:border-[#C9A14A]/30 hover:text-white hover:bg-white/10"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
