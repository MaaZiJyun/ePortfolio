import Link from "next/link";
import React from "react";

const Introduction = () => {
  return (
    <>
      <div className="space-y-5 text-justify">
        <div className="text-justify space-y-2">
          <h2 className="subpage-h2">Purpose</h2>
          <span className="subpage-comment">
            (The bried introduction about why should I learn this subject, what
            I should learn and what I can obtain after my study.)
          </span>
          <p>
            During undergraduate study in Software Engineering, There is no
            Artificial Intelligence major provided in UPM, and at that time, I
            didn't have a clear direction for my future academic path yet.
            Therefore, I missed the best opportunity to study artificial
            intelligence 4 years ago.
          </p>
          <p>
            Unfortunately, the decision I made four years ago has affected my
            current choices. Due to my lack of background in artificial
            intelligence, I was unsuccessful in my graduate school applications.
            However, motivated by the willing to follow the trend of
            technological revolution and the fear of being replaced, I have no
            choice but to utilize online resources to study the necessary
            knowledge in Artificial Intelligence field independently.
          </p>
          <p>
            The primary purpose of learning is to narrow the gap caused by my
            previous education and acquire a comprehensive understanding of
            Artificial Intelligence. By doing so, I aim to equip myself with the
            skills in this domain and to stay competitive in today's job market
            and satisfy personal interest of study.
          </p>
          <p>
            The outcomes of this initiative are multifaceted. Firstly, I intend
            to learn basic knowledge in general AI techniques, which will enable
            me to apply them to solve real-world problems. Secondly, I aim to
            enhance my problem-solving abilities, strategies and thinking skills
            through practical projects and hands-on experience. Lastly, I will
            write some detailed learning logs that can serve as records for
            learning.
          </p>
        </div>
        <div className="space-y-5 text-justify">
          <h2 className="subpage-h2">Learning Structure</h2>
          <p>
            The conclusion is that: to supplement the lack of knowledge in
            artificial intelligence since my undergraduate, the focus of my
            study will be on the following areas:
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
          <h2 className="subpage-h2">Discussion</h2>
          <p>
            The specific course names and contents may vary from different
            universities. My bachelor study was completed from UPM in Malaysia.
            Therefore, to specified the case, the bachelor of artificial
            intelligence in University of Malaya's (UM), the best university in
            Malaysia, will be taken as reference for analysis. In fact, the
            undergraduate program in Artificial Intelligence is not
            significantly different from other types of computer science
            programs.
          </p>
          <p>
            Most of the required courses and general education courses are
            essentially the same. By referring to UM undergraduate curriculum
            for Artificial Intelligence,
            <span className="font-bold">
              {" "}
              the university public and faculty general courses are almost the
              same, such as Basic Malay Language, Computer Systems and
              Organization, Database and Data Structures
            </span>
            . (There are mainly 4 categories about university courses:
            university core, faculty core, programme core and specialization
            elective)
          </p>
          <p>
            The courses with <span className="bg-gray-200">gray-200</span>{" "}
            background are similar to the courses in B.S.E in UPM
          </p>

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
                <td className="p-1 lg:py-2 lg:px-4 border-b">
                  Machine Learning
                </td>
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
                <td className="p-1 lg:py-2 lg:px-4 border-b">
                  Operating Systems
                </td>
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
                <th className="p-1 lg:py-2 lg:px-4 border-b bg-gray-200">
                  TERM
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-gray-100">
                <td className="p-1 lg:py-2 lg:px-4 border-b">WIC2008</td>
                <td className="p-1 lg:py-2 lg:px-4 border-b">
                  Internet of Things
                </td>
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
                <td className="p-1 lg:py-2 lg:px-4 border-b">
                  Cognitive Science
                </td>
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
                <td className="p-1 lg:py-2 lg:px-4 border-b">
                  Autonomous Robots
                </td>
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
                <td className="p-1 lg:py-2 lg:px-4 border-b">
                  Numerical Analysis
                </td>
                <td className="p-1 lg:py-2 lg:px-4 border-b">3</td>
                <td className="p-1 lg:py-2 lg:px-4 border-b">1</td>
              </tr>
              <tr className="hover:bg-gray-100">
                <td className="p-1 lg:py-2 lg:px-4 border-b">WIG3004</td>
                <td className="p-1 lg:py-2 lg:px-4 border-b">
                  Virtual Reality
                </td>
                <td className="p-1 lg:py-2 lg:px-4 border-b">3</td>
                <td className="p-1 lg:py-2 lg:px-4 border-b">2</td>
              </tr>
            </tbody>
          </table>
          <h2 className="subpage-h2">Conclusion</h2>
          <p>
            From the above two tables, the following conclusions can be drawn:
            1. The general education courses in both universities and colleges
            are 100% identical; 2. The similarity of the core specialized
            courses is an impressive 78%. In the SPECIALIZATION ELECTIVE
            courses, only 35% are directly related to AI. Even if students
            choose all AI courses within the SPECIALIZATION ELECTIVE, they can
            only complete 50% of the total credits required for the
            SPECIALIZATION ELECTIVE.
          </p>
          <p>
            The courses that are directly about AI specialization are:{" "}
            <span className="font-bold">
              Natural Language Processing, Deep Learning, Evolutionary
              Computation, Computer Vision and Pattern Recognition{" "}
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
    </>
  );
};

export default Introduction;
