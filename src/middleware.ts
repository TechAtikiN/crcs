import { NextRequest, NextResponse } from 'next/server'
import * as jose from 'jose'
export async function middleware(req: NextRequest, res: NextResponse) {
  // get url
  console.log(req.url)
  const bearerToken = req.headers.get('authorization') as string

  if (!bearerToken) {
    return new NextResponse(
      JSON.stringify({ errorMessages: 'Unauthorized Request' }),
      { status: 401}
    )
  }

  const token = bearerToken.split(' ')[1]

  if (!token) {
    return new NextResponse(
      JSON.stringify({ errorMessages: 'Unauthorized Request' }),
      { status: 401}
    )
  }

  const secret = new TextEncoder().encode(process.env.JWT_SECRET as string)

  try {
    await jose.jwtVerify(token, secret)
  } catch (err) {
    return new NextResponse(
      JSON.stringify({ errorMessages: 'Unauthorized Request' }),
      { status: 401}
    )
  }
} 
export const config = {
  matcher: ['/api/home', '/api/analytics', '/api/listing/', '/api/listing/:id']
}