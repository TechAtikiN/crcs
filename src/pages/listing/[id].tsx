import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useUserStore } from '@/store/UserStore'

const Society = () => {
  const [user, setUser] = useUserStore((state: any) => [state.user, state.setUser])

  const loggedInUser = JSON.parse(localStorage.getItem('user')!)
  const userIsAdmin = user?.role === 'ADMIN' || loggedInUser?.role === 'ADMIN'
  const token = user?.token || loggedInUser?.token

  const [societyData, setSocietyData] = useState<Society>()
  const [loading, setLoading] = useState(false)

  const router = useRouter()
  const { id } = router.query

  useEffect(() => {
    const fetchSocieties = async () => {
      setLoading(true)
      const res = await fetch(`http://localhost:3000/api/listing/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      })
      const data = await res.json()
      setSocietyData(data)
      setLoading(false)
    }
    userIsAdmin ? fetchSocieties() : router.push('/signin/user')
  }, [])

  return (
    <div className='text-gray-700'>
      <h2 className='font-bold text-2xl'>Society Details</h2>

      {loading ?
        <img className='h-20 w-70 mx-auto rounded-full' src='https://miro.medium.com/v2/resize:fit:1400/1*CsJ05WEGfunYMLGfsT2sXA.gif' alt='loader' />
        :

        <div className='flex flex-col items-center space-y-2 mt-14 mx-auto bg-red-100 shadow-xl rounded-2xl w-1/2 p-10'>
          <div className='flex justify-between items-center'>
            <p className='font-bold text-lg p-2 px-4'>Name:</p>
            <p className='font-semibold text-md'>{societyData?.name}</p>
          </div>

          <div className='flex justify-between items-center'>
            <p className='font-bold text-lg p-2 px-4'>ID:</p>
            <p className='font-semibold text-md'>{societyData?.id}</p>
          </div>

          <div className='flex justify-between items-center'>
            <p className='font-bold text-lg p-2 px-4'>Address:</p>
            <p className='font-semibold text-md'>{societyData?.address}</p>
          </div>

          <div className='flex justify-between items-center'>
            <p className='font-bold text-lg p-2 px-4'>Area Of Operation:</p>
            <p className='font-semibold text-md'>{societyData?.areaOfOperation}</p>
          </div>

          <div className='flex justify-between items-center'>
            <p className='font-bold text-lg p-2 px-4'>State:</p>
            <p className='font-semibold text-md'>{societyData?.state}</p>
          </div>

          <div className='flex justify-between items-center'>
            <p className='font-bold text-lg p-2 px-4'>District:</p>
            <p className='font-semibold text-md'>{societyData?.district}</p>
          </div>

          <div className='flex justify-between items-center'>
            <p className='font-bold text-lg p-2 px-4'>Date Of Registration:</p>
            <p className='font-semibold text-md'>{societyData?.dateOfRegistration}</p>
          </div>

          <button
            className='bg-[#212A3E] hover:bg-black w-full bottom-10 text-white font-bold py-2 px-4 rounded mt-28'
            onClick={() => router.push('/listing')}
          >
            Go Back
          </button>
        </div>
      }
    </div>
  )
}

export default Society