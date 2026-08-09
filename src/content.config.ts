import { z, defineCollection } from "astro:content";
import { glob } from "astro/loaders";

const postsSchema = z.object({
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
});

export const collections = {
  posts: defineCollection({
    loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/posts" }),
    schema: postsSchema,
  }),
  english: defineCollection({
    loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/english" }),
    schema: postsSchema,
  }),
  other: defineCollection({
    loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/other" }),
    schema: postsSchema,
  }),
};