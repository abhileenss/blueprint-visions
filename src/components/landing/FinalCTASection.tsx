import { motion, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import heroImage from "@/assets/hero-blueprint-transformation.jpg";

const FinalCTASection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://static.zcal.co/embed/v1/embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  
  return (
    <section 
      id="demo-form"
      className="relative py-24 md:py-32 overflow-hidden"
      ref={sectionRef}
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Background"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-background/90" />
        <div 
          className="absolute inset-0" 
          style={{
            background: "radial-gradient(ellipse at center, hsl(38 92% 55% / 0.08) 0%, transparent 60%)"
          }}
        />
      </div>
      
      <div className="relative z-10 container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="font-serif-display text-4xl md:text-5xl lg:text-6xl font-medium text-foreground mb-6 leading-tight">
              Schedule a{" "}
              <span className="text-gradient-amber">Meeting</span>
            </h2>
            <p className="font-sans-body text-lg text-muted-foreground leading-relaxed mb-8">
              Book a 30-minute meeting to discuss how our AI can transform your project materials into a powerful sales and marketing engine.
            </p>
            
            {/* Feature highlights */}
            <div className="space-y-4">
              {[
                "See your floor plans come to life in minutes",
                "Get a custom video portfolio tailored to your project",
                "Learn how to pre-sell before construction begins"
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-5 h-5 rounded-full bg-amber-golden/20 flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-amber-golden" />
                  </div>
                  <p className="font-sans-body text-muted-foreground">{feature}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative bg-card/80 backdrop-blur-md rounded-2xl p-8 md:p-10 border border-border/50 shadow-card">
              <div className="absolute top-0 right-0 w-32 h-32 overflow-hidden rounded-tr-2xl">
                <div className="absolute top-4 right-4 w-16 h-16 border-t-2 border-r-2 border-amber-golden/30 rounded-tr-xl" />
              </div>

              <div className="zcal-inline-widget">
                <a href="https://zcal.co/i/zUHkgnG4">30 Minute Meeting - Schedule a meeting</a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
