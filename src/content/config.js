import {defineCollection, z} from "astro:content";
import {glob} from "astro/loaders";

const postCollection = defineCollection({
  loader: glob({pattern: "**/*.md", base: "./src/content/post"}),
  schema: z.object({
    title: z.string(),
    createdAt: z.number(),
    updatedAt: z.number(),
    published: z.boolean().default(false),
    tags: z.array(z.string()).optional().default([]),
  }),
});

export const collections = {
  post: postCollection,
};
