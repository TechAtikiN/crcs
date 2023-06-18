// named imports
import { PrismaAdapter } from '@next-auth/prisma-adapter'

// default imports
import NextAuth from 'next-auth/next'
import prisma from '@/lib/prisma'
import CredentialsProvider from 'next-auth/providers/credentials'
import GoogleProvider from 'next-auth/providers/google'

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    CredentialsProvider({
    // The name to display on the sign in form (e.g. 'Sign in with...')
    name: 'credentials',
    // The credentials is used to generate a suitable form on the sign in page.
    // You can specify whatever fields you are expecting to be submitted.
    // e.g. domain, username, password, 2FA token, etc.
    // You can pass any HTML attribute to the <input> tag through the object.
    credentials: {
      username: { label: "Username", type: "text", placeholder: "jsmith" },
      email: { label: "Email", type: "text", placeholder: "jsmith" },
      password: { label: "Password", type: "password" }
    },
    async authorize(credentials) {
      const user ={ name:'John Doe', email:'john@gmail.com', password:'123456'}
      return 'hello'
    }
  })
],
secret: process.env.SECRET,
session: {
  strategy: 'jwt',
},
debug: process.env.NODE_ENV === 'development',
}

const handler = NextAuth(authOptions)
export {handler as GET, handler as POST}