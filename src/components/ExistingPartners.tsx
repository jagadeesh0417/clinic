"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface Partner {
  name: string;
  location: string;
  category: string;
  image: string;
  services: string[];
}

const categories = [
  "All",
  "Dermatology Clinics",
  "Dental Clinics",
  "Hospitals",
  "Hair Centres",
  "Wellness Centres",
  "Diagnostic Centres",
  "Aesthetic Clinics",
  "Polyclinics",
];

const images = [
  "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&q=80",
  "https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?w=600&q=80",
  "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=600&q=80",
  "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=600&q=80",
  "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=600&q=80",
  "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80",
];

const partners: Partner[] = [
  { name: "Skin Care Centre", location: "Bangalore", category: "Dermatology Clinics", image: images[0], services: ["Laser Treatments", "Acne Therapy", "Skin Rejuvenation"] },
  { name: "Dermacare Clinic", location: "Mumbai", category: "Dermatology Clinics", image: images[1], services: ["Hair Restoration", "Scar Revision", "Anti-Aging"] },
  { name: "Dental World", location: "Mumbai", category: "Dental Clinics", image: images[2], services: ["Cosmetic Dentistry", "Root Canal", "Implants"] },
  { name: "Smile Studio", location: "Delhi", category: "Dental Clinics", image: images[3], services: ["Teeth Whitening", "Braces", "Veneers"] },
  { name: "Smile Craft", location: "Pune", category: "Dental Clinics", image: images[4], services: ["Pediatric Dentistry", "Scaling", "Crowns"] },
  { name: "City Hospital", location: "Hyderabad", category: "Hospitals", image: images[5], services: ["Multi-Specialty", "Emergency Care", "Surgical"] },
  { name: "Apollo Health City", location: "Chennai", category: "Hospitals", image: images[0], services: ["Cardiology", "Neurology", "Orthopedics"] },
  { name: "Fortis Wellness", location: "Delhi", category: "Hospitals", image: images[1], services: ["Oncology", "Transplant", "Critical Care"] },
  { name: "Hair Revival Centre", location: "Bangalore", category: "Hair Centres", image: images[2], services: ["Hair Transplant", "PRP Therapy", "Scalp Treatment"] },
  { name: "Tress Solutions", location: "Mumbai", category: "Hair Centres", image: images[3], services: ["FUE Transplant", "Laser Cap", "Mesotherapy"] },
  { name: "Zen Wellness Hub", location: "Pune", category: "Wellness Centres", image: images[4], services: ["Yoga Therapy", "Nutrition", "Detox Programs"] },
  { name: "Vitalife Centre", location: "Kolkata", category: "Wellness Centres", image: images[5], services: ["Stress Management", "Holistic Health", "Meditation"] },
  { name: "Revive Wellness", location: "Chennai", category: "Wellness Centres", image: images[0], services: ["Ayurveda", "Panchakarma", "Wellness Coaching"] },
  { name: "Precision Diagnostics", location: "Mumbai", category: "Diagnostic Centres", image: images[1], services: ["MRI & CT Scan", "Blood Work", "Pathology"] },
  { name: "HealthScan Labs", location: "Bangalore", category: "Diagnostic Centres", image: images[2], services: ["Digital X-Ray", "ECG", "Health Packages"] },
  { name: "Elite Aesthetic Clinic", location: "Delhi", category: "Aesthetic Clinics", image: images[3], services: ["Botox", "Fillers", "Laser Hair Removal"] },
  { name: "Glow & You", location: "Mumbai", category: "Aesthetic Clinics", image: images[4], services: ["Chemical Peels", "Microdermabrasion", "HydraFacial"] },
  { name: "Radiance Aesthetics", location: "Bangalore", category: "Aesthetic Clinics", image: images[5], services: ["Thread Lift", "PRP Facial", "Skin Tightening"] },
  { name: "MediCare Polyclinic", location: "Chennai", category: "Polyclinics", image: images[0], services: ["General Medicine", "Pediatrics", "Gynecology"] },
  { name: "Prime Health Hub", location: "Hyderabad", category: "Polyclinics", image: images[1], services: ["ENT", "Orthopedics", "Dermatology"] },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function ExistingPartners() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? partners
      : partners.filter((p) => p.category === activeCategory);

  return (
    <section
      id="existing-partners"
      className="relative overflow-hidden px-5 py-24 md:px-10 lg:px-20"
      style={{ backgroundColor: "#0D0D0D", color: "#ffffff" }}
    >
      {/* ambient glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2"
        style={{
          width: "800px",
          height: "800px",
          background:
            "radial-gradient(circle, rgba(0,213,255,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12 text-center"
        >
          <p
            className="mb-3 text-sm font-semibold uppercase tracking-[0.2em]"
            style={{ color: "#00D5FF", fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Partner Network
          </p>
          <h2
            className="text-4xl leading-tight md:text-5xl lg:text-6xl"
            style={{ fontFamily: '"Playfair Display", serif' }}
          >
            Our{" "}
            <span className="bg-gradient-to-r from-[#00D5FF] to-[#CBA135] bg-clip-text text-transparent">
              Partner Network
            </span>
          </h2>
          <p
            className="mx-auto mt-4 max-w-xl text-sm leading-relaxed"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              color: "rgba(255,255,255,0.5)",
            }}
          >
            Trusted by healthcare providers across India
          </p>
        </motion.div>

        {/* category filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12 flex flex-wrap justify-center gap-3"
        >
          {categories.map((cat) => {
            const isActive = cat === activeCategory;
            return (
              <motion.button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="relative rounded-full px-5 py-2.5 text-xs font-medium uppercase tracking-wider transition-all duration-300"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  backgroundColor: isActive
                    ? "rgba(0,213,255,0.15)"
                    : "rgba(255,255,255,0.04)",
                  color: isActive ? "#00D5FF" : "rgba(255,255,255,0.6)",
                  border: isActive
                    ? "1px solid rgba(0,213,255,0.3)"
                    : "1px solid rgba(255,255,255,0.08)",
                  boxShadow: isActive
                    ? "0 0 20px rgba(0,213,255,0.15)"
                    : "none",
                  backdropFilter: "blur(16px)",
                  WebkitBackdropFilter: "blur(16px)",
                }}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: isActive
                    ? "rgba(0,213,255,0.2)"
                    : "rgba(255,255,255,0.08)",
                }}
                whileTap={{ scale: 0.97 }}
              >
                {cat}
              </motion.button>
            );
          })}
        </motion.div>

        {/* partner cards grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {filtered.map((partner) => (
              <motion.div
                key={partner.name + partner.location}
                variants={cardVariants}
                layout
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative overflow-hidden rounded-2xl transition-all duration-500"
                style={{
                  backgroundColor: "rgba(255,255,255,0.04)",
                  backdropFilter: "blur(16px)",
                  WebkitBackdropFilter: "blur(16px)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                {/* hover glow */}
                <div
                  className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(0,213,255,0.12), transparent 40%)",
                  }}
                />

                {/* image */}
                <div className="relative h-48 overflow-hidden">
                  <motion.img
                    src={partner.image}
                    alt={partner.name}
                    className="h-full w-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    loading="lazy"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(13,13,13,0.8), transparent)",
                    }}
                  />
                  {/* badge */}
                  <div className="absolute right-3 top-3">
                    <span
                      className="inline-block rounded-full px-3 py-1 text-[10px] font-medium uppercase tracking-wider"
                      style={{
                        backgroundColor: "rgba(203,161,53,0.2)",
                        border: "1px solid rgba(203,161,53,0.3)",
                        color: "#CBA135",
                        backdropFilter: "blur(8px)",
                        WebkitBackdropFilter: "blur(8px)",
                      }}
                    >
                      Partner Since 2025
                    </span>
                  </div>
                </div>

                {/* info */}
                <div className="relative z-10 p-5">
                  <h3
                    className="text-lg font-semibold tracking-tight"
                    style={{ fontFamily: '"Playfair Display", serif' }}
                  >
                    {partner.name}
                  </h3>
                  <p
                    className="mt-1 text-xs"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      color: "rgba(255,255,255,0.5)",
                    }}
                  >
                    {partner.location}
                  </p>

                  {/* service tags */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {partner.services.map((s) => (
                      <span
                        key={s}
                        className="rounded-full px-3 py-1 text-[10px] font-medium uppercase tracking-wider"
                        style={{
                          backgroundColor: "rgba(0,213,255,0.08)",
                          border: "1px solid rgba(0,213,255,0.15)",
                          color: "#00D5FF",
                        }}
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
