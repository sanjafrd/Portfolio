import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface StoryboardGalleryProps {
  staticImage: string;
  slidingImages: string[];
  alt: string;
}

export function StoryboardGallery({ staticImage, slidingImages, alt }: StoryboardGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const goNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % slidingImages.length);
  }, [slidingImages.length]);

  const goPrev = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + slidingImages.length) % slidingImages.length);
  }, [slidingImages.length]);

  // Auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(goNext, 4000);
    return () => clearInterval(interval);
  }, [goNext]);

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

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="max-w-5xl mx-auto mb-24"
    >
      <div className="flex flex-col md:flex-row gap-5 items-stretch">
        {/* Left: Static image 1 */}
        <div className="w-full md:w-[38%] shrink-0">
          <div className="rounded-2xl overflow-hidden ring-1 ring-[#5c2c1f]/10 shadow-lg h-full">
            <img
              src={staticImage}
              alt={`${alt} - Image principale`}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right: Sliding images 2-12 */}
        <div className="w-full md:w-[62%] relative">
          <div className="rounded-2xl overflow-hidden relative aspect-[4/3] bg-transparent">
            <AnimatePresence initial={false} custom={direction} mode="popLayout">
              <motion.img
                key={currentIndex}
                src={slidingImages[currentIndex]}
                alt={`${alt} - Planche ${currentIndex + 2}`}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                className="absolute inset-0 w-full h-full object-contain"
              />
            </AnimatePresence>

            {/* Navigation arrows */}
            <button
              onClick={(e) => { e.stopPropagation(); goPrev(); }}
              className="absolute left-3 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-sm text-white/80 hover:text-white transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); goNext(); }}
              className="absolute right-3 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-sm text-white/80 hover:text-white transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Dot indicators */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 flex gap-1.5">
              {slidingImages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > currentIndex ? 1 : -1);
                    setCurrentIndex(i);
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === currentIndex
                      ? 'bg-[#702a0c] w-5'
                      : 'bg-[#702a0c]/40 hover:bg-[#702a0c]/60'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}