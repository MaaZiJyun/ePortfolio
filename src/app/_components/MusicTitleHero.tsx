"use client";
import React, { useState } from "react";
import AnimeHeroTitle from "./AnimeHeroTitle";
import Link from "next/link";

const ZoomInBackground = () => {
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
          backgroundImage: "url('/images/domuki_shadow.png')",
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
        className="text-black font-hefeng w-full"
        style={{
          position: "absolute",
          zIndex: 1, // Ensures the text is above the background
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Link href={`https://www.youtube.com/@domuki`}>
          <AnimeHeroTitle
            title={"童夢綺の音楽作品"}
            description={"私の音楽作品をぜひ聴いてください！"}
          />
        </Link>
      </div>
    </div>
  );
};

export default ZoomInBackground;
