// named imports
import { useRouter } from 'next/router'
import { useUserStore } from '@/store/UserStore'
import { ArrowLeftCircleIcon } from '@heroicons/react/24/outline'
import { SignIContent } from '@/components/sigin'
import { useForm } from 'react-hook-form'
import { toast } from 'react-hot-toast'
import { useAuth } from '../hooks/useAuth'

// default imports
import Link from 'next/link'

type FormValues = {
  email: string,
  password: string
}

const AdminSignIn = () => {
  const router = useRouter()
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({})
  const [user, setUser] = useUserStore((state: any) => [state.user, state.setUser])

  // toast notification
  const notify = () => toast.success(<p className='font-bold text-md'>Admin logged in successfully</p>)

  // form submit
  const onSubmit = handleSubmit(async (data) => {
    const user = await useAuth('signin', data)
    setUser(user)

    if (user.role !== 'ADMIN') {
      return router.push('/signin/user')
    } else {
      notify()
      router.push('/')
    }
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

      <div className='col-span-7 z-10 rounded-l-full mt-20'>
        <div className=''>
          <form className='flex flex-col align-middle text-gray-700 space-y-8 my-28 mx-48' onSubmit={onSubmit} action="">
            <h2 className='text-3xl font-bold text-left'>Login as Admin</h2>
            <input {...register('email')} className='signin-input' type='email' placeholder='Email' />
            <input {...register('password')} className='signin-input' type='password' placeholder='Password' />

            <button type='submit' className='dashboard-button'>
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
          </form>
        </div>
      </div>
    </div>
  )
}

export default AdminSignIn
