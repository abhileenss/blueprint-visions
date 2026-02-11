import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import nivedanImage from "@/assets/_M1A1269.JPG";

const TeamSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const highlights = [
    "Grew Future & AI to 700,000+ followers & 200M+ views in 24 months",
    "Spoken at 70+ events & conferences about demystifying AI for leaders",
    "Consulted for listed companies for their GenAI strategy & upskilling",
    "Built a vision AI product & raised funds for it in 2017-18",
    "Hosted dozens of podcasts with leading global business & technology figures"
  ];

  return (
    <section
      className="relative py-24 md:py-32 overflow-hidden bg-card/30"
      ref={sectionRef}
    >
      <div className="absolute inset-0 bg-blueprint-grid opacity-10" />

      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-16"
          >
            <p className="font-sans-body text-sm uppercase tracking-wider text-amber-golden mb-4">
              Trusted by the credAI Leadership
            </p>
            <h2 className="font-serif-display text-4xl md:text-5xl lg:text-6xl font-medium text-foreground">
              Meet the <span className="text-gradient-amber">Team</span>
            </h2>
          </motion.div>

          {/* Team Member Profile */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
                <img
                  src={nivedanImage}
                  alt="Nivedan Rathi speaking at Future & AI event"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              </div>

              {/* Decorative corner accent */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-amber-golden/30 rounded-tr-2xl" />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-amber-golden/30 rounded-bl-2xl" />
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-6"
            >
              {/* Name and Title */}
              <div>
                <h3 className="font-serif-display text-3xl md:text-4xl font-medium text-foreground mb-2">
                  Nivedan Rathi
                </h3>
                <p className="font-sans-body text-lg text-amber-golden">
                  Future & AI
                </p>
                <p className="font-sans-body text-sm text-muted-foreground mt-1">
                  IIT Bombay Alumnus • Ex-Founding Member • Responsible AI Adoption Evangelist
                </p>
              </div>

              {/* Bio */}
              <p className="font-sans-body text-base leading-relaxed text-muted-foreground">
                As a founding member & the product lead of several tech startups, I've built cutting-edge tech products for over a decade. I now lead Future & AI where we create content to demystify Generative AI and share ways for leaders & entrepreneurs to leverage it to automate their workflows & multiply their business impact. I have also launched the APE (AI-Powered Entrepreneurs) community in partnership with LLA to help founders grow their business, network, and use AI to scale it.
              </p>

              {/* Key Highlights */}
              <div className="space-y-3 pt-4">
                <h4 className="font-sans-body text-sm font-semibold uppercase tracking-wider text-foreground">
                  Key Highlights
                </h4>
                {highlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-golden flex-shrink-0 mt-2" />
                    <p className="font-sans-body text-sm text-muted-foreground leading-relaxed">
                      {highlight}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Mission Statement */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="pt-6 border-t border-border/30"
              >
                <h4 className="font-sans-body text-sm font-semibold uppercase tracking-wider text-foreground mb-3">
                  Mission
                </h4>
                <p className="font-sans-body text-base leading-relaxed text-foreground/90 italic">
                  "To democratize access to Generative AI's transformative power, bridging the gap between cutting-edge capabilities and practical business applications."
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
