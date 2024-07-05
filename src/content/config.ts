import { z } from "astro/zod";
import { defineCollection } from "astro:content";

// import {z} from 'astro:content'
const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.date(),
    description: z.string(),
    image: z.string(),

    // Relacion
    author: z.string(),

    // Relacion
    tags: z.array(z.string()),
  }),
});


export const collections = {
  blog: blogCollection,
}