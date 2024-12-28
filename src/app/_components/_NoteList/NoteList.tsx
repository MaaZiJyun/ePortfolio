import React from "react";
import NoteListCard from "./NoteListCard";
import { PostMetadata } from "@/app/_controllers/PostMetadata";

interface NoteListProps {
  allData: PostMetadata[][];
}

const NoteList: React.FC<NoteListProps> = ({ allData }) => {
  return (
    <>
      <div className="lg:px-16 px-6 py-24 bg-gray-100">
        <div className="flex items-center justify-center mb-12">
          <h1 className="lg:text-4xl text-3xl font-bold underline text-center">
            Some of the Notes and Posts
          </h1>
        </div>
        <div className="lg:flex lg:space-x-3">
          {allData.map((data) => (
            <NoteListCard data={data}/>
          ))}
        </div>
      </div>
    </>
  );
};

export default NoteList;
