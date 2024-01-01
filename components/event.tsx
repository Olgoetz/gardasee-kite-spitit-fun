"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import GoogleMaps from "./googleMaps";
import Link from "next/link";
const Event = () => {
  return (
    <div
      className="container max-w-[1400px] my-20"
      //   style={{ ...springs }}
    >
      <h1
        id="event"
        className="text-center font-bold text-2xl md:text-5xl  uppercase border-b pb-2  text-pink-500"
      >
        Event
      </h1>

      <p className="mt-8 text-center">
        Ich freue mich riesig wieder ein{" "}
        <span className="text-pink-500 block md:inline font-bold text-2xl">
          Kite-Spirit-Fun Camp
        </span>{" "}
        am wunderschönen Gardasee in Italien anbieten zu können.
      </p>
      <p className="text-center text-lg mt-8 font-extrabold">
        Freue dich auf eine Woche mit:
      </p>

      <div className="grid mt-8 md:grid-cols-3 gap-6 items-center   text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, x: [0, 100, 0] }}
          className="flex relative h-[300px] items-center justify-center"
        >
          <Image
            src="/kite.png"
            alt="Kitesurfen Gardasee"
            fill
            className="object-cover -z-10 rounded-lg"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <p className="text-white uppercase text-3xl bg-slate-300 bg-opacity-50 w-[200px] p-8">
            Kite
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, x: [0, 100, 0] }}
          className="flex relative h-[300px] items-center justify-center"
        >
          <Image
            src="/fitness.jpg"
            alt="Fitness Gardasee"
            fill
            className="object-cover -z-10 rounded-lg"
          />
          <p className="text-white uppercase text-3xl bg-slate-300 bg-opacity-50 w-[200px] p-8">
            Fitness
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, x: [0, 100, 0] }}
          className="flex relative h-[300px] items-center justify-center"
        >
          <Image
            src="/fun.png"
            alt="Spaß Gardasee"
            fill
            className="object-cover -z-10 rounded-lg"
          />
          <p className="text-white uppercase text-3xl bg-slate-300 bg-opacity-50 w-[200px] p-8">
            Fun
          </p>
        </motion.div>
      </div>
      <div className="grid md:grid-cols-3 gap-8 w-full mt-16  md:justify-center">
        <div className="md:col-span-1 w-full h-full flex flex-col text-center justify-between">
          <div className="">
            <h3 className="text-4xl font-extrabold mb-3">Zeitraum</h3>
            <p className="text-2xl">28.06. - 04.07.2024</p>
          </div>
          <div className="mt-10">
            <h3 className="text-4xl font-extrabold mb-3">Preis</h3>
            <p className="text-2xl">ab 330 EUR plus Unterkunft</p>
          </div>
          <div className="mt-10">
            <h3 className="text-4xl font-extrabold mb-3">Kiteschule</h3>

            <div className="bg-black flex justify-center">
              <Link href="https://www.beekite.it/de/">
                <Image
                  src="/beekite_logo.png"
                  alt="Beekite"
                  width={250}
                  height={100}
                  color="black"
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="md:col-span-2">
          <div className="flex flex-col mt-4 md:mt-0 text-center">
            <h3 className="text-4xl font-extrabold mb-3">Ort</h3>
            <p className="text-2xl mb-4">Torri del Benaco, Gardasee</p>
            <GoogleMaps />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
