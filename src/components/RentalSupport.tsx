"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

const images = [
  "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&q=80",
  "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&q=80",
  "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80",
]

const services = [
  "Specialist Matching",
  "Space Listing",
  "Booking Assistance",
  "Revenue Optimization",
  "Rental Agreements",
  "Marketing Support",
  "Operational Coordination",
  "Business Advisory",
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const } },
}

export default function RentalSupport() {
  return (
    <section
      id="rental-support"
      className="relative overflow-hidden py-24 md:py-32"
      style={{ background: "#050505" }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#0a0a0a] to-[#050505]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="space-y-20"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center">
            <span
              className="mb-4 inline-block tracking-[0.2em] text-xs font-mono uppercase"
              style={{ color: "#CBA135" }}
            >
              Infrastructure Monetization
            </span>
            <h2
              className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl"
              style={{ fontFamily: "Playfair Display, serif", color: "#ffffff" }}
            >
              Rental{" "}
              <span style={{ color: "#00D5FF" }}>Support</span>
            </h2>
            <p
              className="mx-auto mt-3 max-w-lg text-sm tracking-wider uppercase"
              style={{ fontFamily: "Space Grotesk, sans-serif", color: "rgba(255,255,255,0.5)" }}
            >
              Complete Infrastructure Monetization Solutions
            </p>
            <p
              className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed md:text-xl"
              style={{ fontFamily: "Inter, sans-serif", color: "rgba(255,255,255,0.6)" }}
            >
              KO Clinics offers consultation and infrastructure rental solutions to help partner clinics
              generate recurring revenue through unused treatment rooms and consultation spaces.
            </p>
          </motion.div>

          {/* Images */}
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
                    alt={`Rental support ${i + 1}`}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Services Grid */}
          <motion.div
            variants={itemVariants}
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          >
            {services.map((service, i) => (
              <motion.div
                key={service}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.06, duration: 0.5 }}
                whileHover={{ scale: 1.03, y: -4 }}
                className="group cursor-pointer rounded-xl p-6 text-center transition-all duration-300"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  backdropFilter: "blur(16px)",
                  WebkitBackdropFilter: "blur(16px)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <div
                  className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full text-lg font-bold transition-colors duration-300"
                  style={{
                    background: "rgba(0, 213, 255, 0.1)",
                    color: "#00D5FF",
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3
                  className="text-base font-semibold"
                  style={{ fontFamily: "Playfair Display, serif", color: "#ffffff" }}
                >
                  {service}
                </h3>
                <div
                  className="mx-auto mt-3 h-px w-0 transition-all duration-300 group-hover:w-3/4"
                  style={{ background: "#00D5FF" }}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Revenue Indicator + Key Statement */}
          <motion.div
            variants={itemVariants}
            className="grid gap-8 md:grid-cols-2"
          >
            {/* Revenue indicator */}
            <div
              className="flex flex-col items-center justify-center rounded-2xl p-8 md:p-10"
              style={{
                background: "rgba(255,255,255,0.04)",
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <RevenueCounter />
            </div>

            {/* Key Statement */}
            <div
              className="flex items-center justify-center rounded-2xl p-8 md:p-10"
              style={{
                background: "rgba(255,255,255,0.04)",
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <div className="text-center">
                <div
                  className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full"
                  style={{ background: "rgba(203, 161, 53, 0.12)" }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#CBA135" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
                    <path d="M12 2v20" />
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg>
                </div>
                <p
                  className="max-w-md text-lg font-medium leading-relaxed md:text-xl"
                  style={{ fontFamily: "Playfair Display, serif", color: "rgba(255,255,255,0.85)" }}
                >
                  Partner clinics can generate{" "}
                  <span style={{ color: "#CBA135" }}>recurring revenue</span> through
                  unused treatment rooms and consultation spaces.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

function RevenueCounter() {
  const [count, setCount] = useState(0)
  const target = 28400

  useEffect(() => {
    let start = 0
    const duration = 2000
    const step = Math.ceil(target / (duration / 16))

    const timer = setInterval(() => {
      start += step
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(start)
      }
    }, 16)

    return () => clearInterval(timer)
  }, [])

  const formatted = new Intl.NumberFormat("en-US").format(count)

  return (
    <div className="flex flex-col items-center gap-2">
      <span className="text-xs tracking-widest uppercase" style={{ fontFamily: "Inter, sans-serif", color: "rgba(255,255,255,0.5)" }}>
        Avg. Annual Partner Revenue
      </span>
      <div className="flex items-baseline gap-1">
        <span className="text-base" style={{ fontFamily: "Inter, sans-serif", color: "rgba(255,255,255,0.4)" }}>
          $
        </span>
        <motion.span
          className="text-4xl font-bold tracking-tight md:text-5xl"
          style={{ fontFamily: "Playfair Display, serif", color: "#00D5FF" }}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {formatted}
        </motion.span>
      </div>
      <div className="mt-2 flex items-center gap-2">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 120 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" as const }}
          className="h-1.5 rounded-full"
          style={{ background: "linear-gradient(to right, #00D5FF, #CBA135)" }}
        />
        <span className="text-xs font-medium" style={{ fontFamily: "Inter, sans-serif", color: "#CBA135" }}>
          +26% YoY
        </span>
      </div>
    </div>
  )
}
