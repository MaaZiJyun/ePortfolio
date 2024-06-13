import Container from "../_components/Container";
import FadeInContainer from "../_components/FadeInContainer";
import QuotaBoard from "../_components/QuotaBoard";
import Section from "../_components/Section";
import YouTubePreviewer from "../_components/YouTubePreviewer";

const page = () => {
  return (
    <main className="flex flex-col items-center justify-between">
      <Container>
        <div className="flex flex-col h-screen items-center justify-center p-12 lg:p-32 bg-latest-album">
          <span className="text-4xl text-center">
            私の音楽作品をお楽しみください
          </span>
          <span className="mt-4">Welcome to listen to my music works.</span>
        </div>

        <FadeInContainer>
          <div className="lg:flex items-center justify-center lg:my-32">
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
            <div className="flex lg:w-1/2 h-1/2">
              <YouTubePreviewer videoId="haqHcJHe0w0" />
            </div>
          </div>
        </FadeInContainer>
        {/* divider */}
        <div className="hidden lg:flex px-6 lg:px-12 my-12 lg:my-32">
          <div className="w-full h-px bg-black"></div>
        </div>

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
        <FadeInContainer>
          <QuotaBoard
            quota={
              "Here's Domuki, a novice composer of orchestral music with a passion for creating emotional orchestral music. (There may also be pieces that are not orchestral)"
            }
            author={
              "Sincerely thank you for all your support and encouragement, it will help me greatly in learning and growing on my musical journey."
            }
          />
        </FadeInContainer>
      </Container>
    </main>
  );
};
export default page;
