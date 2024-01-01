import * as React from "react";

import { Html, Body, Container, Tailwind } from "@react-email/components";

interface EmailTemplateProps {
  name: string;
  category: string;
  email: string;
  message: string;
}

export const GeneralInquiryEmailTemplate: React.FC<
  Readonly<EmailTemplateProps>
> = ({ name, category, email, message }) => {
  return (
    <Html>
      <Tailwind>
        <Body className="bg-wite my-auto mx-auto">
          <Container className="font-sans border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] w-[650px]">
            <h1 className="text-2xl">Neue Anfrage von {name}</h1>
            <div className="mt-8 space-y-4">
              <p className="">Name : {name} </p>
              <p className="">Kategorie : {category} </p>
              <p className="">Email-Adresse: {email} </p>
              <p className="">Nachricht : {message} </p>
            </div>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};
