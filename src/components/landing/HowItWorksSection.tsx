import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Upload, Cpu, Rocket } from "lucide-react";

interface Step {
  number: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    number: "01",
    icon: <Upload className="w-8 h-8" />,
    title: "Provide Your Assets",
    description: "Share your project brochure, floor plans, and any existing photos or renders."
  },
  {
    number: "02",
    icon: <Cpu className="w-8 h-8" />,
    title: "AI-Powered Creation",
    description: "Our proprietary AI engine, guided by creative experts, generates your complete video portfolio."
  },
  {
    number: "03",
    icon: <Rocket className="w-8 h-8" />,
    title: "Launch & Dominate",
    description: "Receive your full suite of video assets, ready to deploy across all your marketing channels."
  }
];

const StepCard = ({ step, index, isInView }: { step: Step; index: number; isInView: boolean }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.2,
        ease: [0.22, 1, 0.36, 1] 
      }}
      className="relative text-center lg:text-left"
    >
      {/* Step Number & Icon Container */}
      <div className="flex flex-col items-center lg:items-start mb-6">
        {/* Icon Circle */}
        <motion.div
          className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-blueprint/20 to-blueprint/5 border border-blueprint/30 flex items-center justify-center text-blueprint mb-4"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {step.icon}
          
          {/* Glow effect */}
          <div className="absolute inset-0 rounded-2xl bg-blueprint/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
        </motion.div>
        
        {/* Step Number */}
        <span className="font-sans-body text-xs font-medium tracking-widest text-blueprint/60 uppercase">
          Step {step.number}
        </span>
      </div>
      
      {/* Content */}
      <h3 className="font-serif-display text-2xl font-medium text-foreground mb-3">
        {step.title}
      </h3>
      <p className="font-sans-body text-muted-foreground leading-relaxed max-w-sm mx-auto lg:mx-0">
        {step.description}
      </p>
      
      {/* Mobile Connection Line */}
      {index < steps.length - 1 && (
        <div className="lg:hidden flex justify-center my-8">
          <motion.div
            className="w-[1px] h-12 bg-gradient-to-b from-blueprint/50 to-blueprint/10"
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            style={{ transformOrigin: "top" }}
          />
        </div>
      )}
    </motion.div>
  );
};

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
      <div className="absolute inset-0 bg-blueprint-grid opacity-20" />
      
      <div className="relative z-10 container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="font-serif-display text-4xl md:text-5xl lg:text-6xl font-medium text-foreground">
            Your Vision, Realized in{" "}
            <span className="text-gradient-blue">3 Simple Steps.</span>
          </h2>
        </motion.div>
        
        {/* Steps Container */}
        <div className="relative max-w-6xl mx-auto">
          {/* Connection Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-[1px] -translate-y-1/2">
            <motion.div
              className="h-full bg-gradient-to-r from-blueprint/20 via-blueprint/50 to-blueprint/20"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 1.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              style={{ transformOrigin: "left" }}
            />
          </div>
          
          {/* Steps Grid */}
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-8">
            {steps.map((step, index) => (
              <StepCard key={step.number} step={step} index={index} isInView={isInView} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
