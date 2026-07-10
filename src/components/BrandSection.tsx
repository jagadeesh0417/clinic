"use client";

import Image from "next/image";
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
  { degree: "MBBS (Bachelor of Medicine & Bachelor of Surgery)", institution: "Rajiv Gandhi University of Health Sciences (RGUHS)", country: "India" },
  { degree: "PG Diploma / Certification in Clinical Dermatology", institution: "Cardiff University", country: "United Kingdom" },
  { degree: "Certification in Aesthetic Medicine", institution: "American Academy of Aesthetic Medicine (AAAM)", country: "USA" },
  { degree: "Hair Transplant Certification", institution: "American Academy of Aesthetic Medicine & ISHRS", country: "USA" },
  { degree: "Cosmetic Dermatology Certification", institution: "American Hair Loss Council", country: "USA" },
];

const certificationsData = [
  { cert: "Certified Aesthetic Physician", org: "International Academy of Aesthetic Medicine (IAAM)", country: "USA" },
  { cert: "Fellowship in Laser & Aesthetic Medicine", org: "International Academy of Aesthetic Medicine", country: "USA" },
  { cert: "Certification in Cosmetic Dermatology", org: "American Hair Loss Council", country: "USA" },
  { cert: "Fellowship in Experimental Laser Therapy", org: "International Aesthetic Training Programs", country: "Singapore / Hong Kong / Bangkok" },
];

const specializations = [
  "Hair Transplant Surgery \u2014 FUE, FUT, DHI, High-Density Hair Transplant",
  "Anti-Ageing Medicine \u2014 Botox, Fillers, Threads, Skin Rejuvenation",
  "Cosmetic Dermatology \u2014 Acne, Pigmentation, Chemical Peels",
  "Laser Aesthetics \u2014 Fractional CO\u2082, Er-YAG Lasers",
  "Body Contouring \u2014 Lipodissolve, Inch Loss Laser Therapy",
  "Regenerative Medicine \u2014 PRP Therapy, Stem Cell Hair Therapy",
  "Non-Surgical Face Lift \u2014 Thread Lift, Fillers, Contouring",
];

const internationalTraining = [
  { location: "Singapore", detail: "Advanced Aesthetic & Laser Medicine \u2014 International Aesthetic Programs" },
  { location: "Hong Kong", detail: "Cosmetic Injectables & Facial Contouring \u2014 International Academy Workshops" },
  { location: "Bangkok", detail: "Mesotherapy & Anti-Ageing Medicine \u2014 Aesthetic Medicine Training" },
  { location: "Australia", detail: "Stem Cell & Regenerative Therapy \u2014 Under stem cell specialist Dr. Richard DeAndrea" },
  { location: "Taiwan / Singapore", detail: "Cosmetic Laser Dermatology \u2014 With global experts including Dr. Woffles Wu" },
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
  "Best Cosmetic Physician \u2013 South India \u2014 International Aesthetic Awards (2023)",
  "Times Global Best Doctor Award \u2014 Times Group Global Healthcare Awards",
  "Zee Business \u2013 IGA Healthcare Award \u2014 Zee Business International Awards",
  "Arogya Jyothi Best Cosmetologist Award \u2014 Healthcare Excellence Awards",
  "Excellence in Aesthetic Medicine \u2014 International Cosmetic Medicine Forum",
];

const contributions = [
  "Founder \u2014 KO Clinics, Kosmedix, The Bodyline, REE Age, Kosmedix Global Aesthetic Institute",
  "Innovator \u2014 AAA Stemcell Therapy, Breast Derma Filler, Liquid Face Lift, Lipodissolve Ultra, Ponytail Lift",
  "Trainer \u2014 Conducts aesthetic medicine training programs",
  "Author \u2014 Kosmedix Global Aesthetic Institute, KO Clinics Chain",
  "Mentor \u2014 Non Surgical Breast Lift, Liquid Face Lift, Micro Bio Fue Hair Transplant",
  "Public Articles In \u2014 Micro Bio Fue, Liquid Breast Lift, Liquid Face Lift, AAA Stemcell Therapy For Anti Ageing",
];

function SectionTitle({ label }: { label: string }) {
  return (
    <motion.div variants={fadeUp} custom={0} className="text-center mb-12">
      <span className="inline-block text-[#C9A14A] font-mono text-sm tracking-[0.2em] uppercase" style={{ fontFamily: "var(--font-sans), sans-serif" }}>
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
      className="mx-auto my-6 h-[2px] w-20 origin-center bg-[#C9A14A]"
    />
  );
}

export default function BrandSection() {
  return (
    <>
      {/* --- HERO / BRAND INTRO --- */}
      <section className="relative bg-[#100D0A] py-24 md:py-32 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-[#C9A14A]/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#C9A14A]/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={container}
          >
            <motion.div variants={fadeUp} custom={0}>
              <span className="inline-block text-[#C9A14A] font-mono text-sm tracking-[0.2em] uppercase" style={{ fontFamily: "var(--font-sans), sans-serif" }}>
                THE CLINIC
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp} custom={1}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mt-4 mb-6"
              style={{ fontFamily: "var(--font-display), serif" }}
            >
              Kosmedixx{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C9A14A] to-[#DDBB6C]">
                / KO Clinics
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp} custom={2}
              className="text-[#CBBFAF] text-lg md:text-xl leading-relaxed max-w-4xl"
              style={{ fontFamily: "var(--font-sans), sans-serif" }}
            >
               Founded in 2005 by renowned aesthetic medicine expert <strong className="text-white">Dr. Vikas Singh</strong>, Kosmedixx Clinic has emerged as a pioneering force in the field of advanced aesthetic and cosmetic medicine. Dr. Singh was among the first to introduce LIPODISSOLVE Ultra and laser-based inch-loss treatments to Bangalore and India, setting new benchmarks in non-invasive body contouring. As the visionary founder behind Bodyline Clinic and Ree Age Clinic, he has also established the Kosmedixx Global Aesthetic Institute and serves as a key figure in the European Federation of Aesthetic Medicine and Surgery (EFAMS).
            </motion.p>

            <motion.p
              variants={fadeUp} custom={3}
              className="text-[#CBBFAF] text-lg md:text-xl leading-relaxed mt-6"
              style={{ fontFamily: "var(--font-sans), sans-serif" }}
            >
              Kosmedixx is committed to delivering scientifically-backed, cutting-edge treatments in anti-aging, advanced hair restoration, stem cell therapy, weight and inch loss, and cosmetic surgery. Our team comprises internationally trained and board-certified dermatologists, plastic surgeons, and aesthetic physicians who uphold the highest standards of safety, ethics, and clinical excellence.
            </motion.p>

            <motion.p
              variants={fadeUp} custom={4}
              className="text-[#CBBFAF] text-lg md:text-xl leading-relaxed mt-6"
              style={{ fontFamily: "var(--font-sans), sans-serif" }}
            >
              With a mission to make premium aesthetic care accessible, KO Clinics are expanding rapidly across India and internationally, offering practitioners the opportunity to partner and join our growing global network. Whether you&apos;re a client seeking world-class results or a professional looking to be part of a progressive aesthetic brand, Kosmedixx stands as a symbol of trust, innovation, and integrity.
            </motion.p>

            <motion.p
              variants={fadeUp} custom={5}
              className="text-[#C9A14A] text-2xl md:text-3xl font-semibold mt-8 italic"
              style={{ fontFamily: "var(--font-display), serif" }}
            >
              At Kosmedixx, we believe in &ldquo;Aesthetics with Ethics&rdquo; &mdash; delivering gold-standard outcomes while prioritizing transparency, education, and individualized care.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* --- WHY CHOOSE KO CLINICS --- */}
      <section className="relative bg-[#191410] py-24 overflow-hidden">
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
              style={{ fontFamily: "var(--font-display), serif" }}
            >
              Why choose{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C9A14A] to-[#DDBB6C]">
                KO Clinics
              </span>
            </motion.h2>
            <GoldDivider />
            <motion.p
              variants={fadeUp} custom={1}
              className="text-[#CBBFAF] text-lg leading-relaxed text-center max-w-4xl mx-auto"
              style={{ fontFamily: "var(--font-sans), sans-serif" }}
            >
              Kosmedixx delivers cutting-edge aesthetic and dermatological treatments designed to enhance natural beauty and restore skin confidence. Advanced, US-FDA-approved solutions across a wide range of concerns \u2014 skin lightening, long-term sun damage, acne-related pigmentation, melasma, and age-related discoloration.
            </motion.p>
            <motion.p
              variants={fadeUp} custom={2}
              className="text-[#CBBFAF] text-lg leading-relaxed text-center max-w-4xl mx-auto mt-4"
              style={{ fontFamily: "var(--font-sans), sans-serif" }}
            >
              Services extend beyond skin \u2014 hair transplant procedures, anti-ageing stem cell therapy, and a medically supervised weight and inch loss programme, all using FDA-approved technology.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* --- MISSION --- */}
      <section className="relative bg-[#100D0A] py-24 overflow-hidden">
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
              style={{ fontFamily: "var(--font-display), serif" }}
            >
              Our Mission
            </motion.h2>
            <GoldDivider />
            <motion.p
              variants={fadeUp} custom={1}
              className="text-[#CBBFAF] text-lg md:text-xl leading-relaxed max-w-3xl mx-auto"
              style={{ fontFamily: "var(--font-sans), sans-serif" }}
            >
              To make world-class aesthetic and cosmetic medicine accessible, safe and honest. Since 2005, KO Clinics has worked to bring globally proven treatments to patients in India — not the newest trend, but the techniques with evidence behind them. Every treatment plan is built around the individual: their concerns, their anatomy, their goals. No templates, no pressure, no promises we can't keep. We measure success by results that look natural and by patients who understand exactly what was done and why. That means clear consultations, transparent pricing, realistic expectations, and the willingness to tell someone a procedure isn't right for them. As we grow across India and internationally, our commitment stays the same — the standard of care in every KO clinic, in every city, is the standard of care in our first.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* --- VISION --- */}
      <section className="relative bg-[#191410] py-24 overflow-hidden">
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
              style={{ fontFamily: "var(--font-display), serif" }}
            >
              Our Vision
            </motion.h2>
            <GoldDivider />
            <motion.p
              variants={fadeUp} custom={1}
              className="text-[#CBBFAF] text-lg md:text-xl leading-relaxed max-w-3xl mx-auto"
              style={{ fontFamily: "var(--font-sans), sans-serif" }}
            >
              To establish the Kosmedixx KO Chain of Clinics as a leading global network of premium aesthetic centers that make advanced cosmetic dermatology and regenerative medicine accessible to everyone regardless of geography. With state-of-the-art technology and standardized protocols, Dr. Vikas Singh envisions affordable luxury aesthetics that are as available in tier-2 Indian cities as they are in Dubai, Hong Kong, London, or Bahrain.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* --- THE FOUNDER --- */}
      <section className="relative bg-[#100D0A] py-24 md:py-32 overflow-hidden">
        <div className="absolute top-1/3 left-1/3 w-80 h-80 bg-[#C9A14A]/5 rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle label="MEET YOUR DOCTOR" />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={container}
          >
            <motion.div variants={fadeUp} custom={0} className="text-center mb-4">
              <div className="mb-6 flex justify-center">
                <div className="relative h-40 w-40 overflow-hidden rounded-full border-2 border-[#C9A14A]/30 md:h-52 md:w-52">
                  <Image src="/images/dr-vikas.png" alt="Dr. Vikas Singh" fill className="object-cover" unoptimized />
                </div>
              </div>
              <h2
                className="text-4xl md:text-6xl font-bold text-white"
                style={{ fontFamily: "var(--font-display), serif" }}
              >
                Dr. Vikas Singh
              </h2>
              <p className="text-[#C9A14A] text-lg md:text-xl italic mt-2" style={{ fontFamily: "var(--font-display), serif" }}>
                Enhance, Not Change.
              </p>
            </motion.div>

            <motion.p
              variants={fadeUp} custom={1}
              className="text-[#CBBFAF] text-lg leading-relaxed max-w-4xl mx-auto text-center"
              style={{ fontFamily: "var(--font-sans), sans-serif" }}
            >
              Dr. Vikas Singh is a board-certified aesthetic physician with extensive international training in non-surgical facial rejuvenation. With a passion for artistry and precision, he has helped thousands of patients achieve their aesthetic goals naturally and safely.
            </motion.p>

            <motion.div
              variants={fadeUp} custom={2}
              className="max-w-4xl mx-auto mt-6 text-center space-y-1"
            >
              <p className="text-[#C9A14A] text-base font-semibold" style={{ fontFamily: "var(--font-sans), sans-serif" }}>
                Celebrity Hair Transplant Surgeon, Cosmetic Dermatologist &amp; Aesthetic Physician
              </p>
              <p className="text-[#CBBFAF] text-sm" style={{ fontFamily: "var(--font-sans), sans-serif" }}>
                Founder Kosmedix Hair &amp; Skin Clinics, KO Clinics, La Crown Aesthetics
              </p>
              <p className="text-[#CBBFAF] text-sm" style={{ fontFamily: "var(--font-sans), sans-serif" }}>
                20+ Years in Aesthetic Medicine, Hair Restoration &amp; Anti-Ageing Medicine
              </p>
              <p className="text-[#CBBFAF] text-xs mt-2 italic" style={{ fontFamily: "var(--font-sans), sans-serif" }}>
                MBBS, AIIMS (Bangalore Medical College &amp; Research Centre) &middot; Clinic Dermatology \u2013 Cardiff University Wales
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={fadeUp} custom={4}
              className="flex flex-wrap justify-center gap-12 mt-10 mb-16"
            >
              <div className="text-center">
                <span className="block text-4xl md:text-5xl font-bold text-[#C9A14A]" style={{ fontFamily: "var(--font-display), serif" }}>20+</span>
                <span className="text-[#CBBFAF] text-sm uppercase tracking-wider" style={{ fontFamily: "var(--font-sans), sans-serif" }}>Years Experience</span>
              </div>
              <div className="text-center">
                <span className="block text-4xl md:text-5xl font-bold text-[#C9A14A]" style={{ fontFamily: "var(--font-display), serif" }}>10,000+</span>
                <span className="text-[#CBBFAF] text-sm uppercase tracking-wider" style={{ fontFamily: "var(--font-sans), sans-serif" }}>Procedures</span>
              </div>
              <div className="text-center">
                <span className="block text-4xl md:text-5xl font-bold text-[#C9A14A]" style={{ fontFamily: "var(--font-display), serif" }}>International</span>
                <span className="text-[#CBBFAF] text-sm uppercase tracking-wider" style={{ fontFamily: "var(--font-sans), sans-serif" }}>Certifications</span>
              </div>
            </motion.div>

            {/* Education */}
            <motion.div variants={fadeUp} custom={5} className="max-w-4xl mx-auto mb-12">
              <h3 className="text-xl font-semibold text-[#C9A14A] mb-4 text-center" style={{ fontFamily: "var(--font-sans), sans-serif" }}>Education</h3>
              <div className="overflow-x-auto rounded-xl" style={{ border: "1px solid rgba(246,241,232,0.08)" }}>
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="text-[#C9A14A] text-xs uppercase tracking-wider" style={{ fontFamily: "var(--font-sans), sans-serif", background: "rgba(203,161,53,0.08)" }}>
                      <th className="p-3 font-semibold">Qualification</th>
                      <th className="p-3 font-semibold">Institution</th>
                      <th className="p-3 font-semibold">Country</th>
                    </tr>
                  </thead>
                  <tbody>
                    {education.map((item, i) => (
                      <tr key={i} className="border-t border-white/5">
                        <td className="p-3 text-white" style={{ fontFamily: "var(--font-sans), sans-serif" }}>{item.degree}</td>
                        <td className="p-3 text-[#CBBFAF]" style={{ fontFamily: "var(--font-sans), sans-serif" }}>{item.institution}</td>
                        <td className="p-3 text-[#CBBFAF]" style={{ fontFamily: "var(--font-sans), sans-serif" }}>{item.country}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>

            {/* Certifications */}
            <motion.div variants={fadeUp} custom={6} className="max-w-4xl mx-auto mb-12">
              <h3 className="text-xl font-semibold text-[#C9A14A] mb-4 text-center" style={{ fontFamily: "var(--font-sans), sans-serif" }}>Certifications</h3>
              <div className="overflow-x-auto rounded-xl" style={{ border: "1px solid rgba(246,241,232,0.08)" }}>
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="text-[#C9A14A] text-xs uppercase tracking-wider" style={{ fontFamily: "var(--font-sans), sans-serif", background: "rgba(203,161,53,0.08)" }}>
                      <th className="p-3 font-semibold">Certification</th>
                      <th className="p-3 font-semibold">Organization</th>
                      <th className="p-3 font-semibold">Country</th>
                    </tr>
                  </thead>
                  <tbody>
                    {certificationsData.map((item, i) => (
                      <tr key={i} className="border-t border-white/5">
                        <td className="p-3 text-white" style={{ fontFamily: "var(--font-sans), sans-serif" }}>{item.cert}</td>
                        <td className="p-3 text-[#CBBFAF]" style={{ fontFamily: "var(--font-sans), sans-serif" }}>{item.org}</td>
                        <td className="p-3 text-[#CBBFAF]" style={{ fontFamily: "var(--font-sans), sans-serif" }}>{item.country}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>

            {/* Specializations */}
            <motion.div variants={fadeUp} custom={7} className="max-w-4xl mx-auto mb-12">
              <h3 className="text-xl font-semibold text-[#C9A14A] mb-4" style={{ fontFamily: "var(--font-sans), sans-serif" }}>Specializations</h3>
              <div className="grid sm:grid-cols-2 gap-2">
                {specializations.map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-[#CBBFAF] text-sm" style={{ fontFamily: "var(--font-sans), sans-serif" }}>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9A14A] flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* International Training */}
            <motion.div variants={fadeUp} custom={8} className="max-w-4xl mx-auto mb-12">
              <h3 className="text-xl font-semibold text-[#C9A14A] mb-4" style={{ fontFamily: "var(--font-sans), sans-serif" }}>International Training</h3>
              <div className="space-y-3">
                {internationalTraining.map((item, i) => (
                  <div
                    key={i}
                    className="flex flex-col sm:flex-row sm:items-center gap-2 rounded-xl p-4"
                    style={{
                      background: "rgba(246,241,232,0.04)",
                      border: "1px solid rgba(246,241,232,0.08)",
                    }}
                  >
                    <span className="text-[#C9A14A] font-semibold text-sm uppercase tracking-wider flex-shrink-0" style={{ fontFamily: "var(--font-sans), sans-serif" }}>{item.location}</span>
                    <span className="text-[#CBBFAF] text-sm" style={{ fontFamily: "var(--font-sans), sans-serif" }}>{item.detail}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Professional Memberships */}
            <motion.div variants={fadeUp} custom={9} className="max-w-4xl mx-auto mb-12">
              <h3 className="text-xl font-semibold text-[#C9A14A] mb-4" style={{ fontFamily: "var(--font-sans), sans-serif" }}>Professional Memberships</h3>
              <div className="grid sm:grid-cols-2 gap-2">
                {memberships.map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-[#CBBFAF] text-sm" style={{ fontFamily: "var(--font-sans), sans-serif" }}>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9A14A] flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Certificates of Participation & Training */}
            <motion.div variants={fadeUp} custom={10} className="max-w-4xl mx-auto mb-12">
              <h3 className="text-xl font-semibold text-[#C9A14A] mb-4" style={{ fontFamily: "var(--font-sans), sans-serif" }}>Certificates of Participation &amp; Training</h3>
              <div className="grid sm:grid-cols-2 gap-2">
                {certifications.map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-[#CBBFAF] text-sm" style={{ fontFamily: "var(--font-sans), sans-serif" }}>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9A14A] flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Awards & Recognitions */}
            <motion.div variants={fadeUp} custom={11} className="max-w-4xl mx-auto mb-12">
              <h3 className="text-xl font-semibold text-[#C9A14A] mb-4" style={{ fontFamily: "var(--font-sans), sans-serif" }}>Awards &amp; Recognitions</h3>
              <div className="grid sm:grid-cols-2 gap-2">
                {awards.map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-[#CBBFAF] text-sm" style={{ fontFamily: "var(--font-sans), sans-serif" }}>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9A14A] flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Media & Public Appearances */}
            <motion.div variants={fadeUp} custom={12} className="max-w-4xl mx-auto mb-12">
              <h3 className="text-xl font-semibold text-[#C9A14A] mb-4" style={{ fontFamily: "var(--font-sans), sans-serif" }}>Media &amp; Public Appearances</h3>
              <div className="grid sm:grid-cols-2 gap-2">
                {[
                  "Times Group \u2014 Global Doctor Award Recognition",
                  "Zee Business \u2014 Healthcare Excellence Awards",
                  "Health & Lifestyle Magazines \u2014 Cosmetic dermatology expert interviews",
                  "Medical Conferences \u2014 Speaker on Hair Transplant & Anti-Ageing",
                  "Social Media \u2014 Instagram, YouTube, International Aesthetic Workshops",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-[#CBBFAF] text-sm" style={{ fontFamily: "var(--font-sans), sans-serif" }}>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9A14A] flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Professional Contributions */}
            <motion.div variants={fadeUp} custom={13} className="max-w-4xl mx-auto mb-12">
              <h3 className="text-xl font-semibold text-[#C9A14A] mb-4" style={{ fontFamily: "var(--font-sans), sans-serif" }}>Professional Contributions</h3>
              <div className="space-y-2">
                {contributions.map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-[#CBBFAF] text-sm" style={{ fontFamily: "var(--font-sans), sans-serif" }}>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9A14A] flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Philosophy */}
            <motion.div
              variants={fadeUp} custom={14}
              className="max-w-3xl mx-auto mt-16 p-8 rounded-2xl text-center"
              style={{
                background: "linear-gradient(135deg, rgba(203,161,53,0.08) 0%, rgba(203,161,53,0.02) 100%)",
                border: "1px solid rgba(203,161,53,0.2)",
              }}
            >
              <p className="text-white text-lg md:text-xl leading-relaxed italic" style={{ fontFamily: "var(--font-display), serif" }}>
                &ldquo;I believe true beauty lies in enhancing what nature has given you \u2014 not changing who you are. My approach is always conservative, precise, and personalized. Every face tells a story, and my job is to help you tell it with confidence.&rdquo;
              </p>
              <p className="text-[#C9A14A] mt-4 font-semibold" style={{ fontFamily: "var(--font-sans), sans-serif" }}>— Dr. Vikas Singh</p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
