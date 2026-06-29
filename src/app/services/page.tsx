import PageLayout from "@/components/PageLayout";
import Services from "@/components/Services";
import QScan from "@/components/QScan";
import HomeHealthcare from "@/components/HomeHealthcare";
import StaffSupport from "@/components/StaffSupport";

export default function ServicesPage() {
  return (
    <PageLayout>
      <Services />
      <QScan />
      <HomeHealthcare />
      <StaffSupport />
    </PageLayout>
  );
}
