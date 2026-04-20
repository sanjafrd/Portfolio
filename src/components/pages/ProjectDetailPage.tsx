import { motion } from 'motion/react';
import { ComponentType, useEffect, useState, useRef, useCallback } from 'react';
import { ArrowLeft } from 'lucide-react';
import { projects } from '../../data/projects';
import type { PageType } from '../../types';
import { scrollToTop } from '../../utils/helpers';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { ProjectCarousel } from '../ProjectCarousel';
import { ImageSwitcher } from '../ImageSwitcher';
import { YouTubeVideoPlayer } from '../YouTubeVideoPlayer';
import { StoryboardGallery } from '../StoryboardGallery';
import { AngelePardonSections } from '../AngelePardonSections';
import { PantoufleSections } from '../PantoufleSections';
import { MielsSections } from '../MielsSections';
import { MauvaisElevesSections } from '../MauvaisElevesSections';
import { LGMSections } from '../LGMSections';
import { LiloStitchSections } from '../LiloStitchSections';
import { ClementineSections } from '../ClementineSections';
import { AristochatsSections } from '../AristochatsSections';
import { NaluSections } from '../NaluSections';
import { AirAustralSections } from '../AirAustralSections';
import { EDNSections } from '../EDNSections';
import { BenettonSections } from '../BenettonSections';
import { StoryboardSections } from '../StoryboardSections';
import { BrochureSections } from '../BrochureSections';
import { CEMSections } from '../CEMSections';
import { KakemonoSections } from '../KakemonoSections';
import { SecuritePatientSections } from '../SecuritePatientSections';
import { OraliteSections } from '../OraliteSections';
import { HygieneSections } from '../HygieneSections';
import { ManuelVisibiliteSections } from '../ManuelVisibiliteSections';
import { TaxeApprentissageSections } from '../TaxeApprentissageSections';
import { PosteReseauxSections } from '../PosteReseauxSections';
import { VaccinationSections } from '../VaccinationSections';
import { BientraitanceSections } from '../BientraitanceSections';
import { FormattedText } from '../FormattedText';

// ─── Project sections mapping ────────────────────────────────────────────────
const SECTIONS_MAP: Record<number, ComponentType> = {
  7: AngelePardonSections,
  8: PantoufleSections,
  9: MielsSections,
  10: MauvaisElevesSections,
  11: LGMSections,
  12: LiloStitchSections,
  13: ClementineSections,
  14: AristochatsSections,
  15: NaluSections,
  16: AirAustralSections,
  17: EDNSections,
  18: BenettonSections,
  19: StoryboardSections,
  20: SecuritePatientSections,
  21: BientraitanceSections,
  22: BrochureSections,
  23: HygieneSections,
  24: TaxeApprentissageSections,
  25: VaccinationSections,
  26: OraliteSections,
  27: PosteReseauxSections,
  29: CEMSections,
  30: KakemonoSections,
  31: ManuelVisibiliteSections,
};

// ─── Banner hero config: projects that show a single banner image from carousel ─
interface BannerConfig {
  objectPosition: string; // 'object-top' | 'object-center' | 'object-cover'
}

const BANNER_PROJECTS: Record<number, BannerConfig> = {
  7:  { objectPosition: 'object-cover' },      // Angèle & Pardon
  8:  { objectPosition: 'object-cover object-top' },  // Pantoufle
  9:  { objectPosition: 'object-cover object-top' },  // Miels
  10: { objectPosition: 'object-cover object-top' },  // Mauvais Élèves
  11: { objectPosition: 'object-cover object-center' }, // LGM
  12: { objectPosition: 'object-cover object-top' },  // Lilo & Stitch
  13: { objectPosition: 'object-cover object-top' },  // Clémentine
  14: { objectPosition: 'object-cover object-top' },  // Aristochats
  15: { objectPosition: 'object-cover object-top' },  // Nalu
  16: { objectPosition: 'object-cover object-top' },  // Air Austral
  17: { objectPosition: 'object-cover object-top' },  // EDN
  18: { objectPosition: 'object-cover object-top' },  // Benetton
  19: { objectPosition: 'object-cover object-top' },  // Storyboard
  30: { objectPosition: 'object-cover' },      // Kakemono (uses project.image)
};

// ─── Gallery config: projects that show a gallery at the bottom ───────────────
interface GalleryConfig {
  /** Source of images: 'carousel' uses carouselImages, 'detail' uses detailImages */
  source: 'carousel' | 'detail';
  /** Whether to skip the first image (already shown in banner) */
  skipFirst?: boolean;
  /** Grid columns: default '2 md:3' */
  gridCols?: string;
  /** Image aspect: 'aspect-square' or 'auto' (h-auto object-contain) */
  imageAspect?: 'square' | 'auto';
  /** Extra background on grid items */
  itemBg?: string;
  /** Show YouTube video(s) after the grid */
  showVideo?: boolean;
  /** Show multiple videos side by side */
  showVideoUrls?: boolean;
}

const GALLERY_PROJECTS: Record<number, GalleryConfig> = {
  7:  { source: 'carousel', skipFirst: true, imageAspect: 'square', showVideo: true },
  8:  { source: 'detail', gridCols: 'grid-cols-1 md:grid-cols-2', imageAspect: 'auto', showVideo: true },
  9:  { source: 'carousel', imageAspect: 'square', showVideo: true },
  10: { source: 'detail', imageAspect: 'auto', itemBg: 'bg-white', showVideoUrls: true },
  11: { source: 'carousel', skipFirst: true, imageAspect: 'square', showVideo: true },
  12: { source: 'detail', imageAspect: 'auto', itemBg: 'bg-white' },
  13: { source: 'carousel', skipFirst: true, imageAspect: 'square' },
  14: { source: 'detail', imageAspect: 'square' },
  15: { source: 'detail', gridCols: 'grid-cols-1 md:grid-cols-2', imageAspect: 'auto' }, // Nalu
  16: { source: 'detail', gridCols: 'grid-cols-1 md:grid-cols-2', imageAspect: 'auto' }, // Air Austral
  17: { source: 'carousel', skipFirst: true, imageAspect: 'square', showVideo: true }, // EDN
  18: { source: 'carousel', skipFirst: true, imageAspect: 'square', showVideo: true }, // Benetton
  19: { source: 'carousel', skipFirst: true, imageAspect: 'square' }, // Storyboard
  21: { source: 'carousel', skipFirst: true, imageAspect: 'square' }, // Bientraitance
  30: { source: 'detail', gridCols: 'grid-cols-1 md:grid-cols-2', imageAspect: 'auto' },
};

// ─── Component ───────────────────────────────────────────────────────────────

interface ProjectDetailPageProps {
  projectId: number;
  setCurrentPage: (page: PageType) => void;
}

export function ProjectDetailPage({ projectId, setCurrentPage }: ProjectDetailPageProps) {
  const project = projects.find(p => p.id === projectId);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const [imageHeight, setImageHeight] = useState<number | null>(null);

  const updateHeight = useCallback(() => {
    if (imageContainerRef.current) {
      setImageHeight(imageContainerRef.current.offsetHeight);
    }
  }, []);

  useEffect(() => {
    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, [updateHeight]);

  if (!project) {
    return null;
  }

  const handleBack = () => {
    setCurrentPage('realisations');
    scrollToTop();
  };

  const isCEMProject = project.id === 29;
  const isEDNProject = project.id === 17;
  const isBenettonProject = project.id === 18;
  const isStoryboardProject = project.id === 19;
  const isKakemonoProject = project.id === 30;
  const isPantoufleProject = project.id === 8;

  const bannerConfig = BANNER_PROJECTS[project.id];
  const isBannerProject = !!bannerConfig;
  const galleryConfig = GALLERY_PROJECTS[project.id];
  const hasGallery = !!galleryConfig;

  const hasDetailImages = project.detailImages && project.detailImages.length > 1
    && !isBannerProject;
  const hasSplitImages = project.detailImagesTop && project.detailImagesBottom && !isKakemonoProject;
  const hasSingleDetailImage = project.detailImages && project.detailImages.length === 1;
  const hasDetailRightImage = !!project.detailRightImage;
  const hasSideBySideLayout = (hasDetailImages && !isBenettonProject) || (hasSingleDetailImage && hasDetailRightImage);

  const renderSection = (title: string, content: string | undefined, delay: number) => {
    if (!content) return null;
    
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay }}
        className="mb-16"
      >
        <h2 className="text-3xl md:text-4xl mb-8 text-[#5c2c1f] font-serif font-bold border-b-2 border-[#702a0c]/30 pb-4 inline-block pr-12">
          {title}
        </h2>
        <FormattedText content={content} />
      </motion.div>
    );
  };

  // ─── Render banner hero ──────────────────────────────────────────────────
  const renderBannerHero = () => {
    if (!bannerConfig) return null;
    const imageSrc = isKakemonoProject
      ? project.image
      : project.carouselImages?.[0];
    if (!imageSrc) return null;

    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full rounded-3xl overflow-hidden shadow-2xl mb-24 ring-1 ring-[#5c2c1f]/10 aspect-video md:aspect-[21/9]"
      >
        <img
          src={imageSrc}
          alt={project.title}
          className={`w-full h-full ${bannerConfig.objectPosition}`}
        />
      </motion.div>
    );
  };

  // ─── Render gallery ─────────────────────────────────────────────────────
  const renderGallery = () => {
    if (!galleryConfig) return null;

    // Kakemono uses split ImageSwitchers instead of grid
    if (isKakemonoProject && project.detailImagesTop && project.detailImagesBottom) {
      return (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-24 max-w-5xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl mb-12 text-[#5c2c1f] font-serif font-bold border-b-2 border-[#702a0c]/30 pb-4 inline-block pr-12">
            Galerie
          </h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full"
          >
            <div className="flex flex-col md:flex-row gap-4">
              <div className="w-full md:w-1/2">
                <ImageSwitcher
                  images={project.detailImagesTop}
                  alt={`${project.title} - Groupe 1`}
                />
              </div>
              <div className="w-full md:w-1/2">
                <ImageSwitcher
                  images={project.detailImagesBottom}
                  alt={`${project.title} - Groupe 2`}
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      );
    }

    const rawImages = galleryConfig.source === 'carousel'
      ? project.carouselImages
      : project.detailImages;
    if (!rawImages || rawImages.length === 0) return null;

    const images = galleryConfig.skipFirst ? rawImages.slice(1) : rawImages;
    if (images.length === 0) return null;

    const gridCols = galleryConfig.gridCols ?? 'grid-cols-2 md:grid-cols-3';
    const itemClasses = `rounded-2xl overflow-hidden ring-1 ring-[#5c2c1f]/10 shadow-lg ${galleryConfig.itemBg ?? ''}`;
    const imgClasses = galleryConfig.imageAspect === 'auto'
      ? 'w-full h-auto object-contain'
      : 'w-full h-full object-cover aspect-square';

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-24 max-w-5xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl mb-12 text-[#5c2c1f] font-serif font-bold border-b-2 border-[#702a0c]/30 pb-4 inline-block pr-12">
          Galerie
        </h2>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full"
        >
          <div className={`grid ${gridCols} gap-4 ${(galleryConfig.showVideo || galleryConfig.showVideoUrls) ? 'mb-8' : ''}`}>
            {images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className={itemClasses}
              >
                <img
                  src={image}
                  alt={`${project.title} - Image ${index + 1}`}
                  className={imgClasses}
                />
              </motion.div>
            ))}
          </div>

          {/* Single YouTube video */}
          {galleryConfig.showVideo && project.videoUrl && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="w-full rounded-2xl overflow-hidden ring-1 ring-[#5c2c1f]/10 shadow-lg"
            >
              <div className="relative w-full aspect-video">
                <YouTubeVideoPlayer
                  url={project.videoUrl}
                  title={project.title}
                  className="absolute top-0 left-0 w-full h-full"
                />
              </div>
            </motion.div>
          )}

          {/* Multiple YouTube videos side by side */}
          {galleryConfig.showVideoUrls && project.videoUrls && project.videoUrls.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.videoUrls.map((videoUrl, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  className="w-full rounded-2xl overflow-hidden ring-1 ring-[#5c2c1f]/10 shadow-lg"
                >
                  <div className="relative w-full aspect-video">
                    <YouTubeVideoPlayer
                      url={videoUrl}
                      title={`${project.title} - Vidéo ${index + 1}`}
                      className="absolute top-0 left-0 w-full h-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </motion.div>
    );
  };

  // ─── Render project sections component ─────────────────────────────────
  const renderProjectSections = () => {
    const SectionsComponent = SECTIONS_MAP[project.id];
    if (SectionsComponent) {
      return <SectionsComponent />;
    }
    // Fallback: render detail fields
    return (
      <>
        {renderSection('Publics visés', project.details?.target, 0.35)}
        {renderSection('Veille', project.details?.watch, 0.4)}
        {renderSection('Stratégie', project.details?.strategy, 0.5)}
        {renderSection('Création', project.details?.creation, 0.6)}
        {renderSection('Diffusion', project.details?.diffusion, 0.7)}
        {renderSection('Analyse', project.details?.analysis, 0.8)}
      </>
    );
  };

  // ─── Render hero media (complex conditional logic) ─────────────────────
  const renderHeroMedia = () => {
    // Banner projects (single image banner)
    if (isBannerProject && project.carouselImages && project.carouselImages.length > 0) {
      return renderBannerHero();
    }
    // Kakemono uses project.image as banner
    if (isKakemonoProject) {
      return renderBannerHero();
    }

    // Storyboard special layout
    if (isStoryboardProject && project.carouselImages && project.carouselImages.length >= 12) {
      return (
        <StoryboardGallery
          staticImage={project.carouselImages[0]}
          slidingImages={project.carouselImages.slice(1)}
          alt={project.title}
        />
      );
    }

    // Benetton: stacked ImageSwitchers + YouTube video
    if (isBenettonProject && project.videoUrl && project.detailImages) {
      return (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl mx-auto mb-24"
        >
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="w-full md:w-[55%]" ref={imageContainerRef}>
              <div className="flex flex-col gap-3">
                <ImageSwitcher
                  images={project.detailImages.slice(0, 3)}
                  alt={`${project.title} - Haut`}
                  onImageLoad={updateHeight}
                />
                <ImageSwitcher
                  images={project.detailImages.slice(3, 7)}
                  alt={`${project.title} - Bas`}
                  onImageLoad={updateHeight}
                />
              </div>
            </div>
            <div className="w-full md:w-[45%]" style={imageHeight ? { height: imageHeight } : undefined}>
              <div className="relative w-full h-full">
                <YouTubeVideoPlayer
                  url={project.videoUrl}
                  title={project.title}
                  className="absolute top-0 left-0 w-full h-full"
                />
              </div>
            </div>
          </div>
        </motion.div>
      );
    }

    // Split images (two ImageSwitchers side by side)
    if (hasSplitImages) {
      return (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-5xl mx-auto mb-24"
        >
          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-full md:w-1/2">
              <ImageSwitcher
                images={project.detailImagesTop!}
                alt={`${project.title} - Groupe 1`}
              />
            </div>
            <div className="w-full md:w-1/2">
              <ImageSwitcher
                images={project.detailImagesBottom!}
                alt={`${project.title} - Groupe 2`}
              />
            </div>
          </div>
        </motion.div>
      );
    }

    // Side-by-side layout (ImageSwitcher + video or right image)
    if (hasSideBySideLayout) {
      return (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col md:flex-row gap-8 items-start mb-24"
        >
          <div className={`w-full ${hasDetailRightImage ? 'md:w-[55%]' : 'md:w-1/2'}`} ref={imageContainerRef}>
            <ImageSwitcher
              images={project.detailImages!}
              alt={project.title}
              onImageLoad={updateHeight}
            />
          </div>

          {(project.videoUrls && project.videoUrls.length > 0) ? (
            <div className="w-full md:w-1/2 flex flex-col gap-4" style={imageHeight ? { height: imageHeight } : undefined}>
              {project.videoUrls.map((url, index) => {
                const isYouTube = url.includes('youtube.com/embed/');
                return (
                  <div key={index} className="relative w-full bg-transparent" style={{ flex: 1 }}>
                    {isYouTube ? (
                      <YouTubeVideoPlayer
                        url={url}
                        title={`${project.title} - Vidéo ${index + 1}`}
                        className="absolute top-0 left-0 w-full h-full"
                      />
                    ) : (
                      <iframe
                        src={url}
                        className="absolute top-0 left-0 w-full h-full bg-transparent"
                        allow="autoplay; fullscreen"
                        allowFullScreen
                        title={`${project.title} - Vidéo ${index + 1}`}
                        style={{ border: 'none', background: 'transparent' }}
                      />
                    )}
                  </div>
                );
              })}
            </div>
          ) : project.videoUrl ? (
            <div className="w-full md:w-1/2" style={imageHeight ? { height: imageHeight } : undefined}>
              <div className="relative w-full h-full">
                <iframe
                  src={project.videoUrl}
                  className="absolute top-0 left-0 w-full h-full"
                  allow="autoplay; fullscreen"
                  allowFullScreen
                  title={project.title}
                  style={{ border: 'none' }}
                />
              </div>
            </div>
          ) : project.detailRightImage ? (
            <div
              className="w-full md:w-[45%] overflow-y-auto rounded-2xl scrollbar-thin scrollbar-thumb-[#5c2c1f]/20 scrollbar-track-transparent"
              style={imageHeight ? { maxHeight: imageHeight } : { maxHeight: '80vh' }}
            >
              <img
                src={project.detailRightImage}
                alt={`${project.title} - Détail`}
                className="w-full object-cover rounded-2xl"
              />
            </div>
          ) : null}
        </motion.div>
      );
    }

    // Single detail image
    if (hasSingleDetailImage) {
      return (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center mb-24"
        >
          <img
            src={project.detailImages![0]}
            alt={project.title}
            className="max-w-full max-h-[80vh] object-contain rounded-3xl shadow-2xl ring-1 ring-[#5c2c1f]/10"
          />
        </motion.div>
      );
    }

    // Default: video or carousel or static image
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full rounded-3xl overflow-hidden shadow-2xl mb-24 bg-[#5c2c1f]/5 ring-1 ring-[#5c2c1f]/10"
      >
        {project.videoUrl && isCEMProject ? (
          <div className="relative w-full aspect-video">
            <iframe
              src={project.videoUrl}
              className="absolute top-0 left-0 w-full h-full"
              allow="autoplay; fullscreen"
              title={project.title}
              style={{ border: 'none' }}
            />
          </div>
        ) : project.carouselImages && project.carouselImages.length > 0 ? (
          <ProjectCarousel
            images={project.carouselImages}
            alt={project.title}
            videoUrl={!isCEMProject && !isEDNProject ? project.videoUrl : undefined}
            videoUrls={!isCEMProject && !isEDNProject ? project.videoUrls : undefined}
            aspectRatio="aspect-video md:aspect-[21/9]"
          />
        ) : (
          <div className="relative w-full aspect-video md:aspect-[21/9]">
            <ImageWithFallback
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}
      </motion.div>
    );
  };

  return (
    <section className="min-h-screen px-4 md:px-8 py-32 bg-gradient-to-br from-[#f0e7d7] via-[#f9e0da]/30 to-[#f0e7d7]">
      <div className={`${hasDetailRightImage ? 'max-w-7xl' : 'max-w-5xl'} mx-auto`}>
        {/* Back button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          onClick={handleBack}
          className="group flex items-center gap-3 text-[#8c5b45] hover:text-[#5c2c1f] transition-colors mb-12"
        >
          <div className="p-2 rounded-full bg-[#5c2c1f]/5 group-hover:bg-[#5c2c1f]/10 transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </div>
          <span className="text-sm uppercase tracking-widest font-medium">Retour aux réalisations</span>
        </motion.button>

        {/* Project header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-[#702a0c]/20 text-xs font-medium tracking-widest text-[#8c5b45] uppercase mb-6 bg-[#702a0c]/5 backdrop-blur-sm">
            {project.category}
          </span>
          <h1 className="text-5xl md:text-7xl font-serif text-[#5c2c1f] mb-6 leading-tight">
            {project.title}
          </h1>
          {project.subtitle && (
            <p className={`text-xl md:text-2xl text-[#8c5b45] font-light italic ${isPantoufleProject ? 'text-left' : ''}`}>
              {project.subtitle}
            </p>
          )}
        </motion.div>

        {/* Hero Media */}
        {renderHeroMedia()}

        {/* Project sections */}
        <div className="space-y-4 max-w-4xl mx-auto">
          {renderSection('Contexte', project.details?.context, 0.3)}
          {renderProjectSections()}
        </div>

        {/* Gallery */}
        {hasGallery && renderGallery()}

        {/* Footer Navigation */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-32 pt-16 border-t border-[#5c2c1f]/10 flex justify-center"
        >
          <button
            onClick={handleBack}
            className="group px-10 py-4 bg-[#702a0c] text-[#f0e7d7] font-medium rounded-full shadow-lg hover:shadow-[#702a0c]/20 hover:scale-105 hover:bg-[#5c2c1f] transition-all duration-300 flex items-center gap-3"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Voir les autres projets
          </button>
        </motion.div>
      </div>
    </section>
  );
}