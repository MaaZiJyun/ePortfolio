"use client";
import React, { useState } from "react";
import Container from "@/app/_components/Container";
import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import FadeInContainer from "@/app/_components/FadeInContainer";
import DirectoryBar from "@/app/_components/DirectoryBar";

type Page = "Purpose" | "Structure" | "Content" | "Project";

const page = () => {
  const [activePage, setActivePage] = useState<Page>("Purpose");

  const handleNavClick = (page: Page) => {
    setActivePage(page);
  };

  return (
    <main className="flex flex-col items-center justify-between mt-32">
      <Container>
        <div className="border-l-8 border-gray-500 px-6 lg:px-20">
          <div className="flex w-full py-6">
            <DirectoryBar />
          </div>
          <div className="w-full h-px bg-black"></div>
          <div className="flex flex-col w-full pt-10 pb-20">
            <div className="space-y-4">
              <div className="text-3xl lg:text-6xl font-bold lg:w-2/3">
                My Learning Notes of Artificial Intelligence
              </div>
              <div className="text-base">私の人工知能学習ノート</div>
            </div>
          </div>
        </div>
        <div className="px-6 lg:px-20 my-20">
          <div className="flex items-center justify-between border-b-2 border-black">
            {["Purpose", "Structure", "Content", "Project"].map((page) => (
              <div
                key={page}
                className={`flex w-1/4 items-center justify-center cursor-pointer py-3 hover:bg-black hover:text-white ${
                  activePage === page ? "bg-black text-white" : ""
                }`}
                onClick={() => handleNavClick(page as Page)}
              >
                <span className="text-lg">{page}</span>
              </div>
            ))}
          </div>
          <div className="mt-6">
            {activePage === "Purpose" && <IntroductionContent />}
            {activePage === "Structure" && <StructureContent />}
            {activePage === "Content" && <ContentContent />}
            {activePage === "Project" && <ProjectContent />}
          </div>
        </div>
      </Container>
    </main>
  );
};

const IntroductionContent: React.FC = () => (
  <div className="text-justify space-y-5">
    <p>
      During my undergraduate studies in Software Engineering, UPM did not yet
      offer a program in Artificial Intelligence, causing me to miss the optimal
      opportunity to study this rapidly evolving field. However, I believe that
      this is not a valid reason to abandon my aspirations. Motivated by a
      strong desire to stay at the forefront of technological advancements, I
      have decided to leverage online resources to independently study computer
      science and acquire the necessary knowledge in Artificial Intelligence.
    </p>
    <p>
      The primary purpose of this self-directed learning is to bridge the gap
      left by my formal education and to gain a comprehensive understanding of
      Artificial Intelligence. By doing so, I aim to equip myself with the
      skills and expertise needed in this domain and to stay competitive in an
      ever-evolving job market.
    </p>
    <p>
      The outcomes of this initiative are multifaceted. Firstly, I intend to
      develop a solid foundation in AI principles and techniques, which will
      enable me to apply this knowledge to real-world problems. Secondly, I aim
      to enhance my problem-solving abilities and computational thinking skills
      through practical projects and hands-on experience. Lastly, I hope to
      create a detailed learning log that can serve as a resource for my
      reference.
    </p>
  </div>
);
const StructureContent: React.FC = () => (
  <div>
    <p>
      The specific course names and contents may vary from university to
      university. The above list outlines the contents that may be included in
      the bachelor's degree course in artificial intelligence as a reference for
      the study direction.
    </p>
    <h1 className="text-lg font-bold my-5">Foundational Courses</h1>
    <ol className="list-decimal list-inside">
      <li>Introduction to Computer Science</li>
      <li>
        Programming Fundamentals (often in languages like Python, Java, or C++)
      </li>
      <li>Discrete Mathematics</li>
      <li>Calculus</li>
      <li>Linear Algebra</li>
      <li>Probability and Statistics</li>
      <li>Data Structures and Algorithms</li>
    </ol>
    <h1 className="text-lg font-bold my-5">Core AI Courses:</h1>
    <ol className="list-decimal list-inside">
      <li>
        Introduction to Artificial Intelligence: Basic concepts and techniques
        in AI.
      </li>
      <li>
        Machine Learning: Supervised, unsupervised, and reinforcement learning
        techniques.
      </li>
      <li>
        Deep Learning: Neural networks, convolutional networks, and deep
        learning frameworks.
      </li>
      <li>
        Natural Language Processing: Techniques for processing and understanding
        human language.
      </li>
      <li>
        Computer Vision: Image processing and recognition, visual perception.
      </li>
      <li>
        Robotics: Basics of robotics, including perception, navigation, and
        manipulation.
      </li>
      <li>
        AI Ethics and Society: Ethical considerations and societal impacts of AI
        technologies.
      </li>
    </ol>
    <h1 className="text-lg font-bold my-5">Advanced and Elective Courses</h1>
    <ol className="list-decimal list-inside">
      <li>
        Reinforcement Learning: Advanced topics in decision-making and control.
      </li>
      <li>
        Advanced Machine Learning: Specialized techniques and latest
        advancements in ML.
      </li>
      <li>
        Big Data Analytics: Techniques for handling and analyzing large
        datasets.
      </li>
      <li>
        Cloud Computing: Using cloud platforms for AI development and
        deployment.
      </li>
      <li>
        AI in Healthcare: Applications of AI in medical and healthcare settings.
      </li>
      <li>
        Autonomous Systems: Development and control of autonomous vehicles and
        drones.
      </li>
      <li>
        Human-Computer Interaction: Design and evaluation of AI systems for user
        interaction.
      </li>
    </ol>
  </div>
);
const ContentContent: React.FC = () => <div>None</div>;
const ProjectContent: React.FC = () => <div>None</div>;

export default page;
