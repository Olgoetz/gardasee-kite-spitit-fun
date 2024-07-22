"use server";

import z from "zod";
import { createServerAction } from "zsa";

import { contactFormSchema } from "./validations";
export const produceNewMessage = createServerAction()
  .input(contactFormSchema, {
    type: "formData",
  })
  .handler(async ({ input }) => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return input;
  });
