"use server";

import z from "zod";
import { createServerAction } from "zsa";

import { contactFormSchema } from "./validations";
import ContactFormEmailTemplate from "./email-template";
import { resend } from "@/lib/resend";
export const sendContactMessage = createServerAction()
  .input(contactFormSchema, {
    type: "formData",
  })
  .handler(async ({ input }) => {
    console.log("input", input);
    try {
      await resend.emails.send({
        from: process.env.RESEND_FROM_EMAIL as string,
        to: process.env.RESEND_TO_EMAIL_EVENT as string,
        subject: "Kite Spirit Fun Camp 2025: Anfrage über das Kontaktformular",
        react: ContactFormEmailTemplate({
          name: input.name,
          email: input.email,
          message: input.message,
        }),
      });
      console.log("Email sent");
    } catch (error) {
      console.error("Error sending email", error);
      throw new Error("Error sending email");
    }
    return input;
  });
