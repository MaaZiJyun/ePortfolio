import Link from "next/link";
import React from "react";
import { PostMetadata } from "../_controllers/PostMetadata";

const ArticlePreviewer = (props: PostMetadata) => {
  return (
    <div className="lg:flex justify-between items-center py-1">
      <Link
        href={`/study/${props.type}/${props.slug}`}
        className="hover:underline"
      >
        <div>
          <h2 className="text-lg lg:text-xl font-bold">{props.title}</h2>
        </div>
      </Link>
      <div className="hidden lg:flex italic lg:space-x-5">
        <p>{props.subtitle}</p>
        <p>{props.date}</p>
      </div>
    </div>
  );
};

export default ArticlePreviewer;
