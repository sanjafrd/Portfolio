import { motion, AnimatePresence } from 'motion/react';
import type { FilterType } from '../../App';
import { projects } from '../../data/projects';
import { getFilterTitle } from '../../utils/helpers';
import { ProjectCard } from '../ProjectCard';

interface RealisationsPageProps {
  navigateToProject: (projectId: number) => void;
  filter: FilterType;
}

export function RealisationsPage({ navigateToProject, filter }: RealisationsPageProps) {
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.type === filter);

  return (
    <section className="min-h-screen px-4 py-24 sm:px-6 sm:py-32 bg-gradient-to-br from-[#f0e7d7] via-[#f9e0da]/30 to-[#f0e7d7]">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 sm:mb-24"
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-serif font-medium mb-6 text-[#5c2c1f]">
            {getFilterTitle(filter)}
          </h1>
        </motion.div>

        {/* List View */}
        <div className="flex flex-col gap-8">
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={navigateToProject}
                index={index}
              />
            ))}
          </AnimatePresence>
        </div>

        {/* Empty state */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-32"
          >
            <p className="text-2xl font-serif text-[#bd988d]">
              Aucun projet à afficher pour le moment.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
