"use client";

import { motion } from "framer-motion";

const offers = [
  {
    title: "Exclusive Product Discounts",
    desc: "Discounted rates on premium dermatological and aesthetic products for partner clinics.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
  },
  {
    title: "Marketing Support",
    desc: "Co-branded campaigns, social media promotions, and ready-to-use marketing collateral.",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80",
  },
  {
    title: "Equipment Rental Packages",
    desc: "State-of-the-art laser and aesthetic equipment on flexible rental terms.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
  },
  {
    title: "Staff Hiring Assistance",
    desc: "Access to trained professionals and recruitment support for your clinic.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
  },
  {
    title: "Digital Promotions",
    desc: "SEO, listing optimization, and paid ad support to boost your online presence.",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80",
  },
  {
    title: "Seasonal Campaigns",
    desc: "Ready-to-execute festive and seasonal campaign packages for higher patient engagement.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
  },
  {
    title: "Corporate Health Packages",
    desc: "B2B wellness programs and corporate tie-ups to expand your patient base.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export default function SpecialOffers() {
  return (
    <section
      id="special-offers"
      className="relative overflow-hidden px-5 py-24 md:px-10 lg:px-20"
      style={{ backgroundColor: "#050505", color: "#ffffff" }}
    >
      <div
        className="pointer-events-none absolute left-1/4 top-1/3 -translate-x-1/2 -translate-y-1/2"
        style={{
          width: "800px",
          height: "800px",
          background:
            "radial-gradient(circle, rgba(203,161,53,0.06) 0%, transparent 70%)",
        }}
      />
      <div
        className="pointer-events-none absolute bottom-0 right-1/4"
        style={{
          width: "600px",
          height: "600px",
          background:
            "radial-gradient(circle, rgba(203,161,53,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <span
            className="mb-4 inline-block rounded-full px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em]"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              color: "#CBA135",
              backgroundColor: "rgba(203,161,53,0.1)",
              border: "1px solid rgba(203,161,53,0.2)",
            }}
          >
            Partner Benefits
          </span>
          <h2
            className="text-4xl leading-tight md:text-5xl lg:text-6xl"
            style={{ fontFamily: '"Playfair Display", serif' }}
          >
            Special Offers for{" "}
            <span
              className="bg-gradient-to-r from-[#CBA135] to-[#E2C55A] bg-clip-text text-transparent"
            >
              Partner Clinics
            </span>
          </h2>
          <p
            className="mx-auto mt-4 max-w-xl text-sm leading-relaxed"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              color: "rgba(255,255,255,0.5)",
            }}
          >
            Exclusive Benefits for Our Network
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {offers.map((offer, i) => (
            <motion.div
              key={offer.title}
              variants={cardVariants}
              className="group relative overflow-hidden rounded-2xl transition-all duration-500"
              style={{
                backgroundColor: "rgba(255,255,255,0.04)",
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <div
                className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(600px circle at 50% 50%, rgba(203,161,53,0.12), transparent 40%)",
                }}
              />

              <div className="relative h-48 overflow-hidden">
                <motion.img
                  src={offer.image}
                  alt={offer.title}
                  className="h-full w-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  loading="lazy"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(5,5,5,0.85), transparent 60%)",
                  }}
                />
                <div className="absolute right-3 top-3">
                  <span
                    className="inline-block rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-wider"
                    style={{
                      backgroundColor: "rgba(203,161,53,0.2)",
                      border: "1px solid rgba(203,161,53,0.3)",
                      color: "#CBA135",
                      backdropFilter: "blur(8px)",
                      WebkitBackdropFilter: "blur(8px)",
                    }}
                  >
                    Premium Offer
                  </span>
                </div>
                <div className="absolute bottom-3 left-3 flex items-center gap-2">
                  <span
                    className="flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold"
                    style={{
                      backgroundColor: "#CBA135",
                      color: "#050505",
                    }}
                  >
                    {(i + 1).toString().padStart(2, "0")}
                  </span>
                </div>
              </div>

              <div className="relative z-10 p-6">
                <h3
                  className="mb-2 text-lg font-semibold tracking-tight"
                  style={{ fontFamily: '"Playfair Display", serif' }}
                >
                  {offer.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    color: "rgba(255,255,255,0.5)",
                  }}
                >
                  {offer.desc}
                </p>
              </div>

              <motion.div
                className="absolute bottom-0 left-0 h-0.5"
                style={{ backgroundColor: "#CBA135" }}
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 + i * 0.1, ease: "easeOut" as const }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
