import { useRouter } from 'next/router'
import { ChartBarIcon, Cog6ToothIcon, HomeIcon, QuestionMarkCircleIcon, QueueListIcon } from '@heroicons/react/24/solid'
import { BuildingLibraryIcon, ClipboardDocumentCheckIcon } from '@heroicons/react/24/outline'

import Link from 'next/link'
import { useEffect } from 'react'
import { useUserStore } from '@/store/UserStore'

const adminLinks = [
  {
    name: 'Dashboard',
    href: '/',
    icon: <HomeIcon />
  },
  {
    name: 'Analytics',
    href: '/analytics',
    icon: <ChartBarIcon />
  },
  {
    name: 'Society Listing',
    href: '/listing',
    icon: <QueueListIcon />
  },
  {
    name: 'Applications Listing',
    href: '/applications',
    icon: <ClipboardDocumentCheckIcon />
  },
  {
    name: 'Help',
    href: '/help',
    icon: <QuestionMarkCircleIcon />
  },
  {
    name: 'Settings',
    href: '/settings',
    icon: <Cog6ToothIcon />
  },
]

const userLinks = [
  {
    name: 'Society Registration',
    href: '/user/society-registration',
    icon: <BuildingLibraryIcon />
  },
  {
    name: 'View Forms',
    href: '/user/forms',
    icon: <ClipboardDocumentCheckIcon />
  },
  {
    name: 'Grievances',
    href: '/user/grievances',
    icon: <QueueListIcon />
  },
  {
    name: 'Settings',
    href: '/user/settings',
    icon: <Cog6ToothIcon />
  },
]

const SideBar = () => {
  const [user, setUser] = useUserStore((state: any) => [state.user, state.setUser])

  useEffect(() => {
    const loggedInUser = localStorage.getItem('user')
    setUser(loggedInUser)
    console.log(loggedInUser)
  }, [])

  const router = useRouter()
  const currentPath = router.pathname.split('/')[1]
  const userCurrentPath = router.pathname.split('/')[2]

  if (user?.role === 'ADMIN') {
    return (
      <div className='min-h-screen p-5'>
        <div className='flex space-x-4 ml-6 mx-auto cursor-pointer'>
          <img className='h-7 w-7' src='https://mscs.dac.gov.in/images/MSCS_LOGO.png' alt='' />
          <h1 className='text-white font-bold text-xl'>CRCS.</h1>
        </div>

        <div className='flex flex-col space-y-6 mt-10'>
          {adminLinks.map(link => (
            <Link
              href={link.href}
              key={link.name}
              className={`${link.href.split('/')[1] === currentPath ? 'text-white' : 'text-gray-400'} hover:text-white hover:scale-105 font-bold`}
            >
              <div className='flex space-x-4'>
                <p className='h-6 w-6'>{link.icon}</p>
                <p>{link.name}</p>
              </div>
            </Link>
          ))}
        </div>

        <Link href={'/settings'} className='flex absolute bottom-10 hover:scale-105 cursor-pointer justify-start space-x-4 items-center'>
          <div className='p-6 bg-gray-300 rounded-full' />
          <div className='flex flex-col'>
            <p className='text-white font-semibold'>{user?.name}</p>
            <p className='text-gray-400 text-md'>{user?.email}</p>
          </div>
        </Link>

      </div>
    )
  } else {
    return (
      <div className='min-h-screen p-5'>
        <div className='flex space-x-4 ml-6 mx-auto cursor-pointer'>
          <img className='h-7 w-7' src='https://mscs.dac.gov.in/images/MSCS_LOGO.png' alt='' />
          <h1 className='text-white font-bold text-xl'>CRCS.</h1>
        </div>

        <div className='flex flex-col space-y-6 mt-10'>
          {userLinks.map(link => (
            <Link
              href={link.href}
              key={link.name}
              className={`${link.href.split('/')[2] === userCurrentPath ? 'text-white' : 'text-gray-400'} hover:text-white hover:scale-105 font-bold`}
            >
              <div className='flex space-x-4'>
                <p className='h-6 w-6'>{link.icon}</p>
                <p>{link.name}</p>
              </div>
            </Link>
          ))}
        </div>

        <Link href={'/settings'} className='flex absolute bottom-10 hover:scale-105 cursor-pointer justify-start space-x-4 items-center'>
          <div className='p-6 bg-gray-300 rounded-full' />
          <div className='flex flex-col'>
            <p className='text-white font-semibold'>{user?.name}</p>
            <p className='text-gray-400 text-md'>{user?.email}</p>
          </div>
        </Link>

      </div>
    )
  }
}

export default SideBar
