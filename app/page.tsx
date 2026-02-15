import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MarqueeBanner from "@/components/MarqueeBanner";
import HowItWorks from "@/components/HowItWorks";
import Stats from "@/components/Stats";
import Features from "@/components/Features";
import DriverCTA from "@/components/DriverCTA";
import Testimonials from "@/components/Testimonials";
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
        <Features />
        <DriverCTA />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
