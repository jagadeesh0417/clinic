import PageLayout from "@/components/PageLayout";
import About from "@/components/About";
import VisionMission from "@/components/VisionMission";
import ThreeVerticals from "@/components/ThreeVerticals";

export default function AboutPage() {
  return (
    <PageLayout>
      <About />
      <VisionMission />
      <ThreeVerticals />
    </PageLayout>
  );
}
