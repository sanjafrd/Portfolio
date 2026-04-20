import { ProjectSectionsLayout } from './ProjectSectionsLayout';
import type { TargetTab, ObjectiveCard } from './ProjectSectionsLayout';

const targetTabs: TargetTab[] = [
  {
    id: 'principale',
    label: 'Cible Principale',
    content:
      "Les familles et les proches des personnes accompagnées par les établissements de l'association.",
  },
  {
    id: 'coeur',
    label: 'Cœur de Cible',
    content: `Parents, aidants et proches de personnes en situation de handicap, de dépendance ou nécessitant un accompagnement médico-social.

Ils recherchent :
• des informations claires et accessibles,
• une compréhension des services proposés,
• une structure adaptée aux besoins de leurs proches.

Motivation principale : trouver un établissement fiable et adapté à leur situation.`,
  },
  {
    id: 'secondaire',
    label: 'Cible Secondaire',
    content: `• Partenaires institutionnels et professionnels du secteur médico-social
• Futurs bénéficiaires
• Professionnels souhaitant intégrer l'association
• Acteurs du territoire`,
  },
];

const objectives: ObjectiveCard[] = [
  {
    title: 'Objectif cognitif',
    items: [
      "Présenter de manière claire les missions et services de chaque établissement.",
      "Faciliter la compréhension de l'organisation globale de l'association.",
      "Informer les publics sur les différentes offres d'accompagnement proposées.",
    ],
  },
  {
    title: 'Objectif affectif',
    items: [
      "Valoriser l'image de l'association et de ses établissements.",
      "Mettre en avant les valeurs humaines et l'engagement des équipes.",
      "Renforcer la confiance des familles et partenaires.",
    ],
  },
  {
    title: 'Objectif conatif',
    items: [
      "Encourager les prises de contact avec les établissements.",
      "Faciliter l'orientation des publics vers les structures adaptées.",
      "Inciter les partenaires à collaborer avec les établissements.",
    ],
  },
];

export function BrochureSections() {
  return (
    <ProjectSectionsLayout
      layoutId="brochure"
      targetTabs={targetTabs}
      objectives={objectives}
    />
  );
}
