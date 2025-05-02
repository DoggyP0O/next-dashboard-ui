import prisma from "@/lib/prisma";
import BigCalendar from "./BigCalender";
import { adjustScheduleToCurrentWeek } from "@/lib/utils";

const BigCalendarContainer = async ({
  id,
}: {
  id: number;
}) => {
  const dataRes = await prisma.classes.findMany({
    where: {
      degreePlanId: 1 //id as number,
    },
  });

  const data = dataRes.map((classes) => ({
    title: classes.className,
    start: classes.startTime,
    end: classes.endTime,
  }));

  const schedule = adjustScheduleToCurrentWeek(data);

  return (
    <div className="">
      <BigCalendar data={schedule} />
    </div>
  );
};

export default BigCalendarContainer;