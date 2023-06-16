// named imports
import { ArrowLeftCircleIcon } from '@heroicons/react/24/outline'

// default imports
import Link from 'next/link'
import Image from 'next/image'
import { SignIContent } from '@/components/sigin'

const AdminSignIn = () => {
  return (
    <div className='grid grid-cols-11'>
      <div className='col-span-4 z-10 min-h-screen bg-gradient-to-br from-rose-600 to-red-400 border-r shadow-sm relative'>
        <SignIContent />

        {/* footer  */}
        <div className='absolute bottom-10 left-0 w-full text-center'>
          <p className='text-center font-semibold text-sm text-white italic'>
            &copy; 2023 MSCS. All rights reserved.
          </p>
        </div>
      </div>

      <div className='col-span-7 z-10 rounded-l-full mt-20'>
        <div className='flex flex-col align-middle text-gray-700 space-y-8 my-28 mx-48'>
          <h2 className='text-3xl font-bold text-left'>Login as Admin</h2>

          <input className='signin-input' type='email' placeholder='Email' />
          <input className='signin-input' type='password' placeholder='Password' />

          <button className='text-center bg-red-500 hover:bg-red-600 hover:cursor-pointer text-white font-semibold px-4 py-3 w-full'>
            Submit
          </button>

          <p className='text-red-500 cursor-pointer font-bold text-right'>Forgot Password?</p>

          <Link
            href='/signin/user'
            className='flex cursor-pointer items-center'
          >
            <ArrowLeftCircleIcon className='h-6 w-6 text-gray-700' />
            <p className='font-bold w-20 text-xl text-right hover:border-b border-gray-700'>
              Go Back
            </p>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default AdminSignIn
