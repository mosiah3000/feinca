import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Catalog from "@/components/Catalog";
import SolarSection from "@/components/SolarSection";
import Branches from "@/components/Branches";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Catalog />
        <SolarSection />
        <Branches />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
