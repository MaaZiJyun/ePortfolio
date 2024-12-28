"use client";
import React, { useState } from "react";
import ParallaxSection from "../ParallaxSection";
import { PlayIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

interface SmallVideoBoardProps {
  videoId: string;
  image: string;
  title: string;
  comment: string;
}

const SmallVideoBoard: React.FC<SmallVideoBoardProps> = ({
  videoId,
  image,
  title,
  comment,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="w-full h-full">
      <div
        className={`flex lg:flex-row flex-col w-full h-full bg-black ${
          isHovered ? "bg-opacity-60" : "bg-opacity-10"
        } transition duration-500`}
      >
        {/* <ParallaxSection backgroundImage={image}> */}
        <div
          className="flex h-full w-full transition-all duration-1000"
          style={{
            color: "white",
            backgroundImage: `url(${image})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: isHovered ? "200%" : "150%",
          }}
        >
          <div
            className="flex flex-col items-center justify-center h-full w-full transition-all duration-1000"
            style={{
              backgroundColor: isHovered
                ? "rgba(0, 0, 0, 0.8)" // Darker overlay when hovered
                : "rgba(0, 0, 0, 0.4)", // Lighter overlay by default
            }}
          >
            <Link
              href={`/playVideo/${videoId || ""}`}
              className="flex w-36 h-36 items-center justify-center"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className="space-y-2">
                <span className="distribute-text text-3xl lg:text-6xl">
                  {title}
                </span>
                <div className="distribute-text">
                  {comment.split("").map((char, index) => (
                    <span key={index}>{char}</span>
                  ))}
                </div>
              </div>
            </Link>
          </div>
        </div>
        {/* </ParallaxSection> */}
      </div>
      {/* </a> */}
    </div>
  );
};

export default SmallVideoBoard;
