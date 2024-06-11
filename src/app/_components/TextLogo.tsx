import React from "react";

const TextLogo = () => {
  return (
    <div className="flex p-6">
      <div className="flex flex-col items-end w-full">
        <span className="text-xl lg:text-2xl font-bold tracking-wide">
          童夢綺のキャンバス
        </span>
        <div className="text-xs font-normal text-justify distribute-text mt-1">
          {"DOMUKI'S CANVAS".split("").map((char, index) => (
            <span key={index}>{char}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TextLogo;
