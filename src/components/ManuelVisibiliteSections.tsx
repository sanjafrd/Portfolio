import { ProjectSectionsLayout } from './ProjectSectionsLayout';
import type { TargetTab, ObjectiveCard } from './ProjectSectionsLayout';
import { ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';

const targetTabs: TargetTab[] = [
  {
    id: 'principale',
    label: 'Cible Principale',
    content:
      'Les employés de l\'association utilisant des supports de communication.',
  },
  {
    id: 'coeur',
    label: 'Cœur de Cible',
    content: `Professionnels des établissements amenés à créer ou utiliser des documents internes ou externes.

Ils recherchent :
• des règles claires et faciles à appliquer,
• des exemples concrets d'utilisation,
• un document simple à consulter.

Motivation principale : utiliser correctement l'identité visuelle et produire des supports cohérents.`,
  },
  {
    id: 'secondaire',
    label: 'Cible Secondaire',
    content: `• Responsables d'établissement
• Partenaires amenés à utiliser le logo ou les supports
• Nouveaux employés intégrant l'association`,
  },
];

const objectives: ObjectiveCard[] = [
  {
    title: 'Objectif cognitif',
    items: [
      'Présenter la nouvelle charte graphique de l\'association.',
      'Expliquer les règles d\'utilisation du logo et des éléments visuels.',
      'Fournir un document de référence pour tous les supports de communication.',
    ],
  },
  {
    title: 'Objectif affectif',
    items: [
      'Renforcer le sentiment d\'appartenance à l\'association.',
      'Valoriser la nouvelle identité visuelle.',
      'Donner une image professionnelle et cohérente de l\'association.',
    ],
  },
  {
    title: 'Objectif conatif',
    items: [
      'Encourager les employés à utiliser correctement les éléments graphiques.',
      'Favoriser l\'application des règles visuelles dans les supports internes et externes.',
      'Assurer une cohérence visuelle dans toutes les communications.',
    ],
  },
];

export function ManuelVisibiliteSections() {
  return (
    <>
      <ProjectSectionsLayout
        layoutId="manuel-visibilite"
        targetTabs={targetTabs}
        objectives={objectives}
      />
      
      {/* Section Lien Canva */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mt-16 mb-8"
      >
        <h3 className="text-center mb-8" style={{ color: '#5c2c1f' }}>
          Consultez le manuel complet
        </h3>
        
        <div className="flex justify-center">
          <motion.a
            href="https://canva.link/ulydi73u5jo5aks"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-8 py-4 rounded-lg transition-all duration-300"
            style={{ 
              backgroundColor: '#bd988d',
              color: '#f0e7d7'
            }}
            whileHover={{ 
              scale: 1.05,
              backgroundColor: '#8c5b45'
            }}
            whileTap={{ scale: 0.95 }}
          >
            <ExternalLink size={24} />
            <span className="font-medium">manuel de visibilité de l'ASFA</span>
          </motion.a>
        </div>
      </motion.section>
    </>
  );
}