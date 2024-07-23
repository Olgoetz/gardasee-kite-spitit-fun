"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import GoogleMaps from "./googleMaps";
import Link from "next/link";
const Event = () => {
  return (
    <div
      className="container max-w-[1400px] "
      //   style={{ ...springs }}
    >
      <h1
        id="event"
        className="text-center font-bold text-2xl md:text-5xl pt-20  uppercase border-b pb-2  text-pink-500"
      >
        Event
      </h1>

      <p className="mt-8 text-center">
        Ich freue mich riesig wieder ein{" "}
        <span className="text-pink-500 block md:inline font-bold text-2xl">
          Kite-Spirit-Fun Camp
        </span>{" "}
        in der traumhaften Soma Bay in Ägypten anbieten zu können.
      </p>
      <p className="text-center text-lg mt-8 font-extrabold">
        Freue dich auf eine Woche mit:
      </p>

      <div className="grid mt-8 md:grid-cols-3 gap-6 items-center   text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, x: [0, 100, 0] }}
          className="flex relative h-[400px] items-center justify-center"
        >
          <Image
            src="/kite_somabay.JPG"
            alt="Kitesurfen SomaBay Ägypten"
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
          className="flex relative h-[400px] items-center justify-center"
        >
          <Image
            src="/workout_somabay.jpg"
            alt="Fitness SomaBay Ägypten"
            fill
            className="object-cover object-left -z-10 rounded-lg"
          />
          <p className="text-white uppercase text-3xl bg-slate-300 bg-opacity-50 w-[200px] p-8">
            Fitness
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, x: [0, 100, 0] }}
          className="flex relative h-[400px] items-center justify-center"
        >
          <Image
            src="/fun.JPG"
            alt="Spaß SomaBay Ägypten"
            fill
            className="object-cover -z-10 rounded-lg"
          />
          <p className="text-white uppercase text-3xl bg-slate-300 bg-opacity-50 w-[200px] p-8">
            Fun
          </p>
        </motion.div>
      </div>

      <div className="grid md:grid-cols-3 gap-8 w-full mt-16 h-full md:justify-center">
        <div className="md:col-span-1 w-full p-4 space-y-4 h-full flex flex-col bg-slate-50 rounded-lg text-center justify-between">
          <div className="">
            <h3 className="text-4xl text-pink-500 font-extrabold mb-3">
              Zeitraum
            </h3>
            <p className="text-2xl">17.05. - 24.05.2025</p>
          </div>
          <div className="">
            <h3 className="text-4xl text-pink-500 font-extrabold mb-3">
              Preis
            </h3>
            <p className="text-2xl">
              ab 923 EUR plus Anreise und Geräteverleih
            </p>
          </div>
          <div>
            <h3 className="text-4xl text-pink-500 font-extrabold mb-3">
              Kiteschule
            </h3>
            <p>7 Bft KiteHouse Soma Bay</p>
          </div>
        </div>
        <div className="md:col-span-2 w-full h-full ">
          <div className="bg-white  rounded-lg relative w-full h-[200px] md:h-[400px] ">
            <Link href="https://kitehouse-somabay.com/">
              <Image
                src="https://kitehouse-somabay.com/UP1/wp-content/uploads/A-dream-come-true.jpg"
                alt="Kitehouse Soma Bay"
                fill
                className="object-cover rounded-lg"
              />
            </Link>
          </div>
          {/* <div className="flex flex-col mt-4 md:mt-0 text-center">
            <h3 className="text-4xl font-extrabold mb-3">Ort</h3>
            <p className="text-2xl mb-4">Soma Bay, Ägypten</p>
             <GoogleMaps /> 
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Event;
