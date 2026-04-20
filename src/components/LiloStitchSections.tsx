import { ProjectSectionsLayout } from './ProjectSectionsLayout';
import type { TargetTab, ObjectiveCard } from './ProjectSectionsLayout';

const targetTabs: TargetTab[] = [
  {
    id: 'principale',
    label: 'Cible Principale',
    content:
      "Grand public amateur de films d'animation et d'aventure, sensible aux univers visuels immersifs et exotiques.",
  },
  {
    id: 'coeur',
    label: 'Coeur de Cible',
    content: `Jeunes de 15 à 20 ans, consommateurs réguliers de contenus cinématographiques et de culture pop.

Ils :
• apprécient les univers colorés et narratifs,
• sont sensibles aux affiches visuellement fortes,
• découvrent les films via les réseaux sociaux et plateformes digitales,
• accordent une importance à l'esthétique visuelle dans leur choix de contenu.

Motivation principale : être attiré visuellement par un univers dépaysant et engageant.`,
  },
  {
    id: 'secondaire',
    label: 'Cible Secondaire',
    content: `• Familles et amateurs de films d'animation,
• Fans de culture Disney et pop culture,
• Amateurs d'univers tropicaux et d'aventure,
• Publics recherchant des contenus divertissants et accessibles.`,
  },
];

const objectives: ObjectiveCard[] = [
  {
    title: 'Objectifs cognitifs',
    items: [
      "Présenter un film fictif à travers une affiche attractive.",
      "Identifier immédiatement l'univers exotique du film.",
      "Mettre en avant les personnages principaux et l'ambiance narrative.",
    ],
  },
  {
    title: 'Objectifs affectifs',
    items: [
      "Susciter l'évasion et le dépaysement.",
      "Créer une connexion émotionnelle avec l'univers du film.",
      "Donner envie de découvrir l'histoire grâce à une atmosphère immersive et chaleureuse.",
    ],
  },
  {
    title: 'Objectifs conatifs',
    items: [
      "Attirer l'attention du public.",
      'Donner envie de voir le film.',
      "Générer de la curiosité et de l'intérêt dès le premier regard.",
    ],
  },
];

export function LiloStitchSections() {
  return (
    <ProjectSectionsLayout
      layoutId="lilostitch"
      targetTabs={targetTabs}
      objectives={objectives}
    />
  );
}
