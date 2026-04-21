import { ChevronLeft, ChevronRight } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { useCallback, useState } from 'react';

interface Props {
  images: string[];
  alt: string;
}

export function ProjectCardCarousel({ images, alt }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const total = images.length;

  const goPrev = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setDirection(-1);
      setCurrentIndex((i) => (i === 0 ? total - 1 : i - 1));
    },
    [total],
  );

  const goNext = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setDirection(1);
      setCurrentIndex((i) => (i === total - 1 ? 0 : i + 1));
    },
    [total],
  );

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? '100%' : '-100%', opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? '-100%' : '100%', opacity: 0 }),
  };

  return (
    <div className="group/card-carousel relative aspect-video overflow-hidden bg-transparent md:aspect-[4/3]">
      <AnimatePresence initial={false} custom={direction} mode="popLayout">
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt={`${alt} — ${currentIndex + 1}`}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          className="absolute inset-0 h-full w-full object-contain"
          draggable={false}
          loading="lazy"
        />
      </AnimatePresence>

      {total > 1 && (
        <>
          <button
            type="button"
            onClick={goPrev}
            className="-translate-y-1/2 absolute top-1/2 left-3 z-10 rounded-full bg-black/40 p-2 text-white opacity-0 backdrop-blur-sm transition-opacity duration-300 hover:bg-black/60 group-hover/card-carousel:opacity-100"
            aria-label="Image précédente"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={goNext}
            className="-translate-y-1/2 absolute top-1/2 right-3 z-10 rounded-full bg-black/40 p-2 text-white opacity-0 backdrop-blur-sm transition-opacity duration-300 hover:bg-black/60 group-hover/card-carousel:opacity-100"
            aria-label="Image suivante"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
          <div className="absolute top-3 right-3 z-10 rounded-full bg-black/40 px-3 py-1 font-medium text-white text-xs opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover/card-carousel:opacity-100">
            {currentIndex + 1} / {total}
          </div>
        </>
      )}
    </div>
  );
}
