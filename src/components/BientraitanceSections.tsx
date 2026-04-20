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
    content: `Professionnels éducatifs, soignants et accompagnants travaillant auprès des bénéficiaires.

Ils recherchent :
• des rappels simples des bonnes pratiques,
• des messages compréhensibles rapidement,
• des supports visuels accessibles.

Motivation principale : garantir le bien-être et le respect des bénéficiaires.`,
  },
  {
    id: 'secondaire',
    label: 'Cible Secondaire',
    content: `• Usagers des établissements
• Familles des bénéficiaires
• Nouveaux professionnels
• Visiteurs des établissements`,
  },
];

const objectives: ObjectiveCard[] = [
  {
    title: 'Objectif cognitif',
    items: [
      'Informer sur l\'importance de la bientraitance au sein des établissements.',
      'Sensibiliser aux bonnes pratiques à adopter au quotidien.',
      'Diffuser un message clair et accessible à tous.',
    ],
  },
  {
    title: 'Objectif affectif',
    items: [
      'Valoriser les valeurs humaines portées par l\'association.',
      'Favoriser une prise de conscience autour du respect et du bien-être des usagers.',
      'Renforcer le sentiment d\'implication des professionnels.',
    ],
  },
  {
    title: 'Objectif conatif',
    items: [
      'Encourager les professionnels à adopter des pratiques bientraitantes.',
      'Inciter à se référer régulièrement aux messages affichés.',
      'Favoriser l\'appropriation des valeurs de bientraitance dans le quotidien professionnel.',
    ],
  },
];

export function BientraitanceSections() {
  return (
    <ProjectSectionsLayout
      layoutId="bientraitance"
      targetTabs={targetTabs}
      objectives={objectives}
    />
  );
}
