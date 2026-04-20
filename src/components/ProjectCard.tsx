import { forwardRef } from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ProjectCarousel } from './ProjectCarousel';
import type { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
  onClick: (id: number) => void;
  className?: string;
  index?: number;
}

export const ProjectCard = forwardRef<HTMLDivElement, ProjectCardProps>(
  ({ project, onClick, className = '', index = 0 }, ref) => {
    const isEven = index % 2 === 0;
    const hasCarousel = project.carouselImages && project.carouselImages.length > 0;
    const isAngelePardon = project.id === 7;

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className={`group cursor-pointer w-full mb-12 last:mb-0 ${className}`}
        onClick={() => onClick(project.id)}
      >
        <div className={`flex flex-col md:flex-row gap-8 md:gap-16 items-center ${!isEven ? 'md:flex-row-reverse' : ''}`}>
          {/* Image Container */}
          <div className="w-full md:w-1/2 relative">
            {hasCarousel ? (
              <ProjectCarousel
                images={project.carouselImages!}
                alt={project.title}
                videoUrl={isAngelePardon ? undefined : project.videoUrl}
                videoUrls={isAngelePardon ? undefined : project.videoUrls}
                onSlideClick={() => onClick(project.id)}
              />
            ) : (
              <div className="relative aspect-video md:aspect-[4/3] overflow-hidden bg-transparent">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            )}
          </div>

          {/* Content Container */}
          <div className={`flex-1 flex flex-col justify-center ${!isEven ? 'md:items-end' : 'md:items-start'}`}>
            <span className="text-sm font-medium tracking-widest text-[#bd988d] uppercase mb-4 text-left w-full">
              {project.category}
            </span>
            <h3 className="text-3xl md:text-4xl font-serif font-medium text-[#5c2c1f] mb-6 group-hover:text-[#702a0c] transition-colors text-left w-full">
              {project.title}
            </h3>
            <p className="text-[#8c5b45] leading-relaxed text-[15px] mb-8 max-w-lg text-left w-full">
              {project.description}
            </p>
            
            <div className="text-left w-full">
               <span className="inline-flex items-center text-sm font-medium text-[#702a0c] uppercase tracking-widest border-b border-[#702a0c]/30 pb-1 group-hover:border-[#702a0c] transition-colors">
                 Voir le projet
               </span>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }
);

ProjectCard.displayName = 'ProjectCard';