"use client";
import Link from "next/link";
import React, { useState } from "react";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

interface AnimeHeroTitleProps {
  title: string;
  description: string;
}

const AnimeHeroTitle: React.FC<AnimeHeroTitleProps> = ({
  title,
  description,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <>
      <div
        className="py-6 w-full"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="flex flex-col h-96 items-center justify-center">
          <div>
            <div
              className={`distribute-text transition-all duration-1000 mb-4 ${
                isHovered ? "lg:text-lg" : "text-3xl lg:text-6xl"
              } `}
            >
              <span>{title}</span>
            </div>
            <div
              className={`distribute-text transition-all duration-1000 ${
                isHovered ? "text-2xl lg:text-4xl" : "lg:text-lg"
              } `}
            >
              {description.split("").map((char, index) => (
                <span className="font-normal" key={index}>
                  {char}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AnimeHeroTitle;
