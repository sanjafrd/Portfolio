import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { useCallback, useEffect, useState } from 'react';

interface LightboxEventDetail {
  src?: string;
  images?: string[];
  index?: number;
}

export function ProjectImageLightbox() {
  const [open, setOpen] = useState(false);
  const [images, setImages] = useState<string[]>([]);
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const close = useCallback(() => setOpen(false), []);

  const collectZoomables = useCallback(() => {
    return Array.from(
      document.querySelectorAll('img[data-zoomable]'),
    ) as HTMLImageElement[];
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const img = target.closest('img[data-zoomable]') as HTMLImageElement | null;
      if (!img) return;
      e.preventDefault();
      e.stopPropagation();
      const all = collectZoomables();
      const srcs = all.map((el) => el.currentSrc || el.src);
      const clickedIndex = all.indexOf(img);
      setImages(srcs);
      setIndex(Math.max(0, clickedIndex));
      setDirection(0);
      setOpen(true);
    };

    const handleCustomEvent = (e: Event) => {
      const detail = (e as CustomEvent<LightboxEventDetail>).detail;
      if (!detail) return;
      if (detail.images && detail.images.length > 0) {
        setImages(detail.images);
        setIndex(detail.index ?? 0);
      } else if (detail.src) {
        setImages([detail.src]);
        setIndex(0);
      } else {
        return;
      }
      setDirection(0);
      setOpen(true);
    };

    document.addEventListener('click', handleClick, true);
    window.addEventListener('open-image-lightbox', handleCustomEvent);
    return () => {
      document.removeEventListener('click', handleClick, true);
      window.removeEventListener('open-image-lightbox', handleCustomEvent);
    };
  }, [collectZoomables]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        close();
      } else if (e.key === 'ArrowLeft' && images.length > 1) {
        setDirection(-1);
        setIndex((i) => (i === 0 ? images.length - 1 : i - 1));
      } else if (e.key === 'ArrowRight' && images.length > 1) {
        setDirection(1);
        setIndex((i) => (i === images.length - 1 ? 0 : i + 1));
      }
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [open, images.length, close]);

  const prev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setDirection(-1);
    setIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  };

  const next = (e: React.MouseEvent) => {
    e.stopPropagation();
    setDirection(1);
    setIndex((i) => (i === images.length - 1 ? 0 : i + 1));
  };

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? '100%' : '-100%', opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? '-100%' : '100%', opacity: 0 }),
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-label="Visionneuse d'image"
          onClick={close}
        >
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              close();
            }}
            className="absolute top-6 right-6 z-10 rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20"
            aria-label="Fermer"
          >
            <X className="h-6 w-6" />
          </button>

          {images.length > 1 && (
            <div className="absolute top-6 left-6 z-10 rounded-full bg-white/10 px-4 py-2 font-medium text-sm text-white">
              {index + 1} / {images.length}
            </div>
          )}

          <div className="relative flex h-full w-full items-center justify-center px-4 py-20 sm:px-16">
            <AnimatePresence initial={false} custom={direction} mode="popLayout">
              <motion.img
                key={`${index}-${images[index]}`}
                src={images[index]}
                alt=""
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.35, ease: 'easeInOut' }}
                className="max-h-full max-w-full cursor-default select-none rounded-lg object-contain shadow-2xl"
                draggable={false}
                onClick={(e) => e.stopPropagation()}
              />
            </AnimatePresence>
          </div>

          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={prev}
                className="-translate-y-1/2 absolute top-1/2 left-4 z-10 rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20"
                aria-label="Image précédente"
              >
                <ChevronLeft className="h-7 w-7" />
              </button>
              <button
                type="button"
                onClick={next}
                className="-translate-y-1/2 absolute top-1/2 right-4 z-10 rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20"
                aria-label="Image suivante"
              >
                <ChevronRight className="h-7 w-7" />
              </button>
            </>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
