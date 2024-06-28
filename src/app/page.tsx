import ArticlePreviewer from "./_components/ArticlePreviewer";
import Container from "./_components/Container";
import FadeInContainer from "./_components/FadeInContainer";
import ParallaxSection from "./_components/ParallaxSection";
import PostPreviewer from "./_components/PostPreviewer";
import QuotaBoard from "./_components/QuotaBoard";
import StudyNavBoard from "./_components/StudyNavBoard";
import YouTubePreviewer from "./_components/YouTubePreviewer";
import {
  MusicalNoteIcon,
  UserIcon,
  WrenchScrewdriverIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/outline";
import { PlayIcon } from "@heroicons/react/24/outline";

import getPostMetadata from "./_controllers/getPostMetadata";

export default function Home() {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post) => (
    <PostPreviewer key={post.slug} {...post} />
  ));
  return (
    <main className="flex flex-col items-center justify-between">
      <Container>
        <div className="flex w-full h-screen bg-sketch items-center justify-center">
          <div className="lg:flex lg:w-1/2 px-6">
            <div className="flex flex-col space-y-5">
              <p className="text-3xl lg:text-6xl">Hi, I am Dōmuki</p>
              <p className="text-justify">
                I am a 24-year-old male with a passion for music and writing. I
                am fluent in English and native in Chinese. I graduated from UPM
                with a Bachelor's degree in Software Engineering and am
                currently pursuing a Master's degree at PolyU.
              </p>
              <p className="lg:text-lg">
                <span>My email is </span>
                <span className="underline">DOMUKINO@GMAIL.COM</span>
                <span>, and feel free to contact with me.</span>
              </p>
            </div>
          </div>
        </div>
        <FadeInContainer>
          <div className="lg:flex w-full h-full items-stretch justify-around">
            <div className="flex lg:w-1/4 items-center justify-center bg-black bg-opacity-20">
              <ParallaxSection backgroundImage={"/images/programming.jpg"}>
                <div className="flex flex-col items-center justify-center space-y-3 p-24 h-full">
                  <WrenchScrewdriverIcon className="h-12 w-12 text-white" />

                  <span className="font-bold text-xl text-center">
                    Software Engineer
                  </span>
                  <span className="text-justify">
                    I hold a Bachelor's degree in Software Engineering, and
                    frequently worked with frameworks like Flutter and Next.js.
                  </span>
                </div>
              </ParallaxSection>
            </div>
            <div className="flex lg:w-1/4 items-center justify-center bg-black bg-opacity-20">
              <ParallaxSection backgroundImage={"/images/english.jpg"}>
                <div className="flex flex-col items-center justify-center space-y-3 p-24 h-full">
                  <ChatBubbleLeftRightIcon className="h-12 w-12 text-white" />

                  <span className="font-bold text-xl text-center">
                    English Assistant
                  </span>
                  <span className="text-justify">
                    I achieved an IELTS band score of 7 and had experience
                    as an English teaching assistant.
                  </span>
                </div>
              </ParallaxSection>
            </div>
            <div className="flex lg:w-1/4 items-center justify-center bg-black bg-opacity-20">
              <ParallaxSection backgroundImage={"/images/composing.png"}>
                <div className="flex flex-col items-center justify-center space-y-3 p-24 h-full">
                  <MusicalNoteIcon className="h-12 w-12 text-white" />

                  <span className="font-bold text-xl text-center">
                    Music Composer
                  </span>
                  <span className="text-justify">
                    Composing music is my favorite hobby, which I've continued
                    to pursue for over 5 years, accumulating more than 472,000
                    listens.
                  </span>
                </div>
              </ParallaxSection>
            </div>
            <div className="flex lg:w-1/4 items-center justify-center bg-black bg-opacity-20">
              <ParallaxSection backgroundImage={"/images/student.png"}>
                <div className="flex flex-col items-center justify-center space-y-3 p-24 h-full">
                  <UserIcon className="h-12 w-12 text-white" />

                  <span className="font-bold text-xl text-center">Student</span>
                  <span className="text-justify">
                    Being a student will always be my identity throughout my
                    life. I have a constant desire to learn new things and enhance my perspectives.
                  </span>
                </div>
              </ParallaxSection>
            </div>
          </div>
        </FadeInContainer>

        <FadeInContainer>
          <div className="lg:flex px-6 lg:px-12 mt-20">
            <div className="flex flex-col lg:flex-1 items-center justify-center m-20">
              <span className="text-6xl">Posts</span>
              <div className="mt-2 space-x-5">
                <span className="text-center">記</span>
                <span className="text-center">事</span>
              </div>
            </div>
            <div className="flex lg:flex-1">
              <div className="flex flex-col w-full">{postPreviews}</div>
            </div>
          </div>
        </FadeInContainer>
        <FadeInContainer>
          <div className="mt-32">
            <QuotaBoard
              quota={
                "You are too concerned about what was and what will be. There is a saying: yesterday is history, tomorrow is a mystery, but today is a gift. That is why it is called the present."
              }
              author={"Kung Fu Panda (2008) - Randall Duk Kim as Oogway"}
            />
          </div>
        </FadeInContainer>

        <FadeInContainer>
          <div className="relative">
            <a href="https://www.youtube.com/watch?v=haqHcJHe0w0">
              <div className="flex lg:flex-row flex-col bg-black bg-opacity-20 hover:bg-opacity-50 transition-all">
                {/* <YouTubePreviewer videoId="haqHcJHe0w0" /> */}
                <ParallaxSection backgroundImage={"/images/latest_album.png"}>
                  <div className="flex flex-col items-center justify-center py-56 space-y-6">
                    <PlayIcon className="h-28 w-28 text-white" />
                    <span className="text-center text-3xl lg:text-6xl">
                      Latest Work
                    </span>
                    <div className="text-center space-x-5">
                      <span>最</span>
                      <span>新</span>
                      <span>作</span>
                      <span>品</span>
                    </div>
                  </div>
                </ParallaxSection>
              </div>
            </a>
          </div>
        </FadeInContainer>
      </Container>
    </main>
  );
}
