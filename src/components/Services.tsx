"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Clinical Care",
    image:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80",
    group: "Clinical Services",
    items: ["Dermatology", "Hair Restoration", "Aesthetic Medicine"],
  },
  {
    title: "Clinical Diagnostics",
    image:
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80",
    group: "Clinical Services",
    items: ["Dental Care", "Diagnostics", "Preventive Healthcare"],
  },
  {
    title: "Virtual & Home Care",
    image:
      "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&q=80",
    group: "Modern Healthcare",
    items: ["Teleconsultation", "Home Healthcare", "Corporate Health Programs"],
  },
  {
    title: "Longevity & Wellness",
    image:
      "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=800&q=80",
    group: "Modern Healthcare",
    items: ["Longevity Medicine", "Nutrition Programs", "Wellness Solutions"],
  },
];

const partnerBenefits = [
  "Patient Leads",
  "Walk-ins",
  "Digital Presence",
  "Marketing Support",
  "Doctor Network",
  "Corporate Tie-ups",
  "Operational Support",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export default function Services() {
  return (
    <section id="services" className="relative py-24 bg-[#050505] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-[#00D5FF] font-['Space_Grotesk'] text-sm tracking-[0.2em] uppercase mb-4">
            Healthcare Services
          </span>
          <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl lg:text-6xl text-white mb-4">
            Healthcare <span className="text-[#00D5FF]">Services</span>
          </h2>
          <p className="text-white/60 font-['Inter'] text-lg max-w-2xl mx-auto">
            Patient Acquisition & Business Growth for Partner Clinics
          </p>
          <p className="text-white/40 font-['Inter'] text-sm max-w-xl mx-auto mt-2">
            KO Clinics supports partner clinics with comprehensive patient
            acquisition and business growth solutions.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group rounded-2xl overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 transition-all duration-500 hover:scale-[1.03] hover:border-[#00D5FF]/30"
            >
              <div className="relative h-52 w-full overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/90 via-transparent to-transparent" />
                <div className="absolute top-3 left-3">
                  <span className="inline-block px-2.5 py-1 text-[10px] font-['Space_Grotesk'] uppercase tracking-wider text-[#CBA135] bg-white/10 border border-white/20 rounded-full">
                    {service.group}
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
                  <h3 className="font-['Playfair_Display'] text-xl text-white">
                    {service.title}
                  </h3>
                </div>
              </div>
              <div className="p-5">
                <div className="flex flex-wrap gap-2">
                  {service.items.map((item) => (
                    <span
                      key={item}
                      className="inline-block px-3 py-1.5 text-sm font-['Inter'] text-white/60 bg-white/5 rounded-full border border-white/10 transition-all duration-300 hover:border-[#00D5FF]/30 hover:text-white hover:bg-white/10"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <h4 className="font-['Space_Grotesk'] text-sm tracking-[0.15em] uppercase text-[#CBA135] mb-6">
            Partner Benefits
          </h4>
          <div className="flex flex-wrap justify-center gap-3">
            {partnerBenefits.map((benefit) => (
              <span
                key={benefit}
                className="inline-block px-4 py-2 text-sm font-['Inter'] text-white/70 bg-white/5 rounded-full border border-white/10 transition-all duration-300 hover:border-[#00D5FF]/40 hover:text-[#00D5FF] hover:bg-white/10"
              >
                {benefit}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
