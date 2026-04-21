import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      subtitle: z.string().optional(),
      category: z.string(),
      type: z.enum(['entreprise', 'ecole']),
      order: z.number(),
      size: z.enum(['small', 'medium', 'large']),
      featured: z.boolean().default(false),
      cover: image(),
      description: z.string().optional(),

      carouselImages: z.array(image()).optional(),
      videoUrl: z.string().optional(),
      videoUrls: z.array(z.string()).optional(),
      detailImages: z.array(image()).optional(),
      detailImagesTop: z.array(image()).optional(),
      detailImagesBottom: z.array(image()).optional(),
      detailRightImage: image().optional(),

      banner: z
        .object({
          objectPosition: z.string(),
        })
        .optional(),
      gallery: z
        .object({
          source: z.enum(['carousel', 'detail']),
          skipFirst: z.boolean().optional(),
          gridCols: z.string().optional(),
          imageAspect: z.enum(['square', 'auto']).optional(),
          itemBg: z.string().optional(),
          showVideo: z.boolean().optional(),
          showVideoUrls: z.boolean().optional(),
        })
        .optional(),
      specialLayout: z.enum(['benetton', 'storyboard', 'kakemono', 'cem']).optional(),

      details: z
        .object({
          context: z.string().optional(),
          target: z.string().optional(),
          watch: z.string().optional(),
          strategy: z.string().optional(),
          creation: z.string().optional(),
          diffusion: z.string().optional(),
          analysis: z.string().optional(),
        })
        .optional(),
      targetTabs: z
        .array(
          z.object({
            id: z.string(),
            label: z.string(),
            content: z.string(),
          }),
        )
        .optional(),
      objectives: z
        .array(
          z.object({
            title: z.string(),
            items: z.array(z.string()),
          }),
        )
        .optional(),
      simpleObjectives: z
        .object({
          intro: z.string().optional(),
          items: z.array(z.string()),
        })
        .optional(),
    }),
});

export const collections = { projects };
