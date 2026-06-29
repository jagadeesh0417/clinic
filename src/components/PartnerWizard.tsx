"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const establishmentOptions = [
  "Aesthetic Clinic", "Hospital", "Slimming Centre", "Skin Clinic",
  "Hair Clinic", "Salon", "Spa", "Dental Clinic", "Wellness Centre", "Others",
];

const facilityOptions = [
  "Reception Area", "Waiting Lounge", "Procedure Room",
  "Pharmacy/Product Display", "Washroom", "Parking",
];

const stepLabels = [
  "Basic Info", "Clinic", "Location", "Infrastructure",
  "Establishment", "Facilities", "Photos", "Video",
  "Review", "Verification", "Approval", "Go Live",
];

type WizardData = {
  fullName: string; mobileNumber: string; emailAddress: string;
  clinicName: string; ownerName: string;
  area: string; city: string; state: string; country: string; pinCode: string;
  totalCarpetArea: string; floorNumber: string; numberOfRooms: string;
  consultationRooms: string; procedureRooms: string;
  establishmentTypes: string[]; facilities: string[];
  photos: File[]; video: File | null;
  agreed: boolean;
};

const initialData: WizardData = {
  fullName: "", mobileNumber: "", emailAddress: "",
  clinicName: "", ownerName: "",
  area: "", city: "", state: "", country: "India", pinCode: "",
  totalCarpetArea: "", floorNumber: "", numberOfRooms: "",
  consultationRooms: "", procedureRooms: "",
  establishmentTypes: [], facilities: [],
  photos: [], video: null, agreed: false,
};

export default function PartnerWizard() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<WizardData>(initialData);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"draft" | "submitted" | "under-review" | "verification" | "approved" | "live">("draft");
  const [verificationType, setVerificationType] = useState<"virtual" | "physical" | null>(null);
  const [scheduledDate, setScheduledDate] = useState("");
  const [signed, setSigned] = useState(false);
  const [direction, setDirection] = useState(0);
  const [photoDragOver, setPhotoDragOver] = useState(false);
  const [videoDragOver, setVideoDragOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const videoInputRef = useRef<HTMLInputElement>(null);

  const update = useCallback((partial: Partial<WizardData>) => {
    setData(prev => ({ ...prev, ...partial }));
    setErrors({});
  }, []);

  const validate = (): boolean => {
    const errs: Record<string, string> = {};
    switch (step) {
      case 1:
        if (!data.fullName.trim()) errs.fullName = "Required";
        if (!data.mobileNumber.trim() || !/^\d{10}$/.test(data.mobileNumber)) errs.mobileNumber = "Valid 10-digit number required";
        if (!data.emailAddress.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.emailAddress)) errs.emailAddress = "Valid email required";
        break;
      case 2:
        if (!data.clinicName.trim()) errs.clinicName = "Required";
        if (!data.ownerName.trim()) errs.ownerName = "Required";
        break;
      case 3:
        if (!data.area.trim()) errs.area = "Required";
        if (!data.city.trim()) errs.city = "Required";
        if (!data.state.trim()) errs.state = "Required";
        if (!data.pinCode.trim() || !/^\d{6}$/.test(data.pinCode)) errs.pinCode = "Valid 6-digit PIN required";
        break;
      case 4:
        if (!data.totalCarpetArea.trim()) errs.totalCarpetArea = "Required";
        if (!data.numberOfRooms.trim()) errs.numberOfRooms = "Required";
        if (!data.consultationRooms.trim()) errs.consultationRooms = "Required";
        if (!data.procedureRooms.trim()) errs.procedureRooms = "Required";
        break;
      case 5:
        if (data.establishmentTypes.length === 0) errs.establishmentTypes = "Select at least one";
        break;
      case 6:
        if (data.facilities.length === 0) errs.facilities = "Select at least one";
        break;
      case 7:
        if (data.photos.length === 0) errs.photos = "Upload at least one photo";
        break;
      case 11:
        if (!data.agreed) errs.agreed = "You must accept the terms";
        break;
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const goNext = () => {
    if (validate()) {
      setDirection(1);
      setStep(s => Math.min(s + 1, 12));
    }
  };

  const goBack = () => {
    setDirection(-1);
    setStep(s => Math.max(s - 1, 1));
  };

  const goTo = (s: number) => {
    if (s < step) { setDirection(-1); setStep(s); return; }
    if (validate()) { setDirection(1); setStep(s); }
  };

  const toggleEstablishment = (val: string) => {
    update({
      establishmentTypes: data.establishmentTypes.includes(val)
        ? data.establishmentTypes.filter(v => v !== val)
        : [...data.establishmentTypes, val],
    });
  };

  const toggleFacility = (val: string) => {
    update({
      facilities: data.facilities.includes(val)
        ? data.facilities.filter(v => v !== val)
        : [...data.facilities, val],
    });
  };

  const handlePhotoDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault(); setPhotoDragOver(false);
    const files = Array.from(e.dataTransfer.files).filter(f => f.type.startsWith("image/"));
    update({ photos: [...data.photos, ...files].slice(0, 10) });
  }, [data.photos, update]);

  const handleVideoDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault(); setVideoDragOver(false);
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("video/")) update({ video: file });
  }, [update]);

  const removePhoto = (idx: number) => {
    update({ photos: data.photos.filter((_, i) => i !== idx) });
  };

  const submitApplication = () => {
    setStatus("submitted");
    setTimeout(() => setStatus("under-review"), 500);
    goNext();
  };

  const stepVariants = {
    enter: (d: number) => ({ opacity: 0, x: d > 0 ? 120 : -120 }),
    center: { opacity: 1, x: 0 },
    exit: (d: number) => ({ opacity: 0, x: d > 0 ? -120 : 120 }),
  };

  const StepCard = ({ children, title }: { children: React.ReactNode; title: string }) => (
    <motion.div
      key={step}
      custom={direction}
      variants={stepVariants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="mx-auto w-full max-w-3xl"
    >
      <h2 className="mb-2 font-['Playfair_Display'] text-3xl font-bold tracking-tight text-[#1a1a1a]">
        {title}
      </h2>
      <p className="mb-8 font-['Inter'] text-sm text-[#8a8a8a]">
        Step {step} of 12
      </p>
      {children}
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-white font-['Inter']">
      <div className="mx-auto max-w-6xl px-4 py-8 md:px-8">
        <div className="mb-10 flex items-center justify-between">
          <div>
            <span className="font-['Playfair_Display'] text-2xl font-bold tracking-tight text-[#1a1a1a]">KO</span>
            <span className="ml-1 font-['Space_Grotesk'] text-xs tracking-[0.15em] uppercase text-[#C6A769]">Clinics</span>
            <p className="mt-1 font-['Inter'] text-xs text-[#8a8a8a]">Partner Registration</p>
          </div>
          <span className="rounded-full border border-[#C6A769]/20 bg-[#C6A769]/5 px-4 py-1.5 font-['Space_Grotesk'] text-[11px] font-medium tracking-wider uppercase text-[#C6A769]">
            {status === "draft" ? "Draft" : status === "submitted" ? "Submitted" : status === "under-review" ? "Under Review" : status === "verification" ? "Verification" : status === "approved" ? "Approved" : "Live"}
          </span>
        </div>

        <div className="mb-12 overflow-x-auto">
          <div className="flex min-w-max gap-1">
            {stepLabels.map((label, i) => {
              const num = i + 1;
              const active = num === step;
              const done = num < step;
              return (
                <button key={num} onClick={() => goTo(num)} className="flex flex-col items-center gap-1.5 group">
                  <div className={`flex h-9 w-9 items-center justify-center rounded-full text-xs font-semibold transition-all duration-300 ${
                    active ? "bg-[#C6A769] text-white shadow-lg shadow-[#C6A769]/30 scale-110" :
                    done ? "bg-[#C6A769]/10 text-[#C6A769] border border-[#C6A769]/30" :
                    "bg-[#f5f5f5] text-[#b0b0b0] border border-transparent group-hover:border-[#C6A769]/30"
                  }`}>
                    {done ? <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg> : num}
                  </div>
                  <span className={`text-[10px] font-medium tracking-wider uppercase whitespace-nowrap transition-colors duration-300 ${
                    active ? "text-[#1a1a1a]" : done ? "text-[#C6A769]" : "text-[#b0b0b0]"
                  }`}>{label}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="relative min-h-[440px]">
          <AnimatePresence mode="wait" custom={direction}>
            {step === 1 && (
              <StepCard title="Basic Information">
                <div className="space-y-5">
                  <Field label="Full Name" value={data.fullName} onChange={v => update({ fullName: v })} error={errors.fullName} placeholder="Dr. John Doe" />
                  <Field label="Mobile Number" value={data.mobileNumber} onChange={v => update({ mobileNumber: v })} error={errors.mobileNumber} placeholder="+91 98765 43210" type="tel" />
                  <Field label="Email Address" value={data.emailAddress} onChange={v => update({ emailAddress: v })} error={errors.emailAddress} placeholder="john@clinic.com" type="email" />
                </div>
              </StepCard>
            )}

            {step === 2 && (
              <StepCard title="Clinic Information">
                <div className="space-y-5">
                  <Field label="Clinic / Hospital / Centre Name" value={data.clinicName} onChange={v => update({ clinicName: v })} error={errors.clinicName} placeholder="KO Clinics — Koramangala" />
                  <Field label="Owner Name" value={data.ownerName} onChange={v => update({ ownerName: v })} error={errors.ownerName} placeholder="Dr. Vikas Singh" />
                </div>
              </StepCard>
            )}

            {step === 3 && (
              <StepCard title="Location Details">
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                  <Field label="Area / Locality" value={data.area} onChange={v => update({ area: v })} error={errors.area} placeholder="Koramangala" />
                  <Field label="City" value={data.city} onChange={v => update({ city: v })} error={errors.city} placeholder="Bengaluru" />
                  <Field label="State" value={data.state} onChange={v => update({ state: v })} error={errors.state} placeholder="Karnataka" />
                  <Field label="Country" value={data.country} onChange={v => update({ country: v })} placeholder="India" />
                  <Field label="PIN Code" value={data.pinCode} onChange={v => update({ pinCode: v })} error={errors.pinCode} placeholder="560034" className="md:col-span-2" />
                </div>
              </StepCard>
            )}

            {step === 4 && (
              <StepCard title="Infrastructure Details">
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                  <Field label="Total Carpet Area (sq.ft)" value={data.totalCarpetArea} onChange={v => update({ totalCarpetArea: v })} error={errors.totalCarpetArea} placeholder="1500" />
                  <Field label="Floor Number" value={data.floorNumber} onChange={v => update({ floorNumber: v })} placeholder="Ground" />
                  <Field label="Number of Rooms" value={data.numberOfRooms} onChange={v => update({ numberOfRooms: v })} error={errors.numberOfRooms} placeholder="5" />
                  <Field label="Consultation Rooms" value={data.consultationRooms} onChange={v => update({ consultationRooms: v })} error={errors.consultationRooms} placeholder="2" />
                  <Field label="Procedure Rooms" value={data.procedureRooms} onChange={v => update({ procedureRooms: v })} error={errors.procedureRooms} placeholder="1" className="md:col-span-2" />
                </div>
              </StepCard>
            )}

            {step === 5 && (
              <StepCard title="Type of Establishment">
                <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
                  {establishmentOptions.map(opt => (
                    <button key={opt} onClick={() => toggleEstablishment(opt)}
                      className={`group relative flex items-center gap-3 rounded-xl border px-4 py-3.5 text-left text-sm font-medium transition-all duration-300 ${
                        data.establishmentTypes.includes(opt)
                          ? "border-[#C6A769] bg-[#C6A769]/5 text-[#1a1a1a] shadow-sm"
                          : "border-[#e5e5e5] bg-white text-[#6a6a6a] hover:border-[#C6A769]/40 hover:shadow-sm"
                      }`}
                    >
                      <div className={`flex h-5 w-5 shrink-0 items-center justify-center rounded border transition-all duration-300 ${
                        data.establishmentTypes.includes(opt)
                          ? "border-[#C6A769] bg-[#C6A769] text-white"
                          : "border-[#d0d0d0] bg-white"
                      }`}>
                        {data.establishmentTypes.includes(opt) && (
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                        )}
                      </div>
                      {opt}
                    </button>
                  ))}
                </div>
                {errors.establishmentTypes && <p className="mt-3 font-['Inter'] text-xs text-red-500">{errors.establishmentTypes}</p>}
              </StepCard>
            )}

            {step === 6 && (
              <StepCard title="Facilities Available">
                <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
                  {facilityOptions.map(opt => (
                    <button key={opt} onClick={() => toggleFacility(opt)}
                      className={`group relative flex items-center gap-3 rounded-xl border px-4 py-3.5 text-left text-sm font-medium transition-all duration-300 ${
                        data.facilities.includes(opt)
                          ? "border-[#C6A769] bg-[#C6A769]/5 text-[#1a1a1a] shadow-sm"
                          : "border-[#e5e5e5] bg-white text-[#6a6a6a] hover:border-[#C6A769]/40 hover:shadow-sm"
                      }`}
                    >
                      <div className={`flex h-5 w-5 shrink-0 items-center justify-center rounded border transition-all duration-300 ${
                        data.facilities.includes(opt)
                          ? "border-[#C6A769] bg-[#C6A769] text-white"
                          : "border-[#d0d0d0] bg-white"
                      }`}>
                        {data.facilities.includes(opt) && (
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                        )}
                      </div>
                      {opt}
                    </button>
                  ))}
                </div>
                {errors.facilities && <p className="mt-3 font-['Inter'] text-xs text-red-500">{errors.facilities}</p>}
              </StepCard>
            )}

            {step === 7 && (
              <StepCard title="Photo Upload">
                <p className="mb-4 font-['Inter'] text-sm text-[#8a8a8a]">
                  Upload up to 10 images. Required: Front Elevation, Reception, Consultation Rooms, Procedure Rooms, Product Display.
                </p>
                <div
                  onDrop={handlePhotoDrop}
                  onDragOver={e => { e.preventDefault(); setPhotoDragOver(true); }}
                  onDragLeave={() => setPhotoDragOver(false)}
                  onClick={() => fileInputRef.current?.click()}
                  className={`relative flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed px-6 py-12 transition-all duration-300 ${
                    photoDragOver ? "border-[#C6A769] bg-[#C6A769]/5" : "border-[#d0d0d0] bg-white hover:border-[#C6A769]/40 hover:bg-[#fafafa]"
                  }`}
                >
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#C6A769]/10">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C6A769" strokeWidth="1.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
                  </div>
                  <p className="font-['Inter'] text-sm font-medium text-[#1a1a1a]">Drop images here or click to browse</p>
                  <p className="mt-1 font-['Inter'] text-xs text-[#8a8a8a]">JPG, PNG, WebP — Max 10 images</p>
                  <input ref={fileInputRef} type="file" multiple accept="image/*" className="hidden" onChange={e => {
                    const files = Array.from(e.target.files || []);
                    update({ photos: [...data.photos, ...files].slice(0, 10) });
                  }} />
                </div>
                {data.photos.length > 0 && (
                  <div className="mt-6">
                    <div className="mb-2 flex items-center justify-between">
                      <span className="font-['Inter'] text-xs font-medium text-[#6a6a6a]">{data.photos.length} / 10 photos</span>
                      <div className="h-1.5 w-40 overflow-hidden rounded-full bg-[#f0f0f0]">
                        <div className="h-full rounded-full bg-[#C6A769] transition-all duration-500" style={{ width: `${(data.photos.length / 10) * 100}%` }} />
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-3 md:grid-cols-5">
                      {data.photos.map((file, i) => (
                        <div key={i} className="group relative aspect-square overflow-hidden rounded-xl border border-[#e5e5e5] bg-[#fafafa]">
                          <img src={URL.createObjectURL(file)} alt={`Upload ${i + 1}`} className="h-full w-full object-cover" />
                          <button onClick={() => removePhoto(i)} className="absolute right-1.5 top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-black/50 text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                {errors.photos && <p className="mt-3 font-['Inter'] text-xs text-red-500">{errors.photos}</p>}
              </StepCard>
            )}

            {step === 8 && (
              <StepCard title="Video Upload">
                <p className="mb-4 font-['Inter'] text-sm text-[#8a8a8a]">
                  Upload a 1–2 minute clinic walkthrough video.
                </p>
                <div
                  onDrop={handleVideoDrop}
                  onDragOver={e => { e.preventDefault(); setVideoDragOver(true); }}
                  onDragLeave={() => setVideoDragOver(false)}
                  onClick={() => videoInputRef.current?.click()}
                  className={`relative flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed px-6 py-12 transition-all duration-300 ${
                    videoDragOver ? "border-[#C6A769] bg-[#C6A769]/5" : "border-[#d0d0d0] bg-white hover:border-[#C6A769]/40 hover:bg-[#fafafa]"
                  }`}
                >
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#C6A769]/10">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C6A769" strokeWidth="1.5"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg>
                  </div>
                  <p className="font-['Inter'] text-sm font-medium text-[#1a1a1a]">Drop video here or click to browse</p>
                  <p className="mt-1 font-['Inter'] text-xs text-[#8a8a8a]">MP4, MOV — Max 1–2 minutes</p>
                  <input ref={videoInputRef} type="file" accept="video/*" className="hidden" onChange={e => {
                    const file = e.target.files?.[0];
                    if (file) update({ video: file });
                  }} />
                </div>
                {data.video && (
                  <div className="mt-6 overflow-hidden rounded-xl border border-[#e5e5e5]">
                    <video src={URL.createObjectURL(data.video)} controls className="w-full" />
                    <div className="flex items-center justify-between border-t border-[#e5e5e5] px-4 py-3">
                      <span className="font-['Inter'] text-sm text-[#6a6a6a]">{data.video.name}</span>
                      <button onClick={() => update({ video: null })} className="font-['Inter'] text-xs font-medium text-red-500 hover:text-red-600">Remove</button>
                    </div>
                  </div>
                )}
              </StepCard>
            )}

            {step === 9 && (
              <StepCard title="Review by KO Clinics">
                <div className="flex flex-col items-center justify-center py-10 text-center">
                  <motion.div
                    animate={{ scale: [1, 1.1, 1], opacity: [0.6, 1, 0.6] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#C6A769]/10"
                  >
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#C6A769" strokeWidth="1.5">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                    </svg>
                  </motion.div>
                  <h3 className="font-['Playfair_Display'] text-2xl font-bold text-[#1a1a1a]">Application Under Review</h3>
                  <p className="mt-3 font-['Inter'] text-sm text-[#8a8a8a] max-w-md">
                    Your application has been submitted successfully. Our team will review it within 48–72 hours.
                  </p>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 3, ease: "easeInOut" }}
                    className="mt-8 h-1 max-w-xs rounded-full bg-gradient-to-r from-[#C6A769]/20 via-[#C6A769] to-[#C6A769]/20"
                  />
                  <div className="mt-10 grid grid-cols-3 gap-6">
                    {["Submitted", "Under Review", "Decision"].map((l, i) => (
                      <div key={l} className="flex flex-col items-center gap-2">
                        <div className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold ${
                          i <= 1 ? "bg-[#C6A769] text-white" : "bg-[#f0f0f0] text-[#b0b0b0]"
                        }`}>{i + 1}</div>
                        <span className={`text-[10px] font-medium tracking-wider uppercase ${
                          i <= 1 ? "text-[#1a1a1a]" : "text-[#b0b0b0]"
                        }`}>{l}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </StepCard>
            )}

            {step === 10 && (
              <StepCard title="Verification">
                <p className="mb-6 font-['Inter'] text-sm text-[#8a8a8a]">
                  Select your preferred verification method and schedule a time.
                </p>
                <div className="mb-6 grid grid-cols-2 gap-4">
                  {(["virtual", "physical"] as const).map(t => (
                    <button key={t} onClick={() => setVerificationType(t)}
                      className={`group flex flex-col items-center gap-3 rounded-2xl border px-6 py-8 text-center transition-all duration-300 ${
                        verificationType === t
                          ? "border-[#C6A769] bg-[#C6A769]/5 shadow-sm"
                          : "border-[#e5e5e5] bg-white hover:border-[#C6A769]/40 hover:shadow-sm"
                      }`}
                    >
                      <div className={`flex h-12 w-12 items-center justify-center rounded-full transition-all duration-300 ${
                        verificationType === t ? "bg-[#C6A769] text-white" : "bg-[#f5f5f5] text-[#8a8a8a]"
                      }`}>
                        {t === "virtual" ? (
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M23 7l-7 5 7 5V7z"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg>
                        ) : (
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                        )}
                      </div>
                      <span className="font-['Inter'] text-sm font-semibold text-[#1a1a1a]">
                        {t === "virtual" ? "Virtual Verification" : "Physical Verification"}
                      </span>
                      <span className="font-['Inter'] text-xs text-[#8a8a8a]">
                        {t === "virtual" ? "Video call walkthrough" : "On-site visit"}
                      </span>
                    </button>
                  ))}
                </div>
                {verificationType && (
                  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-3">
                    <label className="block font-['Inter'] text-xs font-medium text-[#6a6a6a]">Schedule Appointment</label>
                    <input type="date" value={scheduledDate} onChange={e => setScheduledDate(e.target.value)}
                      className="w-full rounded-xl border border-[#e5e5e5] px-4 py-3 font-['Inter'] text-sm text-[#1a1a1a] outline-none transition-all duration-300 focus:border-[#C6A769] focus:ring-2 focus:ring-[#C6A769]/10"
                    />
                  </motion.div>
                )}
              </StepCard>
            )}

            {step === 11 && (
              <StepCard title="Partnership Approval">
                <div className="mb-6 overflow-hidden rounded-2xl border border-[#e5e5e5]">
                  <div className="flex items-center justify-between border-b border-[#e5e5e5] bg-[#fafafa] px-5 py-3">
                    <span className="font-['Inter'] text-xs font-medium text-[#6a6a6a]">KO Clinics Partnership Agreement</span>
                    <span className="rounded-md bg-[#C6A769]/10 px-2.5 py-0.5 font-['Inter'] text-[10px] font-medium text-[#C6A769]">PDF</span>
                  </div>
                  <div className="max-h-48 overflow-y-auto p-5 font-['Inter'] text-xs leading-relaxed text-[#6a6a6a]">
                    <p className="mb-3 font-semibold text-[#1a1a1a]">KO CLINICS PARTNERSHIP AGREEMENT</p>
                    <p>This Partnership Agreement ("Agreement") is entered into between KO Clinics and the Partner specified in the registration form.</p>
                    <p className="mt-2">1. <strong>Partnership Terms</strong> — The Partner agrees to operate under the KO Clinics brand and standards as outlined in the partnership handbook.</p>
                    <p className="mt-2">2. <strong>Revenue Sharing</strong> — Revenue shall be shared on a 50:50 basis for all healthcare services provided through KO Clinics patient acquisition channels.</p>
                    <p className="mt-2">3. <strong>Product Sales</strong> — Partners receive a 30% margin on all Quantum Health Products sold through their clinic counter.</p>
                    <p className="mt-2">4. <strong>Branding</strong> — Partner shall maintain KO Clinics branding as per the provided brand guidelines.</p>
                    <p className="mt-2">5. <strong>Confidentiality</strong> — Both parties agree to maintain confidentiality of business operations and patient data.</p>
                    <p className="mt-2">6. <strong>Termination</strong> — Either party may terminate this agreement with 30 days written notice.</p>
                    <p className="mt-3 text-[#8a8a8a]">By signing below, you agree to the terms and conditions outlined in this agreement.</p>
                  </div>
                </div>
                <div className="mb-6">
                  <label className="mb-2 block font-['Inter'] text-xs font-medium text-[#6a6a6a]">Digital Signature</label>
                  <div className="overflow-hidden rounded-xl border border-[#e5e5e5]">
                    <canvas id="signature-pad" className="h-32 w-full cursor-crosshair bg-white"
                      onMouseDown={e => { const c = e.currentTarget; const ctx = c.getContext("2d"); if (!ctx) return; const rect = c.getBoundingClientRect(); c.style.cursor = "crosshair"; let drawing = false; const startDraw = (ev: MouseEvent) => { drawing = true; const x = ev.clientX - rect.left; const y = ev.clientY - rect.top; ctx.beginPath(); ctx.moveTo(x, y); }; const draw = (ev: MouseEvent) => { if (!drawing) return; const x = ev.clientX - rect.left; const y = ev.clientY - rect.top; ctx.lineWidth = 2.5; ctx.lineCap = "round"; ctx.strokeStyle = "#1a1a1a"; ctx.lineTo(x, y); ctx.stroke(); }; const stopDraw = () => { if (drawing) { drawing = false; setSigned(true); } }; c.addEventListener("mousedown", startDraw); c.addEventListener("mousemove", draw); c.addEventListener("mouseup", stopDraw); c.addEventListener("mouseleave", stopDraw); }}
                    />
                  </div>
                  <button onClick={() => { const c = document.getElementById("signature-pad") as HTMLCanvasElement; const ctx = c?.getContext("2d"); if (ctx) { ctx.clearRect(0, 0, c.width, c.height); setSigned(false); } }} className="mt-2 font-['Inter'] text-xs font-medium text-[#C6A769] hover:text-[#b89650]">Clear Signature</button>
                </div>
                <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-[#e5e5e5] px-4 py-3.5 transition-all duration-300 hover:border-[#C6A769]/40">
                  <input type="checkbox" checked={data.agreed} onChange={e => update({ agreed: e.target.checked })}
                    className="mt-0.5 h-4 w-4 rounded border-[#d0d0d0] text-[#C6A769] focus:ring-[#C6A769]/30"
                  />
                  <span className="font-['Inter'] text-xs leading-relaxed text-[#6a6a6a]">
                    I have read and agree to the terms and conditions of the KO Clinics Partnership Agreement.
                  </span>
                </label>
                {errors.agreed && <p className="mt-2 font-['Inter'] text-xs text-red-500">{errors.agreed}</p>}
              </StepCard>
            )}

            {step === 12 && (
              <motion.div
                key={12} custom={direction} variants={stepVariants} initial="enter" animate="center" exit="exit"
                transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="mx-auto w-full max-w-3xl py-6"
              >
                <div className="flex flex-col items-center text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
                    className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-[#C6A769]/10"
                  >
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#C6A769" strokeWidth="1.5">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
                    </svg>
                  </motion.div>
                  <h2 className="font-['Playfair_Display'] text-3xl font-bold text-[#1a1a1a]">
                    Welcome to KO Clinics!
                  </h2>
                  <p className="mt-3 font-['Inter'] text-sm text-[#8a8a8a] max-w-md">
                    Your clinic is now live on the KO Clinics network. You are officially a KO Clinics Partner.
                  </p>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="mt-4 inline-flex items-center gap-2 rounded-full border border-[#C6A769]/30 bg-[#C6A769]/5 px-5 py-2"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C6A769" strokeWidth="2.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                    <span className="font-['Space_Grotesk'] text-[10px] font-semibold tracking-wider uppercase text-[#C6A769]">
                      Official KO Clinics Partner
                    </span>
                  </motion.div>

                  <div className="mt-10 grid w-full grid-cols-2 gap-4 md:grid-cols-3">
                    {[
                      { title: "Branding Kit", icon: "M4 16l4.586-4.586a2 2 0 0 1 2.828 0L16 16m-2-2l1.586-1.586a2 2 0 0 1 2.828 0L20 14m-6-6h.01M6 20h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2z" },
                      { title: "Website Listing", icon: "M21 12a9 9 0 1 1-9-9m9 9a9 9 0 0 1-9 9m9-9h-9m9 0a9 9 0 0 0-9-9m0 0A9 9 0 0 0 3 12m9-9v9m0 0v9" },
                      { title: "Marketing Support", icon: "M11 3.055A9.001 9.001 0 1 0 20.945 13H11V3.055z" },
                      { title: "Patient Leads", icon: "M17 20h5v-2a3 3 0 0 0-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 0 1 5.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 0 1 9.288 0M15 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" },
                      { title: "Doctor Support", icon: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2m16-12V3m0 0h-3m3 0l-3 3m-7 3a4 4 0 1 1-8 0 4 4 0 0 1 8 0z" },
                    ].map((b, i) => (
                      <motion.div
                        key={b.title}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 + i * 0.12 }}
                        className="group rounded-2xl border border-[#e5e5e5] bg-white px-4 py-5 text-center transition-all duration-300 hover:border-[#C6A769]/30 hover:shadow-lg hover:shadow-[#C6A769]/5"
                      >
                        <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[#C6A769]/10 transition-colors duration-300 group-hover:bg-[#C6A769]/20">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C6A769" strokeWidth="1.5"><path d={b.icon}/></svg>
                        </div>
                        <span className="font-['Inter'] text-xs font-semibold text-[#1a1a1a]">{b.title}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="mt-10 flex items-center justify-between border-t border-[#e5e5e5] pt-6">
          <button
            onClick={goBack}
            disabled={step === 1}
            className="flex items-center gap-2 rounded-xl border border-[#e5e5e5] bg-white px-5 py-2.5 font-['Inter'] text-sm font-medium text-[#6a6a6a] transition-all duration-300 hover:border-[#C6A769]/40 hover:text-[#1a1a1a] disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
            Back
          </button>
          <div className="flex items-center gap-3">
            <span className="font-['Inter'] text-xs text-[#b0b0b0]">Step {step} / 12</span>
            {step < 9 && (
              <button onClick={goNext}
                className="flex items-center gap-2 rounded-xl bg-[#C6A769] px-6 py-2.5 font-['Inter'] text-sm font-semibold text-white transition-all duration-300 hover:bg-[#b89650] hover:shadow-lg hover:shadow-[#C6A769]/30 active:scale-[0.98]"
              >
                Continue
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </button>
            )}
            {step === 9 && (
              <button onClick={() => { setDirection(1); setStep(10); }}
                className="flex items-center gap-2 rounded-xl bg-[#C6A769] px-6 py-2.5 font-['Inter'] text-sm font-semibold text-white transition-all duration-300 hover:bg-[#b89650] hover:shadow-lg hover:shadow-[#C6A769]/30 active:scale-[0.98]"
                >
                Proceed to Verification
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </button>
            )}
            {step === 10 && (
              <button onClick={() => { if (verificationType && scheduledDate) { setDirection(1); setStep(11); } }}
                disabled={!verificationType || !scheduledDate}
                className="flex items-center gap-2 rounded-xl bg-[#C6A769] px-6 py-2.5 font-['Inter'] text-sm font-semibold text-white transition-all duration-300 hover:bg-[#b89650] hover:shadow-lg hover:shadow-[#C6A769]/30 active:scale-[0.98] disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Schedule & Continue
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </button>
            )}
            {step === 11 && (
              <button onClick={() => { if (data.agreed && signed) { setDirection(1); setStep(12); } }}
                disabled={!data.agreed || !signed}
                className="flex items-center gap-2 rounded-xl bg-[#C6A769] px-6 py-2.5 font-['Inter'] text-sm font-semibold text-white transition-all duration-300 hover:bg-[#b89650] hover:shadow-lg hover:shadow-[#C6A769]/30 active:scale-[0.98] disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Accept & Complete
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
              </button>
            )}
            {step === 12 && (
              <a href="/"
                className="flex items-center gap-2 rounded-xl bg-[#C6A769] px-6 py-2.5 font-['Inter'] text-sm font-semibold text-white transition-all duration-300 hover:bg-[#b89650] hover:shadow-lg hover:shadow-[#C6A769]/30"
              >
                Back to Home
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function Field({ label, value, onChange, error, placeholder, type = "text", className = "" }: {
  label: string; value: string; onChange: (v: string) => void; error?: string;
  placeholder?: string; type?: string; className?: string;
}) {
  return (
    <div className={className}>
      <label className="mb-1.5 block font-['Inter'] text-xs font-medium text-[#6a6a6a]">{label}</label>
      <input
        type={type}
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        className={`w-full rounded-xl border px-4 py-3 font-['Inter'] text-sm text-[#1a1a1a] outline-none transition-all duration-300 placeholder:text-[#b0b0b0] focus:border-[#C6A769] focus:ring-2 focus:ring-[#C6A769]/10 ${
          error ? "border-red-300 bg-red-50" : "border-[#e5e5e5] bg-white"
        }`}
      />
      {error && <p className="mt-1 font-['Inter'] text-[11px] text-red-500">{error}</p>}
    </div>
  );
}
