import Aboutme from "@/components/aboutme";
import Contact from "@/components/contact/contact";
import Event from "@/components/event";
import { Footer } from "@/components/footer";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Packages from "@/components/packages";
import Program from "@/components/program";
import Speparator from "@/components/separator";
import { Package } from "lucide-react";
import Image from "next/image";
import Video from "@/components/video";
export default function Home() {
  return (
    <main className="max-w-[1500px]">
      {/* <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex"></div> */}
      <Hero />
      <Event />

      <Video />
      <Program />
      <Speparator imageSrc="/gardasee_1.jpg" alt="Gardasee Yoga" />
      <Packages />
      <Aboutme />
      <Contact />
    </main>
  );
}
