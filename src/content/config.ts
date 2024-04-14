import { z, defineCollection } from "astro:content";

const postsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    pubDate: z.date().optional(),
    description: z.string().optional(),
    author: z.string().optional(),
    image: z.object({
      url: z.string(),
      alt: z.string(),
    }).optional(),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().optional(),
  })
});

export const collections = {
  posts: postsCollection,
  english: postsCollection,
  other: postsCollection
};