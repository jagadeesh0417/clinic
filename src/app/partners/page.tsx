import PageLayout from "@/components/PageLayout";
import ExistingPartners from "@/components/ExistingPartners";
import GlobalPresence from "@/components/GlobalPresence";

export default function PartnersPage() {
  return (
    <PageLayout>
      <ExistingPartners />
      <GlobalPresence />
    </PageLayout>
  );
}
