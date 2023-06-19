import { useUserStore } from '@/store/UserStore'
import { BellAlertIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { useEffect } from 'react'

const AppBar = () => {
  const [user, setUser] = useUserStore((state: any) => [state.user, state.setUser])

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem('user')!)
    setUser(loggedInUser)
  }, [])
  return (
    <div className='flex justify-between items-center p-3 bg-gray-100 border-b border-gray-200'>
      <input className='px-3 py-2 w-1/3 font-bold focus:outline-none border border-gray-400 rounded-md text-gray-600' type='text' placeholder='Search...' />


      <div className='flex space-x-6 items-center text-gray-800'>
        <p className='text-2xl font-bold'>Hello, {user?.name}!</p>
        <BellAlertIcon className='h-6 w-6' />
      </div>
    </div >
  )
}

export default AppBar
