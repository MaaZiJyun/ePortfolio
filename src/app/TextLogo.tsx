import React from "react";

const TextLogo = () => {
  return (
    <div className="flex p-6">
      <div className="flex flex-col items-end w-full">
        <span className="text-2xl font-bold tracking-wide">
          童夢綺のウェブサイト
        </span>
        <div className="text-xxs font-normal text-justify distribute-text mt-1">
          {"DOMUKI NO WEBUSAITO".split("").map((char, index) => (
            <span key={index}>{char}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TextLogo;
