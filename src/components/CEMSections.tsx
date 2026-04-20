import { ProjectSectionsLayout } from './ProjectSectionsLayout';
import type { TargetTab, ObjectiveCard } from './ProjectSectionsLayout';

const targetTabs: TargetTab[] = [
  {
    id: 'principale',
    label: 'Cible Principale',
    content:
      "Les familles des bénéficiaires et les proches participants à la vie de l'établissement.",
  },
  {
    id: 'coeur',
    label: 'Coeur de Cible',
    content: `Parents et membres de la famille des bénéficiaires accompagnés par le CEM. Ils sont directement concernés par la vie de l'établissement et souhaitent partager les moments importants vécus par leurs enfants.

Motivation principale : soutenir et valoriser la participation des bénéficiaires au spectacle et partager un moment important pour l'établissement.`,
  },
  {
    id: 'secondaire',
    label: 'Cible Secondaire',
    content: `• Professionnels et équipes éducatives du CEM
• Partenaires institutionnels et professionnels du secteur médico-social
• Communauté en ligne via les réseaux sociaux du CEM`,
  },
];

const objectives: ObjectiveCard[] = [
  {
    title: 'Objectif cognitif',
    items: [
      "Informer les familles, partenaires et professionnels de l'organisation du spectacle des 20 ans du CEM.",
      "Faire connaître l'événement et les activités proposées lors de cette célébration.",
      "Valoriser l'histoire et les missions de l'établissement auprès des publics.",
    ],
  },
  {
    title: 'Objectif affectif',
    items: [
      "Renforcer le sentiment d'appartenance des bénéficiaires, des familles et des équipes.",
      "Créer un moment de partage et d'émotion autour de l'anniversaire de l'établissement.",
      "Valoriser le travail des professionnels et les réussites des bénéficiaires.",
    ],
  },
  {
    title: 'Objectif conatif',
    items: [
      "Inciter les familles et partenaires à participer à l'événement.",
      "Encourager l'engagement et la participation des bénéficiaires au spectacle.",
      "Favoriser les échanges et les interactions entre les différents publics présents.",
    ],
  },
];

export function CEMSections() {
  return (
    <ProjectSectionsLayout
      layoutId="cem"
      targetTabs={targetTabs}
      objectives={objectives}
    />
  );
}
