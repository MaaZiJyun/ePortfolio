"use client";

import { ArrowDownIcon, ArrowUpIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

interface LevelProps {
  lv: number;
}

const Level: React.FC<LevelProps> = ({ lv }) => {
  const validLv = Number.isNaN(lv) ? 0 : lv; // Ensure lv is a valid number
  const percentage = Math.min(100, Math.max(0, (validLv / 10) * 100));
//   const barColor = generateColor(percentage);

  const generateColor = (percentage: number) => {
    var color;
    if (percentage >= 80 ) {
        color = "#FFADAD";
    }else if (percentage >= 60 ) {
        color = "#FFD6A5";
    }else if (percentage >= 40 ) {
        color = "#FDFFB6";
    }else if (percentage >= 20 ) {
        color = "#CAFFBF";
    }else {
        color = "#9BF6FF";
    }
    return color;
  };

  return (
    <div className="mb-4 w-full bg-gray-100 rounded-full h-1">
      <div
        className="bg-blue-600 h-1 rounded-full"
        style={{ width: `${percentage}%`, backgroundColor: `${generateColor(percentage)}`}}
      ></div>
    </div>
  );
};

export default Level;
