import { ProjectSectionsLayout } from './ProjectSectionsLayout';
import type { TargetTab, ObjectiveCard } from './ProjectSectionsLayout';

const targetTabs: TargetTab[] = [
  {
    id: 'principale',
    label: 'Cible Principale',
    content:
      'Les parents et familles ayant de jeunes enfants susceptibles de rencontrer des difficultés liées à l\'alimentation.',
  },
  {
    id: 'coeur',
    label: 'Cœur de Cible',
    content: `Parents de jeunes enfants, notamment en bas âge, confrontés à des difficultés alimentaires ou souhaitant mieux comprendre le développement alimentaire de leur enfant.

Ils recherchent :
• des informations simples et compréhensibles,
• des conseils pratiques à appliquer au quotidien,
• des repères pour identifier les signes d'alerte.

Motivation principale : mieux comprendre les comportements alimentaires de leur enfant et agir rapidement en cas de difficulté.`,
  },
  {
    id: 'secondaire',
    label: 'Cible Secondaire',
    content: `• Professionnels de santé
• Professionnels de la petite enfance
• Familles élargies (grands-parents, proches)
• Personnel des établissements de santé`,
  },
];

const objectives: ObjectiveCard[] = [
  {
    title: 'Objectif cognitif',
    items: [
      'Informer les familles sur les signes pouvant indiquer des troubles alimentaires chez les jeunes enfants.',
      'Expliquer les bases du développement de l\'oralité chez l\'enfant.',
      'Apporter des informations claires grâce à des supports visuels accessibles.',
    ],
  },
  {
    title: 'Objectif affectif',
    items: [
      'Rassurer les familles face aux difficultés alimentaires rencontrées par les enfants.',
      'Créer un climat de confiance autour des messages de prévention.',
      'Valoriser l\'accompagnement proposé par les établissements de santé.',
    ],
  },
  {
    title: 'Objectif conatif',
    items: [
      'Encourager les familles à être attentives aux signes d\'alerte.',
      'Inciter à consulter un professionnel en cas de doute.',
      'Favoriser l\'utilisation de la brochure comme support de référence au quotidien.',
    ],
  },
];

export function OraliteSections() {
  return (
    <ProjectSectionsLayout
      layoutId="oralite"
      targetTabs={targetTabs}
      objectives={objectives}
    />
  );
}
