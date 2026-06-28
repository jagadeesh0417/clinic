"use client";

import { motion } from "framer-motion";

const serviceGroups = [
  {
    title: "Aesthetic & Dermatology",
    image:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80",
    items: ["Dermatology", "Laser Treatments", "Hydra Facial", "Chemical Peels"],
  },
  {
    title: "Advanced Aesthetics",
    image:
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80",
    items: [
      "Hair Transplant",
      "PRP",
      "GFC",
      "Exosomes",
      "Botox",
      "Threads",
      "Fillers",
    ],
  },
  {
    title: "Wellness & Body",
    image:
      "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&q=80",
    items: [
      "Slimming",
      "Body Contouring",
      "Weight Management",
      "Nutrition",
      "Preventive Healthcare",
      "Longevity Medicine",
      "Lifestyle Medicine",
    ],
  },
  {
    title: "General Healthcare",
    image:
      "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=800&q=80",
    items: ["Home Healthcare", "Diagnostics", "Dental", "Wellness"],
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
    <section id="services" className="relative py-24 bg-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-accent font-body text-sm tracking-[0.2em] uppercase mb-4">
            What We Offer
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white mb-4">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-muted font-body text-lg max-w-2xl mx-auto">
            Comprehensive healthcare solutions under one roof
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {serviceGroups.map((group, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group rounded-2xl overflow-hidden glass card-hover flex flex-col"
            >
              <div className="image-container relative h-52 w-full">
                <img
                  src={group.image}
                  alt={group.title}
                  className="w-full h-full object-cover"
                />
                <div className="image-overlay" />
                <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
                  <h3 className="font-heading text-xl text-white">
                    {group.title}
                  </h3>
                </div>
              </div>
              <div className="p-5 flex-1">
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="inline-block px-3 py-1.5 text-sm font-body text-muted bg-white/5 rounded-full border border-white/10 transition-colors duration-300 hover:border-accent/30 hover:text-white"
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
