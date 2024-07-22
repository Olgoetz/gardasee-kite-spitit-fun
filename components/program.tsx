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
    text: "Täglich Kitekurse für Anfänger und Fortgeschrittene*",
    icon: MdKitesurfing,
  },
  {
    text: "Faszientraining zur Regeneration",
    icon: AiFillHeart,
  },
  {
    text: "Mobility Einheiten für die optimale Vorbereitung auf's Wasser",
    icon: IoFitnessSharp,
  },
  {
    text: "Morning Yoga Flow",
    icon: TbYoga,
  },
  {
    text: "Sunset Tour*",
    icon: MdBreakfastDining,
  },
  {
    text: "Bedounin Dinner*",
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
              className="text-center h-[200px] bg-black text-white  border-white items-center"
            >
              <CardHeader className="items-center">
                <el.icon size={48} color="white" />
                {/* <CardTitle> </CardTitle> */}
                {/* <CardDescription>Card Description</CardDescription> */}
              </CardHeader>
              <CardContent>
                <p className="">{el.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <p className="text-sm my-2">*entgeltlich</p>
      </div>
    </div>
  );
};

export default Program;
