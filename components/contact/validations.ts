import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Bitte gib deinen Namen an" }),

  email: z
    .string()
    .email({ message: "Bitte gib eine gültige Email-Adresse an" }),

  message: z.string().min(10, {
    message: "Bitte gib eine Nachricht mit mindestens 10 Zeichen an",
  }),
});
