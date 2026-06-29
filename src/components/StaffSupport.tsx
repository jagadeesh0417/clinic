"use client"

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
    className="group relative overflow-hidden rounded-2xl border border-[rgba(255,255,255,0.08)] p-5 transition-all duration-500 hover:border-[#CBA135]/40"
    style={{
      background: "rgba(255,255,255,0.04)",
      backdropFilter: "blur(16px)",
      WebkitBackdropFilter: "blur(16px)",
    }}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-[#CBA135]/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
    <span className="relative z-10 font-mono text-xs tracking-[0.2em] text-[#CBA135]">
      {String(index + 1).padStart(2, "0")}
    </span>
    <h4 className="relative z-10 mt-2 font-[\'Space_Grotesk\'] text-base font-medium tracking-wide text-white">
      {label}
    </h4>
  </motion.div>
)

export default function StaffSupport() {
  return (
    <section
      id="staff-support"
      className="relative overflow-hidden bg-[#050505] px-6 py-24 md:px-12 lg:px-24"
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
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent z-10" />
              <div className="absolute -inset-1 bg-[#CBA135]/20 blur-3xl rounded-full" />
              <img
                src={images[0]}
                alt="Healthcare team"
                className="h-full w-full object-cover"
              />
              <div className="absolute bottom-6 left-6 right-6 z-20 grid grid-cols-2 gap-3">
                <div className="overflow-hidden rounded-xl">
                  <img
                    src={images[1]}
                    alt="Staff consultation"
                    className="h-28 w-full object-cover"
                  />
                </div>
                <div className="overflow-hidden rounded-xl">
                  <img
                    src={images[2]}
                    alt="Clinic team"
                    className="h-28 w-full object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 z-30 rounded-2xl border border-[rgba(255,255,255,0.08)] px-6 py-4"
              style={{
                background: "rgba(255,255,255,0.04)",
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
              }}
            >
              <p className="font-[\'Playfair_Display\'] text-3xl font-bold text-white">
                10<span className="text-[#CBA135]">+</span>
              </p>
              <p className="font-[\'Space_Grotesk\'] text-xs tracking-wider text-white/60">
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
              className="font-[\'Space_Grotesk\'] text-sm tracking-[0.3em] uppercase text-[#CBA135]"
            >
              Skilled Staff Support
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" as const, delay: 0.1 }}
              className="mt-3 font-[\'Playfair_Display\'] text-4xl font-bold leading-tight text-white md:text-5xl"
            >
              Skilled Staff Support
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut" as const, delay: 0.2 }}
              className="mt-2 font-[\'Space_Grotesk\'] text-lg text-white/50"
            >
              Access to Qualified Healthcare Professionals
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut" as const, delay: 0.3 }}
              className="mt-4 max-w-md font-[\'Inter\'] text-base leading-relaxed text-white/40"
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
