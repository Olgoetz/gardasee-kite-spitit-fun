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
            src="/gardasee_2.jpg"
            alt="Gardasee morgens"
            style={{ objectFit: "cover", objectPosition: "right" }}
          />
        </div>
        <div className="absolute mt-20 h-[300px] z-20 top-28 left-10 right-10 text-white p-8  space-y-3 text-center">
          <h1 className="text-3xl md:text-5xl font-bold">
            <span className="text-white">Kite-Spirit-Fun Camp</span> am
            wunderschönen Gardasee
          </h1>
          <p className="text-xl md:text-3xl">28.06. - 04.07.2024</p>
          <Button className="text-xl md:text-2xl bg-pink-500  p-10 h-[80px]">
            <Link href="#pakete" className="cursor-pointer">
              Buche jetzt deinen Platz
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
