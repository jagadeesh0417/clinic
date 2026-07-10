"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.12 * i, ease: "easeOut" as const },
  }),
};

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const features = [
  {
    title: "Luxury Reception",
    desc: "Step into a serene, hotel-like environment from the moment you arrive.",
    icon: "\u2728",
  },
  {
    title: "Advanced Technology",
    desc: "State-of-the-art HIFU, MNRF, and laser equipment for optimal results.",
    icon: "\u2697\uFE0F",
  },
  {
    title: "Sterile Procedure Rooms",
    desc: "Hospital-grade sterilisation with dedicated procedure suites.",
    icon: "\ud83D\udd2C",
  },
  {
    title: "Privacy Focused",
    desc: "Private consultation rooms and discrete entrance for your comfort.",
    icon: "\ud83D\udd75\uFE0F",
  },
];

const protocols = [
  "Autoclave sterilisation of all instruments",
  "Air purification systems in all procedure rooms",
  "Certified biomedical waste disposal",
  "Single-use disposable needles and syringes",
  "Full PPE protocols for every procedure",
  "Regular third-party hygiene audits",
];

const galleryImages = [
  "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&q=80",
  "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&q=80",
  "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80",
  "https://images.unsplash.com/photo-1551076805-e1869033e561?w=800&q=80",
  "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80",
  "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80",
];

export default function ClinicEnvironmentPage() {
  return (
    <div className="min-h-screen bg-[#100D0A]">
      {/* Hero */}
      <section className="relative pt-36 pb-24 overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#C9A14A]/5 rounded-full blur-[200px] pointer-events-none" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={container}
            className="text-center"
          >
            <motion.span
              variants={fadeUp}
              custom={0}
              className="inline-block text-[#C9A14A] font-sans text-sm tracking-[0.2em] uppercase mb-4"
            >
              The KO Clinics Experience
            </motion.span>
            <motion.h1
              variants={fadeUp}
              custom={1}
              className="font-displayisplay text-4xl md:text-5xl lg:text-6xl text-white mb-6"
            >
              Clinic <span className="text-[#C9A14A]">Environment</span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              custom={2}
              className="text-white/60 font-sans text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
            >
              A premium aesthetic environment designed for comfort, safety, and the best possible results.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Four Pillars */}
      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={container}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                variants={fadeUp}
                custom={i}
                whileHover={{ y: -4 }}
                className="rounded-2xl p-6 md:p-8 text-center transition-all duration-300"
                style={{
                  background: "linear-gradient(135deg, rgba(203,161,53,0.08) 0%, rgba(203,161,53,0.02) 100%)",
                  border: "1px solid rgba(203,161,53,0.15)",
                }}
              >
                <span className="text-3xl block mb-4">{f.icon}</span>
                <h3 className="font-displayisplay text-lg font-bold text-white mb-3">{f.title}</h3>
                <p className="font-sans text-sm text-white/50 leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Gallery */}
      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-displayisplay text-2xl md:text-3xl text-white mb-3">Our Space</h2>
            <p className="font-sans text-sm text-white/50 max-w-xl mx-auto">
              Premium surroundings designed for your comfort and peace of mind.
            </p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {galleryImages.map((src, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.06 * i }}
                className={`group relative overflow-hidden rounded-2xl ${
                  i === 0 ? "col-span-2 row-span-2" : ""
                }`}
                style={{ border: "1px solid rgba(246,241,232,0.06)" }}
              >
                <div className={`${i === 0 ? "aspect-[2/1] md:aspect-auto md:h-full" : "aspect-[4/3]"}`}>
                  <img
                    src={src}
                    alt={`KO Clinics environment ${i + 1}`}
                    loading="lazy"
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Patient Experience */}
      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={container}
            className="max-w-4xl mx-auto"
          >
            <motion.div variants={fadeUp} custom={0} className="text-center mb-14">
              <span className="inline-block text-[#C9A14A] font-sans text-sm tracking-[0.2em] uppercase mb-3">
                Your Comfort, Our Priority
              </span>
              <h2 className="font-displayisplay text-2xl md:text-3xl text-white">
                Patient Experience
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              <motion.div
                variants={fadeUp} custom={1}
                className="rounded-2xl p-6 md:p-8"
                style={{
                  background: "rgba(246,241,232,0.03)",
                  border: "1px solid rgba(246,241,232,0.06)",
                }}
              >
                <h3 className="font-displayisplay text-lg text-white mb-3">Consultation Suites</h3>
                <p className="font-sans text-sm text-white/50 leading-relaxed">
                  Private consultation rooms and discrete entrance for your comfort.
                </p>
              </motion.div>
              <motion.div
                variants={fadeUp} custom={2}
                className="rounded-2xl p-6 md:p-8"
                style={{
                  background: "rgba(246,241,232,0.03)",
                  border: "1px solid rgba(246,241,232,0.06)",
                }}
              >
                <h3 className="font-displayisplay text-lg text-white mb-3">Treatment Rooms</h3>
                <p className="font-sans text-sm text-white/50 leading-relaxed">
                  Hospital-grade sterilisation with dedicated procedure suites for every treatment.
                </p>
              </motion.div>
              <motion.div
                variants={fadeUp} custom={3}
                className="rounded-2xl p-6 md:p-8"
                style={{
                  background: "rgba(246,241,232,0.03)",
                  border: "1px solid rgba(246,241,232,0.06)",
                }}
              >
                <h3 className="font-displayisplay text-lg text-white mb-3">Privacy & Comfort</h3>
                <p className="font-sans text-sm text-white/50 leading-relaxed">
                  Privacy-focused design with discrete entrances and private consultation rooms ensuring your comfort throughout every visit.
                </p>
              </motion.div>
              <motion.div
                variants={fadeUp} custom={4}
                className="rounded-2xl p-6 md:p-8"
                style={{
                  background: "rgba(246,241,232,0.03)",
                  border: "1px solid rgba(246,241,232,0.06)",
                }}
              >
                <h3 className="font-displayisplay text-lg text-white mb-3">Technology & Facilities</h3>
                <p className="font-sans text-sm text-white/50 leading-relaxed">
                  State-of-the-art HIFU, MNRF, and laser equipment for optimal results.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Safety & Hygiene */}
      <section className="pb-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={container}
          className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <motion.div variants={fadeUp} custom={0} className="text-center mb-12">
            <span className="inline-block text-[#C9A14A] font-sans text-sm tracking-[0.2em] uppercase mb-3">
              Your Safety Matters
            </span>
            <h2 className="font-displayisplay text-2xl md:text-3xl text-white">
              Safety & Hygiene Standards
            </h2>
            <p className="font-sans text-sm text-white/50 mt-3 max-w-xl mx-auto">
              Hospital-grade protocols ensure the highest standards of cleanliness and safety in every procedure.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp} custom={1}
            className="max-w-3xl mx-auto rounded-3xl p-8 md:p-10"
            style={{
              background: "linear-gradient(135deg, rgba(203,161,53,0.06) 0%, rgba(203,161,53,0.02) 100%)",
              border: "1px solid rgba(203,161,53,0.12)",
            }}
          >
            <div className="space-y-4">
              {protocols.map((p, i) => (
                <div key={i} className="flex items-start gap-4">
                  <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#C9A14A]/20 shrink-0">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#C9A14A" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </span>
                  <span className="font-sans text-sm text-white/60 leading-relaxed">{p}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="pb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <div
            className="rounded-3xl p-8 md:p-12"
            style={{
              background: "linear-gradient(135deg, rgba(203,161,53,0.08) 0%, rgba(203,161,53,0.02) 100%)",
              border: "1px solid rgba(203,161,53,0.15)",
            }}
          >
            <h2 className="font-displayisplay text-2xl md:text-3xl text-white mb-4">
              Experience the Difference
            </h2>
            <p className="font-sans text-sm text-white/50 mb-8 max-w-md mx-auto">
              Visit KO Clinics and discover a premium environment designed around your comfort and safety.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-3 rounded-full bg-[#C9A14A] text-black font-sans text-sm font-semibold tracking-wider uppercase transition-all duration-300 hover:bg-[#d4a83a] hover:shadow-lg hover:shadow-[#C9A14A]/25"
              >
                Book a Visit
              </a>
              <a
                href="/treatments"
                className="px-8 py-3 rounded-full border border-white/10 text-white/70 font-sans text-sm font-semibold tracking-wider uppercase transition-all duration-300 hover:border-[#C9A14A]/40 hover:text-white"
              >
                Explore Treatments
              </a>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
