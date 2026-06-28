"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

interface Location {
  name: string
  detail: string
  type: "current" | "expansion" | "future"
  cx: number
  cy: number
}

const locations: Location[] = [
  { name: "Bengaluru", detail: "India Headquarters · Koramangala", type: "current", cx: 620, cy: 345 },
  { name: "Hong Kong", detail: "Tuen Mun Centre", type: "current", cx: 710, cy: 320 },
  { name: "India", detail: "Expansion Market", type: "expansion", cx: 640, cy: 335 },
  { name: "Hong Kong", detail: "Expansion Market", type: "expansion", cx: 720, cy: 310 },
  { name: "Dubai", detail: "Expansion Market", type: "expansion", cx: 590, cy: 330 },
  { name: "Canada", detail: "Expansion Market", type: "expansion", cx: 240, cy: 280 },
  { name: "Middle East", detail: "Future Expansion", type: "future", cx: 560, cy: 325 },
  { name: "Europe", detail: "Future Expansion", type: "future", cx: 450, cy: 260 },
  { name: "North America", detail: "Future Expansion", type: "future", cx: 220, cy: 300 },
  { name: "South East Asia", detail: "Future Expansion", type: "future", cx: 690, cy: 360 },
]

const connectionPairs: [number, number][] = [
  [0, 1], [0, 2], [0, 4], [0, 5],
  [1, 3], [1, 4], [1, 9],
  [4, 6], [4, 7], [4, 8],
  [5, 8],
  [6, 7], [6, 9],
  [7, 8],
  [8, 9],
]

function ConnectionLine({ from, to, delay }: { from: { cx: number; cy: number }; to: { cx: number; cy: number }; delay: number }) {
  const mx = (from.cx + to.cx) / 2
  const my = (from.cy + to.cy) / 2 - 50
  const d = `M ${from.cx} ${from.cy} Q ${mx} ${my} ${to.cx} ${to.cy}`

  return (
    <g>
      <motion.path
        d={d}
        fill="none"
        stroke="rgba(0, 213, 255, 0.08)"
        strokeWidth="1"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2, delay, ease: "easeInOut" }}
      />
      <motion.path
        d={d}
        fill="none"
        stroke="#00D5FF"
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
  )
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
  )
}

function LocationCard({ location, index }: { location: Location; index: number }) {
  const isCurrent = location.type === "current"
  const isExpansion = location.type === "expansion"
  const statusColor = isCurrent ? "#00D5FF" : isExpansion ? "rgba(255,255,255,0.5)" : "#CBA135"
  const statusText = isCurrent ? "Operational" : isExpansion ? "Expansion Market" : "Coming Soon"

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      className="group"
    >
      <div
        className="relative overflow-hidden rounded-xl p-4 transition-all duration-500 hover:scale-[1.02]"
        style={{
          background: "rgba(255,255,255,0.04)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          border: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#00D5FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="relative z-10 flex items-center gap-3">
          <div className="relative flex-shrink-0">
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: statusColor, boxShadow: `0 0 12px ${statusColor}40` }}
            />
            {isCurrent && (
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{ border: "2px solid rgba(0,213,255,0.3)" }}
                animate={{ scale: [1, 2], opacity: [0.6, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeOut" as const }}
              />
            )}
          </div>
          <div className="min-w-0">
            <p className="text-sm font-medium truncate" style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#fff" }}>
              {location.name}
            </p>
            <p className="text-xs mt-0.5 truncate" style={{ fontFamily: "'Inter', sans-serif", color: statusColor }}>
              {location.detail}
            </p>
            <p className="text-[10px] mt-0.5" style={{ fontFamily: "'Inter', sans-serif", color: "rgba(255,255,255,0.3)" }}>
              {statusText}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

function ExpansionBadge({ label, index }: { label: string; index: number }) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 1.2 + index * 0.1, duration: 0.4 }}
      className="inline-block px-3 py-1.5 text-xs rounded-lg"
      style={{
        fontFamily: "'Space Grotesk', sans-serif",
        color: "#CBA135",
        background: "rgba(203,161,53,0.08)",
        border: "1px solid rgba(203,161,53,0.15)",
      }}
    >
      {label}
    </motion.span>
  )
}

export default function GlobalPresence() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  const currentLocations = locations.filter((l) => l.type === "current")
  const expansionMarkets = locations.filter((l) => l.type === "expansion")
  const futureLocations = locations.filter((l) => l.type === "future")

  return (
    <section
      id="global-presence"
      className="relative overflow-hidden py-24"
      style={{ backgroundColor: "#0D0D0D" }}
    >
      <div
        className="absolute top-1/4 -left-32 w-96 h-96 rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(0,213,255,0.15), transparent)" }}
      />
      <div
        className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(203,161,53,0.1), transparent)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p
            className="text-sm tracking-[0.2em] uppercase mb-4"
            style={{ fontFamily: "'Inter', sans-serif", color: "#00D5FF", letterSpacing: "0.2em" }}
          >
            Our Reach
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "'Playfair Display', serif", color: "#fff" }}
          >
            Our Global <span style={{ color: "#00D5FF" }}>Presence</span>
          </h2>
          <p
            className="text-sm max-w-xl mx-auto"
            style={{ fontFamily: "'Inter', sans-serif", color: "rgba(255,255,255,0.5)" }}
          >
            Strategically located across key markets worldwide, delivering excellence at every touchpoint.
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
              style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}
            >
              <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.12 }}>
                <defs>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#00D5FF" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>

              <svg
                viewBox="0 0 1000 500"
                className="absolute inset-0 w-full h-full"
                preserveAspectRatio="xMidYMid meet"
              >
                <motion.path
                  d="M 160 180 Q 180 160 220 160 Q 260 160 280 180 Q 310 200 300 240 Q 290 280 260 300 Q 230 320 200 310 Q 170 300 150 270 Q 130 240 140 210 Z"
                  fill="rgba(0,213,255,0.06)" stroke="rgba(0,213,255,0.15)" strokeWidth="1"
                  initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                  transition={{ duration: 1.5 }}
                />
                <motion.path
                  d="M 280 330 Q 300 320 310 340 Q 320 370 310 400 Q 290 430 270 420 Q 260 400 260 370 Q 265 345 280 330 Z"
                  fill="rgba(0,213,255,0.06)" stroke="rgba(0,213,255,0.15)" strokeWidth="1"
                  initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 0.2 }}
                />
                <motion.path
                  d="M 400 200 Q 420 180 450 180 Q 480 185 490 210 Q 495 230 480 245 Q 450 255 425 240 Q 405 225 400 200 Z"
                  fill="rgba(0,213,255,0.06)" stroke="rgba(0,213,255,0.15)" strokeWidth="1"
                  initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 0.3 }}
                />
                <motion.path
                  d="M 510 260 Q 530 250 550 260 Q 570 280 565 310 Q 560 340 540 360 Q 510 365 495 340 Q 485 310 495 280 Z"
                  fill="rgba(0,213,255,0.06)" stroke="rgba(0,213,255,0.15)" strokeWidth="1"
                  initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 0.4 }}
                />
                <motion.path
                  d="M 560 190 Q 600 170 660 175 Q 720 180 760 210 Q 780 240 770 270 Q 750 310 710 320 Q 650 335 590 325 Q 550 310 540 280 Q 535 250 545 220 Z"
                  fill="rgba(0,213,255,0.06)" stroke="rgba(0,213,255,0.15)" strokeWidth="1"
                  initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                />
                <motion.path
                  d="M 760 380 Q 790 370 810 380 Q 830 395 820 415 Q 800 430 770 420 Q 750 405 755 390 Z"
                  fill="rgba(0,213,255,0.06)" stroke="rgba(0,213,255,0.15)" strokeWidth="1"
                  initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 0.6 }}
                />

                {mounted && connectionPairs.map(([i, j], idx) => (
                  <ConnectionLine key={`conn-${idx}`} from={locations[i]} to={locations[j]} delay={0.8 + idx * 0.06} />
                ))}

                {mounted && locations.map((loc, idx) => (
                  <GlowingMarker
                    key={`marker-${idx}`}
                    cx={loc.cx}
                    cy={loc.cy}
                    delay={1.5 + idx * 0.1}
                    color={loc.type === "current" ? "#00D5FF" : loc.type === "expansion" ? "rgba(255,255,255,0.4)" : "#CBA135"}
                  />
                ))}

                {mounted && locations.filter(l => l.type === "current").map((loc, idx) => (
                  <motion.g
                    key={`label-${idx}`}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 2.5 + idx * 0.15, duration: 0.5 }}
                  >
                    <text
                      x={loc.cx}
                      y={loc.cy - 22}
                      textAnchor="middle"
                      fill="#00D5FF"
                      fontSize="8"
                      fontFamily="'Space Grotesk', sans-serif"
                      fontWeight="500"
                      opacity="0.9"
                    >
                      {loc.name}
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
                style={{ border: "1px solid rgba(255,255,255,0.06)" }}
              >
                <img
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80"
                  alt="Global tech"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(13,13,13,0.8), transparent)" }} />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1.7, duration: 0.6 }}
                className="flex-1 h-28 rounded-xl overflow-hidden relative"
                style={{ border: "1px solid rgba(255,255,255,0.06)" }}
              >
                <img
                  src="https://images.unsplash.com/photo-1526778548025-fa2f459b5f6a?w=800&q=80"
                  alt="Global network"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(13,13,13,0.8), transparent)" }} />
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
                style={{ fontFamily: "'Inter', sans-serif", color: "#00D5FF", letterSpacing: "0.2em" }}
              >
                Current Locations
              </motion.h3>
              <div className="space-y-3">
                {currentLocations.map((loc, idx) => (
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
                style={{ fontFamily: "'Inter', sans-serif", color: "rgba(255,255,255,0.5)", letterSpacing: "0.2em" }}
              >
                Expansion Markets
              </motion.h3>
              <div className="space-y-3">
                {expansionMarkets.map((loc, idx) => (
                  <LocationCard key={loc.name} location={loc} index={idx + 2} />
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
                style={{ fontFamily: "'Inter', sans-serif", color: "#CBA135", letterSpacing: "0.2em" }}
              >
                Future Expansion
              </motion.h3>
              <div className="space-y-3">
                {futureLocations.map((loc, idx) => (
                  <LocationCard key={loc.name} location={loc} index={idx + 6} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
