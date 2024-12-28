"use client"
import { useParams } from "next/navigation";  
import YouTubePreviewer from "@/app/_components/_Video/YouTubePreviewer";  

const PlayVideoPage = () => {  
  const { id } = useParams<{ id: string }>();  

  const videoId = Array.isArray(id) ? id[0] : id;  

  return (  
    <div className="mt-28">  
      <div className="h-screen">  
        <YouTubePreviewer videoId={videoId} />  
      </div>  
    </div>  
  );  
};  

export default PlayVideoPage;