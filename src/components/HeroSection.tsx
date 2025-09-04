"use client";

import { Button } from '@/components/ui/button';
import { ChevronDown, Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useState } from 'react';

const HeroSection = () => {
  const router = useRouter();
  const containerVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.02, delayChildren: 0.05, duration: 0.5, ease: 'easeOut' }
    }
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  } as const;

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen w-full bg-background relative overflow-hidden">
      {/* Mobile-only menu icon fixed at top when header is hidden */}
      <div className="lg:hidden fixed top-0 inset-x-0 z-50">
        <div className="w-full px-4 h-20 flex items-center justify-end">
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-lg focus-visible:ring-2 focus-visible:ring-foreground/30 ring-offset-2 ring-offset-background">
                <Menu className="h-6 w-6 text-foreground" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-background max-w-[100vw] w-[85vw] sm:w-[24rem]">
              <div className="flex flex-col space-y-6 pt-6">
                <div className="flex justify-between items-center mb-4">
                  <Link href="/" className="flex items-center space-x-2" onClick={() => setMobileMenuOpen(false)}>
                    <img src="/images/Logo.webp" alt="Logo" className="h-8 w-8" />
                    <span className="text-black font-medium">VP Productions</span>
                  </Link>
                  <Button variant="ghost" size="icon" className="rounded-lg focus-visible:ring-2 focus-visible:ring-foreground/30 ring-offset-2 ring-offset-background" onClick={() => setMobileMenuOpen(false)}>
                    <X className="h-5 w-5 text-foreground" />
                    <span className="sr-only">Close menu</span>
                  </Button>
                </div>
                <nav className="flex flex-col space-y-2">
                  <Link href="/" onClick={() => setMobileMenuOpen(false)} className="text-base text-foreground/85 hover:text-foreground transition-colors py-3 rounded-md">Home</Link>
                  <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="text-base text-foreground/85 hover:text-foreground transition-colors py-3 rounded-md">About</Link>
                  <Link href="/services" onClick={() => setMobileMenuOpen(false)} className="text-base text-foreground/85 hover:text-foreground transition-colors py-3 rounded-md">Services</Link>
                  <Link href="/promotion" onClick={() => setMobileMenuOpen(false)} className="text-base text-foreground/85 hover:text-foreground transition-colors py-3 rounded-md">Promotion</Link>
                  <Link href="/clients" onClick={() => setMobileMenuOpen(false)} className="text-base text-foreground/85 hover:text-foreground transition-colors py-3 rounded-md">Clients</Link>
                  <Link href="/reviews" onClick={() => setMobileMenuOpen(false)} className="text-base text-foreground/85 hover:text-foreground transition-colors py-3 rounded-md">Reviews</Link>
                </nav>
                <Button className="w-full bg-foreground text-background hover:bg-foreground/90 rounded-lg shadow py-6 text-base" onClick={() => { setMobileMenuOpen(false); router.push('/contact'); }}>
                  Contact Us
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
      {/* Attractive aurora + grid background */}
      <div className="absolute inset-0 z-0">
        {/* Aurora multi-layer background */}
        <div className="absolute -top-32 -left-20 h-80 w-80 rounded-full bg-gradient-to-tr from-primary/30 via-foreground/20 to-primary/10 aurora-layer" />
        <div className="absolute top-1/3 -right-16 h-72 w-72 rounded-full bg-gradient-to-bl from-foreground/25 via-primary/15 to-foreground/10 aurora-layer" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-16 left-1/3 h-64 w-64 rounded-full bg-gradient-to-t from-primary/20 via-foreground/10 to-transparent aurora-layer" style={{ animationDelay: '4s' }} />
        <div
          className="absolute inset-0 dark:hidden"
          style={{
            backgroundImage: `
              linear-gradient(to right, #e2e8f0 1px, transparent 1px),
              linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)
            `,
            backgroundSize: "20px 30px",
            WebkitMaskImage:
              "radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)",
            maskImage:
              "radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)",
          }}
        />
        <div
          className="absolute inset-0 hidden dark:block"
        style={{
          backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)
          `,
            backgroundSize: "20px 30px",
          WebkitMaskImage:
              "radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)",
          maskImage:
              "radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)",
          }}
        />
        {/* Top readability fade under header */}
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-background/70 to-transparent" />
      </div>

      <section className="min-h-screen flex items-start justify-center p-6 sm:p-8 pt-24 md:pt-24 relative z-10">
        <motion.div
          className="container mx-auto max-w-3xl text-center relative"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Blurred gradient behind text */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10 flex items-start justify-center"
          >
            <div className="mt-6 h-48 w-48 md:h-64 md:w-64 rounded-full bg-gradient-to-br from-primary/20 to-foreground/10 blur-3xl opacity-50" />
          </div>
          {/* Status Badge */}
          <motion.div className="flex justify-center" variants={itemVariants}>
            <div className="inline-flex items-center space-x-2 bg-card/70 dark:bg-card/60 backdrop-blur-xl border border-border/60 rounded-full px-4 md:px-6 py-2 md:py-3 mt-2 md:mt-3 mb-4 md:mb-5 shadow-sm ring-1 ring-transparent hover:ring-border/60 transition-shadow">
              <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_10px_3px_rgba(16,185,129,0.35)]"></div>
              <span className="text-xs md:text-sm font-medium text-foreground/80">
                Now booking production projects
              </span>
            </div>
          </motion.div>
          <motion.h1
            className="text-5xl md:text-5xl lg:text-6xl font-extrabold tracking-tight md:leading-[1.1] text-balance relative z-30"
            variants={itemVariants}
            initial={{ scale: 0.98, opacity: 0.98 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="relative inline-block">
              {/* Glow layer behind gradient text */}
              <span aria-hidden className="absolute inset-0 blur-[2px] opacity-25 dark:opacity-20 select-none">
                {Array.from("Vivek Parekh Productions").map((ch, i) => (
                  <span key={i} className="inline-block text-foreground/40">
                    {ch === ' ' ? '\u00A0' : ch}
                  </span>
                ))}
              </span>
              {/* Main animated gradient text */}
              <motion.span
                className="relative inline-block animate-gradient bg-clip-text text-transparent drop-shadow"
                style={{
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  backgroundRepeat: 'no-repeat',
                  willChange: 'background-position',
                  backgroundSize: '400% 400%',
                  // Theme-aware multi-stop diagonal gradient
                  backgroundImage:
                    'linear-gradient(120deg, hsl(var(--primary)) 0%, hsl(var(--accent)) 25%, hsl(var(--ring)) 50%, hsl(var(--foreground)) 75%, hsl(var(--primary)) 100%)',
                  animationDuration: '16s',
                  textShadow: '0 1px 1px rgba(0,0,0,0.08)'
                }}
                whileHover={{ scale: 1.01 }}
                initial="hidden"
                animate="visible"
                variants={{
                  visible: { transition: { staggerChildren: 0.018 } },
                  hidden: {}
                }}
              >
                {Array.from("Vivek Parekh Productions").map((ch, i) => (
                  <motion.span
                    key={i}
                    className="inline-block"
                    custom={i}
                    variants={{
                      hidden: (index: number) => ({ opacity: 0, y: index % 2 === 0 ? 8 : -8, rotateZ: index % 2 === 0 ? -1.2 : 1.2, scale: 0.99 }),
                      visible: { opacity: 1, y: 0, rotateZ: 0, scale: 1 }
                    }}
                    animate={{ y: [0, -2.5, 0, 2, 0], rotateZ: [0, -0.4, 0.3, 0], scale: [1, 1.008, 1] }}
                    transition={{ duration: 6, ease: 'easeInOut', repeat: Infinity, delay: i * 0.045 }}
                    style={{ willChange: 'transform, opacity', transformOrigin: 'center bottom', background: 'inherit', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
                  >
                    {ch === ' ' ? '\u00A0' : ch}
                  </motion.span>
                ))}
              </motion.span>

              {/* Soft shimmer overlay (lighter for smoothness) */}
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-clip-text text-transparent select-none mix-blend-multiply dark:mix-blend-screen"
                style={{
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundImage: 'linear-gradient(95deg, transparent 35%, rgba(255,255,255,0.5) 50%, transparent 65%)',
                  backgroundSize: '240% 240%',
                  animation: 'gradient-move 12s linear infinite'
                }}
              >
                <span className="inline-block">
                  {Array.from("Vivek Parekh Productions").map((ch, i) => (
                    <span key={i} className="inline-block">
                      {ch === ' ' ? '\u00A0' : ch}
                    </span>
                  ))}
                </span>
              </span>

            </span>
            <br className="hidden md:block" />
            <span className="mt-1.5 md:mt-2 inline-block uppercase tracking-widest text-sm md:text-lg text-foreground/80">Creative Agency</span>
          </motion.h1>
          <motion.div className="mx-auto mt-4 h-[2px] w-24 bg-foreground/30 rounded-full" variants={itemVariants} />
          <motion.p className="mt-5 md:mt-6 text-lg md:text-2xl text-foreground/70 md:text-foreground/80 leading-relaxed font-medium text-balance max-w-2xl mx-auto" variants={itemVariants}>
            Where strategic marketing meets artisan film production to elevate luxury brands
          </motion.p>
          <motion.div className="mt-7 md:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4" variants={itemVariants}>
                <Button 
                  size="lg" 
              variant="outline"
              onClick={() => router.push('/services')}
              aria-label="Explore Craftsmanship"
              className="group border-border bg-background hover:bg-muted/60 text-base rounded-full px-6 transition-all duration-300 focus-visible:ring-2 focus-visible:ring-foreground/30 focus-visible:outline-none ring-offset-2 ring-offset-background hover:translate-y-[-2px] hover:shadow-lg hover:shadow-primary/10"
            >
              <span className="mr-1 text-foreground group-hover:text-foreground">Explore Craftsmanship</span>
              <span className="opacity-0 group-hover:opacity-100 transition-opacity text-foreground">→</span>
                </Button>
                <Button 
                  size="lg" 
              onClick={() => router.push('/contact')}
              aria-label="Begin Collaboration"
              className="group bg-gradient-to-r from-foreground to-foreground/90 text-background hover:from-foreground/95 hover:to-foreground/80 shadow-lg hover:shadow-xl hover:shadow-foreground/20 text-base rounded-full px-6 transition-all duration-300 focus-visible:ring-2 focus-visible:ring-foreground/30 focus-visible:outline-none ring-offset-2 ring-offset-background hover:translate-y-[-2px] hover:scale-105"
            >
              <span className="mr-1 text-background group-hover:text-background">Begin Collaboration</span>
              <span className="opacity-0 group-hover:opacity-100 transition-opacity text-background">↗</span>
                </Button>
          </motion.div>
        </motion.div>
      </section>
      {/* Scroll Indicator */}
      <motion.div 
        className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 opacity-70 hover:opacity-100 transition-opacity cursor-pointer"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown className="h-6 w-6 text-foreground/60 hover:text-primary transition-colors" />
      </motion.div>
    </div>
  );
};

export default HeroSection;