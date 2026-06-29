"use client";

import { motion } from "framer-motion";

const images = [
  "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80",
  "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=800&q=80",
  "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80",
  "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80",
];

const services = [
  {
    title: "Dermatology",
    image: images[0],
    items: ["Acne Treatment", "Pigmentation", "Laser Treatments", "Hydrafacial", "Chemical Peels", "Skin Rejuvenation"],
  },
  {
    title: "Hair",
    image: images[1],
    items: ["Hair Transplant", "PRP Therapy", "GFC", "Exosomes", "Hair Regrowth", "Hair Analysis"],
  },
  {
    title: "Anti-Ageing",
    image: images[2],
    items: ["Botox", "Fillers", "Threads", "Skin Boosters", "Exosomes", "Bio-Regenerative Medicine"],
  },
  {
    title: "Slimming",
    image: images[3],
    items: ["Body Contouring", "Fat Reduction", "Weight Management", "Nutrition Programs"],
  },
  {
    title: "Wellness",
    image: images[3],
    items: ["Preventive Healthcare", "Health Screening", "Longevity Medicine", "Lifestyle Medicine"],
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

export default function Services() {
  return (
    <section id="services" className="relative py-24 bg-[#050505] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-[#CBA135] font-['Space_Grotesk'] text-sm tracking-[0.2em] uppercase mb-4">
            What We Offer
          </span>
          <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl lg:text-6xl text-white mb-4">
            Our <span className="text-[#CBA135]">Services</span>
          </h2>
          <p className="text-white/60 font-['Inter'] text-lg max-w-2xl mx-auto">
            Comprehensive clinical and wellness solutions
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group rounded-2xl overflow-hidden bg-[rgba(255,255,255,0.04)] backdrop-blur-xl border border-[rgba(255,255,255,0.08)] transition-all duration-500 hover:scale-[1.03] hover:border-[#CBA135]/30"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/90 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
                  <h3 className="font-['Playfair_Display'] text-xl text-white">
                    {service.title}
                  </h3>
                </div>
              </div>
              <div className="p-5">
                <div className="flex flex-wrap gap-2">
                  {service.items.map((item) => (
                    <span
                      key={item}
                      className="inline-block px-3 py-1.5 text-sm font-['Inter'] text-white/60 bg-white/5 rounded-full border border-white/10 transition-all duration-300 hover:border-[#CBA135]/30 hover:text-white hover:bg-white/10"
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
