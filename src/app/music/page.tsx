import AnimeHeroTitle from "../_components/AnimeHeroTitle";
import Container from "../_components/Container";
import FadeInContainer from "../_components/FadeInContainer";
import MusicTitleHero from "../_components/MusicTitleHero";
import ParallaxSection from "../_components/ParallaxSection";
import QuotaBoard from "../_components/QuotaBoard";
import VideoBoard from "../_components/_Video/VideoBoard";
import {
  FirstWork,
  LatestWork,
  SecondWork,
  ThirdWork,
} from "../_controllers/MusicWorks";
import generateRandomColor from "../_controllers/generateRandomColor";

const page = () => {
  return (
    <main className="flex flex-col items-center justify-between">
      <Container>
        {/* <div className="bg-blue-500"> */}
        <MusicTitleHero />
        <FadeInContainer>
          <div className="lg:flex items-center justify-center">
            <div className="flex flex-col lg:w-1/3 lg:h-96 items-center justify-center p-20 bg-white bg-opacity-90">
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
            <div className="flex items-center justify-center lg:w-2/3 h-96">
              <VideoBoard
                videoId={LatestWork.videoId}
                image={LatestWork.image}
                title={LatestWork.title}
                comment={LatestWork.comment}
              />
            </div>
          </div>
        </FadeInContainer>
        {/* </div> */}
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
          <div className="flex flex-col pt-32 lg:pb-32 lg:px-12">
            <div className="flex flex-col items-center lg:items-center justify-center pb-32">
              <span className="font-hefeng text-center text-3xl lg:text-6xl">
                代表作をご覧
              </span>
              <span className="text-center text-base lg:text-lg uppercase">
                Check out representative works
              </span>
            </div>

            <div className="lg:h-screen">
              <div className="lg:flex lg:h-1/2">
                <div
                  // style={{ backgroundColor: generateRandomColor() }}
                  className="flex lg:w-1/3 m-1"
                >
                  {/* <YouTubePreviewer videoId="hT3ABJKcMSE" /> */}
                  <VideoBoard
                    videoId={LatestWork.videoId}
                    image={LatestWork.image}
                    title={LatestWork.title}
                    comment={LatestWork.comment}
                  />
                </div>
                <div
                  // style={{ backgroundColor: generateRandomColor() }}
                  className="flex lg:w-2/3 m-1"
                >
                  {/* <YouTubePreviewer videoId="acd6s_GiRTM" /> */}
                  <VideoBoard
                    videoId={FirstWork.videoId}
                    image={FirstWork.image}
                    title={FirstWork.title}
                    comment={FirstWork.comment}
                  />
                </div>
              </div>
              <div className="lg:flex h-1/2">
                <div
                  // style={{ backgroundColor: generateRandomColor() }}
                  className="flex lg:w-2/3 m-1"
                >
                  {/* <YouTubePreviewer videoId="KWmC_xZwuDY" /> */}
                  <VideoBoard
                    videoId={SecondWork.videoId}
                    image={SecondWork.image}
                    title={SecondWork.title}
                    comment={SecondWork.comment}
                  />
                </div>
                <div
                  // style={{ backgroundColor: generateRandomColor() }}
                  className="flex lg:w-1/3 m-1"
                >
                  {/* <YouTubePreviewer videoId="8aoMvZz-FI4" /> */}
                  <VideoBoard
                    videoId={ThirdWork.videoId}
                    image={ThirdWork.image}
                    title={ThirdWork.title}
                    comment={ThirdWork.comment}
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
