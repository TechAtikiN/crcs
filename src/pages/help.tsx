import { useUserStore } from '@/store/UserStore'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

import Link from 'next/link'
import { CursorArrowRaysIcon, DocumentChartBarIcon, HomeIcon, ServerStackIcon } from '@heroicons/react/24/outline'

const features = [
  {
    title: 'Home Page',
    description: 'View the aggregated analysis of all the registered societies in India',
    icon: <HomeIcon />
  },
  {
    title: 'Analytics',
    description: 'View the analysis of all the registered societies in India',
    icon: <CursorArrowRaysIcon />
  },
  {
    title: 'Society Listing',
    description: 'View the list of all the registered societies in India',
    icon: <DocumentChartBarIcon />
  },
  {
    title: 'Application Listing',
    description: 'View the list of all the applications submitted by the societies',
    icon: <ServerStackIcon />
  }
]

const Help = () => {
  const [user, setUser] = useUserStore((state: any) => [state.user, state.setUser])

  const router = useRouter()

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem('user')!)
    const userIsAdmin = user?.role === 'ADMIN' || loggedInUser?.role === 'ADMIN'
    if (!userIsAdmin) router.push('/user/login')
  })

  return (
    <div>
      <h2 className='font-bold text-3xl text-red-500'>Help Page for CRCS Dashboard</h2>
      <div className='flex justify-center mx-80 space-x-10 bg-[#212A3E] rounded-3xl p-5 mt-10 items-center'>
        <div className='flex flex-col space-y-3'>
          <h3 className='font-bold text-2xl text-white'>MULTI-STATE CO-OPERATIVE SOCIETIES</h3>
          <p className='text-lg font-semibold text-gray-300'>Ministry of Cooperation, Govt. of India</p>
          <Link target='_blank' href='https://mscs.dac.gov.in/' className='dashboard-button'>Visit Website</Link>
        </div>
        <img className='h-40 w-40' src='https://mscs.dac.gov.in/images/MSCS_LOGO.png' />
      </div>

      <div className='grid grid-cols-2 mx-40 gap-x-10 gap-y-10'>
        {features.map((feature, index) => (
          <div key={index} className='flex flex-col bg-red-100 rounded-xl p-6 space-y-3 mt-10'>
            <div className='flex space-x-5 items-center'>
              <div className='h-10 w-10 bg-red-500 text-white rounded-full p-2'>
                {feature.icon}
              </div>
              <h3 className='font-bold text-2xl text-red-500'>{feature.title}</h3>
            </div>
            <p className='text-lg font-semibold text-gray-600'>{feature.description}</p>

          </div>
        ))}
      </div>
    </div>
  )
}

export default Help