"use client"
import { useSearchParams } from "next/navigation";  
import YouTubePreviewer from "@/app/_components/_Video/YouTubePreviewer";  

const VideoPage = () => {  
  const searchParams = useSearchParams();  
  const videoId = searchParams.get("id");  

  if (!videoId) {  
    return <div>404 - Video Not Found</div>;  
  }  

  return (  
    <div className="mt-28">  
      <div className="h-screen">  
        <YouTubePreviewer videoId={videoId} />  
      </div>  
    </div>  
  );  
};  

export default VideoPage;