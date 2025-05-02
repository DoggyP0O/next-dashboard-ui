import Announcements from "@/components/Announcements";
import Plan from "@/components/Plan";
import Pagination from "@/components/Pagination";
import Image from "next/image";
import { Classes } from "@prisma/client";
import Fall1 from "@/components/Fall1";
import Fall2 from "@/components/Fall2";
import Fall3 from "@/components/Fall3";
import Fall4 from "@/components/Fall4";
import Spring1 from "@/components/Spring1";
import Spring2 from "@/components/Spring2";
import Spring3 from "@/components/Spring3";
import Spring4 from "@/components/Spring4";
import Fall11 from "@/components/Fall11";
import Fall22 from "@/components/Fall22";
import Fall33 from "@/components/Fall33";
import Fall44 from "@/components/Fall44";
import Spring11 from "@/components/Spring11";
import Spring22 from "@/components/Spring22";
import Spring33 from "@/components/Spring33";
import Spring44 from "@/components/Spring44";


const TeacherPage = (item: Classes) => {
  return (
    <div className="flex-1 p-2 flex gap-2 :flex-row">
      <div className="w-1/6 h-[650px] bg-white p-2 rounded-md">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-semibold">Fall 1</h1>
        </div>
      {/* RIGHT */}
        <div className="w-full  flex flex-col gap-8">
          <Fall11 />
          
        </div>
        <h1 className="hidden md:block text-lg font-semibold">Add Classes</h1>
        <div className="w-full  flex flex-col gap-8">
          <Fall1 />
          
        </div>
      </div> 

      <div className="w-1/6 h-[650px] bg-white p-2 rounded-md">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-semibold">Spring 1</h1>
        </div>
      {/* RIGHT */}
        <div className="w-full  flex flex-col gap-8">
        <Fall22 />
          
        </div>
        <h1 className="hidden md:block text-lg font-semibold">Add Classes</h1>
        <div className="w-full  flex flex-col gap-8">
        <Fall2 />
          
        </div>
      </div> 

      <div className="w-1/6 h-[650px] bg-white p-2 rounded-md">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-semibold">Fall 2</h1>
        </div>
      {/* RIGHT */}
        <div className="w-full  flex flex-col gap-8">
        <Fall33 />
          
        </div>
        <h1 className="hidden md:block text-lg font-semibold">Add Classes</h1>
        <div className="w-full  flex flex-col gap-8">
        <Fall3 />
          
        </div>
      </div> 

      <div className="w-1/6 h-[650px] bg-white p-2 rounded-md">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-semibold">Spring 2</h1>
        </div>
      {/* RIGHT */}
        <div className="w-full  flex flex-col gap-8">
        <Fall44 />
          
        </div>
        <h1 className="hidden md:block text-lg font-semibold">Add Classes</h1>
        <div className="w-full  flex flex-col gap-8">
        <Fall4 />
          
        </div>
      </div> 

      <div className="w-1/6 h-[650px] bg-white p-2 rounded-md">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-semibold">Fall 3</h1>
        </div>
      {/* RIGHT */}
        <div className="w-full  flex flex-col gap-8">
        <Spring11 />
          
        </div>
        <h1 className="hidden md:block text-lg font-semibold">Add Classes</h1>
        <div className="w-full  flex flex-col gap-8">
        <Spring1 />
          
        </div>
        
      </div> 

      <div className="w-1/6 h-[650px] bg-white p-2 rounded-md">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-semibold">Spring 3</h1>
        </div>
      {/* RIGHT */}
        <div className="w-full  flex flex-col gap-8">
        <Spring22 />
          
        </div>
        <h1 className="hidden md:block text-lg font-semibold">Add Classes</h1>
        <div className="w-full  flex flex-col gap-8">
        <Spring2 />
          
        </div>
      </div> 
      <div className="w-1/6 h-[650px] bg-white p-2 rounded-md">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-semibold">Fall 4</h1>
        </div>
      {/* RIGHT */}
        <div className="w-full  flex flex-col gap-8">
        <Spring33 />
          
        </div>
        <h1 className="hidden md:block text-lg font-semibold">Add Classes</h1>
        <div className="w-full  flex flex-col gap-8">
        <Spring3 />
          
        </div>
      </div> 
      <div className="w-1/6 h-[650px] bg-white p-2 rounded-md">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-semibold">Spring 4</h1>
        </div>
      {/* RIGHT */}
        <div className="w-full  flex flex-col gap-8">
        <Spring44 />
          
        </div>
        <h1 className="hidden md:block text-lg font-semibold">Add Classes</h1>
        <div className="w-full  flex flex-col gap-8">
        <Spring4 />
          
        </div>
      

      </div> 




      
    </div>

    
  
  );
};

export default TeacherPage;
