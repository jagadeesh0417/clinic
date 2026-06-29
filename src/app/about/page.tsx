import PageLayout from "@/components/PageLayout";
import About from "@/components/About";
import VisionMission from "@/components/VisionMission";
import Leadership from "@/components/Leadership";
import GlobalPresence from "@/components/GlobalPresence";

export default function AboutPage() {
  return (
    <PageLayout>
      <About />
      <VisionMission />
      <Leadership />
      <GlobalPresence />
    </PageLayout>
  );
}
