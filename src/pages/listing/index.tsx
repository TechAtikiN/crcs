import { FilterOptions } from '@/components/listing'
import { FormEvent, useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'

import ListingTable from '@/components/listing/ListingTable'
import { useRouter } from 'next/router'
import { useUserStore } from '@/store/UserStore'

const SocietyListing = () => {
  const states = [
    'KERALA',
    'UTTARAKHAND',
    'MAHARASHTRA',
    'PUNJAB',
    'TAMIL NADU',
    'TELANGANA',
    'UTTAR PRADESH',
    'HARYANA',
    'ANDHRA PRADESH',
    'MANIPUR',
    'NEW DELHI',
    'JAMMU AND KASHMIR',
    'MADHYA PRADESH',
    'GUJARAT',
    'ASSAM',
    'BIHAR',
    'KARNATAKA',
    'WEST BENGAL'
  ]

  const sectorType = [
    'Agro',
    'Health/Hospital',
    'Federation',
    'Housing',
    'Tourism',
    'Fisheries',
    'Construction',
    'Others',
    'Cooperative Bank',
    'Industrial/Textile',
    'Marketing',
    'Credit',
    'Dairy'
  ]
  const router = useRouter()

  // check if user is admin
  const [user, setUser] = useUserStore((state: any) => [state.user, state.setUser])


  // state management
  const [state, setState] = useState(states[0])
  const [sector, setSector] = useState(sectorType[0])
  const [societies, setSocieties] = useState<Society[]>([])
  const [loading, setLoading] = useState(false)

  // toast notification
  const notify = () => toast.success(<p><strong>{societies.length}</strong> Societies found for in <strong>{state}</strong> state and <strong>{sector}</strong> sector</p>)

  // handle filters
  const handleSubmit = async (e: FormEvent<HTMLButtonElement>) => {
    setLoading(true)
    const res = await fetch(`http://localhost:3000/api/listing?state=${state}&sector=${sector}`, {
    })
    const data = await res.json()
    setSocieties(data)
    setLoading(false)
  }

  // fetch data on page load
  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem('user')!)
    const userIsAdmin = user?.role === 'ADMIN' || loggedInUser?.role === 'ADMIN'
    const token = user?.token || loggedInUser?.token

    const fetchSocieties = async () => {
      setLoading(true)
      const res = await fetch(`http://localhost:3000/api/listing?state=${state}&sector=${sector}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      })
      const data = await res.json()
      setSocieties(data)

      setLoading(false)
    }
    userIsAdmin ? fetchSocieties() : router.push('/signin/admin')
  }, [])

  useEffect(() => {
    notify()
  }, [societies])
  console.log(societies)

  return (
    <div className='text-gray-700'>
      <h2 className='font-bold text-2xl'>Registered Societies under MSCS</h2>

      <div className='flex justify-center space-x-10 bg-red-300 rounded-full p-3 mt-5'>

        <FilterOptions states={states} sectorType={sectorType} setState={setState} setSector={setSector} />

        <button
          type='submit' onClick={(e) => handleSubmit(e)} className='px-3 font-bold py-2 rounded-full hover:bg-red-600 bg-red-500 text-white'>Search Societies</button>
        <Toaster />
      </div>

      {/* table data */}
      {societies && societies?.length > 0 && loading ?
        <img className='h-20 w-70 mx-auto rounded-full' src='https://miro.medium.com/v2/resize:fit:1400/1*CsJ05WEGfunYMLGfsT2sXA.gif' alt='loader' />
        : <div className='mt-10'>
          {societies && <ListingTable societies={societies} />}
        </div>
      }
    </div>
  )
}

export default SocietyListing
