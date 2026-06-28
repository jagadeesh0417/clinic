"use client"

import { motion } from "framer-motion"
import { useRef } from "react"

const requirements = [
  {
    title: "One Consultation Room",
    desc: "A fully equipped consultation space reserved for KO Clinics patient visits, teleconsultations, and specialist assessments.",
  },
  {
    title: "One Procedure Room",
    desc: "A dedicated procedure room for aesthetic treatments, minor procedures, and wellness services.",
  },
  {
    title: "KO Clinics Exterior Signboard",
    desc: "Official KO Clinics co-branded exterior signboard to establish network visibility and brand recognition.",
  },
  {
    title: "Small KO Clinics Lollipop Board",
    desc: "Premium illuminated lollipop board placed outside the premises for enhanced street-level visibility.",
  },
  {
    title: "Quantum Health Counter",
    desc: "Dedicated retail counter for Quantum Health products — skincare, haircare, wellness, and anti-ageing solutions.",
  },
]

const images = [
  "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&q=80",
  "https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?w=800&q=80",
  "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&q=80",
]

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const } },
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const } },
}

export default function PartnershipModel() {
  const ref = useRef<HTMLElement>(null)

  return (
    <section
      ref={ref}
      id="partnership-model"
      className="relative overflow-hidden"
      style={{ background: "#050505" }}
    >
      <div className="pointer-events-none absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAyKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40" />

      <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2" style={{ width: "900px", height: "900px", background: "radial-gradient(circle, rgba(203,161,53,0.06) 0%, transparent 70%)" }} />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="mx-auto mb-16 max-w-4xl text-center md:mb-20"
        >
          <span
            className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.25em]"
            style={{ color: "#CBA135", fontFamily: "'Space Grotesk', sans-serif" }}
          >
            The Partnership Model
          </span>
          <h2
            className="font-serif text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            <span
              style={{
                background: "linear-gradient(135deg, #CBA135 0%, #E8D48B 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              One Room. Zero Investment.
            </span>
            <br />
            <span style={{ color: "#FFFFFF" }}>Endless Growth.</span>
          </h2>
          <p
            className="mx-auto mt-5 max-w-2xl text-base leading-relaxed md:text-lg"
            style={{ color: "rgba(255,255,255,0.6)", fontFamily: "'Inter', sans-serif" }}
          >
            Everything you need to transform your clinic into a premium KO Clinics partner destination — with zero upfront franchise cost.
          </p>
        </motion.div>

        {/* Requirements Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid gap-5 md:grid-cols-2 lg:grid-cols-3"
        >
          {requirements.map((req, i) => (
            <motion.div
              key={req.title}
              variants={itemVariants}
              className={`group relative overflow-hidden rounded-2xl border p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 ${
                i === requirements.length - 1 ? "lg:col-start-2 lg:col-end-3" : ""
              }`}
              style={{
                background: "rgba(255,255,255,0.04)",
                borderColor: "rgba(255,255,255,0.08)",
              }}
            >
              <div
                className="absolute right-0 top-0 h-24 w-24 translate-x-6 -translate-y-6 rounded-full opacity-0 blur-2xl transition-all duration-500 group-hover:opacity-20"
                style={{ background: "radial-gradient(circle, #CBA135 0%, transparent 70%)" }}
              />

              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full" style={{ background: "rgba(203,161,53,0.15)" }}>
                <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 6L5.5 9.5L14 2" stroke="#CBA135" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              <h4
                className="mb-2 text-lg font-semibold"
                style={{ color: "#FFFFFF", fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {req.title}
              </h4>

              <p
                className="text-sm leading-relaxed"
                style={{ color: "rgba(255,255,255,0.55)", fontFamily: "'Inter', sans-serif" }}
              >
                {req.desc}
              </p>

              <div
                className="mt-4 h-px w-0 transition-all duration-500 group-hover:w-full"
                style={{ background: "linear-gradient(90deg, #CBA135 0%, #E8D48B 50%, transparent 100%)" }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Image Strip */}
        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {images.map((src, i) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] as const }}
              className="group relative overflow-hidden rounded-2xl"
              style={{ minHeight: "220px" }}
            >
              <img
                src={src}
                alt=""
                className="h-full w-full object-cover transition-all duration-700 group-hover:scale-105"
                style={{ minHeight: "220px" }}
              />
              <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(203,161,53,0.15) 0%, rgba(0,0,0,0.4) 100%)" }} />
            </motion.div>
          ))}
        </div>

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const, delay: 0.3 }}
          className="mx-auto mt-16 max-w-4xl rounded-2xl border p-8 text-center backdrop-blur-xl md:p-12"
          style={{
            background: "rgba(255,255,255,0.04)",
            borderColor: "rgba(255,255,255,0.08)",
          }}
        >
          <p
            className="text-2xl font-bold leading-tight tracking-tight md:text-3xl lg:text-4xl"
            style={{
              fontFamily: "'Playfair Display', serif",
              background: "linear-gradient(135deg, #CBA135 0%, #E8D48B 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            One Room. One Procedure Space. One Signboard. Unlimited Opportunities.
          </p>
          <div
            className="mx-auto mt-6 h-px max-w-xs"
            style={{ background: "linear-gradient(90deg, transparent 0%, rgba(203,161,53,0.3) 50%, transparent 100%)" }}
          />
          <p
            className="mt-6 text-sm italic leading-relaxed md:text-base"
            style={{ color: "rgba(255,255,255,0.45)", fontFamily: "'Inter', sans-serif" }}
          >
            &ldquo;Start with the essentials. Scale with the ecosystem.&rdquo;
          </p>
        </motion.div>
      </div>
    </section>
  )
}
