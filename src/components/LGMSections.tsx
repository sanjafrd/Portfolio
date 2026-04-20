import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';
import { ProjectSectionsLayout } from './ProjectSectionsLayout';
import type { TargetTab, ObjectiveCard } from './ProjectSectionsLayout';

const targetTabs: TargetTab[] = [
  {
    id: 'principale',
    label: 'Cible Principale',
    content:
      'Consommateurs à fort pouvoir d\'achat, sensibles aux expériences gastronomiques premium et aux concepts innovants.',
  },
  {
    id: 'coeur',
    label: 'Coeur de Cible',
    content: `Adultes de 30 à 55 ans, installés professionnellement et financièrement, recherchant des expériences gastronomiques exclusives et des prestations haut de gamme pour leurs loisirs ou événements privés.

Motivation principale : vivre une expérience culinaire premium et différenciante.`,
  },
  {
    id: 'secondaire',
    label: 'Cible Secondaire',
    content: `• Couples organisant mariages et événements privés,
• Familles aisées,
• Organisateurs d'événements,
• Influenceurs lifestyle et luxe.`,
  },
];

const objectives: ObjectiveCard[] = [
  {
    title: 'Objectif cognitif',
    items: [
      'Faire connaître le nouveau positionnement premium de la marque.',
      'Présenter un univers de marque clair et différenciant.',
      'Valoriser l\'offre gastronomique et événementielle proposée.',
    ],
  },
  {
    title: 'Objectif affectif',
    items: [
      'Créer une image élégante et luxueuse autour de la marque.',
      'Susciter le désir et l\'envie grâce à un univers visuel immersif.',
      'Associer la marque à des moments d\'exception et de plaisir.',
    ],
  },
  {
    title: 'Objectif conatif',
    items: [
      'Donner envie aux consommateurs de découvrir la marque.',
      'Encourager la réservation pour des événements premium.',
      'Inciter à la commande via le site imaginé.',
    ],
  },
];

export function LGMSections() {
  return (
    <ProjectSectionsLayout
      layoutId="lgm"
      targetTabs={targetTabs}
      objectives={objectives}
    >
      {/* Brandbook Link Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.45 }}
        className="mb-16"
      >
        <h2 className="text-3xl md:text-4xl mb-6 text-[#5c2c1f] font-serif border-b-2 border-[#702a0c]/30 pb-4 inline-block pr-12">
          Brandbook
        </h2>

        <div className="block">
          <a
            href="https://www.canva.com/design/DAG6QwH8UuY/ixb2wFvHd_Ar6OSZQKpvTQ/edit?utm_content=DAG6QwH8UuY&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-5 py-2.5 bg-[#e3a0a3] text-[#5c2c1f] rounded-full shadow-md hover:shadow-[#e3a0a3]/30 hover:scale-105 hover:bg-[#bd988d] transition-all duration-300 text-sm"
          >
            <span className="tracking-wide">Consulter le brandbook</span>
            <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </motion.div>
    </ProjectSectionsLayout>
  );
}
