import { ChevronLeft, ChevronRight } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useState } from 'react';

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

export function HomeCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-[#f0e7d7] via-[#f9e0da]/30 to-[#f0e7d7]">
      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="mb-6 font-serif text-5xl text-[#5c2c1f] tracking-tight md:text-7xl">
              {slides[currentSlide].title}
            </h1>
            <p className="mx-auto mb-12 max-w-3xl font-light text-[#702a0c] text-xl leading-relaxed md:text-2xl">
              {slides[currentSlide].subtitle}
            </p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/realisations"
              className="inline-block rounded-full bg-[#702a0c] px-10 py-4 font-medium text-[#f0e7d7] shadow-lg transition-all hover:bg-[#5c2c1f] hover:shadow-xl"
            >
              Voir les réalisations
            </motion.a>
          </motion.div>
        </AnimatePresence>
      </div>

      <button
        type="button"
        onClick={prevSlide}
        className="-translate-y-1/2 absolute top-1/2 left-6 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-[#702a0c] shadow-md backdrop-blur-sm transition-all hover:bg-white"
        aria-label="Diapositive précédente"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        type="button"
        onClick={nextSlide}
        className="-translate-y-1/2 absolute top-1/2 right-6 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-[#702a0c] shadow-md backdrop-blur-sm transition-all hover:bg-white"
        aria-label="Diapositive suivante"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      <div className="-translate-x-1/2 absolute bottom-12 left-1/2 z-20 flex gap-3">
        {slides.map((slide, index) => (
          <button
            type="button"
            key={slide.id}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full shadow-sm transition-all ${
              index === currentSlide ? 'w-8 bg-[#702a0c]' : 'w-2 bg-[#702a0c]/40'
            }`}
            aria-label={`Aller à la diapositive ${index + 1}`}
            aria-current={index === currentSlide ? 'true' : 'false'}
          />
        ))}
      </div>
    </section>
  );
}
