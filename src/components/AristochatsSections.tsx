import { ProjectSectionsLayout } from './ProjectSectionsLayout';
import type { TargetTab, ObjectiveCard } from './ProjectSectionsLayout';

const targetTabs: TargetTab[] = [
  {
    id: 'principale',
    label: 'Cible Principale',
    content:
      'Familles et jeunes adultes recherchant des expériences de loisirs originales et immersives.',
  },
  {
    id: 'coeur',
    label: 'Cœur de Cible',
    content: `Jeunes adultes et familles de 18 à 35 ans, consommateurs réguliers de sorties culturelles et sensibles aux expériences événementielles.

Ils :
• privilégient les activités expérientielles,
• recherchent des sorties originales à partager,
• sont actifs sur les réseaux sociaux,
• sont attirés par des événements exclusifs liés à la pop culture.

Motivation principale : vivre une expérience différente qui donne une vraie raison d'aller au cinéma.`,
  },
  {
    id: 'secondaire',
    label: 'Cible Secondaire',
    content: `• Fans de Disney,
• amoureux des animaux,
• groupes d'amis,
• influenceurs lifestyle et famille,
• associations partenaires.`,
  },
];

const objectives: ObjectiveCard[] = [
  {
    title: 'Objectif cognitif',
    items: [
      'Mettre en avant la projection du film dans le cadre des 100 ans de Disney.',
      'Faire connaître une expérience cinéma innovante.',
      "Attirer l'attention autour d'un événement inédit en salle.",
    ],
  },
  {
    title: 'Objectif affectif',
    items: [
      'Créer une expérience ludique et mémorable.',
      "Renforcer l'attachement émotionnel à l'univers du film.",
      'Associer la séance de cinéma à un moment unique et chaleureux.',
    ],
  },
  {
    title: 'Objectif conatif',
    items: [
      'Inciter le public à se déplacer en salle.',
      'Augmenter la fréquentation des séances.',
      'Encourager le bouche-à-oreille et le partage sur les réseaux sociaux.',
    ],
  },
];

export function AristochatsSections() {
  return (
    <ProjectSectionsLayout
      layoutId="aristochats"
      targetTabs={targetTabs}
      objectives={objectives}
    />
  );
}
