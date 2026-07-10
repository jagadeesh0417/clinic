"use client";

import { motion } from "framer-motion";

const locationGroups = [
  {
    city: "Bengaluru",
    locations: [
      {
        name: "Koramangala",
        address: "52, Koramangala 4th Block, near Sony World signal, 3rd floor",
        area: "Bengaluru, Karnataka 560034",
      },
      {
        name: "Jayanagar",
        address: "No. 37, First Floor, Ashoka Pillar Road, 10th Main Rd, 2nd Block",
        area: "Jayanagar, Bengaluru, Karnataka 560011",
      },
      {
        name: "Frazer Town",
        address: "8, Mosque Rd, Cleveland Town, Frazer Town",
        area: "Bengaluru, Karnataka 560005",
      },
      {
        name: "Indiranagar",
        address: "No. 221, 1st Floor, Indiranagar 1st Main Rd, Stage 2, Domlur",
        area: "Bengaluru, Karnataka 560071",
      },
      {
        name: "HBR Layout",
        address: "Kosmedixx – Ko Clinics",
        area: "Bengaluru",
      },
      {
        name: "Banashankari",
        address: "3rd Floor, No. 241, 7th A Cross Rd, opposite Kamakya Theater, 6th Block, 3rd Phase",
        area: "Banashankari, Bengaluru, Karnataka 560085",
      },
      {
        name: "OMBR Layout",
        address: "Shiva Parvathi Kalayan Mandapa, OMBR Layout, Banaswadi",
        area: "Bengaluru — Opposite to the clinic",
      },
    ],
  },
  {
    city: "International",
    locations: [
      {
        name: "Hong Kong",
        address: "55-65號, Lung Mun Rd, Tuen Mun",
        area: "Hong Kong",
        phone: "+852 6082 3699",
      },
      {
        name: "Bangkok, Thailand",
        address: "JLK Tower, 129 Sukhumvit Rd, Khlong Toei Nuea, Watthana",
        area: "Bangkok 10110, Thailand",
      },
      {
        name: "Bahrain",
        address: "7J62+X92, Shaikh Isa Causeway, Al Sayh",
        area: "Bahrain",
      },
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.1 * i, ease: "easeOut" as const },
  }),
};

export default function Locations() {
  return (
    <section className="relative bg-[#100D0A] py-24 md:py-32 overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#C9A14A]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span
            className="inline-block text-[#C9A14A] font-mono text-sm tracking-[0.2em] uppercase mb-4"
            style={{ fontFamily: "var(--font-displayans), sans-serif" }}
          >
            Our Locations
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold text-white"
            style={{ fontFamily: "var(--font-displayisplay), serif" }}
          >
            Visit{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C9A14A] to-[#F5D779]">
              Kosmedixx – KO Clinics
            </span>
          </h2>
        </motion.div>

        <div className="space-y-16">
          {locationGroups.map((group, gi) => (
            <motion.div
              key={group.city}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              <motion.h3
                variants={fadeUp} custom={0}
                className="text-xl font-semibold text-[#C9A14A] mb-6 text-center md:text-left"
                style={{ fontFamily: "var(--font-displayans), sans-serif" }}
              >
                {group.city}
              </motion.h3>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {group.locations.map((loc, li) => (
                  <motion.div
                    key={loc.name}
                    variants={fadeUp} custom={li + 1}
                    className="rounded-2xl p-6 transition-all duration-500 hover:scale-[1.02]"
                    style={{
                      background: "rgba(246,241,232,0.04)",
                      backdropFilter: "blur(12px)",
                      WebkitBackdropFilter: "blur(12px)",
                      border: "1px solid rgba(246,241,232,0.08)",
                    }}
                  >
                    <div className="flex items-start gap-3 mb-3">
                      <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="#C9A14A" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <div>
                        <h4
                          className="text-white font-semibold text-base"
                          style={{ fontFamily: "var(--font-displayans), sans-serif" }}
                        >
                          {loc.name}
                        </h4>
                        <p className="text-[#C9A14A] text-xs mt-0.5" style={{ fontFamily: "var(--font-displayans), sans-serif" }}>
                          Kosmedixx – Ko Clinics
                        </p>
                      </div>
                    </div>
                    <p className="text-[#CBBFAF] text-sm ml-8" style={{ fontFamily: "var(--font-displayans), sans-serif" }}>
                      {loc.address}
                      <br />
                      {loc.area}
                    </p>
                    {loc.phone && (
                      <p className="text-[#C9A14A] text-sm ml-8 mt-2" style={{ fontFamily: "var(--font-displayans), sans-serif" }}>
                        {loc.phone}
                      </p>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
