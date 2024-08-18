import Image from "next/image";
import React from "react";

const Aboutme = () => {
  return (
    <div className="mt-20  bg-black text-white">
      <h2
        id="uebermich"
        className="py-20 text-center font-bold text-xl md:text-5xl uppercase border-b pb-2 text-pink-500"
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
            das sind die Worte mit denen mich meine Kunden und Teilnehmer
            beschreiben. Vor über 20 Jahren hing ich meinen Job als
            Industriekauffrau an den Nagel, um meine Passion Sport & Tanz zum
            Beruf zu machen. Mein Leitsatz: Meinen Teilnehmern den Spaß an der
            Bewegung zu vermitteln und somit Ihr Leben zu verbessern. Zudem habe
            ich es mir zum Ziel gesetzt, Menschen zu Sportarten oder Aktivitäten
            zu motivieren, die sie sich selbst vielleicht nie zugetraut hätten.
            Genau aus diesem Grund liebe ich es diese Camps zu organisieren
            &quot;we are better in a Team&quot; gemeinsam macht es einfach mehr
            Freude und alle geben sich gegenseitig die Motivation und den Spaß
            in so einer Woche. Viele meiner Teilnehmer beschreiben es auch als
            &quot;life-changing&quot; Camps. Ich selbst bin seit Jahren
            leidenschaftliche Kiterin und freue mich, wenn ich das mit vielen
            teilen kann. Anfänger und Fortgeschrittene sind herzlich willkommen.
            Ich und auch das Breakers freuen sich auf DICH.
          </p>
        </div>
        <div className="h-[400px] md:h-full relative">
          <Image
            fill
            style={{ objectFit: "cover" }}
            src="/kitesurfen.jpg"
            alt="Kitesurfen"
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
