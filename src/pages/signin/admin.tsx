import { SignInContent } from '@/components/sigin'
import { ArrowLeftCircleIcon } from '@heroicons/react/24/outline'
import { useRouter } from 'next/router'

const AdminSignIn = () => {

  const router = useRouter()

  return (
    <div className='grid grid-cols-11'>
      <div className='col-span-4 flex flex-col justify-center rounded-r-3xl z-10 items-center min-h-screen bg-red-200'>
        <img className='h-72 w-72 mx-auto -mt-10' src='https://mscs.dac.gov.in/images/MSCS_LOGO.png' alt='logo' />
        <SignInContent />
      </div>

      <div className='col-span-7 z-10 rounded-l-full'>
        <div className='flex flex-col align-middle text-gray-700 space-y-8 my-28 mx-48'>
          <h2 className='text-3xl font-bold text-left'>Login as Admin</h2>

          <input className='signin-input' type='email' placeholder='Email' />
          <input className='signin-input' type='password' placeholder='Password' />

          <button
            className='text-center bg-red-500 hover:bg-red-600 hover:cursor-pointer text-white font-semibold px-4 py-3 w-full'
          >
            Submit
          </button>

          <p className='text-red-500 cursor-pointer font-bold text-right'>Forgot Password?</p>

          <div onClick={() => router.push('/signin/user')} className='flex cursor-pointer items-center'>
            <ArrowLeftCircleIcon className='h-6 w-6 text-gray-700' />
            <p
              className='font-bold w-20 text-xl text-right hover:border-b border-gray-700'
            >
              Go Back
            </p>
          </div>

        </div>
      </div>

    </div>

  )
}

export default AdminSignIn
