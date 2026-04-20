import { ProjectSectionsLayout } from './ProjectSectionsLayout';
import type { TargetTab, ObjectiveCard } from './ProjectSectionsLayout';

const targetTabs: TargetTab[] = [
  {
    id: 'principale',
    label: 'Cible Principale',
    content:
      "Adultes de 30 à 60 ans, consommateurs de produits locaux et de qualité, sensibles à l'origine des produits alimentaires et prêts à investir dans des produits premium issus du terroir réunionnais.",
  },
  {
    id: 'coeur',
    label: 'Coeur de Cible',
    content: `Consommateurs de 40 à 50 ans, actifs ou CSP+, attachés à la consommation responsable et aux produits authentiques.

Ils :
• privilégient les produits locaux et naturels,
• recherchent des aliments premium pour leur consommation personnelle ou pour offrir,
• fréquentent les boutiques spécialisées, marchés locaux ou magasins de producteurs,
• sont sensibles au storytelling autour du terroir et de la biodiversité réunionnaise,
• valorisent les produits incarnant un savoir-faire artisanal et une production limitée.

Motivation principale : acheter un produit local rare incarnant l'excellence et l'identité réunionnaise.`,
  },
  {
    id: 'secondaire',
    label: 'Cible Secondaire',
    content: `• Touristes recherchant des produits typiques de La Réunion,
• Amateurs de gastronomie et produits du terroir,
• Consommateurs soucieux d'une alimentation naturelle,
• Entreprises ou particuliers recherchant des produits premium à offrir,
• Clients réguliers des points de vente des Ruchers de Bourbon.`,
  },
];

const objectives: ObjectiveCard[] = [
  {
    title: 'Objectifs cognitifs',
    items: [
      'Faire connaître la nouvelle gamme Miels Rares du Cirque.',
      "Informer sur l'origine locale et naturelle du produit.",
      'Mettre en avant la rareté et la qualité premium des miels issus des cirques réunionnais.',
    ],
  },
  {
    title: 'Objectifs affectifs',
    items: [
      'Créer une perception haut de gamme et authentique du produit.',
      "Susciter l'émotion autour de la richesse naturelle de La Réunion.",
      "Associer la marque à des valeurs de nature préservée, d'excellence et de savoir-faire local.",
    ],
  },
  {
    title: 'Objectifs conatifs',
    items: [
      'Inciter les consommateurs à découvrir la gamme en magasin.',
      "Encourager l'achat grâce à une mise en valeur attractive en point de vente.",
      'Favoriser la mémorisation de la marque via la carte postale distribuée aux clients.',
    ],
  },
];

export function MielsSections() {
  return (
    <ProjectSectionsLayout
      layoutId="miels"
      targetTabs={targetTabs}
      objectives={objectives}
    />
  );
}
