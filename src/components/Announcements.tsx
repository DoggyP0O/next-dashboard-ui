import { Classes, PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();

const Announcements = async () => {
  

  const subject =  prisma.classes.fields.className

  console.log("subject: " + subject)


  return (
    <div className="bg-white p-4 rounded-md">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Spring 2024</h1>
        <span className="text-xs text-gray-400">View All</span>
      </div>
      <div className=" flex flex-col gap-4 mt-4">
        <div className="h-1/4 bg-lamaSkyLight rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">CS2323</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
              MWF
            </span>
            
            
          </div>
          <div className="flex items-center justify-between">
            <h2 className="text-sm text-gray-400 mt-1">Algorithms </h2>
            <span className="text-xs text-gray-400 bg-confirmBlue rounded-md px-1 py-1 gap-2 mt-4">
              Apply
            </span>
            
            
          </div>
          
          
        </div>
        <div className="h-1/4 bg-lamaPurpleLight rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">CS3340</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
              W
            </span>
          </div>
          <div className="flex items-center justify-between">
            <h2 className="text-sm text-gray-400 mt-1">Software Engineering. </h2>
            <span className="text-xs text-gray-400 bg-confirmBlue rounded-md px-1 py-1 gap-2 mt-4">
              Apply
            </span>
            
            
          </div>
        </div>
        <div className="h-1/4 bg-lamaYellowLight rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">CS3350</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
              MWF
            </span>
          </div>
          <div className="flex items-center justify-between">
            <h2 className="text-sm text-gray-400 mt-1">Operating Systems. </h2>
            <span className="text-xs text-gray-400 bg-confirmBlue rounded-md px-1 py-1 gap-2 mt-4">
              Apply
            </span>
            
            
          </div>
        </div>
        <div className="h-1/4 bg-lamaGreenLight rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">PY1300</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
              TTH
            </span>
          </div>
          <div className="flex items-center justify-between">
            <h2 className="text-sm text-gray-400 mt-1">Physics Concepts & Application. </h2>
            <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1 gap-2">
              Apply
            </span>
            
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Announcements;
