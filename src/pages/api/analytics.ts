import { NextApiRequest, NextApiResponse } from 'next'
import { states, sectors, districts} from '../../../db'
import prisma from '@/lib/prisma'
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
  
  const sectorsData = societies
    .map((society) => society.sectorType)
    .filter((value, index, self) => self.indexOf(value) === index)
    .map((sector) => {  
    return {
      'sector': sector,
      'societies': societies.filter((society) => society.sectorType === sector).length
    }
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
  console.log(liquidationData)
  return res.status(200).json({sectorsData, liquidationData, areas})
}
