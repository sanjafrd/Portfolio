import type { FilterType } from '../App';

/**
 * Retourne le titre de la page en fonction du filtre actif
 */
export const getFilterTitle = (filter: FilterType): string => {
  const titles: Record<FilterType, string> = {
    entreprise: "Association Saint-François d'Assise",
    ecole: 'École du numérique',
    all: 'Réalisations',
  };
  
  return titles[filter];
};

/**
 * Scroll vers le haut de la page avec animation
 */
export const scrollToTop = (behavior: ScrollBehavior = 'smooth'): void => {
  window.scrollTo({ top: 0, behavior });
};

/**
 * Récupère l'année actuelle pour le footer
 */
export const getCurrentYear = (): number => {
  return new Date().getFullYear();
};