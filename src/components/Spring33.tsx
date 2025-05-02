import FormModal from "@/components/FormModal";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { role, studentsData } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { Classes, PrismaClient, Prisma } from "@prisma/client";
import UpdateClassButton from "@/components/updatef1";
import DeleteClassButton from "./DeleteClassButton";

const prisma = new PrismaClient();



const columns = [
  {
    accessor: "className",
  },

  {
    accessor: "add",
    className: "hidden md:table-cell",
  },

];

const renderRow = (item: Classes) => (
  <tr
    key={item.id}
    className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight"
  >
    <td className="flex items-center gap-4 p-4">
      <div className="flex flex-col">
        <h3 className="font-semibold">{item.subject}{item.classNumber}</h3>
        <p className="text-xs text-gray-500">{item.className}</p>
      </div>
    </td>

    
    <td>
      <div className="flex items-center gap-2">
        
      <div className="p-4">
        <DeleteClassButton classId={item.id} />
      </div>

        
        
      </div>
    </td>
  </tr>
);


const Spring33 = async () =>  {


  const classes = await prisma.classes.findMany({
    
    where: {
      degreePlanId: 6
    },
  });


  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">

      {/* LIST */}
      <Table columns={columns} renderRow={renderRow} data={classes} />
      
    </div>
  );
};

export default Spring33;
