import ArticleHeader from "@/app/_components/ArticleHeader";
import fs from "fs";
import matter from "gray-matter";
import getArticleMetadata from "@/app/_controllers/getArticleMetadata";
import Container from "@/app/_components/Container";
import MarkdownRenderer from "@/app/_components/MarkdownRender";
import { TypeOfArticle } from "@/app/_controllers/TypeOfArticle";
import DirectoryBar from "@/app/_components/DirectoryBar";

const getArticleContent = (slug: string) => {
  const folder = `notes_${TypeOfArticle.IELTS}/`;
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
};

export const generateStaticParams = async () => {
  const articles = getArticleMetadata(TypeOfArticle.IELTS);
  return articles.map((article) => ({
    slug: article.slug,
  }));
};

const PostPage = (props: any) => {
  const slug = props.params.slug;
  const article = getArticleContent(slug);
  const keywords = article.data.keywords as string[];
  return (
    <main className="flex flex-col items-center justify-between my-32">
      <Container>
        <div className="lg:flex justify-between px-6 lg:px-60 mb-10">
          <DirectoryBar />
          <span>{article.data.date}</span>
        </div>
        <div className="flex flex-col p-6 lg:px-60 text-justify mt-20">
          <div className="flex items-center justify-center title text-2xl lg:text-4xl">
            <span className="text-center font-bold">{article.data.title}</span>
          </div>
          <div className="flex flex-col info text-center mt-10">
            <span className="text-lg lg:text-xl">
              {article.data.author.name}
            </span>
            <span className="lg:text-lg">{article.data.address}</span>
          </div>
          <div className="abstract mt-10">
            {article.data.abstract && article.data.abstract.trim() !== "" && (
              <p>
                <span className="font-bold">Abstract: </span>
                {article.data.abstract}
              </p>
            )}
          </div>
          <div className="flex items-start keywords mt-5">
            {keywords && keywords.length !== 0 && (
              <p>
                <span className="font-bold">Keywords: </span>
                {keywords.map((keyword, index) => (
                  <span key={index} className="keyword-span">
                    {keyword},{" "}
                  </span>
                ))}
              </p>
            )}
          </div>
          <article className="prose max-w-none">
            <MarkdownRenderer content={article.content} />
          </article>
        </div>
      </Container>
    </main>
  );
};
export default PostPage;
