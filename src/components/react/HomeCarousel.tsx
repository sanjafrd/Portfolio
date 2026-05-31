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

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-[#f0e7d7] via-[#f9e0da]/30 to-[#f0e7d7]">
      {/* Motif décoratif : nœuds-rubans fins, discrets et alignés */}
      <svg
        className="pointer-events-none absolute inset-0 z-0 h-full w-full"
        aria-hidden="true"
      >
        <defs>
          <g id="ribbon-bow">
            {/* boucle + pan de gauche */}
            <path d="M-2,-3 C-16,-15 -30,-7 -27,2 C-25,10 -12,8 -2,3 Z" />
            <path d="M-1,4 C-5,15 -10,25 -15,35 L-10,34 C-6,25 -2,15 2,5 Z" />
            {/* boucle + pan de droite (miroir) */}
            <g transform="scale(-1,1)">
              <path d="M-2,-3 C-16,-15 -30,-7 -27,2 C-25,10 -12,8 -2,3 Z" />
              <path d="M-1,4 C-5,15 -10,25 -15,35 L-10,34 C-6,25 -2,15 2,5 Z" />
            </g>
            {/* nœud central */}
            <ellipse cx="0" cy="0" rx="3.4" ry="4.4" />
          </g>
          <pattern
            id="bow-pattern"
            width="150"
            height="140"
            patternUnits="userSpaceOnUse"
          >
            <use
              href="#ribbon-bow"
              transform="translate(75,58) scale(0.8)"
              fill="none"
              stroke="#5c2c1f"
              strokeWidth="1.3"
              strokeOpacity="0.09"
              strokeLinejoin="round"
              strokeLinecap="round"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#bow-pattern)" />
      </svg>

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

      <a
        href="#mon-approche"
        className="-translate-x-1/2 absolute bottom-8 left-1/2 z-20 flex flex-col items-center gap-3 text-[#702a0c] transition-opacity hover:opacity-70"
        aria-label="Explorer la suite de la page"
      >
        <span className="text-xs uppercase tracking-[0.3em]">Explorer</span>
        <span className="relative block h-12 w-px overflow-hidden bg-[#5c2c1f]/20">
          <motion.span
            className="absolute top-0 left-0 block h-4 w-px bg-[#5c2c1f]"
            animate={{ y: [-16, 48] }}
            transition={{ duration: 1.8, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
          />
        </span>
      </a>
    </section>
  );
}
