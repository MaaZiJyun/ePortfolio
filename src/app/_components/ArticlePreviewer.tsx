import Link from "next/link";
import React from "react";
import { ArticleMetadata } from "../_controllers/ArticleMetadata";

const ArticlePreviewer = (props: ArticleMetadata) => {
  return (
    <div className="py-6">
      <Link href={`/articles/${props.type}/${props.slug}`}>
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
