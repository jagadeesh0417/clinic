"use client"

import { motion } from "framer-motion"
import { useRef } from "react"

const requirements = [
  "1 Consultation Room",
  "1 Procedure Room",
  "KO Clinics Branding Board",
  "Small KO Clinics Lollypop Sign Board",
  "Prime Clinic Location",
  "Clinic Registration",
  "Required Licenses",
  "Water / Electricity / Air Conditioning",
  "Basic Infrastructure",
  "Passion to Grow",
]

const benefitCategories = [
  {
    title: "Patient Support",
    items: [
      "Qualified Leads", "Walk-in Patients", "Online Booking", "Teleconsultation",
      "Corporate Tie-ups", "Health Camps", "Medical Tourism", "Digital Patient Acquisition",
    ],
  },
  {
    title: "Digital Presence",
    items: [
      "Premium Listing", "SEO", "Google Optimization", "Website Listing",
      "Appointment Management", "WhatsApp Integration", "Social Media Branding",
      "AI Chat Support", "Online Reputation Management", "Digital Marketing",
    ],
  },
  {
    title: "Business Growth Support",
    items: [
      "Practice Management", "Revenue Optimization", "Branding", "Marketing",
      "Sales Support", "Franchise Expansion", "CRM Support",
      "Corporate Partnerships", "Business Consultation",
    ],
  },
  {
    title: "AI Healthcare Platform",
    items: [
      "AI Health ATM", "Full Body Screening", "Health Reports", "Preventive Analysis",
      "Telemedicine", "Electronic Medical Records", "Online Consultation", "Smart Patient Management",
    ],
  },
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
              What You Need to Join KO Clinics
            </span>
            <h2 className="font-serif text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl" style={{ color: "#FFFFFF", fontFamily: "'Playfair Display', serif" }}>
              Partner{" "}
              <span style={{ background: "linear-gradient(135deg, #CBA135 0%, #E8D48B 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Requirements
              </span>
            </h2>
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
            className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
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
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="#CBA135" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
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

      {/* Benefits of Partnership */}
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

          <div className="grid gap-6 md:grid-cols-2">
            {benefitCategories.map((category, catIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: catIndex * 0.1, ease: [0.25, 0.46, 0.45, 0.94] as const }}
                className="group relative overflow-hidden rounded-2xl border p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 md:p-8"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  borderColor: "rgba(255,255,255,0.08)",
                }}
              >
                <div className="absolute right-0 top-0 h-32 w-32 translate-x-8 -translate-y-8 rounded-full opacity-0 blur-3xl transition-all duration-500 group-hover:opacity-20" style={{ background: "radial-gradient(circle, #CBA135 0%, transparent 70%)" }} />
                <h4
                  className="mb-5 text-xl font-bold md:text-2xl"
                  style={{
                    color: "#CBA135",
                    fontFamily: "'Playfair Display', serif",
                  }}
                >
                  {category.title}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-medium md:text-sm"
                      style={{
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(203,161,53,0.15)",
                        color: "rgba(255,255,255,0.85)",
                        fontFamily: "'Inter', sans-serif",
                      }}
                    >
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
                        <path d="M20 6L9 17L4 12" stroke="#CBA135" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
