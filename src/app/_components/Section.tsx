import React from "react";

interface SectionProps {
  title: string;
  description: string;
}

const Section: React.FC<SectionProps> = ({ title, description }) => {
  return (
    <div>
      <div className="pt-44 pb-16">
        <div>
          <span className="text-5xl font-bold">{title}</span>
        </div>
        <div className="mt-4">
          <span>{description}</span>
        </div>
      </div>
      <div className="w-full h-px bg-black"></div>
    </div>
  );
};

export default Section;
