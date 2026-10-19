import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
const L = (d: string) => glob({ pattern: '**/*.md', base: `./src/content/${d}` });
const c = { title: z.string(), date: z.coerce.date(), tags: z.array(z.string()).default([]), draft: z.boolean().default(false), featured: z.boolean().default(false) };
export const collections = {
  writing: defineCollection({ loader: L('writing'), schema: z.object({ ...c, description: z.string().default('') }) }),
  photos: defineCollection({ loader: L('photos'), schema: z.object({ ...c, image: z.string(), alt: z.string(), caption: z.string().default('') }) }),
  videos: defineCollection({ loader: L('videos'), schema: z.object({ ...c, provider: z.enum(['youtube', 'vimeo']).default('youtube'), videoId: z.string().default(''), category: z.string().default('Video'), description: z.string().default('') }) }),
  thoughts: defineCollection({ loader: L('thoughts'), schema: z.object({ ...c, title: z.string().optional(), thread: z.string().optional(), seq: z.number().optional() }) }),
  timelines: defineCollection({ loader: L('timelines'), schema: z.object({ ...c, description: z.string().default(''),
    start: z.coerce.date(), target: z.coerce.date(), currentTarget: z.coerce.date().optional(), completed: z.coerce.date().optional(),
    status: z.enum(['in-progress', 'on-hold', 'completed']).default('in-progress'), progress: z.number().min(0).max(100).optional(),
    milestones: z.array(z.object({ title: z.string(), date: z.coerce.date() })).default([]) }) }),
};
