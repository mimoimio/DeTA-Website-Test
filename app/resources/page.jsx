import Header from "@/components/Header";
import Link from "next/link";
import Footer from "@/components/Footer";
import Image from "next/image";
import Resources from "@/components/Resources";
import { getResourcesData } from "@/utils/getResourcesData";

export const dynamic = 'force-dynamic';

export default function ResourcesPage() {
  const resourcesData = getResourcesData();

  return (
    <>
      <Header />
      <Resources resourcesData={resourcesData} />
      <Footer />
    </>
  );
}
