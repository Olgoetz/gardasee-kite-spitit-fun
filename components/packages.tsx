import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./ui/card";
import { CheckCircle2, EuroIcon, PlusCircleIcon } from "lucide-react";
import { MdKitesurfing } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { IoFitnessSharp } from "react-icons/io5";
import { randomUUID } from "crypto";
import { Booking } from "./booking/booking";
import { TbFileTypePdf } from "react-icons/tb";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
const standardContent =
  "Welcome Cocktail, Sunrise Yoga mit Sekt & Croissant, Sunset Yoga auf der Dachterasse, DAYO, Mobility- und Faszientraining, Workouts, Bedouin Dinner am Strand, Sunset Boot Tour mit DJ, kostenloser Shuttleservice zum Kitespot und zurück, 7 Nächte, Halbpension, unbegrenzt Trinkwasser";
const content = [
  {
    title: "Early Bird",
    description: "täglich Fitness ohne Kiten",
    extraContent: "Doppelzimmer, 20% Rabat bei buchung bis 31.01.2025",
    price: "923",
  },
  {
    title: "Paket 2",
    description: "täglich Fitness und Kitekurs",
    extraContent:
      "Kitekurs Praxis mit 5 Ausfahrten, Kitekurs Theorie, Material",

    price: "825",
  },
  {
    title: "Paket 3",
    description: "täglich Fitness und Shuttelservice mit Material",
    extraContent: "Shuttleservice 5 Ausfahrten, Material",
    price: "730",
  },
  {
    title: "Paket 4",
    description: "täglich Fitness und Shuttleservice ohne Material",
    extraContent: "Shuttleservice 5 Ausfahrten",
    price: "550",
  },
];

function renderItems(
  content: string,
  isExtra: boolean,
  isSpecial: boolean = false
) {
  if (!content.length) {
    return null;
  }
  const contentList = content.split(",").map((item) => (
    <div key={randomUUID()} className="flex items-center py-2">
      {!isExtra && item ? (
        <CheckCircle2
          className={cn(
            "mr-5 shrink-0",
            isSpecial ? "text-white" : "text-pink-500"
          )}
        />
      ) : (
        <PlusCircleIcon className="text-white fill-pink-500 mr-5" />
      )}
      <li>{item}</li>
    </div>
  ));

  return contentList;
}
const Packages = () => {
  return (
    <div className="container mt-12">
      <h2
        id="pakete"
        className="text-center font-bold text-2xl md:text-5xl text-pink-500 pt-20  uppercase border-b pb-2  "
      >
        Preise
      </h2>
      <div className="py-20 grid md:grid-cols-3 gap-3">
        <div className="border-l-4 p-4 border-pink-500">
          <div className="flex items-center mb-2">
            <FaLocationDot size={24} className="text-pink-500 mr-4" />
            <h3 className="text-pink-500 text-xl">Soma Bay</h3>
          </div>

          <p>
            Unsere Unterkunft, das{" "}
            <a
              className="text-pink-500"
              href="https://www.thebreakers-somabay.com/de/"
            >
              Breakers
            </a>
            , liegt in der wunderschönen Bucht von Soma Bay. Eine tolle Anlage
            mit einem traumhaften Strand, türkisblauem Wasser, unvergleichbarem
            Riff zum Schnorcheln und herausragender Nähe zum Kitespot. Die
            Zimmer sind sehr schön und modern eingerichtet und das Essen ist
            hervorragend.
          </p>
        </div>
        <div className="border-l-4 p-4 border-pink-500">
          <div className="flex items-center mb-2">
            <MdKitesurfing size={24} className="text-pink-500 mr-4" />
            <h3 className="text-pink-500 text-xl">7Bft Kitehouse</h3>
          </div>
          <p>
            Die sehr beliebte Kiteschule{" "}
            <a
              className="text-pink-500"
              href="https://kitehouse-somabay.com/de/"
            >
              7Bft Kitehouse
            </a>{" "}
            ist nur 10 Fahrminuten mit dem Shuttle von unserer Unterkunft
            entfernt. Das Team besteht aus super netten, lustigen und hoch
            qualifizierten Lehrern und sehr hilfsbereiten Beachboys die immer
            auf Euch schauen. Ich komme seit vielen Jahren an diese Station und
            fühle mich immer wohl. Für alle geübten Kiter gibt es mehrmals
            täglich die Option auf einen Downwinder zu einer wunderschönen Insel
            mit karibischem Flair.
          </p>
        </div>
        <div className="border-l-4 p-4 border-pink-500">
          <div className="flex items-center mb-2">
            <IoFitnessSharp size={24} className="text-pink-500 mr-4" />
            <h3 className="text-pink-500 text-xl">Fitness</h3>
          </div>
          <p>
            Tägliche Kurse in einer traumhaften Umgebung mit Blick aufs Meer.
            Vor dem Kiten gibt es spezielle Yoga- und Mobility-Sessions, die
            euch optimal auf das Kitesurfen vorbereiten. Higlights wie Sunrise
            Yoga direkt am Strand sowie Sundowner Yoga auf der Dachterrasse
            direkt bei der Kitestation. Erlebt dynamische Workouts und
            DAYO-Sessions (Dance & Yoga) in einer inspirierenden Atmosphäre.
          </p>
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-y-8 gap-x-10 mt-20">
        <Card className="flex flex-col h-full">
          <CardHeader className="relative">
            <CardTitle className=" text-3xl">Early Bird</CardTitle>
            <p className="absolute -top-3 -right-4 rotate-12 text-2xl bg-pink-500 m-2 p-1 rounded-lg font-extrabold text-center text-white">
              10% Rabatt
            </p>
            <CardDescription>
              bei Buchung zwischen 01.02. - 31.03.2025
            </CardDescription>
          </CardHeader>
          <CardContent className="grow">
            <ul>
              {renderItems(standardContent, false)}
              {renderItems("", true)}
              <li className="flex flex-col items-center gap-2 justify-center  text-center">
                <PlusCircleIcon
                  size={40}
                  className="shrink-0 text-white fill-pink-500"
                />
                <span className="text-pink-500 text-2xl font-bold">
                  15% Rabatt
                </span>{" "}
                auf Beach Use, Storage, Kurse, Leihmaterial
              </li>
            </ul>
          </CardContent>
          <CardFooter className="flex-col items-center justify-center bg-pink-500/70 text-white p-5 gap-4">
            <div className="flex">
              <p className="text-5xl font-semibold">913,70*</p>
              <EuroIcon size={50} color="white" />
            </div>
            <div className="text-center">
              <p>im Doppelzimmer</p>
              <p>zzgl. eigene Anreise</p>
              <p>zzgl. Kitematerial/-kurs</p>
            </div>
            <div className="my-4">
              <Booking package_name={"Early Bird"} />
            </div>
          </CardFooter>
          <div className="flex p-5">
            <p className="mr-3">*</p>
            <div>
              <p>Doppelzimmer zur Einzelnutzung 1039,70 €</p>
            </div>
          </div>
        </Card>

        <Card className="flex flex-col h-full bg-pink-500 text-white  md:scale-110">
          <CardHeader className="relative">
            <CardTitle className="text-3xl">Super Early Bird</CardTitle>
            <p className="absolute  border-pink-500 border -top-3 -right-4 rotate-12 text-2xl bg-white m-2 p-1 rounded-lg font-extrabold text-center text-pink-500">
              20% Rabatt
            </p>
            <CardDescription className="text-white">
              bei Buchung bis 31.01.2025
            </CardDescription>
          </CardHeader>
          <CardContent className="grow">
            <ul>
              {renderItems(standardContent, false, true)}
              {renderItems("", true)}
              <li className="flex flex-col items-center gap-2 justify-center  text-center">
                <PlusCircleIcon
                  size={40}
                  className="shrink-0 text-pink-500 fill-white"
                />
                <span className="text-white text-2xl font-bold">
                  15% Rabatt
                </span>{" "}
                auf Beach Use, Storage, Kurse, Leihmaterial
              </li>
            </ul>
          </CardContent>
          <CardFooter className="flex-col items-center justify-center bg-white text-pink-500 p-5 gap-4">
            <div className="flex">
              <p className="text-5xl font-semibold">851,40*</p>
              <EuroIcon size={50} color="white" />
            </div>
            <div className="text-center">
              <p>im Doppelzimmer</p>
              <p>zzgl. eigene Anreise</p>
              <p>zzgl. Kitematerial/-kurs</p>
            </div>
            <div className="my-4">
              <div className="my-4">
                <Booking
                  package_name={"Super Early Bird"}
                  styles="bg-pink-500 font-bold text-white"
                />
              </div>
            </div>
          </CardFooter>
          <div className="flex p-5">
            <p className="mr-3">*</p>
            <div>
              <p>Doppelzimmer zur Einzelnutzung 963,40 €</p>
            </div>
          </div>
        </Card>

        <Card className="flex flex-col h-full">
          <CardHeader className="relative">
            <CardTitle className=" text-3xl">Regular</CardTitle>

            <CardDescription>bei Buchung ab 01.04.2025</CardDescription>
          </CardHeader>
          <CardContent className="grow">
            <ul>
              {renderItems(standardContent, false)}
              {renderItems("", true)}
              <li className="flex flex-col items-center gap-2 justify-center  text-center">
                <PlusCircleIcon
                  size={40}
                  className="shrink-0 text-white fill-pink-500"
                />
                <span className="text-pink-500 text-2xl font-bold">
                  15% Rabatt
                </span>{" "}
                auf Beach Use, Storage, Kurse, Leihmaterial
              </li>
            </ul>
          </CardContent>
          <CardFooter className="flex-col items-center justify-center bg-pink-500/70 text-white p-5 gap-4">
            <div className="flex">
              <p className="text-5xl font-semibold">976,00*</p>
              <EuroIcon size={50} color="white" />
            </div>
            <div className="text-center">
              <p>im Doppelzimmer</p>
              <p>zzgl. eigene Anreise</p>
              <p>zzgl. Kitematerial/-kurs</p>
            </div>
            <div className="my-4">
              <Booking package_name={"Regular"} />
              {/* <Button size="lg">Buchungsanfrage</Button> */}
            </div>
          </CardFooter>
          <div className="flex p-5">
            <p className="mr-3">*</p>
            <div>
              <p>Doppelzimmer zur Einzelnutzung 1116,00 €</p>
            </div>
          </div>
        </Card>

        {/* {content.map((item) => (
          <div key={item.title}>
            <Card
              key={item.title}
              className="flex flex-col h-full md:hover:scale-110"
            >
              <CardHeader>
                <CardTitle className="relative text-3xl">
                  {item.title}
                  {item.title == "Paket 2" && (
                    <p className="absolute -top-3 -right-4 rotate-12 text-lg bg-pink-500 m-2 p-1 rounded-lg font-extrabold text-center text-white">
                      am beliebtesten
                    </p>
                  )}
                </CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>
              <CardContent className="grow">
                <ul>
                  {renderItems(standardContent, false)}
                  {renderItems(item.extraContent, true)}
                </ul>
              </CardContent>
              <CardFooter className="flex-col bg-pink-500/70 text-white p-5">
                <div className="flex">
                  <p className="text-5xl font-semibold">{item.price}</p>
                  <EuroIcon size={50} color="white" />
                </div>
                <div className="text-left">
                  <p>zzgl. eigene Anreise</p>
                  <p>zzgl. Kitematerial/-kurs</p>
                </div>
                <div className="my-4">
                  <Booking package_name={item.title} price={item.price} />
                </div>
              </CardFooter>
            </Card>
          </div>
        ))} */}
      </div>

      <h3 className="text-2xl text-pink-500 pt-10 mt-10 pb-10">
        Preisliste für Verleih, Storage und Kurse
      </h3>
      <div className="flex items-center flex-col md:flex-row space-y-4 md:space-y-0">
        <p>
          Die Preise für den Verleih von Katmaterial, Storage und Kurse findest
          du hier:
        </p>
        <div>
          <Link
            href="/Fact Sheet 7 Bft KiteHouse - winter 2024-25.pdf"
            passHref
            target="_blank"
          >
            <TbFileTypePdf size={50} className="text-pink-500 ml-3" />
          </Link>
        </div>
      </div>
      <p className="pt-4">
        Auf die gelisteten Preise bekommst du{" "}
        <span className="font-bold text-lg">15% </span>Rabatt!
      </p>
    </div>
  );
};

export default Packages;
