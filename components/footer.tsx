import React from "react";
import SocialMedia from "./socialMedia";
import Link from "next/link";
import Image from "next/image";
import { Clock, CopyrightIcon, Mail, MapPin, Phone } from "lucide-react";

const currentYear = () => {
  let today: Date = new Date();
  let year: number = today.getFullYear();
  return year;
};
export const Footer = () => {
  return (
    <div className="bg-black text-white mt-8 py-4">
      <div className="w-full grid md:grid-cols-3">
        <div className="flex flex-col items-center justify-between h-full w-full">
          <p className="w-[50%] uppercase text-center border-b py-2 mb-8 border-white ">
            Social Media
          </p>
          <div className="flex-col items-center">
            <SocialMedia
              classes={"flex-col items-center justify-between space-y-4"}
            />
          </div>
        </div>

        <div className="max-sm:mt-8 flex flex-col items-center jusitfy-between h-full w-full">
          <p className="uppercase text-center border-b py-2 mb-8 border-white w-[50%]">
            Kontakt
          </p>
          <ul className="space-y-5 text-sm">
            <li className="flex items-center justify-center">
              <Mail size={24} className="mr-5" />
              <a href="mailto:info@michaela-suessbauer.de">
                info@michaela-suessbauer.de
              </a>
            </li>
            <li>
              <div className="grid md:grid-cols-2 gap-3 justify-center">
                <div className="mx-auto">
                  <Link href="https://www.michaela-suessbauer.de">
                    <Image
                      src="/logo_michi.png"
                      alt="Michaela Suessbauer"
                      width={50}
                      height={100}
                    />
                  </Link>
                </div>
                <div>
                  <Link href="https://www.beekite.it/de/">
                    <Image
                      src="/beekite_logo.png"
                      alt="Beekite"
                      width={200}
                      height={100}
                    />
                  </Link>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <div className="max-sm:mt-8 flex flex-col items-center jusitfy-between h-full w-full">
          <p className="uppercase text-center border-b py-2 mb-8 border-white w-[50%]">
            Sonstiges
          </p>
          <ul className="space-y-3 text-center">
            <li>
              <Link href="datenschutz">Datenschutz</Link>
            </li>
            <li>
              <Link href="https://www.michaela-suessbauer.de/impressum.html">
                Impressum
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-sm flex items-center justify-center mt-2 flex-1 py-8">
        <CopyrightIcon className="h-5 w-5 mr-3" />
        <p>{currentYear()} Michaela Süßbauer</p>
      </div>
    </div>
  );
};

export default Footer;
