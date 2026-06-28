"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const profiles = [
  {
    name: "Dr. Vikas Singh",
    title: "Co-Founder",
    subtitle: "Celebrity Hair Transplant Surgeon",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&q=80",
    expertise: [
      "Cosmetic Dermatologist",
      "International Aesthetic Expert",
      "Regenerative Medicine Specialist",
      "Healthcare Mentor",
    ],
    experience: "More than 20 years of experience.",
  },
  {
    name: "Geeta Paul",
    title: "Co-Founder",
    subtitle: "Healthcare Entrepreneur",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80",
    expertise: [
      "Business Strategist",
      "Clinic Operations Expert",
      "Brand Expansion Specialist",
      "Partnership Development Leader",
      "National Healthcare Network Builder",
    ],
  },
];

const reveal = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: 0.2 * i, ease: "easeOut" as const },
  }),
};

export default function Leadership() {
  return (
    <section
      id="leadership"
      className="relative bg-[#050505] py-24 px-4 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl text-center mb-16"
          style={{
            fontFamily: "'Playfair Display', serif",
            color: "#CBA135",
          }}
        >
          Our Co-Founders
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {profiles.map((profile, idx) => (
            <motion.div
              key={profile.name}
              custom={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={reveal}
              className="group relative rounded-2xl overflow-hidden backdrop-blur-xl border border-white/10 bg-white/[0.04] shadow-2xl transition-all duration-500 hover:border-[#CBA135]/40 hover:shadow-[#CBA135]/10 hover:shadow-2xl"
            >
              <div className="relative w-full aspect-[4/5] overflow-hidden">
                <Image
                  src={profile.image}
                  alt={profile.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/30 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#050505]/80" />
              </div>

              <div className="relative -mt-32 px-6 pb-8 pt-4 z-10">
                <h3
                  className="text-2xl md:text-3xl font-bold mb-1"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: "#CBA135",
                  }}
                >
                  {profile.name}
                </h3>

                <p
                  className="text-xs uppercase tracking-[0.2em] mb-1 text-[#00D5FF] font-semibold"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {profile.title}
                </p>

                <p
                  className="text-sm uppercase tracking-[0.15em] mb-4 text-neutral-300"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {profile.subtitle}
                </p>

                {profile.experience && (
                  <p
                    className="text-sm text-neutral-400 italic mb-4 border-l-2 border-[#CBA135]/50 pl-3"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {profile.experience}
                  </p>
                )}

                <ul className="space-y-2">
                  {profile.expertise.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-sm text-neutral-400"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      <span
                        className="inline-block w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ backgroundColor: "#CBA135" }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
