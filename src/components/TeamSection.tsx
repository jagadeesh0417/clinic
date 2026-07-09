"use client";

import { motion } from "framer-motion";

const reveal = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.12 * i, ease: "easeOut" as const },
  }),
};

interface DoctorProps {
  name: string;
  designation: string;
  summary: string;
  qualifications: string[];
  expertise: string[];
  experience: string;
  achievements?: string[];
  image?: string;
}

const doctors: DoctorProps[] = [
  {
    name: "Dr. Subramini",
    designation: "Consultant Cosmetic, Plastic & Craniofacial Reconstructive Surgeon",
    summary: "M.S., M.Ch., F.I.C.S., F.A.I.S., Ph.D. \u2014 ALIMS (Bangalore Medical College & Research Centre)",
    qualifications: [
      "M.S., M.Ch., F.I.C.S., F.A.I.S., Ph.D. \u2014 ALIMS (Bangalore Medical College & Research Centre)",
    ],
    expertise: [
      "Cosmetic Surgery",
      "Plastic & Reconstructive Surgery",
      "Craniofacial Surgery",
    ],
    experience: "Senior consultant with extensive experience in cosmetic, plastic, and craniofacial reconstructive surgery.",
    achievements: [
      "Dr. S. Rangachari's Research Endowment Award \u2014 Association of Plastic Surgeons of India, 2004",
      "Prof. R.N. Sinha's Award \u2014 Association of Surgeons of India, 2007",
      "Best Published Research Article \u2014 Indian Journal of Plastic Surgery, 2005",
    ],
    image: "/images/dr-subramini.png",
  },
  {
    name: "Dr. Nandita",
    designation: "Oral & Maxillofacial Surgeon",
    summary: "MDS (OMFS)",
    qualifications: ["MDS (OMFS)"],
    expertise: ["Oral Surgery", "Maxillofacial Surgery", "Facial Trauma & Reconstruction"],
    experience: "Specialist in oral and maxillofacial surgical procedures.",
    image: "/images/dr-nandita.png",
  },
  {
    name: "Dr. D R Sekhar",
    designation: "Senior Consultant \u2014 Plastic, Aesthetic & Reconstructive Surgery",
    summary: "Senior consultant with extensive experience in plastic, aesthetic, and reconstructive surgical procedures.",
    qualifications: ["Senior Consultant \u2014 Plastic, Aesthetic & Reconstructive Surgery"],
    expertise: ["Plastic Surgery", "Aesthetic Surgery", "Reconstructive Surgery"],
    experience: "Senior consultant with extensive experience in plastic, aesthetic, and reconstructive surgical procedures.",
    image: "/images/dr-sekhar.png",
  },
  {
    name: "Dr. Surindher D.S.A",
    designation: "Plastic Surgeon",
    summary: "MBBS, MS (General Surgery), MCh (Plastic Surgery)",
    qualifications: ["MBBS", "MS (General Surgery)", "MCh (Plastic Surgery)"],
    expertise: ["Plastic Surgery", "Aesthetic Reconstruction", "General Surgery"],
    experience: "Qualified plastic surgeon with comprehensive surgical training.",
    image: "/images/Dr-Surindher.png",
  },
  {
    name: "Dr. Aamod Rao",
    designation: "Consultant \u2014 Cosmetic Surgery",
    summary: "MBBS, MS (General Surgery), Fellowship in Aesthetic Surgery (Brazil)",
    qualifications: [
      "MBBS",
      "MS (General Surgery)",
      "Fellowship in Aesthetic Surgery (Brazil)",
    ],
    expertise: ["Cosmetic Surgery", "Aesthetic Surgery", "Body Contouring"],
    experience: "Internationally trained cosmetic surgeon with fellowship training in Brazil.",
    image: "/images/Dr-AamodRao.png",
  },
  {
    name: "Dr. Arivazhagan",
    designation: "Cardiologist, Cardiothoracic & Vascular Surgeon",
    summary: "MBBS, MCh (CTVS), MS (General Surgery) \u2014 38 years experience",
    qualifications: ["MBBS", "MCh (CTVS)", "MS (General Surgery)"],
    expertise: ["Cardiology", "Cardiothoracic Surgery", "Vascular Surgery"],
    experience: "38 years of experience in cardiology and cardiothoracic surgery.",
    image: "/images/Dr- Arivazhagan.png",
  },
  {
    name: "Dr. Mohsin Pasha",
    designation: "General Physician",
    summary: "Experienced general physician providing comprehensive medical care.",
    qualifications: ["General Medicine"],
    expertise: ["General Medicine", "Primary Care", "Preventive Healthcare"],
    experience: "Experienced general physician providing comprehensive medical care.",
    image: "/images/Dr-mohsinpasha.png",
  },
];

export default function TeamSection() {
  return (
    <section className="relative bg-[#050505] py-24 md:py-32 overflow-hidden">
      <div className="absolute top-1/3 right-1/3 w-80 h-80 bg-[#CBA135]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span
            className="inline-block text-[#CBA135] font-mono text-sm tracking-[0.2em] uppercase mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            THE TEAM
          </span>
          <h2
            className="text-3xl md:text-5xl font-bold text-white"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Meet the{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CBA135] to-[#F5D779]">
              Doctors
            </span>
          </h2>
          <p
            className="text-[#B7B7B7] text-base mt-4 max-w-2xl mx-auto"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            The KO Clinics network is anchored by a multi-disciplinary team of internationally trained specialists \u2014 cosmetic and plastic surgeons, maxillofacial and cardiothoracic surgeons, and general medicine.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {doctors.map((doctor, idx) => (
            <motion.div
              key={doctor.name}
              custom={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={reveal}
              whileHover={{ y: -6 }}
              className="group rounded-2xl p-6 md:p-8 transition-all duration-500"
              style={{
                background: "rgba(255,255,255,0.04)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              {/* Avatar */}
              {doctor.image ? (
                <div className="w-20 h-20 rounded-full overflow-hidden mb-5 border-2 border-[#CBA135]/30">
                  <img src={doctor.image} alt={doctor.name} className="h-full w-full object-cover" />
                </div>
              ) : (
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-5 text-lg font-bold text-[#CBA135]"
                  style={{
                    background: "rgba(203,161,53,0.12)",
                    border: "1px solid rgba(203,161,53,0.25)",
                    fontFamily: "'Playfair Display', serif",
                  }}
                >
                  {doctor.name.split(" ").slice(1).map(w => w[0]).join("").slice(0, 2) || doctor.name.split(" ")[0]?.[0]}
                </div>
              )}

              <h3
                className="text-xl md:text-2xl font-bold text-white mb-1"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {doctor.name}
              </h3>

              <p
                className="text-xs uppercase tracking-[0.15em] text-[#CBA135]/80 font-semibold mb-3"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {doctor.designation}
              </p>

              <p
                className="text-sm text-[#B7B7B7] leading-relaxed mb-4"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {doctor.summary}
              </p>

              {/* Qualifications */}
              {doctor.qualifications.length > 0 && (
                <div className="mb-4">
                  <p
                    className="text-[#CBA135] text-xs uppercase tracking-wider font-semibold mb-2"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    Qualifications
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {doctor.qualifications.map((q, i) => (
                      <span
                        key={i}
                        className="inline-block px-3 py-1 rounded-full text-xs text-white"
                        style={{
                          background: "rgba(203,161,53,0.12)",
                          border: "1px solid rgba(203,161,53,0.2)",
                          fontFamily: "'Inter', sans-serif",
                        }}
                      >
                        {q}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Expertise */}
              <div className="mb-4">
                <p
                  className="text-[#CBA135] text-xs uppercase tracking-wider font-semibold mb-2"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  Expertise
                </p>
                <div className="flex flex-wrap gap-2">
                  {doctor.expertise.map((e, i) => (
                    <span
                      key={i}
                      className="inline-block px-3 py-1 rounded-full text-xs text-white/80"
                      style={{
                        background: "rgba(255,255,255,0.06)",
                        border: "1px solid rgba(255,255,255,0.1)",
                        fontFamily: "'Inter', sans-serif",
                      }}
                    >
                      {e}
                    </span>
                  ))}
                </div>
              </div>

              {/* Experience */}
              <p
                className="text-sm text-neutral-400 italic border-l-2 border-[#CBA135]/50 pl-3 mb-4"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {doctor.experience}
              </p>

              {/* Achievements */}
              {doctor.achievements && doctor.achievements.length > 0 && (
                <div>
                  <p
                    className="text-[#CBA135] text-xs uppercase tracking-wider font-semibold mb-2"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    Achievements
                  </p>
                  <ul className="space-y-1.5">
                    {doctor.achievements.map((a, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-xs text-[#B7B7B7]"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        <span className="w-1 h-1 rounded-full bg-[#CBA135] mt-1.5 flex-shrink-0" />
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
