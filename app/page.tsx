import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MarqueeBanner from "@/components/MarqueeBanner";
import HowItWorks from "@/components/HowItWorks";
import Stats from "@/components/Stats";
import DriverCTA from "@/components/DriverCTA";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import BikeOwner from "@/components/BikeOwner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <MarqueeBanner />
        <HowItWorks />
        <Stats />
        <DriverCTA />
        <Features />
        <Testimonials />
        <BikeOwner />
      </main>
      <Footer />
    </>
  );
}
