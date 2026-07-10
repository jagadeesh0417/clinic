import type { Metadata } from "next";
import { Playfair_Display, Cinzel, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-displayisplay",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-brand",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-displayans",
});

export const metadata: Metadata = {
  title: "KO Clinics | An AI-Powered Clinic Network, Built by Clinicians",
  description: "An AI-powered clinic network, built by clinicians. Partner with KO Clinics and give your clinic the diagnostics, digital infrastructure, and patient flow of a large hospital group.",
  keywords: "KO Clinics, AI healthcare, clinic network, healthcare aggregator, medical tourism, dermatology, India clinics",
  openGraph: {
    title: "KO Clinics | An AI-Powered Clinic Network, Built by Clinicians",
    description: "An AI-powered clinic network, built by clinicians. Partner with KO Clinics and give your clinic the diagnostics, digital infrastructure, and patient flow of a large hospital group.",
    siteName: "KO Clinics",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "KO Clinics | An AI-Powered Clinic Network, Built by Clinicians",
    description: "An AI-powered clinic network, built by clinicians.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={`${playfair.variable} ${cinzel.variable} ${montserrat.variable} min-h-screen bg-ink text-body antialiased`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
