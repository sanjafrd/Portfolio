export type FilterType = 'all' | 'entreprise' | 'ecole';

export const NAV_ITEMS = [
  { label: 'Accueil', href: '/' },
  { label: 'Réalisations', href: '/realisations', hasDropdown: true },
  { label: 'À propos', href: '/a-propos' },
  { label: 'Contact', href: '/contact' },
] as const;

export const REALISATION_FILTERS = [
  {
    label: 'École du numérique',
    filter: 'ecole' as const,
    href: '/realisations?filter=ecole',
  },
  {
    label: "Association Saint-François d'Assise",
    filter: 'entreprise' as const,
    href: '/realisations?filter=entreprise',
  },
] as const;

export const CONTACT_INFO = {
  phone: '0693 52 73 04',
  phoneHref: 'tel:+262693527304',
  email: 'sanja.fredelisy@gmail.com',
  emailHref: 'mailto:sanja.fredelisy@gmail.com',
} as const;

export const SOCIAL_LINKS = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/',
    icon: 'lucide:linkedin',
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/',
    icon: 'lucide:instagram',
  },
] as const;

export function getFilterTitle(filter: FilterType): string {
  switch (filter) {
    case 'ecole':
      return 'École du numérique';
    case 'entreprise':
      return "Association Saint-François d'Assise";
    default:
      return 'Réalisations';
  }
}
