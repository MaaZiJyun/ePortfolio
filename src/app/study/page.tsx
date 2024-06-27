import Container from "../_components/Container";
import DirectoryBar from "../_components/DirectoryBar";
import StudyNavBoard from "../_components/StudyNavBoard";

const page = () => {
  return (
    <main className="flex flex-col items-center justify-between my-24">
      <Container>
        <div className="flex flex-col items-center justify-between">
          <div className="flex w-full p-6 lg:px-32">
            <DirectoryBar />
          </div>
          <div className="flex flex-col items-center justify-center px-6 lg:px-32 text-justify">
            <div className="flex title text-3xl lg:text-6xl py-32">
              <span className="text-center">Notice Board of Study Posts</span>
              <p></p>
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
