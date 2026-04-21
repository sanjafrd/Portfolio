import { ChevronLeft, ChevronRight, Play, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { useCallback, useEffect, useMemo, useState } from 'react';

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
}

export function ProjectCarousel({
  images,
  alt,
  className = '',
  aspectRatio = 'aspect-video md:aspect-[4/3]',
  videoUrl,
  videoUrls,
}: ProjectCarouselProps) {
  const slides: CarouselSlide[] = useMemo(() => {
    const result: CarouselSlide[] = images.map((url) => ({
      type: 'image' as const,
      url,
    }));
    if (videoUrls && videoUrls.length > 0) {
      for (const url of videoUrls) {
        result.push({ type: 'video', url });
      }
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
    [totalSlides],
  );

  const goToNext = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      setDirection(1);
      setCurrentIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
    },
    [totalSlides],
  );

  const goToSlide = useCallback(
    (e: React.MouseEvent, index: number) => {
      e.stopPropagation();
      setDirection(index > currentIndex ? 1 : -1);
      setCurrentIndex(index);
    },
    [currentIndex],
  );

  const openLightbox = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      if (slides[currentIndex].type === 'image') {
        setLightboxIndex(currentIndex);
        setLightboxDirection(0);
        setLightboxOpen(true);
      }
    },
    [currentIndex, slides],
  );

  const closeLightbox = useCallback(() => setLightboxOpen(false), []);

  const lightboxPrev = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      setLightboxDirection(-1);
      setLightboxIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
    },
    [totalSlides],
  );

  const lightboxNext = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      setLightboxDirection(1);
      setLightboxIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
    },
    [totalSlides],
  );

  useEffect(() => {
    if (!lightboxOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      else if (e.key === 'ArrowLeft') {
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
    enter: (dir: number) => ({ x: dir > 0 ? '100%' : '-100%', opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? '-100%' : '100%', opacity: 0 }),
  };

  const renderSlideContent = (slide: CarouselSlide, index: number, isLightbox = false) => {
    if (slide.type === 'video') {
      return (
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden bg-transparent">
          <iframe
            src={slide.url}
            className="h-full w-full border-0 outline-none"
            allow="autoplay; fullscreen"
            allowFullScreen
            title={alt}
            style={{ border: 'none', background: 'transparent' }}
          />
        </div>
      );
    }
    if (isLightbox) {
      return (
        <img
          src={slide.url}
          alt={`${alt} — ${index + 1}`}
          className="absolute inset-0 h-full w-full cursor-default select-none object-contain"
          draggable={false}
        />
      );
    }
    return (
      <button
        type="button"
        onClick={openLightbox}
        className="absolute inset-0 block h-full w-full cursor-zoom-in border-0 bg-transparent p-0"
        aria-label={`Agrandir l'image ${index + 1}`}
      >
        <img
          src={slide.url}
          alt={`${alt} — ${index + 1}`}
          className="h-full w-full object-contain"
          draggable={false}
        />
      </button>
    );
  };

  const currentSlide = slides[currentIndex];

  return (
    <>
      <div className={`group/carousel relative ${className}`}>
        <div className={`relative ${aspectRatio} cursor-zoom-in overflow-hidden bg-transparent`}>
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

          <button
            type="button"
            onClick={goToPrevious}
            className="-translate-y-1/2 absolute top-1/2 left-3 z-10 rounded-full bg-black/40 p-2 text-white opacity-0 backdrop-blur-sm transition-opacity duration-300 hover:bg-black/60 group-hover/carousel:opacity-100"
            aria-label="Image précédente"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={goToNext}
            className="-translate-y-1/2 absolute top-1/2 right-3 z-10 rounded-full bg-black/40 p-2 text-white opacity-0 backdrop-blur-sm transition-opacity duration-300 hover:bg-black/60 group-hover/carousel:opacity-100"
            aria-label="Image suivante"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <div className="absolute top-3 right-3 z-10 rounded-full bg-black/40 px-3 py-1 font-medium text-white text-xs opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover/carousel:opacity-100">
            {currentIndex + 1} / {totalSlides}
          </div>
        </div>

        <div className="mt-4 flex items-center justify-center gap-2">
          {slides.map((slide, index) => (
            <button
              type="button"
              key={slide.url}
              onClick={(e) => goToSlide(e, index)}
              className={`flex items-center justify-center rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'h-2 w-6 bg-[#702a0c]'
                  : 'h-2 w-2 bg-[#702a0c]/30 hover:bg-[#702a0c]/50'
              }`}
              aria-label={`Aller au slide ${index + 1}${slide.type === 'video' ? ' (vidéo)' : ''}`}
            >
              {slide.type === 'video' && index !== currentIndex && (
                <Play className="h-1.5 w-1.5 fill-[#702a0c]/50" />
              )}
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 backdrop-blur-md"
            role="dialog"
            aria-modal="true"
            aria-label={`${alt} — visionneuse`}
          >
            <button
              type="button"
              onClick={closeLightbox}
              className="absolute top-6 right-6 z-10 rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20"
              aria-label="Fermer"
            >
              <X className="h-6 w-6" />
            </button>

            <div className="absolute top-6 left-6 z-10 rounded-full bg-white/10 px-4 py-2 font-medium text-sm text-white">
              {lightboxIndex + 1} / {totalSlides}
            </div>

            <div className="relative flex h-full w-full items-center justify-center px-4 py-20 sm:px-16">
              <AnimatePresence initial={false} custom={lightboxDirection} mode="popLayout">
                <motion.div
                  key={lightboxIndex}
                  custom={lightboxDirection}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.35, ease: 'easeInOut' }}
                  className="flex h-full w-full items-center justify-center"
                >
                  {slides[lightboxIndex].type === 'video' ? (
                    <div className="relative aspect-[9/16] max-h-[80vh] w-full max-w-4xl">
                      <iframe
                        src={slides[lightboxIndex].url}
                        className="h-full w-full rounded-lg"
                        allow="autoplay; fullscreen"
                        title={alt}
                        style={{ border: 'none' }}
                      />
                    </div>
                  ) : (
                    <img
                      src={slides[lightboxIndex].url}
                      alt={`${alt} — ${lightboxIndex + 1}`}
                      className="max-h-full max-w-full cursor-default select-none rounded-lg object-contain shadow-2xl"
                      draggable={false}
                    />
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            <button
              type="button"
              onClick={lightboxPrev}
              className="-translate-y-1/2 absolute top-1/2 left-4 z-10 rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20"
              aria-label="Slide précédent"
            >
              <ChevronLeft className="h-7 w-7" />
            </button>
            <button
              type="button"
              onClick={lightboxNext}
              className="-translate-y-1/2 absolute top-1/2 right-4 z-10 rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20"
              aria-label="Slide suivant"
            >
              <ChevronRight className="h-7 w-7" />
            </button>

            <div className="-translate-x-1/2 absolute bottom-8 left-1/2 flex items-center gap-2">
              {slides.map((slide, index) => (
                <button
                  type="button"
                  key={slide.url}
                  onClick={(e) => {
                    e.stopPropagation();
                    setLightboxDirection(index > lightboxIndex ? 1 : -1);
                    setLightboxIndex(index);
                  }}
                  className={`flex items-center justify-center rounded-full transition-all duration-300 ${
                    index === lightboxIndex
                      ? 'h-2.5 w-8 bg-white'
                      : 'h-2.5 w-2.5 bg-white/30 hover:bg-white/50'
                  }`}
                  aria-label={`Aller au slide ${index + 1}${slide.type === 'video' ? ' (vidéo)' : ''}`}
                >
                  {slide.type === 'video' && index !== lightboxIndex && (
                    <Play className="h-1.5 w-1.5 fill-white/50" />
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
