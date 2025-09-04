"use client";

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, Star, Radio, Tv, Calendar, MapPin, BarChart2, Globe, Clapperboard, Theater, Bus, Building2 } from 'lucide-react';

type Client = {
  name: string;
  project: string;
  type: string;
  highlight: string;
  image: string;
  logo: string;
  description: string;
};

const clients: Client[] = [
  {
    name: 'Bade Bhaiya Agarwal Packers & Movers – DRS GROUP',
    project: 'Bhola',
    type: 'movie',
    highlight: 'Logistics brand integration',
    image: '/images/bhola.png',
    logo: '/images/Aga.png',
    description: 'Brand integration in regional cinema for maximum visibility',
  },
  {
    name: 'Edify School',
    project: 'Srikanth Bolla',
    type: 'movie',
    highlight: 'Educational institution collaboration',
    image: '/images/srikanth.webp',
    logo: '/images/edify-school.webp',
    description: 'Strategic partnership for educational outreach through cinema',
  },
];

const Artists = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const id = window.setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % clients.length);
    }, 5000);
    return () => window.clearInterval(id);
  }, []);

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + clients.length) % clients.length);
  };
  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % clients.length);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24">
        {/* Hero */}
        <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center px-6 overflow-hidden">
          <video className="absolute inset-0 w-full h-full object-cover opacity-30" autoPlay muted loop playsInline src={'/videos/motion_3.mp4'} />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
          <div className="relative z-10 text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
              <span className="inline-block bg-gradient-to-r from-primary via-foreground to-primary animate-gradient bg-[length:220%_220%] bg-clip-text text-transparent">Artists & Collaborations</span>
            </h1>
            <p className="mt-4 text-foreground/80 max-w-3xl mx-auto">Creative collaborations that shaped memorable brand experiences.</p>
          </div>
        </section>

        {/* Carousel */}
        <section className="px-6 py-10">
          <div className="container mx-auto max-w-6xl">
            <div className="relative h-[620px]">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div key={currentIndex} custom={direction} initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }} transition={{ duration: 0.6 }} className="absolute inset-0">
                  <div className="grid md:grid-cols-2 gap-6 h-full">
                    <div className="relative rounded-2xl overflow-hidden border border-border">
                      <img src={clients[currentIndex].image} alt={clients[currentIndex].project} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <div className="absolute bottom-3 left-3">
                        <h3 className="text-white text-3xl font-bold">{clients[currentIndex].project}</h3>
                        <p className="text-white/80">Featured {clients[currentIndex].type}</p>
                      </div>
                    </div>
                    <div className="rounded-2xl border border-border bg-card/70 backdrop-blur-xl p-6 md:p-8 flex flex-col">
                      <div className="flex items-center mb-6">
                        <div className="h-20 w-20 rounded-xl bg-muted/40 grid place-items-center mr-4 overflow-hidden">
                          <img src={clients[currentIndex].logo} alt={clients[currentIndex].name} className="h-14 w-14 object-contain" />
                        </div>
                        <div>
                          <h4 className="text-xl md:text-2xl font-bold">{clients[currentIndex].name}</h4>
                          <p className="text-foreground/70">Strategic Partnership</p>
                        </div>
                      </div>
                      <p className="text-foreground/80 mb-6">{clients[currentIndex].description}</p>
                      <div className="bg-muted/40 rounded-xl p-4 border-l-4 border-primary mb-6">
                        <div className="flex items-center text-primary mb-2">
                          <Star className="mr-2 h-4 w-4" />
                          <span className="font-medium">Collaboration Highlights</span>
                        </div>
                        <p className="text-foreground/80">{clients[currentIndex].highlight}</p>
                      </div>
                      <div className="mt-auto flex flex-wrap gap-2">
                        {['Brand Integration', '360° Campaign', 'Strategic Partnership'].map((tag) => (
                          <span key={tag} className="px-3 py-1 rounded-full bg-muted text-xs">{tag}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
              <button onClick={handlePrev} className="absolute -left-3 top-1/2 -translate-y-1/2 rounded-full bg-muted hover:bg-muted/70 p-2"><ChevronLeft className="h-5 w-5" /></button>
              <button onClick={handleNext} className="absolute -right-3 top-1/2 -translate-y-1/2 rounded-full bg-muted hover:bg-muted/70 p-2"><ChevronRight className="h-5 w-5" /></button>
            </div>
          </div>
        </section>

        {/* Modern Advertising Section */}
        <section className="relative px-6 md:px-10 lg:px-16 py-12 md:py-20 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-primary/5 to-transparent" />
            <div className="absolute bottom-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent" />
          </div>
          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div className="flex flex-col lg:flex-row gap-10 md:gap-12 items-stretch"
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <div className="lg:w-1/2 space-y-6 md:space-y-8">
                <div>
                  <span className="inline-block mb-3 px-3 py-1 rounded-full text-xs md:text-sm bg-muted text-foreground/80">Advertising Solutions</span>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
                    Our Advertising
                    <br />
                    <span className="bg-gradient-to-r from-primary via-foreground to-primary bg-clip-text text-transparent">Excellence</span>
                  </h2>
                </div>
                <div className="relative rounded-xl p-6 border border-border bg-card/70 backdrop-blur-xl shadow-sm">
                  <div className="absolute -left-0.5 top-6 h-10 w-1 rounded-r-full bg-gradient-to-b from-primary to-foreground/70" />
                  <p className="text-foreground/85">Our most successful movie association campaign has been with Radha TMT across multiple platforms — Airports, OOH hoardings, and electronics in Andhra Pradesh.</p>
                </div>
                <div className="space-y-4">
                  <p className="text-foreground/85">Today’s brands must embody values that resonate with their core audiences. We develop ideas that:</p>
                  <ul className="space-y-3">
                    {[
                      'Capture attention through creative storytelling',
                      'Foster connection with target demographics',
                      'Inspire action at key decision moments',
                      'Drive measurable business and societal impact',
                    ].map((text) => (
                      <li key={text} className="flex items-start gap-3">
                        <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/15 text-primary">
                          <ArrowRight className="h-3.5 w-3.5" />
                        </span>
                        <span className="text-sm md:text-base text-foreground/90">{text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="lg:w-1/2 w-full">
                <motion.div className="relative rounded-3xl overflow-hidden border border-border shadow-xl group"
                  initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                  <div className="bg-black">
                    <img src={'/images/exe.png'} alt="Advertising Showcase" className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-5 md:p-6">
                    <div className="inline-flex items-center bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-full mb-3 border border-white/10">
                      <span className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse" />
                      <span className="text-xs font-medium text-white/90">Case Study</span>
                    </div>
                    <h3 className="text-white text-xl md:text-2xl font-bold">Radha TMT Campaign</h3>
                    <p className="text-white/80 text-sm">Multi-platform advertising success</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
              initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ staggerChildren: 0.08 }}>
              {[
                { icon: <Radio className="h-5 w-5" />, title: 'FM Radio Channels', desc: 'Strategic slots across popular stations' },
                { icon: <MapPin className="h-5 w-5" />, title: 'Outdoor Advertising', desc: 'Hoardings, bus wraps, pole kiosks' },
                { icon: <Calendar className="h-5 w-5" />, title: 'Customized Events', desc: 'Brand activations and promos' },
                { icon: <Tv className="h-5 w-5" />, title: 'TV Advertisements', desc: 'Prime-time across national/regional' },
              ].map((f) => (
                <motion.div key={f.title} className="rounded-xl border border-border bg-card/70 backdrop-blur-xl p-5 shadow-sm hover:shadow-md transition"
                  variants={{ hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4 } } }}>
                  <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary grid place-items-center mb-3">{f.icon}</div>
                  <h4 className="font-semibold mb-1">{f.title}</h4>
                  <p className="text-sm text-foreground/70">{f.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Cinematic Achievements */}
        <section className="relative py-16 px-6 overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-primary/15 blur-3xl" />
            <div className="absolute top-1/3 -right-24 h-64 w-64 rounded-full bg-foreground/10 blur-3xl" />
          </div>
          <div className="max-w-6xl mx-auto">
            <div className="text-center">
              <motion.h2 className="text-3xl md:text-5xl font-extrabold tracking-tight"
                initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <span className="inline-block bg-gradient-to-r from-primary via-foreground to-primary animate-gradient bg-[length:220%_220%] bg-clip-text text-transparent">Cinematic Achievements</span>
              </motion.h2>
              <motion.p className="mt-3 md:mt-4 text-foreground/80 max-w-2xl mx-auto"
                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.15 }}>
                Celebrating our successful collaborations in film.
              </motion.p>
            </div>
            <motion.div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4"
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
              {[
                { k: '20+', v: 'Major Films' },
                { k: '30+', v: 'Brand Tie-ups' },
                { k: '50M+', v: 'Impressions' },
              ].map((m) => (
                <div key={m.v} className="rounded-xl border border-border bg-card/70 backdrop-blur-xl p-5 text-center">
                  <div className="text-3xl md:text-4xl font-extrabold">{m.k}</div>
                  <div className="text-foreground/70 mt-1">{m.v}</div>
                </div>
              ))}
            </motion.div>
            <motion.div className="mt-8 rounded-2xl overflow-hidden border border-border shadow-lg"
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.25 }}>
              <img src={'/images/all.webp'} alt="Movie associations" className="w-full h-auto object-cover" />
            </motion.div>
          </div>
        </section>

        {/* Media Planning & Buying */}
        <section className="relative py-16 px-6 overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-primary/15 blur-3xl" />
            <div className="absolute top-1/3 -right-24 h-64 w-64 rounded-full bg-foreground/10 blur-3xl" />
          </div>
          <div className="max-w-6xl mx-auto">
            <div className="text-center">
              <motion.h2 className="text-3xl md:text-5xl font-extrabold tracking-tight"
                initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <span className="inline-block bg-gradient-to-r from-primary via-foreground to-primary animate-gradient bg-[length:220%_220%] bg-clip-text text-transparent">Media Planning & Buying</span>
              </motion.h2>
              <motion.p className="mt-3 md:mt-4 text-foreground/80 max-w-2xl mx-auto"
                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.15 }}>
                Comprehensive 360° media solutions with measurable impact across channels.
              </motion.p>
            </div>
            <motion.div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4"
              initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="rounded-xl border border-border bg-card/60 p-5">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 text-primary grid place-items-center">
                    <Radio className="h-4 w-4" />
                  </div>
                  <h3 className="text-lg font-semibold">FM Radio Channels</h3>
                </div>
                <p className="text-foreground/80 mt-2">Strategic radio advertising across popular stations</p>
                <p className="text-primary font-medium mt-2">50+ stations nationwide</p>
              </div>
              <div className="rounded-xl border border-border bg-card/60 p-5">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 text-primary grid place-items-center">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <h3 className="text-lg font-semibold">Outdoor Advertising</h3>
                </div>
                <p className="text-foreground/80 mt-2">Hoarding, bus branding, pole kiosk, wall painting</p>
                <p className="text-primary font-medium mt-2">1000+ locations covered</p>
              </div>
              <div className="rounded-xl border border-border bg-card/60 p-5">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 text-primary grid place-items-center">
                    <Calendar className="h-4 w-4" />
                  </div>
                  <h3 className="text-lg font-semibold">Customized Events</h3>
                </div>
                <p className="text-foreground/80 mt-2">Brand activations and promotional events</p>
                <p className="text-primary font-medium mt-2">200+ successful events</p>
              </div>
              <div className="rounded-xl border border-border bg-card/60 p-5">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 text-primary grid place-items-center">
                    <Tv className="h-4 w-4" />
                  </div>
                  <h3 className="text-lg font-semibold">TV Advertisements</h3>
                </div>
                <p className="text-foreground/80 mt-2">Prime time spots across national and regional channels</p>
                <p className="text-primary font-medium mt-2">30+ channels partnered</p>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      {/* Empower Your Creative Vision Card - last */}
      <section className="px-6 mt-10 mb-10">
        <div className="mx-auto max-w-5xl rounded-3xl border border-border/60 bg-gradient-to-b from-card/60 to-card/40 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.35)] overflow-hidden">
          <div className="relative p-8 md:p-12">
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(1200px_300px_at_50%_-20%,hsl(var(--primary)/0.12),transparent)]" />
            <h3 className="relative text-2xl md:text-3xl font-extrabold tracking-tight text-center">Empower Your Creative Vision</h3>
            <p className="relative mt-4 text-center text-foreground/80 max-w-3xl mx-auto">We connect exceptional creators with the right audience through strategic and impactful advertising. Amplify your message—right where it matters.</p>
            <div className="relative mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link href="/contact" className="rounded-full px-6 py-3 bg-foreground text-background hover:bg-foreground/90 transition">Start Your Campaign</Link>
              <Link href="/clients/artists" className="rounded-full px-6 py-3 border border-border hover:bg-muted transition">See Success Stories</Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Artists;


