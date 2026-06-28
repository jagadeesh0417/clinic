import PageLayout from "@/components/PageLayout";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ThreeVerticals from "@/components/ThreeVerticals";
import ExistingPartners from "@/components/ExistingPartners";
import FinalCTA from "@/components/FinalCTA";

export default function Home() {
  return (
    <PageLayout>
      <Hero />
      <About />
      <ThreeVerticals />
      <ExistingPartners />
      <FinalCTA />
    </PageLayout>
  );
}
