import PageLayout from "@/components/PageLayout";
import Hero from "@/components/Hero";
import About from "@/components/About";
import VisionMission from "@/components/VisionMission";
import QScan from "@/components/QScan";
import WhyChoose from "@/components/WhyChoose";
import PartnerRequirements from "@/components/PartnerRequirements";
import FinalCTA from "@/components/FinalCTA";

export default function Home() {
  return (
    <PageLayout>
      <Hero />
      <About />
      <VisionMission />
      <QScan />
      <WhyChoose />
      <PartnerRequirements />
      <FinalCTA />
    </PageLayout>
  );
}
