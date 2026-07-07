"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.15 * i, ease: "easeOut" as const },
  }),
};

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const education = [
  { degree: "MBBS", institution: "Rajiv Gandhi University of Health Sciences (RGUHS), India" },
  { degree: "PG Diploma \u2014 Clinical Dermatology", institution: "Cardiff University, United Kingdom" },
  { degree: "Certification in Aesthetic Medicine", institution: "American Academy of Aesthetic Medicine (AAAM), USA" },
  { degree: "Hair Transplant Certification", institution: "American Academy of Aesthetic Medicine & ISHRS, USA" },
  { degree: "Cosmetic Dermatology Certification", institution: "American Hair Loss Council, USA" },
  { degree: "Certified Aesthetic Physician", institution: "International Academy of Aesthetic Medicine (IAAM), USA" },
  { degree: "Fellowship \u2014 Laser & Aesthetic Medicine", institution: "International Academy of Aesthetic Medicine, USA" },
  { degree: "Certification \u2014 Cosmetic Dermatology", institution: "American Hair Loss Council, USA" },
  { degree: "Fellowship \u2014 Experimental Laser Therapy", institution: "International Aesthetic Training Programs, Singapore / HK / Bangkok" },
];

const specializations = [
  "Hair Transplant Surgery \u2014 FUE, FUT, DHI, High-Density",
  "Anti-Ageing Medicine \u2014 Botox, Fillers, Threads, Skin Rejuvenation",
  "Cosmetic Dermatology \u2014 Acne, Pigmentation, Chemical Peels",
  "Laser Aesthetics \u2014 Fractional CO\u2082, Er-YAG Lasers",
  "Body Contouring \u2014 Lipodissolve, Inch-Loss Laser Therapy",
  "Regenerative Medicine \u2014 PRP Therapy, Stem Cell Hair Therapy",
  "Non-Surgical Face Lift \u2014 Thread Lift, Fillers, Contouring",
];

const internationalTraining = [
  { location: "Singapore", detail: "Advanced Aesthetic & Laser Medicine \u2014 International Aesthetic Programs" },
  { location: "Hong Kong", detail: "Cosmetic Injectables & Facial Contouring \u2014 International Academy Workshops" },
  { location: "Bangkok", detail: "Cosmetic Laser Dermatology \u2014 with global experts including Dr. Woffles Wu" },
  { location: "Australia", detail: "Mesotherapy & Anti-Ageing Medicine" },
  { location: "Taiwan / Singapore", detail: "Stem Cell & Regenerative Therapy \u2014 under Dr. Richard DeAndrea" },
];

const memberships = [
  "Fellow Member \u2014 American Society for Laser Medicine and Surgery (ASLMS)",
  "Member \u2014 American Academy of Aesthetic Medicine (AAAM)",
  "Member \u2014 International Academy of Aesthetic Medicine (IAAM)",
  "Member \u2014 European Federation of Aesthetic Medicine and Surgery (EFAMS)",
  "Member \u2014 International Academy Adistem, Australia",
  "Member \u2014 International Medi Spa Association",
  "Member \u2014 International Society of Hair Restoration Surgery (ISHRS)",
  "Member \u2014 American Board of Hair Restoration & Surgery",
];

const certifications = [
  "Botox \u2014 Allergan, USA",
  "Restylane Fillers \u2014 Sweden",
  "Juvederm \u2014 USA",
  "Laser Hair Reduction \u2014 Miles Man, Spain",
  "Alma Laser \u2014 Alma Lasers",
];

const awards = [
  "Best Cosmetic Physician \u2014 South India (2023) \u2014 International Aesthetic Awards",
  "Times Global Best Doctor Award \u2014 Times Group Global Healthcare Awards",
  "Zee Business \u2014 IGA Healthcare Award \u2014 Zee Business International Awards",
  "Arogya Jyothi Best Cosmetologist Award \u2014 Healthcare Excellence Awards",
  "Excellence in Aesthetic Medicine \u2014 International Cosmetic Medicine Forum",
  "Global Impact Award \u2014 Aesthetic Medicine \u2014 India Health Congress",
  "Rising Star Award \u2014 Injectables \u2014 World Congress of Dermatology (WCD)",
  "Top 6 Doctors to Watch \u2014 Times Group & Ministry of Health",
  "Leadership Award",
  "Government Role \u2014 Medical Advisor, NMC India Cosmetic Guidelines Taskforce",
  "Featured in Elle & Vogue",
];

const contributions = [
  "Founder \u2014 KO Clinics, Kosmedix, The Bodyline, REE Age, Kosmedix Global Aesthetic Institute",
  "Innovator \u2014 AAA Stemcell Therapy, Breast Derma Filler, Liquid Face Lift, Lipodissolve Ultra, Ponytail Lift",
  "Trainer \u2014 Aesthetic medicine training programmes across India and internationally",
  "Mentor \u2014 Non-Surgical Breast Lift, Liquid Face Lift, Micro Bio FUE Hair Transplant",
  "Public articles in \u2014 Micro Bio FUE, Liquid Breast Lift, Liquid Face Lift, AAA Stemcell Therapy for anti-ageing",
];

function SectionTitle({ label }: { label: string }) {
  return (
    <motion.div variants={fadeUp} custom={0} className="text-center mb-12">
      <span className="inline-block text-[#CBA135] font-mono text-sm tracking-[0.2em] uppercase" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
        {label}
      </span>
    </motion.div>
  );
}

function GoldDivider() {
  return (
    <motion.div
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" as const }}
      className="mx-auto my-6 h-[2px] w-20 origin-center bg-[#CBA135]"
    />
  );
}

export default function BrandSection() {
  return (
    <>
      {/* --- HERO / BRAND INTRO --- */}
      <section className="relative bg-[#050505] py-24 md:py-32 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-[#CBA135]/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#CBA135]/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={container}
          >
            <motion.div variants={fadeUp} custom={0}>
              <span className="inline-block text-[#CBA135] font-mono text-sm tracking-[0.2em] uppercase" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                THE CLINIC
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp} custom={1}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mt-4 mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Kosmedixx{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CBA135] to-[#F5D779]">
                / KO Clinics
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp} custom={2}
              className="text-[#B7B7B7] text-lg md:text-xl leading-relaxed max-w-4xl"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Founded in 2005 by aesthetic medicine expert <strong className="text-white">Dr. Vikas Singh</strong>, Kosmedixx Clinic has emerged as a pioneering force in advanced aesthetic and cosmetic medicine. Dr. Singh was among the first to introduce LIPODISSOLVE Ultra and laser-based inch-loss treatments to Bangalore and India, setting new benchmarks in non-invasive body contouring. As the visionary founder behind Bodyline Clinic and Ree Age Clinic, he has also established the Kosmedixx Global Aesthetic Institute and serves as a key figure in the European Federation of Aesthetic Medicine and Surgery (EFAMS).
            </motion.p>

            <motion.p
              variants={fadeUp} custom={3}
              className="text-[#B7B7B7] text-lg md:text-xl leading-relaxed mt-6"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Kosmedixx is committed to delivering scientifically-backed, cutting-edge treatments in anti-aging, advanced hair restoration, stem cell therapy, weight and inch loss, and cosmetic surgery. The team comprises internationally trained and board-certified dermatologists, plastic surgeons, and aesthetic physicians who uphold the highest standards of safety, ethics, and clinical excellence.
            </motion.p>

            <motion.p
              variants={fadeUp} custom={4}
              className="text-[#B7B7B7] text-lg md:text-xl leading-relaxed mt-6"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              With a mission to make premium aesthetic care accessible, KO Clinics are expanding rapidly across India and internationally, offering practitioners the opportunity to partner and join a growing global network. Whether you&apos;re a client seeking world-class results or a professional looking to be part of a progressive aesthetic brand, Kosmedixx stands as a symbol of trust, innovation, and integrity.
            </motion.p>

            <motion.p
              variants={fadeUp} custom={5}
              className="text-[#CBA135] text-2xl md:text-3xl font-semibold mt-8 italic"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Aesthetics with Ethics.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* --- WHY CHOOSE KO CLINICS --- */}
      <section className="relative bg-[#0D0D0D] py-24 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(203,161,_53,_0.06)_0%,_transparent_70%)]" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={container}
          >
            <motion.h2
              variants={fadeUp} custom={0}
              className="text-3xl md:text-5xl font-bold text-white text-center mb-8"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Why choose{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CBA135] to-[#F5D779]">
                KO Clinics
              </span>
            </motion.h2>
            <GoldDivider />
            <motion.p
              variants={fadeUp} custom={1}
              className="text-[#B7B7B7] text-lg leading-relaxed text-center max-w-4xl mx-auto"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Kosmedixx delivers cutting-edge aesthetic and dermatological treatments designed to enhance natural beauty and restore skin confidence. Advanced, US-FDA-approved solutions across a wide range of concerns \u2014 skin lightening, long-term sun damage, acne-related pigmentation, melasma, and age-related discoloration.
            </motion.p>
            <motion.p
              variants={fadeUp} custom={2}
              className="text-[#B7B7B7] text-lg leading-relaxed text-center max-w-4xl mx-auto mt-4"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Services extend beyond skin \u2014 hair transplant procedures, anti-ageing stem cell therapy, and a medically supervised weight and inch loss programme, all using FDA-approved technology.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* --- MISSION --- */}
      <section className="relative bg-[#050505] py-24 overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={container}
          >
            <motion.h2
              variants={fadeUp} custom={0}
              className="text-3xl md:text-5xl font-bold text-white"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Our Mission
            </motion.h2>
            <GoldDivider />
            <motion.p
              variants={fadeUp} custom={1}
              className="text-[#B7B7B7] text-lg md:text-xl leading-relaxed max-w-3xl mx-auto"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              To redefine the future of aesthetic medicine by providing science-backed, innovative, and safe cosmetic solutions that enhance natural beauty and personal confidence. Dr. Vikas Singh is committed to delivering world-class results through personalized care, cutting-edge techniques, and a team of internationally trained professionals. Kosmedix aims to build trust through transparency, ethics, and excellence in every patient interaction.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* --- VISION --- */}
      <section className="relative bg-[#0D0D0D] py-24 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(203,161,_53,_0.04)_0%,_transparent_60%)]" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={container}
          >
            <motion.h2
              variants={fadeUp} custom={0}
              className="text-3xl md:text-5xl font-bold text-white"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Our Vision
            </motion.h2>
            <GoldDivider />
            <motion.p
              variants={fadeUp} custom={1}
              className="text-[#B7B7B7] text-lg md:text-xl leading-relaxed max-w-3xl mx-auto"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              To establish the Kosmedixx KO Chain of Clinics as a leading global network of premium aesthetic centers that make advanced cosmetic dermatology and regenerative medicine accessible to everyone regardless of geography. With state-of-the-art technology and standardized protocols, Dr. Vikas Singh envisions affordable luxury aesthetics that are as available in tier-2 Indian cities as they are in Dubai, Hong Kong, London, or Bahrain.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* --- THE FOUNDER --- */}
      <section className="relative bg-[#050505] py-24 md:py-32 overflow-hidden">
        <div className="absolute top-1/3 left-1/3 w-80 h-80 bg-[#CBA135]/5 rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle label="THE FOUNDER" />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={container}
          >
            <motion.div variants={fadeUp} custom={0} className="text-center mb-4">
              <h2
                className="text-4xl md:text-6xl font-bold text-white"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Dr. Vikas Singh
              </h2>
              <p className="text-[#CBA135] text-lg md:text-xl italic mt-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                Enhance, Not Change.
              </p>
            </motion.div>

            <motion.p
              variants={fadeUp} custom={1}
              className="text-[#B7B7B7] text-lg leading-relaxed max-w-4xl mx-auto text-center"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Dr. Vikas Singh is a globally recognized Celebrity Hair Transplant Surgeon &amp; Cosmetic Dermatologist, and the visionary Founder &amp; CEO of Kosmedixx Clinics \u2014 a premier chain of advanced skin, hair, and aesthetic wellness centres in India.
            </motion.p>

            <motion.p
              variants={fadeUp} custom={2}
              className="text-[#B7B7B7] text-lg leading-relaxed max-w-4xl mx-auto text-center mt-4"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Known fondly as &ldquo;Doctor Transform&rdquo;, Dr. Vikas is renowned for combining scientific expertise with artistic precision, delivering transformational results to a high-profile clientele including celebrities, industrialists, top executives, and international patients.
            </motion.p>

            <motion.p
              variants={fadeUp} custom={3}
              className="text-[#B7B7B7] text-lg leading-relaxed max-w-4xl mx-auto text-center mt-4"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              With over two decades of experience, his clinical mastery includes Micro Bio-FUE Hair Transplant, PRP &amp; Stem Cell Therapies, Vampire Facelifts, HIFU, MNRF, Botox &amp; Fillers, and PDO Thread Lifts. He is board-certified with extensive international training in non-surgical facial rejuvenation.
            </motion.p>

            {/* Stats */}
            <motion.div
              variants={fadeUp} custom={4}
              className="flex flex-wrap justify-center gap-12 mt-10 mb-16"
            >
              <div className="text-center">
                <span className="block text-4xl md:text-5xl font-bold text-[#CBA135]" style={{ fontFamily: "'Playfair Display', serif" }}>20+</span>
                <span className="text-[#B7B7B7] text-sm uppercase tracking-wider" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Years Experience</span>
              </div>
              <div className="text-center">
                <span className="block text-4xl md:text-5xl font-bold text-[#CBA135]" style={{ fontFamily: "'Playfair Display', serif" }}>10,000+</span>
                <span className="text-[#B7B7B7] text-sm uppercase tracking-wider" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Procedures</span>
              </div>
            </motion.div>

            {/* Education */}
            <motion.div variants={fadeUp} custom={5} className="max-w-4xl mx-auto mb-12">
              <h3 className="text-xl font-semibold text-[#CBA135] mb-4 text-center" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Education &amp; Certifications</h3>
              <div className="grid md:grid-cols-2 gap-3">
                {education.map((item, i) => (
                  <div
                    key={i}
                    className="rounded-xl p-4"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    <p className="text-white text-sm font-semibold" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{item.degree}</p>
                    <p className="text-[#B7B7B7] text-xs mt-1" style={{ fontFamily: "'Inter', sans-serif" }}>{item.institution}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Specializations */}
            <motion.div variants={fadeUp} custom={6} className="max-w-4xl mx-auto mb-12">
              <h3 className="text-xl font-semibold text-[#CBA135] mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Specializations</h3>
              <div className="grid sm:grid-cols-2 gap-2">
                {specializations.map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-[#B7B7B7] text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#CBA135] flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* International Training */}
            <motion.div variants={fadeUp} custom={7} className="max-w-4xl mx-auto mb-12">
              <h3 className="text-xl font-semibold text-[#CBA135] mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>International Training</h3>
              <div className="space-y-3">
                {internationalTraining.map((item, i) => (
                  <div
                    key={i}
                    className="flex flex-col sm:flex-row sm:items-center gap-2 rounded-xl p-4"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    <span className="text-[#CBA135] font-semibold text-sm uppercase tracking-wider flex-shrink-0" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{item.location}</span>
                    <span className="text-[#B7B7B7] text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>{item.detail}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Professional Memberships */}
            <motion.div variants={fadeUp} custom={8} className="max-w-4xl mx-auto mb-12">
              <h3 className="text-xl font-semibold text-[#CBA135] mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Professional Memberships</h3>
              <div className="grid sm:grid-cols-2 gap-2">
                {memberships.map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-[#B7B7B7] text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#CBA135] flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Product / Laser Training Certificates */}
            <motion.div variants={fadeUp} custom={9} className="max-w-4xl mx-auto mb-12">
              <h3 className="text-xl font-semibold text-[#CBA135] mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Product / Laser Training Certificates</h3>
              <div className="grid sm:grid-cols-2 gap-2">
                {certifications.map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-[#B7B7B7] text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#CBA135] flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Awards & Recognitions */}
            <motion.div variants={fadeUp} custom={10} className="max-w-4xl mx-auto mb-12">
              <h3 className="text-xl font-semibold text-[#CBA135] mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Awards &amp; Recognitions</h3>
              <div className="grid sm:grid-cols-2 gap-2">
                {awards.map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-[#B7B7B7] text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#CBA135] flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Professional Contributions */}
            <motion.div variants={fadeUp} custom={11} className="max-w-4xl mx-auto mb-12">
              <h3 className="text-xl font-semibold text-[#CBA135] mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Professional Contributions</h3>
              <div className="space-y-2">
                {contributions.map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-[#B7B7B7] text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#CBA135] flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Philosophy */}
            <motion.div
              variants={fadeUp} custom={12}
              className="max-w-3xl mx-auto mt-16 p-8 rounded-2xl text-center"
              style={{
                background: "linear-gradient(135deg, rgba(203,161,53,0.08) 0%, rgba(203,161,53,0.02) 100%)",
                border: "1px solid rgba(203,161,53,0.2)",
              }}
            >
              <p className="text-white text-lg md:text-xl leading-relaxed italic" style={{ fontFamily: "'Playfair Display', serif" }}>
                &ldquo;I believe true beauty lies in enhancing what nature has given you \u2014 not changing who you are. My approach is always conservative, precise, and personalized. Every face tells a story, and my job is to help you tell it with confidence.&rdquo;
              </p>
              <p className="text-[#CBA135] mt-4 font-semibold" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>— Dr. Vikas Singh</p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
