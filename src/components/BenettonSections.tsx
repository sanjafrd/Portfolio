import { ProjectSectionsLayout } from './ProjectSectionsLayout';
import type { TargetTab, ObjectiveCard } from './ProjectSectionsLayout';

const targetTabs: TargetTab[] = [
  {
    id: 'principale',
    label: 'Cible Principale',
    content:
      "Futurs étudiants intéressés par les formations dans le domaine du numérique, de la communication et des métiers du digital proposées par l'école EDN.",
  },
  {
    id: 'coeur',
    label: 'Cœur de Cible',
    content: `Jeunes de 17 à 23 ans, en phase d'orientation ou de réorientation après le baccalauréat ou durant leurs études supérieures, fortement présents sur les réseaux sociaux et consommateurs réguliers de contenus vidéo courts (Reels, TikTok, Shorts).

Ils recherchent :
• une formation concrète et professionnalisante,
• une école dynamique et moderne,
• un environnement d'apprentissage proche du monde professionnel,
• une ambiance étudiante attractive favorisant l'épanouissement personnel.

Motivation principale : pouvoir se projeter facilement dans leur future vie étudiante et comprendre concrètement ce que l'école peut leur apporter pour leur avenir professionnel.`,
  },
  {
    id: 'secondaire',
    label: 'Cible Secondaire',
    content: `• Parents d'élèves participant au choix d'orientation,
• Étudiants en reconversion ou souhaitant se spécialiser dans les métiers du digital,
• Communauté digitale de l'école (étudiants actuels, anciens élèves),
• Partenaires pédagogiques et professionnels susceptibles de relayer l'image et l'attractivité de l'établissement.`,
  },
];

const objectives: ObjectiveCard[] = [
  {
    title: 'Objectif cognitif',
    items: [
      "Faire connaître le nouveau positionnement streetwear de la marque auprès d'une audience plus jeune.",
      "Informer le public sur l'évolution de l'identité visuelle et stylistique de Benetton.",
      'Augmenter la visibilité de la marque sur les plateformes digitales utilisées par la cible (Instagram, TikTok, réseaux sociaux visuels).',
    ],
  },
  {
    title: 'Objectif affectif',
    items: [
      "Moderniser la perception de la marque afin qu'elle soit associée à des valeurs de tendance, de créativité et d'expression personnelle.",
      'Créer une proximité émotionnelle avec la cible grâce à des contenus visuels inspirants et authentiques.',
      "Renforcer l'attractivité de la marque en développant une image plus lifestyle et en phase avec les codes culturels urbains actuels.",
    ],
  },
  {
    title: 'Objectif conatif',
    items: [
      'Inciter la cible à suivre la marque sur ses réseaux sociaux afin de découvrir ses nouvelles collections.',
      "Encourager l'engagement digital (likes, partages, commentaires) autour des contenus diffusés.",
      "Susciter l'envie d'achat et favoriser l'intérêt pour les produits issus du nouveau positionnement streetwear.",
    ],
  },
];

export function BenettonSections() {
  return (
    <ProjectSectionsLayout
      layoutId="benetton"
      targetTabs={targetTabs}
      objectives={objectives}
    />
  );
}
