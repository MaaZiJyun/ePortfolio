import Container from "../_components/Container";
import FadeInContainer from "../_components/FadeInContainer";
import QuotaBoard from "../_components/QuotaBoard";
import Section from "../_components/Section";
import YouTubePreviewer from "../_components/YouTubePreviewer";

const page = () => {
  return (
    <main className="flex flex-col items-center justify-between">
      <Container>
        <div className="bg-latest-album">
          <div className="flex flex-col h-screen items-center justify-center p-12 lg:p-32">
            <span className="text-3xl lg:text-6xl text-center">
              私の音楽作品
            </span>
            <span className="mt-4">Welcome to listen to my music works.</span>
          </div>
          {/* divider */}
          <div className="lg:flex px-6 lg:px-12">
            <div className="w-full h-px bg-black"></div>
          </div>
          <FadeInContainer>
            <div className="lg:flex h-screen items-center justify-center lg:py-32">
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
              <div className="flex lg:w-1/2">
                <YouTubePreviewer videoId="haqHcJHe0w0" />
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
          <div className="parallax-section">
            <div className="content space-y-6 lg:w-1/2">
              <p className="text-lg">
                Domuki is an independent musician passionate about music
                creation.Here are the key genres she explores:
              </p>
              <h1 className="text-3xl lg:text-6xl">
                Electronic, Orchestral, Experimental, Chinese, POP,
                Instrumental, Video Game Music, etc.
              </h1>
              <p className="text-xl lg:text-2xl">
                If you are interested in my music works or collaboration with me, feel
                free to send me an email:{" "}
                <span className="italic underline">Domukino@gmail.com</span>! Thank you ~
              </p>
            </div>
          </div>
        </FadeInContainer>
        <FadeInContainer>
          <div className="flex flex-col lg:px-12 mt-32 lg:mb-32">
            <div className="flex flex-col items-center lg:items-end justify-center pb-32">
              <span className="text-center text-3xl lg:text-6xl">
                Check out more works
              </span>
              <span className="text-center mt-5">もっと多くの作品をご覧</span>
            </div>

            <div className="lg:flex">
              <div className="flex lg:flex-1 bg-sketch">
                <YouTubePreviewer videoId="hT3ABJKcMSE" />
              </div>
              <div className="flex lg:flex-1 bg-sketch">
                <YouTubePreviewer videoId="acd6s_GiRTM" />
              </div>
            </div>
            <div className="lg:flex lg:mb-20">
              <div className="flex lg:flex-1 bg-sketch">
                <YouTubePreviewer videoId="KWmC_xZwuDY" />
              </div>
              <div className="flex lg:flex-1 bg-sketch">
                <YouTubePreviewer videoId="8aoMvZz-FI4" />
              </div>
            </div>
          </div>
        </FadeInContainer>
      </Container>
    </main>
  );
};
export default page;
