"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface LocationGroup {
  name: string;
  detail: string;
  type: "bengaluru" | "india" | "international";
  cx: number;
  cy: number;
  address?: string;
  phone?: string;
  email?: string;
  hours?: string;
}

const locations: LocationGroup[] = [
  // Bengaluru
  { name: "Koramangala", detail: "Kosmedixx \u2013 Ko Clinics", type: "bengaluru", cx: 620, cy: 345, address: "52, Koramangala 4th Block, near Sony World signal, 3rd floor, Bengaluru, Karnataka 560034" },
  { name: "Jayanagar", detail: "Kosmedixx \u2013 Ko Clinics", type: "bengaluru", cx: 618, cy: 348, address: "No. 37, First Floor, Ashoka Pillar Road, 10th Main Rd, 2nd Block, Jayanagar, Bengaluru 560011" },
  { name: "Frazer Town", detail: "Kosmedixx \u2013 Ko Clinics", type: "bengaluru", cx: 622, cy: 342, address: "8, Mosque Rd, Cleveland Town, Frazer Town, Bengaluru 560005" },
  { name: "Indiranagar", detail: "Kosmedixx \u2013 Ko Clinics", type: "bengaluru", cx: 625, cy: 344, address: "No. 221, 1st Floor, Indiranagar 1st Main Rd, Stage 2, Domlur, Bengaluru 560071" },
  { name: "Banashankari", detail: "Kosmedixx \u2013 Ko Clinics", type: "bengaluru", cx: 615, cy: 350, address: "3rd Floor, No. 241, 7th A Cross Rd, opp Kamakya Theater, 6th Block, 3rd Phase, Banashankari, Bengaluru 560085" },
  { name: "OMBR Layout", detail: "Kosmedixx \u2013 Ko Clinics", type: "bengaluru", cx: 623, cy: 343, address: "Shiva Parvathi Kalayan Mandapa, OMBR Layout, Banaswadi, Bengaluru" },
  { name: "HBR Layout", detail: "Kosmedixx \u2013 Ko Clinics", type: "bengaluru", cx: 624, cy: 341 },
  // Other India
  { name: "Hyderabad", detail: "Kosmedixx / KO Clinics partner", type: "india", cx: 635, cy: 360 },
  { name: "Delhi", detail: "Kosmedixx / KO Clinics partner", type: "india", cx: 630, cy: 310 },
  { name: "Pune", detail: "Kosmedixx / KO Clinics partner", type: "india", cx: 600, cy: 355 },
  { name: "Mangalore", detail: "Kosmedixx / KO Clinics partner", type: "india", cx: 608, cy: 365 },
  { name: "Chennai", detail: "Kosmedixx / KO Clinics partner", type: "india", cx: 650, cy: 375 },
  { name: "Visakhapatnam", detail: "Kosmedixx / KO Clinics partner", type: "india", cx: 665, cy: 360 },
  { name: "Mumbai", detail: "Kosmedixx / KO Clinics partner", type: "india", cx: 600, cy: 340 },
  // International
  { name: "Hong Kong", detail: "Kosmedixx \u2013 Ko Clinics", type: "international", cx: 740, cy: 290, address: "55-65\u865f, Lung Mun Rd, Tuen Mun, Hong Kong", phone: "+852 6082 3699" },
  { name: "Bangkok", detail: "Kosmedixx \u2013 Ko Clinics", type: "international", cx: 720, cy: 310, address: "JLK Tower, 129 Sukhumvit Rd, Khlong Toei Nuea, Watthana, Bangkok 10110, Thailand" },
  { name: "Bahrain", detail: "Kosmedixx \u2013 Ko Clinics", type: "international", cx: 590, cy: 300, address: "7J62+X92, Shaikh Isa Causeway, Al Sayh, Bahrain" },
  { name: "Dubai, UAE", detail: "Kosmedixx \u2013 KO Clinics partner", type: "international", cx: 585, cy: 305, phone: "+971 54 536 6831" },
  { name: "Canada", detail: "Kosmedixx \u2013 KO Clinics partner", type: "international", cx: 200, cy: 270, phone: "+1 (647) 581-4279" },
  { name: "Manila", detail: "Kosmedixx \u2013 KO Clinics partner", type: "international", cx: 710, cy: 360, phone: "+63 966 168 8381" },
];

const connectionPairs: [number, number][] = [
  [0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [0, 6],
  [7, 8], [7, 9], [7, 10], [7, 11], [7, 12], [7, 13],
  [14, 15], [14, 16], [14, 17], [14, 18],
  [15, 19], [16, 17], [18, 19],
];

function ConnectionLine({ from, to, delay }: { from: { cx: number; cy: number }; to: { cx: number; cy: number }; delay: number }) {
  const mx = (from.cx + to.cx) / 2;
  const my = (from.cy + to.cy) / 2 - 40;
  const d = `M ${from.cx} ${from.cy} Q ${mx} ${my} ${to.cx} ${to.cy}`;

  return (
    <g>
      <motion.path
        d={d}
        fill="none"
        stroke="rgba(203,161,53,0.08)"
        strokeWidth="1"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2, delay, ease: "easeInOut" }}
      />
      <motion.path
        d={d}
        fill="none"
        stroke="#C9A14A"
        strokeWidth="1.5"
        strokeDasharray="4 8"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 0.5 }}
        viewport={{ once: true }}
        transition={{ duration: 2, delay: delay + 0.3, ease: "easeInOut" }}
        animate={{ strokeDashoffset: [0, -24] }}
        style={{ strokeDasharray: "4 8" }}
      />
    </g>
  );
}

function GlowingMarker({ cx, cy, delay, color }: { cx: number; cy: number; delay: number; color: string }) {
  return (
    <g>
      <motion.circle
        cx={cx}
        cy={cy}
        r="4"
        fill={color}
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay, duration: 0.6 }}
      />
      <motion.circle
        cx={cx}
        cy={cy}
        r="10"
        fill="none"
        stroke={color}
        strokeWidth="1.5"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay, duration: 0.6 }}
        animate={{ opacity: [0.6, 0.1, 0.6], scale: [1, 1.8, 1] }}
        style={{ transformOrigin: `${cx}px ${cy}px` }}
      />
      <motion.circle
        cx={cx}
        cy={cy}
        r="20"
        fill="none"
        stroke={color}
        strokeWidth="0.5"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay, duration: 0.6 }}
        animate={{ opacity: [0.3, 0, 0.3], scale: [1, 2.2, 1] }}
        style={{ transformOrigin: `${cx}px ${cy}px` }}
      />
    </g>
  );
}

function LocationCard({ location, index }: { location: LocationGroup; index: number }) {
  const isBengaluru = location.type === "bengaluru";
  const isIndia = location.type === "india";
  const typeColor = isBengaluru ? "#C9A14A" : isIndia ? "rgba(246,241,232,0.6)" : "rgba(246,241,232,0.4)";
  const typeLabel = isBengaluru ? "Bengaluru" : isIndia ? "India" : "International";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06, duration: 0.5 }}
      className="group"
    >
      <div
        className="relative overflow-hidden rounded-xl p-4 transition-all duration-500 hover:scale-[1.02]"
        style={{
          background: "rgba(246,241,232,0.04)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          border: "1px solid rgba(246,241,232,0.08)",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#C9A14A]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="relative z-10">
          <div className="flex items-start gap-3">
            <div className="relative flex-shrink-0 mt-1">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: typeColor, boxShadow: `0 0 12px ${typeColor}40` }}
              />
              {isBengaluru && (
                <motion.div
                  className="absolute inset-0 rounded-full"
                  style={{ border: "2px solid rgba(203,161,53,0.3)" }}
                  animate={{ scale: [1, 2], opacity: [0.6, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeOut" as const }}
                />
              )}
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2 flex-wrap">
                <p className="text-sm font-medium truncate" style={{ fontFamily: "var(--font-sans), sans-serif", color: "#fff" }}>
                  {location.name}
                </p>
                <span className="text-[10px] px-2 py-0.5 rounded-full" style={{ fontFamily: "var(--font-sans), sans-serif", background: "rgba(203,161,53,0.15)", color: "#C9A14A" }}>
                  {typeLabel}
                </span>
              </div>
              <p className="text-xs mt-0.5" style={{ fontFamily: "var(--font-sans), sans-serif", color: typeColor }}>
                {location.detail}
              </p>
              {location.address && (
                <p className="text-xs mt-1.5" style={{ fontFamily: "var(--font-sans), sans-serif", color: "rgba(246,241,232,0.4)" }}>
                  {location.address}
                </p>
              )}
              {location.phone && (
                <p className="text-xs mt-1" style={{ fontFamily: "var(--font-sans), sans-serif", color: "rgba(246,241,232,0.4)" }}>
                  {location.phone}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function GlobalPresence() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const bengaluruLocations = locations.filter((l) => l.type === "bengaluru" && l.address);
  const indiaLocations = locations.filter((l) => l.type === "india");
  const internationalLocations = locations.filter((l) => l.type === "international");

  return (
    <section
      id="global-presence"
      className="relative overflow-hidden py-24 px-5 md:px-10 lg:px-20"
      style={{ backgroundColor: "#100D0A" }}
    >
      <div
        className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(203,161,53,0.12), transparent)" }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full opacity-15 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(203,161,53,0.08), transparent)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p
            className="text-sm tracking-[0.2em] uppercase mb-4"
            style={{ fontFamily: "var(--font-sans), sans-serif", color: "#C9A14A", letterSpacing: "0.2em" }}
          >
            Our Reach
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "var(--font-display), serif", color: "#fff" }}
          >
            Location-Wise{" "}
            <span style={{ color: "#C9A14A" }}>Network</span>
          </h2>
          <p
            className="text-sm max-w-xl mx-auto"
            style={{ fontFamily: "var(--font-sans), sans-serif", color: "rgba(246,241,232,0.5)" }}
          >
            KO Clinics locations and partner clinics across India and internationally.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          <div className="lg:col-span-3 relative">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden"
              style={{ background: "rgba(246,241,232,0.02)", border: "1px solid rgba(246,241,232,0.06)" }}
            >
              <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.08 }}>
                <defs>
                  <pattern id="grid-gold" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#C9A14A" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid-gold)" />
              </svg>

              <svg
                viewBox="0 0 1000 500"
                className="absolute inset-0 w-full h-full"
                preserveAspectRatio="xMidYMid meet"
              >
                <motion.path
                  d="M 160 180 Q 180 160 220 160 Q 260 160 280 180 Q 310 200 300 240 Q 290 280 260 300 Q 230 320 200 310 Q 170 300 150 270 Q 130 240 140 210 Z"
                  fill="rgba(203,161,53,0.06)" stroke="rgba(203,161,53,0.15)" strokeWidth="1"
                  initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                  transition={{ duration: 1.5 }}
                />
                <motion.path
                  d="M 280 330 Q 300 320 310 340 Q 320 370 310 400 Q 290 430 270 420 Q 260 400 260 370 Q 265 345 280 330 Z"
                  fill="rgba(203,161,53,0.06)" stroke="rgba(203,161,53,0.15)" strokeWidth="1"
                  initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 0.2 }}
                />
                <motion.path
                  d="M 400 200 Q 420 180 450 180 Q 480 185 490 210 Q 495 230 480 245 Q 450 255 425 240 Q 405 225 400 200 Z"
                  fill="rgba(203,161,53,0.06)" stroke="rgba(203,161,53,0.15)" strokeWidth="1"
                  initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 0.3 }}
                />
                <motion.path
                  d="M 510 260 Q 530 250 550 260 Q 570 280 565 310 Q 560 340 540 360 Q 510 365 495 340 Q 485 310 495 280 Z"
                  fill="rgba(203,161,53,0.06)" stroke="rgba(203,161,53,0.15)" strokeWidth="1"
                  initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 0.4 }}
                />
                <motion.path
                  d="M 560 190 Q 600 170 660 175 Q 720 180 760 210 Q 780 240 770 270 Q 750 310 710 320 Q 650 335 590 325 Q 550 310 540 280 Q 535 250 545 220 Z"
                  fill="rgba(203,161,53,0.06)" stroke="rgba(203,161,53,0.15)" strokeWidth="1"
                  initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                />
                <motion.path
                  d="M 760 380 Q 790 370 810 380 Q 830 395 820 415 Q 800 430 770 420 Q 750 405 755 390 Z"
                  fill="rgba(203,161,53,0.06)" stroke="rgba(203,161,53,0.15)" strokeWidth="1"
                  initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 0.6 }}
                />

                {mounted && connectionPairs.map(([i, j], idx) => (
                  <ConnectionLine key={`conn-${idx}`} from={locations[i]} to={locations[j]} delay={0.8 + idx * 0.06} />
                ))}

                {mounted && locations.map((loc, idx) => {
                  let color: string;
                  switch (loc.type) {
                    case "bengaluru": color = "#C9A14A"; break;
                    case "india": color = "rgba(246,241,232,0.5)"; break;
                    case "international": color = "rgba(203,161,53,0.4)"; break;
                    default: color = "#FFFFFF";
                  }
                  return (
                    <GlowingMarker
                      key={`marker-${idx}`}
                      cx={loc.cx}
                      cy={loc.cy}
                      delay={1.5 + idx * 0.1}
                      color={color}
                    />
                  );
                })}

                {mounted && locations.filter(l => l.type === "bengaluru" || l.type === "india").map((loc, idx) => (
                  <motion.g
                    key={`label-${idx}`}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 2.5 + idx * 0.12, duration: 0.5 }}
                  >
                    <text
                      x={loc.cx}
                      y={loc.cy - 22}
                      textAnchor="middle"
                      fill={loc.type === "bengaluru" ? "#C9A14A" : "rgba(246,241,232,0.5)"}
                      fontSize="7"
                      fontFamily="var(--font-sans), sans-serif"
                      fontWeight="500"
                      opacity="0.85"
                    >
                      {loc.name.includes("(") ? loc.name.split(" (")[0] : loc.name}
                    </text>
                  </motion.g>
                ))}
              </svg>
            </motion.div>

            <div className="mt-6 flex gap-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1.5, duration: 0.6 }}
                className="flex-1 h-28 rounded-xl overflow-hidden relative"
                style={{ border: "1px solid rgba(246,241,232,0.06)" }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80"
                  alt="Global network"
                  fill
                  className="object-cover"
                  sizes="50vw"
                  unoptimized
                />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(5,5,5,0.8), transparent)" }} />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1.7, duration: 0.6 }}
                className="flex-1 h-28 rounded-xl overflow-hidden relative"
                style={{ border: "1px solid rgba(246,241,232,0.06)" }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1526778548025-fa2f459b5f6a?w=800&q=80"
                  alt="Global tech"
                  fill
                  className="object-cover"
                  sizes="50vw"
                  unoptimized
                />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(5,5,5,0.8), transparent)" }} />
              </motion.div>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-8">
            <div>
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-xs tracking-[0.2em] uppercase mb-4"
                style={{ fontFamily: "var(--font-sans), sans-serif", color: "#C9A14A", letterSpacing: "0.2em" }}
              >
                Bengaluru Clinics
              </motion.h3>
              <div className="space-y-3">
                {bengaluruLocations.map((loc, idx) => (
                  <LocationCard key={loc.name} location={loc} index={idx} />
                ))}
              </div>
            </div>

            <div>
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="text-xs tracking-[0.2em] uppercase mb-4"
                style={{ fontFamily: "var(--font-sans), sans-serif", color: "rgba(246,241,232,0.5)", letterSpacing: "0.2em" }}
              >
                Other Indian Cities
              </motion.h3>
              <div className="space-y-3">
                {indiaLocations.map((loc, idx) => (
                  <LocationCard key={loc.name} location={loc} index={idx + 10} />
                ))}
              </div>
            </div>

            <div>
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-xs tracking-[0.2em] uppercase mb-4"
                style={{ fontFamily: "var(--font-sans), sans-serif", color: "rgba(203,161,53,0.6)", letterSpacing: "0.2em" }}
              >
                International
              </motion.h3>
              <div className="space-y-3">
                {internationalLocations.map((loc, idx) => (
                  <LocationCard key={loc.name} location={loc} index={idx + 20} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
