import { ProjectSectionsLayout } from './ProjectSectionsLayout';
import type { TargetTab, ObjectiveCard } from './ProjectSectionsLayout';

const targetTabs: TargetTab[] = [
  {
    id: 'principale',
    label: 'Cible Principale',
    content:
      'Les entreprises concernées par le versement de la taxe d\'apprentissage.',
  },
  {
    id: 'coeur',
    label: 'Cœur de Cible',
    content: `Responsables d'entreprises, dirigeants ou responsables des ressources humaines en charge de la gestion de la taxe d'apprentissage.

Ils recherchent :
• des informations claires sur la procédure à suivre,
• des causes utiles et concrètes à soutenir,
• des établissements fiables à accompagner.

Motivation principale : contribuer à la formation des jeunes et soutenir des actions concrètes sur leur territoire.`,
  },
  {
    id: 'secondaire',
    label: 'Cible Secondaire',
    content: `• Partenaires économiques
• Réseaux professionnels
• Acteurs du secteur de la formation`,
  },
];

const objectives: ObjectiveCard[] = [
  {
    title: 'Objectif cognitif',
    items: [
      'Informer les entreprises sur la possibilité de choisir l\'affectation de leur taxe d\'apprentissage.',
      'Présenter l\'utilité de cette taxe pour la formation des professionnels de santé.',
      'Sensibiliser à l\'importance du soutien à l\'inclusion des jeunes en situation de handicap.',
    ],
  },
  {
    title: 'Objectif affectif',
    items: [
      'Valoriser les actions des établissements soutenus par la taxe d\'apprentissage.',
      'Créer un sentiment d\'engagement et de responsabilité auprès des entreprises.',
      'Donner une image engagée et professionnelle de l\'association.',
    ],
  },
  {
    title: 'Objectif conatif',
    items: [
      'Inciter les entreprises à choisir les établissements de l\'association sur la plateforme SOLTéA.',
      'Encourager l\'ouverture des e-mails et la prise en compte du message.',
      'Favoriser le passage à l\'action lors de la période de déclaration.',
    ],
  },
];

export function TaxeApprentissageSections() {
  return (
    <ProjectSectionsLayout
      layoutId="taxe-apprentissage"
      targetTabs={targetTabs}
      objectives={objectives}
    />
  );
}
