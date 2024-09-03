import ArticlePreviewer from "@/app/_components/ArticlePreviewer";
import Container from "@/app/_components/Container";
import DirectoryBar from "@/app/_components/DirectoryBar";
import SubPageContent from "@/app/_components/SubPageContent";
import { TypeOfArticle } from "@/app/_controllers/TypeOfArticle";
import getArticleMetadata from "@/app/_controllers/getArticleMetadata";

const page: React.FC = () => {
  const articlesMetadata = getArticleMetadata(
    TypeOfArticle.BlockchainTechnology
  );
  const articlesPreviews = articlesMetadata.map((article) => (
    <ArticlePreviewer key={article.slug} {...article} />
  ));
  return (
    <main className="flex flex-col items-center justify-between mt-32">
      <Container>
        <div className="border-l-8 border-black px-6 lg:px-20">
          <div className="flex w-full py-6">
            <DirectoryBar />
          </div>
          <div className="w-full h-px bg-black"></div>
          <div className="flex flex-col w-full pt-10 pb-20">
            <div className="space-y-4">
              <div className="text-3xl lg:text-6xl font-bold lg:w-2/3">
                Blockchain Technology
              </div>
              <div className="text-base">童夢綺のIELTS学習ノート</div>
            </div>
          </div>
        </div>
        <SubPageContent
          Introduction={IntroductionContent}
          Content={
            <div className="flex flex-col w-full fade-in">
              <div className="mb-6">
                <h2 className="text-xl lg:text-3xl font-bold text-red-700">
                  Content of Learning
                </h2>
                <span className="text-gray-500 text-lg">
                  (The following is a note about Blockchain Technology.)
                </span>
              </div>
              <div>{articlesPreviews}</div>
            </div>
          }
          Project={ProjectContent}
        />
      </Container>
    </main>
  );
};

const IntroductionContent = (
  <div className="fade-in">
    <div className="text-justify space-y-5 fade-in">
      <div className="mb-6">
        <h2 className="subpage-h2">Purpose</h2>
        <span className="subpage-comment">
          (The bried introduction about why should I learn this subject, what I
          should learn and what I can obtain after my study.)
        </span>
      </div>
      <p>
        The purpose of learning Blockchain technology for me is to explore and
        contribute to the transformative potential of decentralized, secure, and
        transparent systems. By mastering Blockchain, I can develop innovative
        solutions that enhance trust and security in digital transactions, drive
        advancements in various industries, and position myself at the forefront
        of emerging technologies like decentralized finance (DeFi), Web3, and
        more. This knowledge will also equip me with valuable skills that are in
        high demand, helping me achieve my academic and professional goals in
        the evolving tech landscape.
      </p>
    </div>
    <h2 className="subpage-h2">Learning Structure</h2>
    <h1 className="text-lg font-bold my-5">DISTRIBUTED LEDGER TECHNOLOGY, CRYPTOCURRENCY AND E-PAYMENT</h1>
    <ol className="list-decimal list-inside">
      <li>Introduction</li>
      <li>Number Theory</li>
      <li>Cryptography</li>
      <li>Digital Signature</li>
      <li>SET(ePayment protocol)</li>
      <li>3D(ePayment protocol)</li>
      <li>Blockchain Introduction</li>
      <li>Bitcoin Details</li>
      <li>Blockchain Consensus</li>
      <li>Smart Contract, DeFi/NFT</li>
    </ol>
  </div>
);
const ProjectContent = (
  <div className="fade-in h-40">
    <span className="italic">The project is still under the progress.</span>
  </div>
);

export default page;
