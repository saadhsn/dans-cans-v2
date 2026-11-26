import Hero from "@/components/sections/Hero";
import HowItWorks from "@/components/sections/HowItWorks";
import About from "@/components/sections/About";
import SizeGrid from "@/components/sections/SizeGrid";
import ProhibitedItems from "@/components/sections/ProhibitedItems";
import FAQ from "@/components/sections/FAQ";
import Testimonials from "@/components/sections/Testimonials";
import ServiceArea from "@/components/sections/ServiceArea";
import ProjectGallery from "@/components/sections/ProjectGallery";
import JunkRemovalPromo from "@/components/sections/JunkRemovalPromo";

export default function Home() {
  return (
    <main className="relative">
      {/* 1. IMPACT: Hero Area */}
      <Hero />
      
      {/* 2. PROCESS: How It Works */}
      <HowItWorks />

      {/* New service: junk removal */}
      <JunkRemovalPromo />

      {/* 3. TRUST: The Local Story */}
      <About />
      
      {/* 4. SELECTION: Sizes & Pricing */}
      <SizeGrid />
      
      {/* 5. RULES: Prohibited Items */}
      <ProhibitedItems />

      {/* 6. PROOF: Testimonials */}
      <Testimonials />

      {/* 7. AREA: Service Coverage */}
      <ServiceArea />
      
      {/* 8. SUPPORT: FAQ */}
      <FAQ />

      {/* 9. GALLERY: Project Photos */}
      <ProjectGallery />
    </main>
  );
}
