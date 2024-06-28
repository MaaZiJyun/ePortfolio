import Container from "../_components/Container";
import DirectoryBar from "../_components/DirectoryBar";
import StudyNavBoard from "../_components/StudyNavBoard";

const page = () => {
  return (
    <main className="flex flex-col items-center justify-between my-24">
      <Container>
        <div className="flex flex-col items-center justify-between">
          <div className="flex w-full lg:w-3/4 p-6 lg:px-32">
            <DirectoryBar />
          </div>
          <div className="flex w-full lg:w-3/4 flex-col items-center justify-center px-6 lg:px-32 text-justify">
            <div className="flex flex-col py-32 ">
              <div className="flex items-center justify-between text-3xl lg:text-6xl">
                <span className="text-center ">白</span>
                <span className="text-center">板</span>
              </div>
              <div className="flex items-center justify-center mt-6 text-base lg:text-lg space-x-2">
                {"童夢綺の学習白板".split("").map((char, index) => (
                  <span className="font-normal" key={index}>
                    {char}
                  </span>
                ))}
              </div>
            </div>
            <div className="w-full h-px bg-black"></div>
            <StudyNavBoard />
          </div>
        </div>
      </Container>
    </main>
  );
};
export default page;
