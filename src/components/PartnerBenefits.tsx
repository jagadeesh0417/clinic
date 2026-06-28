"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useRef } from "react"

const images = [
  {
    src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    alt: "Analytics dashboard",
    span: "col-span-1 md:col-span-2 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80",
    alt: "Financial growth chart",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
    alt: "Business consulting",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&q=80",
    alt: "Marketing strategy",
    span: "col-span-1 md:col-span-2 row-span-1",
  },
]

const benefits = [
  { id: 1, title: "Lead Generation", desc: "High-intent patient leads delivered directly to your clinic through our premium digital marketing funnel." },
  { id: 2, title: "Walk-in Patients", desc: "Drive foot traffic with strategic local visibility and reputation management across all major platforms." },
  { id: 3, title: "Insurance Support", desc: "End-to-end insurance credentialing and claims management to maximize your reimbursements." },
  { id: 4, title: "Health Packages", desc: "Curated preventive health packages that increase patient retention and average ticket size." },
  { id: 5, title: "Membership Programs", desc: "Recurring revenue through membership plans that build long-term patient loyalty and cash flow." },
  { id: 6, title: "Corporate Patients", desc: "B2B corporate wellness partnerships that bring consistent, high-value patient volume to your clinic." },
  { id: 7, title: "Doctor Referrals", desc: "An integrated referral network connecting you with top specialists for mutual patient growth." },
  { id: 8, title: "Network Benefits", desc: "Exclusive partnership perks including bulk procurement savings, training, and technology discounts." },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const } },
}

export default function PartnerBenefits() {
  const ref = useRef<HTMLElement>(null)

  return (
    <section
      ref={ref}
      id="partner-benefits"
      className="relative overflow-hidden py-24 md:py-32"
      style={{ background: "linear-gradient(180deg, #050505 0%, #0D0D0D 100%)" }}
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
            Partner Benefits
          </span>
          <h2
            className="font-serif text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl"
            style={{ color: "#FFFFFF", fontFamily: "'Playfair Display', serif" }}
          >
            Revenue{" "}
            <span style={{ background: "linear-gradient(135deg, #CBA135 0%, #E8D48B 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Growth
            </span>{" "}
            Engine
          </h2>
          <p
            className="mt-5 text-base leading-relaxed md:text-lg"
            style={{ color: "rgba(255,255,255,0.6)", fontFamily: "'Inter', sans-serif" }}
          >
            Unlock eight powerful revenue streams designed to transform your clinic into a
            high-growth healthcare enterprise.
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
                  background: "linear-gradient(135deg, rgba(0,213,255,0.25) 0%, rgba(0,0,0,0.7) 100%)",
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
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {benefits.map((benefit) => (
            <motion.div
              key={benefit.id}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-2xl border p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1"
              style={{
                background: "rgba(255,255,255,0.04)",
                borderColor: "rgba(255,255,255,0.08)",
              }}
            >
              <div
                className="absolute right-0 top-0 h-24 w-24 translate-x-6 -translate-y-6 rounded-full opacity-10 blur-2xl transition-all duration-500 group-hover:opacity-25"
                style={{ background: "radial-gradient(circle, #00D5FF 0%, transparent 70%)" }}
              />

              <div
                className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl text-sm font-bold backdrop-blur-sm"
                style={{
                  background: "rgba(0,213,255,0.1)",
                  color: "#00D5FF",
                  border: "1px solid rgba(0,213,255,0.15)",
                  fontFamily: "'Space Grotesk', sans-serif",
                }}
              >
                {String(benefit.id).padStart(2, "0")}
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
                  background: "linear-gradient(90deg, #00D5FF 0%, #CBA135 50%, transparent 100%)",
                }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
