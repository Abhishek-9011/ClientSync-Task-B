import { z } from "zod";

export const leadSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters"),

  email: z
    .string()
    .trim()
    .min(1, "Email is required")
    .email("Please enter a valid email address"),

  budget: z
    .string()
    .min(1, "Please select a budget range"),

  message: z
    .string()
    .trim()
    .min(10, "Message must be at least 10 characters"),
});