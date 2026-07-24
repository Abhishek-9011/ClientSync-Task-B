import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import WhyChoose from "@/components/sections/WhyChoose";
import LeadForm from "@/components/sections/LeadForm";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <WhyChoose />
        <LeadForm />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
