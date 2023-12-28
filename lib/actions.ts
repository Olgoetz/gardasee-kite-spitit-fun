"use server";

import { z } from "zod";
import { sendBookingInquiryViaMail, sendGeneralInquiryViaMail } from "./email";
export type BookingState = {
  errors?: {
    name?: string[];
    email?: string[];
    paket?: string[];
    room?: string[];
  };
  message?: string | null;
};

const BookingFormSchema = z.object({
  name: z.string().min(1, { message: "Bitte gib deinen Namen an." }),
  email: z
    .string()
    .email({ message: "Bitte gib eine gültige Email Adresse an." }),
  paket: z.string().min(1),
  room: z.string().min(1, { message: "Bitte Zimmerwunsch äußern." }),
});

const SendBookingInquiry = BookingFormSchema;

export async function sendBookingInquiry(
  prevState: BookingState,
  formData: FormData
) {
  const validatedFields = SendBookingInquiry.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    paket: formData.get("paket"),
    room: formData.get("room"),
  });

  if (!validatedFields.success) {
    console.log(
      "[/lib/actions/sendBookingInquiry] fields error:",
      validatedFields.error.flatten().fieldErrors
    );
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Es fehlen Angaben. Buchungsanfrage nicht verschickt.",
    };
  }
  console.log(
    "[/lib/actions/sendBookingInquiry] fields data:",
    validatedFields.data
  );

  await sendBookingInquiryViaMail(validatedFields.data);
  return {
    success: true,
    message: "Anfrage erfolgreich verschickt",
  };
}

export type GeneralState = {
  errors?: {
    name?: string[];
    email?: string[];
    message?: string[];
  };
  message?: string | null;
};

const GeneralFormSchema = z.object({
  name: z.string().min(1, { message: "Bitte gib deinen Namen an." }),
  email: z
    .string()
    .email({ message: "Bitte gib eine gültige Email-Adresse an." }),
  message: z.string().min(1, { message: "Nachricht darf nicht leer sein." }),
});

const GeneralInquiry = GeneralFormSchema;

export async function sendGeneralInquiry(
  prevState: GeneralState,
  formData: FormData
) {
  const validatedFields = GeneralInquiry.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    console.log(
      "[/lib/actions/sendGeneralInquiry] fields error:",
      validatedFields.error.flatten().fieldErrors
    );
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Es fehlen Angaben. Buchungsanfrage nicht verschickt.",
    };
  }
  console.log(
    "[/lib/actions/sendGeneralInquiry] fields data:",
    validatedFields.data
  );

  await sendGeneralInquiryViaMail(validatedFields.data);
  return {
    success: true,
    message: "Anfrage erfolgreich verschickt",
  };
}
