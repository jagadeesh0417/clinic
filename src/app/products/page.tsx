import PageLayout from "@/components/PageLayout";
import Products from "@/components/Products";
import RevenueModel from "@/components/RevenueModel";

export default function ProductsPage() {
  return (
    <PageLayout>
      <Products />
      <RevenueModel />
    </PageLayout>
  );
}
