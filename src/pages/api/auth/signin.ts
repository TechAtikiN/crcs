import { NextApiRequest, NextApiResponse } from 'next'

import prisma from '@/lib/prisma'
import validator from 'validator'
import bcrypt from 'bcrypt'
import * as jose from 'jose'
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {

    const { email, password } = req.body
    const errors: string[] = []

    const validationSchema = [
      {
        valid: validator.isEmail(email),
        errorMessage: 'Email is invalid'
      },
      {
        valid: validator.isLength(password, { min: 1 }),
        errorMessage: 'Password is invalid'
      }
    ]

    validationSchema.forEach((rule) => {
      if (!rule.valid) {
        errors.push(rule.errorMessage)
      }
    }
    )

    if(errors.length) {
      return res.status(400).json({
        errorMessages: errors[0]
      })
    }

    const userWithEmail = await prisma.user.findUnique({
      where: {
        email
      }
    })

    if (!userWithEmail) {
      return res.status(401).json({
        errorMessages: 'Email does not exist'
      })
    }

    const passwordMatch = await bcrypt.compare(password, userWithEmail.password)

    if (!passwordMatch) {
      return res.status(401).json({
        errorMessages: 'Password is incorrect'
      })
    }

    const alg = 'HS256'
    const secret = new TextEncoder().encode(process.env.JWT_SECRET)
    
    const token = await new jose.SignJWT({ email: userWithEmail.email })
      .setProtectedHeader({ alg })
      .setExpirationTime('24h')
      .sign(secret)
    
    return res.status(200).json({
      token: token,
      id: userWithEmail.id,
      email: userWithEmail.email,
      role: userWithEmail.role,
      name: userWithEmail.name
    })

  }
  return res.status(405).json('Unknown Endpoint')
}
