"use client";

import { useState, useEffect } from 'react';
import { Moon, Sun, Palette, ChevronLeft, ChevronRight } from 'lucide-react';

interface Theme {
  id: string;
  name: string;
  description: string;
  preview: string[];
  order: number;
}

const DEFAULT_THEME = 'lavender';

const themes: Theme[] = [
  {
    id: 'default',
    name: 'Warm Orange',
    description: 'Bright and energetic',
    preview: ['hsl(25, 95%, 53%)', 'hsl(33, 100%, 94%)', 'hsl(35, 100%, 98%)'],
    order: 1
  },
  {
    id: 'ocean',
    name: 'Ocean Blue',
    description: 'Cool and refreshing',
    preview: ['hsl(200, 98%, 45%)', 'hsl(195, 100%, 92%)', 'hsl(195, 100%, 98%)'],
    order: 2
  },
  {
    id: 'forest',
    name: 'Forest Green',
    description: 'Natural and calming',
    preview: ['hsl(140, 77%, 42%)', 'hsl(140, 40%, 92%)', 'hsl(140, 40%, 98%)'],
    order: 3
  },
  {
    id: 'sunset',
    name: 'Sunset Pink',
    description: 'Warm and vibrant',
    preview: ['hsl(320, 87%, 68%)', 'hsl(340, 100%, 92%)', 'hsl(340, 100%, 98%)'],
    order: 4
  },
  {
    id: 'vintage',
    name: 'Vintage Sepia',
    description: 'Classic and elegant',
    preview: ['hsl(35, 45%, 55%)', 'hsl(45, 25%, 85%)', 'hsl(45, 40%, 96%)'],
    order: 5
  },
  {
    id: 'sky',
    name: 'Sky Light',
    description: 'Airy and uplifting',
    preview: ['hsl(204, 94%, 48%)', 'hsl(201, 96%, 72%)', 'hsl(210, 40%, 98%)'],
    order: 6
  },
  {
    id: 'mint',
    name: 'Fresh Mint',
    description: 'Clean and creative',
    preview: ['hsl(158, 64%, 40%)', 'hsl(156, 58%, 72%)', 'hsl(150, 40%, 98%)'],
    order: 7
  },
  {
    id: 'rose',
    name: 'Soft Rose',
    description: 'Elegant and friendly',
    preview: ['hsl(340, 75%, 60%)', 'hsl(10, 90%, 95%)', 'hsl(330, 40%, 99%)'],
    order: 8
  },
  {
    id: 'sand',
    name: 'Warm Sand',
    description: 'Subtle and sophisticated',
    preview: ['hsl(35, 90%, 55%)', 'hsl(45, 80%, 80%)', 'hsl(35, 40%, 98%)'],
    order: 9
  },
  {
    id: 'lavender',
    name: 'Lavender Mist',
    description: 'Calm and imaginative',
    preview: ['hsl(265, 80%, 60%)', 'hsl(255, 80%, 85%)', 'hsl(260, 40%, 98%)'],
    order: 10
  },
  {
    id: 'peach',
    name: 'Peach Glow',
    description: 'Soft and inviting',
    preview: ['hsl(14, 90%, 60%)', 'hsl(25, 95%, 80%)', 'hsl(20, 50%, 99%)'],
    order: 11
  },
  {
    id: 'aurora',
    name: 'Aurora',
    description: 'Ethereal greens & blues',
    preview: ['hsl(168, 70%, 40%)', 'hsl(188, 85%, 52%)', 'hsl(168, 44%, 98%)'],
    order: 12
  },
  {
    id: 'citrus',
    name: 'Citrus',
    description: 'Lively and zesty',
    preview: ['hsl(83, 80%, 46%)', 'hsl(50, 98%, 55%)', 'hsl(72, 60%, 98%)'],
    order: 13
  },
  {
    id: 'aqua',
    name: 'Aqua',
    description: 'Clean aqua teal',
    preview: ['hsl(186, 90%, 45%)', 'hsl(192, 90%, 55%)', 'hsl(190, 50%, 98%)'],
    order: 14
  },
  {
    id: 'blossom',
    name: 'Blossom',
    description: 'Pastel pink & lilac',
    preview: ['hsl(300, 70%, 60%)', 'hsl(280, 70%, 60%)', 'hsl(300, 40%, 99%)'],
    order: 15
  },
  {
    id: 'cream',
    name: 'Cream',
    description: 'Soft and neutral',
    preview: ['hsl(25, 90%, 55%)', 'hsl(20, 85%, 55%)', 'hsl(40, 40%, 99%)'],
    order: 16
  },
  {
    id: 'horizon',
    name: 'Horizon',
    description: 'Blue to purple sunrise',
    preview: ['hsl(250, 85%, 60%)', 'hsl(220, 90%, 70%)', 'hsl(240, 40%, 98%)'],
    order: 17
  },
  {
    id: 'pastel-candy',
    name: 'Pastel Candy',
    description: 'Playful pastel blend',
    preview: ['hsl(280, 70%, 65%)', 'hsl(200, 85%, 75%)', 'hsl(210, 40%, 99%)'],
    order: 18
  },
  {
    id: 'paper',
    name: 'Paper',
    description: 'Ultra clean & airy',
    preview: ['hsl(222, 60%, 45%)', 'hsl(210, 12%, 92%)', 'hsl(0, 0%, 100%)'],
    order: 19
  },
  {
    id: 'dawn',
    name: 'Dawn',
    description: 'Warm morning glow',
    preview: ['hsl(15, 90%, 60%)', 'hsl(40, 85%, 80%)', 'hsl(25, 60%, 99%)'],
    order: 20
  },
  {
    id: 'coral',
    name: 'Coral',
    description: 'Lively & fresh',
    preview: ['hsl(12, 90%, 60%)', 'hsl(348, 75%, 60%)', 'hsl(10, 60%, 99%)'],
    order: 21
  },
  {
    id: 'frost',
    name: 'Frost',
    description: 'Icy & crisp',
    preview: ['hsl(200, 90%, 55%)', 'hsl(220, 90%, 60%)', 'hsl(200, 40%, 99%)'],
    order: 22
  },
  {
    id: 'meadow',
    name: 'Meadow',
    description: 'Fresh & natural',
    preview: ['hsl(136, 70%, 45%)', 'hsl(160, 70%, 45%)', 'hsl(120, 40%, 99%)'],
    order: 23
  },
  {
    id: 'digital-cinema',
    name: 'Digital Cinema',
    description: 'Sleek and modern',
    preview: ['hsl(190, 84%, 42%)', 'hsl(170, 84%, 45%)', 'hsl(210, 84%, 39%)'],
    order: 0
  }
].sort((a, b) => a.order - b.order);

export function ThemeSwitcher() {
  const [isDark, setIsDark] = useState(false);
  const [currentTheme, setCurrentTheme] = useState(DEFAULT_THEME);
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Check for saved theme preference or default to DEFAULT_THEME
    const savedTheme = localStorage.getItem('theme') || DEFAULT_THEME;
    // Check for dark mode preference or use system preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const savedDarkMode = localStorage.getItem('darkMode') !== null 
      ? localStorage.getItem('darkMode') === 'true'
      : prefersDark;
    const savedVisible = localStorage.getItem('themeSwitcherVisible');
    
    setCurrentTheme(savedTheme);
    setIsDark(savedDarkMode);
    // Show by default (only hide if explicitly set to 'false')
    setIsVisible(savedVisible !== 'false');
    
    applyTheme(savedTheme, savedDarkMode);
  }, []);

  const applyTheme = (theme: string, dark: boolean) => {
    const root = document.documentElement;
    
    // Remove existing theme classes
    themes.forEach(t => {
      root.removeAttribute(`data-theme`);
    });
    
    // Apply new theme
    root.setAttribute('data-theme', theme);
    
    // Apply dark mode
    if (dark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    
    // Save preferences
    localStorage.setItem('theme', theme);
    localStorage.setItem('darkMode', dark.toString());
  };

  const handleThemeChange = (theme: string) => {
    setCurrentTheme(theme);
    applyTheme(theme, isDark);
    setIsOpen(false);
  };

  const toggleDarkMode = () => {
    const newDarkMode = !isDark;
    setIsDark(newDarkMode);
    applyTheme(currentTheme, newDarkMode);
  };

  const toggleVisibility = () => {
    const newVisible = !isVisible;
    setIsVisible(newVisible);
    setIsOpen(false); // Close theme panel when hiding
    localStorage.setItem('themeSwitcherVisible', newVisible.toString());
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999]">
      {/* Main theme switcher - compact vertical buttons */}
      <div className={`transition-all duration-500 ease-in-out ${
        isVisible 
          ? 'transform translate-x-0 opacity-100' 
          : 'transform translate-x-full opacity-0 pointer-events-none'
      }`}>
        <div className="flex flex-col gap-2">
          {/* Dark mode toggle */}
          <button
            onClick={toggleDarkMode}
            className="group p-3 rounded-full bg-card/90 backdrop-blur-md border border-border/50 shadow-xl hover:shadow-primary/20 transition-all duration-300 hover:scale-110 hover:bg-card"
            aria-label="Toggle dark mode"
          >
            {isDark ? (
              <Sun className="w-5 h-5 text-primary transition-transform duration-300 group-hover:rotate-12" />
            ) : (
              <Moon className="w-5 h-5 text-primary transition-transform duration-300 group-hover:-rotate-12" />
            )}
          </button>

          {/* Theme selector toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="group p-3 rounded-full bg-card/90 backdrop-blur-md border border-border/50 shadow-xl hover:shadow-primary/20 transition-all duration-300 hover:scale-110 hover:bg-card"
            aria-label="Change theme"
          >
            <Palette className="w-5 h-5 text-primary transition-transform duration-300 group-hover:rotate-12" />
          </button>

          {/* Hide button */}
          <button
            onClick={toggleVisibility}
            className="group p-2 rounded-full bg-card/80 backdrop-blur-md border border-border/40 shadow-lg hover:shadow-primary/10 transition-all duration-300 hover:scale-105 hover:bg-card"
            aria-label="Hide theme switcher"
          >
            <ChevronRight className="w-4 h-4 text-muted-foreground hover:text-primary transition-colors duration-300 group-hover:translate-x-0.5" />
          </button>
        </div>

        {/* Theme selector dropdown */}
        {isOpen && (
          <div className="absolute bottom-0 right-16 w-72 bg-card/95 backdrop-blur-xl border border-border/50 rounded-2xl shadow-2xl p-4 animate-in slide-in-from-right-2 duration-300">
            <h3 className="text-sm font-medium text-foreground mb-3 flex items-center gap-2">
              <Palette className="w-4 h-4 text-primary" />
              Choose Theme
            </h3>
            
            <div className="grid gap-2 max-h-64 overflow-y-auto theme-dropdown">
              {themes.map((theme) => (
                <button
                  key={theme.id}
                  onClick={() => handleThemeChange(theme.id)}
                  className={`flex items-center gap-3 p-3 rounded-xl transition-all duration-200 hover:bg-muted/50 ${
                    currentTheme === theme.id
                      ? 'bg-primary/10 border border-primary/30 shadow-sm'
                      : 'bg-transparent border border-transparent hover:border-border/30'
                  }`}
                >
                  {/* Color preview */}
                  <div className="flex gap-1.5">
                    {theme.preview.map((color, index) => (
                      <div
                        key={index}
                        className="w-4 h-4 rounded-full border border-black/10 shadow-sm"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                  
                  {/* Theme info */}
                  <div className="flex-1 text-left">
                    <div className="text-sm font-medium text-foreground">
                      {theme.name}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {theme.description}
                    </div>
                  </div>
                  
                  {/* Selected indicator */}
                  {currentTheme === theme.id && (
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  )}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Backdrop for theme dropdown */}
        {isOpen && (
          <div
            className="fixed inset-0 z-[-1]"
            onClick={() => setIsOpen(false)}
          />
        )}
      </div>

      {/* Show button (vertical text tab) */}
      <div className={`absolute right-0 top-1/2 -translate-y-1/2 transition-all duration-500 ease-in-out ${
        !isVisible 
          ? 'transform translate-x-0 opacity-100' 
          : 'transform translate-x-full opacity-0 pointer-events-none'
      }`}>
        <button
          onClick={toggleVisibility}
          className="group bg-card/90 backdrop-blur-md border border-border/50 border-r-0 rounded-l-xl shadow-xl hover:shadow-primary/20 transition-all duration-300 hover:bg-card flex items-center justify-center py-6 px-3"
          aria-label="Show theme switcher"
        >
          <div className="flex flex-col items-center gap-2">
            <ChevronLeft className="w-4 h-4 text-primary transition-transform duration-300 group-hover:-translate-x-0.5" />
            <div 
              className="text-xs font-medium text-muted-foreground tracking-wider"
              style={{ 
                writingMode: 'vertical-rl',
                textOrientation: 'mixed'
              }}
            >
              THEMES
            </div>
          </div>
        </button>
      </div>
    </div>
  );
}