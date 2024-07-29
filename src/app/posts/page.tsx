import getPostMetadata from "../_controllers/getPostMetadata";
import Container from "../_components/Container";
import PostPreviewer from "../_components/PostPreviewer";
import Section from "../_components/Section";
import DirectoryBar from "../_components/DirectoryBar";

const page = () => {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post) => (
    <PostPreviewer key={post.slug} {...post} />
  ));
  return (
    <main className="flex flex-col items-center justify-between my-24">
      <Container>
        <div className="flex flex-col items-center justify-between">
          <div className="flex flex-col w-full px-6 lg:px-32">
            <div className="flex w-full flex-col items-center justify-center text-justify">
              <div className="flex flex-col items-between justify-center py-24">
                <div className="flex items-center justify-center w-full text-3xl lg:text-6xl">
                  <span className="text-center ">童夢綺の記事</span>
                </div>
                <div className="flex items-center justify-center mt-6 text-base lg:text-lg space-x-2">
                  {"Dōmuki's blog".split("").map((char, index) => (
                    <span className="font-normal" key={index}>
                      {char}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="w-full h-px bg-black"></div>
            <div className="flex flex-col w-full py-12">{postPreviews}</div>
          </div>
        </div>
      </Container>
    </main>
  );
};
export default page;
