"use client";
import React from "react";
import Image from "next/image";
import { useSpring, animated } from "@react-spring/web";
import GoogleMaps from "./googleMaps";
const Event = () => {
  const springs = useSpring({
    from: { x: -200 },
    to: { x: 0 },
  });

  return (
    <animated.div
      className="container max-w-[1400px] my-20"
      //   style={{ ...springs }}
    >
      <h1
        id="event"
        className="text-center font-bold text-2xl md:text-5xl  uppercase border-b pb-2  text-pink-500"
      >
        Event
      </h1>

      <p className="my-8 text-center">Hier kommt noch ein schöner Text hiin</p>
      <div className="grid md:grid-cols-3 gap-4 mt-10 items-center justify-center">
        <div className="md:col-span-1 w-full h-full flex flex-col text-center justify-top">
          <div className="">
            <h3 className="text-4xl font-extrabold mb-3">Zeitraum</h3>
            <p className="text-2xl">28.06. - 04.07.2024</p>
          </div>
          <div className="mt-10">
            <h3 className="text-4xl font-extrabold mb-3">Preis</h3>
            <p className="text-2xl">ab 380 EUR plus Unterkunft</p>
          </div>
          <div className="mt-10">
            <h3 className="text-4xl font-extrabold mb-3">Kiteschule</h3>
            <p className="text-2xl text-pink-500">
              <a href="https://www.beekite.it/de/">BeeKite</a>
            </p>
          </div>
        </div>
        <div className="md:col-span-2">
          <div className="flex flex-col mt-4 md:mt-0 text-center justify-center">
            <h3 className="text-4xl font-extrabold mb-3">Ort</h3>
            <p className="text-2xl mb-4">Torri del Benaco, Gardasee</p>
            <GoogleMaps />
          </div>
        </div>
      </div>
    </animated.div>
  );
};

export default Event;
