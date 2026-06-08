import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const writing = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/writing' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Two top-level halves of the portfolio
    section: z.enum(['professional', 'creative']),
    // Human-readable sub-label (e.g. "SEO & Commercial", "Fantasy Romance")
    category: z.string(),
    byline: z.string().default('Kay Smith'),
    excerpt: z.string(),
    featured: z.boolean().default(false),
    order: z.number().default(99),
  }),
});

export const collections = { writing };
