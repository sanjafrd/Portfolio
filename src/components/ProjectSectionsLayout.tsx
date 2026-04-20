import { useState, type ReactNode } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FormattedText } from './FormattedText';

export interface TargetTab {
  id: string;
  label: string;
  content: string;
}

export interface ObjectiveCard {
  title: string;
  items: string[];
}

interface ProjectSectionsLayoutProps {
  /** Unique ID for the layoutId animation (e.g. 'angele', 'pantoufle') */
  layoutId: string;
  /** Tabs for the "Publics visés" section */
  targetTabs: TargetTab[];
  /** Cards for the "Objectifs" section */
  objectives: ObjectiveCard[];
  /** Optional extra content rendered after objectives */
  children?: ReactNode;
}

export function ProjectSectionsLayout({
  layoutId,
  targetTabs,
  objectives,
  children,
}: ProjectSectionsLayoutProps) {
  const [activeTab, setActiveTab] = useState(targetTabs[0]?.id ?? '');

  const activeContent = targetTabs.find((t) => t.id === activeTab);

  return (
    <>
      {/* Publics visés Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.35 }}
        className="mb-16"
      >
        <h2 className="text-3xl md:text-4xl mb-8 text-[#5c2c1f] font-serif border-b-2 border-[#702a0c]/30 pb-4 inline-block pr-12">
          Publics visés
        </h2>

        {/* Horizontal Tab Menu */}
        <div className="flex flex-wrap gap-0 border-b border-[#5c2c1f]/10 mb-8">
          {targetTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative px-5 py-3 text-sm tracking-wide uppercase transition-colors duration-300 ${
                activeTab === tab.id
                  ? 'text-[#5c2c1f]'
                  : 'text-[#8c5b45] hover:text-[#5c2c1f]'
              }`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <motion.div
                  layoutId={`${layoutId}-target-tab-underline`}
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#702a0c]"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="min-h-[180px]">
          <AnimatePresence mode="wait">
            {activeContent && (
              <motion.div
                key={activeContent.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
                className="bg-white/60 border border-[#5c2c1f]/10 rounded-2xl p-6 md:p-8 backdrop-blur-sm"
              >
                <FormattedText content={activeContent.content} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Objectifs Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mb-16"
      >
        <h2 className="text-3xl md:text-4xl mb-8 text-[#5c2c1f] font-serif border-b-2 border-[#702a0c]/30 pb-4 inline-block pr-12">
          Objectifs
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {objectives.map((obj, index) => (
            <motion.div
              key={obj.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="bg-white/60 border border-[#5c2c1f]/10 rounded-2xl p-6 backdrop-blur-sm hover:bg-white/80 transition-colors duration-300"
            >
              <h3 className="text-[#5c2c1f] text-lg mb-4 font-serif text-center">
                {obj.title}
              </h3>
              <ul className="space-y-3">
                {obj.items.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-[#5c2c1f]/80 text-sm leading-relaxed"
                  >
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#702a0c]/70 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {children}
    </>
  );
}
