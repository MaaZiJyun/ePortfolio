import Container from "@/app/_components/Container";
import DirectoryBar from "@/app/_components/DirectoryBar";
import SubPageContent from "@/app/_components/SubPageContent";

const page = () => {
  return (
    <main className="flex flex-col items-center justify-between mt-32">
      <Container>
        <div className="border-l-8 border-black p-6 lg:px-24">
          <div className="flex w-full py-6">
            <DirectoryBar />
          </div>
          <div className="w-full h-px bg-black"></div>
          <div className="flex flex-col w-full pt-10 pb-20">
            <div className="space-y-4">
              <div className="text-3xl lg:text-6xl font-bold lg:w-2/3">
                My Learning Notes of Artificial Intelligence
              </div>
              <div className="text-base">私の人工知能学習ノート</div>
            </div>
          </div>
        </div>
        <SubPageContent
          Introduction={IntroductionContent}
          Structure={StructureContent}
          Content={ContentContent}
          Project={ProjectContent}
        />
      </Container>
    </main>
  );
};

const IntroductionContent = (
  <div className="text-justify space-y-5">
    <h2 className="text-xl lg:text-3xl font-bold text-red-700">
      Purpose of Learning
    </h2>
    <span className="text-gray-500 text-lg">
      (The bried introduction about why should I learn this subject, what I
      should learn and what I can obtain after my study.)
    </span>
    <p>
      During my undergraduate studies in Software Engineering, UPM did not yet
      offer a program in Artificial Intelligence, causing me to miss the optimal
      opportunity to study this rapidly evolving field. However, I believe that
      this is not a valid reason to abandon my aspirations. Motivated by a
      strong desire to stay at the forefront of technological advancements, I
      have decided to leverage online resources to independently study computer
      science and acquire the necessary knowledge in Artificial Intelligence.
    </p>
    <p>
      The primary purpose of this self-directed learning is to bridge the gap
      left by my formal education and to gain a comprehensive understanding of
      Artificial Intelligence. By doing so, I aim to equip myself with the
      skills and expertise needed in this domain and to stay competitive in an
      ever-evolving job market.
    </p>
    <p>
      The outcomes of this initiative are multifaceted. Firstly, I intend to
      develop a solid foundation in AI principles and techniques, which will
      enable me to apply this knowledge to real-world problems. Secondly, I aim
      to enhance my problem-solving abilities and computational thinking skills
      through practical projects and hands-on experience. Lastly, I hope to
      create a detailed learning log that can serve as a resource for my
      reference.
    </p>
  </div>
);
const StructureContent = (
  <div className="space-y-5 text-justify">
    <div className="space-y-5 text-justify">
      <h2 className="text-xl lg:text-3xl font-bold text-red-700">Target of Learning</h2>
      <p>
        To supplement the lack of knowledge in artificial intelligence during my
        undergraduate studies and to eliminate similar or identical public and
        professional courses, the focus of my studies will be on the following
        areas:
      </p>
      <ol className="list-decimal list-inside">
        <li>Machine Learning</li>
        <li>Introduction to Data Science</li>
        <li>System Analysis and Design</li>
        <li>Natural Language Processing</li>
        <li>Deep Learning</li>
        <li>Evolutionary Computation</li>
        <li>Computer Vision and Pattern Recognition</li>
        <li>Practical Artificial Intelligence</li>
      </ol>
      <p>
        The specific course names and contents may vary from university to
        university. My bachelor study was completed from UPM in Malaysia.
        Therefore, to specified the case, the bachelor of artificial
        intelligence in UM will be taken as reference for analysis. In fact, the
        undergraduate program in Artificial Intelligence is not significantly
        different from other types of computer science programs. Most of the
        required courses and general education courses are essentially the same.
      </p>
      <p>
        By referring to the University of Malaya's (UM), the best university in
        Malaysia, undergraduate curriculum for Artificial Intelligence, most of
        the general and core courses are identical, such as Basic Malay
        Language, Computer Systems and Organization, Database and Data
        Structures.
      </p>
      <p>
        The courses with <span className="bg-gray-200">gray-200</span>{" "}
        background are similar to the courses in B.S.E in UPM
      </p>
      <table className="min-w-full border text-sm lg:text-base">
        <thead>
          <tr className="bg-gray-300">
            <th className="p-1 lg:py-2 lg:px-4 border-b">COURSE CODE</th>
            <th className="p-1 lg:py-2 lg:px-4 border-b">
              FACULTY CORE COURSES
            </th>
            <th className="p-1 lg:py-2 lg:px-4 border-b">CREDITS</th>
            <th className="p-1 lg:py-2 lg:px-4 border-b">TERM</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-gray-200">
            <td className="p-1 lg:py-2 lg:px-4 border-b">WIX1001</td>
            <td className="p-1 lg:py-2 lg:px-4 border-b">
              Computing Mathematics I
            </td>
            <td className="p-1 lg:py-2 lg:px-4 border-b">3</td>
            <td className="p-1 lg:py-2 lg:px-4 border-b">1</td>
          </tr>
          <tr className="bg-gray-200">
            <td className="p-1 lg:py-2 lg:px-4 border-b">WIX1002</td>
            <td className="p-1 lg:py-2 lg:px-4 border-b">
              Fundamentals of Programming
            </td>
            <td className="p-1 lg:py-2 lg:px-4 border-b">5</td>
            <td className="p-1 lg:py-2 lg:px-4 border-b">1</td>
          </tr>
          <tr className="bg-gray-200">
            <td className="p-1 lg:py-2 lg:px-4 border-b">WIX1003</td>
            <td className="p-1 lg:py-2 lg:px-4 border-b">
              Computer Systems and Organization
            </td>
            <td className="p-1 lg:py-2 lg:px-4 border-b">3</td>
            <td className="p-1 lg:py-2 lg:px-4 border-b">1</td>
          </tr>
          <tr className="bg-gray-200">
            <td className="p-1 lg:py-2 lg:px-4 border-b">WIX2001</td>
            <td className="p-1 lg:py-2 lg:px-4 border-b">
              Thinking and Communication Skills
            </td>
            <td className="p-1 lg:py-2 lg:px-4 border-b">3</td>
            <td className="p-1 lg:py-2 lg:px-4 border-b">1</td>
          </tr>
          <tr className="bg-gray-200">
            <td className="p-1 lg:py-2 lg:px-4 border-b">WIX2002</td>
            <td className="p-1 lg:py-2 lg:px-4 border-b">Project Management</td>
            <td className="p-1 lg:py-2 lg:px-4 border-b">3</td>
            <td className="p-1 lg:py-2 lg:px-4 border-b">1</td>
          </tr>
        </tbody>
      </table>
      <table className="min-w-full border text-sm lg:text-base">
        <thead>
          <tr className="bg-gray-300">
            <th className="p-1 lg:py-2 lg:px-4 ">COURSE CODE</th>
            <th className="p-1 lg:py-2 lg:px-4 ">PROGRAMME CORE COURSES</th>
            <th className="p-1 lg:py-2 lg:px-4 ">CREDITS</th>
            <th className="p-1 lg:py-2 lg:px-4 ">TERM</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-gray-200">
            <td className="p-1 lg:py-2 lg:px-4 border-b">WIA1002</td>
            <td className="p-1 lg:py-2 lg:px-4 border-b">
              Data Structure (#WIX1002)
            </td>
            <td className="p-1 lg:py-2 lg:px-4 border-b">5</td>
            <td className="p-1 lg:py-2 lg:px-4 border-b">2</td>
          </tr>
          <tr className="bg-gray-200">
            <td className="p-1 lg:py-2 lg:px-4 border-b">WIA1003</td>
            <td className="p-1 lg:py-2 lg:px-4 border-b">
              Computer System Architecture (#WIX1003)
            </td>
            <td className="p-1 lg:py-2 lg:px-4 border-b">3</td>
            <td className="p-1 lg:py-2 lg:px-4 border-b">2</td>
          </tr>
          <tr className="bg-gray-200">
            <td className="p-1 lg:py-2 lg:px-4 border-b">WIA1005</td>
            <td className="p-1 lg:py-2 lg:px-4 border-b">
              Network Technology Foundation
            </td>
            <td className="p-1 lg:py-2 lg:px-4 border-b">4</td>
            <td className="p-1 lg:py-2 lg:px-4 border-b">2</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="p-1 lg:py-2 lg:px-4 border-b">WIA1006</td>
            <td className="p-1 lg:py-2 lg:px-4 border-b">Machine Learning</td>
            <td className="p-1 lg:py-2 lg:px-4 border-b">3</td>
            <td className="p-1 lg:py-2 lg:px-4 border-b">2</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="p-1 lg:py-2 lg:px-4 border-b">WIA1007</td>
            <td className="p-1 lg:py-2 lg:px-4 border-b">
              Introduction to Data Science
            </td>
            <td className="p-1 lg:py-2 lg:px-4 border-b">3</td>
            <td className="p-1 lg:py-2 lg:px-4 border-b">1</td>
          </tr>
          <tr className="bg-gray-200">
            <td className="p-1 lg:py-2 lg:px-4 border-b">WIA2001</td>
            <td className="p-1 lg:py-2 lg:px-4 border-b">Database</td>
            <td className="p-1 lg:py-2 lg:px-4 border-b">3</td>
            <td className="p-1 lg:py-2 lg:px-4 border-b">1</td>
          </tr>
          <tr className="bg-gray-200">
            <td className="p-1 lg:py-2 lg:px-4 border-b">WIA2003</td>
            <td className="p-1 lg:py-2 lg:px-4 border-b">
              Probability and Statistics
            </td>
            <td className="p-1 lg:py-2 lg:px-4 border-b">3</td>
            <td className="p-1 lg:py-2 lg:px-4 border-b">1</td>
          </tr>
          <tr className="bg-gray-200">
            <td className="p-1 lg:py-2 lg:px-4 border-b">WIA2004</td>
            <td className="p-1 lg:py-2 lg:px-4 border-b">Operating Systems</td>
            <td className="p-1 lg:py-2 lg:px-4 border-b">4</td>
            <td className="p-1 lg:py-2 lg:px-4 border-b">2</td>
          </tr>
          <tr className="bg-gray-200">
            <td className="p-1 lg:py-2 lg:px-4 border-b">WIA2005</td>
            <td className="p-1 lg:py-2 lg:px-4 border-b">
              Algorithm Design and Analysis (#WIA1002)
            </td>
            <td className="p-1 lg:py-2 lg:px-4 border-b">4</td>
            <td className="p-1 lg:py-2 lg:px-4 border-b">2</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="p-1 lg:py-2 lg:px-4 border-b">WIA2006</td>
            <td className="p-1 lg:py-2 lg:px-4 border-b">
              System Analysis and Design
            </td>
            <td className="p-1 lg:py-2 lg:px-4 border-b">3</td>
            <td className="p-1 lg:py-2 lg:px-4 border-b">1</td>
          </tr>
          <tr className="bg-gray-200">
            <td className="p-1 lg:py-2 lg:px-4 border-b">WIA2007</td>
            <td className="p-1 lg:py-2 lg:px-4 border-b">
              Mobile Application Development
            </td>
            <td className="p-1 lg:py-2 lg:px-4 border-b">4</td>
            <td className="p-1 lg:py-2 lg:px-4 border-b">1</td>
          </tr>
          <tr className="bg-gray-200">
            <td className="p-1 lg:py-2 lg:px-4 border-b">WIA3001</td>
            <td className="p-1 lg:py-2 lg:px-4 border-b">
              Industrial Training *
            </td>
            <td className="p-1 lg:py-2 lg:px-4 border-b">12</td>
            <td className="p-1 lg:py-2 lg:px-4 border-b">1</td>
          </tr>
          <tr className="bg-gray-200">
            <td className="p-1 lg:py-2 lg:px-4 border-b">WIA3002</td>
            <td className="p-1 lg:py-2 lg:px-4 border-b">
              Academic Project I **
            </td>
            <td className="p-1 lg:py-2 lg:px-4 border-b">3</td>
            <td className="p-1 lg:py-2 lg:px-4 border-b">2</td>
          </tr>
          <tr className="bg-gray-200">
            <td className="p-1 lg:py-2 lg:px-4 border-b">WIA3003</td>
            <td className="p-1 lg:py-2 lg:px-4 border-b">
              Academic Project II (#WIA3002)
            </td>
            <td className="p-1 lg:py-2 lg:px-4 border-b">5</td>
            <td className="p-1 lg:py-2 lg:px-4 border-b">1</td>
          </tr>
        </tbody>
      </table>
      <p>
        The differences lie in some specialized AI courses, such as Machine
        Learning, and certain elective courses, like Natural Language
        Processing, Computer Vision and Pattern Recognition, Practical
        Artificial Intelligence, and Deep Learning. In the AI program at UM,
        students need to choose 10 department electives out of a total of 14
        offered, and not all of which are specifically related to AI.
      </p>
      <table className="min-w-full border text-sm lg:text-base">
        <thead>
          <tr className="bg-gray-300">
            <th className="p-1 lg:py-2 lg:px-4 border-b bg-gray-200">
              COURSE CODE
            </th>
            <th className="p-1 lg:py-2 lg:px-4 border-b bg-gray-200">
              SPECIALIZATION ELECTIVE COURSES (Choose only 10 courses)
            </th>
            <th className="p-1 lg:py-2 lg:px-4 border-b bg-gray-200">
              CREDITS
            </th>
            <th className="p-1 lg:py-2 lg:px-4 border-b bg-gray-200">TERM</th>
          </tr>
        </thead>
        <tbody>
          <tr className="hover:bg-gray-100">
            <td className="p-1 lg:py-2 lg:px-4 border-b">WIC2008</td>
            <td className="p-1 lg:py-2 lg:px-4 border-b">Internet of Things</td>
            <td className="p-1 lg:py-2 lg:px-4 border-b">3</td>
            <td className="p-1 lg:py-2 lg:px-4 border-b">2</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="p-1 lg:py-2 lg:px-4 border-b">WID2001</td>
            <td className="p-1 lg:py-2 lg:px-4 border-b">
              Knowledge Representation and Reasoning
            </td>
            <td className="p-1 lg:py-2 lg:px-4 border-b">3</td>
            <td className="p-1 lg:py-2 lg:px-4 border-b">2</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="p-1 lg:py-2 lg:px-4 border-b">WID2002</td>
            <td className="p-1 lg:py-2 lg:px-4 border-b">
              Computing Mathematics II
            </td>
            <td className="p-1 lg:py-2 lg:px-4 border-b">3</td>
            <td className="p-1 lg:py-2 lg:px-4 border-b">2</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="p-1 lg:py-2 lg:px-4 border-b">WID2003</td>
            <td className="p-1 lg:py-2 lg:px-4 border-b">Cognitive Science</td>
            <td className="p-1 lg:py-2 lg:px-4 border-b">3</td>
            <td className="p-1 lg:py-2 lg:px-4 border-b">2</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="p-1 lg:py-2 lg:px-4 border-b">WID3001</td>
            <td className="p-1 lg:py-2 lg:px-4 border-b">
              Functional and Logic Programming
            </td>
            <td className="p-1 lg:py-2 lg:px-4 border-b">3</td>
            <td className="p-1 lg:py-2 lg:px-4 border-b">2</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="p-1 lg:py-2 lg:px-4 border-b">WID3002</td>
            <td className="p-1 lg:py-2 lg:px-4 border-b">
              Natural Language Processing
            </td>
            <td className="p-1 lg:py-2 lg:px-4 border-b">3</td>
            <td className="p-1 lg:py-2 lg:px-4 border-b">2</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="p-1 lg:py-2 lg:px-4 border-b">WID3007</td>
            <td className="p-1 lg:py-2 lg:px-4 border-b">
              Fuzzy Logic (#WIX1001)
            </td>
            <td className="p-1 lg:py-2 lg:px-4 border-b">3</td>
            <td className="p-1 lg:py-2 lg:px-4 border-b">1</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="p-1 lg:py-2 lg:px-4 border-b">WID3010</td>
            <td className="p-1 lg:py-2 lg:px-4 border-b">Autonomous Robots</td>
            <td className="p-1 lg:py-2 lg:px-4 border-b">3</td>
            <td className="p-1 lg:py-2 lg:px-4 border-b">2</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="p-1 lg:py-2 lg:px-4 border-b">WID3011</td>
            <td className="p-1 lg:py-2 lg:px-4 border-b">Deep Learning</td>
            <td className="p-1 lg:py-2 lg:px-4 border-b">3</td>
            <td className="p-1 lg:py-2 lg:px-4 border-b">1</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="p-1 lg:py-2 lg:px-4 border-b">WID3012</td>
            <td className="p-1 lg:py-2 lg:px-4 border-b">
              Evolutionary Computation
            </td>
            <td className="p-1 lg:py-2 lg:px-4 border-b">3</td>
            <td className="p-1 lg:py-2 lg:px-4 border-b">1</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="p-1 lg:py-2 lg:px-4 border-b">WID3013</td>
            <td className="p-1 lg:py-2 lg:px-4 border-b">
              Computer Vision and Pattern Recognition
            </td>
            <td className="p-1 lg:py-2 lg:px-4 border-b">3</td>
            <td className="p-1 lg:py-2 lg:px-4 border-b">1</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="p-1 lg:py-2 lg:px-4 border-b">WID3014</td>
            <td className="p-1 lg:py-2 lg:px-4 border-b">
              Practical Artificial Intelligence
            </td>
            <td className="p-1 lg:py-2 lg:px-4 border-b">3</td>
            <td className="p-1 lg:py-2 lg:px-4 border-b">1</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="p-1 lg:py-2 lg:px-4 border-b">WID3015</td>
            <td className="p-1 lg:py-2 lg:px-4 border-b">Numerical Analysis</td>
            <td className="p-1 lg:py-2 lg:px-4 border-b">3</td>
            <td className="p-1 lg:py-2 lg:px-4 border-b">1</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="p-1 lg:py-2 lg:px-4 border-b">WIG3004</td>
            <td className="p-1 lg:py-2 lg:px-4 border-b">Virtual Reality</td>
            <td className="p-1 lg:py-2 lg:px-4 border-b">3</td>
            <td className="p-1 lg:py-2 lg:px-4 border-b">2</td>
          </tr>
        </tbody>
      </table>
      <p>
        From the list of courses you provided, the ones that are directly about
        AI specialization are:{" "}
        <span className="font-bold">
          Natural Language Processing, Deep Learning, Evolutionary Computation,
          Computer Vision and Pattern Recognition{" "}
        </span>
        and
        <span className="font-bold">
          {" "}
          Practical Artificial Intelligence.
        </span>{" "}
        These courses focus specifically on topics and techniques related to
        artificial intelligence.
      </p>
    </div>
  </div>
);
const ContentContent = <div>None</div>;
const ProjectContent = <div>None</div>;

export default page;
