import { BlogPostArraySchema } from "../types/types";

export default async function getBlogs() {
    const URL = 'https://jsonplaceholder.typicode.com/posts';
    const response = await fetch(URL);
  
    if (!response.ok) {
      throw new Error('Failed to fetch blog posts');
    }
  
    const rawData = await response.json();
  
    // Runtime validation here
    const posts = BlogPostArraySchema.parse(rawData);

  
    return posts;
  }