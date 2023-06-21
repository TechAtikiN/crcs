import { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@/lib/prisma'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {

  const { state, sector, yearOfRegistration } = req.query
  
  let societies = await prisma.society.findMany(
    {
      where: {
        state: state as string,
        sectorType: sector as string,
        dateOfRegistration: yearOfRegistration as string,
      }
    }
  )
  
  return res.status(200).json(societies)
}
