"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
const links = [
  {
    label: "Start",
    link: "/",
  },
  {
    label: "Event",
    link: "#event",
  },
  {
    label: "Programm",
    link: "#programm",
  },
  {
    label: "Pakete",
    link: "#pakete",
  },
  {
    label: "Über Mich",
    link: "#uebermich",
  },
  {
    label: "Anfrage",
    link: "#anfrage",
  },
];

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  const [navcolor, setNavcolor] = useState("");

  useEffect(() => {
    const handleNavcolor = () => {
      if (window.scrollY >= 10) {
        setNavcolor("bg-black");
      } else {
        setNavcolor("bg-transparent");
      }
    };
    window.addEventListener("scroll", handleNavcolor);
    return () => {
      window.removeEventListener("scroll", handleNavcolor);
    };
  }, []);

  return (
    <div className="w-full text-white">
      <div
        className={cn(
          "hidden md:flex z-[1000] fixed top-0 px-8 left-0 transition ease-in-out delay-150 w-full h-[70px]  items-center justify-between",
          navcolor
        )}
      >
        <Link href="/">
          <Image
            width={40}
            height={1}
            src="/logo_michi.png"
            alt="Michaela Süßbauer"
          />
        </Link>
        <div className="hidden md:flex">
          <ul className="flex items-center space-x-10">
            {links.map((l) => (
              <Link
                key={l.label}
                href={l.link}
                className="hover:bg-pink-500 hover:rounded-md p-4"
              >
                <li>{l.label}</li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
      {/* MOBILE MENU */}
      <div className="md:hidden  p-3 absolute top-0 right-0 float-right  text-white cursor-pointer z-50">
        {navbar ? (
          <RxCross1 onClick={() => setNavbar(!navbar)} size={25} />
        ) : (
          <GiHamburgerMenu onClick={() => setNavbar(!navbar)} size={25} />
        )}
      </div>

      {navbar && (
        <div className="md:hidden absolute top-0 left-0 w-full flex flex-col h-screen z-40 bg-black">
          <div className="mt-4 ml-6">
            <Link href="/">
              <Image
                width={40}
                height={1}
                src="/logo_michi.png"
                alt="Michaela Süßbauer"
                className="z-[500]"
              />
            </Link>
          </div>
          <div className="flex flex-1 flex-col justify-between items-stretch">
            <ul className="flex flex-col space-y-10 ml-5 h-full justify-center">
              {links.map((l) => (
                <Link
                  onClick={() => setNavbar(!navbar)}
                  key={l.label}
                  href={l.link}
                  className="p-4"
                >
                  <li>{l.label}</li>
                </Link>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
