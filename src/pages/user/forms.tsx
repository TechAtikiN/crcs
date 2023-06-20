import { useUserStore } from '@/store/UserStore'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Toaster, toast } from 'react-hot-toast'

type FormValues = {
  email: string,
  input1: string,
  input2: string,
  input3: string,
  input4: string,
  input5: string,
}

const UserForms = () => {
  const router = useRouter()

  const [user, setUser] = useUserStore((state: any) => [state.user, state.setUser])

  const [selectedForm, setSelectedForm] = useState(1)

  // toast notification
  const notify = () => toast.success(<p className='font-bold text-md'>Form submitted successfully</p>)

  // form imports
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({})

  const email = 'nikitakhabya03@gmail.com'

  // form submit
  const onSubmit = handleSubmit(async (data) => {
    const body = {
      email: email,
      data: data
    }
    const res = await fetch('http://localhost:3000/api/forms', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
    const result = await res.json()
    if (res.status === 200) {
      notify()
    }
  })

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem('user')!)
    const isUser = user?.role === 'USER' || loggedInUser?.role === 'USER'
    setUser(loggedInUser)

    isUser ? null : router.push('/user/login')
  }, [])

  return (
    <div className='text-gray-700'>

      {/* Tabs section */}
      <div className='flex space-x-5 border w-72 border-red-300 p-3 rounded-xl'>
        <p
          onClick={() => setSelectedForm(1)}
          className={`${selectedForm === 1 ? 'bg-red-500 text-white rounded-lg' : 'bg-white'} p-2 font-md font-semibold hover:cursor-pointer`}
        >
          Form 1
        </p>
        <p
          onClick={() => setSelectedForm(2)}
          className={`${selectedForm === 2 ? 'bg-red-500 text-white rounded-lg' : 'bg-white'} p-2 font-md font-semibold hover:cursor-pointer`}
        >
          Form 2
        </p>
        <p
          onClick={() => setSelectedForm(3)}
          className={`${selectedForm === 3 ? 'bg-red-500 text-white rounded-lg' : 'bg-white'} p-2 font-md font-semibold hover:cursor-pointer`}
        >
          Form 3
        </p>
      </div>

      {/* Forms  */}
      <div className='flex flex-col bg-stone-100 mx-36 shadow-lg mt-6'>
        <form onSubmit={onSubmit} className='p-10 h-[600px] overflow-x-hidden overflow-y-scroll'>
          <div className='text-center space-y-2'>
            <h2 className='text-2xl font-bold'>Form {selectedForm}</h2>
            <p className='text-xl  font-semibold'>[See sub-rule (1) of rule 3]</p>
            <p className='font-semibold text-lg'>Application for appointing election agent</p>
          </div>

          <div className='mt-10 text-gray-900 text-lg leading-loose'>
            I,
            <input id='input1' {...register('input1')} className='border-b border-black border-dotted mx-4 focus:outline-none bg-transparent' type='text' />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, minima! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
            <input id='input2' {...register('input2')} className='border-b border-black border-dotted mx-4 focus:outline-none bg-transparent' type='text' />Lorem ipsum dolor sit. Lorem ipsum dolor sit amet consectetur adipisicing
            <input id='input3' {...register('input3')} className='border-b border-black border-dotted mx-4 focus:outline-none bg-transparent' type='text' /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi sed
            <input id='input4' {...register('input4')} className='border-b border-black border-dotted mx-4 focus:outline-none bg-transparent' type='text' />Lorem adipisicing elit. Ad, natus.
            <input id='input5' {...register('input5')} className='border-b border-black border-dotted mx-4 focus:outline-none bg-transparent' type='text' />Lorem ipsum dolor sit ame.
          </div>

          <p className='text-end text-lg mt-20'>Name and Signature of the candidate</p>

          <button className='dashboard-button w-1/4 mt-20 ml-96 -mr-10'>Submit</button>
          <Toaster />
        </form>
      </div>
    </div>
  )
}

export default UserForms
