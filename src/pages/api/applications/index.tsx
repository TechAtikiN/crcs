import { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@/lib/prisma'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {

  if (req.method === 'POST') {
    // add new application
    const result = await prisma.application.create({
      data: {
        societyName: req.body.societyName,
        address: req.body.address,
        state: req.body.state,
        district: req.body.district,
        typeOfSociety: req.body.typeOfSociety,
        userName: req.body.userName,
        email: req.body.email,
        contact: req.body.contact,
        pan: req.body.pan,
        tan: req.body.tan,
        serviceTaxNo: req.body.serviceTaxNo,
        designation: req.body.designation,
        date: new Date()
      }
    })
    console.log(result)
    return res.status(200).json({ message: 'Recived Society Registrations Successfully' })
  }
  if (req.method === 'GET') {
    // find all applications
    const result = await prisma.application.findMany()
    return res.status(200).json(result)
  }

}