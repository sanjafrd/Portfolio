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
• des informations claires et fiables,
• des rappels accessibles rapidement,
• des formats simples et engageants.

Motivation principale : garantir la sécurité des bénéficiaires et respecter les recommandations de santé.`,
  },
  {
    id: 'secondaire',
    label: 'Cible Secondaire',
    content: `• Personnel administratif
• Nouveaux professionnels
• Étudiants en stage au sein des établissements`,
  },
];

const objectives: ObjectiveCard[] = [
  {
    title: 'Objectifs cognitifs',
    items: [
      'Informer les professionnels sur l\'importance de la vaccination.',
      'Diffuser des informations fiables sur les recommandations vaccinales.',
      'Sensibiliser aux enjeux liés à la protection des bénéficiaires.',
    ],
  },
  {
    title: 'Objectifs affectifs',
    items: [
      'Rassurer les professionnels face aux questions liées à la vaccination.',
      'Favoriser une image positive de la prévention en santé.',
      'Créer un intérêt autour du sujet grâce à une approche ludique.',
    ],
  },
  {
    title: 'Objectifs conatifs',
    items: [
      'Encourager les professionnels à s\'informer sur la vaccination.',
      'Inciter à participer au quiz pour tester leurs connaissances.',
      'Favoriser l\'adoption des bonnes pratiques vaccinales.',
    ],
  },
];

export function VaccinationSections() {
  return (
    <ProjectSectionsLayout
      layoutId="vaccination"
      targetTabs={targetTabs}
      objectives={objectives}
    />
  );
}
