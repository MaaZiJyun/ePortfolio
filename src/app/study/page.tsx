"use client";
import { useState } from "react";
import Container from "../_components/Container";
import DirectoryBar from "../_components/DirectoryBar";

const page = () => {
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
      href: "/study",
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
    <main className="flex flex-col items-center justify-between mt-20">
      <Container>
        <div className="flex w-full p-6 lg:px-32">
          <DirectoryBar />
        </div>
        <div className="flex flex-col items-center justify-center p-6 lg:p-32 text-justify">
          <div className="flex title text-5xl">
            <span className="text-center">個人勉強ノート掲示板</span>
          </div>
          <div className="flex flex-col lg:w-1/3 info text-center mt-12">
            <span className="text-xl">童夢綺</span>
            <span className="text-sm mt-5">自習スタジオ</span>
            <span className="text-sm mt-2">
              ファンタジータウン ミラクル通り 5丁目 7番地 〒987-6543
            </span>
          </div>
          <div className="lg:flex w-full items-start justify-center mt-10 lg:space-x-6">
            <div className="flex flex-col lg:w-1/2 mt-5">
              <p>
                {currentDiv === 0 && intro1}
                {currentDiv === 1 && intro2}
                {currentDiv === 2 && intro3}
                {currentDiv === 3 && intro4}
                {currentDiv === null && defaultDesc}
              </p>
            </div>
            <div className="flex flex-col lg:w-1/2 mt-5">
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
          <div className="footage w-full mt-20 space-y-2">
            {/* divider */}
            <div className="flex lg:w-1/4">
              <div className="w-full h-px bg-black"></div>
            </div>
            <p>
              <span className="font-bold">キーワードとフレーズ: </span>
              人生は旅であり, 毎瞬新しいことに出会っています, 実際の学び,
              自己に依存する必要がある, 学問的な学習ノート, 個人的な保管場所,
              反省や発見, 深い関与, 学習の旅, 真の学び, 自己動機, 教育的進歩
            </p>
            <p>
              <span className="font-bold">Keywords and phrases: </span>
              Life is a journey, I encounter new things every moment, Genuine
              learning, Needs to be self-dependent, Scholarly study notes,
              Personal repository, Reflections and discoveries, Deep engagement,
              Learning journey, True learning, Self-motivation, Educational
              progress.
            </p>
          </div>
        </div>
      </Container>
    </main>
  );
};
export default page;
