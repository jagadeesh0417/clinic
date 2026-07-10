"use client"

import { motion } from "framer-motion"

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const } },
}

const benefits = [
  {
    title: "Patient flow, not just a logo.",
    desc: "Partner clinics plug into our diagnostics network and referral pipeline from day one.",
  },
  {
    title: "Diagnostics without capex.",
    desc: "The QScan AI Health ATM sits in your clinic. You don't buy it.",
  },
  {
    title: "Clinical protocols, ready to run.",
    desc: "Treatment SOPs, consumables sourcing, and staff training, standardised across the network.",
  },
  {
    title: "A brand patients already searched for.",
    desc: "Twenty years of practice under one name.",
  },
  {
    title: "You keep your practice.",
    desc: "Partnership, not acquisition. Your clinic, your patients, your name alongside ours.",
  },
]

export default function WhyChoose() {
  return (
    <section
      id="why-choose"
      className="relative overflow-hidden py-24 md:py-32"
      style={{ background: "#100D0A" }}
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
            style={{ color: "#C9A14A" }}
          >
            Why Partner
          </span>
          <h2
            className="font-displayerif text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl"
            style={{ fontFamily: "var(--font-displayisplay), serif", color: "#FFFFFF" }}
          >
            Why Partner with{" "}
            <span style={{ background: "linear-gradient(135deg, #C9A14A 0%, #E8D48B 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              KO Clinics
            </span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="max-w-4xl mx-auto space-y-6"
        >
          {benefits.map((b, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="rounded-2xl p-6 md:p-8 transition-all duration-300"
              style={{
                background: "rgba(246,241,232,0.03)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                border: "1px solid rgba(246,241,232,0.06)",
              }}
              whileHover={{ y: -2, borderColor: "rgba(203,161,53,0.3)" }}
            >
              <h3
                className="text-lg md:text-xl font-semibold mb-2"
                style={{ color: "#C9A14A", fontFamily: "var(--font-displayans), sans-serif" }}
              >
                {b.title}
              </h3>
              <p
                className="text-base leading-relaxed"
                style={{ color: "rgba(246,241,232,0.6)", fontFamily: "var(--font-displayans), sans-serif" }}
              >
                {b.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
