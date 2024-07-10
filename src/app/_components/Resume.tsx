"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Container from "./Container";
import DirectoryBar from "./DirectoryBar";
import Section from "./Section";
import FadeInContainer from "./FadeInContainer";
import { LockClosedIcon, LockOpenIcon } from "@heroicons/react/24/outline";

const ResumePage: React.FC = () => {
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);
  const [visible, setVisible] = useState(false);
  const [isVerified, setIsVerified] = useState(false);

  useEffect(() => {
    const verified = localStorage.getItem("isVerified");
    if (verified === "true") {
      setIsVerified(true);
    } else {
      router.push("/verification"); // Redirect to the verification page if not verified
    }
  }, [router]);

  const handleRemoveVerification = () => {
    localStorage.removeItem("isVerified");
    setIsVerified(false);
    router.push("/verification"); // Redirect to the verification page
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    setVisible(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setVisible(false);
  };

  return (
    <main className="flex flex-col items-center justify-between my-24">
      {isVerified ? (
        <Container>
          <div className="flex w-full p-6 lg:px-32 justify-between ">
            <DirectoryBar />
            <div className="relatice">
              <button
                onClick={handleRemoveVerification}
                className="bg-green-500 text-white p-2 rounded hover:bg-red-500 transition-all duration-500"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                {isHovered ? (
                  <LockClosedIcon className="h-6 w-6" />
                ) : (
                  <LockOpenIcon className="h-6 w-6" />
                )}
              </button>
              {visible && (
                <div className="absolute bg-black bg-opacity-30 rounded-md p-2">
                  <span className="text-xs text-white font-arial">
                    Hide My Resume
                  </span>
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-col w-full px-6 lg:px-32">
            <Section
              title={"履歴"}
              description={
                "This is a brief introduction about myself and my resume."
              }
            />
            <FadeInContainer>
              <div className="flex flex-col items-center justify-center py-12">
                <div className="flex flex-col items-start justify-center">
                  <p className="text-justify">
                    Hi, I&apos;m Maa or <span className="">Dōmuki</span>{" "}
                    (Nickname). I am 24 years old. I graduated from UPM with a
                    bachelor's degree in Software Engineering and am currently
                    pursuing a master's degree at the University of Technology.
                    I speak fluent English and am a native Chinese speaker. My
                    study interests are Web3, IoT, Artificial Intelligence, and
                    Blockchain.
                  </p>
                </div>
              </div>
            </FadeInContainer>
            <FadeInContainer>
              <div className="pt-10">
                <div className="title ">
                  <span className="text-lg font-bold">EDUCATION</span>
                </div>
                <div className="w-full h-px bg-black"></div>
                <div className="py-2">
                  <div className="flex w-full font-bold">
                    <div className="flex lg:flex-1">
                      <a href="https://www.upm.edu.my/">
                        <span className="hover:underline">
                          University Putra Malaysia (UPM)
                        </span>
                      </a>
                    </div>
                    <div className="flex lg:flex-1 text-right justify-end">
                      <span>09/2019 – 09/2023</span>
                    </div>
                  </div>
                  <div className="flex w-full">
                    <div className="flex lg:flex-1">B.S.E</div>
                    <div className="flex text-right justify-end">
                      <span>
                        Department of Software Engineering, Faculty of Computer
                        Science and Information Technology
                      </span>
                    </div>
                  </div>
                  <div className="flex w-full">
                    <div className="flex lg:flex-1">
                      • Major in Software Engineering
                    </div>
                    <div className="flex text-right justify-end">
                      <span>Second Class Upper Honors</span>
                    </div>
                  </div>
                  <div className="flex w-full">
                    <div className="flex lg:flex-1">• Core Curriculums:</div>
                    <div className="flex lg:flex-1 text-right justify-end">
                      <span>
                        Java Programming, Statistics, Discrete Mathematics, Web
                        and Mobile Application Development, Software
                        Architecture, Electronic commerce
                      </span>
                    </div>
                  </div>
                </div>
                <div className="py-2">
                  <div className="flex w-full font-bold">
                    <div className="flex lg:flex-1">
                      <a href="https://www.polyu.edu.hk/">
                        <span className="hover:underline">
                          Hong Kong Polytechnic University (PolyU)
                        </span>
                      </a>
                    </div>
                    <div className="flex lg:flex-1 text-right justify-end">
                      <span>09/2024 – Present</span>
                    </div>
                  </div>
                  <div className="flex w-full">
                    <div className="flex lg:flex-1">MSc</div>
                    <div className="flex text-right justify-end">
                      <span>
                        Department of Computing, Faculty of Engineering
                      </span>
                    </div>
                  </div>
                  <div className="flex w-full">
                    <div className="flex lg:flex-1">• Major in Computing</div>
                    <div className="flex text-right justify-end">
                      <span>--</span>
                    </div>
                  </div>
                </div>
                <div className="py-2">
                  <div className="flex w-full font-bold">
                    <div className="flex lg:flex-1">
                      <span>Huawei Talent Online HCIA-AI V3.0 Course</span>
                    </div>
                    <div className="flex lg:flex-1 text-right justify-end">
                      <span>06/2021 – 08/2021</span>
                    </div>
                  </div>
                  <div className="flex flex-col w-full">
                    <span>
                      • Learn the conception, hot fields and case scenarios of
                      AI
                    </span>
                    <span>
                      • Studied the theoretical foundation of Machine Learning
                    </span>
                  </div>
                </div>
              </div>
            </FadeInContainer>
            <FadeInContainer>
              <div className="pt-10">
                <div className="title ">
                  <span className="text-lg font-bold">AWARDS AND HONORS</span>
                </div>
                <div className="w-full h-px bg-black"></div>
                <div className="py-2">
                  <div className="flex w-full">
                    <div className="flex lg:flex-1">
                      <span>
                        Certificate of Huawei Certified ICT Associate in
                        Artificial Intelligence (HCIA-AI)
                      </span>
                    </div>
                    <div className="flex text-right justify-end">
                      <span>09/2021</span>
                    </div>
                  </div>
                  <div className="flex w-full">
                    <div className="flex lg:flex-1">
                      Third Place in Huawei ICT Competition Malaysia 2021-2022
                    </div>
                    <div className="flex text-right justify-end">
                      <span>11/2021</span>
                    </div>
                  </div>
                </div>
              </div>
            </FadeInContainer>
            <FadeInContainer>
              <div className="pt-10">
                <div className="title ">
                  <span className="text-lg font-bold">RESEARCH EXPERIENCE</span>
                </div>
                <div className="w-full h-px bg-black"></div>
                <div className="py-2">
                  <div className="flex w-full">
                    <div className="flex lg:flex-1">
                      <span className="font-bold">
                        UPM, Department of Software Engineering
                      </span>
                    </div>
                    <div className="flex text-right justify-end">
                      <p>
                        <span className="font-bold">Supervisor: </span>
                        <a href="https://profile.upm.edu.my/kengyap">
                          <span className="hover:underline">
                            Dr. Ng Keng Yap
                          </span>
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="flex w-full">
                    <div className="flex lg:flex-1">
                      <p>
                        <span className="font-bold">Project 1: </span>
                        <span>
                          Momcare Smart Assistant Software for Pregnant Women
                        </span>
                      </p>
                    </div>
                    <div className="flex text-right justify-end">
                      <span>10/2021 – 4/2022</span>
                    </div>
                  </div>
                  <div className="flex w-full">
                    <p>
                      <span className="font-bold">Objective: </span>
                      <span>
                        To develop a smart assistant software aimed at providing
                        personalized health management and support for pregnant
                        women, thereby improving their health during pregnancy.
                        This project is a collaboration between the UPM
                        Department of Software Engineering and Columbia Asia
                        Hospital in Malaysia.
                      </span>
                    </p>
                  </div>
                  <div className="pl-6">
                    <div className="flex w-full">
                      • Researched with doctors and pregnant women to determine
                      software requirements.
                    </div>
                    <div className="flex w-full">
                      • Designed user-friendly interface using Figma; developed
                      with Flutter and Dart.
                    </div>
                    <div className="flex w-full">
                      • Used Laravel and PHP for back-end services, including
                      data storage, processing, and user management. Generated
                      databases, URIs, and handled database operations.
                    </div>
                    <div className="flex w-full">
                      • Developed core modules for health data recording,
                      reminders, and personalized suggestions. Created
                      controllers and models using Flutter on the client side.
                    </div>
                    <div className="flex w-full">
                      • Created algorithms to analyze user-entered health data
                      and provide advice.
                    </div>
                    <div className="flex w-full">
                      • Conducted software testing, collected user feedback, and
                      continuously optimized performance and user experience.
                    </div>
                  </div>
                  <div className="flex w-full mt-2">
                    <div className="flex lg:flex-1">
                      <p>
                        <span className="font-bold">Project 2: </span>
                        <span>Smart Cradle System for Infants</span>
                      </p>
                    </div>
                    <div className="flex text-right justify-end">
                      <span>10/2022 – 02/2023</span>
                    </div>
                  </div>
                  <div className="flex w-full">
                    <p>
                      <span className="font-bold">Objective: </span>
                      <span>
                        To design and develop a comprehensive system integrating
                        software and hardware solutions to assist parents in
                        monitoring and caring for their babies.
                      </span>
                    </p>
                  </div>
                  <div className="pl-6">
                    <div className="flex w-full">
                      • Designed intuitive user interfaces for both mobile and
                      management applications to facilitate easy interaction and
                      monitoring.
                    </div>
                    <div className="flex w-full">
                      • Created mobile client applications using Flutter and a
                      management application with the React framework{" "}
                    </div>
                    <div className="flex w-full">
                      • Implemented Bluetooth and WIFI for command sending, data
                      sharing and information interaction.
                    </div>
                    <div className="flex w-full">
                      • Utilized Python on Raspberry Pi to develop hardware
                      components for real-time monitoring and control of the
                      smart cradle system.
                    </div>
                    <div className="flex w-full">
                      • Implemented features such as baby health monitoring,
                      remote control, and automated responses to ensure optimal
                      care and safety.
                    </div>
                  </div>
                </div>
              </div>
            </FadeInContainer>
            <FadeInContainer>
              <div className="pt-10">
                <div className="title ">
                  <span className="text-lg font-bold">
                    INDUSTRIAL EXPERIENCE
                  </span>
                </div>
                <div className="w-full h-px bg-black"></div>
                <div className="py-2">
                  <div className="flex w-full">
                    <div className="flex lg:flex-1">
                      <a href="https://eos-systems.com.my/">
                        <span className="font-bold hover:underline">
                          EOS Systems Sdn. Bhd.
                        </span>
                      </a>
                    </div>
                    <div className="flex text-right justify-end">
                      <p>
                        <span className="font-bold">
                          Industrial Supervisor:{" "}
                        </span>

                        <span className="hover:underline">Benjamin Lim</span>
                      </p>
                    </div>
                  </div>
                  <div className="flex w-full">
                    <div className="flex lg:flex-1">
                      <p>
                        <span className="font-bold">Project: </span>
                        <a href="https://play.google.com/store/apps/details?id=com.eos_credit.eos_credit&pli=1">
                          <span className="hover:underline">
                            EOS Credit Mobile App for Online Loan
                          </span>
                        </a>
                      </p>
                    </div>
                    <div className="flex text-right justify-end">
                      <span>03/2023 – 03/2024</span>
                    </div>
                  </div>
                  <div className="flex w-full">
                    <p>
                      <span className="font-bold">Objective: </span>
                      <span>
                        To develop an innovative financial assistance app that
                        offers secure, and flexible loan solutions for
                        individuals in need of quick monetary support. This
                        project is a collaboration between the UPM Department of
                        Software Engineering and EOS Systems Sdn. Bhd.
                      </span>
                    </p>
                  </div>
                  <div className="pl-6">
                    <div className="flex w-full">
                      • Utilized Flutter framework to develop EOS Credit, a
                      mobile loan application.
                    </div>
                    <div className="flex w-full">
                      • Met specific requirements and design criteria provided
                      by EOS System Sdn. Bhd.
                    </div>
                    <div className="flex w-full">
                      • Developed and completed the project during an
                      internship.
                    </div>
                    <div className="flex w-full">
                      • Successfully released EOS Credit in the Malaysian region
                      on the Google Play Store.
                    </div>
                    <div className="flex w-full">
                      • Created and produced a demonstration commercial video to
                      promote the app.
                    </div>
                  </div>
                </div>
                <div className="py-2">
                  <div className="flex w-full">
                    <div className="flex lg:flex-1">
                      <a href="https://eos-systems.com.my/">
                        <span className="font-bold hover:underline">
                          Handan Feituo Information Technology Co. LTD
                        </span>
                      </a>
                    </div>
                    <div className="flex text-right justify-end">
                      <p>
                        <span className="font-bold">
                          Industrial Supervisor:{" "}
                        </span>
                        <span className="hover:underline">Ma Gang</span>
                      </p>
                    </div>
                  </div>
                  <div className="flex w-full">
                    <div className="flex lg:flex-1">
                      <p>
                        <span className="font-bold">Position: </span>

                        <span className="hover:underline">
                          Assistant Software Engineer
                        </span>
                      </p>
                    </div>
                    <div className="flex text-right justify-end">
                      <span>07/2020 – 09/2020</span>
                    </div>
                  </div>
                  <div className="flex w-full">
                    <p>
                      <span className="font-bold">Objective: </span>
                      <span>
                        To assist in designing, developing, and testing web
                        front-end functions, create user-friendly cross-platform
                        applications, collaborate with the back-end team, and
                        research new web technologies to enhance user
                        experience.
                      </span>
                    </p>
                  </div>
                  <div className="pl-6">
                    <div className="flex w-full">
                      • Assist in Web front-end functions involved in the
                      project in design, development and testing:
                    </div>
                    <div className="flex w-full">
                      • Create user-friendly, cross-platform applications with
                      web front-end technology and continuously improve and
                      enhance the user experience
                    </div>
                    <div className="flex w-full">
                      • Work with the back end team to develop the front end of
                      the site;
                    </div>
                    <div className="flex w-full">
                      • Assist in web frontier technology research and new
                      technology research.
                    </div>
                  </div>
                </div>
              </div>
            </FadeInContainer>
            <FadeInContainer>
              <div className="pt-10">
                <div className="title ">
                  <span className="text-lg font-bold">PROFESSIONAL SKILLS</span>
                </div>
                <div className="w-full h-px bg-black"></div>
                <div className="py-2">
                  <div className="flex">
                    <p>
                      <span className="font-bold">Programming: </span>
                      <span>
                        Python, Dart, Java, HTML, CSS, JavaScript, SQL, UML
                      </span>
                    </p>
                  </div>
                  <div className="flex">
                    <p>
                      <span className="font-bold">Software: </span>
                      <span>
                        Visual Studio Code, GitHub, Trello, Microsoft Office
                        (Word, Excel, PowerPoint), MySQL
                      </span>
                    </p>
                  </div>
                  <div className="flex">
                    <p>
                      <span className="font-bold">Language: </span>
                      <span>
                        English IELTS 7.0 (Listening 7, Reading 6.5, Writing 7,
                        Speaking 7), Chinese (Native)
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </FadeInContainer>
            <FadeInContainer>
              <div className="pt-10">
                <div className="title ">
                  <span className="text-lg font-bold">
                    EXTRACURRICULAR ACTIVITY
                  </span>
                </div>
                <div className="w-full h-px bg-black"></div>
                <div className="py-2">
                  <div className="flex w-full">
                    <div className="flex lg:flex-1">
                      <span>UPM Softball Volunteer Team</span>
                    </div>
                    <div className="flex lg:flex-1">
                      <span className="italic">Volunteer</span>
                    </div>
                    <div className="flex lg:flex-1 text-right justify-end">
                      <span>10/2019 - 11/2019</span>
                    </div>
                  </div>
                  <div className="flex w-full">
                    <span>
                      • Helped manage items, guided students in route, and
                      assisted in decorating and setting up the event
                      environment.
                    </span>
                  </div>
                </div>
                <div className="py-2">
                  <div className="flex w-full">
                    <div className="flex lg:flex-1">
                      <span>Presentation in Student Orientation Week</span>
                    </div>
                    <div className="flex lg:flex-1">
                      <span className="italic">Representative Speaker</span>
                    </div>
                    <div className="flex lg:flex-1 text-right justify-end">
                      <span>12/10/2021 - 13/10/2021</span>
                    </div>
                  </div>
                  <div className="flex w-full">
                    <span>
                      • Contributed as a speaker to give a speech titled
                      &quot;International Learning Online Sharing
                      Experiences&quot; at Minggu Perkasa Putra (MPP).
                    </span>
                  </div>
                </div>
                <div className="py-2">
                  <div className="flex w-full">
                    <div className="flex lg:flex-1">
                      <span>IELTS Assistant</span>
                    </div>
                    <div className="flex lg:flex-1">
                      <span className="italic">Teaching Assistant</span>
                    </div>
                    <div className="flex lg:flex-1 text-right justify-end">
                      <span>10/2023 – 02/2024</span>
                    </div>
                  </div>
                  <div className="flex w-full">
                    <span>
                      • Passed the interview and worked as an IELTS teaching
                      assistant, such as helping students practice speaking,
                      organizing exams and assisting with review, etc.
                    </span>
                  </div>
                </div>
              </div>
            </FadeInContainer>
          </div>
        </Container>
      ) : (
        <div className="flex w-full h-screen items-center justify-center">
          
        </div>
      )}
    </main>
  );
};

export default ResumePage;
