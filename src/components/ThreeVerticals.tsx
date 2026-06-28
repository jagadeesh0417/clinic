"use client";

import { motion } from "framer-motion";

interface Vertical {
  title: string;
  description: string;
  services: string[];
  benefits: string[];
  image: string;
}

const verticals: Vertical[] = [
  {
    title: "Healthcare Services",
    description:
      "KO Clinics supports partner clinics with patient acquisition and business growth.",
    services: [
      "Dermatology",
      "Hair Restoration",
      "Aesthetic Medicine",
      "Dental Care",
      "Diagnostics",
      "Preventive Healthcare",
      "Teleconsultation",
      "Home Healthcare",
      "Corporate Health Programs",
      "Longevity Medicine",
      "Nutrition Programs",
      "Wellness Solutions",
    ],
    benefits: [
      "Patient Leads",
      "Walk-ins",
      "Digital Presence",
      "Marketing Support",
      "Doctor Network",
      "Corporate Tie-ups",
      "Operational Support",
    ],
    image:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80",
  },
  {
    title: "Quantum Health Products",
    description:
      "Quantum Health serves as the healthcare product division of KO Clinics. Partner clinics can retail premium healthcare products directly from their facilities. Each KO Clinics partner location will have a dedicated Quantum Health Counter.",
    services: [
      "Hair Care",
      "PRP Products",
      "Supplements",
      "Collagen Products",
      "Stem Cell Products",
      "Skin Care",
      "Medical Grade Cosmeceuticals",
      "Anti-ageing Solutions",
      "NAD+ Products",
      "Weight Management Products",
      "Nutrition Supplements",
      "Wellness Products",
    ],
    benefits: [
      "Additional Revenue Stream",
      "Wholesale Pricing",
      "Exclusive Discounts",
      "Product Training",
      "Marketing Support",
      "Point-of-Sale Branding",
      "Retail Display Assistance",
      "Increased Patient Retention",
    ],
    image:
      "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=800&q=80",
  },
  {
    title: "Clinic Space Rental",
    description:
      "KO Clinics helps clinics maximize unused infrastructure. Partner clinics can rent consultation rooms to visiting healthcare professionals.",
    services: [
      "Dermatologists",
      "Plastic Surgeons",
      "Dentists",
      "Nutritionists",
      "Physiotherapists",
      "Psychologists",
      "Hair Specialists",
      "Pediatricians",
      "Gynecologists",
      "Orthopedic Doctors",
    ],
    benefits: [
      "Additional Monthly Income",
      "Improved Space Utilization",
      "Professional Network Expansion",
      "Access to New Patient Segments",
      "Shared Healthcare Infrastructure",
      "Business Collaboration Opportunities",
    ],
    image:
      "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&q=80",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};

function IconCircle({ index }: { index: number }) {
  const icons = [
    "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
    "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
  ];

  return (
    <div
      className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl"
      style={{
        background: "rgba(0,213,255,0.08)",
        border: "1px solid rgba(0,213,255,0.15)",
      }}
    >
      <svg
        viewBox="0 0 24 24"
        className="h-7 w-7"
        fill="none"
        stroke="#00D5FF"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d={icons[index]} />
      </svg>
    </div>
  );
}

function VerticalCard({ v, i }: { v: Vertical; i: number }) {
  return (
    <motion.div
      variants={cardVariants}
      className="group relative flex flex-col overflow-hidden rounded-3xl border transition-all duration-700"
      style={{
        background: "rgba(255,255,255,0.04)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderColor: "rgba(255,255,255,0.08)",
      }}
    >
      {/* Image background */}
      <div className="relative h-56 w-full flex-shrink-0 overflow-hidden">
        <motion.img
          src={v.image}
          alt={v.title}
          className="h-full w-full object-cover"
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.8, ease: "easeOut" as const }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, transparent 30%, rgba(5,5,5,0.85) 100%)",
          }}
        />
        <div className="absolute bottom-0 left-0 right-0 z-10 p-6">
          <h3
            className="text-2xl font-bold md:text-3xl"
            style={{ fontFamily: "'Playfair Display', serif", color: "#fff" }}
          >
            {v.title}
          </h3>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6 pt-5">
        <p
          className="mb-5 text-sm leading-relaxed"
          style={{
            fontFamily: "'Inter', sans-serif",
            color: "rgba(255,255,255,0.65)",
          }}
        >
          {v.description}
        </p>

        {/* Service chips */}
        <div className="mb-6">
          <p
            className="mb-3 text-xs font-semibold uppercase tracking-[0.15em]"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              color: "#CBA135",
            }}
          >
            Services &amp; Specialties
          </p>
          <div className="flex flex-wrap gap-2">
            {v.services.map((s) => (
              <span
                key={s}
                className="rounded-full px-3 py-1.5 text-xs font-medium tracking-wide transition-colors duration-300"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  color: "rgba(255,255,255,0.8)",
                }}
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="mt-auto border-t pt-4" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
          <p
            className="mb-3 text-xs font-semibold uppercase tracking-[0.15em]"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              color: "#00D5FF",
            }}
          >
            Partner Benefits
          </p>
          <div className="flex flex-wrap gap-2">
            {v.benefits.map((b) => (
              <span
                key={b}
                className="inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-xs font-medium transition-colors duration-300"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  background: "rgba(0,213,255,0.06)",
                  border: "1px solid rgba(0,213,255,0.1)",
                  color: "#7EE8FA",
                }}
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-3 w-3 flex-shrink-0"
                  fill="none"
                  stroke="#00D5FF"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                {b}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Hover glow */}
      <div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-700 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(500px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(0,213,255,0.12), transparent 50%)",
        }}
      />
    </motion.div>
  );
}

export default function ThreeVerticals() {
  return (
    <section
      id="three-verticals"
      className="relative overflow-hidden px-5 py-24 md:px-10 lg:px-20"
      style={{ background: "#050505", color: "#ffffff" }}
    >
      {/* Ambient orbs */}
      <div
        className="pointer-events-none absolute left-0 top-1/4"
        style={{
          width: "600px",
          height: "600px",
          background:
            "radial-gradient(circle, rgba(0,213,255,0.06) 0%, transparent 70%)",
          transform: "translateX(-30%)",
        }}
      />
      <div
        className="pointer-events-none absolute bottom-1/4 right-0"
        style={{
          width: "500px",
          height: "500px",
          background:
            "radial-gradient(circle, rgba(203,161,53,0.05) 0%, transparent 70%)",
          transform: "translateX(30%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" as const }}
          className="mb-16 text-center"
        >
          <p
            className="mb-4 text-sm font-semibold uppercase tracking-[0.2em]"
            style={{
              fontFamily: "'Inter', sans-serif",
              color: "#00D5FF",
              letterSpacing: "0.2em",
            }}
          >
            Our Verticals
          </p>
          <h2
            className="mb-4 text-4xl leading-tight md:text-5xl lg:text-6xl"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Our Three Business{" "}
            <span
              className="bg-gradient-to-r from-[#00D5FF] to-[#CBA135] bg-clip-text text-transparent"
            >
              Verticals
            </span>
          </h2>
          <p
            className="mx-auto max-w-2xl text-lg"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              color: "rgba(255,255,255,0.55)",
            }}
          >
            One Powerful Healthcare Ecosystem
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-8 lg:grid-cols-3"
        >
          {verticals.map((v, i) => (
            <VerticalCard key={v.title} v={v} i={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
