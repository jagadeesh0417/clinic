import PageLayout from "@/components/PageLayout";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WhyChoose from "@/components/WhyChoose";
import QScan from "@/components/QScan";
import PartnerBenefits from "@/components/PartnerBenefits";
import PartnerRequirements from "@/components/PartnerRequirements";
import VisionMission from "@/components/VisionMission";
import GlobalPresence from "@/components/GlobalPresence";
import FinalCTA from "@/components/FinalCTA";

export default function Home() {
  return (
    <PageLayout>
      <Hero />
      <About />
      <WhyChoose />
      <QScan />
      <PartnerBenefits />
      <PartnerRequirements />
      <VisionMission />
      <GlobalPresence />
      <FinalCTA />
    </PageLayout>
  );
}
