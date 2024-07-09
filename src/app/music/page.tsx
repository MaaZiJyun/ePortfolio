import PlayIcon from "@heroicons/react/24/outline/PlayIcon";
import Container from "../_components/Container";
import FadeInContainer from "../_components/FadeInContainer";
import ParallaxSection from "../_components/ParallaxSection";
import QuotaBoard from "../_components/QuotaBoard";
import Section from "../_components/Section";
import YouTubePreviewer from "../_components/YouTubePreviewer";
import VideoBoard from "../_components/VideoBoard";

const page = () => {
  return (
    <main className="flex flex-col items-center justify-between">
      <Container>
        <div className="bg-latest-album pt-24">
          <div className="flex flex-col items-center justify-center p-12 lg:p-32">
            <span className="text-3xl lg:text-6xl text-center">
              私の音楽作品
            </span>
            <span className="mt-4">Welcome to listen to my music works.</span>
          </div>
          {/* divider */}
          {/* <div className="lg:flex px-6 lg:px-12">
            <div className="w-full h-px bg-black"></div>
          </div> */}
          <FadeInContainer>
            <div className="lg:flex items-center justify-center lg:py-32 bg-white bg-opacity-60">
              <div className="flex flex-col lg:w-1/2 items-center justify-center p-20">
                <span className="text-center text-4xl lg:text-6xl">
                  Latest Work
                </span>
                <div className="text-center space-x-5 mt-2">
                  <span>最</span>
                  <span>新</span>
                  <span>作</span>
                  <span>品</span>
                </div>
              </div>
              <div className="flex items-center justify-center lg:w-1/2 h-96">
                <VideoBoard
                  videoId={"rfksuI6tyYI"}
                  image={"/images/latest_album.png"}
                  title={"Vast Remix"}
                  comment={"Epic Orchestral Original Mix"}
                />
              </div>
            </div>
          </FadeInContainer>
        </div>
        <FadeInContainer>
          <QuotaBoard
            quota={
              "Here's Domuki, a novice composer of orchestral music with a passion for creating emotional orchestral music. "
            }
            author={""}
          />
        </FadeInContainer>
        <FadeInContainer>
          <div className="bg-black bg-opacity-40">
            <ParallaxSection backgroundImage={"/images/composing.png"}>
              <div className="flex justify-center p-12 lg:py-32">
                <div className="space-y-6 lg:w-1/2">
                  <p className="text-sm lg:text-base">
                    I'm Domuki, an independent musician, passionating about
                    music creation. These are the types I enjoy and skilled in:
                  </p>
                  <h1 className="text-2xl lg:text-6xl font-bold">
                    Electronic · Orchestral · Experimental · Chinese · Pop ·
                    Instrumental · Video Game Music
                  </h1>
                  <div className="w-full h-px bg-white"></div>
                  <p className="text-base lg:text-lg">
                    If you are interested in my music works or collaboration
                    with me, feel free to send me an email:{" "}
                    <span className="italic underline">Domukino@gmail.com</span>
                    ! Thank you ~
                  </p>
                </div>
              </div>
            </ParallaxSection>
          </div>
        </FadeInContainer>
        <FadeInContainer>
          <div className="flex flex-col lg:px-12 pt-32 lg:pb-32 bg-domukiphoto">
            <div className="flex flex-col items-center lg:items-end justify-center pb-32">
              <span className="text-center text-3xl lg:text-6xl">
                Check out more works
              </span>
              <span className="text-center mt-5">もっと多くの作品をご覧</span>
            </div>

            <div className="lg:h-screen">
              <div className="lg:flex lg:h-1/2">
                <div className="flex lg:flex-1 bg-sketch m-1">
                  {/* <YouTubePreviewer videoId="hT3ABJKcMSE" /> */}
                  <VideoBoard
                    videoId={"hT3ABJKcMSE"}
                    image={"/images/domukiphoto.png"}
                    title={"In My Heart"}
                    comment={"Epic Orchestral Original Mix"}
                  />
                </div>
                <div className="flex lg:flex-1 bg-sketch m-1">
                  {/* <YouTubePreviewer videoId="acd6s_GiRTM" /> */}
                  <VideoBoard
                    videoId={"haqHcJHe0w0"}
                    image={"/images/domukiphoto.png"}
                    title={"Faith"}
                    comment={"Epic Orchestral Original Mix"}
                  />
                </div>
              </div>
              <div className="lg:flex h-1/2">
                <div className="flex lg:flex-1 bg-sketch m-1">
                  {/* <YouTubePreviewer videoId="KWmC_xZwuDY" /> */}
                  <VideoBoard
                    videoId={"KWmC_xZwuDY"}
                    image={"/images/domukiphoto.png"}
                    title={"Galaxy"}
                    comment={"Epic Orchestral Original Mix"}
                  />
                </div>
                <div className="flex lg:flex-1 bg-sketch m-1">
                  {/* <YouTubePreviewer videoId="8aoMvZz-FI4" /> */}
                  <VideoBoard
                    videoId={"8aoMvZz-FI4"}
                    image={"/images/domukiphoto.png"}
                    title={"Vast"}
                    comment={"Epic Orchestral Original Mix"}
                  />
                </div>
              </div>
            </div>
          </div>
        </FadeInContainer>
      </Container>
    </main>
  );
};
export default page;
