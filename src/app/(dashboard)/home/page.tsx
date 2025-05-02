import Plan from "@/components/Plan";
import Image from "next/image";
import Link from "next/link";

const HomePage = () => {
  return (
    <div className="p-4 flex gap-4 flex-row">
      
      <div className="w-full flex flex-col gap-8">
        
        {/* CLASS PLAN */}
        <div className="flex gap-4 flex-row justify-center ">
          
         
          <div className="w-1/2 h-[400px] flex flex-col gap-8 ">
            <div className=" flex flex-col gap-4 mt-4 ">
              {/* THING ONE */}
              <div className="h-1/ bg-lamaSkyLight rounded-md p-4">
                <td className="flex items-center gap-4 p-4">
                  <Link
                    href="/list/students"
                    className="flex items-center justify-center lg:justify-start gap-2"
                  >
                    <Image
                      src={"/viewclasses.png"}
                      alt=""
                      width={40}
                      height={40}
                      className="w-10 h-10 "
                    />
                    <div className="flex flex-col">
                      <h3 className="font-semibold p-[10px]">View Classes</h3>
                    </div>
                  </Link>
                </td>
              </div>
              

              {/* THING TWO */}
              <div className="h-1/3 bg-lamaPurpleLight rounded-md p-4">
              <td className="flex items-center gap-4 p-4">
                <Link
                  href="/teacher"
                  className="flex items-center justify-center lg:justify-start gap-2"
                >
                    <Image
                      src={"/classplan.png"}
                      alt=""
                      width={40}
                      height={40}
                      className="w-10 h-10 "
                    />
                    <div className="flex flex-col">
                    <h3 className="font-semibold p-[10px]">Create Class Plan</h3>
                    </div>
                  </Link>
                </td>
              </div>
              

              {/* THING THREE */}
              <div className="h-1/3 bg-lamaYellowLight rounded-md p-4">
              <td className="flex items-center gap-4 p-4">
                  <Link
                    href="/admin"
                    className="flex items-center justify-center lg:justify-start gap-2"
                  >
                    <Image
                      src={"/register.png"}
                      alt=""
                      width={40}
                      height={40}
                      className="w-10 h-10 "
                    />
                    <div className="flex flex-col">
                    <h3 className="font-semibold p-[10px]">Register for Classes</h3>
                    </div>
                  </Link>
                </td>
            </div> 

          </div>
        </div>
          
      </div>

    </div>
  </div>

  

  

  
  );
};

export default HomePage;
