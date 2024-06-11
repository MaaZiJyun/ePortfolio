import Link from "next/link";
import React from "react";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

interface SectionProps {
  title: string;
  description: string;
}

const ArticleHeader: React.FC<SectionProps> = ({ title, description }) => {
  return (
    <div>
      <div className="pt-24 pb-16 item-center justify-center">
        <Link href="/articles">
          <div className="flex space-x-2">
            <ArrowLeftIcon className="h-5 w-5 text-black" />
            <span>Back</span>
          </div>
        </Link>
        <div className="pt-20 text-center">
          <span className="text-3xl lg:text-6xl font-bold">{title}</span>
        </div>
        <div className="mt-4 text-center">
          <span className="text-sm italic">{description}</span>
        </div>
      </div>
      <div className="w-full h-px bg-black"></div>
    </div>
  );
};

export default ArticleHeader;
