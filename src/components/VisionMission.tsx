"use client"

import { motion } from "framer-motion"

const cards = [
  {
    icon: "\uD83D\uDCC0",
    title: "Digitize Healthcare",
    desc: "Transform clinics with digital records and smart management",
  },
  {
    icon: "\uD83E\uDD1D",
    title: "Increase Patient Access",
    desc: "Connect patients to quality healthcare nationwide",
  },
  {
    icon: "\uD83E\uDD16",
    title: "AI Integration",
    desc: "Power clinics with artificial intelligence and predictive analytics",
  },
  {
    icon: "\uD83D\uDCC8",
    title: "Revenue Growth",
    desc: "Boost clinic revenue through our extensive network",
  },
  {
    icon: "\uD83C\uDF10",
    title: "Business Expansion",
    desc: "Expand your practice across cities and countries",
  },
  {
    icon: "\uD83C\uDF0D",
    title: "Global Healthcare Ecosystem",
    desc: "Join a worldwide network of healthcare excellence",
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
}

export default function VisionMission() {
  return (
    <section className="relative overflow-hidden bg-[#050505]">
      {/* Vision Section */}
      <div
        id="vision"
        className="relative flex min-h-[70vh] items-center justify-center px-6 py-28"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(192,161,_53,_0.06)_0%,_transparent_70%)]" />
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" as const }}
            className="font-['Playfair_Display'] text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl"
          >
            Our Vision
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" as const }}
            className="mx-auto mt-6 h-[2px] w-24 origin-center bg-[#CBA135]"
          />
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" as const }}
            className="mt-8 font-['Inter'] text-lg leading-relaxed text-[#B7B7B7] sm:text-xl md:text-2xl"
          >
            To become the world&apos;s largest integrated healthcare ecosystem
            connecting clinics, hospitals, specialists, wellness centers, and
            patients through innovation and trust.
          </motion.p>
        </div>
      </div>

      {/* Mission Section */}
      <div id="mission" className="relative px-6 pb-32 pt-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" as const }}
              className="font-['Playfair_Display'] text-4xl font-bold text-white sm:text-5xl md:text-6xl"
            >
              Our Mission
            </motion.h2>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" as const }}
              className="mx-auto mt-4 h-[2px] w-20 origin-center bg-[#CBA135]"
            />
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {cards.map((card, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ scale: 1.03, y: -6 }}
                className="group cursor-pointer rounded-2xl border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)] p-8 backdrop-blur-xl transition-shadow duration-300 hover:shadow-[0_0_30px_rgba(0,213,255,0.15)]"
              >
                <span className="text-4xl">{card.icon}</span>
                <h3 className="mt-5 font-['Space_Grotesk'] text-xl font-semibold text-white">
                  {card.title}
                </h3>
                <p className="mt-3 font-['Inter'] text-base leading-relaxed text-[#B7B7B7]">
                  {card.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
