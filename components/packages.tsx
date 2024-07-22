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
const standardContent =
  "Welcome Cocktail,Yoga, Mobility, Faszientraining,  kostenloser Shuttleservice zum Kitespot und zurück, 7 Nächte, Vollpension";
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

function renderItems(content: string, isExtra: boolean) {
  if (!content.length) {
    return null;
  }
  const contentList = content.split(",").map((item) => (
    <div key={randomUUID()} className="flex items-center py-2">
      {!isExtra && item ? (
        <CheckCircle2 className="text-pink-500 mr-5 shrink-0" />
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
            <h3 className="text-pink-500 text-xl">Beekite</h3>
          </div>
          <p>
            Die sehr beliebte Kiteschule{" "}
            <a
              className="text-pink-500"
              href="https://kitehouse-somabay.com/de/"
            >
              7BFT Kitehouse
            </a>{" "}
            ist nur 10 Fahrminuten mit dem Shuttle von unserer Unterkunft
            entfernt. Das Team besteht aus super netten, lustigen und hoch
            qualifizierten Lehrern. Ich arbeite schon lange mit Ihnen zusammen
            und habe bisher ausschließlich positives Feedback von meinen
            Teilnehmern.
          </p>
        </div>
        <div className="border-l-4 p-4 border-pink-500">
          <div className="flex items-center mb-2">
            <IoFitnessSharp size={24} className="text-pink-500 mr-4" />
            <h3 className="text-pink-500 text-xl">Fitness</h3>
          </div>
          <p>
            Täglich werde ich euch mit Yoga- und Mobility-Kursen sowie
            Faszientraining versorgen. Ich sorge dafür, dass ihr perfekt für das
            Wasser vorbereitet seid und ebenso für die rasche Regeneration
            danach. Die Kurse finden entweder vormittags oder nachmittags statt,
            je nach Windvorhersage.
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
              <p className="text-5xl font-semibold">860,70*</p>
              <EuroIcon size={50} color="white" />
            </div>
            <div className="text-center">
              <p>im Doppelzimmer</p>
              <p>zzgl. eigene Anreise</p>
              <p>zzgl. Kitematerial/-kurs</p>
            </div>
            <div className="my-4">
              {" "}
              <div className="my-4">
                <Button size="lg">Buchungsanfrage</Button>
              </div>
            </div>
          </CardFooter>
          <div className="flex p-5">
            <p className="mr-3">*</p>
            <div>
              <p>Doppelzimmer zur Einzelnutzung 986,70 €</p>
            </div>
          </div>
        </Card>

        <Card className="flex flex-col h-full md:scale-110">
          <CardHeader className="relative">
            <CardTitle className=" text-3xl">Super Early Bird</CardTitle>
            <p className="absolute -top-3 -right-4 rotate-12 text-2xl bg-pink-500 m-2 p-1 rounded-lg font-extrabold text-center text-white">
              20% Rabatt
            </p>
            <CardDescription>bei Buchung bis 31.01.2025</CardDescription>
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
              <p className="text-5xl font-semibold">798,40*</p>
              <EuroIcon size={50} color="white" />
            </div>
            <div className="text-center">
              <p>im Doppelzimmer</p>
              <p>zzgl. eigene Anreise</p>
              <p>zzgl. Kitematerial/-kurs</p>
            </div>
            <div className="my-4">
              <div className="my-4">
                <Button size="lg">Buchungsanfrage</Button>
              </div>
            </div>
          </CardFooter>
          <div className="flex p-5">
            <p className="mr-3">*</p>
            <div>
              <p>Doppelzimmer zur Einzelnutzung 910,40 €</p>
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
              <p className="text-5xl font-semibold">923,00*</p>
              <EuroIcon size={50} color="white" />
            </div>
            <div className="text-center">
              <p>im Doppelzimmer</p>
              <p>zzgl. eigene Anreise</p>
              <p>zzgl. Kitematerial/-kurs</p>
            </div>
            <div className="my-4">
              <Button size="lg">Buchungsanfrage</Button>
            </div>
          </CardFooter>
          <div className="flex p-5">
            <p className="mr-3">*</p>
            <div>
              <p>Doppelzimmer zur Einzelnutzung 1063,00 €</p>
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
      <div className="flex items-center ">
        <p>
          Die Preise für den Verleih von Katmaterial, Storage und Kurse findest
          du hier: "pdf hier"
        </p>
        <TbFileTypePdf size={30} className="text-pink-500" />
      </div>
      <p>Auf die gelisteten Preise bekommst du 15% Rabatt!</p>
    </div>
  );
};

export default Packages;
