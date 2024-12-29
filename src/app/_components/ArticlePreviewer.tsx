import Link from "next/link";
import React from "react";
import { PostMetadata } from "../_controllers/PostMetadata";

const ArticlePreviewer = (props: PostMetadata) => {
  return (
    <Link
      href={`/study/${props.type}/${props.slug}`}
      className="hover:underline"
    >
      <div className="lg:flex justify-between items-center py-3">
        <div>
          <h2 className="text-lg lg:text-xl font-bold">{props.title}</h2>
        </div>
        <div className="hidden lg:flex italic lg:space-x-5">
          <p>{props.subtitle}</p>
          <p>{props.date}</p>
        </div>
      </div>
    </Link>
  );
};

export default ArticlePreviewer;
