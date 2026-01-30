import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { TrendingUp, Infinity as InfinityIcon, Zap, Award, ArrowRight } from "lucide-react";
import beforeAfterImg from "@/assets/before-after.jpg";

interface Benefit {
  icon: React.ReactNode;
  title: string;
  description: string;
  stat?: string;
  statLabel?: string;
}

const benefits: Benefit[] = [
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: "Pre-Sell Your Vision",
    description: "Market and sell properties months or even years before they are built. Create powerful emotional connections with buyers using visuals they can see and feel.",
    stat: "Months",
    statLabel: "Before Construction"
  },
  {
    icon: <InfinityIcon className="w-8 h-8" />,
    title: "Unlimited Content, Zero Hassle",
    description: "Generate an entire library of marketing assets for every platform—from social media snippets to investor presentations—without a single day of on-site shooting.",
    stat: "∞",
    statLabel: "Content Variations"
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Unmatched Speed & Efficiency",
    description: "Receive a full suite of professional, broadcast-quality videos in days, not months. Launch campaigns faster and dominate the market.",
    stat: "Days",
    statLabel: "Not Months"
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: "Superior Quality & Impact",
    description: "Our AI, combined with creative oversight, produces visuals that are more compelling and polished than traditional videography, ensuring your project stands out.",
    stat: "10x",
    statLabel: "More Polished"
  }
];

const BenefitsSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  
  return (
    <section 
      id="benefits"
      className="relative py-24 md:py-32 overflow-hidden"
      ref={sectionRef}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-background" />
      
      <div className="relative z-10 container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <p className="font-sans-body text-sm uppercase tracking-widest text-blueprint mb-4">
            The New Standard in Real Estate Marketing
          </p>
          <h2 className="font-serif-display text-4xl md:text-5xl lg:text-6xl font-medium text-foreground">
            Market Smarter,{" "}
            <span className="text-gradient-blue">Sell Faster.</span>
          </h2>
        </motion.div>
        
        {/* Hero visual - Before/After */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative mb-20"
        >
          <div className="relative rounded-2xl overflow-hidden">
            <img 
              src={beforeAfterImg} 
              alt="Before and After Virtual Staging"
              className="w-full h-64 md:h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/80" />
            
            {/* Labels */}
            <div className="absolute inset-0 flex">
              <div className="w-1/2 flex items-center justify-center">
                <div className="text-center">
                  <p className="font-sans-body text-sm uppercase tracking-wider text-muted-foreground mb-2">Before</p>
                  <p className="font-serif-display text-2xl md:text-3xl font-medium text-foreground">Empty Space</p>
                </div>
              </div>
              <div className="w-1/2 flex items-center justify-center">
                <div className="text-center">
                  <p className="font-sans-body text-sm uppercase tracking-wider text-blueprint mb-2">After</p>
                  <p className="font-serif-display text-2xl md:text-3xl font-medium text-foreground">Dream Home</p>
                </div>
              </div>
            </div>
            
            {/* Center arrow */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                className="w-16 h-16 rounded-full bg-blueprint flex items-center justify-center shadow-glow-blue"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <ArrowRight className="w-8 h-8 text-white" />
              </motion.div>
            </div>
          </div>
          
          {/* Decorative frame */}
          <div className="absolute -inset-3 border border-blueprint/10 rounded-3xl -z-10" />
        </motion.div>
        
        {/* Benefits grid with stats */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.7, delay: 0.4 + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group relative"
            >
              <div className="relative p-6 lg:p-8 rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm overflow-hidden transition-all duration-500 hover:border-blueprint/40 hover:bg-card/50">
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-blueprint opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10 flex gap-6">
                  {/* Stat circle */}
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 rounded-2xl bg-muted/50 flex flex-col items-center justify-center border border-border/50 group-hover:border-blueprint/30 transition-colors duration-500">
                      <span className="font-serif-display text-2xl font-bold text-blueprint">{benefit.stat}</span>
                      <span className="text-xs text-muted-foreground text-center leading-tight">{benefit.statLabel}</span>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="text-blueprint">
                        {benefit.icon}
                      </div>
                      <h3 className="font-serif-display text-xl font-medium text-foreground">
                        {benefit.title}
                      </h3>
                    </div>
                    <p className="font-sans-body text-muted-foreground leading-relaxed text-sm">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
