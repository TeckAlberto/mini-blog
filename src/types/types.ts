import { z } from "zod";

const BlogPostSchema = z.object({
    userId: z.number(),
    id: z.number(),
    title: z.string(),
    body: z.string(),
  });

export const BlogPostArraySchema = z.array(BlogPostSchema);

export type BlogPost = z.infer<typeof BlogPostSchema>;