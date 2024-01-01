import { Resend } from "resend";
import { BookingEmailTemplate } from "@/components/booking/email-template";
import { GeneralInquiryEmailTemplate } from "@/components/contact/email-template";

const resend = new Resend(process.env.RESEND_API_KEY);

interface BookinInquiryProps {
  name: string;
  email: string;
  paket: string;
  room: string;
}
export async function sendBookingInquiryViaMail(
  emailProps: BookinInquiryProps
) {
  const { name, email, paket, room } = emailProps;
  try {
    const { data, error } = await resend.emails.send({
      from: `Kite-Spirit-Fun Camp 2024 <${process.env.RESEND_FROM_EMAIL}>`,
      to: [process.env.RESEND_TO_EMAIL_BOOKING as string],
      subject: `Neue Buchungsanfrage von ${name}`,
      react: BookingEmailTemplate({
        name,
        email,
        paket,
        room,
      }) as React.ReactElement,
    });

    if (error) {
      console.log(error);
      return { error, status: 401 };
    }

    return { data, status: 200 };
  } catch (error) {
    return { message: "Something went wrong", error, status: 500 };
  }
}

interface GeneralInquiryProps {
  name: string;
  email: string;
  message: string;
  category: string;
}

export async function sendGeneralInquiryViaMail(
  emailProps: GeneralInquiryProps
) {
  const { name, email, message, category } = emailProps;
  console.log(emailProps);
  try {
    let recipientEmail = process.env.RESEND_TO_EMAIL_EVENT;
    if (category === "Kite allgemein") {
      recipientEmail = process.env.RESEND_TO_EMAIL_BOOKING;
    }
    const { data, error } = await resend.emails.send({
      from: `Kite-Spirit-Fun Camp 2024 <${process.env.RESEND_FROM_EMAIL}>`,
      to: [recipientEmail as string],
      subject: `Neue allgemeine Anfrage von ${name}`,
      react: GeneralInquiryEmailTemplate({
        name,
        category,
        email,
        message,
      }) as React.ReactElement,
    });
    console.log(data, error);
    if (error) {
      console.log(error);
      return { error, status: 401 };
    }

    return { data, status: 200 };
  } catch (error) {
    return { message: "Something went wrong", error, status: 500 };
  }
}
