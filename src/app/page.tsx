"use client";

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import { motion } from 'framer-motion';
// Removed sections per request
import ContactForm from '@/components/ContactForm';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background overflow-x-hidden">
      <div className="hidden lg:block">
      <Header />
      </div>
      
      <main className="flex-grow lg:pt-16 overflow-x-hidden">
        <HeroSection />
        <AboutSection />
        {/* Services teaser */}
        <section className="py-12 md:py-16 relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute -top-20 -left-24 h-56 w-56 md:h-72 md:w-72 bg-gradient-to-br from-primary/20 to-foreground/10 rounded-full blur-3xl opacity-40" />
            <div className="absolute bottom-[-60px] right-[-60px] h-48 w-48 md:h-64 md:w-64 bg-gradient-to-tr from-foreground/10 to-primary/20 rounded-full blur-3xl opacity-40" />
          </div>
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-8 md:mb-10">
              <h2 className="text-2xl md:text-4xl font-bold tracking-tight">
                <span className="bg-gradient-to-r from-primary to-foreground bg-clip-text text-transparent">What We Do</span>
              </h2>
              <p className="mt-3 text-muted-foreground">Co-Branding, Advertising, Social Media Planning & Buying, and Film Distribution tailored to your brand.</p>
            </div>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              viewport={{ once: true, margin: '-100px' }}
            >
              {[
                { t: 'Co-Branding', d: 'Entertainment-led brand integrations and partnerships.', href: '/services#co-branding' },
                { t: 'Advertising', d: 'Ideas that capture attention and drive action.', href: '/services#advertising' },
                { t: 'Media Planning & Buying', d: 'Smart, targeted placement across channels.', href: '/services#media-planning' },
                { t: 'Film Distribution', d: 'Seamless distribution led by experienced partners.', href: '/services#distribution' },
              ].map((c, i) => (
                <motion.a
                  key={i}
                  href={c.href}
                  className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card/70 backdrop-blur p-5 hover:border-foreground/40 transition-all duration-300 shadow-md"
                  whileHover={{ y: -6, scale: 1.01 }}
                  transition={{ type: 'spring', stiffness: 220, damping: 18 }}
                >
                  <div className="pointer-events-none absolute inset-0">
                    <div className="absolute top-0 left-[-30%] h-px w-[160%] bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-60 translate-x-0 group-hover:translate-x-[30%] transition-all duration-700" />
                    <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.25) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.25) 1px, transparent 1px)', backgroundSize: '22px 22px' }} />
                  </div>
                  <div className="pointer-events-none absolute -top-8 -right-8 h-24 w-24 rounded-full bg-gradient-to-br from-primary/20 to-foreground/10 blur-2xl opacity-40 group-hover:opacity-60 transition-opacity" />
                  <h3 className="font-semibold relative z-10">{c.t}</h3>
                  <p className="mt-1 text-sm text-muted-foreground relative z-10">{c.d}</p>
                  <div className="mt-4 h-px w-full bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.a>
              ))}
            </motion.div>
          </div>
        </section>

        

        {/* Our Mission */}
        <section className="py-12 md:py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-10 md:mb-12">
              <h2 className="text-2xl md:text-4xl font-bold tracking-tight">Our Mission</h2>
              <p className="mt-3 text-muted-foreground">We empower creators to reach the right audience through impactful advertising.</p>
            </div>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              viewport={{ once: true, margin: '-100px' }}
            >
              <motion.div
                className="relative overflow-hidden bg-card/70 backdrop-blur rounded-2xl p-6 border border-border/60 hover:border-foreground/40 transition-all duration-300 shadow-md"
                whileHover={{ y: -6, scale: 1.01 }}
                transition={{ type: 'spring', stiffness: 220, damping: 18 }}
              >
                <div className="pointer-events-none absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.25) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.25) 1px, transparent 1px)', backgroundSize: '22px 22px' }} />
                <div className="pointer-events-none absolute -top-10 -left-10 h-24 w-24 rounded-full bg-gradient-to-br from-primary/20 to-foreground/10 blur-2xl opacity-40" />
                <h3 className="text-lg font-semibold mb-2">Empower Creators</h3>
                <p className="text-muted-foreground">Providing tools and platforms for creators to showcase their work.</p>
              </motion.div>
              <motion.div
                className="relative overflow-hidden bg-card/70 backdrop-blur rounded-2xl p-6 border border-border/60 hover:border-foreground/40 transition-all duration-300 shadow-md"
                whileHover={{ y: -6, scale: 1.01 }}
                transition={{ type: 'spring', stiffness: 220, damping: 18 }}
              >
                <div className="pointer-events-none absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.25) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.25) 1px, transparent 1px)', backgroundSize: '22px 22px' }} />
                <div className="pointer-events-none absolute -top-10 -left-10 h-24 w-24 rounded-full bg-gradient-to-br from-primary/20 to-foreground/10 blur-2xl opacity-40" />
                <h3 className="text-lg font-semibold mb-2">Targeted Reach</h3>
                <p className="text-muted-foreground">Connecting creative work with the most relevant audiences.</p>
              </motion.div>
              <motion.div
                className="relative overflow-hidden bg-card/70 backdrop-blur rounded-2xl p-6 border border-border/60 hover:border-foreground/40 transition-all duration-300 shadow-md"
                whileHover={{ y: -6, scale: 1.01 }}
                transition={{ type: 'spring', stiffness: 220, damping: 18 }}
              >
                <div className="pointer-events-none absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.25) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.25) 1px, transparent 1px)', backgroundSize: '22px 22px' }} />
                <div className="pointer-events-none absolute -top-10 -left-10 h-24 w-24 rounded-full bg-gradient-to-br from-primary/20 to-foreground/10 blur-2xl opacity-40" />
                <h3 className="text-lg font-semibold mb-2">Impactful Results</h3>
                <p className="text-muted-foreground">Delivering advertising that makes a measurable difference.</p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* CTA card */}
        <section className="py-12 md:py-16 relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto rounded-2xl border border-border/60 bg-card/70 backdrop-blur p-8 md:p-12 text-center overflow-hidden relative">
              <div className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute -top-12 left-1/3 h-40 w-40 md:h-56 md:w-56 bg-gradient-to-br from-primary/20 to-foreground/10 rounded-full blur-3xl opacity-40" />
                <div className="absolute -bottom-12 right-1/3 h-40 w-40 md:h-56 md:w-56 bg-gradient-to-tr from-foreground/10 to-primary/20 rounded-full blur-3xl opacity-40" />
              </div>
              <h2 className="text-2xl md:text-4xl font-bold tracking-tight">
                <span className="bg-gradient-to-r from-primary to-foreground bg-clip-text text-transparent">Empower Your Creative Vision</span>
              </h2>
              <p className="mt-3 md:mt-4 text-base md:text-lg text-foreground/80 max-w-3xl mx-auto">
                We connect exceptional creators with the right audience through strategic and impactful advertising. Amplify your message—right where it matters.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a href="/contact" className="inline-flex items-center justify-center bg-foreground text-background hover:bg-foreground/90 shadow px-6 py-3 rounded-full transition-all duration-300 hover:-translate-y-0.5">Start Your Campaign</a>
                <a href="/clients/artists" className="inline-flex items-center justify-center border border-border text-foreground bg-background hover:bg-muted shadow-sm px-6 py-3 rounded-full transition-all duration-300 hover:-translate-y-0.5">See Success Stories</a>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      <ContactForm />
    </div>
  );
}