import { ProjectSectionsLayout } from './ProjectSectionsLayout';
import type { TargetTab, ObjectiveCard } from './ProjectSectionsLayout';

const targetTabs: TargetTab[] = [
  {
    id: 'principale',
    label: 'Cible Principale',
    content:
      "Grand public consommateur de fruits frais, sensible aux produits d'origine contrôlée et à la qualité alimentaire.",
  },
  {
    id: 'coeur',
    label: 'Coeur de Cible',
    content: `Adultes de 35 à 55 ans, responsables d'achats du foyer, attentifs à l'origine des produits alimentaires et privilégiant des produits français reconnus pour leur qualité.

Ils :
• réalisent régulièrement leurs achats alimentaires en grande distribution,
• sont sensibles aux labels d'origine et à la traçabilité,
• associent les produits régionaux à une meilleure qualité,
• recherchent des produits naturels pour une consommation quotidienne.

Motivation principale : choisir un produit fiable, savoureux et identifiable rapidement en magasin.`,
  },
  {
    id: 'secondaire',
    label: 'Cible Secondaire',
    content: `• Familles avec enfants,
• consommateurs occasionnels de fruits,
• touristes et visiteurs sensibles aux produits régionaux,
• distributeurs et partenaires commerciaux,
• professionnels du secteur alimentaire.`,
  },
];

const objectives: ObjectiveCard[] = [
  {
    title: 'Objectifs cognitifs',
    items: [
      "Renforcer la visibilité de la marque auprès du grand public.",
      "Assurer la reconnaissance immédiate de Clémentine de Corse.",
      "Mettre en avant l'origine et l'authenticité du produit.",
    ],
  },
  {
    title: 'Objectifs affectifs',
    items: [
      "Associer la marque à des valeurs de fraîcheur, naturalité et qualité.",
      "Créer une image positive et dynamique.",
      "Valoriser le caractère régional et authentique du produit.",
    ],
  },
  {
    title: 'Objectifs conatifs',
    items: [
      "Attirer l'attention des passants et automobilistes.",
      "Favoriser la mémorisation de la marque.",
      "Inciter à l'achat en magasin grâce à une communication visible et répétée.",
    ],
  },
];

export function ClementineSections() {
  return (
    <ProjectSectionsLayout
      layoutId="clementine"
      targetTabs={targetTabs}
      objectives={objectives}
    />
  );
}
