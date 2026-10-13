import { z } from "zod";

export const reviewSchema = z.object({
  rating: z.number().int().min(1).max(5),
  body: z.string().min(20, "Review must be at least 20 characters").max(500),
  authorName: z.string().min(2, "Name is required"),
});

export type ReviewFormData = z.infer<typeof reviewSchema>;
