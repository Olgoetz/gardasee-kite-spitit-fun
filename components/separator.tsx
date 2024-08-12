import Image from "next/image";
import React from "react";

const Speparator = ({ imageSrc, alt }: { imageSrc: string; alt: string }) => {
  return (
    <div className="relative w-full bg-center h-[600px]">
      <Image
        fill={true}
        src={imageSrc}
        alt={alt}
        quality={100}
        className="object-cover"
      />
    </div>
  );
};

export default Speparator;
