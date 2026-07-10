import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | KO Clinics",
  description: "Privacy Policy of KO Clinics",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#100D0A] py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 font-display">
          Privacy Policy
        </h1>
        <div className="prose prose-invert max-w-none space-y-4 text-[#CBBFAF] font-sans text-sm leading-relaxed">
          <p><strong className="text-white">Last updated:</strong> July 2026</p>
          <p>
            KO Clinics (&ldquo;we&rdquo;, &ldquo;our&rdquo;, &ldquo;us&rdquo;) respects your privacy and is committed to protecting your personal data in compliance with the India Digital Personal Data Protection Act 2023 (DPDP Act 2023).
          </p>
          <h2 className="text-white text-lg font-semibold mt-6">1. Information We Collect</h2>
          <p>We collect personal information you provide directly, such as name, email address, phone number, and health-related information when you book consultations or subscribe to our newsletter.</p>
          <h2 className="text-white text-lg font-semibold mt-6">2. How We Use Your Data</h2>
          <p>Your data is used to provide and improve our services, communicate with you, process consultations, and send relevant updates with your consent.</p>
          <h2 className="text-white text-lg font-semibold mt-6">3. Data Sharing</h2>
          <p>We do not sell your personal data. We may share it with partner clinics strictly for service delivery and as required by law.</p>
          <h2 className="text-white text-lg font-semibold mt-6">4. Your Rights</h2>
          <p>Under DPDP Act 2023, you have the right to access, correct, delete, and port your data. You may also withdraw consent at any time.</p>
          <h2 className="text-white text-lg font-semibold mt-6">5. Contact</h2>
          <p>For privacy-related enquiries, email us at <a href="mailto:hello@koclinics.com" className="text-[#C9A14A]">hello@koclinics.com</a>.</p>
          <p className="mt-8 pt-6 border-t border-white/10 text-white/40 text-xs">
            This page is a placeholder and must be reviewed by legal counsel before launch.
          </p>
        </div>
      </div>
    </div>
  );
}
