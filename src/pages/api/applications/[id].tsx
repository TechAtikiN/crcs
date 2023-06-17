import { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@/lib/prisma'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const { id } = req.query

  const application = await prisma.application.findUnique(
    {
      where: {
        id: Number(id)
      }
    }
  )

  if (req.method === 'PUT') {
    const { status } = req.body
    const updatedApplication = await prisma.application.update({
      where: {
        id: Number(id)
      },
      data: {
        status
      }
    })
    return res.status(200).json(updatedApplication)
  }

  return res.status(200).json(application)
}