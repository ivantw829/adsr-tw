import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const papers = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/papers' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    category: z.string(),
    thumbnail: z.string().url().optional(),
    author: z.string().default('捍衛全台學權行動 ADSR'),
  }),
});

export const collections = { papers };
