"use client"

import { motion } from "framer-motion"

const features = [
  "Zero Investment Model",
  "Strong Brand Recognition",
  "AI Healthcare Technology",
  "Marketing Support",
  "Website Presence",
  "Lead Generation",
  "Walk-in Patient Acquisition",
  "Equipment Rental",
  "Staff Support",
  "Doctor Network",
  "Product Discounts",
  "Home Healthcare",
  "Corporate Tie-Ups",
  "Revenue Growth",
  "International Expansion",
]

function CheckIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#CBA135"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const } },
}

export default function WhyChoose() {
  return (
    <section
      id="why-choose"
      className="relative overflow-hidden py-24 md:py-32"
      style={{ background: "#050505" }}
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
            style={{ color: "#CBA135" }}
          >
            Why Choose
          </span>
          <h2
            className="font-serif text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl"
            style={{ fontFamily: "'Playfair Display', serif", color: "#FFFFFF" }}
          >
            Why Choose{" "}
            <span style={{ background: "linear-gradient(135deg, #CBA135 0%, #E8D48B 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              KO Clinics
            </span>
          </h2>
          <p
            className="mt-5 text-base leading-relaxed md:text-lg"
            style={{ color: "rgba(255,255,255,0.6)", fontFamily: "'Inter', sans-serif" }}
          >
            Built for partners who want to build, grow, and scale a world-class healthcare practice.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
        >
          {features.map((feature) => (
            <motion.div
              key={feature}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-2xl border p-5 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1"
              style={{
                background: "rgba(255,255,255,0.04)",
                borderColor: "rgba(255,255,255,0.08)",
              }}
            >
              <div
                className="absolute right-0 top-0 h-24 w-24 translate-x-6 -translate-y-6 rounded-full opacity-10 blur-2xl transition-all duration-500 group-hover:opacity-25"
                style={{ background: "radial-gradient(circle, #CBA135 0%, transparent 70%)" }}
              />

              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg" style={{ background: "rgba(203,161,53,0.12)" }}>
                <CheckIcon />
              </div>

              <h3
                className="text-sm font-semibold leading-snug md:text-base"
                style={{ color: "#FFFFFF", fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {feature}
              </h3>

              <div
                className="mt-3 h-px w-0 transition-all duration-500 group-hover:w-full"
                style={{
                  background: "linear-gradient(90deg, #CBA135 0%, rgba(203,161,53,0.3) 100%)",
                }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
