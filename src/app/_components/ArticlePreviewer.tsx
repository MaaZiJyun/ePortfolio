import Link from "next/link";
import React from "react";
import { PostMetadata } from "../_controllers/PostMetadata";

const ArticlePreviewer = (props: PostMetadata) => {
  return (
    <div className="py-6">
      <Link href={`/posts/${props.slug}`}>
        <div>
          <h2 className="text-xl font-bold">{props.title}</h2>
        </div>
      </Link>
      <div className="mt-2 italic">
        <p>{props.subtitle}</p>
        <p>{props.date}</p>
      </div>
    </div>
  );
};

export default ArticlePreviewer;
