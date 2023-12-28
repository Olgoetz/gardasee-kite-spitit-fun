"use client";
import React, { useEffect, useState } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";
import { BeatLoader } from "react-spinners";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { useToast } from "@/components/ui/use-toast";

import { sendBookingInquiry } from "@/lib/actions";

function Submit() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" className="white md:w-[120px] bg-pink-500">
      {pending ? <BeatLoader color="white" /> : "Abschicken"}
    </Button>
  );
}
export function Booking({
  package_name,
  price,
}: {
  package_name: string;
  price: string;
}) {
  const { toast } = useToast();

  const initialState = { message: "", errors: {} };
  const [state, dispatch] = useFormState(sendBookingInquiry, initialState);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (state.success) {
      setOpen(false);
      toast({
        description: state.message,
      });
    }
  }, [state]);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="white bg-transparent broder-white border-2">
          Buchungsanfrage
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md w-[500px]">
        <form action={dispatch}>
          <DialogHeader>
            <DialogTitle>
              Buchungsanfrage für {package_name} ab {price} €
            </DialogTitle>
            <DialogDescription>
              Schicke mir direkt eine Buchungsanfrage
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <input
                hidden
                name="paket"
                value={`${package_name} | ${price} €`}
                readOnly
              />
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input
                id="name"
                name="name"
                placeholder="Dein Name"
                className="col-span-3"
              />

              {state.errors?.name &&
                state.errors.name.map((error: string) => (
                  <p
                    className="mt-2 col-span-4 text-sm text-red-500"
                    key={error}
                  >
                    {error}
                  </p>
                ))}
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="email" className="text-right">
                Email
              </Label>
              <Input
                id="email"
                name="email"
                placeholder="Deine Email Adresse"
                className="col-span-3"
              />
              {state.errors?.email &&
                state.errors.email.map((error: string) => (
                  <p className="col-span-4  text-sm text-red-500" key={error}>
                    {error}
                  </p>
                ))}
            </div>

            <Select name="room">
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Wähle ein Zimmer" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Zimmerwunsch</SelectLabel>
                  <SelectItem value="Einzelzimmer">
                    Einzelzimmer 129€ pro Nacht inkl. Frühstück
                  </SelectItem>
                  <SelectItem value="Doppelzimmer">
                    Doppelzimmer 189€ pro Nacht inkl. Frühstück
                  </SelectItem>
                  <SelectItem value="Dreibettzimmer">
                    Dreibettzimmer 209€ pro Nacht inkl. Frühstück
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            {state.errors?.room &&
              state.errors.room.map((error: string) => (
                <p className="text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>

          <DialogFooter className="sm:justify-start ">
            <Submit />
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
