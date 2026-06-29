"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useRef } from "react"

const images = [
  {
    src: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80",
    alt: "Modern clinic reception",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=800&q=80",
    alt: "Medical professionals",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80",
    alt: "Healthcare team",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?w=800&q=80",
    alt: "Medical consultation",
    span: "md:col-span-2 md:row-span-1",
  },
]

const benefits = [
  {
    id: 1,
    title: "National Recognition",
    desc: "Your clinic featured across KO Clinics' national brand platform with verified quality credentials.",
    level: "Platinum",
  },
  {
    id: 2,
    title: "Website Listing",
    desc: "Premium profile on the KO Clinics network with SEO-optimized practice pages.",
    level: "Platinum",
  },
  {
    id: 3,
    title: "Patient Leads",
    desc: "Qualified patient leads routed directly to your clinic through our digital ecosystem.",
    level: "Gold",
  },
  {
    id: 4,
    title: "Digital Marketing",
    desc: "Professional marketing collateral, campaigns, and brand assets to grow your practice.",
    level: "Gold",
  },
  {
    id: 5,
    title: "Call Centre Support",
    desc: "24/7 multi-lingual call centre handling appointments, inquiries, and patient follow-ups.",
    level: "Platinum",
  },
  {
    id: 6,
    title: "Business Consultation",
    desc: "Strategic guidance on operations, finance, and scaling your healthcare practice.",
    level: "Gold",
  },
  {
    id: 7,
    title: "Training Programs",
    desc: "Hands-on clinical and operational training programs for you and your staff.",
    level: "Gold",
  },
  {
    id: 8,
    title: "AI Software Access",
    desc: "Cutting-edge AI tools for diagnostics, scheduling, and patient management.",
    level: "Platinum",
  },
  {
    id: 9,
    title: "Marketing Materials",
    desc: "Professionally designed brochures, presentations, and digital assets for your clinic.",
    level: "Gold",
  },
  {
    id: 10,
    title: "Discounted Products",
    desc: "Exclusive pricing on dermal fillers, threads, skincare, and medical consumables.",
    level: "Gold",
  },
  {
    id: 11,
    title: "Equipment Rental",
    desc: "Access to premium aesthetic and surgical machines on flexible rental terms.",
    level: "Platinum",
  },
  {
    id: 12,
    title: "Doctor Referral Network",
    desc: "Connect with a curated network of specialists for referrals and collaborative care.",
    level: "Platinum",
  },
]

const levelColors: Record<string, { bg: string; text: string; border: string }> = {
  Platinum: {
    bg: "rgba(0,213,255,0.12)",
    text: "#00D5FF",
    border: "rgba(0,213,255,0.2)",
  },
  Gold: {
    bg: "rgba(203,161,53,0.12)",
    text: "#CBA135",
    border: "rgba(203,161,53,0.2)",
  },
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
}

export default function Membership() {
  const ref = useRef<HTMLElement>(null)

  return (
    <section
      ref={ref}
      id="membership"
      className="relative overflow-hidden py-24 md:py-32"
      style={{ background: "#0D0D0D" }}
    >
      <div className="pointer-events-none absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAyKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const }}
          className="mx-auto mb-16 max-w-3xl text-center md:mb-24"
        >
          <span
            className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.25em]"
            style={{ color: "#00D5FF" }}
          >
            Premium Network
          </span>
          <h2
            className="font-serif text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl"
            style={{ color: "#FFFFFF", fontFamily: "'Playfair Display', serif" }}
          >
            KO Clinics{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #CBA135 0%, #E8D48B 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Membership
            </span>{" "}
            Program
          </h2>
          <p
            className="mt-5 text-base leading-relaxed md:text-lg"
            style={{ color: "rgba(255,255,255,0.6)", fontFamily: "'Inter', sans-serif" }}
          >
            Premium Benefits for Partner Clinics
          </p>
        </motion.div>

        <div className="mb-20 grid grid-cols-1 gap-3 md:grid-cols-4 md:grid-rows-2 md:gap-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] as const }}
              className={`group relative overflow-hidden rounded-2xl ${img.span}`}
              style={{ minHeight: "220px" }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-all duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(135deg, rgba(203,161,53,0.25) 0%, rgba(0,0,0,0.7) 100%)",
                }}
              />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <span
                  className="text-sm font-medium tracking-wide"
                  style={{ color: "rgba(255,255,255,0.9)", fontFamily: "'Inter', sans-serif" }}
                >
                  {img.alt}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {benefits.map((benefit) => {
            const lvl = levelColors[benefit.level]

            return (
              <motion.div
                key={benefit.id}
                variants={cardVariants}
                className="group relative overflow-hidden rounded-2xl border p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  borderColor: "rgba(255,255,255,0.08)",
                }}
              >
                <div
                  className="absolute -right-16 -top-16 h-32 w-32 rounded-full opacity-0 blur-3xl transition-all duration-500 group-hover:opacity-20"
                  style={{
                    background:
                      benefit.level === "Platinum"
                        ? "radial-gradient(circle, #00D5FF 0%, transparent 70%)"
                        : "radial-gradient(circle, #CBA135 0%, transparent 70%)",
                  }}
                />

                <div
                  className="mb-4 inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider"
                  style={{
                    backgroundColor: lvl.bg,
                    color: lvl.text,
                    border: `1px solid ${lvl.border}`,
                    fontFamily: "'Space Grotesk', sans-serif",
                  }}
                >
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2Z" />
                  </svg>
                  {benefit.level}
                </div>

                <div
                  className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl backdrop-blur-sm transition-all duration-500 group-hover:scale-110"
                  style={{
                    background:
                      benefit.level === "Platinum"
                        ? "rgba(0,213,255,0.1)"
                        : "rgba(203,161,53,0.1)",
                    color: lvl.text,
                    border: `1px solid ${lvl.border}`,
                  }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    {benefit.id === 1 && (
                      <>
                        <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                        <circle cx="12" cy="12" r="10" />
                      </>
                    )}
                    {benefit.id === 2 && (
                      <>
                        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                      </>
                    )}
                    {benefit.id === 3 && (
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92Z" />
                    )}
                    {benefit.id === 4 && (
                      <path d="M2 12 9 19 22 6" />
                    )}
                    {benefit.id === 5 && (
                      <>
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92Z" />
                      </>
                    )}
                    {benefit.id === 6 && (
                      <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5Z" />
                    )}
                    {benefit.id === 7 && (
                      <>
                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2Z" />
                        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7Z" />
                      </>
                    )}
                    {benefit.id === 8 && (
                      <>
                        <rect x="4" y="4" width="16" height="16" rx="2" />
                        <path d="M9 9h.01" />
                        <path d="M15 9h.01" />
                        <path d="M9 15h6" />
                      </>
                    )}
                    {benefit.id === 9 && (
                      <>
                        <rect x="3" y="3" width="18" height="18" rx="2" />
                        <path d="M3 9h18" />
                        <path d="M9 21V9" />
                      </>
                    )}
                    {benefit.id === 10 && (
                      <path d="m8 3 4 8 5-5 5 15H2L8 3Z" />
                    )}
                    {benefit.id === 11 && (
                      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76Z" />
                    )}
                    {benefit.id === 12 && (
                      <>
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                      </>
                    )}
                  </svg>
                </div>

                <h3
                  className="mb-2 text-lg font-semibold"
                  style={{ color: "#FFFFFF", fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {benefit.title}
                </h3>

                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "rgba(255,255,255,0.55)", fontFamily: "'Inter', sans-serif" }}
                >
                  {benefit.desc}
                </p>

                <div
                  className="mt-4 h-px w-0 transition-all duration-500 group-hover:w-full"
                  style={{
                    background:
                      benefit.level === "Platinum"
                        ? "linear-gradient(90deg, #00D5FF 0%, #CBA135 50%, transparent 100%)"
                        : "linear-gradient(90deg, #CBA135 0%, #00D5FF 50%, transparent 100%)",
                  }}
                />
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
