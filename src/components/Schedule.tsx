import FormModal from "@/components/FormModal";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { role, subjectsData, calendarClasses } from "@/lib/data";
import Image from "next/image";
import { Classes, PrismaClient } from "@prisma/client";
import DeleteClassButton from "./DeleteClassButton";

const prisma = new PrismaClient();

type Subject = {
  id: number;
  name: string;
  teachers: string;
};

type Class = {
    id: number;
    title: string;
    name: string;
    section: string;
    date: string;
    time: string;
}

const columns = [
  {
    header: "Class",
    accessor: "classNumber",
  },
  {
    header: "Section",
    accessor: "sectionNumber",
    className: "hidden md:table-cell",
  },
  {
    header: "Name",
    accessor: "className",
    className: "hidden md:table-cell",
  },
  {
    header: "Date",
    accessor: "date",
    className: "hidden md:table-cell",
  },
  {
    header: "Time",
    accessor: "description",
    className: "hidden md:table-cell",
  },
  {
    header: "Remove Class",
    accessor: "buttons",
  },
];
const renderRow = (item: Classes) => (
  <tr
    key={item.id}
    className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight"
  >
    <td className="flex items-center gap-4 p-4">{item.classNumber}</td>
    <td className="hidden md:table-cell">{item.sectionNumber}</td>
    <td className="hidden md:table-cell">{item.className}</td>
    <td className="hidden md:table-cell">{item.date}</td>
    <td className="hidden md:table-cell">{item.date}</td>
    
    <td>
    <div className="p-4">
        <DeleteClassButton classId={item.id} />
      </div>
    </td>
  </tr>
);

const Schedule = async () => {

  const classes = await prisma.classes.findMany({
    where: {
      degreePlan: {
        semester: 'Current'
      }
        
    },

  });
  

  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      {/* TOP */}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">All Subjects</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
              <Image src="/filter.png" alt="" width={14} height={14} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
              <Image src="/sort.png" alt="" width={14} height={14} />
            </button>
            {role === "admin" && <FormModal table="teacher" type="create" />}
          </div>
        </div>
      </div>
      {/* LIST */}
      <Table columns={columns} renderRow={renderRow} data={classes} />
      {/* PAGINATION */}
      <Pagination />
    </div>
  );
};

export default Schedule;
