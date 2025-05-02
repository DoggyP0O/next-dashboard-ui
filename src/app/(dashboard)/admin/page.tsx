import Announcements from "@/components/Announcements";
import EventCalendar from "@/components/EventCalendar";
import CountChart from "@/components/CountChart";
import FinanceChart from "@/components/FinanceChart";
import UserCard from "@/components/UserCard";
import BigCalendar from "@/components/BigCalender";
import Classes from "@/components/Classes"
import Schedule from "@/components/Schedule"
import Image from "next/image";
import Link from "next/link";

import Table from "@/components/Table";

const AdminPage = () => {
  return (
    <div className="p-4 flex gap-4 flex-row">
      
      <div className="w-full flex flex-col gap-8">
        
        {/* CLASS PLAN */}
        <div className="flex gap-4 flex-row">
          
          <div className="w-1/3 h-[400px] flex flex-col gap-8">
            <Classes />
          </div>
          {/* SCHEDULE CALENDAR */}
          <div className="w-full bg-white p-4 rounded-md">
            <h1 className="text-xl font-semibold">Schedule</h1>
            <BigCalendar />
          </div>
        </div>
        {/* REGISTERED CLASSES */}
        <div className="w-full h-[450px]">
        <div className="bg-white p-4 rounded-md">
        
        <div className="flex flex-col gap-4">
            <div className="p-5 rounded-md border-2 border-gray-100 border-t-4 odd:border-t-lamaSky even:border-t-lamaPurple">
                <div className="flex items-center justify-between">
                <Schedule/>
                
                </div>
                
            </div>    
            
            <div className="flex items-center gap-2">
        
      
        
      </div>
        </div>
    </div>
        </div>
      </div>
      
    </div>
  );
};

export default AdminPage;
