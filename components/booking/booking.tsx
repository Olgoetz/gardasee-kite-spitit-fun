"use client";
import React, { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { BeatLoader } from "react-spinners";
import { Switch } from "@/components/ui/switch";
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

import { sendBookingInquiry } from "./actions";
import { useServerAction } from "zsa-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

export function Booking({
  package_name,
  styles,
}: {
  package_name: string;
  styles?: string;
}) {
  const [open, setOpen] = useState<boolean>(false);
  const [wantKite, setWantKite] = useState<boolean>(false);
  const [numberOfPersons, setNumberOfPersons] = useState<string>("1");

  const handleWantKite = () => {
    setWantKite(!wantKite);
  };
  const handleNumberOfPersons = (e: string) => {
    setNumberOfPersons(e);
  };

  const { isPending, executeFormAction, isSuccess, data, isError, error } =
    useServerAction(sendBookingInquiry, {
      bind: {
        packageName: package_name,
      },
    });

  if (isError) {
    toast.error(
      "Fehler beim Versenden der Anfrage! Versuche es später nochmal!"
    );
  }

  // Use useEffect to handle the success state
  useEffect(() => {
    if (isSuccess) {
      setOpen(false);
      toast.success("Anfrage verschickt!");
    }
  }, [isSuccess]);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          className={cn(
            "wbroder-white border-2",
            styles ? styles : "white bg-transparent"
          )}
        >
          Buchungsanfrage
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[500px]">
        <form className="flex flex-col gap-4" action={executeFormAction}>
          <Label htmlFor="packageName">Paket</Label>
          <Input readOnly name="packageName" disabled value={package_name} />
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
          <Label htmlFor="numberOfPersons">Personenzahl</Label>
          <Select
            onValueChange={handleNumberOfPersons}
            defaultValue={numberOfPersons}
            name="numberOfPersons"
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="1" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">1</SelectItem>
              <SelectItem value="2">2</SelectItem>
              <SelectItem value="3">3</SelectItem>
              <SelectItem value="4">4</SelectItem>
              <SelectItem value="5">5</SelectItem>
              <SelectItem value="6">6</SelectItem>
              <SelectItem value="7">7</SelectItem>
              <SelectItem value="8">8</SelectItem>
            </SelectContent>
          </Select>

          <Label htmlFor="wantKite">Ich möchte/kann Kitesurfen</Label>
          <Switch
            name="wantKite"
            checked={wantKite}
            onCheckedChange={handleWantKite}
          />
          {wantKite && (
            <>
              <Label htmlFor="kiteLevel">Mein Kite-Level</Label>
              <Select name="kiteLevel">
                <SelectTrigger className="w-full">
                  <SelectValue
                    placeholder="Wähle dein Kitelevel"
                    defaultValue={kiteLevel[0]}
                  />
                </SelectTrigger>
                <SelectContent>
                  {kiteLevel.map((level) => (
                    <SelectItem key={level} value={level}>
                      {level}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </>
          )}
          {error?.fieldErrors?.kiteLevel && (
            <p className="text-red-500">{error.fieldErrors.kiteLevel}</p>
          )}
          <Button className="w-full" type="submit" disabled={isPending}>
            {isPending ? "Sende..." : "Abschicken"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}

const kiteLevel = [
  "Keine Erfahrung, ich möchte es lernen",
  "Anfänger, ich kann bereits fahren",
  "Fortgeschritten, ich kann Höhe laufen und springen",
  "Profi, ich kann bei starken Winden fahren und beherrsche Tricks",
];
