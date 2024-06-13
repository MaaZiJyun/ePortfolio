import Section from "../_components/Section";
import getPostMetadata from "../_controllers/getPostMetadata";
import ArticlePreviewer from "../_components/ArticlePreviewer";
import Container from "../_components/Container";
import FadeInContainer from "../_components/FadeInContainer";

const page = () => {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post) => (
    <ArticlePreviewer key={post.slug} {...post} />
  ));
  return (
    <main className="flex flex-col items-center justify-between mt-20">
      <Container>
        <div className="flex flex-col items-center justify-center p-12 lg:p-32 text-justify">
          <div className="flex title text-5xl">
            <span className="text-center">個人文章掲示板</span>
          </div>
          <div className="flex flex-col lg:w-1/3 info text-center mt-12">
            <span className="text-xl">童夢綺</span>
            <span className="text-sm mt-5">童夢綺自習スタジオの学部</span>
            <span className="text-sm mt-2">
              ファンタジータウン ミラクル通り 5丁目 7番地 〒987-6543
            </span>
          </div>
          <div className="abstract lg:w-2/3 mt-20 space-y-2">
            <p>
              <span className="font-bold">概要: </span>
              人生は旅であり、私は毎瞬新しいことに出会っています。実際の学びは自己に依存する必要があると認識しているため、私のウェブサイトにこのセクションを設けて、学問的な学習ノートや洞察を記録しています。このスペースは、私が道中で得た知識と理解の個人的な保管場所として機能します。私の反省や発見を共有することで、私が探求するテーマに対するより深い関与を促進し、他の人々の学習の旅にも資するリソースを提供することを目指しています。このアプローチは、真の学びが自己動機と教育的進歩の勤勉な記録によって強化されるという信念を強調しています。
            </p>
            <p>
              <span className="font-bold">Abstract: </span>
              Life is a journey, and I am encountering new things every moment.
              Recognizing that genuine learning needs to be self-dependent, I
              have created this section on my website to record scholarly study
              notes and insights. This space functions as a personal repository
              for the knowledge and understanding I have gained along the way.
              By sharing my reflections and discoveries, I aim to promote deeper
              engagement with the themes I explore and provide resources that
              contribute to others' learning journeys. This approach emphasizes
              the belief that true learning is reinforced by diligent records of
              self-motivation and educational progress.
            </p>
          </div>
          <div className="footage w-full mt-20 space-y-2">
            {/* divider */}
            <div className="flex lg:w-1/4">
              <div className="w-full h-px bg-black"></div>
            </div>
            <p>
              <span className="font-bold">キーワードとフレーズ: </span>
              人生は旅であり, 毎瞬新しいことに出会っています, 実際の学び,
              自己に依存する必要がある, 学問的な学習ノート, 個人的な保管場所,
              反省や発見, 深い関与, 学習の旅, 真の学び, 自己動機, 教育的進歩
            </p>
            <p>
              <span className="font-bold">Keywords and phrases: </span>
              Life is a journey, I encounter new things every moment, Genuine learning, Needs to be self-dependent, Scholarly study notes, Personal repository, Reflections and discoveries, Deep engagement, Learning journey, True learning, Self-motivation, Educational progress.
            </p>
          </div>
        </div>
      </Container>
    </main>
  );
};
export default page;
