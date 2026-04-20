import { ProjectSectionsLayout } from './ProjectSectionsLayout';
import type { TargetTab, ObjectiveCard } from './ProjectSectionsLayout';

const targetTabs: TargetTab[] = [
  {
    id: 'principale',
    label: 'Cible Principale',
    content:
      'Jeunes adultes de 18 à 30 ans sensibles à la musique pop, à la mode et aux collaborations exclusives entre artistes et marques lifestyle.',
  },
  {
    id: 'coeur',
    label: 'Cœur de Cible',
    content: `Femmes de 19 à 22 ans, étudiantes ou jeunes actives, vivant en milieu urbain ou périurbain, fortement présentes sur Instagram, TikTok et Spotify, suivant l'actualité d'Angèle et sensibles aux tendances mode accessibles.

Elles :
• consomment régulièrement des produits dérivés d'artistes,
• recherchent des pièces exclusives ou éditions limitées pour affirmer leur identité,
• accordent de l'importance à l'esthétique visuelle et à l'image de marque,
• utilisent la mode et la musique comme moyen d'expression personnelle,
• sont attirées par les collaborations perçues comme créatives, authentiques et "instagrammables".

Motivation principale : posséder un objet qui reflète leur univers culturel et leur personnalité.`,
  },
  {
    id: 'secondaire',
    label: 'Cible Secondaire',
    content: `• Fans de la marque réunionnaise Pardon!, toutes tranches d'âge confondues,
• Amateurs de streetwear et de lifestyle insulaire,
• Consommateurs de merchandising musical,
• Jeunes adultes intéressés par la mode, le design graphique ou la culture pop,
• Touristes ou publics attachés à l'image créative et culturelle réunionnaise.`,
  },
];

const objectives: ObjectiveCard[] = [
  {
    title: 'Objectif cognitif',
    items: [
      'Faire découvrir la collaboration entre Angèle et Pardon!.',
      'Présenter les produits issus de la collection.',
      "Valoriser l'univers artistique et lifestyle commun aux deux marques.",
    ],
  },
  {
    title: 'Objectif affectif',
    items: [
      'Créer une connexion émotionnelle avec la collaboration.',
      "Générer de l'attachement grâce à un univers visuel doux, moderne et tendance.",
      "Renforcer l'image créative et innovante des deux marques.",
    ],
  },
  {
    title: 'Objectif conatif',
    items: [
      'Inciter les visiteurs à explorer la landing page.',
      "Encourager l'achat du tote bag et de l'album collaboratif.",
      'Susciter le partage du projet sur les réseaux sociaux.',
    ],
  },
];

export function AngelePardonSections() {
  return (
    <ProjectSectionsLayout
      layoutId="angele"
      targetTabs={targetTabs}
      objectives={objectives}
    />
  );
}
