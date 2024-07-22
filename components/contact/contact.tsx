"use client";

import { useFormState, useFormStatus } from "react-dom";
import Link from "next/link";
import Image from "next/image";

import BeatLoader from "react-spinners/BeatLoader";
import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "../ui/textarea";
import { sendGeneralInquiry } from "@/lib/actions";
import { useToast } from "../ui/use-toast";
import { useEffect, useRef } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

function Submit() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" className=" bg-pink-500">
      {pending ? <BeatLoader color="white" /> : "Abschicken"}
    </Button>
  );
}

export default function Contact() {
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement | null>(null);
  const initialState = { message: "", errors: {} };
  const [state, dispatch] = useFormState(sendGeneralInquiry, initialState);
  useEffect(() => {
    if (state.success) {
      if (formRef.current) {
        formRef.current.reset();
      }
      toast({
        description: state.message,
      });
    }
  }, [state]);
  return (
    <div className="bg-white">
      <div id="anfrage" className="md:p-10 max-w-[1200px] mx-auto">
        <h2 className="text-xl md:text-3xl uppercase text-pink-500 text-center font-bold my-10 border-b pb-2">
          So erreichst Du mich
        </h2>

        <div className="grid md:grid-cols-2 w-full h-full gap-4">
          <div className="h-[400px] md:h-full relative">
            <Image
              src="/gardasee_action.jpg"
              alt="Kitesurfen Gardasee"
              className="object-cover object-center rounded-lg"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="container w-full mt-10">
            <form
              ref={formRef}
              action={dispatch}
              className="grid grid-cols-1 md:grid-cols-2 gap-3 "
            >
              <div className="flex flex-col justify-start space-y-3">
                <Label htmlFor="name">Name</Label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="dein Name"
                />
                {state.errors?.name &&
                  state.errors.name.map((error: string) => (
                    <p className="mt-2 text-sm text-red-500" key={error}>
                      {error}
                    </p>
                  ))}
              </div>
              <div className="flex flex-col justify-start  space-y-3">
                <Label htmlFor="email">Email-Adresse</Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="deine Email-Adresse"
                />
                {state.errors?.email &&
                  state.errors.email.map((error: string) => (
                    <p className="mt-2 text-sm text-red-500" key={error}>
                      {error}
                    </p>
                  ))}
              </div>
              <div className="space-y-3">
                <Label htmlFor="message">Kategorie</Label>
                <Select name="category">
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Kategorie wählen" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Kategorie</SelectLabel>
                      <SelectItem value="Kite allgemein">
                        Kite allgemein
                      </SelectItem>
                      <SelectItem value="Event allgemein">
                        Event allgemein
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                {state.errors?.category &&
                  state.errors.category.map((error: string) => (
                    <p className="text-sm text-red-500" key={error}>
                      {error}
                    </p>
                  ))}
              </div>
              <div className="flex flex-col justify-start md:col-span-2 space-y-3">
                <Label htmlFor="message">Nachricht</Label>
                <Textarea
                  minLength={1}
                  rows={10}
                  id="message"
                  name="message"
                  placeholder="deine Nachricht"
                />
                {state.errors?.message &&
                  state.errors.message.map((error: string) => (
                    <p className="mt-2 text-sm text-red-500" key={error}>
                      {error}
                    </p>
                  ))}
                <Submit />
              </div>
            </form>
            <div className="text-sm mt-4">
              <p>
                Deine Angaben werden ausschließlich zur Beantwortung Deiner
                Frage genutzt. Weitere Informationen findest Du in den{" "}
                <Link
                  className="text-pink-500"
                  href="/datenschutz"
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
