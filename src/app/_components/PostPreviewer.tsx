"use client";
import Link from "next/link";
import React, { useState } from "react";
import { PostMetadata } from "../_controllers/PostMetadata";
import generateRandomColor from "../_controllers/generateRandomColor";

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
        className="py-3 rounded-xl hover:underline"
        style={{
          color: isHovered ? bgColor : "black",
          transition: "background-color color 0.3s ease",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="flex justify-between">
          <h2 className="text-lg lg:text-2xl font-bold uppercase">
            {props.title}
          </h2>
          <p>{props.date}</p>
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
