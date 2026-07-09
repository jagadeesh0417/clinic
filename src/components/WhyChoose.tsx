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
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="max-w-5xl mx-auto space-y-8 text-center"
        >
          {[
            "Choose Kosmedixx for cutting-edge aesthetic and dermatological treatments designed to enhance your natural beauty and restore skin confidence. We offer advanced, US FDA-approved solutions for a wide range of concerns, including skin lightening, long-term sun damage, acne-related pigmentation, melasma, and age-related discoloration.",
            "At Kosmedixx, we go beyond skin\u2014our services also include hair transplant procedures, anti-ageing stem cell therapy, and a medically supervised weight and inch loss programme, all using FDA-approved technology to ensure safety and efficacy.",
            "Experience the Science of Kosmedixx, where board-certified dermatologists and aesthetic experts create personalised treatment plans to suit your unique needs. Whether you're looking to achieve a more even skin tone, rejuvenate your appearance, combat signs of ageing, or reshape your body, we are here to help you look and feel your best\u2014with visible, lasting results.",
            "Choose Kosmedixx\u2014where expert care meets scientific innovation for healthy, radiant skin, revitalised hair, and a confident new you.",
          ].map((text, i) => (
            <motion.p
              key={i}
              variants={itemVariants}
              className="text-base leading-relaxed md:text-lg"
              style={{ color: "rgba(255,255,255,0.6)", fontFamily: "'Inter', sans-serif" }}
            >
              {text}
            </motion.p>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
