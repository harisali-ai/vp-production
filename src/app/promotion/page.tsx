"use client";

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GallerySection from '@/components/GallerySection';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
const logoUrl = '/images/Logo.webp';

type VideoTestimonial = {
  id: number;
  title: string;
  src: string;
  thumbnail: string;
};

// Load local videos from public folder dynamically
const videoTestimonials: VideoTestimonial[] = Array.from({ length: 28 }, (_, i) => {
  const id = i + 1;
  const thumbIndex = ((id - 1) % 16) + 1; // v1.webp to v16.webp cycle
  const thumbPath = `/promotion/v${thumbIndex}.webp`;
  return {
    id,
    title: `Video ${id.toString().padStart(2, '0')}`,
    src: `/images/vid${id}.mp4`,
    thumbnail: thumbPath,
  };
});

const Promotion = () => {
  const [activeVideo, setActiveVideo] = useState<string>(videoTestimonials[0]?.src ?? '');
  const [autoplay, setAutoplay] = useState<boolean>(true);
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const router = useRouter();

  const scrollSlider = (direction: 'left' | 'right') => {
    if (!sliderRef.current) return;
    const amount = sliderRef.current.offsetWidth;
    sliderRef.current.scrollBy({ left: direction === 'left' ? -amount : amount, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-16 md:pt-24 px-0 md:px-10 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
          <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-primary/20 blur-3xl animate-float-slow" />
          <div className="absolute top-1/3 -right-24 h-64 w-64 rounded-full bg-foreground/10 blur-3xl animate-float-slow" />
          </div>

        {/* HERO with background video */}
        <section className="w-full">
          <div className="relative mx-auto w-full max-w-7xl h-[46vh] md:h-[58vh] overflow-hidden rounded-none md:rounded-3xl mb-8 md:mb-12">
            {activeVideo && (
              <video key={`hero-${activeVideo}`} src={activeVideo} className="absolute inset-0 w-full h-full object-cover" autoPlay={autoplay} muted loop playsInline />
            )}
            <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/40 to-background/70" />
            <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center">
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
                <span className="inline-block bg-gradient-to-r from-primary via-foreground to-primary animate-gradient bg-[length:220%_220%] bg-clip-text text-transparent drop-shadow">
                  Promotion Showcase
                </span>
              </h1>
              <p className="mt-4 md:mt-6 max-w-2xl text-foreground/85 text-base md:text-xl">
                Watch authentic client stories and brand collaborations that moved the needle.
              </p>
              <div className="mt-6 flex items-center gap-3">
                <Button size="lg" className="rounded-full" onClick={() => setActiveVideo(videoTestimonials[0]?.src ?? '')}>Play Highlight</Button>
                <Button size="lg" variant="outline" className="rounded-full" onClick={() => router.push('/contact')}>Contact Us</Button>
              </div>
              <div className="mt-3 flex items-center gap-3 text-sm text-foreground/70">
                <button className="underline-offset-4 hover:underline" onClick={() => setAutoplay((v) => !v)}>
                  Autoplay: {autoplay ? 'On' : 'Off'}
                </button>
                <span>• {videoTestimonials.length} videos</span>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-6 mt-6 md:mt-10">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <h2 className="text-center text-3xl md:text-4xl font-extrabold tracking-tight">
              <span className="inline-block">Client Video Testimonials</span>
            </h2>
            <p className="text-center text-foreground/80 max-w-2xl mx-auto mt-3 md:mt-4 text-base md:text-xl">
              Experience the impact of our collaborations. Real stories, real results.
            </p>
          </motion.div>

          <motion.div className="relative mx-auto w-full max-w-screen-lg mt-10 overflow-hidden rounded-3xl border border-border/60 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.35)] hover:shadow-[0_25px_80px_-20px_rgba(0,0,0,0.45)] bg-gradient-to-br from-background via-muted/40 to-background p-1 transition-all duration-500 hover:scale-[1.02]"
            initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <div className="relative w-full h-[220px] sm:h-[300px] md:h-[420px] lg:h-[500px] rounded-2xl overflow-hidden">
              {activeVideo ? (
                <video key={activeVideo} src={activeVideo} className="absolute inset-0 w-full h-full object-cover" controls autoPlay={autoplay} muted loop />
              ) : (
                <div className="absolute inset-0 grid place-items-center text-center text-muted-foreground">
                  <div>
                    <div className="mb-2">No video selected</div>
                    <Button size="sm" variant="outline" onClick={() => setActiveVideo(videoTestimonials[0]?.src ?? '')}>Play First Video</Button>
                  </div>
                </div>
              )}
              <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-background/50 to-transparent" />
            </div>
          </motion.div>

          <div className="mt-6 mb-10 flex items-center gap-2 justify-center">
            <Button variant="ghost" size="icon" aria-label="Scroll left" onClick={() => scrollSlider('left')} className="rounded-full hover:bg-muted/60 transition-all duration-300 hover:scale-110 hover:shadow-md">
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <div ref={sliderRef} className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide max-w-6xl">
              {videoTestimonials.map((video) => (
                <motion.button key={video.id} whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }} onClick={() => setActiveVideo(video.src)}
                  className={`relative flex-shrink-0 w-44 h-28 md:w-48 md:h-28 rounded-xl overflow-hidden border transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 ${activeVideo === video.src ? 'border-primary ring-2 ring-primary/30 shadow-lg shadow-primary/30' : 'border-border hover:border-primary/50'}`}
                  aria-label={video.title} title={video.title}>
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-primary/5" />
                  <img src={logoUrl} alt="Logo" className="absolute inset-0 w-full h-full object-contain p-4 opacity-90" />
                  <div className="absolute inset-0 bg-black/10 grid place-items-center">
                    <div className={`w-10 h-10 rounded-full grid place-items-center transition-colors ${activeVideo === video.src ? 'bg-primary' : 'bg-white/85 hover:bg-primary/90'}`}>
                      <Play className={`h-5 w-5 ${activeVideo === video.src ? 'text-white' : 'text-foreground'}`} />
                    </div>
                    <span className="absolute top-1 right-2 text-xs text-white/90">{video.id.toString().padStart(2, '0')}</span>
                    <span className="absolute left-2 bottom-1 pr-10 max-w-[88%] text-[11px] leading-tight text-white/95 line-clamp-2 break-words">
                      {video.title}
                    </span>
                  </div>
                </motion.button>
              ))}
                </div>
            <Button variant="ghost" size="icon" aria-label="Scroll right" onClick={() => scrollSlider('right')} className="rounded-full hover:bg-muted/60 transition-all duration-300 hover:scale-110 hover:shadow-md">
              <ChevronRight className="h-5 w-5" />
                </Button>
              </div>
        </section>

        <GallerySection />
        {/* Empower Your Creative Vision Card */}
        <section className="px-6 mt-12">
          <div className="mx-auto max-w-5xl rounded-3xl border border-border/60 bg-gradient-to-b from-card/60 to-card/40 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.35)] overflow-hidden">
            <div className="relative p-8 md:p-12">
              <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(1200px_300px_at_50%_-20%,hsl(var(--primary)/0.12),transparent)]" />
              <h3 className="relative text-2xl md:text-3xl font-extrabold tracking-tight text-center">
                Empower Your Creative Vision
              </h3>
              <p className="relative mt-4 text-center text-foreground/80 max-w-3xl mx-auto">
                We connect exceptional creators with the right audience through strategic and impactful advertising. Amplify your message—right where it matters.
              </p>
              <div className="relative mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
                <Button size="lg" className="rounded-full" onClick={() => router.push('/contact')}>Start Your Campaign</Button>
                <Button size="lg" variant="outline" className="rounded-full" onClick={() => router.push('/clients/artists')}>See Success Stories</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Promotion;
