"use client"
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
    "Life is a journey, and I am encountering new things every moment. Recognizing that genuine learning needs to be self-dependent, I have created this section on my website to record scholarly study notes and insights. This space functions as a personal repository for the knowledge and understanding I have gained along the way. By sharing my reflections and discoveries, I aim to promote deeper engagement with the themes I explore and provide resources that contribute to others' learning journeys. This approach emphasizes the belief that true learning is reinforced by diligent records of self-motivation and educational progress.";

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
    <div className="lg:flex w-full items-start justify-center mt-10 lg:space-x-6">
      <div className="hidden lg:flex h-72 lg:w-1/2 mt-5">
        <p>
          {currentDiv === 0 && intro1}
          {currentDiv === 1 && intro2}
          {currentDiv === 2 && intro3}
          {currentDiv === 3 && intro4}
          {currentDiv === null && defaultDesc}
        </p>
      </div>
      <div className="lg:w-1/2 mt-5">
        <div className="mb-3">
          <span className="text-lg font-bold">Subjects (Links):</span>
        </div>
        {articleNav.map((subItem, index) => (
          <a
            key={subItem.name}
            href={subItem.href}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="flex justify-between text-black hover:bg-black hover:text-white rounded-sm px-1">
              <span className="text-left">{subItem.name}</span>
              <span className="text-right">{subItem.CNname}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default StudyNavBoard;
