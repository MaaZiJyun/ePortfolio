"use client";
import React, { useState } from "react";
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
        className="h-full w-full"
        style={{
          position: "relative",
          overflow: "hidden", // Ensures the zoomed image stays within the container
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "background-color 0.5s ease-in-out", // Smooth color transition
        }}
      >
        <div
          style={{
            backgroundImage: `url(${image})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover", // Default cover behavior
            height: "100%",
            width: "100%",
            transform: isHovered ? "scale(1.5)" : "scale(1)", // Smooth zoom effect
            transition: "transform 0.5s ease-in-out", // Smooth zoom transition
          }}
        ></div>
        <div
          className="text-white w-full h-full"
          style={{
            position: "absolute",
            zIndex: 1, // Ensures the text is above the background
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div
            className={`flex w-full h-full bg-black ${
              isHovered ? "bg-opacity-70" : "bg-opacity-30"
            } transition duration-500`}
          >
            <div className="flex h-full w-full items-center justify-center">
              <Link
                href={`/playVideo/${videoId || ""}`}
                className="flex flex-col w-full items-center justify-center"
              >
                <div>
                  <span className="distribute-text text-3xl lg:text-6xl">
                    {title}
                  </span>
                </div>
                <div className="space-y-2 w-72">
                  <div className="distribute-text">
                    {comment.split("").map((char, index) => (
                      <span key={index}>{char}</span>
                    ))}
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmallVideoBoard;
