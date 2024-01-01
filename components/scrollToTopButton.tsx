"use client";
import React, { useState, useEffect } from "react";
import clsx from "clsx";
import { ArrowUp } from "lucide-react";
const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY;

    setIsVisible(scrollTop > 300);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      className={clsx(
        "fixed md:invisible bottom-8 right-8 bg-pink-500 text-white p-4 rounded-full cursor-pointer",
        { block: isVisible },
        { hidden: !isVisible }
      )}
      onClick={scrollToTop}
    >
      <ArrowUp width={20} height={20} />
    </button>
  );
};

export default ScrollToTopButton;
