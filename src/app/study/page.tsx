import Container from "../_components/Container";
import DirectoryBar from "../_components/DirectoryBar";
import StudyNavBoard from "../_components/StudyNavBoard";

const page = () => {
  return (
    <main className="flex flex-col items-center justify-between">
      <Container>
        <div className="flex flex-col items-center justify-between my-32">
          <div className="flex w-full p-6 lg:px-32">
            <DirectoryBar />
          </div>
          <div className="flex flex-col items-center justify-center px-6 lg:px-32 mt-6 text-justify">
            <div className="flex title text-3xl lg:text-6xl pb-6 lg:pb-12">
              <span className="text-center">Notice Board of Study Posts</span>
            </div>
            <StudyNavBoard />
          </div>
          {/* <div className="lg:flex w-full px-6 lg:px-32">
            <div className="flex w-1/2 items-center justify-center bg-white ">
              <div className="p-20">Artificial Intelligence</div>
            </div>
            <div className="flex w-1/2 items-center justify-center bg-gray-200 ">
              <div className="p-20">Blockchain Technology</div>
            </div>
          </div>
          <div className="lg:flex w-full px-6 lg:px-32">
            <div className="flex w-1/2 items-center justify-center bg-gray-200 ">
              <div className="p-20">IELTS</div>
            </div>
            <div className="flex w-1/2 items-center justify-center bg-black text-white">
              <div className="p-20">Mathematics</div>
            </div>
          </div> */}
        </div>
      </Container>
    </main>
  );
};
export default page;
