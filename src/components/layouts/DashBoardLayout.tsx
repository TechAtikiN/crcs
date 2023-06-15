import Head from "next/head"
import { AppBar, SideBar } from "../global"

interface Props {
  children: React.ReactNode
}
const DashboardLayout = ({ children }: Props) => {
  return (
    <div>
      <Head>
        <title>CRCS | Dashboard</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className="grid grid-cols-12">
        {/* left section  */}
        <div className="col-span-2 bg-[#212A3E]">
          <SideBar />
        </div>

        {/* right section  */}
        <div className='col-span-10'>
          <AppBar />

          <main className="mx-4 my-6">
            {children}
          </main>
        </div>

      </div>
    </div>
  )
}

export default DashboardLayout
