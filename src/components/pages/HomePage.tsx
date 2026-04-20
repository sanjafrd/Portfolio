import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Volume2, VolumeX } from 'lucide-react';
import type { PageType } from '../../App';
import { scrollToTop } from '../../utils/helpers';

interface Slide {
  id: number;
  title: string;
  subtitle: string;
}

const slides: Slide[] = [
  {
    id: 1,
    title: 'Communication visuelle',
    subtitle: 'Créer des supports qui allient esthétique et clarté',
  },
  {
    id: 2,
    title: 'Projets créatifs',
    subtitle: 'Des réalisations pensées avec passion et attention',
  },
  {
    id: 3,
    title: 'Design & stratégie',
    subtitle: 'Apporter ma touche personnelle à chaque projet',
  },
];

interface HomePageProps {
  setCurrentPage: (page: PageType) => void;
}

export function HomePage({ setCurrentPage }: HomePageProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const toggleMute = useCallback(() => {
    const iframe = iframeRef.current;
    if (iframe && iframe.contentWindow) {
      const command = isMuted ? 'unMute' : 'mute';
      iframe.contentWindow.postMessage(
        JSON.stringify({ event: 'command', func: command, args: [] }),
        '*'
      );
      setIsMuted(!isMuted);
    }
  }, [isMuted]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleViewRealisations = () => {
    setCurrentPage('realisations');
    scrollToTop();
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#f0e7d7] via-[#f9e0da] to-[#bd988d]">
      {/* YouTube Video Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-20">
        <iframe
          ref={iframeRef}
          src="https://www.youtube.com/embed/b8wH_keA0k0?autoplay=1&mute=1&loop=1&playlist=b8wH_keA0k0&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&enablejsapi=1&origin=*"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          style={{
            width: '300vw',
            height: '300vh',
            minWidth: '177.77vh',
            minHeight: '56.25vw',
            border: 'none',
          }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Background video"
        />
      </div>

      {/* Subtle overlay for better text readability */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-transparent via-[#f0e7d7]/30 to-transparent" />

      {/* Sound toggle button */}
      <button
        onClick={toggleMute}
        className="absolute bottom-12 right-6 z-30 w-12 h-12 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center text-[#702a0c] hover:bg-white transition-all border border-[#702a0c]/20 shadow-md"
        aria-label={isMuted ? 'Activer le son' : 'Couper le son'}
      >
        {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
      </button>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl mb-6 text-[#5c2c1f] tracking-tight">
              {slides[currentSlide].title}
            </h1>
            <p className="text-xl md:text-2xl text-[#702a0c] mb-12 max-w-3xl mx-auto font-light leading-relaxed">
              {slides[currentSlide].subtitle}
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleViewRealisations}
              className="px-10 py-4 bg-[#702a0c] text-[#f0e7d7] font-medium rounded-full shadow-lg hover:shadow-xl hover:bg-[#5c2c1f] transition-all"
            >
              Voir les réalisations
            </motion.button>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-[#702a0c] hover:bg-white transition-all shadow-md"
        aria-label="Diapositive précédente"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-[#702a0c] hover:bg-white transition-all shadow-md"
        aria-label="Diapositive suivante"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide indicators */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all shadow-sm ${
              index === currentSlide ? 'bg-[#702a0c] w-8' : 'bg-[#702a0c]/40 w-2'
            }`}
            aria-label={`Aller à la diapositive ${index + 1}`}
            aria-current={index === currentSlide ? 'true' : 'false'}
          />
        ))}
      </div>
    </section>
  );
}