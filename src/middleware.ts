import { NextRequest, NextResponse } from 'next/server'
import * as jose from 'jose'
export async function middleware(req: NextRequest, res: NextResponse) {
  console.log('middleware')
} 
export const config = {
  matcher: []
}