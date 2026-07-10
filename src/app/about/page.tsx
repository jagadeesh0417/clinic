import PageLayout from "@/components/PageLayout";
import BrandSection from "@/components/BrandSection";
import ClinicalTeam from "@/components/ClinicalTeam";
import TeamSection from "@/components/TeamSection";
import { doctors } from "@/config/doctors";

const ld = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalOrganization",
      name: "KO Clinics",
      url: "https://koclinics.com",
      founder: { "@id": "#dr-vikas-singh" },
      employee: doctors
        .filter((d) => !d.isFounder)
        .map((d) => ({ "@id": `#${d.id}` })),
    },
    ...doctors.map((d) => ({
      "@type": "Physician" as const,
      "@id": `#${d.id}`,
      name: d.name,
      ...(d.qualifications ? { medicalSpecialty: d.specialty } : {}),
      ...(d.isFounder ? { foundingDate: "2005" } : {}),
    })),
  ],
};

export default function AboutPage() {
  return (
    <PageLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
      />
      <BrandSection />
      <ClinicalTeam />
      <TeamSection />
    </PageLayout>
  );
}
