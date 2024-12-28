// /playVideo/[id]/page.js  

export async function generateStaticParams() {  
  // Define or fetch the possible video IDs  
  const ids = ["video1", "video2", "video3"]; // Replace with actual video IDs  

  // Return an array of objects with the id parameter  
  return ids.map((id) => ({  
    id,  
  }));  
}  

import YouTubePreviewer from "@/app/_components/_Video/YouTubePreviewer";  
import { NextPage } from 'next'; // Import NextPage type

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