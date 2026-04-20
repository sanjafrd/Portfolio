import { ProjectSectionsLayout } from './ProjectSectionsLayout';
import type { TargetTab, ObjectiveCard } from './ProjectSectionsLayout';

const targetTabs: TargetTab[] = [
  {
    id: 'principale',
    label: 'Cible Principale',
    content:
      "Les professionnels de santé travaillant au sein des établissements concernés.",
  },
  {
    id: 'coeur',
    label: 'Cœur de Cible',
    content: `Professionnels médicaux et paramédicaux (infirmiers, aides-soignants, médecins, cadres de santé) directement impliqués dans la prise en charge des patients et concernés par les thématiques de sécurité des soins.

Ils recherchent :
• des formations pratiques et utiles,
• des informations fiables sur les bonnes pratiques,
• des événements facilitant l'apprentissage et l'échange.

Motivation principale : améliorer leurs pratiques professionnelles et garantir la sécurité des patients.`,
  },
  {
    id: 'secondaire',
    label: 'Cible Secondaire',
    content: `• Autres professionnels du secteur médico-social
• Étudiants en formation dans le domaine de la santé
• Partenaires institutionnels`,
  },
];

const objectives: ObjectiveCard[] = [
  {
    title: 'Objectif cognitif',
    items: [
      "Informer les professionnels de santé de l'organisation de la Semaine de la Sécurité des Patients.",
      "Présenter le programme et les activités proposées durant l'événement.",
      "Sensibiliser aux enjeux liés à la sécurité des soins.",
    ],
  },
  {
    title: 'Objectif affectif',
    items: [
      "Valoriser l'engagement de l'établissement en faveur de la sécurité des patients.",
      "Créer une image professionnelle et rassurante auprès des participants.",
      "Encourager l'intérêt des professionnels pour les thématiques abordées.",
    ],
  },
  {
    title: 'Objectif conatif',
    items: [
      "Inciter les professionnels à s'inscrire aux ateliers proposés.",
      "Favoriser la participation active aux activités organisées.",
      "Faciliter l'inscription grâce à une plateforme en ligne accessible.",
    ],
  },
];

export function SecuritePatientSections() {
  return (
    <ProjectSectionsLayout
      layoutId="securite-patient"
      targetTabs={targetTabs}
      objectives={objectives}
    />
  );
}
