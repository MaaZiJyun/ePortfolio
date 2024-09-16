"use client";

import {
  ArrowUpIcon,
  ListBulletIcon,
  ShareIcon,
} from "@heroicons/react/24/outline";
import React, { useState } from "react";

// Define the type for ToC items
type TocItem = {
  level: number; // 1 for h1, 2 for h2, etc.
  title: string;
  id: string;
};

// Client component for ToC
const ToC = ({ toc }: { toc: TocItem[] }) => {
  const [showToc, setShowToc] = useState(false);

  const toggleToc = () => {
    setShowToc(!showToc);
  };

  // Scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      {!showToc && (
        <div className="fixed bottom-0 left-0 z-20">
          <div className="flex flex-col">
            <button
              className=" w-14 h-14 bg-black bg-opacity-60 text-white flex items-center justify-center z-20 hover:bg-purple-600"
              aria-label="Toggle Table of Contents"
            >
              <ShareIcon className="h-6 w-6 text-white" />
            </button>
            <button
              onClick={scrollToTop}
              className=" w-14 h-14 bg-black bg-opacity-60 text-white flex items-center justify-center z-20 hover:bg-blue-600"
              aria-label="Toggle Table of Contents"
            >
              <ArrowUpIcon className="h-6 w-6 text-white" />
            </button>
            <button
              onClick={toggleToc}
              className="w-14 h-14 bg-black bg-opacity-60 text-white flex items-center justify-center z-50 hover:bg-red-600"
              aria-label="Toggle Table of Contents"
            >
              <ListBulletIcon className="h-6 w-6 text-white" />
            </button>
          </div>
        </div>
      )}

      {/* {showToc && ( */}
      <aside
        className={`fixed top-0 left-0 w-full w-full lg:w-1/4 h-full bg-white shadow-xl transform z-20 ${
          showToc ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="relative h-full py-32 px-3">
          <h1 className="text-4xl px-3">Table of Content</h1>
          <div className="flex h-full px-3 overflow-y-scroll">
            <ul className="my-6 mx-2">
              {toc.map((item) => {
                let itemClass = "";
                switch (item.level) {
                  case 1:
                    itemClass = "text-lg pl-2"; // h1 style
                    break;
                  case 2:
                    itemClass = "text-md pl-4"; // h2 style
                    break;
                  case 3:
                    itemClass = "text-sm pl-6"; // h3 style
                    break;
                  default:
                    itemClass = "text-sm pl-8"; // lower levels if needed
                }
                return (
                  <li key={item.id} className={itemClass}>
                    <a
                      href={`#${item.id}`}
                      className="text-black hover:text-red-600"
                      onClick={() => setShowToc(false)}
                    >
                      {item.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <button
            onClick={toggleToc}
            className="absolute bottom-0 left-0 w-full h-14 bg-black bg-opacity-60 text-white shadow-lg flex items-center justify-center hover:bg-red-500"
            aria-label="Toggle Table of Contents"
          >
            閉じる
          </button>
        </div>
      </aside>
      {/* )} */}
    </div>
  );
};

export default ToC;
