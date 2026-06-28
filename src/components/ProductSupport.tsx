"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const images = [
  {
    src: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=800&q=80",
    alt: "Pharmaceutical retail display",
    span: "col-span-1 md:col-span-2 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&q=80",
    alt: "Product consultation counter",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&q=80",
    alt: "Marketing collateral",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    alt: "Digital marketing analytics",
    span: "col-span-1 md:col-span-2 row-span-1",
  },
]

const benefits = [
  { id: 1, title: "Wholesale Pricing", desc: "Access exclusive wholesale pricing on premium Quantum Health products to maximize your clinic's profit margins." },
  { id: 2, title: "Inventory Support", desc: "Never run out of stock with automated inventory management and timely replenishment for your clinic." },
  { id: 3, title: "Marketing Materials", desc: "Professionally designed brochures, posters, and digital assets to showcase products effectively." },
  { id: 4, title: "Retail Branding", desc: "Co-branded retail solutions that align Quantum Health products with your clinic's unique identity." },
  { id: 5, title: "Training Programs", desc: "Comprehensive product training for your staff to ensure confident and knowledgeable recommendations." },
  { id: 6, title: "Promotional Campaigns", desc: "Seasonal and event-based promotional campaigns designed to drive product sales and patient engagement." },
  { id: 7, title: "Sales Support", desc: "Dedicated sales support team to help you optimize product placement and drive retail performance." },
  { id: 8, title: "Seasonal Offers", desc: "Exclusive seasonal promotions and bundles that create urgency and boost average transaction value." },
]

const badges = ["Digital Promotions", "Counter Setup Guidance"]

const kitItems = ["Counter Branding", "Display Units", "Product Catalogues", "Digital Marketing", "Patient Materials"]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const } },
}

export default function ProductSupport() {
  return (
    <section
      id="product-support"
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
          className="mx-auto mb-16 max-w-4xl text-center md:mb-24"
        >
          <span
            className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.25em]"
            style={{ color: "#00D5FF", fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Product Support
          </span>
          <h2
            className="font-serif text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl"
            style={{ color: "#FFFFFF", fontFamily: "'Playfair Display', serif" }}
          >
            Quantum Health{" "}
            <span style={{ background: "linear-gradient(135deg, #CBA135 0%, #E8D48B 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Product Support
            </span>
          </h2>
          <p
            className="mt-4 text-lg font-medium md:text-xl"
            style={{ color: "rgba(255,255,255,0.75)", fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Complete Retail Support for Partner Clinics
          </p>
          <p
            className="mt-3 text-base leading-relaxed md:text-lg"
            style={{ color: "rgba(255,255,255,0.6)", fontFamily: "'Inter', sans-serif" }}
          >
            KO Clinics provides comprehensive product support through Quantum Health.
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
                  background: "linear-gradient(135deg, rgba(203,161,53,0.2) 0%, rgba(0,0,0,0.7) 100%)",
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

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-3"
        >
          <span
            className="text-sm font-medium uppercase tracking-wider"
            style={{ color: "rgba(255,255,255,0.4)", fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Also available:
          </span>
          {badges.map((badge) => (
            <span
              key={badge}
              className="rounded-full border px-5 py-2 text-sm font-medium backdrop-blur-sm transition-all duration-300 hover:scale-105"
              style={{
                background: "rgba(203,161,53,0.08)",
                borderColor: "rgba(203,161,53,0.25)",
                color: "#CBA135",
                fontFamily: "'Space Grotesk', sans-serif",
              }}
            >
              {badge}
            </span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const }}
          className="mx-auto mt-20 max-w-5xl overflow-hidden rounded-3xl border backdrop-blur-xl md:mt-28"
          style={{
            background: "linear-gradient(135deg, rgba(0,213,255,0.04) 0%, rgba(203,161,53,0.04) 100%)",
            borderColor: "rgba(255,255,255,0.08)",
          }}
        >
          <div className="grid md:grid-cols-2">
            <div className="relative flex items-center p-8 md:p-12">
              <div
                className="pointer-events-none absolute -left-10 -top-10 h-72 w-72 rounded-full opacity-20 blur-3xl"
                style={{ background: "radial-gradient(circle, #00D5FF 0%, transparent 70%)" }}
              />
              <div className="relative">
                <span
                  className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.2em]"
                  style={{ color: "#CBA135", fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  Counter Kit
                </span>
                <h3
                  className="mb-4 text-2xl font-bold md:text-3xl"
                  style={{ color: "#FFFFFF", fontFamily: "'Playfair Display', serif" }}
                >
                  Quantum Health Counter Kit
                </h3>
                <p
                  className="leading-relaxed"
                  style={{ color: "rgba(255,255,255,0.65)", fontFamily: "'Inter', sans-serif" }}
                >
                  Each partner clinic receives: Quantum Health Counter Branding, Display Units, Product Catalogues, Digital Marketing Support, Patient Awareness Materials
                </p>
              </div>
            </div>
            <div
              className="relative flex items-center p-8 md:p-12"
              style={{ background: "rgba(255,255,255,0.02)" }}
            >
              <div className="grid w-full grid-cols-1 gap-3 sm:grid-cols-2">
                {kitItems.map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="flex items-center gap-3 rounded-xl border px-4 py-3 backdrop-blur-sm transition-all duration-300 hover:border-[#00D5FF]/30"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      borderColor: "rgba(255,255,255,0.08)",
                    }}
                  >
                    <span
                      className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold"
                      style={{ background: "rgba(0,213,255,0.15)", color: "#00D5FF" }}
                    >
                      {i + 1}
                    </span>
                    <span
                      className="text-sm font-medium"
                      style={{ color: "rgba(255,255,255,0.85)", fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
