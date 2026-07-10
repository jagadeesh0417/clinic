import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | KO Clinics",
  description: "Terms of Service of KO Clinics",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#050505] py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 font-['Playfair_Display',serif]">
          Terms of Service
        </h1>
        <div className="prose prose-invert max-w-none space-y-4 text-[#B7B7B7] font-['Inter',sans-serif] text-sm leading-relaxed">
          <p><strong className="text-white">Last updated:</strong> July 2026</p>
          <p>
            These Terms of Service govern your use of KO Clinics&rsquo; website, services, and platform.
          </p>
          <h2 className="text-white text-lg font-semibold mt-6">1. Services</h2>
          <p>KO Clinics provides healthcare network services connecting patients with partner clinics. Medical services are delivered by independent practitioners.</p>
          <h2 className="text-white text-lg font-semibold mt-6">2. User Obligations</h2>
          <p>You agree to provide accurate information and not misuse the platform for unlawful purposes.</p>
          <h2 className="text-white text-lg font-semibold mt-6">3. Limitation of Liability</h2>
          <p>KO Clinics acts as an intermediary and is not liable for medical outcomes delivered by partner practitioners.</p>
          <h2 className="text-white text-lg font-semibold mt-6">4. Governing Law</h2>
          <p>These terms are governed by the laws of India.</p>
          <h2 className="text-white text-lg font-semibold mt-6">5. Contact</h2>
          <p>For enquiries, email <a href="mailto:hello@koclinics.com" className="text-[#CBA135]">hello@koclinics.com</a>.</p>
          <p className="mt-8 pt-6 border-t border-white/10 text-white/40 text-xs">
            This page is a placeholder and must be reviewed by legal counsel before launch.
          </p>
        </div>
      </div>
    </div>
  );
}
