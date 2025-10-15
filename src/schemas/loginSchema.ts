// Defines validation rules.
//Automatically generates a TypeScript type (SignupSchemaType) for type safety.

import { z } from "zod";

export const signInSchema = z.object({
   
    email: z
        .email("Invalid Email address")
        .transform((val) => val.trim().toLowerCase()),

    password: z.string()
        .min(8, { message: "*Password must be at least 8 characters long" })
        .max(15, { message: "*Password must not exceed 15 characters" })
        .regex(/[A-Z]/, { message: "*Must contain at least one uppercase letter" })
        .regex(/[a-z]/, { message: "*Must contain at least one lowercase letter" })
        .regex(/\d/, { message: "*Must contain at least one number" })
        .regex(/[@$!%*?&]/, { message: "*Must contain at least one special character (@, $, !, %, *, ?, &)" }),
});

export type signInSchemaType = z.infer<typeof signInSchema>;
