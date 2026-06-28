import PageLayout from "@/components/PageLayout";
import Hero from "@/components/Hero";
import About from "@/components/About";
import PartnershipModel from "@/components/PartnershipModel";
import RevenueModel from "@/components/RevenueModel";
import FinalCTA from "@/components/FinalCTA";

export default function Home() {
  return (
    <PageLayout>
      <Hero />
      <About />
      <PartnershipModel />
      <RevenueModel />
      <FinalCTA />
    </PageLayout>
  );
}
