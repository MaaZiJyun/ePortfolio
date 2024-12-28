import ArticlePreviewer from "@/app/_components/ArticlePreviewer";
import Container from "@/app/_components/Container";
import DirectoryBar from "@/app/_components/DirectoryBar";
import SubPageContent from "@/app/_components/SubPageContent";
import { TypeOfArticle } from "@/app/_controllers/TypeOfArticle";
import getArticleMetadata from "@/app/_controllers/getArticleMetadata";

const page: React.FC = () => {
  const articlesMetadata = getArticleMetadata(TypeOfArticle.IELTS);
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
                My Learning Notes of IELTS
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
                  (The following is a note about IELTS and English learning.)
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
        As an international student, English serves as a crucial tool for
        communication and acquiring knowledge. Recognizing its importance, I
        understand that mastering the English language is fundamental and
        essential throughout my journey of studying abroad. Despite achieving a
        band 7 in 2024, I am aware that there is still a long way to go to reach
        the proficiency required for advanced academic studies.
      </p>
      <p>
        The primary purpose of my ongoing English language learning is to
        enhance my ability to engage deeply with academic materials, participate
        effectively in discussions, and communicate my ideas clearly and
        confidently. This continued effort aims to bridge any remaining gaps in
        my language skills, ensuring that I can fully immerse myself in my
        studies and make the most of my educational opportunities.
      </p>
      <p>
        The outcomes I aim to achieve through this endeavor include improved
        academic writing and reading comprehension, heightened listening and
        speaking abilities, and overall increased fluency in English. By
        attaining these goals, I hope to excel in my academic pursuits, actively
        contribute to scholarly discussions, and build a solid foundation for my
        future career.
      </p>
    </div>
    <h2 className="subpage-h2">Learning Structure</h2>
    <h1 className="text-lg font-bold my-5">Foundational Section</h1>
    <ol className="list-decimal list-inside">
      <li>English Phonetic Symbols</li>
      <li>Basic Vocabularies</li>
      <li>Simple Grammar</li>
    </ol>
    <h1 className="text-lg font-bold my-5">Listening Section</h1>
    <ol className="list-decimal list-inside">
      <li>Numbers and Letters</li>
      <li>Dates and Times</li>
      <li>Person Name and Address</li>
      <li>Listening Core Vocabularies</li>
      <li>
        Listening Part 1: A conversation between two people set in an everyday
        social context (e.g., booking a hotel room, asking for information).
      </li>
      <li>
        Listening Part 2: A monologue set in an everyday social context (e.g., a
        speech about local facilities, a talk about a museum).
      </li>
      <li>
        Listening Part 3: A conversation between up to four people set in an
        educational or training context (e.g., a discussion between students and
        a tutor about an assignment).
      </li>
      <li>
        Listening Part 4: A monologue on an academic subject (e.g., a university
        lecture).
      </li>
    </ol>
    <h1 className="text-lg font-bold my-5">Reading Section</h1>
    <ol className="list-decimal list-inside">
      <li>Sentences Analysis</li>
      <li>Multiple Choice Questions (MCQs)</li>
      <li>Identifying Information (True/False/Not Given)</li>
      <li>Identifying the Writer's Views/Claims (Yes/No/Not Given)</li>
      <li>Matching Information</li>
      <li>Matching Headings</li>
      <li>Matching Features</li>
      <li>Matching Sentence Endings</li>
      <li>Sentence Completion</li>
      <li>Summary, Note, Table, Flow-chart Completion</li>
      <li>Diagram Label Completion</li>
      <li>Short Answer Questions</li>
    </ol>
    <h1 className="text-lg font-bold my-5">Writing Section</h1>
    <ol className="list-decimal list-inside">
      <li>P1 - Line Graphs/Bar Charts/Pie Charts/Tables</li>
      <li>P1 - Process Diagrams</li>
      <li>P1 - Maps/Floor Plans</li>
      <li>P1 - Multiple Charts</li>
      <li>P2 - Advantages/Disadvantages</li>
      <li>P2 - Opinion Essays</li>
      <li>P2 - Discussion/Problem-Solution Essays</li>
      <li>P2 - Two-Part Question Essays</li>
    </ol>
    <h1 className="text-lg font-bold my-5">Speaking Section</h1>
    <ol className="list-decimal list-inside">
      <li>Part 1 (Introduction and Interview)</li>
      <li>Part 2 (Individual Long Turn - Cue Card)</li>
      <li>Part 3 (Discussion)</li>
    </ol>
  </div>
);
const ProjectContent = (
  <div className="fade-in">
    <div className="bg-white shadow-lg rounded-lg px-6 py-12">
      <h2 className="text-xl lg:text-4xl font-bold text-center mb-8">最新のIELTS結果</h2>
      <div className="grid grid-cols-2 gap-4 text-center">
        <div className="p-4 bg-gray-100 rounded-lg">
          <h3 className="lg:text-lg font-semibold">Listening</h3>
          <p className="text-xl font-bold text-red-600">{'7.0'}</p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <h3 className="lg:text-lg font-semibold">Reading</h3>
          <p className="text-xl font-bold text-red-600">{'6.5'}</p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <h3 className="lg:text-lg font-semibold">Writing</h3>
          <p className="text-xl font-bold text-red-600">{'7.0'}</p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <h3 className="lg:text-lg font-semibold">Speaking</h3>
          <p className="text-xl font-bold text-red-600">{'7.0'}</p>
        </div>
      </div>
      <div className="mt-6 p-4 bg-red-100 rounded-lg text-center">
        <h3 className="lg:text-lg font-semibold">Overall Band Score</h3>
        <p className="text-xl lg:text-3xl font-bold text-red-700">{'7.0'}</p>
      </div>
    </div>
  </div>
);

export default page;
