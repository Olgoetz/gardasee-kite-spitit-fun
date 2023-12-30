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
        <div>
          <p className="text-left text-pink-500">
            Motivation, Power, Temperament, Lebensfreude und ein strahlendes
            Lächeln…
          </p>
          <p className="leading-8 mt-4">
            das sind die Worte mit denen man mich meine Kunden und Teilnehmer
            beschreiben. Vor über 20 Jahren hing ich meinen Job als
            Industriekauffrau an den Nagel, um meiner Passion für Sport & Tanz
            zum Beruf zu machen. Mein Leitsatz: Meinen Teilnehmern den Spaß an
            der Bewegung zu vermitteln und somit Ihr Leben zu verbessern. Zudem
            habe ich es mir zum Ziel gesetzt, Menschen zu Sportarten oder
            grundsätzlich Dingen zu motivieren, die sie sich selbst vielleicht
            nie zugetraut hätten. Genau aus diesem Grund organisiere ich diese
            Camps... &quot;we are better together&quot; gemeinsam macht es
            einfach mehr Freude und wir geben uns alle gegenseitig die
            Motivation und den Spaß in so einer Woche. Bekannt sind diese Wochen
            auch als &quot;life-changing&quot; Camps. Ich selbst bin seit Jahren
            leidenschaftliche Kiterin und freue mich, wenn ich das mit vielen
            teilen kann. Anfänger und Fortgeschrittene sind herzlich willkommen.
            Ich und auch Beekite freuen sich auf DICH.
          </p>
        </div>
        <div className="h-[400px] md:h-full relative">
          <Image
            fill
            style={{ objectFit: "cover" }}
            src="/kitesurfen.jpg"
            alt="Kitesurfen"
          />
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
