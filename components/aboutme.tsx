import Image from "next/image";
import React from "react";

const Aboutme = () => {
  return (
    <div className="py-20 mt-20  bg-black text-white">
      <h2
        id="uebermich"
        className="text-center font-bold text-xl md:text-5xl uppercase border-b pb-2 text-pink-500"
      >
        Über mich
      </h2>

      <div className="container max-w-[1200px] grid grid-cols-1 md:grid-cols-2 gap-4 py-12 items-center justify-between">
        <div className="relative w-full h-full">
          <Image
            fill
            style={{ objectFit: "cover" }}
            src="/kitesurfen.jpg"
            alt="Kitesurfen"
          />
        </div>
        <div>
          <p className="text-left text-pink-500">
            Motivation, Power, Temperament, Lebensfreude und ein strahlendes
            Lächeln…
          </p>
          <p className="leading-8 mt-4">
            das sind die Worte mit denen man mich am besten beschreiben kann.
            Vor über 20 Jahren hing ich meinen Job als Industriekauffrau an den
            Nagel, um meiner Passion für Sport und Tanz zum Beruf zu machen.
            Seitdem reiße ich die Teilnehmer in meinen Group Fitness Kursen mit
            und vermittel ihnen als Personaltrainerin Spaß an der Bewegung.
            Meine Yoga Sessions und Core-Flexibility- und Faszien-Einheiten sind
            ein ganzheitliches Erlebnis für Body & Soul, nach dem ihr euch
            erfrischt und energiegeladen fühlt und die Wirkung noch lange
            nachhält. Ich bin außerdem leidenschaftliche Kiterin und ich liebe
            das Gefühl der Freiheit auf dem Wasser.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
