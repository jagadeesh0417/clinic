"use client"

import { motion } from "framer-motion"

interface StaffCategory {
  title: string
  icon: React.ReactNode
}

const Stethoscope = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
    <path d="M4.8 2.3A.7.7 0 0 0 4 3v3a6 6 0 0 0 12 0V3a.7.7 0 0 0-.8-.7Z" />
    <path d="M8 15v-3a4 4 0 0 1 8 0v3" />
    <circle cx="10" cy="19" r="2" />
    <circle cx="18" cy="19" r="2" />
  </svg>
)
const Skin = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
    <circle cx="12" cy="8" r="5" />
    <path d="M3 21v-2a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v2" />
  </svg>
)
const Heart = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
    <path d="M19 14c1.5-1.5 2.5-3.5 2.5-5.5A4.5 4.5 0 0 0 12 6.5 4.5 4.5 0 0 0 2.5 8.5c0 2 1 4 2.5 5.5L12 22Z" />
  </svg>
)
const Brain = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
    <path d="M12 4a4 4 0 0 1 4 4c0 1.5-.8 2.8-2 3.5V22" />
    <path d="M12 4a4 4 0 0 0-4 4c0 1.5.8 2.8 2 3.5V22" />
    <path d="M6 12h3" />
    <path d="M15 12h3" />
    <path d="M6 16h2" />
    <path d="M16 16h2" />
  </svg>
)
const Building = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
    <rect x="4" y="2" width="16" height="20" rx="1" />
    <path d="M9 6h2" />
    <path d="M13 6h2" />
    <path d="M9 10h2" />
    <path d="M13 10h2" />
    <path d="M9 14h2" />
    <path d="M13 14h2" />
    <path d="M9 18h2" />
    <path d="M13 18h2" />
  </svg>
)
const Phone = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92Z" />
  </svg>
)
const Sparkles = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
    <path d="M12 2a4 4 0 0 0-4 4c0 2 1 3 2 4l-1 3h6l-1-3c1-1 2-2 2-4a4 4 0 0 0-4-4Z" />
    <path d="M6 22a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4" />
  </svg>
)
const Chart = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
    <path d="M3 3v18h18" />
    <path d="M7 16V8" />
    <path d="M11 16v-4" />
    <path d="M15 16V6" />
    <path d="M19 16v-2" />
  </svg>
)

const staffCategories: StaffCategory[] = [
  { title: "Doctors", icon: <Stethoscope /> },
  { title: "Dermatologists", icon: <Skin /> },
  { title: "Nurses", icon: <Heart /> },
  { title: "Therapists", icon: <Brain /> },
  { title: "Clinic Managers", icon: <Building /> },
  { title: "Receptionists", icon: <Phone /> },
  { title: "Aestheticians", icon: <Sparkles /> },
  { title: "Marketing Executives", icon: <Chart /> },
]

const images = [
  {
    src: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&q=80",
    alt: "Medical team in consultation",
  },
  {
    src: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=800&q=80",
    alt: "Doctor consulting patient",
  },
  {
    src: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=800&q=80",
    alt: "Medical professional",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0,     transition: { duration: 0.6, ease: "easeOut" as const } },
}

export default function StaffSupport() {
  return (
    <section
      id="staff-support"
      className="relative min-h-screen overflow-hidden px-4 py-20 md:px-8 lg:px-16"
      style={{ backgroundColor: "#050505" }}
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
        {/* Left: Images */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="relative grid grid-cols-2 gap-4"
        >
          <motion.div variants={itemVariants} className="col-span-2">
            <div className="group relative overflow-hidden rounded-2xl">
              <img
                src={images[0].src}
                alt={images[0].alt}
                className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
          </motion.div>
          <motion.div variants={itemVariants}>
            <div className="group relative overflow-hidden rounded-2xl">
              <img
                src={images[1].src}
                alt={images[1].alt}
                className="h-48 w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
          </motion.div>
          <motion.div variants={itemVariants}>
            <div className="group relative overflow-hidden rounded-2xl">
              <img
                src={images[2].src}
                alt={images[2].alt}
                className="h-48 w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
          </motion.div>
        </motion.div>

        {/* Right: Content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.h2
            variants={itemVariants}
            className="mb-4 text-4xl font-bold md:text-5xl"
            style={{
              fontFamily: "'Playfair Display', serif",
              color: "#ffffff",
            }}
          >
            Skilled{" "}
            <span style={{ color: "#00D5FF" }}>Staff</span> Support
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="mb-8 max-w-lg text-lg leading-relaxed"
            style={{ fontFamily: "'Inter', sans-serif", color: "#a0aec0" }}
          >
            We take the hassle out of hiring. From sourcing top-tier medical and
            administrative talent to onboarding, we ensure your clinic is
            staffed with professionals who match your culture and standards.
          </motion.p>

          {/* Staff Category Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-2 gap-3 sm:grid-cols-2 md:gap-4"
          >
            {staffCategories.map((category) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                whileHover={{ scale: 1.03, y: -2 }}
                className="group cursor-pointer rounded-xl border p-4 text-center transition-all duration-300"
                style={{
                  borderColor: "rgba(255, 255, 255, 0.08)",
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)",
                  backdropFilter: "blur(16px)",
                  WebkitBackdropFilter: "blur(16px)",
                }}
              >
                <div
                  className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full transition-colors duration-300"
                  style={{
                    backgroundColor: "rgba(0, 213, 255, 0.1)",
                    color: "#00D5FF",
                  }}
                >
                  {category.icon}
                </div>
                <p
                  className="text-sm font-medium md:text-base"
                  style={{ fontFamily: "'Inter', sans-serif", color: "#e2e8f0" }}
                >
                  {category.title}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
