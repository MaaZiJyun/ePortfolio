"use client";
import React, { useState } from "react";

const TextLogo = () => {
  const [isHovered, setIsHovered] = useState(false);
  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const [bgColor, setBgColor] = useState<string>("unset"); // Explicitly type as string

  const handleMouseEnter = () => {
    setBgColor(getRandomColor()); // Call the function to get a color
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setBgColor("unset"); // Reset to unset
    setIsHovered(false);
  };

  return (
    <div
      className={`h-24 lg:w-72 flex items-center justify-center py-6 px-6 lg:px-12 transition-all duration-1000 `}
      style={{
        backgroundColor: isHovered ? bgColor : "unset", // Set backgroundColor to bgColor
        transition: "background-color 0.5s ease",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex flex-col items-center">
        <div
          className={`font-hefeng distribute-text transition-all duration-1000 ${
            isHovered ? "text-xxs" : "text-xl lg:text-2xl"
          } ${isHovered ? "text-white" : "text-black"}`}
        >
          {"童夢綺のキャンバス".split("").map((char, index) => (
            <span key={index}>{char}</span>
          ))}
        </div>
        <div
          className={`distribute-text transition-all duration-1000 ${
            isHovered ? "text-xl lg:text-2xl" : "text-xxs"
          } ${isHovered ? "text-white" : "text-black"}`}
        >
          {"DOMUKI'S CANVAS".split("").map((char, index) => (
            <span key={index}>{char}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TextLogo;
