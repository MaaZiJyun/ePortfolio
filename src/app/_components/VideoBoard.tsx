"use client";
import React, { useState } from "react";
import ParallaxSection from "./ParallaxSection";
import {
  FaceSmileIcon,
  PlayIcon,
  PowerIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import YouTubePreviewer from "./YouTubePreviewer";

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

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleDivClick = () => {
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <div className="w-full h-full">
      {/* <a
        href={`https://www.youtube.com/watch?v=${videoId}`}
        className="w-full h-full"
      > */}
      <div
        className={`flex lg:flex-row flex-col w-full h-full bg-black ${
          isHovered ? "bg-opacity-40" : "bg-opacity-10"
        } transition duration-500`}
      >
        {/* <YouTubePreviewer videoId="haqHcJHe0w0" /> */}
        <ParallaxSection backgroundImage={image}>
          <div className="flex flex-col items-center justify-center h-full w-full">
            <button
              className="flex w-36 h-36 items-center justify-center"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={handleDivClick}
            >
              <PlayIcon
                className={`${
                  isHovered ? "h-36 w-36 " : "h-28 w-28 "
                }transition-all duration-500`}
              />
            </button>
            {isDialogOpen && (
              <div className="fixed inset-0 flex items-center justify-center z-50">
                <div className="fixed inset-0 bg-black bg-opacity-50"></div>
                <div className="flex flex-col bg-white rounded-lg z-40 justify-center h-screen w-screen lg:h-auto lg:w-auto text-black">
                  <div className="flex items-center justify-between px-6 pt-6">
                    <div className="flex items-center justify-between">
                      <span className="text-black text-xl font-arial">
                        作品プレビュー
                      </span>
                    </div>
                    <button
                      className="hover:text-gray-500"
                      onClick={handleCloseDialog}
                    >
                      <PowerIcon className="h-7 w-7" />
                    </button>
                  </div>
                  <div className="h-96 px-6 py-3">
                    <YouTubePreviewer videoId={videoId} />
                  </div>
                  <div className="flex items-center justify-center px-6 pb-6">
                    <FaceSmileIcon className="h-6 w-6 mr-1" />
                    <span className="text-black text-sm lg:text-base font-arial">
                      「ただのビデオを再生できるカードですよ～」
                    </span>
                  </div>
                </div>
              </div>
            )}
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
      {/* </a> */}
    </div>
  );
};

export default VideoBoard;
