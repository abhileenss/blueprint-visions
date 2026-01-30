import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";

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
    
    // Simulate form submission
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
      {/* Background with warm amber glow */}
      <div className="absolute inset-0 bg-background" />
      <div 
        className="absolute inset-0" 
        style={{
          background: "radial-gradient(ellipse at center bottom, hsl(38 92% 55% / 0.08) 0%, transparent 60%)"
        }}
      />
      
      {/* Decorative elements */}
      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px]"
        style={{
          background: "radial-gradient(ellipse at center, hsl(38 92% 55% / 0.06) 0%, transparent 70%)"
        }}
        animate={{ opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-12"
          >
            <h2 className="font-serif-display text-4xl md:text-5xl lg:text-6xl font-medium text-foreground mb-6">
              Ready to See the{" "}
              <span className="text-gradient-amber">Future?</span>
            </h2>
            <p className="font-sans-body text-lg text-muted-foreground leading-relaxed">
              Schedule a personalized demo to see how our AI can transform your project materials into a powerful sales and marketing engine.
            </p>
          </motion.div>
          
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <form 
              onSubmit={handleSubmit}
              className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-border/50 shadow-card"
            >
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
                    className="h-12 bg-background/50 border-border/70 text-foreground placeholder:text-muted-foreground/50 focus:border-blueprint focus:ring-blueprint/20"
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
                    className="h-12 bg-background/50 border-border/70 text-foreground placeholder:text-muted-foreground/50 focus:border-blueprint focus:ring-blueprint/20"
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
                    className="h-12 bg-background/50 border-border/70 text-foreground placeholder:text-muted-foreground/50 focus:border-blueprint focus:ring-blueprint/20"
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
          </motion.div>
          
          {/* Trust signal */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center text-xs text-muted-foreground/60 mt-6"
          >
            Your information is secure and will never be shared with third parties.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
