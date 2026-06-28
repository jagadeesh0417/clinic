"use client"

import { motion } from "framer-motion"

const images = [
  {
    src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    alt: "AI Healthcare Technology",
  },
  {
    src: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&q=80",
    alt: "Medical Research",
  },
  {
    src: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&q=80",
    alt: "Digital Health Analytics",
  },
  {
    src: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&q=80",
    alt: "Modern Healthcare",
  },
]

const features = [
  {
    icon: "\uD83C\uDFE5",
    title: "AI Health ATM",
    desc: "Instant health checkups and diagnostics powered by artificial intelligence at your fingertips.",
  },
  {
    icon: "\uD83D\uDD0D",
    title: "Health Screening",
    desc: "Comprehensive screening packages with AI-driven analysis for early detection.",
  },
  {
    icon: "\uD83D\uDCCA",
    title: "Digital Reports",
    desc: "Secure, instant access to your health records and diagnostic reports anywhere.",
  },
  {
    icon: "\uD83D\uDCBB",
    title: "Telemedicine",
    desc: "Consult with specialists from the comfort of your home via secure video calls.",
  },
  {
    icon: "\uD83D\uDCC8",
    title: "Predictive Analytics",
    desc: "AI-powered predictions for preventive healthcare and personalized wellness plans.",
  },
  {
    icon: "\uD83D\uDCD1",
    title: "Electronic Medical Records",
    desc: "Centralized, secure storage of your complete medical history across all clinics.",
  },
  {
    icon: "\uD83D\uDC65",
    title: "Patient Management",
    desc: "Seamless appointment scheduling, reminders, and coordinated patient care.",
  },
  {
    icon: "\uD83D\uDEE0\uFE0F",
    title: "AI Dashboard",
    desc: "Real-time insights and analytics for healthcare providers to maximize efficiency.",
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
}

const imageVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, delay: 0.2 + i * 0.15, ease: "easeOut" as const },
  }),
}

export default function AINetwork() {
  return (
    <section id="ai-network" className="relative overflow-hidden bg-[#0D0D0D]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,213,_255,_0.04)_0%,_transparent_70%)]" />
      <div className="pointer-events-none absolute right-0 top-0 h-[500px] w-[500px] translate-x-1/3 -translate-y-1/3 rounded-full bg-[rgba(0,213,255,0.03)] blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-[400px] w-[400px] -translate-x-1/4 translate-y-1/4 rounded-full bg-[rgba(203,161,53,0.03)] blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-28">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" as const }}
          className="text-center"
        >
          <h2 className="font-['Playfair_Display'] text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            India&apos;s First{" "}
            <span className="bg-gradient-to-r from-[#00D5FF] to-[#7EE8FA] bg-clip-text text-transparent">
              AI-Powered
            </span>{" "}
            Clinic Network
          </h2>
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
            className="mx-auto mt-8 max-w-3xl font-['Inter'] text-lg leading-relaxed text-[#B7B7B7] sm:text-xl"
          >
            An integrated AI ecosystem that connects every touchpoint of your
            healthcare journey — from smart diagnostics to predictive wellness —
            creating India&apos;s most advanced clinic network.
          </motion.p>
        </motion.div>

        <div className="mt-20 grid gap-12 lg:grid-cols-5 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" as const }}
            className="grid grid-cols-2 gap-4 lg:col-span-2"
          >
            {images.map((img, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={imageVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className={`group relative overflow-hidden rounded-2xl ${
                  i === 0 ? "row-span-2" : ""
                }`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                  style={{ minHeight: i === 0 ? "320px" : "148px" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(5,5,5,0.9)] via-[rgba(5,5,5,0.3)] to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <span className="font-['Space_Grotesk'] text-xs font-medium tracking-widest uppercase text-[rgba(255,255,255,0.6)]">
                    {i === 0
                      ? "AI Diagnostics"
                      : i === 1
                        ? "Research"
                        : i === 2
                          ? "Analytics"
                          : "Connected Care"}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
            className="grid gap-4 sm:grid-cols-2 lg:col-span-3"
          >
            {features.map((feature, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ scale: 1.03, y: -6 }}
                className="group cursor-pointer rounded-2xl border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)] p-5 backdrop-blur-xl transition-all duration-300 hover:border-[rgba(0,213,255,0.2)] hover:shadow-[0_0_30px_rgba(0,213,255,0.12)] sm:p-6"
              >
                <span className="text-2xl sm:text-3xl">{feature.icon}</span>
                <h3 className="mt-3 font-['Space_Grotesk'] text-base font-semibold text-white sm:text-lg">
                  {feature.title}
                </h3>
                <p className="mt-2 font-['Inter'] text-sm leading-relaxed text-[#B7B7B7]">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" as const }}
          className="mt-16 text-center"
        >
          <p className="font-['Space_Grotesk'] text-sm tracking-widest uppercase text-[rgba(255,255,255,0.3)]">
            Powered by advanced machine learning &bull; Serving millions of patients
          </p>
        </motion.div>
      </div>
    </section>
  )
}
