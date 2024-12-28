import YouTubePreviewer from "@/app/_components/_Video/YouTubePreviewer";

const PostPage = (props: any) => {
  const slug = props.params.slug;

  return (
    <>
      <div className="mt-28">
        <div className="h-screen">
          <YouTubePreviewer videoId={slug} />
        </div>
      </div>
    </>
  );
};
export default PostPage;
