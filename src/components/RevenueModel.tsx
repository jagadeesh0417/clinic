"use client"

import { motion, useInView, animate } from "framer-motion"
import { useEffect, useRef, useState } from "react"

function AnimatedCounter({ to, suffix = "", decimals = 0 }: { to: number; suffix?: string; decimals?: number }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })
  const [val, setVal] = useState(0)

  useEffect(() => {
    if (!inView) return
    const ctrl = animate(0, to, {
      duration: 2,
      ease: [0.25, 0.46, 0.45, 0.94],
      onUpdate: (v) => setVal(v),
    })
    return () => ctrl.stop()
  }, [inView, to])

  return (
    <span ref={ref}>
      {val.toFixed(decimals).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
      {suffix}
    </span>
  )
}

const metrics = [
  {
    title: "Revenue Sharing",
    value: 50,
    suffix: "%",
    label: "50:50 Revenue Sharing",
    desc: "Fair split on every consultation, procedure, and service",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
  },
  {
    title: "Product Margin",
    value: 30,
    suffix: "%",
    label: "30% Product Margin",
    desc: "Keep 30% margin on all retail product sales",
    img: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80",
  },
  {
    title: "Equipment Support",
    value: 100,
    suffix: "%",
    label: "Equipment Support",
    desc: "Fully supported equipment — zero capital expenditure",
    img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
  },
]

const revenueBreakdown = [
  { label: "Service Revenue", amount: 100000 },
  { label: "Product Revenue", amount: 20000 },
  { label: "Rental Revenue", amount: 10000 },
]

const additionalIncome = ["Product Sales", "Consultation Income", "Rental Revenue"]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const } },
}

function formatCurrency(n: number) {
  return "₹" + n.toLocaleString("en-IN")
}

export default function RevenueModel() {
  const ref = useRef<HTMLElement>(null)
  const total = revenueBreakdown.reduce((s, r) => s + r.amount, 0)

  return (
    <section
      ref={ref}
      id="revenue-model"
      className="relative overflow-hidden py-24 md:py-32"
      style={{ background: "#050505" }}
    >
      {/* Grid overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAyKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40" />

      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2"
        style={{
          width: "900px",
          height: "900px",
          background: "radial-gradient(circle, rgba(203,161,53,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const }}
          className="mx-auto mb-16 max-w-4xl text-center md:mb-24"
        >
          <span
            className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.25em]"
            style={{ color: "#CBA135", fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Financial Model
          </span>
          <h2
            className="font-serif text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl"
            style={{ fontFamily: "'Playfair Display', serif", color: "#FFFFFF" }}
          >
            Revenue{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #CBA135 0%, #E8D48B 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Model
            </span>
          </h2>
          <p
            className="mx-auto mt-5 max-w-2xl text-base leading-relaxed md:text-lg"
            style={{ color: "rgba(255,255,255,0.6)", fontFamily: "'Inter', sans-serif" }}
          >
            Zero Franchise Fee <span style={{ color: "rgba(203,161,53,0.5)" }}>•</span> No Royalty{" "}
            <span style={{ color: "rgba(203,161,53,0.5)" }}>•</span> No Hidden Costs
          </p>
        </motion.div>

        {/* 3 Large Metric Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="mb-20 grid gap-6 md:grid-cols-3"
        >
          {metrics.map((m) => (
            <motion.div
              key={m.title}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-2xl border backdrop-blur-xl transition-all duration-500 hover:-translate-y-1"
              style={{
                background: "rgba(255,255,255,0.04)",
                borderColor: "rgba(255,255,255,0.08)",
              }}
            >
              {/* Image background */}
              <div className="absolute inset-0 overflow-hidden opacity-30">
                <img
                  src={m.img}
                  alt=""
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(5,5,5,0.4) 0%, #050505 100%)" }} />
              </div>

              {/* Hover glow */}
              <div
                className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background: "radial-gradient(600px circle at 50% 50%, rgba(203,161,53,0.1), transparent 40%)",
                }}
              />

              <div className="relative z-10 p-8">
                <p
                  className="mb-2 text-xs font-semibold uppercase tracking-[0.15em]"
                  style={{ color: "rgba(203,161,53,0.7)", fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {m.label}
                </p>
                <p
                  className="text-5xl font-bold md:text-6xl"
                  style={{ color: "#CBA135", fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  <AnimatedCounter to={m.value} suffix={m.suffix} />
                </p>
                <p
                  className="mt-3 text-sm leading-relaxed"
                  style={{ color: "rgba(255,255,255,0.55)", fontFamily: "'Inter', sans-serif" }}
                >
                  {m.desc}
                </p>

                <div
                  className="mt-5 h-px w-0 transition-all duration-500 group-hover:w-full"
                  style={{ background: "linear-gradient(90deg, #CBA135 0%, transparent 100%)" }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Revenue Breakdown Stacked Visual */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const }}
          className="mx-auto mb-20 max-w-3xl"
        >
          <div
            className="relative overflow-hidden rounded-2xl border p-8 backdrop-blur-xl md:p-10"
            style={{
              background: "rgba(255,255,255,0.04)",
              borderColor: "rgba(255,255,255,0.08)",
            }}
          >
            <h3
              className="mb-8 text-center text-lg font-semibold"
              style={{ color: "#FFFFFF", fontFamily: "'Playfair Display', serif" }}
            >
              Monthly Revenue Breakdown
            </h3>

            <div className="space-y-4">
              {revenueBreakdown.map((item, i) => {
                const pct = (item.amount / total) * 100
                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.15 }}
                    className="flex items-center justify-between"
                  >
                    <span
                      className="text-sm"
                      style={{ color: "rgba(255,255,255,0.7)", fontFamily: "'Inter', sans-serif" }}
                    >
                      {item.label}
                    </span>
                    <span
                      className="text-lg font-bold"
                      style={{ color: "#CBA135", fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      {formatCurrency(item.amount)}
                    </span>
                  </motion.div>
                )
              })}

              {/* Stacked bar */}
              <div className="mt-6 flex h-3 w-full overflow-hidden rounded-full" style={{ background: "rgba(255,255,255,0.06)" }}>
                {revenueBreakdown.map((item, i) => {
                  const pct = (item.amount / total) * 100
                  const colors = ["#CBA135", "rgba(203,161,53,0.6)", "rgba(203,161,53,0.35)"]
                  return (
                    <motion.div
                      key={item.label}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${pct}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.3 + i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
                      style={{ background: colors[i] }}
                    />
                  )
                })}
              </div>

              {/* Divider */}
              <div className="my-4 h-px" style={{ background: "rgba(255,255,255,0.06)" }} />

              {/* Total */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.6 }}
                className="flex items-center justify-between"
              >
                <span
                  className="text-base font-semibold"
                  style={{ color: "#FFFFFF", fontFamily: "'Inter', sans-serif" }}
                >
                  Monthly Potential
                </span>
                <span
                  className="text-2xl font-bold md:text-3xl"
                  style={{
                    color: "#CBA135",
                    fontFamily: "'Space Grotesk', sans-serif",
                    background: "linear-gradient(135deg, #CBA135, #E8D48B)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {formatCurrency(total)}
                </span>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Additional Incomes */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const }}
          className="mx-auto mb-12 max-w-3xl text-center"
        >
          <p
            className="mb-6 text-sm font-semibold uppercase tracking-[0.2em]"
            style={{ color: "rgba(203,161,53,0.6)", fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Additional Income Streams
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {additionalIncome.map((inc) => (
              <span
                key={inc}
                className="rounded-full px-5 py-2.5 text-xs font-medium uppercase tracking-wider"
                style={{
                  background: "rgba(203,161,53,0.08)",
                  border: "1px solid rgba(203,161,53,0.2)",
                  color: "#CBA135",
                  fontFamily: "'Inter', sans-serif",
                  backdropFilter: "blur(8px)",
                }}
              >
                {inc}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Disclaimer */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mx-auto max-w-2xl text-center text-xs leading-relaxed"
          style={{ color: "rgba(255,255,255,0.3)", fontFamily: "'Inter', sans-serif" }}
        >
          Revenue depends upon market conditions, clinic performance, patient volume, and implementation.
        </motion.p>
      </div>
    </section>
  )
}
