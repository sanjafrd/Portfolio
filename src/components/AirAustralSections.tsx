import { ProjectSectionsLayout } from './ProjectSectionsLayout';
import type { TargetTab, ObjectiveCard } from './ProjectSectionsLayout';

const targetTabs: TargetTab[] = [
  {
    id: 'principale',
    label: 'Cible Principale',
    content:
      "L'ensemble des collaborateurs d'Air Austral concernés par les nouvelles mesures organisationnelles et de mobilité.",
  },
  {
    id: 'coeur',
    label: 'Cœur de Cible',
    content: `Salariés administratifs et fonctions support de 25 à 55 ans, éligibles au télétravail et effectuant des trajets domicile-travail réguliers.

Ils :
• utilisent quotidiennement les outils numériques internes,
• recherchent un meilleur équilibre vie professionnelle / vie personnelle,
• sont concernés par les problématiques de transport et de temps de trajet,
• sont sensibles aux initiatives améliorant leurs conditions de travail.

Motivation principale : simplifier leur organisation quotidienne tout en réduisant les contraintes de déplacement.`,
  },
  {
    id: 'secondaire',
    label: 'Cible Secondaire',
    content: `• Managers et responsables d'équipes,
• Collaborateurs non éligibles au télétravail mais concernés par le covoiturage,
• Nouveaux employés,
• Direction et services RH,
• Partenaires internes engagés dans la démarche RSE.`,
  },
];

const objectives: ObjectiveCard[] = [
  {
    title: 'Objectif cognitif',
    items: [
      'Informer les collaborateurs des nouvelles mesures mises en place.',
      'Expliquer le fonctionnement du télétravail et du covoiturage interne.',
      "Faire comprendre les engagements RSE de l'entreprise.",
    ],
  },
  {
    title: 'Objectif affectif',
    items: [
      "Valoriser l'engagement d'Air Austral envers le bien-être des salariés.",
      "Renforcer le sentiment d'appartenance à une entreprise responsable.",
      'Créer une perception positive des changements organisationnels.',
    ],
  },
  {
    title: 'Objectif conatif',
    items: [
      'Encourager les employés à utiliser la plateforme de covoiturage.',
      "Favoriser l'adoption du télétravail lorsque cela est possible.",
      'Inciter les collaborateurs à adopter des pratiques de mobilité plus durables.',
    ],
  },
];

export function AirAustralSections() {
  return (
    <ProjectSectionsLayout
      layoutId="airaustral"
      targetTabs={targetTabs}
      objectives={objectives}
    />
  );
}
