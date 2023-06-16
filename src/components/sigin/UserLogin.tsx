import { useRouter } from 'next/router'

interface Props {
  setAuthState: (state: string) => void
}

const UserLogin = ({ setAuthState }: Props) => {

  const router = useRouter()

  return (
    <div className='flex flex-col align-middle text-gray-700 space-y-8 my-28 mx-48'>
      <h2 className='text-3xl font-bold text-left'>Login To Your Account</h2>

      <input className='signin-input' type='email' placeholder='Email' />
      <input className='signin-input' type='password' placeholder='Password' />

      <p className='text-gray-500 mx-auto font-semibold'>--OR--</p>

      <button className='flex items-center hover:bg-gray-100 space-x-2 border-4 border-gray-200 px-4 py-3 font-bold rounded-lg mx-auto'>
        <img className='w-6 h-6' src='https://image.similarpng.com/very-thumbnail/2020/12/Illustration-of-Google-icon-on-transparent-background-PNG.png' alt='google' />
        <span className='font-semibold text-lg'>Sign in with Google</span>
      </button>

      <button
        className='dashboard-button'
      >
        Submit
      </button>

      <div className='text-lg flex justify-between items-center'>
        <p>Don't have an account? <span onClick={() => setAuthState('register')} className='hover:border-b border-red-400 font-semibold cursor-pointer text-red-500'>Register</span></p>
        <p className='text-red-500 hover:border-b border-red-400 cursor-pointer font-semibold'>Forgot Password?</p>
      </div>

      <p className='text-xl font-semibold'>Login as <span onClick={() => router.push('/signin/admin')} className='hover:border-b border-gray-800 font-bold cursor-pointer'>Admin</span></p>

    </div>
  )
}

export default UserLogin
