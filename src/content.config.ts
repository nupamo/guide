import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const docs = defineCollection({
  // Entry id: `<locale>/<guide>/<page>`, e.g. `en/photogallery/installation`.
  loader: glob({ pattern: '*/*/*.md', base: './src/content/docs', generateId: ({ entry }) => entry.replace(/\.md$/, '') }),
  schema: z.object({ title: z.string(), description: z.string().optional() }),
});

export const collections = { docs };
