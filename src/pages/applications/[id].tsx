import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import toast, { Toaster } from 'react-hot-toast'
import Link from 'next/link'

const Application = () => {

  const [applicationData, setApplicationData] = useState<Application>()
  const [loading, setLoading] = useState(false)

  const notify = () => toast.success(<p className='font-bold'>Updated Status of the application</p>)

  const router = useRouter()
  const { id } = router.query

  // fetch data on page load
  useEffect(() => {
    const fetchApplication = async () => {
      setLoading(true)
      const res = await fetch(`http://localhost:3000/api/applications/${id}`, {
      })
      const data = await res.json()
      setApplicationData(data)
      setLoading(false)
    }
    fetchApplication()
  }, [])

  // handle status change by put request
  const handleStatusChange = async (status: string) => {
    const res = await fetch(`http://localhost:3000/api/applications/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ status })
    })
    const data = await res.json()
    setApplicationData(data)
    if (res.status === 200) {
      notify()
    }
  }

  return (
    <div className='text-gray-700'>
      <h2 className='font-bold text-2xl'>Application Details</h2>

      <div className='flex justify-center space-x-10'>
        <button
          className='bg-[#212A3E] hover:bg-black text-white font-bold py-2 px-4 rounded'
          onClick={() => handleStatusChange('approved')}
        >
          Approve and Add
        </button>
        <Link
          target='_blank'
          className='bg-[#212A3E] hover:bg-black text-white font-bold py-2 px-4 rounded'
          href={`https://mail.google.com/mail/?view=cm&fs=1&to=${applicationData?.email}`}
        >
          Revert
        </Link>
      </div>

      {loading ?
        <img className='h-20 w-70 mx-auto rounded-full' src='https://miro.medium.com/v2/resize:fit:1400/1*CsJ05WEGfunYMLGfsT2sXA.gif' alt='loader' />
        :

        <div className='grid grid-cols-2 w-3/4 h-[640px] overflow-x-hidden overflow-y-scroll space-y-2 mt-6 mx-auto bg-red-100 shadow-xl rounded-2xl p-10'>
          <div className='flex justify-start items-center'>
            <p className='font-bold text-lg p-2 px-4'>Application Status:</p>
            <p className='font-semibold text-md'>{applicationData?.status}</p>
          </div>

          <div className='flex justify-start items-center'>
            <p className='font-bold text-lg p-2 px-4'>Society Name:</p>
            <p className='font-semibold text-md'>{applicationData?.societyName}</p>
          </div>

          <div className='flex justify-start items-center'>
            <p className='font-bold text-lg p-2 px-4'>ID:</p>
            <p className='font-semibold text-md'>{applicationData?.id}</p>
          </div>

          <div className='flex justify-start items-center'>
            <p className='font-bold text-lg p-2 px-4'>Date Of Registration:</p>
            <p className='font-semibold text-md'>{applicationData?.date.split('T')[0]}</p>
          </div>

          <div className='flex justify-start items-center'>
            <p className='font-bold text-lg p-2 px-4'>Address:</p>
            <p className='font-semibold text-md'>{applicationData?.address}</p>
          </div>

          <div className='flex justify-start items-center'>
            <p className='font-bold text-lg p-2 px-4'>District:</p>
            <p className='font-semibold text-md'>{applicationData?.district}</p>
          </div>

          <div className='flex justify-start items-center'>
            <p className='font-bold text-lg p-2 px-4'>State:</p>
            <p className='font-semibold text-md'>{applicationData?.state}</p>
          </div>

          <div className='flex justify-start items-center'>
            <p className='font-bold text-lg p-2 px-4'>Sector:</p>
            <p className='font-semibold text-md'>{applicationData?.typeOfSociety}</p>
          </div>

          <div className='flex justify-start items-center'>
            <p className='font-bold text-lg p-2 px-4'>User Name</p>
            <p className='font-semibold text-md'>{applicationData?.userName}</p>
          </div>

          <div className='flex justify-start items-center'>
            <p className='font-bold text-lg p-2 px-4'>User Email ID:</p>
            <p className='font-semibold text-md'>{applicationData?.email}</p>
          </div>

          <div className='flex justify-start items-center'>
            <p className='font-bold text-lg p-2 px-4'>User's Designation:</p>
            <p className='font-semibold text-md'>{applicationData?.designation}</p>
          </div>

          <div className='flex justify-start items-center'>
            <p className='font-bold text-lg p-2 px-4'>Mobile  No.:</p>
            <p className='font-semibold text-md'>{applicationData?.contact}</p>
          </div>

          <div className='flex justify-start items-center'>
            <p className='font-bold text-lg p-2 px-4'>Tan No.:</p>
            <p className='font-semibold text-md'>{applicationData?.pan}</p>
          </div>

          <div className='flex justify-start items-center'>
            <p className='font-bold text-lg p-2 px-4'>Tan No.:</p>
            <p className='font-semibold text-md'>{applicationData?.tan}</p>
          </div>

          <div className='flex justify-start items-center'>
            <p className='font-bold text-lg p-2 px-4'>Service Tax No.:</p>
            <p className='font-semibold text-md'>{applicationData?.serviceTaxNo}</p>
          </div>

        </div>
      }
      <Toaster />
    </div>
  )
}

export default Application