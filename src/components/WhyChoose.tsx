"use client"

import { motion } from "framer-motion"
import { useRef } from "react"

const cards = [
  { icon: "💎", title: "Zero Investment", desc: "Start your healthcare journey with no upfront costs" },
  { icon: "🤖", title: "AI Technology", desc: "Power your clinic with cutting-edge artificial intelligence" },
  { icon: "📢", title: "Marketing Support", desc: "Expert marketing to grow your patient base" },
  { icon: "📞", title: "Lead Generation", desc: "Quality leads delivered directly to your clinic" },
  { icon: "🔧", title: "Equipment Rental", desc: "Access premium equipment without purchase" },
  { icon: "👩‍⚕️", title: "Staff Support", desc: "Skilled healthcare professionals at your service" },
  { icon: "🩺", title: "Doctor Network", desc: "Connect with specialists across India" },
  { icon: "🌍", title: "International Presence", desc: "Global recognition and patient reach" },
  { icon: "🤝", title: "Corporate Partnerships", desc: "Tie-ups with leading corporations" },
  { icon: "📈", title: "Revenue Growth", desc: "Multiple revenue streams for your clinic" },
  { icon: "🏠", title: "Home Healthcare", desc: "Expand services beyond your clinic walls" },
  { icon: "💻", title: "Digital Ecosystem", desc: "Complete digital transformation for your practice" },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const } },
}

export default function WhyChoose() {
  const ref = useRef<HTMLElement>(null)

  return (
    <section
      ref={ref}
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
          className="mx-auto mb-16 max-w-3xl text-center md:mb-24"
        >
          <span
            className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.25em]"
            style={{ color: "#00D5FF" }}
          >
            Why Choose KO
          </span>
          <h2
            className="font-serif text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl"
            style={{ color: "#FFFFFF", fontFamily: "'Playfair Display', serif" }}
          >
            Built for{" "}
            <span style={{ background: "linear-gradient(135deg, #CBA135 0%, #E8D48B 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Your Success
            </span>
          </h2>
          <p
            className="mt-5 text-base leading-relaxed md:text-lg"
            style={{ color: "rgba(255,255,255,0.6)", fontFamily: "'Inter', sans-serif" }}
          >
            Everything you need to build, grow, and scale a world-class healthcare practice.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {cards.map((card) => (
            <motion.div
              key={card.title}
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

              <span className="mb-4 block text-3xl" role="img">
                {card.icon}
              </span>

              <h3
                className="mb-2 text-lg font-semibold"
                style={{ color: "#FFFFFF", fontFamily: "'Inter', sans-serif" }}
              >
                {card.title}
              </h3>

              <p
                className="text-sm leading-relaxed"
                style={{ color: "rgba(255,255,255,0.55)", fontFamily: "'Inter', sans-serif" }}
              >
                {card.desc}
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
