import Container from "./_components/Container";
import FadeInContainer from "./_components/FadeInContainer";
import ParallaxSection from "./_components/ParallaxSection";
import PostPreviewer from "./_components/PostPreviewer";
import QuotaBoard from "./_components/QuotaBoard";
import {
  MusicalNoteIcon,
  UserIcon,
  WrenchScrewdriverIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/outline";
import getPostMetadata from "./_controllers/getPostMetadata";
import ContactForm from "./_components/ContactForm";
import VideoBoard from "./_components/VideoBoard";
import GreetingTitle from "./_components/GreetingTitle";

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
              {/* <p className="text-3xl lg:text-6xl">Hi, this is Dōmuki</p> */}
              <GreetingTitle />
              <p className="text-justify">
                I'm passionate about music and writing, with a degree in
                software engineering. I can speak English and native Mandarin.
                Currently, I'm pursuing advanced studies in my field and love
                exploring new creative endeavors.
              </p>
              <p className="lg:text-lg">
                <span>
                  Looking forward to connecting and sharing ideas with
                  like-minded individuals!
                </span>
                <span>Feel free to contact with me: </span>
                <span className="underline">DOMUKINO@GMAIL.COM</span>
              </p>
            </div>
          </div>
        </div>

        <FadeInContainer>
          <div className="lg:flex w-full h-full items-stretch justify-around text-white">
            <div
              className="flex lg:w-1/4 items-center justify-center bg-black bg-opacity-20"
              // style={{ backgroundColor: "#08D9D6" }}
            >
              <ParallaxSection backgroundImage={"/images/programming.jpg"}>
                <div className="flex flex-col items-center justify-center space-y-3 p-12 h-full">
                  <WrenchScrewdriverIcon className="h-12 w-12" />

                  <span className="font-bold text-xl text-center">
                    Application Developer
                  </span>
                  <span className="text-justify">
                    He hold a Bachelor's degree in Software Engineering, and
                    frequently worked with frameworks like Flutter and Next.js.
                  </span>
                </div>
              </ParallaxSection>
            </div>
            <div
              className="flex lg:w-1/4 items-center justify-center bg-black bg-opacity-20"
              // style={{ backgroundColor: "#252A34" }}
            >
              <ParallaxSection backgroundImage={"/images/english.jpg"}>
                <div className="flex flex-col items-center justify-center space-y-3 p-12 h-full">
                  <ChatBubbleLeftRightIcon className="h-12 w-12 text-white" />

                  <span className="font-bold text-xl text-center">
                    English Assistant
                  </span>
                  <span className="text-justify">
                    He achieved an IELTS with band 7 and had experience as an
                    English teaching assistant.
                  </span>
                </div>
              </ParallaxSection>
            </div>
            <div
              className="flex lg:w-1/4 items-center justify-center bg-black bg-opacity-20"
              // style={{ backgroundColor: "#FF2E63" }}
            >
              <ParallaxSection backgroundImage={"/images/composing.png"}>
                <div className="flex flex-col items-center justify-center space-y-3 p-12 h-full">
                  <MusicalNoteIcon className="h-12 w-12 text-white" />

                  <span className="font-bold text-xl text-center">
                    Music Composer
                  </span>
                  <span className="text-justify">
                    Composing music is his favorite hobby, which he've continued
                    to pursue for over 5 years. He specializes in pure music and
                    orchestral music.
                  </span>
                </div>
              </ParallaxSection>
            </div>
            <div
              className="flex lg:w-1/4 items-center justify-center bg-black bg-opacity-20"
              // style={{ backgroundColor: "#EAEAEA" }}
            >
              <ParallaxSection backgroundImage={"/images/student.png"}>
                <div className="flex flex-col items-center justify-center space-y-3 p-12 h-full">
                  <UserIcon className="h-12 w-12 text-white" />

                  <span className="font-bold text-xl text-center">Student</span>
                  <span className="text-justify">
                    Being a student will always be his identity throughout his
                    life. He have a constant desire to learn new things and
                    enhance his perspectives.
                  </span>
                </div>
              </ParallaxSection>
            </div>
          </div>
        </FadeInContainer>
        <FadeInContainer>
          <div className="lg:flex px-6 lg:px-12 my-32">
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
          <div className="flex h-[34rem]">
            <VideoBoard
              videoId={"rfksuI6tyYI"}
              image={"/images/latest_album.png"}
              title={"Latest Work"}
              comment={"最新作品"}
            />
          </div>
        </FadeInContainer>
        <FadeInContainer>
          <QuotaBoard
            quota={
              "The background of the world is like the darkness of the universe. And it is dark because humans cannot see it."
            }
            author={"《世界の底色》第1章"}
          />
        </FadeInContainer>
        <FadeInContainer>
          <ParallaxSection backgroundImage={"/images/sketch.jpeg"}>
            <div className="flex w-full">
              <div className="hidden lg:flex lg:w-1/2">
                <div className="flex h-full w-full flex-col items-center justify-center px-6 py-32">
                  <div>
                    <span className="text-center text-3xl lg:text-6xl">
                      Contact Me
                    </span>
                    <div className="distribute-text">
                      {"童夢綺に連絡してください".split("").map((char, index) => (
                        <span key={index}>{char}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex w-full lg:w-1/2 py-12 px-6 bg-white bg-opacity-90">
                <ContactForm />
              </div>
            </div>
          </ParallaxSection>
        </FadeInContainer>
      </Container>
    </main>
  );
}
