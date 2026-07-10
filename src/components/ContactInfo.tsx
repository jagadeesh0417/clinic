"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.1 * i, ease: "easeOut" as const },
  }),
};

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const phoneGroups = [
  { region: "India", numbers: ["+91 9148717036", "+91 7996191116", "+91 9535946916", "+91 9380935575"] },
  { region: "Hong Kong", numbers: ["+852 44608658", "+852 6082 3699"] },
  { region: "Dubai (UAE)", numbers: ["+971 54 536 6831"] },
  { region: "Canada", numbers: ["+1 (647) 581-4279"] },
  { region: "Philippines", numbers: ["+63 966 168 8381"] },
];

export default function ContactInfo() {
  return (
    <section className="relative py-24 bg-[#100D0A] overflow-hidden">
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-[#C9A14A]/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] bg-[#C9A14A]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={container}
          className="text-center mb-16"
        >
          <motion.span
            variants={fadeUp} custom={0}
            className="inline-block text-[#C9A14A] font-sans text-sm tracking-[0.2em] uppercase mb-4"
          >
            Get In Touch
          </motion.span>
          <motion.h1
            variants={fadeUp} custom={1}
            className="font-displayisplay text-4xl md:text-5xl lg:text-6xl text-white mb-4"
          >
            Contact <span className="text-[#C9A14A]">Us</span>
          </motion.h1>
          <motion.p
            variants={fadeUp} custom={2}
            className="text-white/60 font-sans text-lg max-w-2xl mx-auto"
          >
            The clinic can be reached across multiple channels. India phones handle inbound enquiries from all locations.
          </motion.p>
        </motion.div>

        {/* Phone Numbers */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={container}
          className="max-w-4xl mx-auto mb-16"
        >
          <motion.h2
            variants={fadeUp} custom={0}
            className="font-displayisplay text-2xl text-white text-center mb-8"
          >
            Phone
          </motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {phoneGroups.map((group, gi) => (
              <motion.div
                key={group.region}
                variants={fadeUp} custom={gi + 1}
                className="rounded-2xl p-5 transition-all duration-300 hover:border-[#C9A14A]/20"
                style={{
                  background: "rgba(246,241,232,0.03)",
                  border: "1px solid rgba(246,241,232,0.06)",
                }}
              >
                <h3 className="font-sans text-xs tracking-wider uppercase text-[#C9A14A] mb-3">{group.region}</h3>
                <div className="space-y-2">
                  {group.numbers.map((num) => (
                    <a
                      key={num}
                      href={`tel:${num.replace(/[\s\-()]/g, "")}`}
                      className="block font-sans text-sm text-white/70 hover:text-[#C9A14A] transition-colors"
                    >
                      {num}
                    </a>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Email, Web, WhatsApp, Hours */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={container}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <motion.div
              variants={fadeUp} custom={0}
              className="rounded-2xl p-5"
              style={{
                background: "rgba(246,241,232,0.03)",
                border: "1px solid rgba(246,241,232,0.06)",
              }}
            >
              <h3 className="font-sans text-xs tracking-wider uppercase text-[#C9A14A] mb-3">Email</h3>
              <a
                href="mailto:drvikas090909@gmail.com"
                className="font-sans text-sm text-white/70 hover:text-[#C9A14A] transition-colors"
              >
                drvikas090909@gmail.com
              </a>
            </motion.div>

            <motion.div
              variants={fadeUp} custom={1}
              className="rounded-2xl p-5"
              style={{
                background: "rgba(246,241,232,0.03)",
                border: "1px solid rgba(246,241,232,0.06)",
              }}
            >
              <h3 className="font-sans text-xs tracking-wider uppercase text-[#C9A14A] mb-3">Web</h3>
              <div className="space-y-2">
                <a
                  href="https://www.drvikassingh.co.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block font-sans text-sm text-white/70 hover:text-[#C9A14A] transition-colors"
                >
                  www.drvikassingh.co.in
                </a>
                <a
                  href="https://www.liquidfacelift.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block font-sans text-sm text-white/70 hover:text-[#C9A14A] transition-colors"
                >
                  www.liquidfacelift.in
                </a>
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp} custom={2}
              className="rounded-2xl p-5"
              style={{
                background: "rgba(246,241,232,0.03)",
                border: "1px solid rgba(246,241,232,0.06)",
              }}
            >
              <h3 className="font-sans text-xs tracking-wider uppercase text-[#C9A14A] mb-3">WhatsApp</h3>
              <div className="space-y-2">
                <a
                  href="https://wa.me/+919148717036"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block font-sans text-sm text-white/70 hover:text-[#C9A14A] transition-colors"
                >
                  wa.me/+919148717036
                </a>
                <a
                  href="https://wa.link/g99sm6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block font-sans text-sm text-white/70 hover:text-[#C9A14A] transition-colors"
                >
                  wa.link/g99sm6
                </a>
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp} custom={3}
              className="rounded-2xl p-5"
              style={{
                background: "rgba(246,241,232,0.03)",
                border: "1px solid rgba(246,241,232,0.06)",
              }}
            >
              <h3 className="font-sans text-xs tracking-wider uppercase text-[#C9A14A] mb-3">Hours</h3>
              <p className="font-sans text-sm text-white/70">
                Monday to Saturday<br />10:00 AM \u2013 7:00 PM
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Social */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={container}
          className="max-w-4xl mx-auto mb-16"
        >
          <motion.h2
            variants={fadeUp} custom={0}
            className="font-displayisplay text-2xl text-white text-center mb-8"
          >
            Social
          </motion.h2>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.a
              variants={fadeUp} custom={1}
              href="https://www.instagram.com/drvikassingh/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-2xl px-6 py-4 transition-all duration-300 hover:scale-[1.02] hover:border-[#C9A14A]/20"
              style={{
                background: "rgba(246,241,232,0.03)",
                border: "1px solid rgba(246,241,232,0.06)",
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C9A14A" strokeWidth="1.5">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
              <div>
                <p className="font-sans text-sm text-white">Instagram</p>
                <p className="font-sans text-xs text-white/40">@drvikassingh</p>
              </div>
            </motion.a>

            <motion.a
              variants={fadeUp} custom={2}
              href="https://www.youtube.com/@kosmedixdiary/videos"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-2xl px-6 py-4 transition-all duration-300 hover:scale-[1.02] hover:border-[#C9A14A]/20"
              style={{
                background: "rgba(246,241,232,0.03)",
                border: "1px solid rgba(246,241,232,0.06)",
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C9A14A" strokeWidth="1.5">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.94 2C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/>
              </svg>
              <div>
                <p className="font-sans text-sm text-white">YouTube</p>
                <p className="font-sans text-xs text-white/40">@kosmedixdiary</p>
              </div>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
