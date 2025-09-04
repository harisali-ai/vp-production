"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background -mt-16 md:-mt-24 relative z-10">
      <div className="container mx-auto px-4">
        {/* Card reveal wrapper */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.99 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ type: 'spring', stiffness: 120, damping: 18, mass: 0.9 }}
          viewport={{ once: false, amount: 0.2 }}
          className="rounded-2xl border border-border/60 bg-card/60 backdrop-blur supports-[backdrop-filter]:bg-card/50 shadow-md md:shadow-lg p-6 md:p-8"
          style={{ willChange: 'transform' }}
        >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ type: 'spring', stiffness: 120, damping: 20 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-lg overflow-hidden">
              <img 
                src="/images/Vivek.webp"
                alt="Vivek Parekh"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-40 mix-blend-overlay"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-background p-4 rounded-lg border border-border shadow-lg">
              <p className="text-4xl font-bold text-primary">10+</p>
              <p className="text-sm text-muted-foreground">Years Experience</p>
            </div>
          </motion.div>
          
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ type: 'spring', stiffness: 120, damping: 20 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <p className="text-primary font-medium mb-2">About</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Vivek Parekh
              </h2>
            </div>
            
            <p className="text-lg text-foreground/90 leading-relaxed">
              With over a decade of expertise in marketing and production, Vivek Parekh crafts powerful brand stories that leave a lasting impact. His work spans industries from FMCG to entertainment, blending creativity with strategy to build iconic identities.
            </p>
            
            <p className="text-lg text-foreground/90 leading-relaxed">
              Specializing in movie associations, strategic digital campaigns, and film branding solutions, Vivek's approach combines innovation with a client-first mindset — making him a trusted partner in brand elevation.
            </p>
            
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="space-y-1">
                <p className="text-xl font-bold">150+</p>
                <p className="text-muted-foreground">Projects Completed</p>
              </div>
              <div className="space-y-1">
                <p className="text-xl font-bold">45+</p>
                <p className="text-muted-foreground">Satisfied Clients</p>
              </div>
              <div className="space-y-1">
                <p className="text-xl font-bold">12</p>
                <p className="text-muted-foreground">Industry Awards</p>
              </div>
              <div className="space-y-1">
                <p className="text-xl font-bold">8</p>
                <p className="text-muted-foreground">Team Members</p>
              </div>
            </div>
            
            <Link href="/about">
              <Button 
                variant="outline" 
                className="mt-4 border-primary text-primary hover:bg-primary/10 hover:text-primary"
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;