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
  "Dermatology",
  "Hair Clinics",
  "Dental Clinics",
  "Wellness Centers",
  "Hospitals",
  "Diagnostic Centers",
  "Aesthetic Clinics",
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
  { name: "Dermis Speciality Clinic", location: "Bengaluru", category: "Dermatology", image: images[0], services: ["Laser Treatments", "Acne Therapy", "Skin Rejuvenation"] },
  { name: "Dr. Mehta's Skin & Hair Clinic", location: "Mumbai", category: "Dermatology", image: images[1], services: ["Hair Restoration", "Scar Revision", "Anti-Aging"] },
  { name: "Aura Dermatology Center", location: "Hyderabad", category: "Dermatology", image: images[2], services: ["Phototherapy", "Vitiligo Treatment", "Melasma Care"] },
  { name: "Roots Hair Revival Studio", location: "Delhi", category: "Hair Clinics", image: images[3], services: ["Hair Transplant", "PRP Therapy", "Scalp Micropigmentation"] },
  { name: "TressForever Clinic", location: "Pune", category: "Hair Clinics", image: images[4], services: ["FUE Transplant", "Laser Cap", "Mesotherapy"] },
  { name: "Maiwand Dental Care", location: "Bengaluru", category: "Dental Clinics", image: images[5], services: ["Cosmetic Dentistry", "Root Canal", "Implants"] },
  { name: "Smile Kraft Studio", location: "Chennai", category: "Dental Clinics", image: images[0], services: ["Teeth Whitening", "Braces", "Veneers"] },
  { name: "Pearls Orthodontic Centre", location: "Kolkata", category: "Dental Clinics", image: images[1], services: ["Pediatric Dentistry", "Scaling", "Crowns"] },
  { name: "Apollo Cradle & Wellness", location: "Delhi", category: "Wellness Centers", image: images[2], services: ["Yoga Therapy", "Nutrition", "Detox Programs"] },
  { name: "Zen Den Holistic Hub", location: "Ahmedabad", category: "Wellness Centers", image: images[3], services: ["Stress Management", "Ayurveda", "Meditation"] },
  { name: "Vitalife Wellness Centre", location: "Mumbai", category: "Wellness Centers", image: images[4], services: ["Panchakarma", "Wellness Coaching", "Holistic Health"] },
  { name: "Rainbow Children's Hospital", location: "Hyderabad", category: "Hospitals", image: images[5], services: ["Pediatrics", "Neonatology", "Emergency Care"] },
  { name: "Columbia Asia Referral Hospital", location: "Bengaluru", category: "Hospitals", image: images[0], services: ["Cardiology", "Neurology", "Orthopedics"] },
  { name: "SRL Diagnostics Centre", location: "Mumbai", category: "Diagnostic Centers", image: images[1], services: ["MRI & CT Scan", "Blood Work", "Pathology"] },
  { name: "Healthians Labs", location: "Delhi", category: "Diagnostic Centers", image: images[2], services: ["Digital X-Ray", "ECG", "Health Packages"] },
  { name: "The Aesthetic Lounge", location: "Bengaluru", category: "Aesthetic Clinics", image: images[3], services: ["Botox", "Fillers", "Laser Hair Removal"] },
  { name: "Glow & You Aesthetics", location: "Kolkata", category: "Aesthetic Clinics", image: images[4], services: ["Chemical Peels", "Microdermabrasion", "HydraFacial"] },
  { name: "Radiance Medispa", location: "Chennai", category: "Aesthetic Clinics", image: images[5], services: ["Thread Lift", "PRP Facial", "Skin Tightening"] },
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
  const [searchQuery, setSearchQuery] = useState("");

  const filtered =
    activeCategory === "All"
      ? partners
      : partners.filter((p) => p.category === activeCategory);

  const searched = searchQuery
    ? filtered.filter(
        (p) =>
          p.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : filtered;

  const locations = [...new Set(partners.map((p) => p.location))];

  return (
    <section
      id="existing-partners"
      className="relative overflow-hidden px-5 py-24 md:px-10 lg:px-20"
      style={{ backgroundColor: "#050505", color: "#ffffff" }}
    >
      <div
        className="pointer-events-none absolute left-1/3 top-1/4 -translate-x-1/2 -translate-y-1/2"
        style={{
          width: "700px",
          height: "700px",
          background:
            "radial-gradient(circle, rgba(203,161,53,0.05) 0%, transparent 70%)",
        }}
      />
      <div
        className="pointer-events-none absolute right-0 bottom-0"
        style={{
          width: "500px",
          height: "500px",
          background:
            "radial-gradient(circle, rgba(203,161,53,0.03) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12 text-center"
        >
          <p
            className="mb-3 text-sm font-semibold uppercase tracking-[0.2em]"
            style={{ color: "#CBA135", fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Partner Network
          </p>
          <h2
            className="text-4xl leading-tight md:text-5xl lg:text-6xl"
            style={{ fontFamily: '"Playfair Display", serif' }}
          >
            Our{" "}
            <span className="bg-gradient-to-r from-[#CBA135] to-[#CBA135] bg-clip-text text-transparent">
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8 flex flex-wrap justify-center gap-3"
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
                    ? "rgba(203,161,53,0.15)"
                    : "rgba(255,255,255,0.04)",
                  color: isActive ? "#CBA135" : "rgba(255,255,255,0.6)",
                  border: isActive
                    ? "1px solid rgba(203,161,53,0.3)"
                    : "1px solid rgba(255,255,255,0.08)",
                  boxShadow: isActive
                    ? "0 0 20px rgba(203,161,53,0.15)"
                    : "none",
                  backdropFilter: "blur(16px)",
                  WebkitBackdropFilter: "blur(16px)",
                }}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: isActive
                    ? "rgba(203,161,53,0.2)"
                    : "rgba(255,255,255,0.08)",
                }}
                whileTap={{ scale: 0.97 }}
              >
                {cat}
              </motion.button>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-10"
        >
          <div className="mx-auto max-w-md">
            <div
              className="flex items-center gap-3 rounded-xl px-4 py-3 transition-all duration-300 focus-within:shadow-lg"
              style={{
                backgroundColor: "rgba(255,255,255,0.04)",
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <svg
                className="h-4 w-4 flex-shrink-0"
                style={{ color: "rgba(255,255,255,0.3)" }}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                type="text"
                placeholder={`Search by location — ${locations.slice(0, 4).join(", ")}, ${locations.length > 4 ? `+${locations.length - 4} more` : ""}`}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent text-sm outline-none"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  color: "rgba(255,255,255,0.8)",
                }}
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="flex-shrink-0 text-xs"
                  style={{ color: "rgba(255,255,255,0.3)" }}
                >
                  Clear
                </button>
              )}
            </div>
            <p
              className="mt-2 text-center text-[10px] tracking-wide"
              style={{
                fontFamily: "'Inter', sans-serif",
                color: "rgba(255,255,255,0.25)",
              }}
            >
              Search by city, clinic name, or specialty
            </p>
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory + searchQuery}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {searched.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="col-span-full py-16 text-center"
              >
                <p
                  className="text-sm"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    color: "rgba(255,255,255,0.4)",
                  }}
                >
                  No partners match your search. Try a different location or
                  category.
                </p>
              </motion.div>
            )}
            {searched.map((partner) => (
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
                <div
                  className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(203,161,53,0.12), transparent 40%)",
                  }}
                />

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
                        "linear-gradient(to top, rgba(5,5,5,0.8), transparent)",
                    }}
                  />
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
                      Premium Partner
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-3">
                    <span
                      className="inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[10px] font-medium"
                      style={{
                        backgroundColor: "rgba(0,0,0,0.5)",
                        backdropFilter: "blur(8px)",
                        WebkitBackdropFilter: "blur(8px)",
                        color: "rgba(255,255,255,0.7)",
                        fontFamily: "'Inter', sans-serif",
                      }}
                    >
                      <svg
                        className="h-3 w-3"
                        style={{ color: "#CBA135" }}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {partner.location}
                    </span>
                  </div>
                </div>

                <div className="relative z-10 p-5">
                  <div className="mb-2 flex items-center justify-between">
                    <span
                      className="rounded-full px-2.5 py-0.5 text-[9px] font-medium uppercase tracking-wider"
                      style={{
                        backgroundColor: "rgba(203,161,53,0.08)",
                        border: "1px solid rgba(203,161,53,0.15)",
                        color: "#CBA135",
                        fontFamily: "'Inter', sans-serif",
                      }}
                    >
                      {partner.category}
                    </span>
                  </div>
                  <h3
                    className="text-lg font-semibold tracking-tight"
                    style={{ fontFamily: '"Playfair Display", serif' }}
                  >
                    {partner.name}
                  </h3>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {partner.services.map((s) => (
                      <span
                        key={s}
                        className="rounded-full px-3 py-1 text-[10px] font-medium uppercase tracking-wider"
                        style={{
                          backgroundColor: "rgba(203,161,53,0.08)",
                          border: "1px solid rgba(203,161,53,0.15)",
                          color: "#CBA135",
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
