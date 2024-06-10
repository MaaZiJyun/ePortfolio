import Section from "../components/Section";
import getPostMetadata from "../components/getPostMetadata";
import ArticlePreviewer from "../components/ArticlePreviewer";

const page = () => {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post) => (
    <ArticlePreviewer key={post.slug} {...post} />
  ));
  return (
    <main className="flex flex-col items-center justify-between">
      <div className="flex flex-col w-full px-6 lg:px-12">
        <Section
          title={"Articles"}
          description={"There will be some notes about my study work"}
        />
        <div className="flex flex-col w-full">{postPreviews}</div>
      </div>
    </main>
  );
};
export default page;
