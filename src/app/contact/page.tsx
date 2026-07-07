import PageLayout from "@/components/PageLayout";
import ContactInfo from "@/components/ContactInfo";
import AppointmentForm from "@/components/AppointmentForm";
import FinalCTA from "@/components/FinalCTA";
import GlobalPresence from "@/components/GlobalPresence";

export default function ContactPage() {
  return (
    <PageLayout>
      <ContactInfo />
      <AppointmentForm />
      <FinalCTA />
      <GlobalPresence />
    </PageLayout>
  );
}
