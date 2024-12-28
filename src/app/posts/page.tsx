import getPostMetadata from "../_controllers/getPostMetadata";
import Container from "../_components/Container";
import PostPreviewer from "../_components/PostPreviewer";
import Section from "../_components/Section";
import DirectoryBar from "../_components/DirectoryBar";
import AnimeHeroTitle from "../_components/AnimeHeroTitle";

const page = () => {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post) => (
    <PostPreviewer key={post.slug} {...post} />
  ));
  return (
    <main className="flex flex-col items-center justify-between">
      <Container>
        <div className="flex flex-col items-center justify-between">
          <div className="relative w-full">
            <div className="flex flex-col items-center justify-center font-arial bg-green-700 mb-48 lg:mb-20 text-white">
              <AnimeHeroTitle
                title={"童夢綺の記事"}
                description={"読んでくれてありがとう！"}
              />
            </div>
          </div>
          <div className="flex flex-col w-full px-6 lg:px-32">
            <div className="flex flex-col w-full py-12">{postPreviews}</div>
          </div>
        </div>
      </Container>
    </main>
  );
};
export default page;
