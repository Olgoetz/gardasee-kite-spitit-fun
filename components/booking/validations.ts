import { z } from "zod";

export const bookingFormSchema = z
  .object({
    packageName: z.string(),
    name: z.string().min(2, { message: "Bitte gib deinen Namen an" }),

    email: z
      .string()
      .email({ message: "Bitte gib eine gültige Email-Adresse an" }),

    numberOfPersons: z.coerce.number().default(1),
    wantKite: z.string().optional(),
    kiteLevel: z.coerce.string().optional(),
  })
  .refine(
    (data) => {
      if (data.wantKite) {
        return (
          typeof data.kiteLevel === "string" && data.kiteLevel.trim() !== ""
        );
      }
      return true;
    },
    {
      message: "Bitte gib dein Kite-Level an",
      path: ["kiteLevel"],
    }
  );

// Extract the TypeScript type from the schema
export type BookingFormData = z.infer<typeof bookingFormSchema>;
