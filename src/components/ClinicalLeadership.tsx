"use client";

import { motion } from "framer-motion";
import { doctors } from "@/config/doctors";

function DoctorAvatar({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2);
  return (
    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#C9A14A] to-[#E8C860] flex items-center justify-center text-[#100D0A] font-bold text-lg shrink-0 mx-auto mb-3">
      {initials}
    </div>
  );
}

const displayDoctors = doctors.filter((d) => !d.isFounder).slice(0, 4);

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

export default function ClinicalLeadership() {
  return (
    <section className="relative bg-[#100D0A] py-24 md:py-32 overflow-hidden">
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-[#C9A14A]/5 rounded-full blur-[120px] pointer-events-none" />

      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.div variants={cardVariants} className="text-center mb-16">
          <span
            className="inline-block text-[#C9A14A] text-xs font-semibold uppercase tracking-[0.25em] mb-4"
            style={{ fontFamily: "var(--font-displayans), sans-serif" }}
          >
            Clinical Leadership
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold text-white leading-tight"
            style={{ fontFamily: "var(--font-displayisplay), serif" }}
          >
            Clinical Leadership
          </h2>
          <p
            className="text-[#CBBFAF] text-lg mt-4 max-w-2xl mx-auto"
            style={{ fontFamily: "var(--font-displayans), sans-serif" }}
          >
            The specialists who set the protocols your clinic will run.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {displayDoctors.map((doctor) => (
            <motion.div
              key={doctor.id}
              variants={cardVariants}
              className="rounded-2xl border p-6 text-center transition-all duration-500 hover:-translate-y-1"
              style={{
                background: "rgba(246,241,232,0.04)",
                borderColor: "rgba(246,241,232,0.08)",
              }}
            >
              <DoctorAvatar name={doctor.name} />
              <h3
                className="text-base font-bold text-white mb-1"
                style={{ fontFamily: "var(--font-displayans), sans-serif" }}
              >
                {doctor.name}
              </h3>
              {doctor.qualifications && (
                <p
                  className="text-[#C9A14A] text-xs font-medium mb-1"
                  style={{ fontFamily: "var(--font-displayans), sans-serif" }}
                >
                  {doctor.qualifications}
                </p>
              )}
              <p
                className="text-[#CBBFAF] text-xs leading-relaxed"
                style={{ fontFamily: "var(--font-displayans), sans-serif" }}
              >
                {doctor.specialty}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div variants={cardVariants} className="text-center mt-12">
          <a
            href="/about#clinical-team"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #C9A14A, #E8C860)",
              color: "#100D0A",
              fontFamily: "var(--font-displayans), sans-serif",
            }}
          >
            Meet the full team
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
