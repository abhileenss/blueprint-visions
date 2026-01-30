import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Layers, 
  Palette, 
  Sofa, 
  Video, 
  Sun, 
  Smartphone, 
  Target, 
  Type, 
  MapPin, 
  Building2, 
  Clock, 
  Film, 
  Presentation 
} from "lucide-react";
import walkthroughImg from "@/assets/offering-walkthrough.jpg";
import stagingImg from "@/assets/offering-staging.jpg";
import aerialImg from "@/assets/offering-aerial.jpg";

interface Offering {
  icon: React.ReactNode;
  title: string;
  description: string;
}

// Featured offerings with images
const featuredOfferings = [
  {
    image: walkthroughImg,
    icon: <Video className="w-6 h-6" />,
    title: "Cinematic Unit Walkthroughs",
    description: "Go beyond simple tours. We create emotionally resonant journeys through your properties, complete with dynamic camera movements, lighting, and sound design.",
    category: "Immersive Experiences"
  },
  {
    image: stagingImg,
    icon: <Palette className="w-6 h-6" />,
    title: "Virtual Staging & Restyling",
    description: "Showcase a single space in multiple interior design styles—from modern minimalist to classic luxury. Appeal to a wider range of buyer tastes instantly.",
    category: "Core Visualizations"
  },
  {
    image: aerialImg,
    icon: <MapPin className="w-6 h-6" />,
    title: "Context & Location Tours",
    description: "Show the neighborhood and its key attractions from an aerial perspective. Highlight the convenience and lifestyle benefits of the location.",
    category: "Informational Videos"
  }
];

// Grid offerings organized by category
const offeringGroups = [
  {
    title: "Core Visualizations",
    subtitle: "The Foundation of Your Vision",
    offerings: [
      { icon: <Layers className="w-5 h-5" />, title: "Floorplan to Reality", description: "Witness your 2D floor plans transform into fully furnished, photorealistic 3D apartment mockups." },
      { icon: <Sofa className="w-5 h-5" />, title: "Unfurnished to Furnished", description: "Take empty photos of completed units and instantly furnish them with beautiful, aspirational decor." },
      { icon: <Sun className="w-5 h-5" />, title: "Light, Time & Mood Studies", description: "Showcase your property in its best light, from golden hour sunset to vibrant midday energy." }
    ]
  },
  {
    title: "Marketing & Sales Tools",
    subtitle: "Drive Engagement and Leads",
    offerings: [
      { icon: <Smartphone className="w-5 h-5" />, title: "High-Impact Social Snippets", description: "15-30 second videos perfect for Instagram Reels, TikTok, and YouTube Shorts." },
      { icon: <Target className="w-5 h-5" />, title: "Scroll-Stopping Ad Creatives", description: "Generate a dozen different ad variations in minutes. Test what converts best." },
      { icon: <Type className="w-5 h-5" />, title: "Animated Project Logos", description: "Professional, eye-catching animations for your project's branding." }
    ]
  },
  {
    title: "High-Impact Presentations",
    subtitle: "Secure Investment and Close Deals",
    offerings: [
      { icon: <Film className="w-5 h-5" />, title: "Complete Project Launch Video", description: "A stunning 60-90 second cinematic masterpiece for unforgettable first impressions." },
      { icon: <Presentation className="w-5 h-5" />, title: "Investor Pitch Deck Video", description: "Comprehensive, data-driven presentation that goes beyond spreadsheets." },
      { icon: <Building2 className="w-5 h-5" />, title: "Construction Animation", description: "Visualize the entire construction process from ground up." },
      { icon: <Clock className="w-5 h-5" />, title: "Before & After Timelapses", description: "Dramatic timelapses showing incredible transformations." }
    ]
  }
];

const FeaturedCard = ({ offering, index, isInView }: { offering: typeof featuredOfferings[0]; index: number; isInView: boolean }) => {
  const isReversed = index % 2 === 1;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.8, delay: index * 0.2, ease: [0.22, 1, 0.36, 1] }}
      className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-16 items-center`}
    >
      {/* Image */}
      <div className="w-full lg:w-1/2 relative group">
        <div className="relative overflow-hidden rounded-2xl">
          <motion.img
            src={offering.image}
            alt={offering.title}
            className="w-full h-64 lg:h-80 object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
          
          {/* Category badge */}
          <div className="absolute top-4 left-4 px-3 py-1 bg-blueprint/90 backdrop-blur-sm rounded-full">
            <span className="text-xs font-medium text-white">{offering.category}</span>
          </div>
        </div>
        
        {/* Decorative frame */}
        <div className="absolute -inset-2 border border-blueprint/20 rounded-3xl -z-10 group-hover:border-blueprint/40 transition-colors duration-500" />
      </div>
      
      {/* Content */}
      <div className="w-full lg:w-1/2 space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-blueprint/10 flex items-center justify-center text-blueprint">
            {offering.icon}
          </div>
          <h3 className="font-serif-display text-2xl lg:text-3xl font-medium text-foreground">
            {offering.title}
          </h3>
        </div>
        <p className="font-sans-body text-muted-foreground text-lg leading-relaxed">
          {offering.description}
        </p>
      </div>
    </motion.div>
  );
};

const OfferingGrid = ({ group, isInView, delay }: { group: typeof offeringGroups[0]; isInView: boolean; delay: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-border/50 hover:border-blueprint/30 transition-colors duration-500"
    >
      <div className="mb-6">
        <h3 className="font-serif-display text-xl font-medium text-foreground">{group.title}</h3>
        <p className="text-sm text-blueprint">{group.subtitle}</p>
      </div>
      
      <div className="space-y-4">
        {group.offerings.map((offering, idx) => (
          <div 
            key={offering.title}
            className="flex items-start gap-4 p-3 rounded-lg hover:bg-muted/30 transition-colors duration-300"
          >
            <div className="w-8 h-8 rounded-md bg-blueprint/10 flex items-center justify-center text-blueprint flex-shrink-0 mt-0.5">
              {offering.icon}
            </div>
            <div>
              <h4 className="font-sans-body font-semibold text-foreground text-sm">{offering.title}</h4>
              <p className="font-sans-body text-muted-foreground text-sm leading-relaxed">{offering.description}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

const OfferingsSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  
  return (
    <section 
      id="offerings"
      className="relative py-24 md:py-32 overflow-hidden"
      ref={sectionRef}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-charcoal-deep" />
      <div className="absolute inset-0 bg-blueprint-grid opacity-20" />
      
      {/* Ambient glow */}
      <motion.div
        className="absolute top-1/4 -left-32 w-96 h-96 rounded-full"
        style={{ background: "radial-gradient(circle, hsl(210 85% 55% / 0.1) 0%, transparent 70%)" }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <div className="relative z-10 container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <h2 className="font-serif-display text-4xl md:text-5xl lg:text-6xl font-medium text-foreground mb-6">
            From Blueprint to{" "}
            <span className="text-gradient-blue">Blockbuster</span>
          </h2>
          <p className="font-sans-body text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Unlock a Universe of Video Content from a Single Floor Plan.
          </p>
          <p className="font-sans-body text-base text-muted-foreground/80 max-w-2xl mx-auto mt-4">
            Forget the limitations of physical cameras. Our AI-powered service generates an entire suite of video assets from your existing project materials.
          </p>
        </motion.div>
        
        {/* Featured offerings with large images */}
        <div className="space-y-20 mb-24">
          {featuredOfferings.map((offering, index) => (
            <FeaturedCard key={offering.title} offering={offering} index={index} isInView={isInView} />
          ))}
        </div>
        
        {/* Grid of remaining offerings */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="font-serif-display text-2xl md:text-3xl font-medium text-foreground text-center mb-12">
            The Complete Video Suite
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {offeringGroups.map((group, index) => (
              <OfferingGrid key={group.title} group={group} isInView={isInView} delay={0.7 + index * 0.15} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OfferingsSection;
