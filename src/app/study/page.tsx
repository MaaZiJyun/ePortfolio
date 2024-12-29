import AnimeHeroTitle from "../_components/AnimeHeroTitle";
import Container from "../_components/Container";
import StudyNavBoard from "../_components/StudyNavBoard";

const page = () => {
  return (
    <main className="flex flex-col items-center justify-between">
      <Container>
        <div className="flex flex-col items-center justify-between">
          <div className="relative w-full">
            <div className="flex flex-col items-center justify-center font-arial bg-yellow-500 mb-48 lg:mb-20 text-white">
              <div className="w-full lg:w-2/3">
                <AnimeHeroTitle
                  title={"自習委員会"}
                  description={"自分で楽しんでいるだけ (笑)"}
                />
              </div>
            </div>
            <div className="absolute bottom-0 w-full">
              <div className="flex items-center justify-center">
                <div className="flex items-center justify-center bg-white lg:w-1/2 rounded-xl shadow-xl py-6 px-10 text-justify h-1/2 lg:h-40">
                  <p className="text-sm font-arial">
                    The Self-Study Committee
                    <span className="italic">, "自習委員会",</span> is an
                    organization dedicated to providing support for members in
                    their independent learning pursuits. Their goal is to help
                    members explore areas of interest or learn knowledge that
                    are not able to access in courses easily. They encourage
                    members to pursue personal interests and develop new skills,
                    with the ultimate aim of applying their knowledge and ideas
                    to real-world problems. It is not focused on exam
                    preparation but rather on fostering a passion for learning
                    and practical application.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full px-6 lg:px-32">
            <div className="flex flex-col w-full items-center justify-center text-justify my-24">
              <h1 className="text-4xl my-3">行動計画</h1>
              <p className="mb-12 text-base">Action Plan</p>
              <div className="lg:flex w-full items-stretch justify-center text-justify lg:space-x-10">
                <div className="lg:flex w-full lg:w-1/3 items-center justify-center text-justify lg:space-x-10">
                  <div className="flex flex-col w-full h-full rounded-xl shadow-xl items-center justify-center p-6">
                    <h1 className="font-arial text-xl">30日間の出席記録</h1>
                    <p className="mb-6 text-sm">30-Day Check-in Record</p>
                    <table className="border-collapse rounded-full font-arial text-gray-300">
                      <tbody>
                        <tr>
                          <td className="">
                            <div className="flex items-center justify-center rounded-full h-12 w-12 text-center">
                              1
                            </div>
                          </td>
                          <td className="">
                            <div className="flex items-center justify-center rounded-full h-12 w-12 text-center">
                              2
                            </div>
                          </td>
                          <td className="">
                            <div className="flex items-center justify-center rounded-full h-12 w-12 text-center">
                              3
                            </div>
                          </td>
                          <td className="">
                            <div className="flex items-center justify-center rounded-full h-12 w-12 text-center">
                              4
                            </div>
                          </td>
                          <td className="">
                            <div className="flex items-center justify-center rounded-full h-12 w-12 text-center">
                              5
                            </div>
                          </td>
                          <td className="">
                            <div className="flex items-center justify-center rounded-full h-12 w-12 text-center">
                              6
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="">
                            <div className="flex items-center justify-center rounded-full h-12 w-12 text-center">
                              7
                            </div>
                          </td>
                          <td className="">
                            <div className="flex items-center justify-center rounded-full h-12 w-12 text-center">
                              8
                            </div>
                          </td>
                          <td className="">
                            <div className="flex items-center justify-center rounded-full h-12 w-12 text-center">
                              9
                            </div>
                          </td>
                          <td className="">
                            <div className="flex items-center justify-center rounded-full h-12 w-12 text-center">
                              10
                            </div>
                          </td>
                          <td className="">
                            <div className="flex items-center justify-center rounded-full h-12 w-12 text-center">
                              11
                            </div>
                          </td>
                          <td className="">
                            <div className="flex items-center justify-center rounded-full h-12 w-12 text-center">
                              12
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="">
                            <div className="flex items-center justify-center rounded-full h-12 w-12 text-center">
                              13
                            </div>
                          </td>
                          <td className="">
                            <div className="flex items-center justify-center rounded-full h-12 w-12 text-center">
                              14
                            </div>
                          </td>
                          <td className="">
                            <div className="flex items-center justify-center rounded-full h-12 w-12 text-center bg-green-400 text-black">
                              15
                            </div>
                          </td>
                          <td className="">
                            <div className="flex items-center justify-center rounded-full h-12 w-12 text-center">
                              16
                            </div>
                          </td>
                          <td className="">
                            <div className="flex items-center justify-center rounded-full h-12 w-12 text-center">
                              17
                            </div>
                          </td>
                          <td className="">
                            <div className="flex items-center justify-center rounded-full h-12 w-12 text-center">
                              18
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="">
                            <div className="flex items-center justify-center rounded-full h-12 w-12 text-center">
                              19
                            </div>
                          </td>
                          <td className="">
                            <div className="flex items-center justify-center rounded-full h-12 w-12 text-center bg-yellow-300 text-black">
                              20
                            </div>
                          </td>
                          <td className="">
                            <div className="flex items-center justify-center rounded-full h-12 w-12 text-center">
                              21
                            </div>
                          </td>
                          <td className="">
                            <div className="flex items-center justify-center rounded-full h-12 w-12 text-center">
                              22
                            </div>
                          </td>
                          <td className="">
                            <div className="flex items-center justify-center rounded-full h-12 w-12 text-center">
                              23
                            </div>
                          </td>
                          <td className="">
                            <div className="flex items-center justify-center rounded-full h-12 w-12 text-center">
                              24
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="">
                            <div className="flex items-center justify-center rounded-full h-12 w-12 text-center">
                              25
                            </div>
                          </td>
                          <td className="">
                            <div className="flex items-center justify-center rounded-full h-12 w-12 text-center">
                              26
                            </div>
                          </td>
                          <td className="">
                            <div className="flex items-center justify-center rounded-full h-12 w-12 text-center">
                              27
                            </div>
                          </td>
                          <td className="">
                            <div className="flex items-center justify-center rounded-full h-12 w-12 text-center bg-red-200 text-black">
                              28
                            </div>
                          </td>
                          <td className="">
                            <div className="flex items-center justify-center rounded-full h-12 w-12 text-center">
                              29
                            </div>
                          </td>
                          <td className="">
                            <div className="flex items-center justify-center rounded-full h-12 w-12 text-center bg-green-200 text-black">
                              30
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="lg:flex flex-col w-full lg:w-2/3 items-center justify-center text-justify space-y-2 mt-12 lg:mt-2">
                  <div className="flex flex-col w-full rounded-xl items-start justify-center p-3">
                    <span className="mb-3">
                      Complete online courses on the basics of machine learning
                      (e.g., Coursera’s “Machine Learning” by Andrew Ng).
                    </span>
                    <div className="w-full h-px bg-gray-200"></div>
                  </div>
                  <div className="flex flex-col w-full rounded-xl items-start justify-center p-3">
                    <span className="mb-3">
                      Study fundamental algorithms like linear regression,
                      logistic regression, and decision trees.
                    </span>
                    <div className="w-full h-px bg-gray-200"></div>
                  </div>
                  <div className="flex flex-col w-full rounded-xl items-start justify-center p-3">
                    <span className="mb-3">
                      Work through example problems and exercises in a Python
                      notebook.
                    </span>
                    <div className="w-full h-px bg-gray-200"></div>
                  </div>
                  <div className="flex flex-col w-full rounded-xl items-start justify-center p-3">
                    <span className="mb-3">
                      Review key concepts and write a summary of what you’ve
                      learned.
                    </span>
                    <div className="w-full h-px bg-gray-200"></div>
                  </div>
                  <div className="flex flex-col w-full rounded-xl items-start justify-center p-3">
                    <span className="mb-3">
                      Study neural networks and deep learning basics using
                      TensorFlow or PyTorch.
                    </span>
                    <div className="w-full h-px bg-gray-200"></div>
                  </div>
                  <div className="flex flex-col w-full rounded-xl items-start justify-center p-3">
                    <span className="mb-3">
                      Implement a basic neural network and convolutional neural
                      network (CNN) model.
                    </span>
                    <div className="w-full h-px bg-gray-200"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full px-12 lg:px-32">
            <div className="w-full h-1 bg-red-500"></div>
          </div>
          <div className="flex flex-col w-full px-6 lg:px-32">
            <div className="flex flex-col w-full items-center justify-center text-justify my-24">
              <h1 className="text-4xl my-3">学習の方法論</h1>
              <p>Methodology of Learning</p>
              <p className="mt-12 text-base">
                <span className="font-bold">Introduction: </span>Agile methods
                were originally designed for software development, but their
                core principles, such as iterative progress, continuous
                feedback, and flexibility in responding to change, have also
                been widely applied in other areas, including learning and
                personal development. Using the engineering thinking of
                "requirements, design, development, testing, practice, and
                review" to guide learning is a systematic approach that can help
                learners clarify goals, plan steps, execute tasks, and
                continuously improve.
              </p>
            </div>
            <div className="lg:flex w-full items-start justify-center text-justify lg:space-x-10">
              <div className="flex flex-col lg:w-1/2 space-y-10">
                <div className="space-y-4">
                  <h1 className="text-xl font-bold">1. Target Setting</h1>
                  <p>
                    In this initial stage, identify your learning goals and
                    objectives. Determine what knowledge or skills you need to
                    acquire and why they are important. This phase involves
                    understanding your motivation for learning and setting
                    specific, measurable, achievable, relevant, and time-bound
                    (SMART) goals. You should also assess available resources
                    and potential constraints, such as time, access to
                    materials, and financial considerations.
                  </p>
                </div>
                <div className="space-y-4">
                  <h1 className="text-lg font-bold">
                    1.1. Objectives and Goals
                  </h1>
                  <p>
                    It is important to be clear about what you want to achieve,
                    which determine the reason, purpose, motivation or
                    requirement of your study. This could be mastering a
                    specific skill, gaining knowledge in a subject, preparing
                    for an exam, or even finding a way to live and achieve the
                    value of your life in the long term.
                  </p>
                </div>
                <div className="space-y-4">
                  <h1 className="font-bold italic">
                    1.1.1. Interest and Passion
                  </h1>
                  <p>Simply, it is what you want to do.</p>
                  <p>
                    Assess whether you are genuinely interested in the subject
                    or technology. Your passion can be a significant motivator
                    in the learning process. It is your personality that plays a
                    decisive role.
                  </p>
                  <p>
                    Align your learning with your personal goals and career
                    plans. For instance, if you aim to become a scientist or
                    researcher, you'll need to focus on relevant scientific and
                    technical knowledge.
                  </p>
                  <p>
                    But if you find that you don’t know what you want to learn,
                    and you don’t know where your passion lies, then you need to
                    try more. Try as many different projects as possible, and
                    find out the advantages and disadvantages. And optimize the
                    options by referring to personality tests, other people’s
                    evaluations, etc.
                  </p>
                </div>
                <div className="space-y-4">
                  <h1 className="font-bold italic">
                    1.1.2. Learning Difficulty and Prerequisites
                  </h1>
                  <p>Simply, it is what you can do.</p>
                  <p>
                    Evaluate the difficulty level and prerequisites of the
                    subject or technology. Make sure they match your current
                    skills and resources.
                  </p>
                  <p>
                    But it does not mean that you cannot give it a try, while
                    trying new different things or fields is always being
                    encouraged. It can helps you know better about your
                    limitations and discover yourself.
                  </p>
                  <p>
                    In addition, learning more difficult knowledge or skills
                    often has unique advantages in work and research. Because it
                    will mean that your competitors will become fewer and fewer
                    as the difficulty of your research becomes more difficult.
                    However, it also means that it is difficult for you to get
                    support and help from others.
                  </p>
                </div>
                <div className="space-y-4">
                  <h1 className="font-bold italic">
                    1.1.3. Market Demand and Job Prospects
                  </h1>
                  <p>Simply, it is what society and community need.</p>
                  <p>
                    Look into the market demand and job prospects for the field.
                    Technologies with wide applications and high demand, like
                    artificial intelligence or data science, may offer more job
                    opportunities.
                  </p>
                  <p>
                    However, this is usually the most crucial factor affecting
                    decision making about profession for most of people. Because
                    the end of graduating from a university or college is to
                    find a job. Unless, you want to do research.
                  </p>
                </div>
                <div className="space-y-4">
                  <h1 className="font-bold italic">
                    1.1.4. Long-term Development and Trends
                  </h1>
                  <p>
                    Consider the long-term development and trends of the field.
                    Is it a growing area with potential for future advancements?
                  </p>
                  <p>
                    The Product Life Cycle Theory, proposed by Raymond Vernon in
                    1966, is an economic theory that describes the stages a
                    product goes through from introduction to its eventual
                    decline. This theory can also provide insights into the
                    future development trends of a field or specialization to
                    some extent.
                  </p>
                  <div className="flex flex-col items-center justify-center p-6">
                    <img
                      src="/images/PLC.png"
                      alt="Description of the image"
                      // width="500"
                      // height="auto"
                    />
                    <span className="italic">
                      Figure 1: Product Lifecycle Curve
                    </span>
                  </div>
                  <p>
                    There is no absolutely permanent field or specialization.
                    Based on the Product Life Cycle Theory, evaluating which
                    field or specialization is worth learning involves looking
                    at the stages of various fields and understanding their
                    potential for growth and stability.
                  </p>
                  <p>
                    In <span className="italic">Introduction Stage</span>, new
                    technologies or fields are emerging, and the related
                    research and applications are still in their infancy. If
                    your field is at this stage, it could indicate that there
                    are significant opportunities and development potential
                    ahead (means invisible). Typically 1-5 years later, it will
                    transform to next phrase.
                  </p>
                  <p>
                    When a technology or field enters the{" "}
                    <span className="italic">Growth Stage</span>, it experiences
                    rapid development, and market demand and application expand.
                    This stage usually offers good career prospects and abundant
                    learning resources. It is a time of significant progress and
                    opportunity (means many people are involved). Usually 5-15
                    years later, it will transform to next phrase.
                  </p>
                  <p>
                    During the <span className="italic">Maturity Stage</span>,
                    the technology or field becomes stable, and market
                    competition intensifies. The knowledge and technologies in
                    this area are well-established, and career opportunities
                    might stabilize (which means less work opportunities but
                    more pressure). Innovation and changes might slow down, so
                    focusing on optimization and staying updated with the latest
                    advancements can be crucial. It will transform to next
                    phrase within about 10-30 years.
                  </p>
                  <p>
                    In the <span className="italic">Decline Stage</span>, demand
                    for the technology or field decreases as newer technologies
                    emerge. Career opportunities may become limited, and
                    professional development might face challenges.{" "}
                    <span className="underline">
                      If your field is entering this stage, it might be wise to
                      consider transitioning to more promising areas. (means RUN
                      ASAP!!)
                    </span>
                    This phrase can remain from 5-20 years or more.
                  </p>
                </div>
                <div className="space-y-4">
                  <h1 className="text-lg font-bold">1.2. Scope and Content</h1>
                  <p>
                    Study goals are broad statements that describe what you want
                    to achieve through your studies. Your time is limited, as
                    well as money, energy, etc. However, knowledge and
                    information are infinite, which means that learning will
                    never end if you don't let it to do so. That's why define
                    the scope and range is important.
                  </p>
                  <p>
                    For example, if you want to learning Math for Software
                    Engineering, then you just need to learn Discrete and
                    Statistics instead of learning all Math theories. In fact,
                    you won't have enough time for learning every aspect in Math
                    system. While under a large target, there are many small
                    targets. If you want to learn statistics, which is also a
                    very large system, you may only need to learn a small part.
                  </p>
                </div>
                <div className="space-y-4">
                  <h1 className="text-lg font-bold">
                    1.3. Constraints and Limitations
                  </h1>
                  <p>
                    In the requirement phase of self-study, it's important to
                    identify potential constraints and limitations that might
                    impact the learning process. Recognizing these factors early
                    on can help you plan effectively and devise strategies to
                    mitigate any negative effects.{" "}
                  </p>
                </div>
                <div className="space-y-4">
                  <h1 className="font-bold italic">1.4.1. Time Constraints</h1>
                  <p>
                    Time is always a problem. In theory, if a person had
                    infinite time then he could learn anything, but it
                    definitely is impossible. Therefore, you have to keep how
                    long you will spend on a specific study in mind in order to
                    set a proper schedule. Additionally, you need to Balance
                    self-study with other responsibilities such as work, family,
                    or social commitments can limit the amount of time available
                    for learning.
                  </p>
                </div>
                <div className="space-y-4">
                  <h1 className="font-bold italic">
                    1.4.2. Resource Availability
                  </h1>
                  <p>
                    As you noticed that this is self-learning, so there is no
                    doubt that your resources can be extremely to access. Some
                    resources, such as specialized textbooks, software, or
                    online courses, may not be readily available or may require
                    purchase.
                  </p>
                  <p>
                    Even the correctness and security of the resources you have
                    cannot be guaranteed, and you need to prove the truth or
                    falsehood yourself. In addition, the quality and
                    comprehensiveness of freely available resources may vary,
                    potentially limiting the depth of study.
                  </p>
                </div>
                <div className="space-y-4">
                  <h1 className="font-bold italic">
                    1.4.3. Financial Constraints
                  </h1>
                  <p>
                    What can I say? Books, courses, software, and other learning
                    materials can be expensive, which may limit access to
                    high-quality resources (but expensive ≠ high-quality
                    sometimes). And some fields of study may require specific
                    tools or equipment that involve significant financial
                    investment. If you study medicine, you may even need to find
                    animals to dissect (Well... indeed, I will learn everything
                    in college if I'm rich. That shouldn't be a constraint but a
                    feature of self-learning).
                  </p>
                </div>
                <div className="space-y-4">
                  <h1 className="font-bold italic">
                    1.4.4. Lack of Guidance and Support
                  </h1>
                  <p>
                    That is the spirit of self-learning, learning by yourself.
                    However, without teachers or mentors, it can be challenging
                    to understand complex concepts or receive feedback on
                    progress. And it can be isolating, lacking the collaborative
                    learning and support typically found in formal educational
                    settings.
                  </p>
                </div>
                <div className="space-y-4">
                  <h1 className="text-xl font-bold">2. Study Planning</h1>
                  <p>
                    The design phase involves planning how you will achieve your
                    learning goals. This includes selecting appropriate
                    resources such as textbooks, online courses, articles, and
                    tools. You should also consider the learning methods that
                    work best for you, whether it's reading, watching videos,
                    hands-on practice, or discussions. Additionally, develop a
                    study schedule that outlines what you will study and when,
                    ensuring that the plan is realistic and fits within your
                    constraints.
                  </p>
                </div>
                <div className="space-y-4">
                  <h1 className="text-lg font-bold">
                    2.1. Curriculum and Syllabus
                  </h1>
                  <p>
                    You should break up the objectives and targets you
                    previously made to many small tasks, and organize the
                    learning materials into a structured curriculum or syllabus.
                    This includes outlining the topics, subtopics, and specific
                    areas of focus.
                  </p>
                </div>
                <div className="space-y-4">
                  <h1 className="text-lg font-bold">
                    2.2. Strategies and Methods
                  </h1>
                  <p>
                    By refering to{" "}
                    <span className="italic">Learning Pyramid</span>, You can
                    choose the most suitable learning methods for your learning,
                    such as reading, watching videos, hands-on practice,
                    problem-solving, discussions, or project-based learning. And
                    you can incorporate active learning techniques, such as
                    summarizing information, teaching others, or applying
                    knowledge to real-world situations.
                  </p>
                </div>
              </div>
              <div className="flex flex-col lg:w-1/2 space-y-10">
                <div className="space-y-4">
                  <h1 className="text-lg font-bold">
                    2.3. Resource Utilization
                  </h1>
                  <p>
                    It's essential to strategize how each resource will be used
                    to achieve specific learning goals. These supplementary
                    materials can include academic papers, specialized websites,
                    or expert lectures, providing a broader and more in-depth
                    perspective on the subject matter.
                  </p>
                  <div className="flex flex-col items-center justify-center p-6">
                    <div className="w-full overflow-x-auto">
                      <table className="bg-white text-sm">
                        <thead className="bg-black text-white">
                          <tr>
                            <th className="py-3 px-4 text-left">Type</th>
                            <th className="py-3 px-4 text-left">Resource</th>
                            <th className="py-3 px-4 text-left">Main Focus</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="">
                            <td className="py-3 px-4">Formal</td>
                            <td className="py-3 px-4">Textbooks</td>
                            <td className="py-3 px-4">
                              Comprehensive, structured knowledge, often used in
                              academic settings.
                            </td>
                          </tr>
                          <tr className="bg-gray-50 ">
                            <td className="py-3 px-4">Formal</td>
                            <td className="py-3 px-4">
                              Online Courses (MOOCs)
                            </td>
                            <td className="py-3 px-4">
                              Organized learning with a defined curriculum,
                              often leading to certificates.
                            </td>
                          </tr>
                          <tr className="">
                            <td className="py-3 px-4">Formal</td>
                            <td className="py-3 px-4">
                              Academic Journals and Papers
                            </td>
                            <td className="py-3 px-4">
                              Research-based, peer-reviewed studies providing
                              detailed insights and findings.
                            </td>
                          </tr>
                          <tr className="bg-gray-50 ">
                            <td className="py-3 px-4">Formal</td>
                            <td className="py-3 px-4">
                              Workshops and Seminars
                            </td>
                            <td className="py-3 px-4">
                              Interactive, focused training sessions on specific
                              skills or knowledge areas.
                            </td>
                          </tr>
                          <tr className="">
                            <td className="py-3 px-4">Informal</td>
                            <td className="py-3 px-4">Blogs and Articles</td>
                            <td className="py-3 px-4">
                              Personal insights, tips, and opinions on a wide
                              range of topics.
                            </td>
                          </tr>
                          <tr className="bg-gray-50 ">
                            <td className="py-3 px-4">Informal</td>
                            <td className="py-3 px-4">Podcasts and Videos</td>
                            <td className="py-3 px-4">
                              Accessible content, often presented in a
                              conversational or narrative style, covering
                              various subjects.
                            </td>
                          </tr>
                          <tr className="">
                            <td className="py-3 px-4">Informal</td>
                            <td className="py-3 px-4">
                              Forums and Discussion Boards
                            </td>
                            <td className="py-3 px-4">
                              Community-driven knowledge exchange and
                              problem-solving.
                            </td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="py-3 px-4">Informal</td>
                            <td className="py-3 px-4">Social Media</td>
                            <td className="py-3 px-4">
                              Quick insights, updates, and discussions on
                              trending or specific topics.
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <span className="italic">
                      Table 1: Formal and Informal Resources
                    </span>
                  </div>
                </div>
                <div className="space-y-4">
                  <h1 className="text-lg font-bold">
                    2.4. Schedule and Time Management
                  </h1>
                  <p>
                    Set specific deadlines or timeframes for when you plan to
                    complete each study objective. Timelines provide a schedule
                    for completing your objectives, helping you stay on track
                    and manage your time efficiently.Timelines focus on when you
                    need to do it (the schedule and deadlines).
                  </p>
                  <p>Examples:</p>
                  <ul className="list-disc ml-6 italic">
                    <ol>
                      "Complete reading and summarizing chapters 1-3 by Friday
                      in 13:00-15:00."
                    </ol>
                    <ol>
                      "Finish all practice problems by Sunday evening at 20:00."
                    </ol>
                    <ol>
                      "Submit the essay draft by next Wednesday at 9:45 for
                      review."
                    </ol>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h1 className="text-xl font-bold">3. Studying</h1>
                  <p>
                    During the Studying stage, you start engaging with the
                    chosen learning materials and activities. This phase is
                    about actively learning and absorbing new information. You
                    might take notes, work on exercises, participate in
                    discussions, or apply new skills in practical projects. It's
                    important to maintain discipline and consistency during this
                    stage to build a solid foundation of knowledge.
                  </p>
                </div>
                <div className="space-y-4">
                  <h1 className="text-lg font-bold">
                    3.1. Environment Cleaning
                  </h1>
                  <p>
                    Environment Cleaning is a valuable aspect of the Development
                    phase in self-learning. It involves creating and maintaining
                    an organized, distraction-free study environment, which can
                    significantly enhance focus and productivity.
                  </p>
                </div>
                <div className="space-y-4">
                  <h1 className="text-lg font-bold">
                    3.2. Active Learning Strategies
                  </h1>
                  <p>
                    You need to choose the most effective methods for
                    internalizing information, such as summarizing, note-taking,
                    mind mapping, or discussing topics with peers (maybe from
                    online). And you can try to explore different modes of
                    learning, such as visual (videos, diagrams), auditory
                    (lectures, podcasts), reading/writing (textbooks, articles),
                    and kinesthetic (hands-on practice, experiments) until you
                    find the best one.
                  </p>
                </div>
                <div className="space-y-4">
                  <h1 className="text-lg font-bold">3.3. Documentation</h1>
                  <p>
                    Documentation is an essential aspect of the Development
                    phase in self-learning. It involves systematically recording
                    and organizing the information and insights gained during
                    the study process. This practice serves multiple purposes,
                    enhancing the overall effectiveness and efficiency of
                    learning.
                  </p>
                </div>
                <div className="space-y-4">
                  <h1 className="font-bold italic">
                    3.3.1. Content of Documentation
                  </h1>
                  <p>
                    <span className="font-bold">
                      Key Concepts and Definitions:{" "}
                    </span>
                    Summarize the main ideas, theories, and definitions
                    encountered during your study. Highlight the essential
                    points that are crucial for understanding the subject.
                  </p>
                  <p>
                    <span className="font-bold">Notes and Summaries: </span>
                    Take detailed notes during reading, lectures, or other study
                    activities. Summarize chapters, articles, or videos,
                    focusing on the most important information.
                  </p>
                  <p>
                    <span className="font-bold">Examples: </span>
                    Document examples, case studies, or practical applications
                    of the concepts being learned. This can include solved
                    problems, code snippets, or real-world applications.
                  </p>
                  <p>
                    <span className="font-bold">
                      Personal Insights and Ideas:{" "}
                    </span>
                    Include your reflections, questions, and insights gained
                    during the learning process. Note any connections between
                    new knowledge and existing understanding.
                  </p>
                </div>
                <div className="space-y-4">
                  <h1 className="font-bold italic">
                    3.3.1. Different Forms of Documentation
                  </h1>
                  <p>
                    There are many ways to document your learning, including
                    traditional note-taking on paper, audio recordings, video
                    summaries, and visual aids like diagrams. Each method has
                    its unique advantages and potential drawbacks. Below is a
                    summary of the pros and cons of these different forms of
                    documentation.
                  </p>
                  <div className="flex flex-col items-center justify-center p-6">
                    <div className="w-full overflow-x-auto">
                      <table className="bg-white text-sm">
                        <thead className="bg-black text-white">
                          <tr>
                            <th className="py-3 px-4 text-left ">Method</th>
                            <th className="py-3 px-4 text-left ">Pros</th>
                            <th className="py-3 px-4 text-left ">Cons</th>
                            <th className="py-3 px-4 text-left ">Cases</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="">
                            <td className="py-3 px-4">Paper Note</td>
                            <td className="py-3 px-4">
                              - Tangible
                              <br />
                              - portable
                              <br />
                              - Enhances memory via writing
                              <br />- Easy to annotate
                            </td>
                            <td className="py-3 px-4">
                              - Difficult to organize and search
                              <br />- Susceptible to damage or loss
                            </td>
                            <td className="py-3 px-4">
                              - Quick note-taking during lectures or meetings
                              <br />- Brainstorming and sketching ideas
                            </td>
                          </tr>
                          <tr className="bg-gray-50 ">
                            <td className="py-3 px-4">Audio Recordings</td>
                            <td className="py-3 px-4">
                              - Convenient for capturing thoughts on the go
                              <br />
                              - Can be replayed for auditory learners
                              <br />- Captures nuances in speech and tone
                            </td>
                            <td className="py-3 px-4">
                              - Time-consuming to review
                              <br />
                              - Requires transcription for quick reference
                              <br />- May be harder to organize and search
                            </td>
                            <td className="py-3 px-4">
                              - Recording lectures, interviews, or discussions
                              <br />- Capturing personal reflections or
                              brainstorming sessions
                            </td>
                          </tr>
                          <tr className="">
                            <td className="py-3 px-4">Video Summaries</td>
                            <td className="py-3 px-4">
                              - Visual and auditory learning combined
                              <br />
                              - Captures body language and visual cues
                              <br />- Useful for complex explanations
                            </td>
                            <td className="py-3 px-4">
                              - Requires equipment and setup
                              <br />
                              - Time-consuming to produce and review
                              <br />- Large file sizes and storage needs
                            </td>
                            <td className="py-3 px-4">
                              - Demonstrating procedures or tutorials
                              <br />- Recording presentations or speeches
                            </td>
                          </tr>
                          <tr className="bg-gray-50 ">
                            <td className="py-3 px-4">
                              Diagrams and Mind Maps
                            </td>
                            <td className="py-3 px-4">
                              - Excellent for visualizing relationships and
                              concepts
                              <br />
                              - Simplifies complex information
                              <br />- Engages visual learners
                            </td>
                            <td className="py-3 px-4">
                              - Can be time-consuming to create
                              <br />
                              - May oversimplify information
                              <br />- Not suitable for all types of information
                            </td>
                            <td className="py-3 px-4">
                              - Organizing ideas and concepts
                              <br />- Planning projects or presentations
                            </td>
                          </tr>
                          <tr className="">
                            <td className="py-3 px-4">Digital Notes</td>
                            <td className="py-3 px-4">
                              - Easily organized and searchable
                              <br />
                              - Can include hyperlinks and multimedia
                              <br />- Cloud storage and backup options
                            </td>
                            <td className="py-3 px-4">
                              - Requires access to digital devices
                              <br />
                              - Potential for distraction from other digital
                              content
                              <br />- Data security and privacy concerns
                            </td>
                            <td className="py-3 px-4">
                              - Collecting and organizing research
                              <br />- Integrating multimedia content with notes
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <span className="italic">
                      Table 2: Different Forms of Documentation
                    </span>
                  </div>
                </div>
                <div className="space-y-4">
                  <h1 className="text-xl font-bold">4. Testing</h1>
                  <p>
                    In the testing phase, you assess your understanding and
                    mastery of the material. This can be done through
                    self-assessment, quizzes, practice tests, or projects.
                    Testing helps identify areas where you may need further
                    study or clarification. It's an opportunity to apply what
                    you've learned in practical scenarios, which reinforces
                    learning and helps solidify your knowledge.
                  </p>
                </div>
                <div className="space-y-4">
                  <h1 className="text-xl font-bold">5. Practice</h1>
                  <p>
                    Practice involves applying your new knowledge or skills in
                    real-world situations. This could be through personal
                    projects, work-related tasks, or any practical application
                    of what you've learned. The goal is to integrate your new
                    abilities into everyday practice, allowing you to see the
                    practical value of your learning and gain confidence in your
                    skills.
                  </p>
                </div>
                <div className="space-y-4">
                  <h1 className="text-xl font-bold">6. Review</h1>
                  <p>
                    The final stage, review, involves reflecting on your
                    learning process and outcomes. Evaluate whether you achieved
                    your goals and assess what worked well or bad, and what
                    could be improved or abandoned. This phase is crucial for
                    continuous improvement and adapting your study strategies
                    for future learning. Reflecting on your progress also helps
                    reinforce what you've learned and solidify your knowledge.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
};
export default page;
