"use client";

import { motion } from "framer-motion";

export default function TreatmentsPage() {
  return (
    <div className="min-h-screen bg-[#050505]">
      <div className="mx-auto max-w-7xl px-4 pt-32 pb-24 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <span className="inline-block font-['Space_Grotesk'] text-sm tracking-[0.2em] uppercase text-[#CBA135]">
            Aesthetic Excellence
          </span>
          <h1 className="mt-3 font-['Playfair_Display'] text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            Our <span className="text-[#CBA135]">Treatments</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl font-['Inter'] text-lg text-white/60">
            Comprehensive aesthetic and wellness treatments delivered by world-class practitioners
          </p>
        </motion.div>
      </div>
    </div>
  );
}
