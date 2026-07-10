"use client";

import { motion } from "framer-motion";
import { doctors } from "@/config/doctors";

function DoctorAvatar({ name, size = "md" }: { name: string; size?: "sm" | "md" | "lg" }) {
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2);
  const sizeMap = { sm: "w-10 h-10 text-sm", md: "w-16 h-16 text-lg", lg: "w-24 h-24 text-2xl" };
  return (
    <div
      className={`${sizeMap[size]} rounded-full bg-gradient-to-br from-[#C9A14A] to-[#E8C860] flex items-center justify-center text-[#100D0A] font-bold shrink-0 mx-auto mb-4`}
    >
      {initials}
    </div>
  );
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.2 },
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

const clinicalDoctors = doctors.filter((d) => !d.isFounder);

export default function ClinicalTeam() {
  return (
    <section id="clinical-team" className="relative bg-[#100D0A] py-24 md:py-32 overflow-hidden">
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#C9A14A]/5 rounded-full blur-[150px] pointer-events-none" />

      <motion.div
        className="max-w-7xl mx-auto px-6 xl:px-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.div variants={cardVariants} className="text-center mb-16">
          <span
            className="inline-block text-[#C9A14A] text-xs font-semibold uppercase tracking-[0.25em] mb-4"
            style={{ fontFamily: "var(--font-sans), sans-serif" }}
          >
            Clinical Team
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold text-white leading-tight"
            style={{ fontFamily: "var(--font-display), serif" }}
          >
            Clinical Team
          </h2>
          <p
            className="text-[#CBBFAF] text-lg mt-4 max-w-2xl mx-auto"
            style={{ fontFamily: "var(--font-sans), sans-serif" }}
          >
            The specialists who set the protocols across our network.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clinicalDoctors.map((doctor) => (
            <motion.div
              key={doctor.id}
              id={doctor.id}
              variants={cardVariants}
              className="rounded-2xl border p-6 md:p-8 text-center transition-all duration-500 hover:-translate-y-1"
              style={{
                background: "rgba(246,241,232,0.04)",
                borderColor: "rgba(246,241,232,0.08)",
              }}
            >
              <DoctorAvatar name={doctor.name} size="md" />
              <h3
                className="text-lg font-bold text-white mb-1"
                style={{ fontFamily: "var(--font-sans), sans-serif" }}
              >
                {doctor.name}
              </h3>
              {doctor.qualifications && (
                <p
                  className="text-[#C9A14A] text-xs font-medium mb-2"
                  style={{ fontFamily: "var(--font-sans), sans-serif" }}
                >
                  {doctor.qualifications}
                </p>
              )}
              <p
                className="text-[#CBBFAF] text-sm leading-relaxed"
                style={{ fontFamily: "var(--font-sans), sans-serif" }}
              >
                {doctor.specialty}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
