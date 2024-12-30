import Container from "./_components/Container";
import FadeInContainer from "./_components/FadeInContainer";
import ParallaxSection from "./_components/ParallaxSection";
import PostPreviewer from "./_components/PostPreviewer";
import QuotaBoard from "./_components/QuotaBoard";
import generateRandomColor from "@/app/_controllers/generateRandomColor";
import {
  MusicalNoteIcon,
  UserIcon,
  WrenchScrewdriverIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/outline";
import getPostMetadata from "./_controllers/getPostMetadata";
import ContactForm from "./_components/ContactForm";
import VideoBoard from "./_components/_Video/VideoBoard";
import GreetingTitle from "./_components/GreetingTitle";
import { TypeOfArticle } from "./_controllers/TypeOfArticle";
import getArticleMetadata from "./_controllers/getArticleMetadata";
import QuickPreviewer from "./_components/_NoteList/QuickPreviewer";
import NoteList from "./_components/_NoteList/NoteList";
import { LatestWork } from "./_controllers/MusicWorks";
import DynamicText from "./_components/DynamicText";

export default function Home() {
  const postMetadata = getPostMetadata();
  const BTarticlesMetadata = getArticleMetadata(
    TypeOfArticle.BlockchainTechnology
  );
  const AIarticlesMetadata = getArticleMetadata(
    TypeOfArticle.ArtificialIntelligence
  );

  const allPostMetadata = [
    postMetadata,
    BTarticlesMetadata,
    AIarticlesMetadata,
  ];

  const textList = [
    "天地有大美而不言，四时有明法而不争。————庄子",
    "人心如镜，拂之则明，蒙之则昧。————韩愈",
    "流水不争先，争的是滔滔不绝。————庄子",
    "山高月小，水落石出，万物自有其时。————苏轼",
    "志之所向，虽千万人吾往矣。————孟子",
    "风起于青萍之末，浪成于微澜之间。————《汉书》",
    "君子藏器于身，待时而动。————《周易》",
    "大道至简，繁者惑人。————老子",
    "生如朝露，逝若流星，唯有德行长存。————《礼记》",
    "心静则明，志定则远。————诸葛亮",
    "木秀于林，风必摧之；行高于众，人必非之。————《旧唐书》",
    "知者不言，言者不知。————老子",
    "欲速则不达，见小利则大事不成。————孔子",
    "海纳百川，有容乃大；壁立千仞，无欲则刚。————林则徐",
    "天行健，君子以自强不息。————《周易》",
    "祸兮福之所倚，福兮祸之所伏。————老子",
    "千里之行，始于足下。————老子",
    "不积跬步，无以至千里；不积小流，无以成江海。————荀子",
    "君子和而不同，小人同而不和。————孔子",
    "工欲善其事，必先利其器。————孔子",
  ];

  return (
    <main className="flex flex-col items-center justify-between">
      <Container>
        <div className="flex w-full h-screen bg-sketch items-center justify-center font-arial">
          <div className="lg:flex lg:w-1/2 px-6">
            <div className="flex flex-col text-justify">
              {/* <p className="text-3xl lg:text-6xl">Hi, this is Dōmuki</p> */}
              <GreetingTitle />
              <p className="mt-5">
                I'm passionate about music and writing, with a degree in
                software engineering. I can speak English and native Mandarin.
                Currently, I'm pursuing advanced studies in my field and love
                exploring new creative endeavors.
              </p>
              <p className="lg:text-lg mt-2">
                <span>
                  Looking for like-minded friends to grow and improve together! Feel free to contact with me:
                </span>
                <span className="underline">DOMUKINO@GMAIL.COM</span>
              </p>
            </div>
          </div>
        </div>

        <FadeInContainer>
          <div className="lg:flex w-full h-full items-stretch justify-around text-white">
            <div
              className="flex lg:w-1/4 items-center justify-center bg-black bg-opacity-20"
              style={{ backgroundColor: generateRandomColor() }}
            >
              <ParallaxSection backgroundImage={""}>
                <div className="flex flex-col items-center justify-center space-y-3 p-12 h-full">
                  <WrenchScrewdriverIcon className="h-12 w-12" />

                  <span className="font-bold text-xl text-center">
                    Software Developer
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
              style={{ backgroundColor: generateRandomColor() }}
            >
              <ParallaxSection backgroundImage={""}>
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
              style={{ backgroundColor: generateRandomColor() }}
            >
              <ParallaxSection backgroundImage={""}>
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
              style={{ backgroundColor: generateRandomColor() }}
            >
              <ParallaxSection backgroundImage={""}>
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
          <NoteList allData={allPostMetadata} />
        </FadeInContainer>

        <FadeInContainer>
          <div className="flex w-full items-center justify-center px-12 py-24 text-lg lg:text-3xl text-white bg-black text-center">
            <DynamicText content={textList} />
          </div>
        </FadeInContainer>

        <FadeInContainer>
          <div className="flex h-[34rem]">
            <VideoBoard
              videoId={LatestWork.videoId}
              image={LatestWork.image}
              title={"Latest Work"}
              comment={LatestWork.comment}
            />
          </div>
        </FadeInContainer>

        <FadeInContainer>
          <ParallaxSection backgroundImage={"/images/domukiphoto.png"}>
            <div className="flex w-full">
              <div className="hidden lg:flex lg:w-1/2 bg-white bg-opacity-40">
                <div className="flex h-full w-full flex-col items-center justify-center px-6 py-32">
                  <div>
                    <span className="text-center text-3xl lg:text-6xl">
                      Contact Me
                    </span>
                    <div className="distribute-text">
                      {"連絡用メール".split("").map((char, index) => (
                        <span key={index}>{char}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex w-full lg:w-1/2 py-12 px-6 bg-white">
                <ContactForm />
              </div>
            </div>
          </ParallaxSection>
        </FadeInContainer>
      </Container>
    </main>
  );
}
