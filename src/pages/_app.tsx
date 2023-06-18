// type imports
import type { AppProps } from 'next/app'

// named imports
import { DashBoardLayout } from '@/components/layouts'

// default imports
import '@/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <DashBoardLayout>
      <Component {...pageProps} />
    </DashBoardLayout>
  )
}
