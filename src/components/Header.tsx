"use client";

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Navbar as ResizableNavbar, NavBody, NavItems } from '@/components/ui/resizable-navbar';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Promotion', href: '/promotion' },
    { name: 'Reviews', href: '/reviews' }
  ];

  return (
    <>
      <ResizableNavbar>
        <NavBody>
          <div className="container mx-auto px-4 h-20 flex justify-between items-center">
        <Link href="/" className="hidden lg:flex items-center space-x-3" aria-label="Go to home">
          <img 
            src="/images/Logo_design.png"
            alt="Logo" 
            className="h-28 w-28 xl:h-32 xl:w-32 select-none object-contain shrink-0 transition-all duration-300 hover:opacity-90 hover:scale-105"
            style={{ 
              backgroundColor: 'transparent',
              backgroundImage: 'none'
            }}
          />
        </Link>
        
        
        {/* Desktop Navigation (lg and up) */}
        <div className="hidden lg:flex items-center gap-4">
          <NavItems
            items={navItems.map(n => ({ name: n.name, link: n.href }))}
          />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="rounded-full px-4 text-card-foreground">Clients</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-44">
              <DropdownMenuItem asChild>
                <Link href="/clients/partners" className="w-full">Partners</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/clients/artists" className="w-full">Artists</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
            <Button 
              variant="outline" 
              size="sm"
            className="border-border text-card-foreground hover:bg-muted/60 text-sm rounded-full shadow-sm hover:shadow-md transition-all duration-300 focus-visible:ring-2 focus-visible:ring-foreground/30 focus-visible:outline-none ring-offset-2 ring-offset-background hover:translate-y-[-1px]"
            onClick={() => router.push('/contact')}
            >
              <span className="text-card-foreground">Contact Us</span>
            </Button>
        </div>
        
        {/* Mobile / Tablet Navigation (below lg) */}
        <div className="lg:hidden">
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-lg focus-visible:ring-2 focus-visible:ring-foreground/30 ring-offset-2 ring-offset-background">
                <Menu className="h-6 w-6 text-card-foreground" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-background">
              <div className="flex flex-col space-y-6 pt-6">
                <div className="flex justify-between items-center mb-4">
                  <Link href="/" className="flex items-center space-x-3" onClick={() => setIsMenuOpen(false)}>
                    <img 
                      src="/images/Logo_design.png"
                      alt="Logo" 
                      className="h-12 w-12 object-contain transition-all duration-300 hover:scale-105"
                      style={{ 
                        backgroundColor: 'transparent',
                        backgroundImage: 'none'
                      }}
                    />
                  </Link>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="rounded-lg focus-visible:ring-2 focus-visible:ring-foreground/30 ring-offset-2 ring-offset-background"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <X className="h-5 w-5 text-foreground" />
                    <span className="sr-only">Close menu</span>
                  </Button>
                </div>
                
                <nav className="flex flex-col space-y-2">
                  {navItems.map((item) => (
                    <Link 
                      key={item.name}
                      href={item.href}
                      className="text-base text-foreground/85 hover:text-foreground transition-colors py-3 rounded-md"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <div className="pt-2 border-t border-border/60" />
                  <Link 
                    href="/clients/partners"
                    className="text-base text-foreground/85 hover:text-foreground transition-colors py-3 rounded-md"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Partners
                  </Link>
                  <Link 
                    href="/clients/artists"
                    className="text-base text-foreground/85 hover:text-foreground transition-colors py-3 rounded-md"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Artists
                  </Link>
                </nav>
                
                <Button 
                  className="w-full bg-foreground text-background hover:bg-foreground/90 rounded-lg shadow focus-visible:ring-2 focus-visible:ring-foreground/30 ring-offset-2 ring-offset-background py-6 text-base"
                  onClick={() => {
                    setIsMenuOpen(false);
                    router.push('/contact');
                  }}
                >
                  Contact Us
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
        </NavBody>
      </ResizableNavbar>
      {/* Theme switcher removed */}
    </>
  );
};

export default Header;