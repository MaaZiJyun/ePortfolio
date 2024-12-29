"use client";
import React, { useState } from "react";
import ParallaxSection from "../ParallaxSection";
import {
  FaceSmileIcon,
  PlayIcon,
  PowerIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import YouTubePreviewer from "./YouTubePreviewer";
import Link from "next/link";

interface VideoBoardProps {
  videoId: string;
  image: string;
  title: string;
  comment: string;
}

const VideoBoard: React.FC<VideoBoardProps> = ({
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
        <ParallaxSection backgroundImage={image}>
          <div className="flex flex-col items-center justify-center h-full w-full">
            <Link
              href={`/playVideo/${videoId || ''}`} 
              className="flex items-center justify-center"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <PlayIcon
                className={`${
                  isHovered ? "h-36 w-36 " : "h-28 w-28 "
                }transition-all duration-500`}
              />
            </Link>
            <div className="space-y-2 w-96">
              <span className="distribute-text text-3xl lg:text-6xl">
                {title}
              </span>
              <div className="distribute-text">
                {comment.split("").map((char, index) => (
                  <span key={index}>{char}</span>
                ))}
              </div>
            </div>
          </div>
        </ParallaxSection>
      </div>
      {/* </a> */}
    </div>
  );
};

export default VideoBoard;
