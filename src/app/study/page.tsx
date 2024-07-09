import Container from "../_components/Container";
import DirectoryBar from "../_components/DirectoryBar";
import StudyNavBoard from "../_components/StudyNavBoard";

const page = () => {
  return (
    <main className="flex flex-col items-center justify-between">
      <Container>
        <div className="flex flex-col items-center justify-between">
          {/* <div className="flex w-full p-6 lg:px-32">
            <DirectoryBar />
          </div> */}
          <div className="flex w-full flex-col items-center justify-center text-justify bg-domukiphoto-study py-24">
            <div className="flex flex-col items-center justify-center py-32">
              <div className="flex items-center justify-between w-full text-3xl lg:text-6xl">
                <span className="text-center ">私の学習ログ</span>
              </div>
              <div className="flex items-center justify-center mt-6 text-base lg:text-lg space-x-2">
                {"Domuki's Learning Log".split("").map((char, index) => (
                  <span className="font-normal" key={index}>
                    {char}
                  </span>
                ))}
              </div>
            </div>
            {/* <div className="w-full h-px bg-black"></div> */}
            <div className="pt-12">
              <StudyNavBoard />
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
};
export default page;
