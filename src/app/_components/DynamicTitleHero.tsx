"use client";
import React, { useState } from "react";
import AnimeHeroTitle from "./AnimeHeroTitle";
import Link from "next/link";

interface StudyTitleHeroProps {
  image: string;
  bgColor: string;
  color?: string;
  title: string;
  description: string;
}

const DynamicTitleHero: React.FC<StudyTitleHeroProps> = ({
  image,
  bgColor,
  color = "black",
  title,
  description,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="h-96 lg:h-screen w-full"
      style={{
        position: "relative",
        overflow: "hidden", // Ensures the zoomed image stays within the container
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: isHovered
          ? "rgba(153, 27, 27, 0.6)" // Darker background color on hover
          : "rgba(153, 27, 27, 0.8)", // Default background color
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
        className="h-full w-full"
        style={{
          backgroundColor: `${bgColor}`,
          position: "absolute",
          zIndex: 1, // Ensures the text is above the background
        }}
      >
        {/* <Link href={`https://www.youtube.com/@domuki`}> */}
        <div className="flex items-center justify-center w-full h-full">
          <div
            className="w-full"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <AnimeHeroTitle
              title={title}
              description={description}
              color={color}
            />
          </div>
        </div>
        {/* </Link> */}
      </div>
    </div>
  );
};

export default DynamicTitleHero;
