"use client";
import Link from "next/link";
import React, { useState } from "react";
import { PostMetadata } from "../_controllers/PostMetadata";
import generateRandomColor from "../_controllers/generateRandomColor";
import hexToRgb from "../_controllers/hexToRgb";

const PostPreviewer = (props: PostMetadata) => {
  const [bgColor, setBgColor] = useState<string>("unset"); // Explicitly type as string
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setBgColor(generateRandomColor()); // Call the function to get a color
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setBgColor("unset"); // Reset to unset
    setIsHovered(false);
  };

  return (
    <Link href={`/posts/${props.slug}`}>
      <div
        className="py-3 px-5 font-pixel"
        style={{
          border: `4px solid ${isHovered ? bgColor : "transparent"}`, 
          backgroundColor: isHovered ? `rgba(${hexToRgb(bgColor)}, 0.1)` : "transparent", 
          color: isHovered ? bgColor : "black",
          transition: "background-color color 0.3s ease",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="flex justify-between">
          <h2 className="text-lg lg:text-3xl font-bold uppercase">
            {props.title}
          </h2>
          <p className="text-base">{props.date}</p>
        </div>
        <div className="flex text-sm lg:text-base mt-2">
          <div>
            <p>{props.subtitle}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PostPreviewer;
