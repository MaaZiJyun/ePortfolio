import ArticleHeader from "@/app/_components/ArticleHeader";
import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getPostMetadata from "@/app/_components/getPostMetadata";
import Container from "@/app/_components/Container";

const getPostContent = (slug: string) => {
  const folder = "posts/";
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
  return (
    <main className="flex flex-col items-center justify-between">
      <Container>
        <div className="flex flex-col w-full px-6 lg:px-12">
          <ArticleHeader title={post.data.title} description={"description"} />
          <article className="prose max-w-none">
            <Markdown>{post.content}</Markdown>
          </article>
        </div>
      </Container>
    </main>
  );
};
export default PostPage;
