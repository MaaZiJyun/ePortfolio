import Section from "../_components/Section";
import getPostMetadata from "../_controllers/getPostMetadata";
import ArticlePreviewer from "../_components/ArticlePreviewer";
import Container from "../_components/Container";
import FadeInContainer from "../_components/FadeInContainer";

const page = () => {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post) => (
    <ArticlePreviewer key={post.slug} {...post} />
  ));
  return (
    <main className="flex flex-col items-center justify-between">
      <Container>
        <div className="flex flex-col h-screen items-center justify-center p-12 lg:p-32 bg-domukiphoto">
          <span className="text-4xl text-center">
            私の記事を読んでください。
          </span>
          <span className="mt-4">Welcome to read to my posts.</span>
        </div>
        <FadeInContainer>
          <div className="lg:flex px-6 lg:px-12 h-screen items-center justify-center">
            <div className="flex flex-col lg:w-1/2 items-center justify-center my-20">
              <span className="text-6xl">Posts</span>
              <div className="mt-2 space-x-5">
                <span className="text-center">記</span>
                <span className="text-center">事</span>
              </div>
            </div>
            <div className="flex lg:w-1/2">
              <div className="flex flex-col w-full">{postPreviews}</div>
            </div>
          </div>
        </FadeInContainer>
      </Container>
    </main>
  );
};
export default page;
