"use client";
import React, { ReactNode } from "react";

interface ParallaxSectionProps {
  children: ReactNode;
  backgroundImage: string;
}

const ParallaxSection: React.FC<ParallaxSectionProps> = ({
  children,
  backgroundImage,
}) => {
  return (
    <div className="parallax-section w-full h-full">
      <div className="content w-full h-full">{children}</div>
      <style jsx>{`
        .parallax-section {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          text-align: center;
          overflow: hidden;
          background-color: rgba(0, 0, 0, 0.3);
        }

        .parallax-section::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: url(${backgroundImage}) no-repeat center center fixed;
          background-size: cover;
          transition: filter 0.3s ease;
          z-index: -1;
        }

        .parallax-section .content {
          z-index: 1;
        }
      `}</style>
    </div>
  );
};
// filter: blur(2px);
export default ParallaxSection;
