import React from "react";
import { Instagram, Linkedin, Facebook } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface Styles {
  classes?: string;
}

const SocialMedia = ({ classes }: Styles) => {
  return (
    <>
      <div className={cn("flex", classes)}>
        <Link
          href="https://www.instagram.com/michaela_suessbauer//?hl=de"
          target="_blank"
        >
          <Instagram />
        </Link>
        <Link
          href="hhttps://www.facebook.com/michaelasuessbauer1.de"
          target="_blank"
        >
          <Facebook />
        </Link>
      </div>
    </>
  );
};

export default SocialMedia;
