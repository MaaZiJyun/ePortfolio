import ArticlePreviewer from "@/app/_components/ArticlePreviewer";
import Container from "@/app/_components/Container";
import DirectoryBar from "@/app/_components/DirectoryBar";
import SubPageContent from "@/app/_components/SubPageContent";
import Introduction from "@/app/_components/_Study/_Artificial_Intelligence/Introduction";
import { TypeOfArticle } from "@/app/_controllers/TypeOfArticle";
import getArticleMetadata from "@/app/_controllers/getArticleMetadata";

const pageTitle = "Learning Notes of Artificial Intelligence";
const pageDesc = "童夢綺の人工知能学習ノート";
const pageComment = " (The following is a note about AI learning.)";

const page = () => {
  const articlesMetadata = getArticleMetadata(
    TypeOfArticle.ArtificialIntelligence
  );

  const articlesPreviews = articlesMetadata.map((article) => (
    <ArticlePreviewer key={article.slug} {...article} />
  ));
  
  const NoteContent = (
    <div className="space-y-5 text-justify">
      <div className="text-justify space-y-2">
        <h2 className="subpage-h2">Content of Learning</h2>
        <span className="subpage-comment">{pageComment}</span>
        <div className="flex flex-col">{articlesPreviews}</div>
      </div>
    </div>
  );

  return (
    <main className="flex flex-col items-center justify-between mt-32">
      <Container>
        <div className="border-l-8 border-black p-6 lg:px-24">
          <div className="flex w-full py-6">
            <DirectoryBar />
          </div>
          <div className="w-full h-px bg-black"></div>
          <div className="flex flex-col w-full pt-10 pb-16">
            <div className="space-y-4">
              <div className="text-3xl lg:text-6xl font-bold lg:w-2/3">
                {pageTitle}
              </div>
              <div className="text-base">{pageDesc}</div>
            </div>
          </div>
        </div>
        <SubPageContent
          Introduction={IntroductionContent}
          Content={NoteContent}
          Project={ProjectContent}
        />
      </Container>
    </main>
  );
};

const IntroductionContent = <Introduction />;
const ProjectContent = <div>None</div>;

export default page;
