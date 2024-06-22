"use client";
import React, { useState } from "react";
import Container from "./Container";

type SubPage = "Purpose" | "Structure" | "Content" | "Project";

interface SubPageContentProps {
  Introduction: React.ReactNode; // Accepts any valid React node
  Structure: React.ReactNode;
  Content: React.ReactNode;
  Project: React.ReactNode;
}

const SubPageContent: React.FC<SubPageContentProps> = ({
  Introduction,
  Structure,
  Content,
  Project,
}) => {
  const [activePage, setActivePage] = useState<SubPage>("Purpose");

  const handleNavClick = (subPage: SubPage) => {
    setActivePage(subPage);
  };
  return (
    <div className="px-6 lg:px-24 my-24">
      <div className="flex items-center justify-between border-b-2 border-black">
        {["Purpose", "Structure", "Content", "Project"].map((page) => (
          <div
            key={page}
            className={`flex w-1/4 items-center justify-center cursor-pointer py-3 hover:bg-black hover:text-white ${
              activePage === page ? "bg-black text-white" : ""
            }`}
            onClick={() => handleNavClick(page as SubPage)}
          >
            <span className="text-lg font-bold">{page}</span>
          </div>
        ))}
      </div>
      <div className="mt-14">
        {activePage === "Purpose" && Introduction}
        {activePage === "Structure" && Structure}
        {activePage === "Content" && Content}
        {activePage === "Project" && Project}
      </div>
    </div>
  );
};
export default SubPageContent;
