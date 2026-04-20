import { ProjectSectionsLayout } from './ProjectSectionsLayout';
import type { TargetTab, ObjectiveCard } from './ProjectSectionsLayout';

const targetTabs: TargetTab[] = [
  {
    id: 'principale',
    label: 'Cible Principale',
    content:
      'Touristes français et visiteurs nationaux recherchant des expériences de voyage originales et authentiques en France.',
  },
  {
    id: 'coeur',
    label: 'Coeur de Cible',
    content: `Adultes de 25 à 45 ans, couples, jeunes actifs ou familles aimant le tourisme nature et les expériences immersives.
Sensibles aux paysages, au patrimoine local et aux voyages expérientiels, ils privilégient des activités permettant de découvrir une région autrement.

Ils recherchent :
• des expériences uniques à vivre pendant leurs vacances,
• des activités accessibles et dépaysantes,
• des voyages alliant confort, découverte et authenticité.

Motivation principale : vivre une expérience mémorable et immersive au coeur des paysages pyrénéens.`,
  },
  {
    id: 'secondaire',
    label: 'Cible Secondaire',
    content: `• Touristes internationaux visitant la France,
• Seniors amateurs de voyages ferroviaires panoramiques,
• Passionnés de patrimoine et de trains historiques,
• Agences de tourisme et acteurs locaux pouvant promouvoir l'expérience.`,
  },
];

const objectives: ObjectiveCard[] = [
  {
    title: 'Objectif cognitif',
    items: [
      "Faire connaître le Train Jaune comme une attraction touristique emblématique du territoire.",
      "Informer le public sur l'expérience unique offerte par ce voyage ferroviaire à travers les Pyrénées.",
      "Mettre en avant le patrimoine, les paysages et la dimension historique de la ligne.",
    ],
  },
  {
    title: 'Objectif affectif',
    items: [
      "Susciter l'évasion et le rêve à travers une narration immersive.",
      "Créer une connexion émotionnelle avec le voyage et la découverte des paysages naturels.",
      "Valoriser une image authentique, chaleureuse et dépaysante du transport ferroviaire.",
    ],
  },
  {
    title: 'Objectif conatif',
    items: [
      "Donner envie au public de vivre l'expérience du Train Jaune.",
      "Encourager la planification d'un séjour touristique dans la région.",
      "Inciter les voyageurs à privilégier le train comme moyen de découverte touristique durable.",
    ],
  },
];

export function StoryboardSections() {
  return (
    <ProjectSectionsLayout
      layoutId="storyboard"
      targetTabs={targetTabs}
      objectives={objectives}
    />
  );
}
