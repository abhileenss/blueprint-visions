import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { TrendingUp, Infinity as InfinityIcon, Zap, Award } from "lucide-react";

interface Benefit {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const benefits: Benefit[] = [
  {
    icon: <TrendingUp className="w-7 h-7" />,
    title: "Pre-Sell Your Vision",
    description: "Market and sell properties months or even years before they are built. Create powerful emotional connections with buyers using visuals they can see and feel."
  },
  {
    icon: <InfinityIcon className="w-7 h-7" />,
    title: "Unlimited Content, Zero Hassle",
    description: "Generate an entire library of marketing assets for every platform—from social media snippets to investor presentations—without a single day of on-site shooting."
  },
  {
    icon: <Zap className="w-7 h-7" />,
    title: "Unmatched Speed & Efficiency",
    description: "Receive a full suite of professional, broadcast-quality videos in days, not months. Launch campaigns faster and dominate the market."
  },
  {
    icon: <Award className="w-7 h-7" />,
    title: "Superior Quality & Impact",
    description: "Our AI, combined with creative oversight, produces visuals that are more compelling and polished than traditional videography, ensuring your project stands out."
  }
];

const BenefitCard = ({ benefit, index }: { benefit: Benefit; index: number }) => {
  const itemRef = useRef(null);
  const itemInView = useInView(itemRef, { once: true, margin: "-50px" });
  
  return (
    <motion.div
      ref={itemRef}
      initial={{ opacity: 0, y: 40 }}
      animate={itemInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ 
        duration: 0.7, 
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1] 
      }}
      className="group"
    >
      <div className="relative p-8 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-500 hover:border-blueprint/30 hover:shadow-glow-blue">
        {/* Icon */}
        <div className="mb-6 w-14 h-14 rounded-xl bg-blueprint/10 flex items-center justify-center text-blueprint transition-transform duration-300 group-hover:scale-110">
          {benefit.icon}
        </div>
        
        {/* Content */}
        <h3 className="font-serif-display text-2xl font-medium text-foreground mb-4">
          {benefit.title}
        </h3>
        <p className="font-sans-body text-muted-foreground leading-relaxed">
          {benefit.description}
        </p>
        
        {/* Decorative corner accent */}
        <div className="absolute top-0 right-0 w-24 h-24 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <path
              d="M 100 0 L 100 20 Q 100 0 80 0"
              fill="none"
              stroke="hsl(210 85% 55%)"
              strokeWidth="1"
              opacity="0.3"
            />
          </svg>
        </div>
      </div>
    </motion.div>
  );
};

const BenefitsSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  
  return (
    <section 
      id="benefits"
      className="relative py-24 md:py-32 overflow-hidden"
      ref={sectionRef}
    >
      {/* Background with darker tone for contrast */}
      <div className="absolute inset-0 bg-background" />
      <div 
        className="absolute inset-0" 
        style={{
          background: "linear-gradient(135deg, hsl(210 85% 55% / 0.03) 0%, transparent 50%, hsl(38 92% 55% / 0.02) 100%)"
        }}
      />
      
      {/* Decorative elements */}
      <motion.div
        className="absolute top-20 right-20 w-64 h-64 rounded-full"
        style={{
          background: "radial-gradient(circle, hsl(210 85% 55% / 0.08) 0%, transparent 70%)"
        }}
        animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <div className="relative z-10 container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16 md:mb-20"
        >
          <p className="font-sans-body text-sm uppercase tracking-widest text-blueprint mb-4">
            The New Standard in Real Estate Marketing
          </p>
          <h2 className="font-serif-display text-4xl md:text-5xl lg:text-6xl font-medium text-foreground">
            Market Smarter,{" "}
            <span className="text-gradient-blue">Sell Faster.</span>
          </h2>
        </motion.div>
        
        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <BenefitCard key={benefit.title} benefit={benefit} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
