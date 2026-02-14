import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles, Users, TrendingUp, Mic, Award } from "lucide-react";

const nivedanImage = "/_M1A1281.JPG";

const TeamSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const stats = [
    { icon: Users, number: "700K+", label: "Followers" },
    { icon: TrendingUp, number: "200M+", label: "Views" },
    { icon: Award, number: "70+", label: "Events" },
  ];

  const achievements = [
    {
      icon: TrendingUp,
      title: "Built India's Largest GenAI Platform",
      description: "Grew Future & AI to 700K+ followers & 200M+ views in just 24 months"
    },
    {
      icon: Mic,
      title: "Thought Leader & Speaker",
      description: "Spoken at 70+ events demystifying AI for business leaders"
    },
    {
      icon: Sparkles,
      title: "Strategic Consultant",
      description: "Advised listed companies on GenAI strategy & upskilling initiatives"
    },
    {
      icon: Award,
      title: "Innovation Pioneer",
      description: "Built and raised funds for a vision AI product in 2017-18"
    }
  ];

  return (
    <section
      className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-b from-card/30 to-background"
      ref={sectionRef}
    >
      <div className="absolute inset-0 bg-blueprint-grid opacity-5" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-amber-golden/5 rounded-full blur-3xl" />

      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-12 md:mb-16"
          >
            <p className="font-sans-body text-xs md:text-sm uppercase tracking-widest text-amber-golden mb-3">
              Trusted by the credAI Leadership
            </p>
            <h2 className="font-serif-display text-4xl md:text-5xl lg:text-6xl font-medium text-foreground">
              Meet the <span className="text-gradient-amber">Visionary</span>
            </h2>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Column - Image & Stats */}
            <div className="lg:col-span-5 space-y-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="relative group"
              >
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-amber-golden/20">
                  <img
                    src={nivedanImage}
                    alt="Nivedan Rathi speaking at Future & AI event"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                </div>
                <div className="absolute -bottom-3 -right-3 w-full h-full border border-amber-golden/30 rounded-2xl -z-10" />
              </motion.div>

              {/* Stats Cards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="grid grid-cols-3 gap-4"
              >
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div
                      key={index}
                      className="relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-4 text-center group hover:border-amber-golden/50 transition-colors"
                    >
                      <Icon className="w-5 h-5 text-amber-golden mx-auto mb-2" />
                      <div className="font-serif-display text-2xl font-bold text-foreground mb-1">
                        {stat.number}
                      </div>
                      <div className="font-sans-body text-xs text-muted-foreground">
                        {stat.label}
                      </div>
                    </div>
                  );
                })}
              </motion.div>
            </div>

            {/* Right Column - Content */}
            <div className="lg:col-span-7 space-y-8">
              {/* Name and Title */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h3 className="font-serif-display text-4xl md:text-5xl font-bold text-foreground mb-3">
                  Nivedan Rathi
                </h3>
                <p className="font-sans-body text-xl md:text-2xl text-amber-golden font-medium mb-2">
                  Founder, Future & AI
                </p>
                <p className="font-sans-body text-sm text-muted-foreground">
                  IIT Bombay Alumnus • Tech Startup Veteran • AI Evangelist
                </p>
              </motion.div>

              {/* Mission Statement - Highlighted */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="relative bg-gradient-to-br from-amber-golden/10 to-amber-golden/5 border border-amber-golden/20 rounded-2xl p-6 md:p-8"
              >
                <div className="absolute top-4 left-4 text-amber-golden/20 text-6xl font-serif-display">"</div>
                <p className="font-sans-body text-lg md:text-xl leading-relaxed text-foreground relative z-10 pl-8">
                  To democratize access to Generative AI's transformative power, bridging the gap between cutting-edge capabilities and practical business applications.
                </p>
              </motion.div>

              {/* Achievements Grid */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="grid md:grid-cols-2 gap-4"
              >
                {achievements.map((achievement, index) => {
                  const Icon = achievement.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                      className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-xl p-5 hover:border-amber-golden/30 transition-all group"
                    >
                      <Icon className="w-6 h-6 text-amber-golden mb-3 group-hover:scale-110 transition-transform" />
                      <h4 className="font-sans-body text-sm font-bold text-foreground mb-2 leading-tight">
                        {achievement.title}
                      </h4>
                      <p className="font-sans-body text-xs text-muted-foreground leading-relaxed">
                        {achievement.description}
                      </p>
                    </motion.div>
                  );
                })}
              </motion.div>

              {/* Experience Summary */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="border-t border-border/30 pt-6"
              >
                <p className="font-sans-body text-sm md:text-base leading-relaxed text-muted-foreground">
                  With over a decade as a founding member and product lead at multiple tech startups, Nivedan now leads <span className="text-foreground font-medium">Future & AI</span>, demystifying Generative AI for leaders and entrepreneurs. He founded the <span className="text-foreground font-medium">APE (AI-Powered Entrepreneurs)</span> community with LLA, helping founders scale using AI, and hosts podcasts featuring global business and technology leaders.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
