import Link from 'next/link';
import { Instagram, Linkedin, Facebook, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="relative overflow-hidden bg-card border-t border-border">
      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* Subtle grid */}
        <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.25) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.25) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        {/* Ambient gradients */}
        <div className="absolute -top-24 -left-24 h-56 w-56 md:h-72 md:w-72 bg-gradient-to-br from-primary/20 to-foreground/10 rounded-full blur-3xl opacity-40" />
        <div className="absolute bottom-[-60px] right-[-60px] h-48 w-48 md:h-64 md:w-64 bg-gradient-to-tr from-foreground/10 to-primary/20 rounded-full blur-3xl opacity-40" />
        {/* Top shimmer line */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      </div>
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-12">
          <div>
            <Link href="/" className="flex items-center space-x-3 mb-4">
              <img src="/images/Logo_design.png" alt="Logo" className="h-28 w-28 md:h-32 md:w-32 rounded object-contain transition-all duration-300 hover:scale-105" style={{ backgroundColor: 'transparent', backgroundImage: 'none' }} />
            </Link>
            <p className="text-sm md:text-base text-muted-foreground max-w-sm">
              Empowering brands with strategic marketing & cinematic storytelling that inspires and drives engagement.
            </p>
          </div>
          <div>
            <h4 className="text-base font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm md:text-base">
              <li><Link href="/" className="group inline-flex items-center text-muted-foreground hover:text-primary transition-colors"><span className="mr-2 h-[2px] w-0 bg-primary transition-all duration-300 group-hover:w-3" />Home</Link></li>
              <li><Link href="/about" className="group inline-flex items-center text-muted-foreground hover:text-primary transition-colors"><span className="mr-2 h-[2px] w-0 bg-primary transition-all duration-300 group-hover:w-3" />About</Link></li>
              <li><Link href="/services" className="group inline-flex items-center text-muted-foreground hover:text-primary transition-colors"><span className="mr-2 h-[2px] w-0 bg-primary transition-all duration-300 group-hover:w-3" />Services</Link></li>
              <li><Link href="/clients/partners" className="group inline-flex items-center text-muted-foreground hover:text-primary transition-colors"><span className="mr-2 h-[2px] w-0 bg-primary transition-all duration-300 group-hover:w-3" />Clients</Link></li>
              <li><Link href="/contact" className="group inline-flex items-center text-muted-foreground hover:text-primary transition-colors"><span className="mr-2 h-[2px] w-0 bg-primary transition-all duration-300 group-hover:w-3" />Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-base font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm md:text-base">
              <li><Link href="/services#co-branding" className="group inline-flex items-center text-muted-foreground hover:text-primary transition-colors"><span className="mr-2 h-[2px] w-0 bg-primary transition-all duration-300 group-hover:w-3" />Co-Branding</Link></li>
              <li><Link href="/services#advertising" className="group inline-flex items-center text-muted-foreground hover:text-primary transition-colors"><span className="mr-2 h-[2px] w-0 bg-primary transition-all duration-300 group-hover:w-3" />Advertising</Link></li>
              <li><Link href="/services#media-planning" className="group inline-flex items-center text-muted-foreground hover:text-primary transition-colors"><span className="mr-2 h-[2px] w-0 bg-primary transition-all duration-300 group-hover:w-3" />Social Media Planning & Buying</Link></li>
              <li><Link href="/services#distribution" className="group inline-flex items-center text-muted-foreground hover:text-primary transition-colors"><span className="mr-2 h-[2px] w-0 bg-primary transition-all duration-300 group-hover:w-3" />Film Distribution</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-base font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm md:text-base text-muted-foreground">
              <li className="flex items-start gap-3"><MapPin className="h-4 w-4 mt-1" /> 123 Creative Street, Mumbai, India 400001</li>
              <li className="flex items-start gap-3"><Mail className="h-4 w-4 mt-1" /> info@vpproduction.com</li>
              <li className="flex items-start gap-3"><Phone className="h-4 w-4 mt-1" /> +91 98765 43210</li>
            </ul>
            <div className="mt-4 flex items-center gap-4">
              <a href="https://www.facebook.com/vicky.parekh.77/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/v_parekh2434" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/v_parekh2434" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-10 md:mt-12 h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="mt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">© {currentYear} VP Productions. All Rights Reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;