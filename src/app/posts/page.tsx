import getPostMetadata from "../_controllers/getPostMetadata";
import Container from "../_components/Container";
import PostPreviewer from "../_components/PostPreviewer";
import fs from "fs";
import AnimeHeroTitle from "../_components/AnimeHeroTitle";
import DynamicText from "../_components/DynamicText";
import matter from "gray-matter";

const getPostContent = (slug: string) => {
  const folder = `posts/`;
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
};

const page = () => {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post) => (
    <PostPreviewer key={post.slug} {...post} />
  ));
  // const contents = ["Hello", "World"];
  // Extract the first 50 words from each post's content
  const contents = postMetadata.map((i) => {
    const post = getPostContent(i.slug);
    // 使用正則表達式檢查是否包含漢字
    const hasChineseCharacters = /[\u4e00-\u9fa5]/.test(post.content);

    let cleanedContent;
    cleanedContent = post.content.replace(/#.*\n?/g, "");
    if (hasChineseCharacters) {
      return cleanedContent
        .slice(0, 50)
        .concat("...")
        .concat(`————「${post.data.title}」${post.data.date}`);
    } else {
      const words = cleanedContent.split(" ");
      return words
        .slice(0, 15)
        .join(" ")
        .concat("...")
        .concat(`————"${post.data.title}" ${post.data.date}`);
    }
  });
  return (
    <main className="flex flex-col items-center justify-between">
      <Container>
        <div className="flex flex-col items-center justify-between">
          <div className="relative w-full">
            <div className="flex flex-col items-center justify-center font-arial text-black py-12">
              <div className="w-full lg:w-2/3">
                <AnimeHeroTitle
                  title={"童夢綺の記事"}
                  description={"読んでくれてありがとう！"}
                />
              </div>
            </div>
            <div className="flex items-center justify-center bg-black py-6 px-10 text-justify text-white">
              <div className="flex items-center justify-center w-full lg:w-3/4">
                <p className="text-sm lg:text-xl font-arial text-center">
                  <DynamicText content={contents} />
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full px-6 lg:px-32">
            <div className="flex flex-col w-full py-12 space-y-4">
              {postPreviews}
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
};
export default page;
