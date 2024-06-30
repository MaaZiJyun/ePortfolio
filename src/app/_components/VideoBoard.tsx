"use client";
import React, { useState } from "react";
import ParallaxSection from "./ParallaxSection";
import { PlayIcon } from "@heroicons/react/24/outline";

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
      <a href={`https://www.youtube.com/watch?v=${videoId}`}>
        <div
          className={`flex lg:flex-row flex-col w-full h-full bg-black ${
            isHovered ? "bg-opacity-40" : "bg-opacity-10"
          } transition duration-500`}
        >
          {/* <YouTubePreviewer videoId="haqHcJHe0w0" /> */}
          <ParallaxSection backgroundImage={image}>
            <div className="flex flex-col items-center justify-center h-full w-full">
              <div
                className="flex w-36 h-36 items-center justify-center"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <PlayIcon
                  className={`${
                    isHovered ? "h-36 w-36 " : "h-28 w-28 "
                  }transition-all duration-500`}
                />
              </div>
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
            </div>
          </ParallaxSection>
        </div>
      </a>
    </div>
  );
};

export default VideoBoard;
