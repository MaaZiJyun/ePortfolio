import ArticleHeader from "@/app/_components/ArticleHeader";
import fs from "fs";
import matter from "gray-matter";
import getPostMetadata from "@/app/_controllers/getPostMetadata";
import Container from "@/app/_components/Container";
import MarkdownRenderer from "@/app/_components/MarkdownRender";
import { TypeOfArticle } from "@/app/_controllers/TypeOfArticle";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import DirectoryBar from "@/app/_components/DirectoryBar";

const getPostContent = (slug: string) => {
  const folder = `posts/`;
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
};

export const generateStaticParams = async () => {
  const posts = getPostMetadata();
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

const PostPage = (props: any) => {
  const slug = props.params.slug;
  const post = getPostContent(slug);
  const keywords = post.data.keywords as string[];
  return (
    <main className="flex flex-col items-center justify-between my-32">
      <Container>
        <div className="lg:flex justify-between p-6 lg:px-60 mb-10">
          <DirectoryBar />
          <span>{post.data.date}</span>
        </div>

        <div className="flex flex-col p-6 lg:px-60 text-justify ">
          <div className="flex items-center justify-center title text-2xl lg:text-4xl">
            <span className="text-center font-bold">{post.data.title}</span>
          </div>
          <div className="flex flex-col info text-center mt-10">
            <span className="text-lg lg:text-xl">{post.data.author.name}</span>
            <span className="lg:text-lg">{post.data.address}</span>
          </div>
          <div className="abstract mt-10">
            {post.data.abstract && post.data.abstract.trim() && (
              <p>
                <span className="font-bold">Abstract: </span>
                {post.data.abstract}
              </p>
            )}
          </div>
          <div className="flex items-start keywords mt-5">
            <p>
              <span className="font-bold">Keywords: </span>
              {keywords &&
                keywords.map((keyword, index) => (
                  <span key={index} className="keyword-span">
                    {keyword},{" "}
                  </span>
                ))}
            </p>
          </div>
          <article className="prose max-w-none">
            <MarkdownRenderer content={post.content} />
          </article>
        </div>
      </Container>
    </main>
  );
};
export default PostPage;
