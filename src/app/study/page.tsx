import Container from "../_components/Container";
import DirectoryBar from "../_components/DirectoryBar";
import StudyNavBoard from "../_components/StudyNavBoard";

const page = () => {
  return (
    <main className="flex flex-col items-center justify-between">
      <Container>
        <div className="flex flex-col items-center justify-between my-24">
          <div className="flex w-full p-6 lg:px-32">
            <DirectoryBar />
          </div>
          <div className="flex flex-col items-center justify-center p-6 lg:p-32 text-justify">
            <div className="flex title text-5xl">
              <span className="text-center">個人自習ノート掲示板</span>
            </div>
            <div className="flex flex-col lg:w-1/3 info text-center mt-12">
              <span className="text-xl">童夢綺</span>
              <span className="text-sm mt-5">自習スタジオ</span>
              <span className="text-sm mt-2">
                ファンタジータウン ミラクル通り 5丁目 7番地 〒987-6543
              </span>
            </div>
            <StudyNavBoard />
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
                Life is a journey, I encounter new things every moment, Genuine
                learning, Needs to be self-dependent, Scholarly study notes,
                Personal repository, Reflections and discoveries, Deep
                engagement, Learning journey, True learning, Self-motivation,
                Educational progress.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
};
export default page;
