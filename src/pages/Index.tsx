import HeroSection from "@/components/landing/HeroSection";
import OfferingsSection from "@/components/landing/OfferingsSection";
import BenefitsSection from "@/components/landing/BenefitsSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import FinalCTASection from "@/components/landing/FinalCTASection";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <HeroSection />
      <OfferingsSection />
      <BenefitsSection />
      <HowItWorksSection />
      <FinalCTASection />
      
      {/* Footer */}
      <footer className="py-8 border-t border-border/30">
        <div className="container mx-auto px-6 text-center">
          <p className="font-sans-body text-sm text-muted-foreground">
            © {new Date().getFullYear()} AI Real Estate Video. Transforming visions into reality.
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Index;
