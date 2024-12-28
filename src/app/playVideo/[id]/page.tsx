// /playVideo/[id]/PlayVideoPage.js  
"use client";  

import { NextPage } from 'next';  
import YouTubePreviewer from "@/app/_components/_Video/YouTubePreviewer";  

interface Params {  
  id: string;  
}  

const Page: NextPage<{ params: Params }> = ({ params }) => {  
  const id = Array.isArray(params.id) ? params.id[0] : params.id;  

  return (  
    <div className="mt-28">  
      <div className="h-screen">  
        <YouTubePreviewer videoId={id} />  
      </div>  
    </div>  
  );  
};  

export default Page;