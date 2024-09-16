"use client";

import { ArrowRightIcon, ArrowUpIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

interface DrawerProps {
  title: string;
  children: React.ReactNode;
}

const Drawer: React.FC<DrawerProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="my-4">
      <button
        className="flex w-full items-center justify-end text-right hover:text-gray-400"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <ArrowUpIcon className="h-5 w-5 mx-2" />
        ) : (
          <ArrowRightIcon className="h-5 w-5 mx-2" />
        )}
        <span>{isOpen ? "Close the note of " : `View more about `} </span>
        <span className="font-bold italic mx-1">{title}</span>
      </button>

      <div
        className={`bg-gray-100 rounded overflow-hidden transition-transform duration-300 ease-in-out transform ${
          isOpen ? "scale-y-full" : "scale-y-0"
        }`}
        style={{
          transformOrigin: "top",
          height: isOpen ? "auto" : "0",
          padding: isOpen ? "0.75em 1.5em" : "0 0",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Drawer;
