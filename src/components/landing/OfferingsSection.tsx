import { motion } from "framer-motion";
import { useInView } from "framer-motion";
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

interface Offering {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface OfferingCategory {
  title: string;
  offerings: Offering[];
}

const offeringCategories: OfferingCategory[] = [
  {
    title: "Core Visualizations: The Foundation of Your Vision",
    offerings: [
      {
        icon: <Layers className="w-6 h-6" />,
        title: "Floorplan to Reality",
        description: "Witness your 2D floor plans transform into fully furnished, photorealistic 3D apartment mockups. Allow buyers to see the finished product before a single brick is laid."
      },
      {
        icon: <Palette className="w-6 h-6" />,
        title: "Virtual Staging & Restyling",
        description: "Showcase a single space in multiple interior design styles—from modern minimalist to classic luxury. Appeal to a wider range of buyer tastes instantly."
      },
      {
        icon: <Sofa className="w-6 h-6" />,
        title: "Unfurnished to Furnished Transformation",
        description: "Take empty, unappealing photos of completed units and instantly furnish them with beautiful, aspirational decor."
      }
    ]
  },
  {
    title: "Immersive Experiences: Evoke Emotion and Desire",
    offerings: [
      {
        icon: <Video className="w-6 h-6" />,
        title: "Cinematic Unit Walkthroughs",
        description: "Go beyond simple tours. We create emotionally resonant journeys through your properties, complete with dynamic camera movements, lighting, and sound design."
      },
      {
        icon: <Sun className="w-6 h-6" />,
        title: "Light, Time & Mood Studies",
        description: "Showcase your property in its best light, at any time of day. From the golden hour glow of sunset to the vibrant energy of midday, create the perfect atmosphere."
      }
    ]
  },
  {
    title: "Marketing & Sales Tools: Drive Engagement and Leads",
    offerings: [
      {
        icon: <Smartphone className="w-6 h-6" />,
        title: "High-Impact Social Snippets",
        description: "A continuous stream of 15-30 second, vertically-oriented videos perfect for Instagram Reels, TikTok, and YouTube Shorts. Keep your audience engaged and your project top-of-mind."
      },
      {
        icon: <Target className="w-6 h-6" />,
        title: "Scroll-Stopping Ad Creatives",
        description: "Generate a dozen different ad variations in minutes. Test different hooks, visuals, and calls-to-action to find what converts best, without expensive reshoots."
      },
      {
        icon: <Type className="w-6 h-6" />,
        title: "Animated Project Logos & Titles",
        description: "Professional, eye-catching animations for your project's branding that can be used across all your video content."
      }
    ]
  },
  {
    title: "Informational & Contextual Videos: Educate and Build Trust",
    offerings: [
      {
        icon: <MapPin className="w-6 h-6" />,
        title: "Context & Location Tours",
        description: "Show the neighborhood and its key attractions from an aerial perspective. Highlight the convenience and lifestyle benefits of the location."
      },
      {
        icon: <Building2 className="w-6 h-6" />,
        title: "Construction & Phasing Animation",
        description: "Visualize the entire construction process from the ground up, or show how a multi-phase project will unfold over time. Perfect for managing buyer expectations."
      },
      {
        icon: <Clock className="w-6 h-6" />,
        title: "Before & After Timelapses",
        description: "For renovation projects, create a dramatic and satisfying timelapse that shows the incredible transformation."
      }
    ]
  },
  {
    title: "High-Impact Presentations: Secure Investment and Close Deals",
    offerings: [
      {
        icon: <Film className="w-6 h-6" />,
        title: "The Complete Project Launch Video",
        description: "A stunning, 60-90 second cinematic masterpiece that weaves together all the best elements—walkthroughs, amenities, location, and lifestyle—to create an unforgettable first impression."
      },
      {
        icon: <Presentation className="w-6 h-6" />,
        title: "The Investor Pitch Deck Video",
        description: "A comprehensive, data-driven presentation for your investors. Go beyond spreadsheets and show them the vision, the market, and the opportunity in a compelling, professional format."
      }
    ]
  }
];

const OfferingCard = ({ offering, index }: { offering: Offering; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="card-blueprint rounded-xl p-6 hover-glow"
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-blueprint/10 flex items-center justify-center text-blueprint">
          {offering.icon}
        </div>
        <div>
          <h4 className="font-sans-body font-semibold text-foreground text-lg mb-2">
            {offering.title}
          </h4>
          <p className="font-sans-body text-muted-foreground text-sm leading-relaxed">
            {offering.description}
          </p>
        </div>
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
      <div className="absolute inset-0 bg-blueprint-grid opacity-30" />
      
      <div className="relative z-10 container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <h2 className="font-serif-display text-4xl md:text-5xl lg:text-6xl font-medium text-foreground mb-6">
            From Blueprint to{" "}
            <span className="text-gradient-blue">Blockbuster</span>
          </h2>
          <p className="font-sans-body text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Unlock a Universe of Video Content from a Single Floor Plan.
          </p>
          <p className="font-sans-body text-base text-muted-foreground max-w-3xl mx-auto mt-4 leading-relaxed">
            Forget the limitations of physical cameras. Our AI-powered service generates an entire suite of video assets from your existing project materials. Here's a glimpse of what we can create for you:
          </p>
        </motion.div>
        
        {/* Offering Categories */}
        <div className="space-y-16">
          {offeringCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ 
                duration: 0.8, 
                delay: categoryIndex * 0.15,
                ease: [0.22, 1, 0.36, 1] 
              }}
            >
              {/* Category Title */}
              <h3 className="font-serif-display text-2xl md:text-3xl font-medium text-foreground mb-8 flex items-center gap-4">
                <span className="w-12 h-[1px] bg-gradient-to-r from-blueprint to-transparent" />
                {category.title}
              </h3>
              
              {/* Offering Cards Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.offerings.map((offering, index) => (
                  <OfferingCard 
                    key={offering.title} 
                    offering={offering} 
                    index={index} 
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfferingsSection;
