import { useState, useCallback, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, X, Play } from 'lucide-react';
import { YouTubeVideoPlayer } from './YouTubeVideoPlayer';

interface CarouselSlide {
  type: 'image' | 'video';
  url: string;
}

interface ProjectCarouselProps {
  images: string[];
  alt: string;
  className?: string;
  aspectRatio?: string;
  videoUrl?: string;
  videoUrls?: string[];
  onSlideClick?: (e: React.MouseEvent) => void;
}

export function ProjectCarousel({
  images,
  alt,
  className = '',
  aspectRatio = 'aspect-video md:aspect-[4/3]',
  videoUrl,
  videoUrls,
}: ProjectCarouselProps) {
  // Build unified slides array: images first, then video(s)
  const slides: CarouselSlide[] = useMemo(() => {
    const result: CarouselSlide[] = images.map((url) => ({ type: 'image' as const, url }));
    if (videoUrls && videoUrls.length > 0) {
      videoUrls.forEach((url) => result.push({ type: 'video', url }));
    } else if (videoUrl) {
      result.push({ type: 'video', url: videoUrl });
    }
    return result;
  }, [images, videoUrl, videoUrls]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [lightboxDirection, setLightboxDirection] = useState(0);

  const totalSlides = slides.length;

  const goToPrevious = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      setDirection(-1);
      setCurrentIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
    },
    [totalSlides]
  );

  const goToNext = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      setDirection(1);
      setCurrentIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
    },
    [totalSlides]
  );

  const goToSlide = useCallback(
    (e: React.MouseEvent, index: number) => {
      e.stopPropagation();
      setDirection(index > currentIndex ? 1 : -1);
      setCurrentIndex(index);
    },
    [currentIndex]
  );

  // Lightbox handlers (only for images)
  const openLightbox = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      if (slides[currentIndex].type === 'image') {
        setLightboxIndex(currentIndex);
        setLightboxDirection(0);
        setLightboxOpen(true);
      }
    },
    [currentIndex, slides]
  );

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
  }, []);

  const lightboxPrev = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      setLightboxDirection(-1);
      setLightboxIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
    },
    [totalSlides]
  );

  const lightboxNext = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      setLightboxDirection(1);
      setLightboxIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
    },
    [totalSlides]
  );

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (!lightboxOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowLeft') {
        setLightboxDirection(-1);
        setLightboxIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
      } else if (e.key === 'ArrowRight') {
        setLightboxDirection(1);
        setLightboxIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [lightboxOpen, totalSlides, closeLightbox]);

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? '-100%' : '100%',
      opacity: 0,
    }),
  };

  const currentSlide = slides[currentIndex];

  const renderSlideContent = (slide: CarouselSlide, index: number, isLightbox = false) => {
    if (slide.type === 'video') {
      const isYouTube = slide.url.includes('youtube.com/embed/');
      if (isYouTube) {
        return (
          <div className="absolute inset-0 flex items-center justify-center bg-transparent overflow-hidden">
            <YouTubeVideoPlayer
              url={slide.url}
              title={alt}
              className="w-full h-full"
            />
          </div>
        );
      }
      return (
        <div className="absolute inset-0 flex items-center justify-center bg-transparent overflow-hidden">
          <iframe
            src={slide.url}
            className="w-full h-full border-0 outline-none"
            allow="autoplay; fullscreen"
            allowFullScreen
            frameBorder="0"
            title={alt}
            style={{ border: 'none', background: 'transparent', outline: 'none' }}
          />
        </div>
      );
    }

    return (
      <img
        src={slide.url}
        alt={`${alt} - ${index + 1}`}
        className={`absolute inset-0 w-full h-full object-contain ${!isLightbox ? 'cursor-zoom-in' : 'cursor-default select-none'}`}
        onClick={!isLightbox ? openLightbox : closeLightbox}
        draggable={false}
      />
    );
  };

  return (
    <>
      <div className={`relative group/carousel ${className}`}>
        <div className={`relative ${aspectRatio} overflow-hidden cursor-zoom-in bg-transparent`}>
          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className="absolute inset-0"
            >
              {renderSlideContent(currentSlide, currentIndex)}
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-3 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-black/40 backdrop-blur-sm text-white opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300 hover:bg-black/60"
            aria-label="Image précédente"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-black/40 backdrop-blur-sm text-white opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300 hover:bg-black/60"
            aria-label="Image suivante"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Slide Counter */}
          <div className="absolute top-3 right-3 z-10 px-3 py-1 rounded-full bg-black/40 backdrop-blur-sm text-white text-xs font-medium opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300">
            {currentIndex + 1} / {totalSlides}
          </div>
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center items-center gap-2 mt-4">
          {slides.map((slide, index) => (
            <button
              key={index}
              onClick={(e) => goToSlide(e, index)}
              className={`rounded-full transition-all duration-300 flex items-center justify-center ${
                index === currentIndex
                  ? 'bg-[#702a0c] w-6 h-2'
                  : 'bg-[#702a0c]/30 hover:bg-[#702a0c]/50 w-2 h-2'
              }`}
              aria-label={`Aller au slide ${index + 1}${slide.type === 'video' ? ' (vidéo)' : ''}`}
            >
              {slide.type === 'video' && index !== currentIndex && (
                <Play className="w-1.5 h-1.5 fill-[#702a0c]/50" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 backdrop-blur-md"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Fermer"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Counter */}
            <div className="absolute top-6 left-6 z-10 px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium">
              {lightboxIndex + 1} / {totalSlides}
            </div>

            {/* Content */}
            <div
              className="relative w-full h-full flex items-center justify-center px-4 sm:px-16 py-20"
              onClick={(e) => e.stopPropagation()}
            >
              <AnimatePresence initial={false} custom={lightboxDirection} mode="popLayout">
                <motion.div
                  key={lightboxIndex}
                  custom={lightboxDirection}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.35, ease: 'easeInOut' }}
                  className="w-full h-full flex items-center justify-center"
                >
                  {slides[lightboxIndex].type === 'video' ? (
                    <div className="relative w-full max-w-4xl aspect-[9/16] max-h-[80vh]">
                      <iframe
                        src={slides[lightboxIndex].url}
                        className="w-full h-full rounded-lg"
                        allow="autoplay; fullscreen"
                        title={alt}
                        style={{ border: 'none' }}
                      />
                    </div>
                  ) : (
                    <img
                      src={slides[lightboxIndex].url}
                      alt={`${alt} - ${lightboxIndex + 1}`}
                      className="max-w-full max-h-full object-contain rounded-lg shadow-2xl cursor-default select-none"
                      draggable={false}
                      onClick={closeLightbox}
                    />
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={lightboxPrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Slide précédent"
            >
              <ChevronLeft className="w-7 h-7" />
            </button>
            <button
              onClick={lightboxNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Slide suivant"
            >
              <ChevronRight className="w-7 h-7" />
            </button>

            {/* Dot Indicators */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 items-center">
              {slides.map((slide, index) => (
                <button
                  key={index}
                  onClick={(e) => {
                    e.stopPropagation();
                    setLightboxDirection(index > lightboxIndex ? 1 : -1);
                    setLightboxIndex(index);
                  }}
                  className={`rounded-full transition-all duration-300 flex items-center justify-center ${
                    index === lightboxIndex
                      ? 'bg-white w-8 h-2.5'
                      : 'bg-white/30 hover:bg-white/50 w-2.5 h-2.5'
                  }`}
                  aria-label={`Aller au slide ${index + 1}${slide.type === 'video' ? ' (vidéo)' : ''}`}
                >
                  {slide.type === 'video' && index !== lightboxIndex && (
                    <Play className="w-1.5 h-1.5 fill-white/50" />
                  )}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}