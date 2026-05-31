import { ChevronDown, Download, Menu, X } from 'lucide-react';
import { AnimatePresence, motion, type Variants } from 'motion/react';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { NAV_ITEMS, REALISATION_FILTERS } from '../../lib/navigation';

interface HeaderProps {
  initialPath: string;
}

function isActive(pathname: string, href: string): boolean {
  if (href === '/') return pathname === '/';
  return pathname.startsWith(href);
}

const overlayVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: 'easeOut',
      when: 'beforeChildren',
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.25,
      ease: 'easeIn',
      when: 'afterChildren',
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
  exit: { opacity: 0, y: 16, transition: { duration: 0.2 } },
};

export function Header({ initialPath }: HeaderProps) {
  const [currentPath, setCurrentPath] = useState(initialPath);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isRealisationsOpen, setIsRealisationsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleRouteChange = () => {
      setCurrentPath(window.location.pathname);
      setIsMenuOpen(false);
      setIsRealisationsOpen(false);
    };
    document.addEventListener('astro:page-load', handleRouteChange);
    return () => document.removeEventListener('astro:page-load', handleRouteChange);
  }, []);

  // Menu plein écran : verrouille le défilement de la page et permet la fermeture avec Échap
  useEffect(() => {
    if (!isMenuOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
        setIsRealisationsOpen(false);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMenuOpen]);

  const headerBg = isScrolled
    ? 'bg-background/95 shadow-md backdrop-blur-lg'
    : 'bg-background shadow-sm';

  const overlay = (
    <AnimatePresence>
      {isMenuOpen && (
        <motion.div
          id="main-menu"
          key="main-menu"
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="fixed inset-0 z-[100] flex flex-col bg-[#1a110b]"
          role="dialog"
          aria-modal="true"
          aria-label="Menu de navigation"
        >
          <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4">
            <a
              href="/"
              onClick={() => setIsMenuOpen(false)}
              className="font-semibold text-lg text-white md:text-xl"
              aria-label="Retour à l'accueil"
            >
              Sanjali Frédélisy
              <span className="ml-2 hidden text-sm text-white/70 md:inline">— Communication</span>
            </a>

            <button
              type="button"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center gap-2.5 font-medium text-sm text-white uppercase tracking-widest transition-colors hover:text-white/70"
              aria-label="Fermer le menu"
            >
              <X className="h-5 w-5" />
              Fermer
            </button>
          </div>

          <nav
            className="flex w-full flex-1 flex-col items-center justify-center gap-7 overflow-y-auto px-6 py-8 md:gap-9"
            aria-label="Menu principal"
          >
            {NAV_ITEMS.map((item) => {
              const active = isActive(currentPath, item.href);
              if ('hasDropdown' in item && item.hasDropdown) {
                return (
                  <motion.div
                    key={item.href}
                    variants={itemVariants}
                    className="flex w-full flex-col items-center"
                  >
                    <button
                      type="button"
                      onClick={() => setIsRealisationsOpen((v) => !v)}
                      className={`relative inline-flex items-center justify-center font-serif text-4xl transition-colors md:text-5xl ${
                        active ? 'text-white' : 'text-white/80 hover:text-white'
                      }`}
                      aria-expanded={isRealisationsOpen}
                      aria-haspopup="true"
                      aria-current={active ? 'page' : undefined}
                    >
                      {item.label}
                      <motion.div
                        className="-translate-y-1/2 absolute top-1/2 left-full ml-2"
                        animate={{ rotate: isRealisationsOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown className="h-6 w-6" />
                      </motion.div>
                    </button>
                    <AnimatePresence>
                      {isRealisationsOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.25 }}
                          className="flex flex-col items-center gap-3 overflow-hidden pt-4"
                          role="menu"
                        >
                          {REALISATION_FILTERS.map((filter) => (
                            <a
                              key={filter.filter}
                              href={filter.href}
                              onClick={() => setIsMenuOpen(false)}
                              className="text-center text-lg text-white/70 transition-colors hover:text-white md:text-xl"
                              role="menuitem"
                            >
                              {filter.label}
                            </a>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              }
              return (
                <motion.a
                  key={item.href}
                  variants={itemVariants}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`font-serif text-4xl transition-colors md:text-5xl ${
                    active ? 'text-white' : 'text-white/80 hover:text-white'
                  }`}
                  aria-current={active ? 'page' : undefined}
                >
                  {item.label}
                </motion.a>
              );
            })}

            <motion.a
              variants={itemVariants}
              href="/cv-sanjali-fredelisy.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)}
              className="mt-4 flex items-center gap-2 rounded-full bg-primary px-8 py-3 text-primary-foreground shadow-md transition-all hover:bg-white hover:text-primary"
              aria-label="Télécharger mon CV (PDF)"
            >
              <Download className="h-4 w-4" />
              Télécharger mon CV
            </motion.a>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, type: 'spring' }}
        className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${headerBg}`}
        role="banner"
      >
        <div className="mx-auto max-w-7xl px-6 py-4">
          <div className="flex items-center justify-between">
            <a
              href="/"
              className="transition-transform hover:scale-105"
              aria-label="Retour à l'accueil"
            >
              <span className="font-semibold text-lg text-primary md:text-xl">Sanjali Frédélisy</span>
              <span className="ml-2 hidden text-secondary text-sm md:inline">— Communication</span>
            </a>

            <button
              type="button"
              onClick={() => setIsMenuOpen((v) => !v)}
              className="flex items-center gap-2.5 font-medium text-foreground text-sm uppercase tracking-widest transition-colors hover:text-primary"
              aria-expanded={isMenuOpen}
              aria-controls="main-menu"
              aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            >
              <Menu className="h-5 w-5" />
              Menu
            </button>
          </div>
        </div>
      </motion.header>

      {mounted && createPortal(overlay, document.body)}
    </>
  );
}
