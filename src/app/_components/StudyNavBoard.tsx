"use client";
import React from "react";
import { useState } from "react";

const StudyNavBoard: React.FC = () => {
  const [currentDiv, setCurrentDiv] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    setCurrentDiv(index);
  };

  const handleMouseLeave = () => {
    setCurrentDiv(null);
  };

  const defaultDesc =
    "Life is a journey, and every day I encounter new things. To fulfill the need for learning and communication, I have created this section on my website to document my academic notes and insights. I hope that by sharing my learning and discoveries, I can foster deeper engagement with the topics I explore and provide useful information to others.";

  const intro1 =
    "Artificial Intelligence (AI) is the field of computer science dedicated to creating machines that can perform tasks requiring human intelligence. AI encompasses areas like machine learning, natural language processing, and robotics. It is revolutionizing industries by automating processes, improving decision-making, and enabling new capabilities in various sectors such as healthcare, finance, and transportation.";
  const intro2 =
    "Blockchain is a decentralized digital ledger technology that enables secure and transparent peer-to-peer transactions. It operates on a distributed network of computers, providing immutability and enhancing trust in digital interactions. Blockchain is widely used in cryptocurrencies like Bitcoin, as well as applications in supply chain management, voting systems, and more.";
  const intro3 =
    "IELTS is a globally recognized test that assesses English language proficiency for non-native English speakers. It measures abilities in listening, reading, writing, and speaking, essential for academic study, immigration, and professional settings worldwide.";
  const intro4 =
    "Mathematics is the study of numbers, shapes, structures, and change. It plays a crucial role in understanding patterns in the natural world, scientific research, engineering, and technology development. Mathematics provides tools for problem-solving, decision-making, and critical thinking across various disciplines.";

  const articleNav = [
    {
      name: "Artificial Intelligence",
      CNname: "人工知能",
      href: "/study/artificial_intelligence",
    },
    {
      name: "Blockchain Technology",
      CNname: "ブロックチェーン技術",
      href: "/study",
    },
    { name: "IELTS", CNname: "IELTS", href: "/study/ielts" },
    { name: "Mathematics", CNname: "数学", href: "/study" },
  ];
  return (
    <div className="lg:flex w-full items-start justify-center py-12 lg:space-x-6 bg-white bg-opacity-80">
      <div className="mt-5 p-6 bg-white rounded bg-opacity-80">
        <div className="mb-6">
          <span className="font-bold">Subjects (Links):</span>
        </div>
        {articleNav.map((subItem, index) => (
          <a
            key={subItem.name}
            href={subItem.href}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="flex flex-col justify-between text-black my-3 hover:underline">
              <span className="text-left">{subItem.name}</span>
            </div>
          </a>
        ))}
      </div>
      <div className="hidden lg:flex flex-col h-72 p-6 lg:w-2/3 mt-5">
        <p>
          {currentDiv === 0 && intro1}
          {currentDiv === 1 && intro2}
          {currentDiv === 2 && intro3}
          {currentDiv === 3 && intro4}
          {currentDiv === null && defaultDesc}
        </p>
      </div>
    </div>
  );
};

export default StudyNavBoard;
