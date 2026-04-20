import { ProjectSectionsLayout } from './ProjectSectionsLayout';
import type { TargetTab, ObjectiveCard } from './ProjectSectionsLayout';

const targetTabs: TargetTab[] = [
  {
    id: 'principale',
    label: 'Cible Principale',
    content:
      "Les partenaires et professionnels participant à des événements, salons ou rencontres institutionnelles.",
  },
  {
    id: 'coeur',
    label: 'Cœur de Cible',
    content: `Professionnels du secteur médico-social, représentants institutionnels et partenaires locaux participant à des salons ou événements professionnels.

Ils recherchent :
• des informations claires sur les établissements,
• une identification rapide des structures présentes,
• des supports visuels professionnels et lisibles.

Motivation principale : identifier facilement les établissements et entrer en contact avec les bons interlocuteurs.`,
  },
  {
    id: 'secondaire',
    label: 'Cible Secondaire',
    content: `• Familles et visiteurs présents lors d'événements
• Acteurs du territoire
• Professionnels souhaitant découvrir les services proposés`,
  },
];

const objectives: ObjectiveCard[] = [
  {
    title: 'Objectif cognitif',
    items: [
      "Identifier rapidement les établissements lors des événements.",
      "Présenter les différents services proposés par l'association.",
      "Renforcer la visibilité des structures auprès des partenaires et visiteurs.",
    ],
  },
  {
    title: 'Objectif affectif',
    items: [
      "Valoriser l'image des établissements.",
      "Renforcer le sentiment de professionnalisme et de cohérence visuelle.",
      "Donner une image claire et organisée de l'association.",
    ],
  },
  {
    title: 'Objectif conatif',
    items: [
      "Attirer l'attention des visiteurs lors des événements.",
      "Encourager les échanges avec les représentants des établissements.",
      "Faciliter la prise de contact avec les publics et partenaires.",
    ],
  },
];

export function KakemonoSections() {
  return (
    <ProjectSectionsLayout
      layoutId="kakemono"
      targetTabs={targetTabs}
      objectives={objectives}
    />
  );
}
