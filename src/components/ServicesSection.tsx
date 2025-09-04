import { motion } from 'framer-motion';
import { Camera, Film, Scissors, Video, Building2, Palette, Music, Users, Tv } from 'lucide-react';

const services = [
  {
    title: 'Brand Films',
    description: 'Compelling visual narratives that communicate your brand values, mission, and vision to build emotional connections with your audience.',
    icon: Building2,
  },
  {
    title: 'Music Videos',
    description: 'Creative and visually striking music videos that bring songs to life through innovative concepts, cinematography, and visual effects.',
    icon: Music,
  },
  {
    title: 'Commercials',
    description: 'High-impact commercials that showcase your products or services with polished visuals, strategic messaging, and cinematic quality.',
    icon: Tv,
  },
  {
    title: 'Documentary',
    description: 'Authentic documentary storytelling that captures real people, places, and events with sensitivity, depth, and journalistic integrity.',
    icon: Film,
  },
  {
    title: 'Corporate Videos',
    description: 'Professional corporate content including training videos, company profiles, event coverage, and internal communications.',
    icon: Users,
  },
  {
    title: 'Wedding Films',
    description: 'Cinematic wedding films that preserve the emotions, beauty, and unique moments of your special day in a timeless keepsake.',
    icon: Video,
  },
];

const ServicesSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="services" className="py-20 bg-muted/30 -mt-16 md:-mt-24 relative z-10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.99 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ type: 'spring', stiffness: 120, damping: 18, mass: 0.9 }}
          viewport={{ once: false, amount: 0.2 }}
          className="rounded-2xl border border-border/60 bg-card/60 backdrop-blur supports-[backdrop-filter]:bg-card/50 shadow-md md:shadow-lg p-6 md:p-8"
        >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Services</h2>
          <p className="text-lg text-foreground/80">
            We offer a comprehensive range of video production services to meet your creative needs.
            Each service is delivered with our signature blend of technical excellence and creative vision.
          </p>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-300"
            >
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-5">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              
              <p className="text-muted-foreground">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-16 max-w-3xl mx-auto">
          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4 text-center">Our Production Process</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              <div className="text-center">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Film className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-medium mb-2">Pre-Production</h4>
                <p className="text-sm text-muted-foreground">Concept development, scripting, storyboarding, planning, and preparation.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Camera className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-medium mb-2">Production</h4>
                <p className="text-sm text-muted-foreground">On-location filming with professional crew, equipment, and direction.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Scissors className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-medium mb-2">Post-Production</h4>
                <p className="text-sm text-muted-foreground">Editing, color grading, sound design, visual effects, and final delivery.</p>
              </div>
            </div>
          </div>
        </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;