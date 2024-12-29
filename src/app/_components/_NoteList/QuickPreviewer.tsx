import Link from "next/link";
import React from "react";
import { PostMetadata } from "../../_controllers/PostMetadata";

const QuickPreviewer = (props: PostMetadata) => {
  return (
    <div className="py-2">
      <Link
        href={
          props.type == "post"
            ? `/posts/${props.slug}`
            : `/study/${props.type}/${props.slug}`
        }
        className="hover:underline"
      >
        <div>
          <h2 className="text-lg lg:text-xl font-bold">{props.title}</h2>
        </div>
        <div className="italic">
          <p>{props.date}</p>
        </div>
      </Link>
    </div>
  );
};

export default QuickPreviewer;
