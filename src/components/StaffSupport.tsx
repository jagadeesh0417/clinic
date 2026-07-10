"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const staffCategories = [
  "Doctors",
  "Dermatologists",
  "Aesthetic Physicians",
  "Nurses",
  "Therapists",
  "Aestheticians",
  "Hair Technicians",
  "Receptionists",
  "Marketing Executives",
  "Clinic Managers",
]

const images = [
  "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&q=80",
  "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=800&q=80",
  "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=800&q=80",
]

const staggerContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.2 },
  },
}

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
}

const StaffCard = ({ label, index }: { label: string; index: number }) => (
  <motion.div
    variants={fadeInUp}
    className="group relative overflow-hidden rounded-2xl border border-[rgba(246,241,232,0.08)] p-5 transition-all duration-500 hover:border-[#C9A14A]/40"
    style={{
      background: "rgba(246,241,232,0.04)",
      backdropFilter: "blur(16px)",
      WebkitBackdropFilter: "blur(16px)",
    }}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-[#C9A14A]/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
    <span className="relative z-10 font-mono text-xs tracking-[0.2em] text-[#C9A14A]">
      {String(index + 1).padStart(2, "0")}
    </span>
    <h4 className="relative z-10 mt-2 font-sans text-base font-medium tracking-wide text-white">
      {label}
    </h4>
  </motion.div>
)

export default function StaffSupport() {
  return (
    <section
      id="staff-support"
      className="relative overflow-hidden bg-[#100D0A] px-6 py-24 md:px-12 lg:px-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left – Image Display */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" as const }}
            className="relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
              <div className="absolute inset-0 bg-gradient-to-t from-[#100D0A] via-transparent to-transparent z-10" />
              <div className="absolute -inset-1 bg-[#C9A14A]/20 blur-3xl rounded-full" />
              <Image
                src={images[0]}
                alt="Healthcare team"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                unoptimized
              />
              <div className="absolute bottom-6 left-6 right-6 z-20 grid grid-cols-2 gap-3">
                <div className="relative overflow-hidden rounded-xl h-28">
                  <Image
                    src={images[1]}
                    alt="Staff consultation"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                    unoptimized
                  />
                </div>
                <div className="relative overflow-hidden rounded-xl h-28">
                  <Image
                    src={images[2]}
                    alt="Clinic team"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                    unoptimized
                  />
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 z-30 rounded-2xl border border-[rgba(246,241,232,0.08)] px-6 py-4"
              style={{
                background: "rgba(246,241,232,0.04)",
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
              }}
            >
              <p className="font-display text-3xl font-bold text-white">
                10<span className="text-[#C9A14A]">+</span>
              </p>
              <p className="font-sans text-xs tracking-wider text-white/60">
                Staff Categories
              </p>
            </div>
          </motion.div>

          {/* Right – Content & Grid */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut" as const }}
              className="font-sans text-sm tracking-[0.3em] uppercase text-[#C9A14A]"
            >
              Skilled Staff Support
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" as const, delay: 0.1 }}
              className="mt-3 font-display text-4xl font-bold leading-tight text-white md:text-5xl"
            >
              Skilled Staff Support
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut" as const, delay: 0.2 }}
              className="mt-2 font-sans text-lg text-white/50"
            >
              Access to Qualified Healthcare Professionals
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut" as const, delay: 0.3 }}
              className="mt-4 max-w-md font-sans text-base leading-relaxed text-white/40"
            >
              KO Clinics provides access to skilled healthcare professionals for
              partner clinics.
            </motion.p>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
              className="mt-10 grid grid-cols-2 gap-4"
            >
              {staffCategories.map((label, i) => (
                <StaffCard key={label} label={label} index={i} />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
