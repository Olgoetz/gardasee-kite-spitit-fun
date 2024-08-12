import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const Hero = () => {
  return (
    <div>
      <div className="w-full mx-auto">
        <div className="relative min-h-screen -z-10">
          <Image
            fill={true}
            priority={true}
            quality={100}
            src="https://images.alltours.de/hotels/1200x900/HRG81828.jpg"
            alt="Breakers"
            className="object-cover"
          />
        </div>
        <div className="absolute bg-slate-400/50 rounded-lg  max-w-[1000px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  w-full z-20  text-white  space-y-3 text-center">
          <div className="p-8 space-y-8">
            <h1 className="text-3xl md:text-6xl font-extrabold">
              <span className="text-white">Kite-Spirit-Fun Camp</span> in der
              traumhaften SomaBay in Ägypten
            </h1>
            <p className="text-xl md:text-4xl font-[1000]">
              17.05. - 24.05.2025
            </p>
            <Button className="text-xl md:text-2xl bg-pink-500  p-10 h-[80px]">
              <Link href="#pakete" className="cursor-pointer">
                Buche jetzt deinen Platz
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
