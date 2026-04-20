import type { FilterType } from '../App';

export interface NavigationItem {
  label: string;
  page?: 'home' | 'about' | 'contact';
  filter?: FilterType;
  hasDropdown?: boolean;
}

export const NAVIGATION_ITEMS: NavigationItem[] = [
  { label: 'Accueil', page: 'home' },
  { label: 'Réalisations', hasDropdown: true },
  { label: 'À propos', page: 'about' },
  { label: 'Contact', page: 'contact' },
];

export interface RealisationFilter {
  label: string;
  value: FilterType;
}

export const REALISATION_FILTERS: RealisationFilter[] = [
  { label: 'École du numérique', value: 'ecole' },
  { label: "Association Saint-François d'Assise", value: 'entreprise' },
];

export const CONTACT_INFO = {
  phone: '0693 52 73 04',
  phoneHref: 'tel:0693527304',
  email: 'sanja.fredelisy@gmail.com',
  emailHref: 'mailto:sanja.fredelisy@gmail.com',
} as const;

export const SOCIAL_LINKS = {
  linkedin: 'https://linkedin.com',
  instagram: 'https://instagram.com',
} as const;