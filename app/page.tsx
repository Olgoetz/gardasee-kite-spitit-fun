import Aboutme from "@/components/aboutme";
import Contact from "@/components/contact/contact";
import Event from "@/components/event";

import Hero from "@/components/hero";

import Packages from "@/components/packages";
import Program from "@/components/program";
import Speparator from "@/components/separator";

import Video from "@/components/video";
export default function Home() {
  return (
    <main className="mx-auto w-full">
      {/* <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex"></div> */}
      <Hero />
      <Event />

      {/* <Video /> */}
      <Program />
      <Speparator imageSrc="/background.jPG" alt="SomaBay Ägypten" />
      <Packages />
      <Aboutme />
      <Contact />
    </main>
  );
}
