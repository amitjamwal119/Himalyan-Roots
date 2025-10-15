// Defines validation rules.
//Automatically generates a TypeScript type (SignupSchemaType) for type safety.

import { z } from "zod";

export const contactSchema = z.object({
    name: z
        .string().min(3, { message: "*Too short" })
        .max(20, { message: "*Too long" })
        .regex(/^[a-zA-Z0-9 ]+$/, { message: "*Only letters, numbers, and spaces are allowed" }),

    email: z
        .email("Invalid Email address")
        .transform((val) => val.trim().toLowerCase()),

   subject: z
    .string()
    .min(5, { message: "*Subject must be at least 5 characters long" })
    .max(100, { message: "*Subject must not exceed 100 characters" })
    .trim(),

  message: z
    .string()
    .min(15, { message: "*Message must be at least 15 characters long" })
    .max(500, { message: "*Message must not exceed 500 characters" })
    .trim(),
});

export type ContactSchemaType = z.infer<typeof contactSchema>;
