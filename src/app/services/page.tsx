"use client";

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
const missionVideoUrl = '/videos/motion_3.mp4';
const imgBaby = '/images/baby.webp';
const imgBhool = '/images/bhool.webp';
const imgChandu = '/images/chandu_champion.webp';
const imgDeva = '/images/Deva.webp';
const imgFigter = '/images/figter.webp';
const imgMahi = '/images/mahi.webp';
const imgSafirana = '/images/Safirana.webp';
const imgShataan = '/images/shataan.webp';
const imgVicku = '/images/Vicku.webp';
const imgAds2 = '/images/Ads2.webp';
const imgFilms = '/images/films.webp';

const Services = () => {
  const promoImages: string[] = [
    imgVicku,
    imgFigter,
    imgBhool,
    imgSafirana,
    imgDeva,
    imgMahi,
    imgBaby,
    imgShataan,
    imgChandu,
  ];
  const row1 = promoImages.filter((_, idx) => idx % 2 === 0);
  const row2 = promoImages.filter((_, idx) => idx % 2 === 1);
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-20">
        {/* Our Mission - video + text, like About */}
        <section className="py-12 relative">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-border shadow-md md:shadow-lg p-6 md:p-8 max-w-6xl mx-auto bg-transparent"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                {/* Left: Video */}
                <div className="relative">
                  <div className="rounded-xl overflow-hidden border border-border/60 shadow-sm">
                    <video
                      src={missionVideoUrl}
                      className="w-full h-[420px] md:h-[460px] object-cover"
                      autoPlay
                      muted
                      loop
                      playsInline
                    />
                  </div>
                </div>
                {/* Right: Text */}
                <div className="space-y-5">
                  <span className="inline-flex items-center space-x-2 bg-transparent border border-border/60 rounded-full px-3 py-1 text-xs text-foreground/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <span>Strategic // Creative // Impactful</span>
                  </span>
                  <h1 className="text-3xl md:text-4xl font-bold">
                    <span className="bg-gradient-to-r from-primary to-foreground bg-clip-text text-transparent">Our Mission</span>
                  </h1>
                  <p className="text-lg md:text-xl text-foreground/90 leading-relaxed">
                    Comprehensive marketing solutions tailored to elevate your brand's presence.
                  </p>
                  <div className="pt-1 flex flex-col sm:flex-row items-center gap-3">
                    <a href="/contact" className="group inline-flex items-center justify-center bg-foreground text-background hover:bg-foreground/90 shadow text-sm md:text-base px-5 py-3 rounded-full transition-colors">
                      Start Your Campaign
                      <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
                    </a>
                    <a href="/portfolio" className="group inline-flex items-center justify-center border border-border text-foreground bg-background hover:bg-muted shadow-sm text-sm md:text-base px-5 py-3 rounded-full transition-colors">
                      See Success Stories
                      <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
        </div>
        </section>
        {/* Movie Association - curated brand wall */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-3">Movie Association</h2>
              <p className="text-lg text-foreground/80">Premium brand integrations across cinema and promotions.</p>
            </div>
            <div className="rounded-2xl border border-border/40 bg-transparent p-10 max-w-6xl mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                {promoImages.map((src, i) => (
                  <div key={`ma-grid-`+i} className="group rounded-2xl border border-border/40 bg-transparent p-6 md:p-8 flex items-center justify-center hover:border-primary/40 transition-transform hover:-translate-y-1">
                    <img src={src} alt={`Movie ${i+1}`} className="h-56 md:h-64 w-auto object-contain opacity-100 transition-transform duration-300 group-hover:scale-105" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Co-Branding Section */}
        <section className="py-14">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: '-100px' }}
              className="max-w-6xl mx-auto rounded-2xl border border-border/50 bg-transparent p-8 md:p-10"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 items-start">
                <div className="md:col-span-1">
                  <span className="inline-flex items-center space-x-2 bg-transparent border border-border/60 rounded-full px-3 py-1 text-xs text-foreground/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <span>Brand Integrations</span>
                  </span>
                  <h3 className="mt-3 text-3xl md:text-4xl font-bold">
                    <span className="bg-gradient-to-r from-primary to-foreground bg-clip-text text-transparent">Co-Branding</span>
                  </h3>
                </div>
                <div className="md:col-span-2 space-y-5 text-foreground/90">
                  <p className="text-lg leading-relaxed">
                    Secure advertising slots at entertainment rates and leverage the promotional surge surrounding films.
                  </p>
                  <div className="rounded-xl border border-border/50 p-5 md:p-6 bg-background/40">
                    <h4 className="text-base md:text-lg font-semibold mb-2">In-film & out-film placements</h4>
                    <p className="text-sm md:text-base text-foreground/80">
                      Integrate branded products directly into the storyline or setting for authentic visibility across audiences.
                    </p>
                  </div>
                  <div className="rounded-xl border border-border/50 p-5 md:p-6 bg-background/40">
                    <h4 className="text-base md:text-lg font-semibold mb-2">Success Story</h4>
                    <p className="text-sm md:text-base text-foreground/80">
                      Our most successful campaign was with Radha TMT across multiple media platforms.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Advertising Section */}
        <section className="py-14 bg-muted/20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: '-100px' }}
              className="max-w-6xl mx-auto rounded-2xl border border-border/50 bg-transparent p-8 md:p-10"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                {/* Left: Image */}
                <div className="relative">
                  <div className="rounded-xl overflow-hidden border border-border/60 shadow-sm">
                    <img
                      src={imgAds2}
                      alt="Advertising Campaign"
                      className="w-full h-[420px] md:h-[460px] object-cover"
                    />
                  </div>
                </div>
                {/* Right: Text */}
                <div className="space-y-5">
                  <span className="inline-flex items-center space-x-2 bg-transparent border border-border/60 rounded-full px-3 py-1 text-xs text-foreground/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <span>Creative // Strategic // Impactful</span>
                  </span>
                  <h3 className="text-4xl md:text-4xl font-bold">
                    <span className="bg-gradient-to-r from-primary to-foreground bg-clip-text text-transparent">Advertising</span>
                  </h3>
                  <p className="text-lg md:text-xl text-foreground/90 leading-relaxed">
                    Brands must embody values that resonate with core audiences. We craft creative ideas that capture attention, foster connection, and inspire action.
                  </p>
                  <p className="text-base md:text-lg text-foreground/80 leading-relaxed">
                    Today's brands must do more than just represent a business. A successful brand actively engages with its values. We develop innovative ideas that drive both business and societal progress.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Media Planning & Buying Section */}
        <section className="py-14">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: '-100px' }}
              className="max-w-6xl mx-auto rounded-2xl border border-border/50 bg-transparent p-8 md:p-10"
            >
              <div className="text-center mb-8">
                <span className="inline-flex items-center space-x-2 bg-transparent border border-border/60 rounded-full px-3 py-1 text-xs text-foreground/80">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>Strategic Media Solutions</span>
                </span>
                <h3 className="mt-3 text-3xl md:text-4xl font-bold">
                  <span className="bg-gradient-to-r from-primary to-foreground bg-clip-text text-transparent">Media Planning & Buying</span>
                </h3>
                <p className="mt-4 text-lg md:text-xl text-foreground/90 leading-relaxed max-w-3xl mx-auto">
                  Comprehensive marketing solutions tailored to elevate your brand's presence.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  'FM Radio Channels',
                  'Outdoor Advertising',
                  'Customized Events',
                  'TV Advertisements',
                  'Newspaper Ads',
                  'Cinema Multiplex Ads'
                ].map((service, index) => (
                  <div key={index} className="rounded-xl border border-border/50 p-5 md:p-6 bg-background/40 hover:border-primary/40 transition-colors">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0"></div>
                      <span className="text-base md:text-lg font-medium text-foreground/90">{service}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Film Distribution Section */}
        <section className="py-14 bg-muted/20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: '-100px' }}
              className="max-w-6xl mx-auto rounded-2xl border border-border/50 bg-transparent p-8 md:p-10"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                {/* Left: Image */}
                <div className="relative">
                  <div className="rounded-xl overflow-hidden border border-border/60 shadow-sm">
                    <img
                      src={imgFilms}
                      alt="Film Distribution"
                      className="w-full h-[420px] md:h-[460px] object-cover"
                    />
                  </div>
                </div>
                {/* Right: Text */}
                <div className="space-y-5">
                  <span className="inline-flex items-center space-x-2 bg-transparent border border-border/60 rounded-full px-3 py-1 text-xs text-foreground/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <span>Regional Cinema // Distribution</span>
                  </span>
                  <h3 className="text-3xl md:text-4xl font-bold">
                    <span className="bg-gradient-to-r from-primary to-foreground bg-clip-text text-transparent">Film Distribution</span>
                  </h3>
                  <p className="text-lg md:text-xl text-foreground/90 leading-relaxed">
                    Led by Mrs. Jhuma Paul, distributing and promoting over 23 regional films since 2010 across West Bengal.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Our Mission Section */}
        <section className="py-14">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: '-100px' }}
              className="max-w-6xl mx-auto rounded-2xl border border-border/50 bg-transparent p-8 md:p-10"
            >
              <div className="text-center mb-10">
                <span className="inline-flex items-center space-x-2 bg-transparent border border-border/60 rounded-full px-3 py-1 text-xs text-foreground/80">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>Creative Excellence</span>
                </span>
                <h3 className="mt-3 text-3xl md:text-4xl font-bold">
                  <span className="bg-gradient-to-r from-primary to-foreground bg-clip-text text-transparent">Our Mission</span>
                </h3>
                <p className="mt-4 text-lg md:text-xl text-foreground/90 leading-relaxed max-w-3xl mx-auto">
                  We empower creators to reach the right audience through impactful advertising.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    title: 'Empower Creators',
                    description: 'Providing tools and platforms for creators to showcase their work.'
                  },
                  {
                    title: 'Targeted Reach',
                    description: 'Connecting creative work with the most relevant audiences.'
                  },
                  {
                    title: 'Impactful Results',
                    description: 'Delivering advertising that makes a measurable difference.'
                  }
                ].map((item, index) => (
                  <div key={index} className="rounded-xl border border-border/50 p-6 md:p-8 bg-background/40 hover:border-primary/40 transition-colors">
                    <h4 className="text-xl md:text-2xl font-bold mb-3 text-foreground/90">{item.title}</h4>
                    <p className="text-base md:text-lg text-foreground/80 leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
