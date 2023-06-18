import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/lib/prisma';
import validator from 'validator'
import bcrypt from 'bcrypt'
import * as jose from 'jose'
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  
  if (req.method === 'POST') {
    const { name, email, password, phone, city, role } = req.body
    
    const errors: string[] = []

    const validationSchema = [
      {
        valid: validator.isLength(name, { min: 3, max: 25 }),
        errorMessage: 'Name is invalid'
      },
      {
        valid: validator.isEmail(email),
        errorMessage: 'Email is invalid'
      },
      {
        valid: validator.isStrongPassword(password),
        errorMessage: 'Weak Password'
      }
    ]

    validationSchema.forEach((rule) => {
      if (!rule.valid) {
        errors.push(rule.errorMessage)
      }
    })

    if (errors.length) {
      return res.status(400).json({
        errorMessages: errors[0]
      })
    }

    const userWithEmail = await prisma.user.findUnique({
      where: {
        email
      }
    })

    if (userWithEmail) {
      return res.status(400).json({
        errorMessages: 'Email already exists'
      })
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        phone: phone,
        city: city,
        role: role
      }
    })

    const alg = 'HS256'
    const secret = new TextEncoder().encode(process.env.JWT_SECRET)
    
    const token = await new jose.SignJWT({ email: user.email })
      .setProtectedHeader({ alg })
      .setExpirationTime('24h')
      .sign(secret)
    

    return res.status(200).json({
      token: token,
      email: user.email,
      role: user.role,
      name: user.name,
      id: user.id
    })
  }
  return res.status(405).json('Unknown Endpoint')
}
