import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface ImageSwitcherProps {
  images: string[];
  alt: string;
  className?: string;
  /** Called when an image finishes loading (useful for height sync) */
  onImageLoad?: () => void;
}

export function ImageSwitcher({ images, alt, className = '', onImageLoad }: ImageSwitcherProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSwitch = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div className={`cursor-pointer ${className}`} onClick={handleSwitch}>
      <div className="relative">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            alt={`${alt} - ${currentIndex + 1}`}
            initial={{ opacity: 0, rotateY: 90 }}
            animate={{ opacity: 1, rotateY: 0 }}
            exit={{ opacity: 0, rotateY: -90 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="w-full h-auto object-contain select-none"
            draggable={false}
            style={{ transformStyle: 'preserve-3d' }}
            onLoad={onImageLoad}
          />
        </AnimatePresence>

        {/* Hint indicator */}
        <motion.div
          className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-2 rounded-full bg-black/40 backdrop-blur-sm text-white text-xs tracking-wide opacity-0 pointer-events-none"
          animate={{ opacity: [0, 0.8, 0] }}
          transition={{ duration: 3, delay: 1.5, ease: 'easeInOut' }}
        >
          Cliquez pour voir l'autre face
        </motion.div>
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center items-center gap-2 mt-4">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={(e) => {
              e.stopPropagation();
              setCurrentIndex(index);
            }}
            className={`rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'bg-[#702a0c] w-6 h-2'
                : 'bg-[#702a0c]/30 hover:bg-[#702a0c]/50 w-2 h-2'
            }`}
            aria-label={`Image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}