import { z } from "zod";

export const bookSchema = z.object({
  title: z.string().min(1, "Title is required"),
  author: z.string().min(1, "Author is required"),
  category: z.string().min(1, "Category is required"),
  status: z.enum(["to-read", "reading", "completed"]),
  notes: z.string().optional(),
});

export type BookFormType = z.infer<typeof bookSchema>;
