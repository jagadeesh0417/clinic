"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const images = [
  "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&q=80",
  "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=800&q=80",
  "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80",
  "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80",
];

const cards = [
  { title: "Zero Investment Growth", desc: "Expand your practice without upfront capital. KO Clinics covers the setup so you can focus on patients." },
  { title: "Patient Acquisition", desc: "We bring a steady flow of new patients to your clinic through targeted outreach and brand trust." },
  { title: "Digital Presence", desc: "Get a premium online profile with SEO-optimised listings, telebookings, and reputation management." },
  { title: "Corporate Partnerships", desc: "Access corporate wellness tie-ups that drive high-value patient referrals to your practice." },
  { title: "Teleconsultation", desc: "Virtual consultation platform integrated with your clinic workflow for hybrid care delivery." },
  { title: "Lead Generation", desc: "Multi-channel lead capture system that converts inquiries into confirmed appointments." },
  { title: "Marketing Support", desc: "End-to-end campaigns from social media to local ads, tailored to your specialty and location." },
  { title: "Franchise Expansion", desc: "Scale your brand with our franchise model — operations, tech, and marketing handled end-to-end." },
];

const features = [
  "Qualified Leads", "Walk-ins", "Bookings", "Medical Tourism",
  "Health Camps", "AI Support", "CRM", "Digital Marketing",
  "SEO", "WhatsApp Integration", "Appointment System", "Social Media Branding",
];

function ImageGrid() {
  return (
    <div className="relative grid grid-cols-2 gap-3 md:gap-5">
      {images.map((src, i) => (
        <motion.div
          key={src}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" as const }}
          className={`overflow-hidden rounded-2xl ${
            i === 0 ? "mt-0 md:mt-6" : i === 3 ? "-mt-0 md:-mt-6" : ""
          }`}
        >
          <motion.img
            src={src}
            alt=""
            className="h-40 w-full object-cover md:h-56"
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.5 }}
          />
        </motion.div>
      ))}
    </div>
  );
}

function CardGrid() {
  return (
    <div className="mt-16 grid gap-5 sm:grid-cols-2">
      {cards.map((card, i) => (
        <motion.div
          key={card.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" as const }}
          whileHover={{ y: -6, scale: 1.02 }}
          className="group relative overflow-hidden rounded-2xl border p-6 backdrop-blur-xl transition-colors duration-300"
          style={{
            backgroundColor: "rgba(255,255,255,0.04)",
            borderColor: "rgba(255,255,255,0.08)",
          }}
        >
          <div
            className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            style={{
              background:
                "radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(0,213,255,0.1), transparent 40%)",
            }}
          />
          <div className="relative z-10">
            <h3
              className="mb-2 text-lg font-semibold tracking-tight"
              style={{ fontFamily: '"Playfair Display", serif' }}
            >
              {card.title}
            </h3>
            <p className="text-sm leading-relaxed opacity-70">{card.desc}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

function FeaturesStrip() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className="mt-16 flex flex-wrap justify-center gap-3"
    >
      {features.map((feat, i) => (
        <motion.span
          key={feat}
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, delay: 0.6 + i * 0.04 }}
          whileHover={{ scale: 1.06 }}
          className="rounded-full px-4 py-2 text-xs font-medium uppercase tracking-wider"
          style={{
            backgroundColor: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.08)",
            color: "#CBA135",
          }}
        >
          {feat}
        </motion.span>
      ))}
    </motion.div>
  );
}

export default function WhyPartner() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="why-partner"
      className="relative overflow-hidden px-5 py-24 md:px-10 lg:px-20"
      style={{
        background: "linear-gradient(180deg, #0a0f1e 0%, #0d1326 50%, #0a0f1e 100%)",
        color: "#ffffff",
      }}
    >
      {/* ambient glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2"
        style={{
          width: "700px",
          height: "700px",
          background:
            "radial-gradient(circle, rgba(0,213,255,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="mx-auto max-w-7xl" ref={ref}>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* left — images */}
          <ImageGrid />

          {/* right — headline + intro */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" as const }}
          >
            <p
              className="mb-3 text-sm font-semibold uppercase tracking-[0.2em]"
              style={{ color: "#CBA135" }}
            >
              Why Partner
            </p>
            <h2
              className="text-4xl leading-tight md:text-5xl lg:text-6xl"
              style={{ fontFamily: '"Playfair Display", serif' }}
            >
              Partner with{" "}
              <span
                className="bg-gradient-to-r from-[#00D5FF] to-[#CBA135] bg-clip-text text-transparent"
              >
                KO Clinics
              </span>
            </h2>
            <p className="mt-5 max-w-lg text-base leading-relaxed opacity-70">
              We don&apos;t just build clinics — we build futures. Join India&apos;s fastest-growing
              healthcare network and unlock unmatched growth, technology, and brand equity.
            </p>
          </motion.div>
        </div>

        {/* cards */}
        <CardGrid />

        {/* features badge strip */}
        <FeaturesStrip />
      </div>
    </section>
  );
}
