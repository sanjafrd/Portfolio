import { motion } from 'motion/react';
import { FormattedText } from './FormattedText';

const objectives = [
  'Maîtriser les fonctionnalités essentielles de Photoshop.',
  'Développer la précision graphique.',
  "Comprendre la construction technique d'une affiche professionnelle.",
  'Améliorer la gestion des détails visuels et des compositions complexes.',
];

export function NaluSections() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="mb-16"
    >
      <h2 className="text-3xl md:text-4xl mb-8 text-[#5c2c1f] font-serif border-b-2 border-[#702a0c]/30 pb-4 inline-block pr-12">
        Objectif du projet
      </h2>

      <div className="bg-white/60 border border-[#5c2c1f]/10 rounded-2xl p-6 md:p-8 backdrop-blur-sm">
        <p className="text-[#5c2c1f]/85 leading-relaxed text-[17px] mb-4">
          Ce projet ne répondait pas à une problématique de communication mais à un objectif pédagogique, visant à :
        </p>
        <ul className="space-y-3">
          {objectives.map((item, i) => (
            <li
              key={i}
              className="flex items-start gap-2 text-[#5c2c1f]/85 text-[17px] leading-relaxed"
            >
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#702a0c]/70 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}