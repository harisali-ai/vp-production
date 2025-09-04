"use client";

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const CTASection = () => {
  const openContactModal = () => {
    document.getElementById('contact-modal')?.click();
  };

  return (
    <section id="contact" className="py-20 bg-muted/50 -mt-16 md:-mt-24 relative z-10 overflow-hidden">
      {/* Background elements */}
      <div className="absolute w-96 h-96 bg-primary/5 rounded-full blur-3xl top-0 -right-48"></div>
      <div className="absolute w-80 h-80 bg-primary/3 rounded-full blur-3xl -bottom-20 -left-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.99 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ type: 'spring', stiffness: 120, damping: 18, mass: 0.9 }}
          viewport={{ once: false, amount: 0.2 }}
          className="max-w-6xl mx-auto bg-card border border-border rounded-2xl p-8 md:p-12 shadow-lg"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Bring Your Vision to Life?</h2>
              
              <p className="text-lg text-foreground/80 mb-8">
                Let's create something extraordinary together. Whether you have a clear concept or need help developing your idea, our team is here to guide you through every step of the production process.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  onClick={openContactModal}
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  Get a Free Quote
                </Button>
                
                <Link href="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary/10 hover:text-primary"
                  >
                    Contact Us
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-background border border-border/50 rounded-lg p-5">
                <h3 className="text-lg font-medium mb-3">Quick Response</h3>
                <p className="text-muted-foreground">We respond to all inquiries within 24 hours with personalized attention to your project needs.</p>
              </div>
              
              <div className="bg-background border border-border/50 rounded-lg p-5">
                <h3 className="text-lg font-medium mb-3">Custom Quotes</h3>
                <p className="text-muted-foreground">Every project is unique. We provide tailored quotes based on your specific requirements and budget.</p>
              </div>
              
              <div className="bg-background border border-border/50 rounded-lg p-5">
                <h3 className="text-lg font-medium mb-3">Flexible Scheduling</h3>
                <p className="text-muted-foreground">We work with your timeline to ensure your project is completed when you need it.</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;