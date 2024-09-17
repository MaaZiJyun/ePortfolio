"use client";

import { ArrowDownIcon, ArrowUpIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

interface DrawerProps {
  issue: string;
  title: string;
  children: React.ReactNode;
}

const Drawer: React.FC<DrawerProps> = ({ issue, title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="my-4 font-arial text-black font-light text-sm">
      <button
        className="flex w-full px-3 py-2 rounded-lg items-center justify-between text-right border border-black hover:opacity-60"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div>
          {/* <span>Issue: </span> */}
          <span className="text-base font-bold">"{issue}"</span>
        </div>
        <div className="flex">
          <span className="">{title}</span>
          {isOpen ? (
            <ArrowUpIcon className="h-5 w-5 mx-1" />
          ) : (
            <ArrowDownIcon className="h-5 w-5 mx-1" />
          )}
        </div>
      </button>

      <div
        className={`bg-black bg-opacity-10 rounded-lg px-6 overflow-hidden duration-300 ease-in-out transition-all 
        ${isOpen ? "scale-y-full" : "scale-y-0"} 
        ${isOpen ? "max-h-full" : "max-h-0"}
        ${isOpen ? "py-6" : "py-0"}
        `}
        style={{
          transformOrigin: "top",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Drawer;
