import PageLayout from "@/components/PageLayout";
import Membership from "@/components/Membership";
import SpecialOffers from "@/components/SpecialOffers";
import WhyChoose from "@/components/WhyChoose";

export default function MembershipPage() {
  return (
    <PageLayout>
      <Membership />
      <SpecialOffers />
      <WhyChoose />
    </PageLayout>
  );
}
