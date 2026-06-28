"use client"

import { motion } from "framer-motion"
import { useRef } from "react"

const infrastructureCards = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="14" width="20" height="16" rx="2" stroke="#00D5FF" strokeWidth="1.5" fill="none" />
        <path d="M16 14V6M16 6L20 10M16 6L12 10" stroke="#00D5FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="10" y1="20" x2="12" y2="20" stroke="#00D5FF" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="10" y1="24" x2="14" y2="24" stroke="#00D5FF" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="20" y1="20" x2="22" y2="20" stroke="#00D5FF" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="18" y1="24" x2="22" y2="24" stroke="#00D5FF" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Dedicated Consultation Room",
    desc: "A fully functional consultation room reserved for KO Clinics activities, visiting specialists, teleconsultations, and patient assessments.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="6" width="24" height="20" rx="3" stroke="#00D5FF" strokeWidth="1.5" fill="none" />
        <circle cx="16" cy="16" r="4" stroke="#00D5FF" strokeWidth="1.5" />
        <line x1="16" y1="12" x2="16" y2="14" stroke="#00D5FF" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="16" y1="18" x2="16" y2="20" stroke="#00D5FF" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="12" y1="16" x2="14" y2="16" stroke="#00D5FF" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="18" y1="16" x2="20" y2="16" stroke="#00D5FF" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M4 22H28" stroke="#00D5FF" strokeWidth="1.5" />
      </svg>
    ),
    title: "Dedicated Procedure Room",
    desc: "A procedure room suitable for aesthetic treatments, minor procedures, wellness services, dermatology treatments, and partner specialist sessions.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="4" width="20" height="24" rx="2" stroke="#CBA135" strokeWidth="1.5" fill="none" />
        <rect x="10" y="8" width="12" height="4" rx="0.5" stroke="#CBA135" strokeWidth="1.5" fill="none" />
        <line x1="8" y1="16" x2="24" y2="16" stroke="#CBA135" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M16 20v4" stroke="#CBA135" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M13 24h6" stroke="#CBA135" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "KO Clinics Branding Board",
    desc: "Partner clinics must install an official KO Clinics co-branding signboard outside their facility. The branding board signifies that the clinic is an authorized member of the KO Clinics Healthcare Network.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 4L18.5 10.5L25 11L20 15.5L21.5 22L16 18.5L10.5 22L12 15.5L7 11L13.5 10.5L16 4Z" stroke="#CBA135" strokeWidth="1.5" strokeLinejoin="round" />
        <circle cx="16" cy="14" r="3" stroke="#CBA135" strokeWidth="1.5" fill="none" />
      </svg>
    ),
    title: "KO Clinics Lollipop Signage",
    desc: "Each partner clinic must display a premium illuminated KO Clinics Lollipop Board outside the premises for improved visibility and brand recognition. This signage helps patients easily identify KO Clinics partner facilities and strengthens nationwide brand consistency.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="6" width="24" height="20" rx="2" stroke="#00D5FF" strokeWidth="1.5" fill="none" />
        <path d="M10 14h4v8h-4z" stroke="#00D5FF" strokeWidth="1.5" />
        <path d="M16 11h4v11h-4z" stroke="#00D5FF" strokeWidth="1.5" />
        <path d="M22 16h2v6h-2z" stroke="#00D5FF" strokeWidth="1.5" />
      </svg>
    ),
    title: "Quantum Health Counter",
    desc: "Every partner clinic will establish a dedicated Quantum Health Product Counter. The counter will enable patients to purchase premium healthcare, wellness, anti-ageing, hair care, and skincare products directly from the clinic.",
  },
]

const quantumItems = [
  "Product Display Unit",
  "Branding Materials",
  "Product Catalogues",
  "Promotional Displays",
  "Digital Product Information",
  "Retail Sales Support",
]

const additionalRequirements = [
  "Valid Medical Registration",
  "Required Healthcare Licenses",
  "Hygienic Clinical Environment",
  "Qualified Medical Professionals",
  "Digital Communication Capability",
  "Commitment to KO Clinics Brand Standards",
  "Willingness to participate in training and digital integration programs",
]

const benefits = [
  "National Brand Recognition",
  "Patient Acquisition Support",
  "Digital Marketing Assistance",
  "Website Listing",
  "Business Growth Consultation",
  "Doctor Referral Network",
  "Product Revenue Opportunities",
  "Consultation Space Monetization",
  "Equipment Rental Support",
  "AI Healthcare Technology Access",
  "Corporate Partnership Opportunities",
  "International Expansion Support",
]

const partnerModelItems = [
  "One Consultation Room",
  "One Procedure Room",
  "KO Clinics Exterior Branding Board",
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
    <section
      ref={ref}
      id="partner-requirements"
      className="relative overflow-hidden"
    >
      {/* Section 0 – Hero / Header */}
      <div style={{ background: "#050505" }} className="relative overflow-hidden py-24 md:py-32">
        <div className="pointer-events-none absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAyKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40" />
        <div className="pointer-events-none absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2" style={{ width: "800px", height: "800px", background: "radial-gradient(circle, rgba(0,213,255,0.06) 0%, transparent 70%)" }} />
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="mx-auto max-w-4xl text-center"
          >
            <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.25em]" style={{ color: "#00D5FF", fontFamily: "'Space Grotesk', sans-serif" }}>
              Become a KO Clinics Partner
            </span>
            <h2 className="font-serif text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl" style={{ color: "#FFFFFF", fontFamily: "'Playfair Display', serif" }}>
              Partner{" "}
              <span style={{ background: "linear-gradient(135deg, #CBA135 0%, #E8D48B 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Eligibility
              </span>{" "}
              Requirements
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed md:text-lg" style={{ color: "rgba(255,255,255,0.6)", fontFamily: "'Inter', sans-serif" }}>
              To maintain a premium and standardized healthcare experience across the network, every partner clinic joining KO Clinics must fulfill the following requirements.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Section 1 – Minimum Infrastructure Requirements */}
      <div style={{ background: "#0D0D0D" }} className="relative overflow-hidden py-24 md:py-32">
        <div className="pointer-events-none absolute right-0 top-1/4 w-96 h-96 rounded-full blur-[150px]" style={{ background: "radial-gradient(circle, rgba(203,161,53,0.06) 0%, transparent 70%)" }} />
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="mx-auto mb-16 max-w-3xl text-center md:mb-20"
          >
            <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.25em]" style={{ color: "#CBA135", fontFamily: "'Space Grotesk', sans-serif" }}>
              Section 01
            </span>
            <h3 className="text-3xl font-bold leading-tight md:text-4xl lg:text-5xl" style={{ color: "#FFFFFF", fontFamily: "'Playfair Display', serif" }}>
              Minimum Infrastructure Requirements
            </h3>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid gap-5 md:grid-cols-2 lg:grid-cols-3"
          >
            {infrastructureCards.map((card, i) => (
              <motion.div
                key={card.title}
                variants={itemVariants}
                className={`group relative overflow-hidden rounded-2xl border p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 ${
                  i === 4 ? "lg:col-start-2 lg:col-end-3" : ""
                }`}
                style={{
                  background: "rgba(255,255,255,0.04)",
                  borderColor: "rgba(255,255,255,0.08)",
                }}
              >
                <div className="absolute right-0 top-0 h-24 w-24 translate-x-6 -translate-y-6 rounded-full opacity-0 blur-2xl transition-all duration-500 group-hover:opacity-20" style={{ background: "radial-gradient(circle, #00D5FF 0%, transparent 70%)" }} />

                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl backdrop-blur-sm" style={{ background: "rgba(0,213,255,0.08)", border: "1px solid rgba(0,213,255,0.15)" }}>
                  {card.icon}
                </div>

                <h4 className="mb-2 text-lg font-semibold" style={{ color: "#FFFFFF", fontFamily: "'Space Grotesk', sans-serif" }}>
                  {card.title}
                </h4>

                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)", fontFamily: "'Inter', sans-serif" }}>
                  {card.desc}
                </p>

                {card.title === "Quantum Health Counter" && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {quantumItems.map((item) => (
                      <span
                        key={item}
                        className="inline-block rounded-full px-3 py-1 text-[10px] font-medium uppercase tracking-wider"
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
                  </div>
                )}

                <div className="mt-4 h-px w-0 transition-all duration-500 group-hover:w-full" style={{ background: "linear-gradient(90deg, #00D5FF 0%, #CBA135 50%, transparent 100%)" }} />
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
                <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(0,213,255,0.15) 0%, rgba(0,0,0,0.5) 100%)" }} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Section 2 – Additional Requirements */}
      <div style={{ background: "#050505" }} className="relative overflow-hidden py-24 md:py-32">
        <div className="pointer-events-none absolute left-1/4 top-1/3 w-80 h-80 rounded-full blur-[120px]" style={{ background: "radial-gradient(circle, rgba(0,213,255,0.05) 0%, transparent 70%)" }} />
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="mx-auto mb-16 max-w-3xl text-center md:mb-20"
          >
            <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.25em]" style={{ color: "#00D5FF", fontFamily: "'Space Grotesk', sans-serif" }}>
              Section 02
            </span>
            <h3 className="text-3xl font-bold leading-tight md:text-4xl lg:text-5xl" style={{ color: "#FFFFFF", fontFamily: "'Playfair Display', serif" }}>
              Additional Requirements
            </h3>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const }}
            className="mx-auto max-w-3xl overflow-hidden rounded-2xl border p-8 backdrop-blur-xl md:p-10"
            style={{
              background: "rgba(255,255,255,0.04)",
              borderColor: "rgba(255,255,255,0.08)",
            }}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              {additionalRequirements.map((req, i) => (
                <motion.div
                  key={req}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex items-start gap-3"
                >
                  <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full" style={{ background: "rgba(0,213,255,0.15)" }}>
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 4L3.5 6.5L9 1" stroke="#00D5FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium md:text-base" style={{ color: "rgba(255,255,255,0.8)", fontFamily: "'Inter', sans-serif" }}>
                    {req}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Section 3 – Benefits of Meeting KO Clinics Standards */}
      <div style={{ background: "#0D0D0D" }} className="relative overflow-hidden py-24 md:py-32">
        <div className="pointer-events-none absolute right-1/3 bottom-1/4 w-96 h-96 rounded-full blur-[150px]" style={{ background: "radial-gradient(circle, rgba(203,161,53,0.05) 0%, transparent 70%)" }} />
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="mx-auto mb-16 max-w-3xl text-center md:mb-20"
          >
            <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.25em]" style={{ color: "#CBA135", fontFamily: "'Space Grotesk', sans-serif" }}>
              Section 03
            </span>
            <h3 className="text-3xl font-bold leading-tight md:text-4xl lg:text-5xl" style={{ color: "#FFFFFF", fontFamily: "'Playfair Display', serif" }}>
              Benefits of Meeting KO Clinics Standards
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
                <div className="absolute right-0 top-0 h-20 w-20 translate-x-5 -translate-y-5 rounded-full opacity-0 blur-2xl transition-all duration-500 group-hover:opacity-20" style={{ background: "radial-gradient(circle, #00D5FF 0%, transparent 70%)" }} />

                <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg backdrop-blur-sm" style={{ background: "rgba(0,213,255,0.08)", border: "1px solid rgba(0,213,255,0.15)" }}>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 7L5 10L12 3" stroke="#00D5FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>

                <h4 className="text-sm font-semibold leading-snug md:text-base" style={{ color: "#FFFFFF", fontFamily: "'Space Grotesk', sans-serif" }}>
                  {benefit}
                </h4>

                <div className="mt-3 h-px w-0 transition-all duration-500 group-hover:w-full" style={{ background: "linear-gradient(90deg, #00D5FF 0%, #CBA135 50%, transparent 100%)" }} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Section 4 – KO Clinics Partner Model */}
      <div style={{ background: "#050505" }} className="relative overflow-hidden py-24 md:py-32">
        <div className="pointer-events-none absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2" style={{ width: "700px", height: "700px", background: "radial-gradient(circle, rgba(203,161,53,0.06) 0%, transparent 70%)" }} />
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="mx-auto mb-16 max-w-3xl text-center md:mb-20"
          >
            <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.25em]" style={{ color: "#00D5FF", fontFamily: "'Space Grotesk', sans-serif" }}>
              Section 04
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
                className="mb-3 text-2xl font-bold tracking-tight md:text-3xl"
                style={{
                  color: "#FFFFFF",
                  fontFamily: "'Playfair Display', serif",
                  background: "linear-gradient(135deg, #CBA135 0%, #E8D48B 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                One Network. Three Revenue Streams.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.45 }}
                className="text-sm font-medium tracking-wide md:text-base"
                style={{ color: "rgba(255,255,255,0.5)", fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Healthcare Services • Quantum Health Products • Consultation Space Rental
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
