import { useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import ApplicationsListingTable from '@/components/applications/ApplicationListing'

const SocietyListing = () => {

  // state management
  const [applications, setApplications] = useState<Application[]>([])
  const [loading, setLoading] = useState(false)

  // toast notification
  const notify = () => toast.success(<p className='font-bold'>Loaded all Applications for Society Registrations</p>)

  // fetch data on page load
  useEffect(() => {
    const fetchSocieties = async () => {
      setLoading(true)
      const res = await fetch(`http://localhost:3000/api/applications`, {
      })
      const data = await res.json()
      setApplications(data)
      setLoading(false)
      if (res.status === 200) {
        notify()
      }
    }
    fetchSocieties()
  }, [])

  return (
    <div className='text-gray-700'>
      <h2 className='font-bold text-2xl'>Society applications under MSCS</h2>

      {/* table data */}
      {applications?.length > 0 && loading ?
        <img className='h-20 w-70 mx-auto rounded-full' src='https://miro.medium.com/v2/resize:fit:1400/1*CsJ05WEGfunYMLGfsT2sXA.gif' alt='loader' />
        : <div className='mt-10'>
          <ApplicationsListingTable applications={applications} />
          <Toaster />
        </div>
      }
    </div>
  )
}

export default SocietyListing
