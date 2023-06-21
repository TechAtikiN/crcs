import { useAuth } from '@/hooks/useAuth'
import { useUserStore } from '@/store/UserStore'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import { toast } from 'react-hot-toast'
type FormValues = {
  name: string
  email: string
  password: string
  city: string
  phone: string
}

const UserRegister = () => {
  const router = useRouter()
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({})
  const [user, setUser] = useUserStore((state: any) => [state.user, state.setUser])

  const notify = () => toast.success(<p className='font-bold text-md'>New user created successfully</p>)

  const onSubmit = handleSubmit(async (data: FormValues) => {
    const user = await useAuth('signup', data)
    setUser(user)

    if (user?.role === 'USER') {
      return router.push('/user/society-registration')
    } else {
      notify()
      router.push('/')
    }
  })

  return (
    <div className='flex flex-col align-middle text-gray-700 space-y-8 my-28 mx-48'>
      <h2 className='text-3xl font-bold text-left'>Create Account</h2>

      <form onSubmit={onSubmit} className='grid grid-cols-2 gap-x-10 gap-y-10' action=''>
        <input {...register('name')} className='signin-input col-span-2' type='text' placeholder='Name' />
        <input {...register('email')} className='signin-input col-span-2' type='email' placeholder='Email' />
        <input {...register('password')} className='signin-input col-span-2' type='password' placeholder='Password' />
        <input {...register('city')} className='signin-input' type='text' placeholder='City' />
        <input {...register('phone')} className='signin-input' type='text' placeholder='Phone Number' />

        <button
          type='submit'
          className='dashboard-button col-span-2'
        >
          Submit
        </button>
      </form>

      <div className='text-lg flex justify-between items-center'>
        <p>Already have an account? <span onClick={() => router.push('/user/login')} className='hover:border-b border-red-400 font-semibold cursor-pointer text-red-500'>Login</span></p>
        <p onClick={() => alert('This feature is under construction')} className='text-red-500 hover:border-b border-red-400 cursor-pointer font-semibold'>Forgot Password?</p>
      </div>
    </div>
  )
}

export default UserRegister
