import { z } from "zod";

export const ContactFormSchema = z.object({
  firstname: z
    .string()
    .min(2, "First name must be at least 2 charachters")
    .max(10, "First name must be at most 10 charachters"),
  lastname: z
    .string()
    .min(2, "Last name must be at least 2 charachters")
    .max(10, "Last name must be at most 10 charachters"),
  email: z.string().email(),
  message: z
    .string()
    .min(10, "Message must be at least 10 charachters")
    .max(500, "Message must be at most 500 charachters"),
});
