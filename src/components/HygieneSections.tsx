import { ProjectSectionsLayout } from './ProjectSectionsLayout';
import type { TargetTab, ObjectiveCard } from './ProjectSectionsLayout';

const targetTabs: TargetTab[] = [
  {
    id: 'principale',
    label: 'Cible Principale',
    content:
      'Les professionnels travaillant au sein des établissements de l\'association.',
  },
  {
    id: 'coeur',
    label: 'Cœur de Cible',
    content: `Professionnels médicaux, paramédicaux et éducatifs intervenant auprès des bénéficiaires au quotidien.

Ils recherchent :
• des rappels simples et visuels,
• des consignes claires à appliquer rapidement,
• des supports accessibles dans leur environnement de travail.

Motivation principale : garantir la sécurité des bénéficiaires et respecter les règles d'hygiène professionnelles.`,
  },
  {
    id: 'secondaire',
    label: 'Cible Secondaire',
    content: `• Personnel administratif
• Agents techniques
• Nouveaux professionnels intégrant les établissements`,
  },
];

const objectives: ObjectiveCard[] = [
  {
    title: 'Objectif cognitif',
    items: [
      'Rappeler les gestes d\'hygiène des mains obligatoires.',
      'Sensibiliser les professionnels à l\'importance des bonnes pratiques.',
      'Diffuser des informations claires sur les règles d\'hygiène à respecter.',
    ],
  },
  {
    title: 'Objectif affectif',
    items: [
      'Renforcer le sentiment de responsabilité des professionnels.',
      'Valoriser l\'engagement des équipes dans la prévention des risques.',
      'Créer une dynamique collective autour des bonnes pratiques.',
    ],
  },
  {
    title: 'Objectif conatif',
    items: [
      'Encourager l\'application régulière des gestes d\'hygiène.',
      'Inciter les professionnels à adopter les bonnes pratiques au quotidien.',
      'Favoriser une meilleure vigilance dans les gestes professionnels.',
    ],
  },
];

export function HygieneSections() {
  return (
    <ProjectSectionsLayout
      layoutId="hygiene"
      targetTabs={targetTabs}
      objectives={objectives}
    />
  );
}
