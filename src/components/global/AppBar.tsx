import { BellAlertIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'

const AppBar = () => {
  return (
    <div className='flex justify-between items-center p-3 bg-gray-100 border-b border-gray-200'>
      <input className='px-3 py-2 w-1/3 font-bold focus:outline-none border border-gray-400 rounded-md text-gray-600' type='text' placeholder='Search...' />


      <div className='flex space-x-6 items-center text-gray-800'>
        <p className='text-2xl font-bold'>Hello, Anna!</p>
        <BellAlertIcon className='h-6 w-6' />
        <img className='h-9 w-9 rounded-full' src='https://newprofilepic2.photo-cdn.net//assets/images/article/profile.jpg' alt='' />
      </div>
    </div >
  )
}

export default AppBar
