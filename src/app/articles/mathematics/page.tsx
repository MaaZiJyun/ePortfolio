import ArticlePreviewer from "@/app/_components/ArticlePreviewer";
import Container from "@/app/_components/Container";
import FadeInContainer from "@/app/_components/FadeInContainer";
import { TypeOfArticle } from "@/app/_controllers/TypeOfArticle";
import getArticleMetadata from "@/app/_controllers/getArticleMetadata";

const page = () => {
  const articlesMetadata = getArticleMetadata(TypeOfArticle.Mathematics);
  const articlesPreviews = articlesMetadata.map((article) => (
    <ArticlePreviewer key={article.slug} {...article} />
  ));
  return (
    <main className="flex flex-col items-center justify-between mt-32">
      <Container>
        <div className="flex flex-col items-center justify-center p-6 lg:px-32 text-justify">
          <div className="flex title text-5xl">
            <span className="text-center">個人文章掲示板</span>
          </div>
          <div className="flex flex-col lg:w-1/3 info text-center mt-12">
            <span className="text-xl">童夢綺</span>
            <span className="text-sm mt-5">自習スタジオ</span>
            <span className="text-sm mt-2">
              ファンタジータウン ミラクル通り 5丁目 7番地 〒987-6543
            </span>
          </div>
          <FadeInContainer>
            <div className="lg:flex px-6 lg:px-12 items-center justify-center space-x-6 mt-12">
              <div className="flex flex-col lg:w-1/2 items-center justify-center">
                <p>
                  <span className="font-bold">概要: </span>
                  人生は旅であり、私は毎瞬新しいことに出会っています。実際の学びは自己に依存する必要があると認識しているため、私のウェブサイトにこのセクションを設けて、学問的な学習ノートや洞察を記録しています。このスペースは、私が道中で得た知識と理解の個人的な保管場所として機能します。私の反省や発見を共有することで、私が探求するテーマに対するより深い関与を促進し、他の人々の学習の旅にも資するリソースを提供することを目指しています。このアプローチは、真の学びが自己動機と教育的進歩の勤勉な記録によって強化されるという信念を強調しています。
                </p>
              </div>
              <div className="flex items-center justify-center lg:w-1/2">
                <div className="flex flex-col">
                  {articlesPreviews && (
                    <div className="flex items-center justify-center ">
                      <span>Nothing</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </FadeInContainer>
        </div>
      </Container>
    </main>
  );
};
export default page;
