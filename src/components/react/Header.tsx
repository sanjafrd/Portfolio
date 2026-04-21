import { ChevronDown, Download, Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { NAV_ITEMS, REALISATION_FILTERS } from '../../lib/navigation';

interface HeaderProps {
  initialPath: string;
}

function isActive(pathname: string, href: string): boolean {
  if (href === '/') return pathname === '/';
  return pathname.startsWith(href);
}

export function Header({ initialPath }: HeaderProps) {
  const [currentPath, setCurrentPath] = useState(initialPath);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isRealisationsDropdownOpen, setIsRealisationsDropdownOpen] = useState(false);
  const [isMobileRealisationsOpen, setIsMobileRealisationsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleRouteChange = () => {
      setCurrentPath(window.location.pathname);
      setIsMobileMenuOpen(false);
      setIsMobileRealisationsOpen(false);
      setIsRealisationsDropdownOpen(false);
    };
    document.addEventListener('astro:page-load', handleRouteChange);
    return () => document.removeEventListener('astro:page-load', handleRouteChange);
  }, []);

  useEffect(() => {
    if (!isRealisationsDropdownOpen) return;
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsRealisationsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isRealisationsDropdownOpen]);

  const headerBg = isScrolled
    ? 'bg-background/95 shadow-md backdrop-blur-lg'
    : 'bg-background shadow-sm';

  return (
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

          <nav className="hidden items-center gap-8 md:flex" aria-label="Menu principal">
            {NAV_ITEMS.map((item) => {
              if ('hasDropdown' in item && item.hasDropdown) {
                const active = isActive(currentPath, item.href);
                return (
                  <div key={item.href} className="relative" ref={dropdownRef}>
                    <button
                      type="button"
                      onClick={() => setIsRealisationsDropdownOpen((v) => !v)}
                      className={`flex items-center gap-1 transition-colors ${
                        active ? 'font-semibold text-primary' : 'text-foreground hover:text-primary'
                      }`}
                      aria-expanded={isRealisationsDropdownOpen}
                      aria-haspopup="true"
                      aria-current={active ? 'page' : undefined}
                    >
                      {item.label}
                      <motion.div
                        animate={{ rotate: isRealisationsDropdownOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown className="h-4 w-4 text-foreground" />
                      </motion.div>
                    </button>
                    <AnimatePresence>
                      {isRealisationsDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -10, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          className="-translate-x-1/2 absolute top-full left-1/2 mt-2 overflow-hidden rounded-xl border border-border bg-background shadow-xl"
                          role="menu"
                        >
                          {REALISATION_FILTERS.map((filter) => (
                            <a
                              key={filter.filter}
                              href={filter.href}
                              className="block whitespace-nowrap px-4 py-3 text-left text-foreground text-sm transition-colors hover:bg-card"
                              role="menuitem"
                            >
                              {filter.label}
                            </a>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              const active = isActive(currentPath, item.href);
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`transition-colors ${
                    active ? 'font-semibold text-primary' : 'text-foreground hover:text-primary'
                  }`}
                  aria-current={active ? 'page' : undefined}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          <motion.a
            href="/cv-sanjali-fredelisy.pdf"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-primary-foreground shadow-md transition-all hover:bg-foreground hover:shadow-lg md:flex"
            aria-label="Télécharger mon CV (PDF)"
          >
            <Download className="h-4 w-4" />
            Télécharger mon CV
          </motion.a>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((v) => !v)}
            className="text-foreground md:hidden"
            aria-label={isMobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="mt-4 space-y-4 rounded-lg border border-border bg-background p-4 pb-4 shadow-xl md:hidden"
              role="navigation"
              aria-label="Menu mobile"
            >
              {NAV_ITEMS.map((item) => {
                const active = isActive(currentPath, item.href);
                if ('hasDropdown' in item && item.hasDropdown) {
                  return (
                    <div key={item.href}>
                      <button
                        type="button"
                        onClick={() => setIsMobileRealisationsOpen((v) => !v)}
                        className={`flex w-full items-center justify-between py-2 text-left ${
                          active ? 'font-semibold text-primary' : 'text-foreground'
                        }`}
                        aria-expanded={isMobileRealisationsOpen}
                        aria-haspopup="true"
                        aria-current={active ? 'page' : undefined}
                      >
                        {item.label}
                        <motion.div
                          animate={{ rotate: isMobileRealisationsOpen ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ChevronDown className="h-4 w-4 text-foreground" />
                        </motion.div>
                      </button>
                      <AnimatePresence>
                        {isMobileRealisationsOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="mt-2 space-y-2 border-primary/20 border-l-2 pl-4"
                            role="menu"
                          >
                            {REALISATION_FILTERS.map((filter) => (
                              <a
                                key={filter.filter}
                                href={filter.href}
                                className="block py-2 text-left text-secondary text-sm transition-colors hover:text-primary"
                                role="menuitem"
                              >
                                {filter.label}
                              </a>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    className={`block w-full py-2 text-left ${
                      active ? 'font-semibold text-primary' : 'text-foreground'
                    }`}
                    aria-current={active ? 'page' : undefined}
                  >
                    {item.label}
                  </a>
                );
              })}

              <a
                href="/cv-sanjali-fredelisy.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-auto flex w-fit items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-primary-foreground shadow-md"
                aria-label="Télécharger mon CV (PDF)"
              >
                <Download className="h-4 w-4" />
                Télécharger mon CV
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
