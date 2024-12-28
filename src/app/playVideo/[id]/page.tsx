import YouTubePreviewer from "@/app/_components/_Video/YouTubePreviewer";  
import { MusicList, MusicMetadata } from "@/app/_controllers/MusicWorks";
import { NextPage } from 'next'; // Import NextPage type
// /playVideo/[id]/page.js  

export async function generateStaticParams() {  
  // Define or fetch the possible video IDs  
  return MusicList.map((data: MusicMetadata) => ({  
    id: data.videoId, // Ensure the key is 'id' to match the dynamic route
  }));  
}  

interface Params {
  id: string; // Define the expected structure of params
}

const PlayVideoPage: NextPage<{ params: Params }> = ({ params }) => { // Specify the type for props
  const { id } = params; // Extract the id from the params object

  return (
    <div className="mt-28">
      <div className="h-screen">
        <YouTubePreviewer videoId={id} />
      </div>
    </div>
  );
};

export default PlayVideoPage;