"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";

const steps = [
  {
    number: 1,
    title: "Registration",
    description:
      "Submit your clinic's basic information through our streamlined registration portal to begin the partnership process.",
  },
  {
    number: 2,
    title: "Clinic Details Submission",
    description:
      "Provide comprehensive details about your clinic including specialties, infrastructure, staff credentials, and operational hours.",
  },
  {
    number: 3,
    title: "Evaluation",
    description:
      "Our team evaluates your submission against quality standards to ensure alignment with the KO Clinics network requirements.",
  },
  {
    number: 4,
    title: "Inspection",
    description:
      "A physical or virtual inspection is conducted to verify facilities, equipment, and compliance with healthcare protocols.",
  },
  {
    number: 5,
    title: "Business Proposal",
    description:
      "Receive a tailored business proposal outlining revenue-sharing models, marketing support, and growth opportunities.",
  },
  {
    number: 6,
    title: "Agreement",
    description:
      "Finalize the partnership by signing the agreement that formalizes the terms, commitments, and mutual benefits.",
  },
  {
    number: 7,
    title: "Onboarding",
    description:
      "Complete the onboarding process with training sessions, platform access setup, and integration coordination.",
  },
  {
    number: 8,
    title: "Digital Integration",
    description:
      "Seamlessly integrate your clinic's systems with our digital platform including scheduling, billing, and telemedicine tools.",
  },
  {
    number: 9,
    title: "Patient Leads Activation",
    description:
      "Go live with patient lead generation, connecting your clinic with a steady stream of qualified patients.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

function TimelineLine({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const glowOpacity = useTransform(
    scrollYProgress,
    [0, 0.1, 0.9, 1],
    [0.3, 1, 1, 0.3]
  );

  return (
    <div className="absolute left-[23px] md:left-1/2 md:-translate-x-px top-0 bottom-0 w-[2px] z-0">
      <div className="absolute inset-0 bg-white/5 rounded-full" />
      <motion.div
        className="absolute top-0 left-0 w-full bg-gradient-to-b from-[#00D5FF] via-[#00D5FF] to-[#CBA135] rounded-full origin-top"
        style={{ height: lineHeight }}
      />
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[6px] aspect-square rounded-full bg-[#00D5FF] shadow-[0_0_12px_#00D5FF]"
        style={{ opacity: glowOpacity }}
      />
    </div>
  );
}

function StepCard({
  step,
  index,
  scrollYProgress,
}: {
  step: (typeof steps)[0];
  index: number;
  scrollYProgress: MotionValue<number>;
}) {
  const isEven = index % 2 === 0;
  const ref = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      className={`relative flex items-start gap-6 md:gap-0 ${
        isEven ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      <div className="hidden md:block md:w-1/2" />

      <div className="relative z-10 flex-shrink-0 md:absolute md:left-1/2 md:-translate-x-1/2">
        <motion.div
          className="w-12 h-12 rounded-full flex items-center justify-center border-2 border-[#00D5FF] bg-[#050505] shadow-[0_0_16px_rgba(0,213,255,0.3)]"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 15 }}
        >
          <span
            className="text-base font-bold text-[#00D5FF]"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            {String(step.number).padStart(2, "0")}
          </span>
        </motion.div>
      </div>

      <motion.div
        className={`flex-1 md:w-1/2 ${isEven ? "md:pr-12" : "md:pl-12"}`}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        variants={{
          hidden: { opacity: 0, x: isEven ? -30 : 30 },
          visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.6, ease: "easeOut" as const },
          },
        }}
      >
        <div
          className="p-5 md:p-6 rounded-2xl transition-all duration-500 group hover:border-[#00D5FF]/30"
          style={{
            background: "rgba(255,255,255,0.04)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <div className="flex items-center gap-3 mb-3">
            <span
              className="text-sm font-medium text-[#00D5FF]"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Step {step.number}
            </span>
            <div className="h-px flex-1 bg-gradient-to-r from-[#00D5FF]/30 to-transparent" />
          </div>
          <h3
            className="text-xl md:text-2xl font-semibold text-white mb-2"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            {step.title}
          </h3>
          <p
            className="text-[#B7B7B7] text-sm md:text-base leading-relaxed"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {step.description}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function HowToJoin() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  return (
    <section
      ref={sectionRef}
      id="how-to-join"
      className="relative bg-[#050505] py-24 md:py-32 overflow-hidden"
    >
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-[#00D5FF]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-[#CBA135]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-16 md:mb-24"
        >
          <motion.span
            className="inline-block text-[#00D5FF] font-mono text-sm tracking-[0.2em] uppercase mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            How to Join
          </motion.span>
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Your Path to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D5FF] to-[#7EE8FA]">
              Partnership
            </span>
          </motion.h2>
          <motion.p
            className="text-[#B7B7B7] text-lg mt-4 max-w-2xl mx-auto"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            A streamlined 9-step journey from registration to activating patient
            leads for your clinic.
          </motion.p>
        </motion.div>

        <div className="relative">
          <TimelineLine scrollYProgress={scrollYProgress} />

          <motion.div
            className="relative z-10 flex flex-col gap-10 md:gap-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
          >
            {steps.map((step, index) => (
              <StepCard
                key={step.number}
                step={step}
                index={index}
                scrollYProgress={scrollYProgress}
              />
            ))}
          </motion.div>

          <motion.div
            className="relative z-10 flex justify-center mt-12 md:mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <div
              className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl"
              style={{
                background: "rgba(255,255,255,0.04)",
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
                border: "1px solid rgba(0,213,255,0.15)",
              }}
            >
              <div className="w-3 h-3 rounded-full bg-[#CBA135] shadow-[0_0_8px_#CBA135]" />
              <span
                className="text-[#CBA135] text-sm font-medium"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Ready to begin? Start your registration today.
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
