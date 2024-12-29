import React from "react";

interface QuotaBoardProps {
  quota: string;
  author: string;
}

const QuotaBoard: React.FC<QuotaBoardProps> = ({ quota, author }) => {
  return (
    <div className="flex p-12 lg:p-32 bg-black text-white justify-center items-center relative z-10">
      <div className="flex flex-col lg:w-3/4 text-center">
        {quota && quota.trim() !== "" && (
          <span className="text-xl lg:text-3xl uppercase">{quota}</span>
        )}
        {author && author.trim() !== "" && (
          <span className="mt-10 text-sm lg:text-lg">{author}</span>
        )}
      </div>
    </div>
  );
};

export default QuotaBoard;
