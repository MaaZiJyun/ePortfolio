import Container from "../_components/Container";
import StudyNavBoard from "../_components/StudyNavBoard";

const page = () => {
  return (
    <main className="flex flex-col items-center justify-between mt-24">
      <Container>
        <div className="flex flex-col items-center justify-between">
          <div className="flex flex-col w-full px-6 lg:px-32">
            <div className="flex w-full flex-col items-center justify-center text-justify">
              <div className="flex flex-col items-center justify-center py-24">
                <div className="flex items-center justify-between w-full text-3xl lg:text-6xl">
                  <span className="text-center ">童夢綺の学習ログ</span>
                </div>
                <div className="flex items-center justify-center mt-6 text-base lg:text-lg space-x-2">
                  {"Dōmuki's Learning Notes".split("").map((char, index) => (
                    <span className="font-normal" key={index}>
                      {char}
                    </span>
                  ))}
                </div>
              </div>
              <div className="w-full h-px bg-black"></div>
              <div className="w-full lg:w-full">
                <StudyNavBoard />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
};
export default page;
