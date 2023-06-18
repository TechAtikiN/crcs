// named imports
import { DashBoardLayout } from '@/components/layouts'
import type { AppProps } from 'next/app'
import { SessionProvider } from "next-auth/react"

// default imports
import '@/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider>
      <DashBoardLayout>
        <Component {...pageProps} />
      </DashBoardLayout>
    </SessionProvider>
  )
}
