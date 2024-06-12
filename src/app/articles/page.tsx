import Section from "../_components/Section";
import getPostMetadata from "../_components/getPostMetadata";
import ArticlePreviewer from "../_components/ArticlePreviewer";
import Container from "../_components/Container";

const page = () => {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post) => (
    <ArticlePreviewer key={post.slug} {...post} />
  ));
  return (
    <main className="flex flex-col items-center justify-between my-24">
      <Container>
        <div className="flex flex-col w-full px-6 lg:px-12">
          <Section
            title={"Articles"}
            description={"There will be some notes about my study work"}
          />
          <div className="flex flex-col w-full">{postPreviews}</div>
        </div>
      </Container>
    </main>
  );
};
export default page;
