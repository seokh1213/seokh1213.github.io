import {defineCollection, z} from "astro:content";
import {glob} from "astro/loaders";


const postCollection = defineCollection({
  loader: glob({pattern: '**/*.md', base: './src/content/post'}),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    dateFormatted: z.string(),
    published: z.boolean(),
    tags: z.array(z.string()).optional().default([]),
    category: z.string().optional().default("tech"),
  }),
});

export const collections = {
  post: postCollection,
};
