"use client";

import { motion } from "framer-motion";

const images = [
  "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&q=80",
  "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80",
  "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&q=80",
  "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&q=80",
];

const roomTypes = ["Consultation Room", "Procedure Room"];

const visitingProfessionals = [
  "Visiting Doctors",
  "Aesthetic Specialists",
  "Dermatologists",
  "Plastic Surgeons",
  "Dentists",
  "Nutritionists",
  "Physiotherapists",
  "Psychologists",
  "Hair Experts",
  "Corporate Programs",
  "Rental Programs",
  "Revenue Sharing Models",
];

const benefits = [
  "Additional Monthly Income",
  "Improved Space Utilization",
  "Professional Network Expansion",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

export default function ConsultationRental() {
  return (
    <section
      id="space-rental"
      className="relative overflow-hidden py-24 md:py-32 bg-[#050505]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="space-y-16"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center">
            <span className="inline-block text-[#CBA135] font-['Space_Grotesk'] text-sm tracking-[0.2em] uppercase mb-4">
              Vertical Three — Space Rental
            </span>
            <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl lg:text-6xl text-white mb-4">
              Clinic Space <span className="text-[#CBA135]">Rental</span>
            </h2>
            <p className="text-white/50 font-['Space_Grotesk'] text-lg max-w-2xl mx-auto">
              Monetize Your Consultation & Procedure Rooms
            </p>
            <p className="text-white/40 font-['Inter'] text-sm max-w-xl mx-auto mt-3">
              KO Clinics helps clinics maximize unused infrastructure. Partner clinics contribute consultation and procedure rooms utilized by visiting healthcare professionals.
            </p>
          </motion.div>

          {/* Image grid */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {images.map((src, i) => (
              <div
                key={i}
                className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-white/5 border border-white/10"
              >
                <img
                  src={src}
                  alt={`Clinic space ${i + 1}`}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/60 via-transparent to-transparent" />
              </div>
            ))}
          </motion.div>

          {/* Room types */}
          <motion.div variants={itemVariants} className="text-center">
            <h4 className="font-['Space_Grotesk'] text-sm tracking-[0.15em] uppercase text-[#CBA135] mb-6">
              Every Partner Clinic Contributes
            </h4>
            <div className="flex flex-wrap justify-center gap-4">
              {roomTypes.map((room) => (
                <span
                  key={room}
                  className="inline-block px-6 py-3 text-sm font-['Inter'] text-white bg-white/10 rounded-full border border-white/20 backdrop-blur-xl"
                >
                  {room}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Professionals chips */}
          <motion.div
            variants={itemVariants}
            className="rounded-2xl p-8 md:p-10 bg-white/5 backdrop-blur-xl border border-white/10"
          >
            <h4 className="font-['Playfair_Display'] text-xl text-white text-center mb-6">
              Utilized By
            </h4>
            <div className="flex flex-wrap justify-center gap-3">
              {visitingProfessionals.map((prof, i) => (
                <motion.span
                  key={prof}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.05, duration: 0.4 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="inline-block px-4 py-2 text-sm font-['Inter'] text-white/80 bg-[#CBA135]/10 border border-[#CBA135]/20 rounded-full transition-all duration-300 hover:bg-[#CBA135]/20 hover:text-white"
                >
                  {prof}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Benefits */}
          <motion.div
            variants={itemVariants}
            className="text-center"
          >
            <h4 className="font-['Space_Grotesk'] text-sm tracking-[0.15em] uppercase text-[#CBA135] mb-6">
              Partner Benefits
            </h4>
            <div className="flex flex-wrap justify-center gap-3">
              {benefits.map((benefit) => (
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
        </motion.div>
      </div>
    </section>
  );
}
