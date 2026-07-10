"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.1 * i, ease: "easeOut" as const },
  }),
};

const treatmentsDrVikas = [
  "PRP & GFC Hair Therapy",
  "Botox & Fillers",
  "PDO Threads",
  "Exosome Facial Therapy",
  "Body Contouring & Double Chin Reduction",
  "Mounjaro & Ozempic Weight Loss Program",
  "Stem Cell Anti-Aging Therapy",
  "Acne / Pigmentation / Scar Repair",
  "Skin Laser Rejuvenation",
  "Micro Bio FUE Hair Transplant",
  "Morpheus MNRF",
  "Sexual Wellness",
  "Cosmetic Surgery",
  "Non-Surgical Breast Lift",
  "Laser Hair Reduction",
  "IV Vitamin Therapy",
  "EECP-ECMR",
  "Chelation / Ozone Therapy",
  "DHI in Hair Transplant",
];

const treatmentsLiquid = [
  "Botox",
  "Dermal Fillers",
  "Thread Lift",
  "HIFU",
  "PRP Therapy",
  "Skin Boosters",
  "Liquid Face Lift (combination)",
  "Sculptra",
  "Profhilo",
  "MNRF",
  "Vampire Face Lift",
  "Consultation Only",
];

export default function AppointmentForm() {
  const [activeTab, setActiveTab] = useState<"enquiry" | "appointment">("appointment");
  const [site, setSite] = useState<"drvikas" | "liquid">("drvikas");
  const [submitted, setSubmitted] = useState(false);

  const [enquiry, setEnquiry] = useState({ fullName: "", email: "", phone: "", message: "" });
  const [appointment, setAppointment] = useState({
    fullName: "",
    mobileNumber: "",
    email: "",
    preferredDate: "",
    preferredTime: "",
    service: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const treatments = site === "drvikas" ? treatmentsDrVikas : treatmentsLiquid;

  const handleEnquiryChange = (field: string, value: string) => {
    setEnquiry(prev => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: "" }));
  };

  const handleAppointmentChange = (field: string, value: string) => {
    setAppointment(prev => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: "" }));
  };

  const validateEnquiry = () => {
    const e: Record<string, string> = {};
    if (!enquiry.fullName.trim()) e.fullName = "Full name is required";
    if (!enquiry.email.trim()) e.email = "Email is required";
    if (!enquiry.phone.trim()) e.phone = "Phone number is required";
    return e;
  };

  const validateAppointment = () => {
    const e: Record<string, string> = {};
    if (!appointment.fullName.trim()) e.fullName = "Full name is required";
    if (!appointment.mobileNumber.trim()) e.mobileNumber = "Mobile number is required";
    if (!appointment.email.trim()) e.email = "Email is required";
    if (!appointment.preferredDate) e.preferredDate = "Preferred date is required";
    if (!appointment.preferredTime) e.preferredTime = "Preferred time is required";
    if (!appointment.service) e.service = "Please select a service";
    return e;
  };

  const handleEnquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const v = validateEnquiry();
    setErrors(v);
    if (Object.keys(v).length === 0) {
      setSubmitted(true);
    }
  };

  const handleAppointmentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const v = validateAppointment();
    setErrors(v);
    if (Object.keys(v).length === 0) {
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <section className="relative py-24 bg-[#100D0A]">
        <div className="max-w-lg mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-16 h-16 rounded-full bg-[#C9A14A]/20 flex items-center justify-center mx-auto mb-6">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C9A14A" strokeWidth="2">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
            </div>
            <h2 className="font-displayisplay text-2xl text-white mb-3">Thank You</h2>
            <p className="font-sans text-sm text-white/50 mb-2">Your enquiry has been received.</p>
            <p className="font-sans text-xs text-white/40">The team will contact you to schedule and provide further details.</p>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-6 px-6 py-2.5 rounded-full border border-white/10 text-white/70 font-sans text-sm transition-all hover:border-[#C9A14A]/40 hover:text-white"
            >
              Submit Another
            </button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative py-24 bg-[#100D0A] overflow-hidden">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#C9A14A]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-[#C9A14A] font-sans text-sm tracking-[0.2em] uppercase mb-4">
            Get Started
          </span>
          <h2 className="font-displayisplay text-3xl md:text-4xl text-white mb-3">
            Book an <span className="text-[#C9A14A]">Appointment</span>
          </h2>
          <p className="text-white/50 font-sans text-sm max-w-lg mx-auto">
            Fill in your details and our team will get back to you to confirm your visit.
          </p>
        </motion.div>

        {/* Tab Switcher */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex justify-center mb-10"
        >
          <div className="inline-flex rounded-2xl p-1" style={{ background: "rgba(246,241,232,0.05)", border: "1px solid rgba(246,241,232,0.08)" }}>
            <button
              onClick={() => setActiveTab("enquiry")}
              className={`px-6 py-2.5 rounded-xl text-sm font-sans font-medium tracking-wider transition-all duration-300 ${
                activeTab === "enquiry" ? "bg-[#C9A14A] text-black" : "text-white/50 hover:text-white"
              }`}
            >
              Quick Enquiry
            </button>
            <button
              onClick={() => setActiveTab("appointment")}
              className={`px-6 py-2.5 rounded-xl text-sm font-sans font-medium tracking-wider transition-all duration-300 ${
                activeTab === "appointment" ? "bg-[#C9A14A] text-black" : "text-white/50 hover:text-white"
              }`}
            >
              Book Appointment
            </button>
          </div>
        </motion.div>

        {/* Site Toggle (shown below appointment tab) */}
        {activeTab === "appointment" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="flex justify-center mb-8"
          >
            <div className="flex items-center gap-3">
              <span className="font-sans text-xs text-white/40">Treatment list:</span>
              <button
                onClick={() => setSite("drvikas")}
                className={`px-4 py-1.5 rounded-full text-xs font-sans font-medium tracking-wider transition-all duration-300 ${
                  site === "drvikas" ? "bg-white/10 text-white border border-white/20" : "text-white/40 hover:text-white"
                }`}
              >
                drvikassingh.co.in
              </button>
              <button
                onClick={() => setSite("liquid")}
                className={`px-4 py-1.5 rounded-full text-xs font-sans font-medium tracking-wider transition-all duration-300 ${
                  site === "liquid" ? "bg-white/10 text-white border border-white/20" : "text-white/40 hover:text-white"
                }`}
              >
                liquidfacelift.in
              </button>
            </div>
          </motion.div>
        )}

        {/* Enquiry Form */}
        {activeTab === "enquiry" && (
          <motion.div
            key="enquiry"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <form onSubmit={handleEnquirySubmit} className="max-w-lg mx-auto space-y-5">
              <motion.div variants={fadeUp} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <label className="block font-sans text-xs font-medium text-white/60 mb-2">Full Name</label>
                <input
                  type="text"
                  value={enquiry.fullName}
                  onChange={e => handleEnquiryChange("fullName", e.target.value)}
                  placeholder="Your full name"
                  className={`w-full px-4 py-3 rounded-2xl bg-white/5 border font-sans text-sm text-white placeholder:text-white/20 transition-all duration-300 focus:outline-none focus:border-[#C9A14A]/40 ${
                    errors.fullName ? "border-red-500/50" : "border-white/10"
                  }`}
                />
                {errors.fullName && <p className="mt-1 font-sans text-xs text-red-400">{errors.fullName}</p>}
              </motion.div>

              <motion.div variants={fadeUp} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <label className="block font-sans text-xs font-medium text-white/60 mb-2">Email</label>
                <input
                  type="email"
                  value={enquiry.email}
                  onChange={e => handleEnquiryChange("email", e.target.value)}
                  placeholder="your@email.com"
                  className={`w-full px-4 py-3 rounded-2xl bg-white/5 border font-sans text-sm text-white placeholder:text-white/20 transition-all duration-300 focus:outline-none focus:border-[#C9A14A]/40 ${
                    errors.email ? "border-red-500/50" : "border-white/10"
                  }`}
                />
                {errors.email && <p className="mt-1 font-sans text-xs text-red-400">{errors.email}</p>}
              </motion.div>

              <motion.div variants={fadeUp} custom={2} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <label className="block font-sans text-xs font-medium text-white/60 mb-2">Phone / WhatsApp</label>
                <input
                  type="tel"
                  value={enquiry.phone}
                  onChange={e => handleEnquiryChange("phone", e.target.value)}
                  placeholder="+91 98765 43210"
                  className={`w-full px-4 py-3 rounded-2xl bg-white/5 border font-sans text-sm text-white placeholder:text-white/20 transition-all duration-300 focus:outline-none focus:border-[#C9A14A]/40 ${
                    errors.phone ? "border-red-500/50" : "border-white/10"
                  }`}
                />
                {errors.phone && <p className="mt-1 font-sans text-xs text-red-400">{errors.phone}</p>}
              </motion.div>

              <motion.div variants={fadeUp} custom={3} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <label className="block font-sans text-xs font-medium text-white/60 mb-2">Message</label>
                <textarea
                  rows={4}
                  value={enquiry.message}
                  onChange={e => handleEnquiryChange("message", e.target.value)}
                  placeholder="How can we help you?"
                  className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 font-sans text-sm text-white placeholder:text-white/20 transition-all duration-300 focus:outline-none focus:border-[#C9A14A]/40 resize-none"
                />
              </motion.div>

              <motion.div variants={fadeUp} custom={4} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <p className="font-sans text-xs text-white/30 leading-relaxed mb-5">
                  Disclaimer: submitting this form does not confirm an appointment. The team will contact you to schedule and provide further details.
                </p>
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-2xl bg-[#C9A14A] text-black font-sans text-sm font-semibold tracking-wider uppercase transition-all duration-300 hover:bg-[#d4a83a] hover:shadow-lg hover:shadow-[#C9A14A]/25"
                >
                  Send Enquiry
                </button>
              </motion.div>
            </form>
          </motion.div>
        )}

        {/* Appointment Form */}
        {activeTab === "appointment" && (
          <motion.div
            key="appointment"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <form onSubmit={handleAppointmentSubmit} className="max-w-lg mx-auto space-y-5">
              <motion.div variants={fadeUp} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <label className="block font-sans text-xs font-medium text-white/60 mb-2">Full Name</label>
                <input
                  type="text"
                  value={appointment.fullName}
                  onChange={e => handleAppointmentChange("fullName", e.target.value)}
                  placeholder="Your full name"
                  className={`w-full px-4 py-3 rounded-2xl bg-white/5 border font-sans text-sm text-white placeholder:text-white/20 transition-all duration-300 focus:outline-none focus:border-[#C9A14A]/40 ${
                    errors.fullName ? "border-red-500/50" : "border-white/10"
                  }`}
                />
                {errors.fullName && <p className="mt-1 font-sans text-xs text-red-400">{errors.fullName}</p>}
              </motion.div>

              <motion.div variants={fadeUp} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <label className="block font-sans text-xs font-medium text-white/60 mb-2">Mobile Number</label>
                <input
                  type="tel"
                  value={appointment.mobileNumber}
                  onChange={e => handleAppointmentChange("mobileNumber", e.target.value)}
                  placeholder="+91 98765 43210"
                  className={`w-full px-4 py-3 rounded-2xl bg-white/5 border font-sans text-sm text-white placeholder:text-white/20 transition-all duration-300 focus:outline-none focus:border-[#C9A14A]/40 ${
                    errors.mobileNumber ? "border-red-500/50" : "border-white/10"
                  }`}
                />
                {errors.mobileNumber && <p className="mt-1 font-sans text-xs text-red-400">{errors.mobileNumber}</p>}
              </motion.div>

              <motion.div variants={fadeUp} custom={2} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <label className="block font-sans text-xs font-medium text-white/60 mb-2">Email</label>
                <input
                  type="email"
                  value={appointment.email}
                  onChange={e => handleAppointmentChange("email", e.target.value)}
                  placeholder="your@email.com"
                  className={`w-full px-4 py-3 rounded-2xl bg-white/5 border font-sans text-sm text-white placeholder:text-white/20 transition-all duration-300 focus:outline-none focus:border-[#C9A14A]/40 ${
                    errors.email ? "border-red-500/50" : "border-white/10"
                  }`}
                />
                {errors.email && <p className="mt-1 font-sans text-xs text-red-400">{errors.email}</p>}
              </motion.div>

              <div className="grid grid-cols-2 gap-4">
                <motion.div variants={fadeUp} custom={3} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                  <label className="block font-sans text-xs font-medium text-white/60 mb-2">Preferred Date</label>
                  <input
                    type="date"
                    value={appointment.preferredDate}
                    onChange={e => handleAppointmentChange("preferredDate", e.target.value)}
                    className={`w-full px-4 py-3 rounded-2xl bg-white/5 border font-sans text-sm text-white transition-all duration-300 focus:outline-none focus:border-[#C9A14A]/40 [color-scheme:dark] ${
                      errors.preferredDate ? "border-red-500/50" : "border-white/10"
                    }`}
                  />
                  {errors.preferredDate && <p className="mt-1 font-sans text-xs text-red-400">{errors.preferredDate}</p>}
                </motion.div>

                <motion.div variants={fadeUp} custom={4} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                  <label className="block font-sans text-xs font-medium text-white/60 mb-2">Preferred Time</label>
                  <input
                    type="time"
                    value={appointment.preferredTime}
                    onChange={e => handleAppointmentChange("preferredTime", e.target.value)}
                    className={`w-full px-4 py-3 rounded-2xl bg-white/5 border font-sans text-sm text-white transition-all duration-300 focus:outline-none focus:border-[#C9A14A]/40 [color-scheme:dark] ${
                      errors.preferredTime ? "border-red-500/50" : "border-white/10"
                    }`}
                  />
                  {errors.preferredTime && <p className="mt-1 font-sans text-xs text-red-400">{errors.preferredTime}</p>}
                </motion.div>
              </div>

              <motion.div variants={fadeUp} custom={5} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <label className="block font-sans text-xs font-medium text-white/60 mb-2">Service Interested In</label>
                <div className="relative">
                  <select
                    value={appointment.service}
                    onChange={e => handleAppointmentChange("service", e.target.value)}
                    className={`w-full px-4 py-3 rounded-2xl bg-white/5 border font-sans text-sm text-white appearance-none cursor-pointer transition-all duration-300 focus:outline-none focus:border-[#C9A14A]/40 ${
                      errors.service ? "border-red-500/50" : "border-white/10"
                    } ${!appointment.service ? "text-white/20" : "text-white"}`}
                  >
                    <option value="" disabled className="bg-[#100D0A] text-white/40">Select a treatment</option>
                    {treatments.map(t => (
                      <option key={t} value={t} className="bg-[#100D0A] text-white">{t}</option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="rgba(246,241,232,0.4)" strokeWidth="2">
                      <polyline points="6 9 12 15 18 9"/>
                    </svg>
                  </div>
                </div>
                {errors.service && <p className="mt-1 font-sans text-xs text-red-400">{errors.service}</p>}
              </motion.div>

              <motion.div variants={fadeUp} custom={6} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <label className="block font-sans text-xs font-medium text-white/60 mb-2">Message</label>
                <textarea
                  rows={4}
                  value={appointment.message}
                  onChange={e => handleAppointmentChange("message", e.target.value)}
                  placeholder="Any additional information..."
                  className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 font-sans text-sm text-white placeholder:text-white/20 transition-all duration-300 focus:outline-none focus:border-[#C9A14A]/40 resize-none"
                />
              </motion.div>

              <motion.div variants={fadeUp} custom={7} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <p className="font-sans text-xs text-white/30 leading-relaxed mb-5">
                  Disclaimer: submitting this form does not confirm an appointment. The team will contact you to schedule and provide further details.
                </p>
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-2xl bg-[#C9A14A] text-black font-sans text-sm font-semibold tracking-wider uppercase transition-all duration-300 hover:bg-[#d4a83a] hover:shadow-lg hover:shadow-[#C9A14A]/25"
                >
                  Book Appointment
                </button>
              </motion.div>
            </form>
          </motion.div>
        )}
      </div>
    </section>
  );
}
