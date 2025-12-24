import { z } from "zod";

export const createNoteSchema = z.object({
  title: z.string().min(1, "Title is required"),
  content: z.string().min(1, "Content is required")
});

export const updateNoteSchema = z.object({
  title: z.string().min(1, "Title is required"),
  content: z.string().min(1, "Content is required")
});

export const noteIdParamSchema = z.object({
  id: z.string().uuid("Invalid note id")
});