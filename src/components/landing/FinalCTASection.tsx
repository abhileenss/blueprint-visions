import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import heroImage from "@/assets/hero-blueprint-transformation.jpg";

const FinalCTASection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  
  const [formData, setFormData] = useState({
    fullName: "",
    companyEmail: "",
    phoneNumber: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "Demo Request Submitted",
      description: "Thank you! Our team will reach out to you shortly to schedule your personalized demo.",
    });
    
    setFormData({ fullName: "", companyEmail: "", phoneNumber: "" });
    setIsSubmitting(false);
  };
  
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
              Ready to See the{" "}
              <span className="text-gradient-amber">Future?</span>
            </h2>
            <p className="font-sans-body text-lg text-muted-foreground leading-relaxed mb-8">
              Schedule a personalized demo to see how our AI can transform your project materials into a powerful sales and marketing engine.
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
          
          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <form 
              onSubmit={handleSubmit}
              className="relative bg-card/80 backdrop-blur-md rounded-2xl p-8 md:p-10 border border-border/50 shadow-card"
            >
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-32 h-32 overflow-hidden rounded-tr-2xl">
                <div className="absolute top-4 right-4 w-16 h-16 border-t-2 border-r-2 border-amber-golden/30 rounded-tr-xl" />
              </div>
              
              <div className="space-y-6">
                {/* Full Name */}
                <div className="space-y-2">
                  <Label 
                    htmlFor="fullName" 
                    className="font-sans-body text-sm font-medium text-foreground"
                  >
                    Full Name
                  </Label>
                  <Input
                    id="fullName"
                    name="fullName"
                    type="text"
                    placeholder="John Smith"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="h-12 bg-background/50 border-border/70 text-foreground placeholder:text-muted-foreground/50 focus:border-amber-golden focus:ring-amber-golden/20"
                  />
                </div>
                
                {/* Company Email */}
                <div className="space-y-2">
                  <Label 
                    htmlFor="companyEmail" 
                    className="font-sans-body text-sm font-medium text-foreground"
                  >
                    Company Email
                  </Label>
                  <Input
                    id="companyEmail"
                    name="companyEmail"
                    type="email"
                    placeholder="john@yourcompany.com"
                    value={formData.companyEmail}
                    onChange={handleChange}
                    required
                    className="h-12 bg-background/50 border-border/70 text-foreground placeholder:text-muted-foreground/50 focus:border-amber-golden focus:ring-amber-golden/20"
                  />
                  <p className="text-xs text-muted-foreground/70">
                    Please use your business email address
                  </p>
                </div>
                
                {/* Phone Number */}
                <div className="space-y-2">
                  <Label 
                    htmlFor="phoneNumber" 
                    className="font-sans-body text-sm font-medium text-foreground"
                  >
                    Phone Number
                  </Label>
                  <Input
                    id="phoneNumber"
                    name="phoneNumber"
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    required
                    className="h-12 bg-background/50 border-border/70 text-foreground placeholder:text-muted-foreground/50 focus:border-amber-golden focus:ring-amber-golden/20"
                  />
                </div>
                
                {/* Submit Button */}
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className="pt-4"
                >
                  <Button
                    type="submit"
                    variant="cta"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <motion.span
                          className="w-4 h-4 border-2 border-current border-t-transparent rounded-full"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        />
                        Submitting...
                      </span>
                    ) : (
                      "Request a Demo"
                    )}
                  </Button>
                </motion.div>
              </div>
            </form>
            
            {/* Trust signal */}
            <p className="text-center text-xs text-muted-foreground/60 mt-6">
              Your information is secure and will never be shared with third parties.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
