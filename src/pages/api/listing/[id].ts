import { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@/lib/prisma'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const { id } = req.query

  const society = await prisma.society.findUnique(
    {
      where: {
        id: Number(id)
      }
    }
  )
  
  return res.status(200).json(society)
}
