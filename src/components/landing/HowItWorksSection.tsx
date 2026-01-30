import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Upload, Cpu, Rocket, FileImage, Sparkles, Play } from "lucide-react";
import investorImg from "@/assets/investor-vision.jpg";

interface Step {
  number: string;
  icon: React.ReactNode;
  secondaryIcon: React.ReactNode;
  title: string;
  description: string;
  visual: string;
}

const steps: Step[] = [
  {
    number: "01",
    icon: <Upload className="w-10 h-10" />,
    secondaryIcon: <FileImage className="w-6 h-6" />,
    title: "Provide Your Assets",
    description: "Share your project brochure, floor plans, and any existing photos or renders.",
    visual: "Upload"
  },
  {
    number: "02",
    icon: <Cpu className="w-10 h-10" />,
    secondaryIcon: <Sparkles className="w-6 h-6" />,
    title: "AI-Powered Creation",
    description: "Our proprietary AI engine, guided by creative experts, generates your complete video portfolio.",
    visual: "Process"
  },
  {
    number: "03",
    icon: <Rocket className="w-10 h-10" />,
    secondaryIcon: <Play className="w-6 h-6" />,
    title: "Launch & Dominate",
    description: "Receive your full suite of video assets, ready to deploy across all your marketing channels.",
    visual: "Launch"
  }
];

const HowItWorksSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  
  return (
    <section 
      id="how-it-works"
      className="relative py-24 md:py-32 overflow-hidden"
      ref={sectionRef}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-charcoal-deep" />
      
      <div className="relative z-10 container mx-auto px-6">
        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Content */}
          <div>
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="mb-12"
            >
              <h2 className="font-serif-display text-4xl md:text-5xl font-medium text-foreground mb-4">
                Your Vision, Realized in{" "}
                <span className="text-gradient-blue">3 Simple Steps.</span>
              </h2>
            </motion.div>
            
            {/* Steps - Vertical timeline */}
            <div className="relative">
              {/* Vertical line */}
              <motion.div
                className="absolute left-6 top-0 bottom-0 w-[2px] bg-gradient-to-b from-blueprint via-blueprint/50 to-blueprint/10"
                initial={{ scaleY: 0 }}
                animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
                transition={{ duration: 1.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                style={{ transformOrigin: "top" }}
              />
              
              <div className="space-y-8">
                {steps.map((step, index) => (
                  <motion.div
                    key={step.number}
                    initial={{ opacity: 0, x: -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                    transition={{ duration: 0.7, delay: 0.4 + index * 0.2, ease: [0.22, 1, 0.36, 1] }}
                    className="relative pl-16"
                  >
                    {/* Step indicator */}
                    <div className="absolute left-0 top-0">
                      <motion.div
                        className="w-12 h-12 rounded-xl bg-blueprint/20 border border-blueprint/50 flex items-center justify-center"
                        whileHover={{ scale: 1.1, backgroundColor: "hsl(210 85% 55% / 0.3)" }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <span className="font-sans-body text-lg font-bold text-blueprint">{step.number}</span>
                      </motion.div>
                    </div>
                    
                    {/* Content card */}
                    <div className="bg-card/30 backdrop-blur-sm rounded-xl p-5 border border-border/30 hover:border-blueprint/30 transition-colors duration-500">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-muted/50 flex items-center justify-center text-blueprint flex-shrink-0">
                          {step.icon}
                        </div>
                        <div>
                          <h3 className="font-serif-display text-xl font-medium text-foreground mb-2">
                            {step.title}
                          </h3>
                          <p className="font-sans-body text-muted-foreground leading-relaxed text-sm">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Right: Visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Main image */}
            <div className="relative rounded-2xl overflow-hidden">
              <img 
                src={investorImg} 
                alt="Investor viewing holographic building visualization"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
              
              {/* Floating UI elements */}
              <motion.div
                className="absolute bottom-8 left-8 right-8 bg-card/90 backdrop-blur-md rounded-xl p-4 border border-blueprint/30"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-blueprint flex items-center justify-center">
                    <Play className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="font-sans-body text-sm font-medium text-foreground">Your Video Portfolio</p>
                    <p className="font-sans-body text-xs text-muted-foreground">12 videos • Ready to deploy</p>
                  </div>
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-blueprint animate-pulse" />
                    <div className="w-2 h-2 rounded-full bg-blueprint/60 animate-pulse delay-100" />
                    <div className="w-2 h-2 rounded-full bg-blueprint/30 animate-pulse delay-200" />
                  </div>
                </div>
              </motion.div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -inset-4 border border-blueprint/10 rounded-3xl -z-10" />
            <motion.div
              className="absolute -top-8 -right-8 w-32 h-32 rounded-full"
              style={{ background: "radial-gradient(circle, hsl(210 85% 55% / 0.15) 0%, transparent 70%)" }}
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
