"use client"

import { motion } from "framer-motion"
import { useRef } from "react"

const images = [
  "https://images.unsplash.com/photo-1583912267550-d6c2db41684e?w=800&q=80",
  "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&q=80",
  "https://images.unsplash.com/photo-1580281657527-47f2d7d52b5c?w=800&q=80",
  "https://images.unsplash.com/photo-1581056771107-24ca5f033842?w=800&q=80",
]

const equipment = [
  { icon: "💇", title: "Hair Transplant Machines" },
  { icon: "⚡", title: "Laser Systems" },
  { icon: "💧", title: "HydraFacial Devices" },
  { icon: "📡", title: "HIFU" },
  { icon: "🔦", title: "Pico Laser" },
  { icon: "🩸", title: "PRP Equipment" },
  { icon: "🏋️", title: "Slimming Systems" },
  { icon: "🔬", title: "Skin Analysis Machines" },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
}

export default function EquipmentRental() {
  const scrollRef = useRef<HTMLDivElement>(null)

  return (
    <section id="equipment-rental" className="relative overflow-hidden bg-[#050505] py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#0a0a0a] to-[#050505]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <span className="mb-3 inline-block tracking-[0.2em] text-[#CBA135] font-mono text-xs uppercase">
            Premium Medical Equipment
          </span>
          <h2 className="font-['Playfair_Display'] text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            Equipment <span className="text-[#00D5FF]">Rental</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl font-['Inter'] text-base text-white/60">
            State-of-the-art aesthetic and surgical machines available for short-term and long-term rental.
          </p>
        </motion.div>

        {/* Carousel */}
        <div
          ref={scrollRef}
          className="mb-20 flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {images.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="relative min-w-[280px] snap-start overflow-hidden rounded-2xl sm:min-w-[340px] md:min-w-[400px] aspect-[4/3] flex-shrink-0 group"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent z-10" />
              <img
                src={src}
                alt={`Equipment ${i + 1}`}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 right-0 z-20 p-6">
                <span className="font-['Inter'] text-sm text-[#00D5FF]">
                  0{i + 1}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Equipment Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 md:gap-4"
        >
          {equipment.map((item) => (
            <motion.div
              key={item.title}
              variants={cardVariants}
              whileHover={{ scale: 1.03, y: -4 }}
              className="group cursor-pointer rounded-xl border p-5 text-center backdrop-blur-xl transition-all duration-300 sm:p-6"
              style={{
                backgroundColor: "rgba(255,255,255,0.04)",
                borderColor: "rgba(255,255,255,0.08)",
              }}
            >
              <motion.span
                className="mb-3 inline-block text-3xl sm:text-4xl"
                whileHover={{ scale: 1.2, rotate: 8 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {item.icon}
              </motion.span>
              <h3 className="font-['Playfair_Display'] text-sm font-semibold text-white sm:text-base">
                {item.title}
              </h3>
              <div
                className="mx-auto mt-3 h-px w-0 transition-all duration-300 group-hover:w-3/4"
                style={{ backgroundColor: "#00D5FF" }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
