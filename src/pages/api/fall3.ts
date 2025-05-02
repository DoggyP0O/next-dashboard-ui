// app/actions.ts
'use server';

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function updateDegreePlan(classId: number) {
  await prisma.classes.update({
    where: { id: classId },
    data: { degreePlanId: 5 },
  });
}
