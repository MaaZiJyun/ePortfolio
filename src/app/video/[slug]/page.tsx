import YouTubePreviewer from "@/app/_components/_Video/YouTubePreviewer";
import { FaceSmileIcon, PowerIcon } from "@heroicons/react/16/solid";

const VideoPage = (props: any) => {
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
export default VideoPage;
