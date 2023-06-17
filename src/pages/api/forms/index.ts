import { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@/lib/prisma'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {

  if (req.method === 'POST') {
    // add new application
    const result = await prisma.form.create({
      data: {
        email: req.body.email,
        input1: req.body.data.input1,
        input2: req.body.data.input2,
        input3: req.body.data.input3,
        input4: req.body.data.input4,
        input5: req.body.data.input5,
      }
    })
    return res.status(200).json({ message: 'Received Form successfully' })
  }
  // find all applications
  if (req.method === 'GET') {
    // find all applications
    const result = await prisma.application.findMany()
    return res.status(200).json(result)
  }
  // find one application
  if (req.method === 'GET') {
    const email = req.query.email
    // find one application
    const result = await prisma.form.findUnique({
      where: {
        email: String(email)
      }
    })
    return res.status(200).json(result)
  }
}