"use client";

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
const gopalLogoUrl = '/images/gopal-namkeen.png';
const radhaTmtUrl = '/images/Client-2.webp';

type Client = {
  name: string;
  position: string;
  feedback: string;
  image: string;
};

const clientReviews: Client[] = [
  {
    name: 'Jaydeep Mehta',
    position: 'Marketing Head  -  Gopal Namkeen',
    feedback:
      'The enthusiasm and compassion you show towards your customers and colleagues are truly contagious and motivating. Vivek, your expertise and support have made working with you a fantastic experience!',
    image: gopalLogoUrl,
  },
  {
    name: 'Neha Singh',
    position: 'Marketing Head - Radha TMT',
    feedback:
      'Your charisma and sense of humor create a relaxed and enjoyable work environment. Loved working with you!',
    image: radhaTmtUrl,
  },
];

const Card = ({ client }: { client: Client }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-150, 150], [7, -7]);
  const rotateY = useTransform(mouseX, [-150, 150], [-7, 7]);

  const springRotateX = useSpring(rotateX, { damping: 20, stiffness: 300 });
  const springRotateY = useSpring(rotateY, { damping: 20, stiffness: 300 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 3;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };
  
  return (
    <motion.article
      className="group relative bg-card/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 border border-border hover:border-foreground/40 transition-all duration-300 shadow-lg hover:shadow-xl"
      style={{ perspective: '1000px', rotateX: springRotateX, rotateY: springRotateY }}
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: 'easeOut', type: 'spring', stiffness: 100 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-foreground/5 to-primary/10 pointer-events-none" />
      <Quote className="absolute top-6 right-6 h-8 w-8 text-foreground/30" />
      <div className="flex items-center gap-5 md:gap-6 mb-6 md:mb-8">
        <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 to-foreground/20 blur-md opacity-60" />
          <div className="absolute inset-0 rounded-full ring-2 ring-border/80" />
          <img src={client.image} alt={client.name} className="absolute inset-0 w-full h-full object-contain bg-background" />
        </div>
        <div>
          <h3 className="text-xl md:text-2xl font-semibold">{client.name}</h3>
          <p className="text-sm md:text-base text-muted-foreground">{client.position}</p>
        </div>
      </div>
      <p className="text-base md:text-lg text-foreground/90 leading-relaxed relative z-10">{client.feedback}</p>
      <div className="mt-6 flex gap-2 text-primary/80">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-current" />
      ))}
    </div>
      <div className="mt-6 h-px w-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 bg-gradient-to-r from-primary/40 via-primary to-primary/40" />
    </motion.article>
  );
};

const Reviews = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-grow pt-24 pb-20 px-6 md:px-10 relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage:
                'linear-gradient(to right, rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.2) 1px, transparent 1px)',
              backgroundSize: '32px 32px',
            }}
          />
          <div className="absolute -top-24 -left-24 h-56 w-56 md:h-72 md:w-72 bg-gradient-to-br from-primary/20 to-foreground/10 rounded-full blur-3xl opacity-50" />
          <div className="absolute top-1/3 -right-20 h-48 w-48 md:h-64 md:w-64 bg-gradient-to-tr from-foreground/10 to-primary/20 rounded-full blur-3xl opacity-50" />
          <div className="aurora-layer absolute inset-0 opacity-30" />
          <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-background to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent" />
          </div>
        <div className="container mx-auto max-w-6xl">
          <motion.header
            className="text-center mb-14 md:mb-20"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative max-w-4xl mx-auto overflow-hidden rounded-3xl border border-border/60 bg-card/60 backdrop-blur supports-[backdrop-filter]:bg-card/50 px-6 md:px-10 py-8">
              <div className="pointer-events-none absolute inset-0">
                <div className="absolute -top-20 -left-16 h-48 w-48 md:h-64 md:w-64 bg-gradient-to-br from-primary/25 to-foreground/15 rounded-full blur-3xl opacity-70" />
                <div className="absolute -bottom-16 -right-16 h-48 w-48 md:h-64 md:w-64 bg-gradient-to-tr from-foreground/15 to-primary/25 rounded-full blur-3xl opacity-70" />
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
              </div>
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center mb-5">
                  <div className="bg-muted/80 p-3 rounded-2xl inline-flex items-center justify-center">
                    <Star className="h-6 w-6 text-muted-foreground" />
                  </div>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight mb-3">
                  <span
                    className="bg-clip-text text-transparent animate-gradient"
                    style={{
                      backgroundImage:
                        'linear-gradient(90deg, hsl(var(--primary)) 0%, hsl(var(--foreground)) 50%, hsl(var(--primary)) 100%)',
                      backgroundSize: '200% auto',
                    }}
                  >
                    Client Experiences
                  </span>
                </h1>
                <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
                  Discover how we help brands succeed through genuine partnerships and measurable results.
                </p>
                <div className="mx-auto mt-5 h-[2px] w-24 rounded-full bg-gradient-to-r from-transparent via-primary to-transparent" />
              </div>
            </div>
          </motion.header>

          

          <div className="grid gap-6 md:grid-cols-2">
            {clientReviews.map((client, index) => (
              <Card key={index} client={client} />
            ))}
                </div>
              </div>
              
        <div className="mt-16 md:mt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-2xl border border-border/60 bg-card/70 backdrop-blur supports-[backdrop-filter]:bg-card/60 p-6 md:p-10 text-center"
          >
            <div className="pointer-events-none absolute inset-0 -z-10">
              <div className="absolute -top-16 left-1/4 h-56 w-56 md:h-72 md:w-72 bg-gradient-to-br from-primary/20 to-foreground/10 rounded-full blur-3xl opacity-50" />
              <div className="absolute -bottom-10 right-1/4 h-48 w-48 md:h-64 md:w-64 bg-gradient-to-tr from-foreground/10 to-primary/20 rounded-full blur-3xl opacity-50" />
            </div>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-primary to-foreground bg-clip-text text-transparent">Empower Your Creative Vision</span>
            </h2>
            <p className="mt-3 md:mt-4 text-base md:text-lg text-foreground/80 max-w-3xl mx-auto">
              We connect exceptional creators with the right audience through strategic and impactful advertising. Amplify your message—right where it matters.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="/contact"
                className="group inline-flex items-center justify-center bg-foreground text-background hover:bg-foreground/90 shadow text-sm md:text-base px-5 py-3 rounded-full transition-colors"
              >
                Start Your Campaign
              </a>
              <a
                href="/clients/artists"
                className="group inline-flex items-center justify-center border border-border text-foreground bg-background hover:bg-muted shadow-sm text-sm md:text-base px-5 py-3 rounded-full transition-colors"
              >
                See Success Stories
              </a>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Reviews;
