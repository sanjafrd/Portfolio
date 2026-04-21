import { Maximize2 } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';

interface ImageSwitcherProps {
  images: string[];
  alt: string;
  className?: string;
  onImageLoad?: () => void;
}

export function ImageSwitcher({ images, alt, className = '', onImageLoad }: ImageSwitcherProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSwitch = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const openLightbox = (e: React.MouseEvent) => {
    e.stopPropagation();
    window.dispatchEvent(
      new CustomEvent('open-image-lightbox', {
        detail: { images, index: currentIndex },
      }),
    );
  };

  return (
    <div className={className}>
      <div className="relative">
        <button
          type="button"
          onClick={handleSwitch}
          className="block w-full cursor-pointer border-0 bg-transparent p-0 text-left"
          aria-label={`${alt} — cliquer pour passer à l'image suivante`}
        >
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.img
                key={images[currentIndex]}
                src={images[currentIndex]}
                alt={`${alt} — ${currentIndex + 1}`}
                initial={{ opacity: 0, rotateY: 90 }}
                animate={{ opacity: 1, rotateY: 0 }}
                exit={{ opacity: 0, rotateY: -90 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className="h-auto w-full select-none object-contain"
                draggable={false}
                style={{ transformStyle: 'preserve-3d' }}
                onLoad={onImageLoad}
              />
            </AnimatePresence>

            <motion.div
              className="-translate-x-1/2 pointer-events-none absolute bottom-4 left-1/2 flex items-center gap-2 rounded-full bg-black/40 px-4 py-2 text-white text-xs tracking-wide opacity-0 backdrop-blur-sm"
              animate={{ opacity: [0, 0.8, 0] }}
              transition={{ duration: 3, delay: 1.5, ease: 'easeInOut' }}
            >
              Cliquez pour voir l'autre face
            </motion.div>
          </div>
        </button>

        <button
          type="button"
          onClick={openLightbox}
          className="absolute top-3 right-3 z-10 rounded-full bg-black/40 p-2 text-white backdrop-blur-sm transition-colors hover:bg-black/60"
          aria-label="Agrandir l'image"
        >
          <Maximize2 className="h-4 w-4" />
        </button>
      </div>

      <div className="mt-4 flex items-center justify-center gap-2">
        {images.map((src, index) => (
          <button
            type="button"
            key={src}
            onClick={(e) => {
              e.stopPropagation();
              setCurrentIndex(index);
            }}
            className={`rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'h-2 w-6 bg-[#702a0c]'
                : 'h-2 w-2 bg-[#702a0c]/30 hover:bg-[#702a0c]/50'
            }`}
            aria-label={`Image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
