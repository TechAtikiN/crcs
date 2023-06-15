import { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@/lib/prisma'
import { states, sectors, districts} from '../../../db'
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  // Society data of 100 societies
  const societies = await prisma.society.findMany()

  let areas: string[] = []
  societies.forEach((society) => {
    society.areaOfOperation.split(',').forEach((area) => {
      areas.push(area)
    })
  })
  
  const type = req.query.type
  let liquidationData = states

  if (type === 'state') {
    liquidationData = states
  } else if (type === 'district') {
    liquidationData = districts
  } else if (type === 'sectors') {
    liquidationData = sectors
  }

  return res.status(200).json({liquidationData, areas})
}
