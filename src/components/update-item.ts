// /pages/api/update-item.ts (Next.js example)
import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { id, newName } = req.body;

  try {
    const updatedClass = await prisma.classes.update({
      where: { id: id },
      data: { degreePlanId: 5 },
    });
    console.log('Updated user:', updatedClass);
    res.status(200).json(updatedClass);
  } catch (error) {
    res.status(400).json({ error: 'Error updating item' });
  }
}
