"use server";

import z from "zod";
import { createServerAction } from "zsa";

import { bookingFormSchema } from "./validations";
export const sendBookingInquiry = createServerAction()
  .input(bookingFormSchema, {
    type: "formData",
  })
  .handler(async ({ input }) => {
    console.log("input", input);
    await new Promise((resolve) => setTimeout(resolve, 500));
    return input;
  });
