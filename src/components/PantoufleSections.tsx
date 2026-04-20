import { ProjectSectionsLayout } from './ProjectSectionsLayout';
import type { TargetTab, ObjectiveCard } from './ProjectSectionsLayout';

const targetTabs: TargetTab[] = [
  {
    id: 'principale',
    label: 'Cible Principale',
    content:
      "Adultes de 25 à 45 ans, actifs avec un pouvoir d'achat moyen à élevé, sensibles aux produits premium, durables et fabriqués localement.\nIls recherchent un équilibre entre tradition et modernité et accordent de l'importance à la qualité, au confort et à l'authenticité des marques qu'ils consomment.",
  },
  {
    id: 'coeur',
    label: 'Coeur de Cible',
    content: `Jeunes actifs urbains de 25 à 30 ans, cadres ou professions intermédiaires, connectés et sensibles aux nouvelles formes de consommation responsable.

Ils :
• Privilégient le Made in France et les circuits de production transparents,
• Recherchent des produits premium reflétant leurs valeurs,
• Suivent les tendances lifestyle, décoration et bien-être,
• Consomment des marques racontant une histoire authentique,
• Découvrent les marques via Instagram, créateurs de contenu lifestyle et recommandations digitales.

Motivation principale : consommer un produit confortable et élégant qui incarne un art de vivre responsable et moderne.`,
  },
  {
    id: 'secondaire',
    label: 'Cible Secondaire',
    content: `• Consommateurs internationaux attirés par l'image du savoir-faire français,
• Amateurs de produits artisanaux et durables,
• Clientèle plus mature déjà adepte de la marque,
• Influenceurs lifestyle, mode ou décoration,
• Consommateurs sensibles au confort, au slow living et au bien-être à domicile.`,
  },
];

const objectives: ObjectiveCard[] = [
  {
    title: 'Objectifs cognitifs',
    items: [
      "Faire connaître la marque auprès d'un public plus jeune.",
      "Informer sur l'origine française et le savoir-faire artisanal des produits.",
      'Mettre en avant les nouvelles gammes et évolutions de la marque.',
    ],
  },
  {
    title: 'Objectifs affectifs',
    items: [
      "Susciter l'intérêt et le désir envers la marque.",
      'Développer une perception positive liée au Made in France et à la qualité artisanale.',
      'Associer La Pantoufle à Pépère à un lifestyle chic, cosy et contemporain grâce à des campagnes visuelles et des collaborations.',
    ],
  },
  {
    title: 'Objectifs conatifs',
    items: [
      'Fidéliser les nouveaux consommateurs.',
      'Augmenter le trafic et le taux de conversion du site e-commerce.',
      "Encourager l'achat via des offres limitées, collections capsules ou collaborations exclusives.",
    ],
  },
];

export function PantoufleSections() {
  return (
    <ProjectSectionsLayout
      layoutId="pantoufle"
      targetTabs={targetTabs}
      objectives={objectives}
    />
  );
}
