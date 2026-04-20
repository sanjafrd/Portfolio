import { ProjectSectionsLayout } from './ProjectSectionsLayout';
import type { TargetTab, ObjectiveCard } from './ProjectSectionsLayout';

const targetTabs: TargetTab[] = [
  {
    id: 'principale',
    label: 'Cible Principale',
    content:
      "Jeunes de 15 à 25 ans, scolarisés ou jeunes actifs, fortement présents sur les réseaux sociaux et exposés aux comportements à risque liés aux addictions et à la prise de décisions impulsives.",
  },
  {
    id: 'coeur',
    label: 'Coeur de Cible',
    content: `Jeunes de 16 à 22 ans, lycéens, étudiants ou jeunes en insertion, utilisateurs quotidiens d'Instagram, TikTok et Snapchat.

Ils :
• consomment majoritairement du contenu court et visuel,
• sont sensibles aux messages authentiques et non institutionnels,
• rejettent les discours moralisateurs,
• s'identifient davantage à des situations réalistes ou humoristiques,
• sont influencés par leurs pairs et les tendances digitales.

Motivation principale : se reconnaître dans le message sans se sentir jugé.`,
  },
  {
    id: 'secondaire',
    label: 'Cible Secondaire',
    content: `• Parents et familles,
• Éducateurs et structures jeunesse,
• Professionnels de l'accompagnement social,
• Établissements scolaires,
• Collectivités et acteurs de la prévention.`,
  },
];

const objectives: ObjectiveCard[] = [
  {
    title: 'Objectifs cognitifs',
    items: [
      'Informer les jeunes sur les risques liés aux addictions et comportements dangereux.',
      'Mettre en lumière les conséquences à court et long terme.',
      'Sensibiliser aux impacts physiques, psychologiques et sociaux.',
    ],
  },
  {
    title: 'Objectifs affectifs',
    items: [
      "Créer une identification grâce à un ton accessible et visuel.",
      'Rendre la prévention moins moralisatrice et plus engageante.',
      'Susciter une prise de conscience par des situations du quotidien.',
    ],
  },
  {
    title: 'Objectifs conatifs',
    items: [
      'Encourager des comportements plus responsables.',
      'Inciter les jeunes à réfléchir à leurs habitudes.',
      "Favoriser l'adoption d'alternatives positives et sécurisées.",
      'Encourager le partage des contenus de prévention sur les réseaux sociaux.',
    ],
  },
];

export function MauvaisElevesSections() {
  return (
    <ProjectSectionsLayout
      layoutId="mauvaiseleves"
      targetTabs={targetTabs}
      objectives={objectives}
    />
  );
}
