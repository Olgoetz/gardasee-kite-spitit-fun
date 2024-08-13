"use server";

import z from "zod";
import { createServerAction } from "zsa";

import { bookingFormSchema } from "./validations";
import { resend } from "@/lib/resend";
import { BookingEmailTemplate } from "./email-template";
export const sendBookingInquiry = createServerAction()
  .input(bookingFormSchema, {
    type: "formData",
  })
  .onStart((input) => {
    console.log("onStart");
    console.log(input);
  })
  .onSuccess((input) => {
    console.log("onSuccess");
    console.log(input);
  })

  .handler(async ({ input }) => {
    console.log("input", input);
    try {
      await resend.emails.send({
        from: process.env.RESEND_FROM_EMAIL as string,
        to: [process.env.RESEND_TO_EMAIL_BOOKING as string],
        cc: process.env.RESEND_TO_EMAIL_EVENT as string,
        subject: "Kite Spirit Fun Camp 2025: Neue Buchungsanfrage",
        react: BookingEmailTemplate({
          name: input.name,
          email: input.email,
          numberOfPersons: input.numberOfPersons,
          packageName: input.packageName,
          wantKite: input.wantKite,
          kiteLevel: input.kiteLevel,
        }),
      });
      console.log("Email sent");
    } catch (error) {
      console.error("Error sending email", error);
      throw new Error("Error sending email");
    }
    return input;
  });
