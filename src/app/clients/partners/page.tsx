"use client";

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import { motion } from 'framer-motion';

// Local images
const mmcLogo = '/images/multimedia-communications.png';
const equinoxLogo = '/images/Equinox-filmcity.jpeg';
const sarfiraImg = '/images/srfira.webp';
const shaitaanImg = '/images/shataan.webp';
const chanduImg = '/images/chandu_champion.webp';
const srikanthImg = '/images/srikanth.webp';

const madhukunj = '/images/madhukunj.png';
const moira = '/images/moira-logo.png';
const radhaTmt = '/images/Client-2.webp';
const vikramTea = '/images/Client-3.webp';
const jindal = '/images/Client-10.webp';
const ambaniHome = '/images/Client-6.webp';
const silver = '/images/Client-5.webp';
const sumolex = '/images/sumolex.png';
const eventGreenTea = '/images/Client-7.webp';
const gopal = '/images/gopal-namkeen.png';

type MovieAssociation = { name: string; logo: string };
type Partner = { name: string; description: string; logo: string };
type Client = { name: string; logo: string };

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { y: 16, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
};

const partners: Partner[] = [
  {
    name: 'MULTIMEDIA COMMUNICATION',
    description:
      'Multi Media Communications is connected to various media outlets like Print, FM Radio, Television, Outdoor, Cinema. Their services include Design (Print, Digital, Electronic), Media Planning & Buying (Pan India & Worldwide), Digital Advertising, In-theatre Advertising, and Events & PR services.',
    logo: mmcLogo,
  },
  {
    name: 'EQUINOX - FILM CITY',
    description:
      'A production and promotion distribution house in Kolkata, founded in 2010 by Ms. Jhuma Paul, aims to create engaging narratives that inspire, entertain, and stimulate thought globally. They prioritize creativity, diversity, and excellence in cinematic storytelling.',
    logo: equinoxLogo,
  },
];

const movieAssociations: MovieAssociation[] = [
  { name: 'SARFIRA', logo: sarfiraImg },
  { name: 'SHAITAAN', logo: shaitaanImg },
  { name: 'CHANDU CHAMPION', logo: chanduImg },
  { name: 'SRIKANTH', logo: srikanthImg },
];

const clients: Client[] = [
  { name: 'Madhukunj', logo: madhukunj },
  { name: 'Moira', logo: moira },
  { name: 'Radha TMT', logo: radhaTmt },
  { name: 'Vikram Tea', logo: vikramTea },
  { name: 'Jindal', logo: jindal },
  { name: 'Ambani Home', logo: ambaniHome },
  { name: 'Silver', logo: silver },
  { name: 'Sumolex', logo: sumolex },
  { name: 'Event Green Tea', logo: eventGreenTea },
  { name: 'Gopal Namkeen', logo: gopal },
];

const ClientsPartners = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24 md:pt-28">
        {/* Hero */}
        <section className="px-6">
          <div className="container mx-auto max-w-6xl text-center">
            <motion.h1 initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-extrabold tracking-tight">
              <span className="inline-block bg-gradient-to-r from-primary via-foreground to-primary animate-gradient bg-[length:220%_220%] bg-clip-text text-transparent">Our Partners</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
              className="mt-4 text-foreground/80 max-w-3xl mx-auto">
              Strategic alliances and brand collaborations that amplify impact across media and cinema.
            </motion.p>
          </div>
        </section>

        {/* Main Partners */}
        <section className="px-6 mt-10">
          <div className="container mx-auto max-w-6xl">
            <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
              className="grid md:grid-cols-2 gap-6">
              {partners.map((p) => (
                <motion.article key={p.name} variants={itemVariants}
                  className="group relative rounded-2xl border border-border bg-card/60 backdrop-blur-xl shadow-lg overflow-hidden transition-all hover:shadow-xl">
                  <div className="absolute inset-0 bg-[radial-gradient(600px_200px_at_20%_-10%,hsl(var(--primary)/0.12),transparent)] opacity-80" />
                  <div className="relative p-6 md:p-8 flex gap-5 items-start">
                    <div className="h-20 w-20 shrink-0 rounded-2xl overflow-hidden ring-1 ring-border bg-background">
                      <img src={p.logo} alt={p.name} className="h-full w-full object-contain" />
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-extrabold">{p.name}</h3>
                      <p className="mt-3 text-foreground/80 leading-relaxed">{p.description}</p>
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Clients Logo Wall */}
        <section className="px-6 mt-14">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-center text-3xl md:text-4xl font-extrabold tracking-tight mb-8">Our Valued Clients</h2>
            <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
              {clients.map((c) => (
                <motion.div key={c.name} variants={itemVariants}
                  className="group rounded-xl border border-border/70 bg-card/60 backdrop-blur-xl p-4 grid place-items-center shadow-sm hover:shadow-md transition-all">
                  <img src={c.logo} alt={c.name} className="h-16 md:h-20 object-contain opacity-80 group-hover:opacity-100 transition-opacity grayscale hover:grayscale-0" />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Movie Associations */}
        <section className="px-6 mt-14">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-center text-3xl md:text-4xl font-extrabold tracking-tight mb-8">Cinematic Collaborations</h2>
            <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {movieAssociations.map((m) => (
                <motion.article key={m.name} variants={itemVariants}
                  className="group relative rounded-2xl overflow-hidden border border-border bg-card/60 backdrop-blur-xl shadow-lg">
                  <img src={m.logo} alt={m.name} className="h-56 sm:h-64 w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                    <h3 className="text-white font-bold">{m.name}</h3>
                    <div className="h-1 w-10 bg-white/80 rounded-full" />
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Empower Your Creative Vision Card */}
        <section className="px-6 mt-16">
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
                <button className="rounded-full px-6 py-3 bg-foreground text-background hover:bg-foreground/90 transition">Start Your Campaign</button>
                <button className="rounded-full px-6 py-3 border border-border hover:bg-muted transition" onClick={() => window.location.assign('/clients/artists')}>See Success Stories</button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ClientsPartners;
