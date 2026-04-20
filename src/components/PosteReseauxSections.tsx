import { ProjectSectionsLayout } from './ProjectSectionsLayout';
import type { TargetTab, ObjectiveCard } from './ProjectSectionsLayout';
import { Facebook, Linkedin } from 'lucide-react';
import { motion } from 'motion/react';

const targetTabs: TargetTab[] = [
  {
    id: 'principale',
    label: 'Cible Principale',
    content:
      'Les personnes souhaitant suivre l\'actualité de l\'association et de ses établissements.',
  },
  {
    id: 'coeur',
    label: 'Cœur de Cible',
    content: `Professionnels de santé, bénéficiaires, étudiants et personnes intéressées par le secteur médico-social.

Ils recherchent :
• des informations régulières,
• des contenus utiles et accessibles,
• une meilleure compréhension du secteur.

Motivation principale : rester informés des activités et des actions liées au secteur médico-social.`,
  },
  {
    id: 'secondaire',
    label: 'Cible Secondaire',
    content: `• Familles des bénéficiaires
• Partenaires institutionnels
• Grand public
• Futurs professionnels du secteur`,
  },
];

const objectives: ObjectiveCard[] = [
  {
    title: 'Objectif cognitif',
    items: [
      'Informer sur les activités et événements de l\'association.',
      'Faire connaître les missions et les actions des établissements.',
      'Diffuser des informations sur le secteur médico-social.',
    ],
  },
  {
    title: 'Objectif affectif',
    items: [
      'Valoriser les actions des équipes et des bénéficiaires.',
      'Créer une relation de proximité avec les publics.',
      'Renforcer l\'image positive et humaine de l\'association.',
    ],
  },
  {
    title: 'Objectif conatif',
    items: [
      'Encourager les abonnements aux pages sociales.',
      'Favoriser l\'engagement (likes, commentaires, partages).',
      'Inciter les publics à suivre régulièrement l\'actualité de l\'association.',
    ],
  },
];

export function PosteReseauxSections() {
  return (
    <>
      <ProjectSectionsLayout
        layoutId="poste-reseaux"
        targetTabs={targetTabs}
        objectives={objectives}
      />
      
      {/* Section Réseaux Sociaux */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mt-16 mb-8"
      >
        <h3 className="text-center mb-8" style={{ color: '#5c2c1f' }}>
          Retrouvez l'Association Saint-François d'Assise
        </h3>
        
        <div className="flex flex-wrap justify-center gap-6">
          <motion.a
            href="https://www.facebook.com/p/Association-Saint-François-dAssise-61572606964765/"
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
            <Facebook size={24} />
            <span className="font-medium">Facebook</span>
          </motion.a>
          
          <motion.a
            href="https://www.linkedin.com/company/association-asfa/"
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
            <Linkedin size={24} />
            <span className="font-medium">LinkedIn</span>
          </motion.a>
        </div>
      </motion.section>
    </>
  );
}