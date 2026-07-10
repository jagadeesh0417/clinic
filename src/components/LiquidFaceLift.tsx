"use client";

import { motion } from "framer-motion";
import { Shield, Sparkles, Star, Clock } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.12 * i, ease: "easeOut" as const },
  }),
};

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const pillars = [
  { title: "US-FDA Approved Products", icon: Shield },
  { title: "Signature Combination Technique", icon: Sparkles },
  { title: "Natural Results", icon: Star },
  { title: "Minimal Downtime", icon: Clock },
];

const steps = [
  { step: "1", title: "Consultation", desc: "In-depth facial analysis with Dr. Vikas to design your personalised treatment plan." },
  { step: "2", title: "Treatment", desc: "A combination of fillers, Botox, and/or threads are precisely applied to targeted areas." },
  { step: "3", title: "Activation", desc: "Bio-stimulators begin working to rebuild collagen and improve skin quality over weeks." },
  { step: "4", title: "Results", desc: "Immediate improvements that continue to refine over 2\u20134 weeks with lasting effects." },
];

const benefits = [
  "No surgery or general anesthesia required",
  "Minimal downtime \u2014 return to daily activities quickly",
  "Natural-looking results that enhance your features",
  "Customisable to your unique facial structure",
  "Gradual, long-lasting improvements",
  "US-FDA approved products only",
];

const candidates = [
  "Sagging cheeks or jowls",
  "Hollow under-eyes or temples",
  "Loss of facial volume with age",
  "Fine lines and deep wrinkles",
  "Asymmetric facial features",
  "Desire for non-surgical rejuvenation",
];

const contraindications = [
  "Active skin infection at treatment area",
  "Pregnancy or breastfeeding",
  "Known allergy to product components",
  "Blood clotting disorders",
  "Autoimmune conditions (consult required)",
];

const faqs = [
  {
    q: "Is the procedure painful?",
    a: "Most patients report minimal discomfort. Topical numbing cream is applied before treatment, and many products contain built-in anesthetic.",
  },
  {
    q: "How long do results last?",
    a: "Results typically last 12\u201318 months depending on the combination of treatments used. Touch-ups can extend results.",
  },
  {
    q: "When will I see results?",
    a: "Immediate improvements are visible, with optimal results developing over 2\u20134 weeks as swelling subsides and collagen builds.",
  },
  {
    q: "Can I combine treatments?",
    a: "Yes \u2014 Dr. Vikas\u2019s signature approach is the combination technique \u2014 using multiple modalities for comprehensive results.",
  },
];

const testimonials = [
  { quote: "Dr. Vikas transformed my confidence. The results are so natural nobody can tell!", name: "Priya M.", rating: 5 },
  { quote: "Professional, gentle and results-driven. Best aesthetic experience I\u2019ve had.", name: "Rakesh S.", rating: 5 },
  { quote: "The thread lift was incredible. I look 10 years younger with zero surgery!", name: "Ashleigh Davila", rating: 5 },
];

export default function LiquidFaceLift() {
  return (
    <section className="relative bg-[#100D0A] py-24 md:py-32 overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#C9A14A]/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#C9A14A]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={container}
          className="text-center mb-20"
        >
          <motion.span
            variants={fadeUp} custom={0}
            className="inline-block text-[#C9A14A] font-mono text-sm tracking-[0.2em] uppercase mb-4"
            style={{ fontFamily: "var(--font-sans), sans-serif" }}
          >
            Signature Procedure
          </motion.span>
          <motion.h2
            variants={fadeUp} custom={1}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
            style={{ fontFamily: "var(--font-display), serif" }}
          >
            The{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C9A14A] to-[#DDBB6C]">
              Liquid Face Lift
            </span>
          </motion.h2>
          <motion.p
            variants={fadeUp} custom={2}
            className="text-[#CBBFAF] text-xl md:text-2xl mt-4 font-displayight"
            style={{ fontFamily: "var(--font-sans), sans-serif" }}
          >
            Lift, contour &amp; rejuvenate \u2014 without surgery.
          </motion.p>
        </motion.div>

        {/* What is a Liquid Face Lift? */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={container}
          className="max-w-4xl mx-auto mb-20"
        >
          <motion.h3
            variants={fadeUp} custom={0}
            className="text-2xl md:text-3xl font-bold text-white mb-6"
            style={{ fontFamily: "var(--font-display), serif" }}
          >
            What is a Liquid Face Lift?
          </motion.h3>
          <motion.p
            variants={fadeUp} custom={1}
            className="text-[#CBBFAF] text-lg leading-relaxed"
            style={{ fontFamily: "var(--font-sans), sans-serif" }}
          >
            A Liquid Face Lift is a comprehensive, non-surgical facial rejuvenation procedure that strategically combines injectable treatments \u2014 dermal fillers, neuromodulators (Botox), PDO threads, and bio-stimulators \u2014 to lift sagging skin, restore lost volume, smooth wrinkles, and redefine facial contours.
          </motion.p>
          <motion.p
            variants={fadeUp} custom={2}
            className="text-[#CBBFAF] text-lg leading-relaxed mt-4"
            style={{ fontFamily: "var(--font-sans), sans-serif" }}
          >
            Unlike a surgical face lift, there are no incisions, no general anesthesia, and minimal recovery time. Dr. Vikas&apos;s signature combination technique allows for a multi-dimensional approach that addresses ageing at every layer of the face. Walk in during lunch, walk out looking refreshed.
          </motion.p>
        </motion.div>

        {/* Four Pillars */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={container}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20"
        >
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              variants={fadeUp} custom={i}
              whileHover={{ y: -4 }}
              className="rounded-2xl p-6 text-center transition-all duration-300"
              style={{
                background: "linear-gradient(135deg, rgba(203,161,53,0.1) 0%, rgba(203,161,53,0.03) 100%)",
                border: "1px solid rgba(203,161,53,0.2)",
              }}
            >
              <span className="block mb-3">{(() => { const Icon = p.icon; return <Icon className="w-7 h-7 mx-auto text-[#C9A14A]" />; })()}</span>
              <p className="text-white text-sm font-semibold leading-snug" style={{ fontFamily: "var(--font-sans), sans-serif" }}>
                {p.title}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* How It Works */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={container}
          className="mb-20"
        >
          <motion.h3
            variants={fadeUp} custom={0}
            className="text-2xl md:text-3xl font-bold text-white mb-2 text-center"
            style={{ fontFamily: "var(--font-display), serif" }}
          >
            How It Works
          </motion.h3>
          <motion.p
            variants={fadeUp} custom={1}
            className="text-[#C9A14A] text-sm uppercase tracking-wider text-center mb-10"
            style={{ fontFamily: "var(--font-sans), sans-serif" }}
          >
            The Four-Step Journey
          </motion.p>

          <div className="grid md:grid-cols-4 gap-4">
            {steps.map((s, i) => (
              <motion.div
                key={s.step}
                variants={fadeUp} custom={i + 2}
                className="relative rounded-2xl p-6"
                style={{
                  background: "rgba(246,241,232,0.04)",
                  border: "1px solid rgba(246,241,232,0.08)",
                }}
              >
                <span
                  className="absolute -top-3 -left-3 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white"
                  style={{
                    background: "linear-gradient(135deg, #C9A14A, #DDBB6C)",
                    fontFamily: "var(--font-sans), sans-serif",
                  }}
                >
                  {s.step}
                </span>
                <h4 className="text-white font-semibold text-base mt-2 mb-2" style={{ fontFamily: "var(--font-sans), sans-serif" }}>
                  {s.title}
                </h4>
                <p className="text-[#CBBFAF] text-sm leading-relaxed" style={{ fontFamily: "var(--font-sans), sans-serif" }}>
                  {s.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Benefits */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={container}
          className="max-w-4xl mx-auto mb-20"
        >
          <motion.h3
            variants={fadeUp} custom={0}
            className="text-2xl md:text-3xl font-bold text-white mb-8 text-center"
            style={{ fontFamily: "var(--font-display), serif" }}
          >
            Benefits
          </motion.h3>
          <div className="grid sm:grid-cols-2 gap-3">
            {benefits.map((b, i) => (
              <motion.div
                key={i}
                variants={fadeUp} custom={i + 1}
                className="flex items-center gap-3 rounded-xl p-4"
                style={{
                  background: "rgba(246,241,232,0.04)",
                  border: "1px solid rgba(246,241,232,0.08)",
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#C9A14A] flex-shrink-0" />
                <span className="text-[#CBBFAF] text-sm" style={{ fontFamily: "var(--font-sans), sans-serif" }}>{b}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Ideal Candidates */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={container}
          className="max-w-4xl mx-auto mb-20"
        >
          <motion.h3
            variants={fadeUp} custom={0}
            className="text-2xl md:text-3xl font-bold text-white mb-8 text-center"
            style={{ fontFamily: "var(--font-display), serif" }}
          >
            Ideal Candidates
          </motion.h3>
          <div className="grid sm:grid-cols-2 gap-3">
            {candidates.map((c, i) => (
              <motion.div
                key={i}
                variants={fadeUp} custom={i + 1}
                className="flex items-center gap-3 rounded-xl p-4"
                style={{
                  background: "rgba(246,241,232,0.04)",
                  border: "1px solid rgba(246,241,232,0.08)",
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#C9A14A] flex-shrink-0" />
                <span className="text-[#CBBFAF] text-sm" style={{ fontFamily: "var(--font-sans), sans-serif" }}>{c}</span>
              </motion.div>
            ))}
          </div>

          <motion.h4
            variants={fadeUp} custom={5}
            className="text-lg font-semibold text-white mt-10 mb-4"
            style={{ fontFamily: "var(--font-sans), sans-serif" }}
          >
            Contraindications
          </motion.h4>
          <div className="grid sm:grid-cols-2 gap-3">
            {contraindications.map((c, i) => (
              <motion.div
                key={i}
                variants={fadeUp} custom={i + 6}
                className="flex items-center gap-3 rounded-xl p-4"
                style={{
                  background: "rgba(246,241,232,0.04)",
                  border: "1px solid rgba(246,241,232,0.08)",
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#C9A14A]/50 flex-shrink-0" />
                <span className="text-[#CBBFAF] text-sm" style={{ fontFamily: "var(--font-sans), sans-serif" }}>{c}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* FAQs */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={container}
          className="max-w-4xl mx-auto mb-20"
        >
          <motion.h3
            variants={fadeUp} custom={0}
            className="text-2xl md:text-3xl font-bold text-white mb-8 text-center"
            style={{ fontFamily: "var(--font-display), serif" }}
          >
            Frequently Asked Questions
          </motion.h3>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                variants={fadeUp} custom={i + 1}
                className="rounded-2xl p-6"
                style={{
                  background: "rgba(246,241,232,0.04)",
                  border: "1px solid rgba(246,241,232,0.08)",
                }}
              >
                <h4 className="text-white font-semibold text-base mb-2" style={{ fontFamily: "var(--font-sans), sans-serif" }}>
                  {faq.q}
                </h4>
                <p className="text-[#CBBFAF] text-sm leading-relaxed" style={{ fontFamily: "var(--font-sans), sans-serif" }}>
                  {faq.a}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={container}
          className="max-w-4xl mx-auto mb-20"
        >
          <motion.h3
            variants={fadeUp} custom={0}
            className="text-2xl md:text-3xl font-bold text-white mb-8 text-center"
            style={{ fontFamily: "var(--font-display), serif" }}
          >
            Testimonials
          </motion.h3>
          <div className="grid md:grid-cols-3 gap-4">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                variants={fadeUp} custom={i + 1}
                className="rounded-2xl p-6 text-center"
                style={{
                  background: "rgba(246,241,232,0.04)",
                  border: "1px solid rgba(246,241,232,0.08)",
                }}
              >
                <p className="text-[#CBBFAF] text-sm leading-relaxed italic mb-4" style={{ fontFamily: "var(--font-sans), sans-serif" }}>
                  &ldquo;{t.quote}&rdquo;
                </p>
                <p className="text-[#C9A14A] text-sm font-semibold" style={{ fontFamily: "var(--font-sans), sans-serif" }}>
                  {t.name}
                </p>
                <p className="text-[#C9A14A] text-xs mt-1">
                  {"\u2605".repeat(t.rating)}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={container}
          className="text-center"
        >
          <motion.div
            variants={fadeUp} custom={0}
            className="max-w-2xl mx-auto rounded-3xl p-10 md:p-14"
            style={{
              background: "linear-gradient(135deg, rgba(203,161,53,0.1) 0%, rgba(203,161,53,0.03) 100%)",
              border: "1px solid rgba(203,161,53,0.2)",
            }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-display), serif" }}>
              Ready to Transform?
            </h3>
            <p className="text-[#CBBFAF] text-base leading-relaxed mb-8" style={{ fontFamily: "var(--font-sans), sans-serif" }}>
              Experience the signature Liquid Face Lift by Dr. Vikas Singh. Book your consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 rounded-full font-semibold text-sm uppercase tracking-wider transition-all duration-300 hover:scale-105"
                style={{
                  background: "linear-gradient(135deg, #C9A14A, #DDBB6C)",
                  color: "#100D0A",
                  fontFamily: "var(--font-sans), sans-serif",
                }}
              >
                Book Consultation
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 rounded-full font-semibold text-sm uppercase tracking-wider transition-all duration-300 hover:scale-105"
                style={{
                  background: "transparent",
                  color: "#C9A14A",
                  border: "1px solid rgba(203,161,53,0.4)",
                  fontFamily: "var(--font-sans), sans-serif",
                }}
              >
                Enquire Now
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
