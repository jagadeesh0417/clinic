import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KO Clinics | India's Largest AI-Powered Clinic Network",
  description: "Partner with KO Clinics – The Future of Healthcare Growth. India's fastest-growing healthcare aggregator connecting clinics, hospitals, and specialists under one premium national brand.",
  keywords: "KO Clinics, AI healthcare, clinic network, healthcare aggregator, medical tourism, dermatology, India clinics",
  openGraph: {
    title: "KO Clinics | India's Largest AI-Powered Clinic Network",
    description: "Partner with KO Clinics – The Future of Healthcare Growth.",
    siteName: "KO Clinics",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "KO Clinics | India's Largest AI-Powered Clinic Network",
    description: "Partner with KO Clinics – The Future of Healthcare Growth.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-[#050505] text-white antialiased">
        {children}
      </body>
    </html>
  );
}
