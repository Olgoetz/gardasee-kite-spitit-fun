import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./ui/card";

import Image from "next/image";
import { IconType } from "react-icons";
import { AiFillHeart } from "react-icons/ai";
import { TbYoga } from "react-icons/tb";
import { IoFitnessSharp } from "react-icons/io5";
import { FaPizzaSlice } from "react-icons/fa6";
import {
  MdBreakfastDining,
  MdDinnerDining,
  MdKitesurfing,
} from "react-icons/md";
import { LucideIcon } from "lucide-react";

type ProgramPoint = {
  text: string;
  icon: LucideIcon | IconType;
};

const program: ProgramPoint[] = [
  {
    text: `Täglich Kitekurse für Anfänger und Fortgeschrittene*\n
    Wir rechnen nicht damit, aber falls es passieren sollte - einzigartige No Wind Solutions`,
    icon: MdKitesurfing,
  },
  {
    text: "Yoga, Mobility und Faszientraining zur Regeneration sowie zur optimalen Vorbereitung auf´s Wasser",
    icon: AiFillHeart,
  },
  {
    text: "Highlights: DAYO, Dance & Workout Specials",
    icon: IoFitnessSharp,
  },
  {
    text: "Sunrise Yoga am Strand sowie Sundowner Yoga auf der Dachterasse",
    icon: TbYoga,
  },
  {
    text: "Atemberaubende Sunsettour mit DJ, kühlen Drinks und jeder Menge Spaß",
    icon: MdBreakfastDining,
  },
  {
    text: "Bedouin Dinner direkt am Strand - geniesse bestes traditionelles Essen in einer wundervollen Atmosphäre wie in 1001 Nacht",
    icon: MdDinnerDining,
  },
];

const Program = () => {
  return (
    <div className="bg-black text-white">
      <div id="programm" className="container max-w-[1400px] py-20">
        <h2 className="text-2xl md:text-5xl uppercase font-bold text-pink-500 mb-10 border-b pb-2 text-center">
          Programm
        </h2>
        <p className="p-4 text-center text-lg">
          Ich habe für euch ein tolles Programm zusammen gestellt, welches viel
          Abwechslung bietet und Spaß garantiert
        </p>
        <div className="grid md:grid-cols-3 gap-4 items-center justify-between">
          {program.map((el) => (
            <Card
              key={el.text}
              className="text-center h-full bg-black text-white  border-white items-center"
            >
              <CardHeader className="items-center">
                <el.icon size={48} color="white" />
                {/* <CardTitle> </CardTitle> */}
                {/* <CardDescription>Card Description</CardDescription> */}
              </CardHeader>
              <CardContent className="">
                <p className="whitespace-pre-line">{el.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Program;
