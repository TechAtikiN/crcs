import { SignIContent, } from '@/components/signin'
import { useAuth } from '@/hooks/useAuth'
import { useUserStore } from '@/store/UserStore'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'

type FormValues = {
  email: string
  password: string
}

const Login = () => {
  const router = useRouter()
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({})
  const [user, setUser] = useUserStore((state: any) => [state.user, state.setUser])

  const onSubmit = handleSubmit(async (data) => {
    const user = await useAuth('signin', data)
    setUser(user)
    user && router.push('/user/society-registration')
  })

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

      <div className='col-span-7 z-10 rounded-l-full'>
        <div className='flex flex-col align-middle text-gray-700 space-y-8 my-28 mx-48'>
          <h2 className='text-3xl font-bold text-left'>Login To Your Account</h2>

          <form className='flex flex-col space-y-12' onSubmit={onSubmit} action=''>
            <input {...register('email')} className='signin-input' type='email' placeholder='Email' />
            <input {...register('password')} className='signin-input' type='password' placeholder='Password' />

            <button
              className='dashboard-button'
              type='submit'
            >
              Submit
            </button>
          </form>

          <div className='text-lg flex justify-between items-center'>
            <p>Don't have an account? <span onClick={() => router.push('/user/signup')} className='hover:border-b border-red-400 font-semibold cursor-pointer text-red-500'>Register</span></p>
            <p onClick={() => alert('This feature is under construction')} className='text-red-500 hover:border-b border-red-400 cursor-pointer font-semibold'>Forgot Password?</p>
          </div>

          <p
            className='text-xl font-semibold'>Login as <span onClick={() => router.push('/signin/admin')} className='hover:border-b border-gray-800 font-bold cursor-pointer'>Admin</span></p>

        </div>
      </div>
    </div>
  )
}

export default Login
