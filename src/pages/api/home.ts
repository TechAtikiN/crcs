import { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@/lib/prisma'
import jwt from 'jsonwebtoken'
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {

  // Society data of 100 societies
  const societies = await prisma.society.findMany()

  // Total number of societies registered
  const totalRegistrations = await prisma.society.count()

  // Total number of states in which societies are registered
  const totalStates = societies.
    map((society) => society.state)
    .filter((value, index, self) => self.indexOf(value) === index).length
  
  // Total number of societies registered in 2022
  const recentRegistrations = societies
    .map(society => society.dateOfRegistration)
    .map(date => (date.includes('2022') === true))
    .filter(value => value === true).length
  
  // Total number of sectors in which societies are registered
  const totalSectors = societies.
    map((society) => society.sectorType)
    .filter((value, index, self) => self.indexOf(value) === index).length

  // sectors data along with their percentage
  const sectors = societies
    .map((society) => society.sectorType)
    .filter((value, index, self) => self.indexOf(value) === index)
    .map((sector) => {  
    return {
      'sector': sector,
      'percentage': (societies.filter((society) => society.sectorType === sector).length / totalRegistrations) * 100
    }
  })
  
  const badgeData = [ 
    {
      'title': 'Total Registrations',
      'value': totalRegistrations,
    },
    {
      'title': 'Total States',
      'value': totalStates,
    },
    {
      'title': 'Total Sectors',
      'value': totalSectors,
    },
    {
      'title': 'Recent Registrations',
      'value': recentRegistrations,
    },
  ]
  
  // society data over the years
  const societyDataOverYears = societies.map((society) => {
    return {
      'year': society.dateOfRegistration.split('/')[2],
      'count': societies.filter((s) => s.dateOfRegistration.split('/')[2] === society.dateOfRegistration.split('/')[2]).length
    }
  }).filter((value, index, self) => self.findIndex((s) => s.year === value.year) === index)

  // distribution of socities in various states
  const stateData = societies
    .map((society) => society.state)
    .filter((value, index, self) => self.indexOf(value) === index)
    .map((state) => {
      return {
        'state': state,
        'count': societies.filter((society) => society.state === state).length
      }
    })

  return res.status(200).json({'stateData': stateData, 'societyData': societyDataOverYears, 'badgeData': badgeData, 'sectors': sectors})
}