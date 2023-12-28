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
const standardContent =
  "Yoga, Mobility, Faszientraining, Aperitivo Abend, Ponton Abend (Partyboot), Pizza Abend";
const content = [
  {
    title: "Paket 1",
    description: "täglich Fitness ohne Kiten",
    extraContent: "",
    price: "380",
  },
  {
    title: "Paket 2",
    description: "täglich Fitness und Kitekurs",
    extraContent:
      "Kitekurs Praxis mit 6 Ausfahrten, Kitekurs Theorie, Material",

    price: "920",
  },
  {
    title: "Paket 3",
    description: "täglich Fitness und Shuttelservice mit Material",
    extraContent: "Shuttleservice 6 Ausfahrten, Material",
    price: "810",
  },
  {
    title: "Paket 4",
    description: "täglich Fitness und Shuttleservice ohne Material",
    extraContent: "Shuttleservice 6 Ausfahrten, Material",
    price: "570",
  },
];

function renderItems(content: string, isExtra: boolean) {
  if (!content.length) {
    return null;
  }
  const contentList = content.split(",").map((item) => (
    <div key={randomUUID()} className="flex items-center py-2">
      {!isExtra && item ? (
        <CheckCircle2 className="text-pink-500 mr-5" />
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
        Pakete
      </h2>
      <div className="my-14 grid md:grid-cols-3 gap-3">
        <div className="border-l-4 p-4 border-pink-500">
          <div className="flex items-center mb-2">
            <FaLocationDot size={24} className="text-pink-500 mr-4" />
            <h3 className="text-pink-500 text-xl">Torri del Benaco</h3>
          </div>

          <p>
            Unsere Unterkunft ist im idyllischen Torri del Benaco. Ein ein
            malerisches Dorf am Ostufer des Gardasees in Italien, das für seine
            charmante Altstadt mit engen Gassen, historischen Gebäuden und einer
            imposanten Burg bekannt ist. Torri del Benaco gehört zu einem der
            beliebtesten Orte am Gardasee.
          </p>
        </div>
        <div className="border-l-4 p-4 border-pink-500">
          <div className="flex items-center mb-2">
            <MdKitesurfing size={24} className="text-pink-500 mr-4" />
            <h3 className="text-pink-500 text-xl">Beekite</h3>
          </div>
          <p>
            Eine sehr beliebte Kiteschule mit super netten, lustigen und hoch
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
            Wasser verbereitet seid und ebenso für die rasche Regeneration
            danach.
          </p>
        </div>
      </div>
      <div className="grid md:grid-cols-4 gap-6 mt-6">
        {content.map((item) => (
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
                  <p>zzgl. Unterkunft 189 € im DZ*</p>
                  <p>zzgl. eigene Anreise</p>
                </div>
                <div className="my-4">
                  <Booking package_name={item.title} price={item.price} />
                </div>
              </CardFooter>
            </Card>
          </div>
        ))}
      </div>
      <div className="flex mt-5">
        <p className="mr-3">*</p>
        <div>
          <p>Einzelzimmer für 129 € (max. 2 verfügbar)</p>
          <p>Dreibettzimmer für 209 € </p>
          <p>
            Preise verstehen sich pro Nacht
            <span className="text-pink-500 font-black"> inkl.</span> Frühstück
          </p>
        </div>
      </div>
    </div>
  );
};

export default Packages;
