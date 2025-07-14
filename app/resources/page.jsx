import Header from "@/components/Header";
import Link from "next/link";
import Footer from "@/components/Footer";
import Image from "next/image";
import Resources from "@/components/Resources";
import { getResourcesData } from "@/utils/getResourcesData";

export default function About() {
  const resourcesData = getResourcesData();

  return (
    <>
      <Header />

      {/* Main Section */}
      <Resources resourcesData={resourcesData} />
      <Footer />
    </>
  );
}