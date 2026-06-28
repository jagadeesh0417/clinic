"use client"

import { motion } from "framer-motion"
import { useRef } from "react"

const requirements = [
  "Minimum 120\u2013150 sq.ft space",
  "Prime location",
  "Good visibility",
  "Clinic registration",
  "Required licenses",
  "Basic infrastructure (Water, Electricity, Air Conditioning)",
  "Growth mindset",
  "Commitment to KO Clinics standards",
]

const benefits = [
  "100\u2013150 assured leads every month",
  "Digital presence",
  "Brand promotion",
  "Dedicated telecaller",
  "Sales support",
  "Doctor on call",
  "Aesthetician support",
  "Online consultation",
  "Training programs",
  "Certification support",
  "Marketing assistance",
  "Corporate partnerships",
]

const additionalBenefits = [
  "AI technology",
  "Website listing",
  "Call center support",
  "Social media branding",
  "CRM integration",
]

const partnerModelItems = [
  "One Consultation Room",
  "One Procedure Room",
  "KO Clinics Exterior Signboard",
  "KO Clinics Lollipop Signage",
  "Quantum Health Retail Counter",
  "Digital Presence Integration",
  "Access to Patient Leads",
  "Participation in the KO Clinics Healthcare Ecosystem",
]

const images = [
  "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&q=80",
  "https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?w=800&q=80",
  "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&q=80",
  "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const } },
}

export default function PartnerRequirements() {
  const ref = useRef<HTMLElement>(null)

  return (
    <section ref={ref} id="partner-requirements" className="relative overflow-hidden">
      {/* Hero */}
      <div style={{ background: "#050505" }} className="relative overflow-hidden py-24 md:py-32">
        <div className="pointer-events-none absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAyKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40" />
        <div className="pointer-events-none absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2" style={{ width: "800px", height: "800px", background: "radial-gradient(circle, rgba(203,161,53,0.06) 0%, transparent 70%)" }} />
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="mx-auto max-w-4xl text-center"
          >
            <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.25em]" style={{ color: "#CBA135", fontFamily: "'Space Grotesk', sans-serif" }}>
              Become a KO Clinics Partner
            </span>
            <h2 className="font-serif text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl" style={{ color: "#FFFFFF", fontFamily: "'Playfair Display', serif" }}>
              Criteria to Join{" "}
              <span style={{ background: "linear-gradient(135deg, #CBA135 0%, #E8D48B 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                KO Clinics
              </span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed md:text-lg" style={{ color: "rgba(255,255,255,0.6)", fontFamily: "'Inter', sans-serif" }}>
              To maintain a premium and standardized healthcare experience across the network, every partner clinic joining KO Clinics must fulfill the following criteria.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Requirements */}
      <div style={{ background: "#0D0D0D" }} className="relative overflow-hidden py-24 md:py-32">
        <div className="pointer-events-none absolute right-0 top-1/4 w-96 h-96 rounded-full blur-[150px]" style={{ background: "radial-gradient(circle, rgba(203,161,53,0.06) 0%, transparent 70%)" }} />
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid gap-5 md:grid-cols-2 lg:grid-cols-4"
          >
            {requirements.map((req) => (
              <motion.div
                key={req}
                variants={itemVariants}
                className="group relative overflow-hidden rounded-2xl border p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  borderColor: "rgba(255,255,255,0.08)",
                }}
              >
                <div className="absolute right-0 top-0 h-24 w-24 translate-x-6 -translate-y-6 rounded-full opacity-0 blur-2xl transition-all duration-500 group-hover:opacity-20" style={{ background: "radial-gradient(circle, #CBA135 0%, transparent 70%)" }} />
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full backdrop-blur-sm" style={{ background: "rgba(203,161,53,0.12)", border: "1px solid rgba(203,161,53,0.2)" }}>
                  <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 6.5L4.5 10L12.5 1.5" stroke="#CBA135" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h4 className="text-base font-semibold leading-snug" style={{ color: "#FFFFFF", fontFamily: "'Space Grotesk', sans-serif" }}>
                  {req}
                </h4>
                <div className="mt-4 h-px w-0 transition-all duration-500 group-hover:w-full" style={{ background: "linear-gradient(90deg, #CBA135 50%, transparent 100%)" }} />
              </motion.div>
            ))}
          </motion.div>

          {/* Image strip */}
          <div className="mt-16 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
            {images.map((src, i) => (
              <motion.div
                key={src}
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] as const }}
                className="group relative overflow-hidden rounded-2xl"
                style={{ minHeight: "200px" }}
              >
                <img
                  src={src}
                  alt=""
                  className="h-full w-full object-cover transition-all duration-700 group-hover:scale-105"
                  style={{ minHeight: "200px" }}
                />
                <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(203,161,53,0.15) 0%, rgba(0,0,0,0.5) 100%)" }} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits */}
      <div style={{ background: "#050505" }} className="relative overflow-hidden py-24 md:py-32">
        <div className="pointer-events-none absolute left-1/4 top-1/3 w-80 h-80 rounded-full blur-[120px]" style={{ background: "radial-gradient(circle, rgba(203,161,53,0.05) 0%, transparent 70%)" }} />
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="mx-auto mb-16 max-w-3xl text-center md:mb-20"
          >
            <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.25em]" style={{ color: "#CBA135", fontFamily: "'Space Grotesk', sans-serif" }}>
              Why Partner With Us
            </span>
            <h3 className="text-3xl font-bold leading-tight md:text-4xl lg:text-5xl" style={{ color: "#FFFFFF", fontFamily: "'Playfair Display', serif" }}>
              Benefits of Partnership
            </h3>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          >
            {benefits.map((benefit) => (
              <motion.div
                key={benefit}
                variants={itemVariants}
                className="group relative overflow-hidden rounded-2xl border p-5 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  borderColor: "rgba(255,255,255,0.08)",
                }}
              >
                <div className="absolute right-0 top-0 h-20 w-20 translate-x-5 -translate-y-5 rounded-full opacity-0 blur-2xl transition-all duration-500 group-hover:opacity-20" style={{ background: "radial-gradient(circle, #CBA135 0%, transparent 70%)" }} />
                <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg backdrop-blur-sm" style={{ background: "rgba(203,161,53,0.08)", border: "1px solid rgba(203,161,53,0.15)" }}>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 7L5 10L12 3" stroke="#CBA135" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h4 className="text-sm font-semibold leading-snug md:text-base" style={{ color: "#FFFFFF", fontFamily: "'Space Grotesk', sans-serif" }}>
                  {benefit}
                </h4>
                <div className="mt-3 h-px w-0 transition-all duration-500 group-hover:w-full" style={{ background: "linear-gradient(90deg, #CBA135 50%, transparent 100%)" }} />
              </motion.div>
            ))}
          </motion.div>

          {/* Additional benefits chips */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 flex flex-wrap justify-center gap-3"
          >
            {additionalBenefits.map((item) => (
              <span
                key={item}
                className="inline-block rounded-full px-4 py-2 text-xs font-medium uppercase tracking-wider"
                style={{
                  background: "rgba(203,161,53,0.1)",
                  border: "1px solid rgba(203,161,53,0.2)",
                  color: "#CBA135",
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                {item}
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Partner Model */}
      <div style={{ background: "#0D0D0D" }} className="relative overflow-hidden py-24 md:py-32">
        <div className="pointer-events-none absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2" style={{ width: "700px", height: "700px", background: "radial-gradient(circle, rgba(203,161,53,0.06) 0%, transparent 70%)" }} />
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="mx-auto mb-16 max-w-3xl text-center md:mb-20"
          >
            <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.25em]" style={{ color: "#CBA135", fontFamily: "'Space Grotesk', sans-serif" }}>
              The Model
            </span>
            <h3 className="text-3xl font-bold leading-tight md:text-4xl lg:text-5xl" style={{ color: "#FFFFFF", fontFamily: "'Playfair Display', serif" }}>
              KO Clinics Partner Model
            </h3>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const }}
            className="mx-auto max-w-4xl overflow-hidden rounded-2xl border backdrop-blur-xl"
            style={{
              background: "rgba(255,255,255,0.04)",
              borderColor: "rgba(255,255,255,0.08)",
            }}
          >
            <div className="p-8 md:p-12">
              <h4 className="mb-8 text-center text-xl font-semibold md:text-2xl" style={{ color: "#FFFFFF", fontFamily: "'Playfair Display', serif" }}>
                Every KO Clinics Partner Facility Includes:
              </h4>

              <div className="grid gap-4 sm:grid-cols-2">
                {partnerModelItems.map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.06 }}
                    className="flex items-start gap-3"
                  >
                    <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full" style={{ background: "rgba(203,161,53,0.15)" }}>
                      <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 4L3.5 6.5L9 1" stroke="#CBA135" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <span className="text-sm font-medium md:text-base" style={{ color: "rgba(255,255,255,0.8)", fontFamily: "'Inter', sans-serif" }}>
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="border-t p-8 text-center md:p-12" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-2xl font-bold tracking-tight md:text-3xl"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  background: "linear-gradient(135deg, #CBA135 0%, #E8D48B 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                One Room. One Procedure Space. One Signboard. Unlimited Opportunities.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mx-auto mt-6 h-px max-w-xs"
                style={{ background: "linear-gradient(90deg, transparent 0%, rgba(203,161,53,0.3) 50%, transparent 100%)" }}
              />
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.75 }}
                className="mt-6 text-sm italic leading-relaxed md:text-base"
                style={{ color: "rgba(255,255,255,0.45)", fontFamily: "'Inter', sans-serif" }}
              >
                &ldquo;Together, we are building the future of healthcare delivery.&rdquo;
              </motion.p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
