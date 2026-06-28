"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

const specialists = [
  "Dermatologists",
  "Plastic Surgeons",
  "Dentists",
  "Nutritionists",
  "Physiotherapists",
  "Psychologists",
  "Gynecologists",
  "Pediatricians",
  "Orthopedic Specialists",
]

const images = [
  "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&q=80",
  "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80",
  "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&q=80",
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const } },
}

function OccupancyGauge() {
  const [percent, setPercent] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => setPercent(78), 400)
    return () => clearTimeout(timer)
  }, [])

  const radius = 54
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (percent / 100) * circumference

  return (
    <div className="flex flex-col items-center gap-2">
      <svg width="140" height="140" className="-rotate-90">
        <circle cx="70" cy="70" r={radius} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="8" />
        <motion.circle
          cx="70"
          cy="70"
          r={radius}
          fill="none"
          stroke="#00D5FF"
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 1.8, ease: "easeOut" as const, delay: 0.6 }}
        />
      </svg>
      <span className="absolute mt-1 text-3xl font-bold text-white" style={{ fontFamily: "Playfair Display, serif" }}>
        {percent}%
      </span>
      <span className="text-xs tracking-widest uppercase text-white/50" style={{ fontFamily: "Inter, sans-serif" }}>
        Occupancy
      </span>
    </div>
  )
}

export default function ConsultationRental() {
  return (
    <section
      id="consultation-rental"
      className="relative overflow-hidden py-24 md:py-32"
      style={{ background: "#050505" }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="space-y-20"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center">
            <h2
              className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl"
              style={{ fontFamily: "Playfair Display, serif", color: "#ffffff" }}
            >
              Consultation Space Rental
            </h2>
            <p
              className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed md:text-xl"
              style={{ fontFamily: "Inter, sans-serif", color: "rgba(255,255,255,0.6)" }}
            >
              Monetize unused consultation rooms. Connect with healthcare professionals and maximize your
              clinic&apos;s revenue potential.
            </p>
          </motion.div>

          {/* Image cards */}
          <div className="grid gap-6 md:grid-cols-3">
            {images.map((src, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="group overflow-hidden rounded-2xl"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  backdropFilter: "blur(16px)",
                  WebkitBackdropFilter: "blur(16px)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={src}
                    alt={`Consultation space ${i + 1}`}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Stats + Specialists */}
          <motion.div
            variants={itemVariants}
            className="grid gap-8 md:grid-cols-2"
          >
            {/* Occupancy gauge */}
            <div
              className="flex flex-col items-center justify-center rounded-2xl p-8 md:p-10"
              style={{
                background: "rgba(255,255,255,0.04)",
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <OccupancyGauge />

              {/* Revenue illustration */}
              <div className="mt-8 flex items-center gap-3">
                <div className="flex items-baseline gap-1">
                  <span className="text-sm font-medium text-white/40" style={{ fontFamily: "Inter, sans-serif" }}>
                    Rev
                  </span>
                  <motion.span
                    className="text-2xl font-bold tracking-tight"
                    style={{ fontFamily: "Playfair Display, serif", color: "#00D5FF" }}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.2, duration: 0.6 }}
                  >
                    +$4,280
                  </motion.span>
                  <span className="text-sm text-white/40" style={{ fontFamily: "Inter, sans-serif" }}>
                    /mo
                  </span>
                </div>
              </div>
            </div>

            {/* Specialists */}
            <div
              className="rounded-2xl p-8 md:p-10"
              style={{
                background: "rgba(255,255,255,0.04)",
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <h3
                className="mb-6 text-xl font-semibold tracking-tight"
                style={{ fontFamily: "Playfair Display, serif", color: "#ffffff" }}
              >
                Connected Specialists
              </h3>
              <div className="flex flex-wrap gap-3">
                {specialists.map((s) => (
                  <span
                    key={s}
                    className="rounded-full px-4 py-2 text-sm font-medium tracking-wide transition-colors duration-300 hover:bg-[#00D5FF]/10"
                    style={{
                      fontFamily: "Inter, sans-serif",
                      color: "rgba(255,255,255,0.75)",
                      background: "rgba(0, 213, 255, 0.06)",
                      border: "1px solid rgba(0, 213, 255, 0.15)",
                    }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
