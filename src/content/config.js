import {defineCollection, z} from "astro:content";

const postCollection = defineCollection({
  type: "content",
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
