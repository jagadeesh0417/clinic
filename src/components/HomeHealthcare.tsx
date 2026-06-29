"use client"

import { motion } from "framer-motion"

const services = [
  "Home Doctor Visit",
  "Home Nursing",
  "Home Blood Collection",
  "IV Therapy",
  "Wellness Consultation",
  "Nutrition Consultation",
  "Physiotherapy",
  "Vaccination",
  "Corporate Health Camps",
]

const images = [
  "https://images.unsplash.com/photo-1551076805-e1869033e561?w=800&q=80",
  "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
  "https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?w=800&q=80",
  "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&q=80",
]

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.2 },
  },
}

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
}

export default function HomeHealthcare() {
  return (
    <section
      id="home-healthcare"
      className="relative overflow-hidden bg-[#0D0D0D] px-6 py-24 md:px-12 lg:px-24"
    >
      <div className="pointer-events-none absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAyKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40" />

      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left – Image Collage */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" as const }}
            className="relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-transparent z-10" />
              <div className="absolute -inset-1 bg-[#CBA135]/20 blur-3xl rounded-full" />
              <img
                src={images[0]}
                alt="Home healthcare visit"
                className="h-full w-full object-cover"
              />
              <div className="absolute bottom-6 left-6 right-6 z-20 grid grid-cols-2 gap-3">
                <div className="overflow-hidden rounded-xl">
                  <img
                    src={images[1]}
                    alt="Healthcare consultation"
                    className="h-28 w-full object-cover"
                  />
                </div>
                <div className="overflow-hidden rounded-xl">
                  <img
                    src={images[2]}
                    alt="Medical care"
                    className="h-28 w-full object-cover"
                  />
                </div>
              </div>
            </div>

            <div
              className="absolute -bottom-6 -right-6 z-30 rounded-2xl border border-[rgba(255,255,255,0.08)] px-6 py-4"
              style={{
                background: "rgba(255,255,255,0.04)",
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
              }}
            >
              <p className="font-['Playfair_Display'] text-3xl font-bold text-white">
                9<span className="text-[#CBA135]">+</span>
              </p>
              <p className="font-['Space_Grotesk'] text-xs tracking-wider text-white/60">
                Services at Home
              </p>
            </div>

            <img
              src={images[3]}
              alt="Wellness care"
              className="absolute -top-4 -left-4 z-20 h-24 w-24 rounded-2xl border-2 border-[#CBA135]/30 object-cover shadow-xl md:h-32 md:w-32"
            />
          </motion.div>

          {/* Right – Content & Services */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut" as const }}
              className="font-['Space_Grotesk'] text-sm tracking-[0.3em] uppercase text-[#CBA135]"
            >
              Home Healthcare Services
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" as const, delay: 0.1 }}
              className="mt-3 font-['Playfair_Display'] text-4xl font-bold leading-tight text-white md:text-5xl"
            >
              Home Healthcare{" "}
              <span className="text-[#CBA135]">Services</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut" as const, delay: 0.2 }}
              className="mt-2 font-['Space_Grotesk'] text-lg text-white/50"
            >
              Quality Healthcare at Your Doorstep
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut" as const, delay: 0.3 }}
              className="mt-4 max-w-md font-['Inter'] text-base leading-relaxed text-white/40"
            >
              Professional medical care delivered to your home. From doctor
              visits to nursing, diagnostics to therapy — we bring quality
              healthcare to your doorstep.
            </motion.p>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
              className="mt-10 grid grid-cols-2 gap-3"
            >
              {services.map((service) => (
                <motion.div
                  key={service}
                  variants={fadeInUp}
                  className="group relative overflow-hidden rounded-2xl border border-[rgba(255,255,255,0.08)] p-4 transition-all duration-500 hover:border-[#CBA135]/40"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    backdropFilter: "blur(16px)",
                    WebkitBackdropFilter: "blur(16px)",
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#CBA135]/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="relative z-10 flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#CBA135]/20 bg-[#CBA135]/10 text-xs text-[#CBA135]">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M9 18V5l12-2v13" />
                        <circle cx="6" cy="18" r="3" />
                        <circle cx="18" cy="16" r="3" />
                      </svg>
                    </span>
                    <h4 className="font-['Space_Grotesk'] text-sm font-medium tracking-wide text-white">
                      {service}
                    </h4>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
