"use client";

import { motion } from 'framer-motion';
import { Camera, Film, Award, Users, Clock, Heart, ArrowRight, ArrowUpRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';

const About = () => {
  const teamMembers = [
    {
      name: "Alex Johnson",
      role: "Creative Director",
      bio: "With over 15 years of experience in film production, Alex brings a unique vision and storytelling approach to every project."
    },
    {
      name: "Sam Rodriguez",
      role: "Director of Photography",
      bio: "Sam has a keen eye for composition and lighting, creating visually stunning imagery that elevates every production."
    },
    {
      name: "Taylor Kim",
      role: "Post-Production Supervisor",
      bio: "Taylor's expertise in editing and color grading transforms raw footage into polished, cinematic final products."
    },
    {
      name: "Jordan Smith",
      role: "Production Manager",
      bio: "Jordan ensures that every project runs smoothly from pre-production through final delivery, with meticulous attention to detail."
    }
  ];
  
  const values = [
    {
      icon: Film,
      title: "Creativity",
      description: "We approach each project with fresh eyes and innovative ideas."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We work closely with our clients, valuing their input throughout the process."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for the highest quality in every aspect of our work."
    },
    {
      icon: Clock,
      title: "Reliability",
      description: "We deliver on time and on budget, every time."
    },
    {
      icon: Heart,
      title: "Passion",
      description: "We love what we do, and it shows in our work."
    },
    {
      icon: Camera,
      title: "Expertise",
      description: "Our team brings years of experience and technical knowledge."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-grow pt-24 pb-16">
        {/* Hero video - large, modern */}
        <section className="relative py-6">
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute -top-24 -left-24 h-56 w-56 md:h-72 md:w-72 bg-gradient-to-br from-primary/15 to-foreground/10 rounded-full blur-3xl opacity-40" />
            <div className="absolute top-1/3 -right-20 h-48 w-48 md:h-64 md:w-64 bg-gradient-to-tr from-foreground/10 to-primary/15 rounded-full blur-3xl opacity-40" />
          </div>
          <div className="container mx-auto px-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden border border-border/60 shadow-lg"
            >
              <div className="relative">
                <video
                  src="/videos/motion-video-vp-productions.mp4"
                  className="w-full h-auto"
                  autoPlay
                  muted
                  loop
                  playsInline
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/10 via-transparent to-transparent" />
            </div>
            </motion.div>
          </div>
        </section>
        {/* Intro: Video then details */}
        <section className="py-16 relative">
          {/* subtle background accents */}
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute -top-20 -left-20 h-56 w-56 md:h-72 md:w-72 bg-gradient-to-br from-primary/15 to-foreground/10 rounded-full blur-3xl opacity-50" />
            <div className="absolute bottom-[-60px] right-[-60px] h-48 w-48 md:h-64 md:w-64 bg-gradient-to-tr from-foreground/10 to-primary/15 rounded-full blur-3xl opacity-40" />
          </div>
          <div className="container mx-auto px-4">
            <div className="rounded-2xl border border-border/60 bg-card/60 backdrop-blur supports-[backdrop-filter]:bg-card/50 shadow-md md:shadow-lg p-6 md:p-8 max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="rounded-xl overflow-hidden border border-border/60 shadow-sm">
                  <img
                    src="/images/Vivek2.webp"
                    alt="Vivek Parekh"
                    className="w-full h-[460px] object-cover object-top"
                  />
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
                className="space-y-5"
              >
                <div>
                  <span className="inline-flex items-center space-x-2 bg-card/70 border border-border/60 rounded-full px-3 py-1 text-xs text-foreground/80 mb-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <span>Now booking production projects</span>
                  </span>
                  <h1 className="text-3xl md:text-4xl font-bold mb-2">
                    <span className="bg-gradient-to-r from-primary to-foreground bg-clip-text text-transparent">Vivek Parekh</span>
                  </h1>
                      </div>
                <p className="text-lg text-foreground/90 leading-relaxed">
                  With over a decade of expertise in marketing solutions and productions, Vivek specializes in personal branding and compelling narrative creation across FMCG and entertainment industries.
                </p>
                <p className="text-lg text-foreground/90 leading-relaxed">
                  Services include Movie Associations, strategic digital campaigns, and innovative film branding — all driven by creativity and client-centric focus.
                </p>
                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <a
                    href="/clients/artists"
                    className="group inline-flex items-center justify-center border border-border text-foreground bg-background hover:bg-muted shadow-sm text-sm px-4 py-2 rounded-full transition-colors"
                  >
                    Explore Craftsmanship
                    <span className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                  </a>
                  <a
                    href="/contact"
                    className="group inline-flex items-center justify-center bg-foreground text-background hover:bg-foreground/90 shadow text-sm px-4 py-2 rounded-full transition-colors"
                  >
                    Begin Collaboration
                    <span className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
                  </a>
                </div>
              </motion.div>
              </div>
            </div>
          </div>
        </section>
        
   

        
        
        {/* Why Choose Us */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-3xl font-bold mb-6"
              >
                Why Choose Us
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-lg text-foreground/80"
              >
                Principles that guide how we work and the outcomes we deliver.
              </motion.p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-card rounded-lg p-6 border border-border"
              >
                <h3 className="text-lg font-semibold mb-2">Relationship-Centric</h3>
                <p className="text-muted-foreground">We build strong, collaborative partnerships that last long past project delivery.</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-card rounded-lg p-6 border border-border"
              >
                <h3 className="text-lg font-semibold mb-2">Enjoyable Culture</h3>
                <p className="text-muted-foreground">A relaxed, fun environment that sparks creativity and supercharges productivity.</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-card rounded-lg p-6 border border-border"
              >
                <h3 className="text-lg font-semibold mb-2">Value-Driven</h3>
                <p className="text-muted-foreground">Maximize ROI through strategic planning, thoughtful execution, and constant optimization.</p>
              </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                className="bg-card rounded-lg p-6 border border-border"
              >
                <h3 className="text-lg font-semibold mb-2">Time Respect</h3>
                <p className="text-muted-foreground">We guard your time fiercely—meeting deadlines so you can stay focused on your core goals.</p>
                </motion.div>
            </div>
          </div>
        </section>
        
        {/* Over 100 Films Section (after Why Choose Us) */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="rounded-xl overflow-hidden border border-border/60 shadow-sm">
                  <img
                    src="/images/100films.webp"
                    alt="Over 100 films partnerships"
                    className="w-full h-auto object-contain"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
                className="space-y-5"
              >
                <h2 className="text-3xl md:text-4xl font-bold">Over 100 Films</h2>
                <p className="text-lg text-foreground/90 leading-relaxed">
                  Partnered on 100+ in-film and out-of-film branding projects, captivating audiences on the big screen and beyond.
                </p>
                <p className="text-lg text-foreground/90 leading-relaxed">
                  Specializing in Ad Film Making and Film Distribution for seamless production and release.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Our Mission */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-3xl font-bold mb-6"
              >
                Our Mission
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-lg text-foreground/80"
              >
                We empower creators to reach the right audience through impactful advertising.
              </motion.p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-card rounded-lg p-6 border border-border"
              >
                <h3 className="text-lg font-semibold mb-2">Empower Creators</h3>
                <p className="text-muted-foreground">Providing tools and platforms for creators to showcase their work.</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-card rounded-lg p-6 border border-border"
              >
                <h3 className="text-lg font-semibold mb-2">Targeted Reach</h3>
                <p className="text-muted-foreground">Connecting creative work with the most relevant audiences.</p>
              </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                className="bg-card rounded-lg p-6 border border-border"
              >
                <h3 className="text-lg font-semibold mb-2">Impactful Results</h3>
                <p className="text-muted-foreground">Delivering advertising that makes a measurable difference.</p>
                </motion.div>
            </div>
          </div>
        </section>
        
             {/* Campaign CTA Card */}
             <section className="py-16 relative">
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute -top-16 left-1/4 h-56 w-56 md:h-72 md:w-72 bg-gradient-to-br from-primary/15 to-foreground/10 rounded-full blur-3xl opacity-40" />
            <div className="absolute -bottom-10 right-1/4 h-48 w-48 md:h-64 md:w-64 bg-gradient-to-tr from-foreground/10 to-primary/15 rounded-full blur-3xl opacity-40" />
          </div>
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              className="max-w-5xl mx-auto rounded-2xl border border-border/60 bg-card/70 backdrop-blur supports-[backdrop-filter]:bg-card/60 shadow-lg p-8 md:p-12 text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                <span className="bg-gradient-to-r from-primary to-foreground bg-clip-text text-transparent">Empower Your Creative Vision</span>
              </h2>
              <p className="mt-4 text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto">
                We connect exceptional creators with the right audience through strategic and impactful advertising. 
                Amplify your message—right where it matters.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href="/contact"
                  className="group inline-flex items-center justify-center bg-foreground text-background hover:bg-foreground/90 shadow text-sm md:text-base px-5 py-3 rounded-full transition-colors"
                >
                  Start Your Campaign
                  <ArrowUpRight className="ml-2 h-4 w-4 opacity-90 group-hover:opacity-100 transition-opacity" />
                </a>
                <a
                  href="/portfolio"
                  className="group inline-flex items-center justify-center border border-border text-foreground bg-background hover:bg-muted shadow-sm text-sm md:text-base px-5 py-3 rounded-full transition-colors"
                >
                  See Success Stories
                  <ArrowRight className="ml-2 h-4 w-4 opacity-90 group-hover:opacity-100 transition-opacity" />
                </a>
              </div>
              </motion.div>
          </div>
        </section>

        
        
        
      </main>
      
      <Footer />
      <ContactForm />
    </div>
  );
};

export default About;
