import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Transform string to Date object
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    
    featured: z.boolean().optional(),
    publisherImage: z.string(),
    publisherName: z.string(),
    publisherBio: z.string(),
  }),
});

export const collections = { blog };
