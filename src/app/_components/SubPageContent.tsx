"use client";
import React, { useState } from "react";

type SubPage = "Introduction" | "Content" | "Outcome";

interface SubPageContentProps {
  Introduction: React.ReactNode; // Accepts any valid React node
  Content: React.ReactNode;
  Project: React.ReactNode;
}

const SubPageContent: React.FC<SubPageContentProps> = ({
  Introduction,
  Content,
  Project,
}) => {
  const [activePage, setActivePage] = useState<SubPage>("Introduction");

  const handleNavClick = (subPage: SubPage) => {
    setActivePage(subPage);
  };
  return (
    <div className="px-6 lg:px-24 my-24">
      <div className="flex items-center justify-between border-b-2 border-black">
        {["Introduction", "Content", "Outcome"].map((page) => (
          <div
            key={page}
            className={`flex w-1/3 items-center justify-center cursor-pointer py-3 hover:bg-black hover:text-white ${
              activePage === page ? "bg-black text-white" : ""
            }`}
            onClick={() => handleNavClick(page as SubPage)}
          >
            <span className="text-lg font-bold">{page}</span>
          </div>
        ))}
      </div>
      <div className="mt-14">
        {activePage === "Introduction" && Introduction}
        {activePage === "Content" && Content}
        {activePage === "Outcome" && Project}
      </div>
    </div>
  );
};
export default SubPageContent;
