import getPostMetadata from "../_controllers/getPostMetadata";
import Container from "../_components/Container";
import FadeInContainer from "../_components/FadeInContainer";
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
          <div className="flex w-full p-6 lg:px-32">
            <DirectoryBar />
          </div>

          <div className="flex flex-col w-full px-6 lg:px-32">
            <Section
              title={"記事"}
              description={
                "I will share some of my personal thoughts or insights here."
              }
            />
            <div className="flex flex-col w-full py-6">{postPreviews}</div>
          </div>
        </div>
      </Container>
    </main>
  );
};
export default page;
