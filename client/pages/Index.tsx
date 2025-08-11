import Header from "../components/Header";
import Hero from "../components/Hero";
import WhatWeDo from "../components/WhatWeDo";
import PricingSection from "../components/PricingSection";
import Testimonial from "../components/Testimonial";
import FeaturesSection from "../components/FeaturesSection";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";

export default function Index() {
  return (
    <div className="min-h-screen bg-white font-figtree">
      <Header />
      <Hero />
      <WhatWeDo />
      <PricingSection />
      <Testimonial />
      <FeaturesSection />
      <CTASection />
      <Footer />
    </div>
  );
}
