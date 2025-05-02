import FormModal from "@/components/FormModal";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { role, studentsData } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { Classes, PrismaClient, Prisma } from "@prisma/client";
import UpdateClassButton from "./UpdateClassButton";
import SemesterSelect from "./SemesterSelect";

const prisma = new PrismaClient();



const columns = [
  {
    header: "Class",
    accessor: "className",
  },
  {
    header: "Section",
    accessor: "sectionNumber",
    className: "hidden md:table-cell",
  },
  {
    header: "Dates",
    accessor: "date",
    className: "hidden md:table-cell",
  },
  {
    header: "Add",
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
    <td className="hidden md:table-cell">{item.sectionNumber}</td>
    <td className="hidden md:table-cell">{item.date}</td>
    
    <td>
      <div className="flex items-center gap-2">
        
      <div className="p-4">
        <UpdateClassButton classId={item.id} />
      </div>

        
        
      </div>
    </td>
  </tr>
);

type Props = {
  searchParams: {
    id?: string;
  };
};
const StudentListPage = async ({ searchParams }: Props) =>  {


  const classes = await prisma.classes.findMany({
    
    where: {
      degreePlanId: 5

        
    },

  });


  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      {/* TOP */}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">Pick Semester</h1>
        
      </div>
      <div className="my-4">
      <SemesterSelect />
    </div>
      {/* LIST */}
      <Table columns={columns} renderRow={renderRow} data={classes} />
      
    </div>
  );
};

export default StudentListPage;
