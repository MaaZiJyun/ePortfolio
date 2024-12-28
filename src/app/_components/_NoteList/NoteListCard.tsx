import { PostMetadata } from "@/app/_controllers/PostMetadata";
import React from "react";
import QuickPreviewer from "./QuickPreviewer";

interface NoteListCardProps {
  data: PostMetadata[];
}

const NoteListCardProps: React.FC<NoteListCardProps> = ({ data }) => {
  const previews = data
    .slice(0, 5)
    .map((i) => <QuickPreviewer key={i.slug} {...i} />);
  return (
    <>
      <div className="hidden lg:flex flex-col lg:flex-1 items-center justify-start shadow-lg p-5 bg-white">
        <div className="flex flex-col w-full">{previews}</div>
      </div>
    </>
  );
};

export default NoteListCardProps;
