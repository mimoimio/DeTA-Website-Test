import Header from "@/components/Header";
import Link from "next/link";
import Footer from "@/components/Footer";
import Image from "next/image";
import Resources from "@/components/Resources";

export default function About() {
  return (
    <>
      <Header />

      {/* Main Section */}
      <Resources />
      <Footer />
    </>
  );
}