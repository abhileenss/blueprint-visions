import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-blueprint-transformation.jpg";

const HeroSection = () => {
  const scrollToForm = () => {
    document.getElementById("demo-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Blueprint to reality transformation"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/60 to-background" />
      </div>
      
      {/* Blueprint grid overlay */}
      <div className="absolute inset-0 bg-blueprint-grid opacity-30" />
      
      {/* Animated blueprint lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg
          className="absolute inset-0 w-full h-full opacity-40"
          viewBox="0 0 1920 1080"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient id="blueprintGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(210 85% 55%)" stopOpacity="0.2" />
              <stop offset="50%" stopColor="hsl(210 85% 55%)" stopOpacity="0.4" />
              <stop offset="100%" stopColor="hsl(210 85% 55%)" stopOpacity="0.15" />
            </linearGradient>
          </defs>
          
          {/* Animated corner accents */}
          <motion.path
            d="M 0 200 L 0 0 L 200 0"
            fill="none"
            stroke="url(#blueprintGradient)"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 0.5 }}
          />
          <motion.path
            d="M 1920 200 L 1920 0 L 1720 0"
            fill="none"
            stroke="url(#blueprintGradient)"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 0.7 }}
          />
        </svg>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl mx-auto"
        >
          {/* Headline */}
          <h1 className="font-serif-display text-5xl md:text-6xl lg:text-7xl font-medium text-foreground mb-8 leading-[1.1] tracking-tight">
            See Your Vision,{" "}
            <span className="text-gradient-blue">AI-Built.</span>{" "}
            Instantly.
          </h1>
          
          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="font-sans-body text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            We transform your floor plans, brochures, and photos into a complete portfolio of stunning, sales-driving videos. No shoots, no delays, just pure digital magic.
          </motion.p>
          
          {/* Primary CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <Button
              onClick={scrollToForm}
              variant="hero"
              size="lg"
              className="group"
            >
              <span>Explore AI Video Solutions</span>
              <motion.span
                className="ml-2 inline-block"
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                →
              </motion.span>
            </Button>
          </motion.div>
        </motion.div>
        
        {/* Visual indicator to scroll */}
        <motion.div
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <motion.div
            className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="w-1 h-2 rounded-full bg-blueprint" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
