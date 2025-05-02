import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

type DataRecieved = {
  classId: number
};

const Delete = async ({classId}: DataRecieved) => {
  const updatedUser = await prisma.classes.update({
    where: { id: classId },
    data: { degreePlanId: null }, // <- Set name field to null
  });

  console.log('Updated user:', updatedUser);
};

export default Delete;