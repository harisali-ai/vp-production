"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Download, Maximize2, Minimize2 } from 'lucide-react';

type GalleryImage = {
  id: number;
  src: string;
  alt: string;
};

// Static list of Creative Portfolio images from public/promotion folder
const promotionImages = [
  '/promotion/bhola.png',
  '/promotion/img1.jpeg',
  '/promotion/v1.webp',
  '/promotion/v2.webp',
  '/promotion/v3.webp',
  '/promotion/v4.webp',
  '/promotion/v5.webp',
  '/promotion/v7.webp',
  '/promotion/v6.webp',
  '/promotion/v8.webp',
  '/promotion/v9.webp',
  '/promotion/v10.webp',
  '/promotion/v11.webp',
  '/promotion/v13.webp',
  '/promotion/v14.webp',
  '/promotion/v12.webp',
  '/promotion/v15.webp',
  '/promotion/v16.webp',
  '/promotion/Vivek2.webp',
];

const toTitle = (filename: string) => filename.replace(/[-_]/g, ' ').replace(/\.[^.]+$/, '');

const GallerySection = () => {
  const images: GalleryImage[] = useMemo(() => {
    return promotionImages.map((src, index) => {
      const name = src.split('/').slice(-1)[0];
      return { id: index + 1, src, alt: toTitle(name) } as GalleryImage;
    });
  }, []);

  const [current, setCurrent] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const autoTimerRef = useRef<number | null>(null);

  const openModal = useCallback((idx: number) => {
    setCurrent(idx);
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  }, []);

  const closeModal = useCallback(() => {
    setModalOpen(false);
    setIsFullscreen(false);
    document.body.style.overflow = 'auto';
  }, []);

  const toggleFullscreen = useCallback(() => {
    setIsFullscreen((v) => !v);
  }, []);

  const navigate = useCallback((direction: 'prev' | 'next') => {
    setCurrent((c) => {
      const length = images.length || 1;
      return direction === 'prev' ? (c + length - 1) % length : (c + 1) % length;
    });
  }, [images.length]);

  // Auto-advance when modal closed
  useEffect(() => {
    if (modalOpen) return;
    autoTimerRef.current = window.setInterval(() => navigate('next'), 5000);
    return () => {
      if (autoTimerRef.current) window.clearInterval(autoTimerRef.current);
      autoTimerRef.current = null;
    };
  }, [modalOpen, navigate]);

  // Keyboard navigation in modal
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (!modalOpen) return;
      if (e.key === 'Escape') return closeModal();
      if (e.key === 'ArrowLeft') return navigate('prev');
      if (e.key === 'ArrowRight') return navigate('next');
      if (e.key.toLowerCase() === 'f') return toggleFullscreen();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [modalOpen, closeModal, navigate, toggleFullscreen]);

  const handleDownload = useCallback(() => {
    const img = images[current];
    if (!img) return;
    const a = document.createElement('a');
    a.href = img.src;
    a.download = `project-${img.id}`;
    document.body.appendChild(a);
    a.click();
    a.remove();
  }, [current, images]);

  if (images.length === 0) return null;

  return (
    <section className="py-10 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-6">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
          <span className="inline-block bg-gradient-to-r from-primary via-foreground to-primary animate-gradient bg-[length:220%_220%] bg-clip-text text-transparent">Our Creative Portfolio</span>
        </h2>
        <p className="text-foreground/80 mt-3">Explore our collection of stunning projects.</p>
      </div>

      {/* Slideshow */}
      <div className="relative w-full max-w-4xl aspect-video mx-auto overflow-hidden rounded-2xl shadow-2xl mb-8 bg-muted/20 border border-border">
        <AnimatePresence initial={false}>
          {images.map((img, i) => (
            i === current ? (
              <motion.div key={img.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }} className="absolute inset-0">
                <img src={img.src} alt={img.alt} className="w-full h-full object-contain cursor-pointer" onClick={() => openModal(i)} />
              </motion.div>
            ) : null
          ))}
        </AnimatePresence>
        <button onClick={() => navigate('prev')} className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white rounded-full p-2 hover:bg-black/70 transition backdrop-blur-sm">
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button onClick={() => navigate('next')} className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white rounded-full p-2 hover:bg-black/70 transition backdrop-blur-sm">
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      {/* Thumbnails */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
        {images.map((img, i) => (
          <motion.button key={img.id} className={`relative rounded-lg overflow-hidden border transition-all ${i === current ? 'border-primary ring-2 ring-primary/30' : 'border-border hover:border-primary/50'}`} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={() => setCurrent(i)} aria-label={img.alt}>
            <img src={img.src} alt={img.alt} className="w-full h-28 object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 hover:opacity-100 transition-opacity" />
            <span className="absolute bottom-1 left-2 text-[10px] text-white/90 line-clamp-1">{img.alt}</span>
          </motion.button>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className={`fixed inset-0 bg-black/90 z-50 ${isFullscreen ? '' : 'p-4 md:p-8'}`} onClick={closeModal}>
            <div className={`relative bg-black ${isFullscreen ? 'w-full h-full' : 'mx-auto max-w-5xl w-full rounded-xl overflow-hidden'} `} onClick={(e) => e.stopPropagation()}>
              <div className={`${isFullscreen ? 'h-full' : 'aspect-[16/9]'} relative flex items-center justify-center`}>
                <img src={images[current].src} alt={images[current].alt} className="w-full h-full object-contain" />
              </div>
              <button onClick={closeModal} className="absolute top-3 right-3 text-white bg-black/50 rounded-full p-2 hover:bg-black/70 transition"><X className="h-4 w-4" /></button>
              <button onClick={() => navigate('prev')} className="absolute left-3 top-1/2 -translate-y-1/2 text-white bg-black/50 rounded-full p-2 hover:bg-black/70 transition"><ChevronLeft className="h-4 w-4" /></button>
              <button onClick={() => navigate('next')} className="absolute right-3 top-1/2 -translate-y-1/2 text-white bg-black/50 rounded-full p-2 hover:bg-black/70 transition"><ChevronRight className="h-4 w-4" /></button>
              <button onClick={handleDownload} className="absolute bottom-3 right-3 text-white bg-primary rounded-full p-2 hover:bg-primary/90 transition"><Download className="h-4 w-4" /></button>
              <button onClick={toggleFullscreen} className="absolute bottom-3 left-3 text-white bg-black/50 rounded-full p-2 hover:bg-black/70 transition">{isFullscreen ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}</button>
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-white bg-black/50 px-2 py-1 rounded-full text-xs">
                {current + 1} / {images.length}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;







