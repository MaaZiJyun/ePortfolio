"use client";
import React, { useState } from "react";
import AnimeHeroTitle from "./AnimeHeroTitle";

const MusicTitleHero = () => {
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
        className="bg-domuki-shadow transition-all duration-1000"
        style={{
          backgroundImage: "url('/images/domuki_shadow.png')",
          backgroundSize: "cover",
          backgroundColor: isHovered
            ? "rgba(153, 27, 27, 0.6)"
            : "rgba(153, 27, 27, 0.8)",
        }}
      >
        <div
          className={`flex flex-col items-center justify-center font-hefeng h-screen text-black ${
            isHovered ? "lg:text-xl" : "text-xxl"
          } `}
        >
          <div
            className="w-2/3"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <AnimeHeroTitle
              title={"童夢綺の音楽作品"}
              description={"私の音楽作品をぜひ聴いてください！"}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MusicTitleHero;
