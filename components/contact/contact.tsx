"use client";

import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";
import { useServerAction } from "zsa-react";
import { sendContactMessage } from "./actions";
import { Textarea } from "../ui/textarea";
import { Label } from "@radix-ui/react-label";
import ContactImg from "@/public/contact.jpg";
import { useRef } from "react";
import { toast } from "sonner";

export default function Contact() {
  const fromRef = useRef<HTMLFormElement>(null);
  const { isPending, executeFormAction, error } = useServerAction(
    sendContactMessage,
    {
      onError: () => {
        toast.error(
          "Fehler beim Senden der Anfrage. Versuche es später erneut."
        );
      },
      onSuccess: () => {
        toast.success("Nachricht verschickt!");
        fromRef.current?.reset();
      },
    }
  );

  return (
    <div className="bg-white">
      <div id="kontakt" className="md:p-10 max-w-[1200px] mx-auto">
        <h2 className="text-xl md:text-3xl uppercase text-pink-500 text-center font-bold my-10 border-b pb-2">
          So erreichst Du mich
        </h2>

        <div className="container grid md:grid-cols-2 w-full h-full gap-4 ">
          <div className="h-[400px] md:h-full relative">
            <Image
              src={ContactImg}
              alt="Kamel"
              className="object-cover object-center rounded-lg"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className=" w-full h-full ">
            <form
              ref={fromRef}
              className="flex flex-col gap-4"
              action={executeFormAction}
            >
              <Label htmlFor="name">Name</Label>
              <Input name="name" type="text" />
              {error?.fieldErrors?.name && (
                <p className="text-red-500">{error.fieldErrors.name}</p>
              )}
              <Label htmlFor="email">Email</Label>
              {error?.fieldErrors?.email && (
                <p className="text-red-500">{error.fieldErrors.email}</p>
              )}
              <Input name="email" type="text" />
              <Label htmlFor="message">Nachricht</Label>
              {error?.fieldErrors?.message && (
                <p className="text-red-500">{error.fieldErrors.message}</p>
              )}
              <Textarea name="message" rows={10} />
              <Button className="w-full" type="submit" disabled={isPending}>
                {isPending ? "Sende..." : "Abschicken"}
              </Button>
            </form>
            <div className="text-sm mt-4">
              <p>
                Deine Angaben werden ausschließlich zur Beantwortung Deiner
                Frage genutzt. Weitere Informationen findest Du in den{" "}
                <Link
                  className="text-pink-500"
                  href="https://www.michaela-suessbauer.de/datenschutz.html"
                  target="_blank"
                >
                  Datenschutzhinweisen.
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
