import Link from "next/link";
import React from "react";
import { PostMetadata } from "../_controllers/PostMetadata";

const PostPreviewer = (props: PostMetadata) => {
  return (
    <div className="py-6">
      <Link href={`/posts/${props.slug}`}>
        <div className="flex justify-between">
          <h2 className="text-lg lg:text-xl font-bold uppercase">{props.title}</h2>
          <p>{props.date}</p>
        </div>
      </Link>
      <div className="flex mt-2 italic">
        <div>
          <p>{props.subtitle}</p>
        </div>
      </div>
    </div>
  );
};

export default PostPreviewer;
