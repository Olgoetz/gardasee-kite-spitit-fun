import * as React from "react";

import { Html, Body, Container, Tailwind } from "@react-email/components";
import { BookingFormData } from "./validations";

export const BookingEmailTemplate: React.FC<Readonly<BookingFormData>> = ({
  name,
  email,
  packageName: paket,
  numberOfPersons,
  wantKite,
  kiteLevel,
}) => {
  return (
    <Html>
      <Tailwind>
        <Body className="bg-wite my-auto mx-auto">
          <Container className="font-sans border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] w-[650px]">
            <h1 className="text-2xl">Neue Buchungsanfrage von {name}</h1>
            <div className="mt-8 space-y-4">
              <p className="">Name : {name} </p>
              <p className="">Email-Adresse: {email} </p>
              <p className="">Paket : {paket} </p>
              <p className="">Anzahl Personen : {numberOfPersons} </p>
              {wantKite ? (
                <>
                  <p>Kitesurfen: ja</p>
                  <p>Level: {kiteLevel}</p>
                </>
              ) : (
                <p>Kitesurfen: nein</p>
              )}
            </div>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};
