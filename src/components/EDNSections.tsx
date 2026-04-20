import { ProjectSectionsLayout } from './ProjectSectionsLayout';
import type { TargetTab, ObjectiveCard } from './ProjectSectionsLayout';

const targetTabs: TargetTab[] = [
  {
    id: 'principale',
    label: 'Cible Principale',
    content:
      'Futurs étudiants intéressés par les formations dans le numérique et la communication.',
  },
  {
    id: 'coeur',
    label: 'Cœur de Cible',
    content: `Jeunes de 17 à 23 ans, en phase d'orientation ou de réorientation, très actifs sur les réseaux sociaux et utilisant la vidéo courte comme principal moyen d'information.

Ils recherchent :
• une formation professionnalisante,
• un environnement dynamique,
• une école correspondant à leurs aspirations professionnelles.

Motivation principale : se projeter concrètement dans leur future vie étudiante.`,
  },
  {
    id: 'secondaire',
    label: 'Cible Secondaire',
    content: `• Parents d'élèves,
• Étudiants en reconversion,
• Communauté digitale de l'école,
• Partenaires pédagogiques.`,
  },
];

const objectives: ObjectiveCard[] = [
  {
    title: 'Objectif cognitif',
    items: [
      "Présenter l'EDN et ses formations auprès des futurs étudiants.",
      "Informer sur l'environnement et la vie au sein de l'école.",
      "Renforcer la visibilité digitale de l'établissement.",
    ],
  },
  {
    title: 'Objectif affectif',
    items: [
      "Donner une image dynamique, moderne et accessible de l'école.",
      'Permettre aux futurs étudiants de se projeter dans leur future formation.',
      'Créer une connexion émotionnelle avec la vie étudiante.',
    ],
  },
  {
    title: 'Objectif conatif',
    items: [
      "Inciter les étudiants à se renseigner sur l'école.",
      'Encourager les candidatures et prises de contact.',
      "Générer de l'engagement sur les réseaux sociaux.",
    ],
  },
];

export function EDNSections() {
  return (
    <ProjectSectionsLayout
      layoutId="edn"
      targetTabs={targetTabs}
      objectives={objectives}
    />
  );
}
