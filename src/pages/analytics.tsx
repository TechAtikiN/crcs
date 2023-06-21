import { AreasGraph, LiquidationData, SectorsTrend } from '@/components/analytics'
import { useGetData } from '@/hooks/useGetData'
import { useUserStore } from '@/store/UserStore'
import { AdjustmentsHorizontalIcon } from '@heroicons/react/24/outline'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { Toaster, toast } from 'react-hot-toast'

const Analytics = () => {
  const router = useRouter()

  const [user, setUser] = useUserStore((state: any) => [state.user, state.setUser])

  const [liquidationData, setLiquidationData] = useState<string[]>([])
  const [filterType, setFilterType] = useState<string>('states')
  const [areas, setAreas] = useState<string[]>([])
  const [sectorsData, setSectorsData] = useState<SectorsDataNew[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  const notify = () => toast.success(<p className='font-bold text-md'>You are not authorised to view this page</p>)

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem('user')!)
    const userIsAdmin = user?.role === 'ADMIN' || loggedInUser?.role === 'ADMIN'

    setUser(loggedInUser)
    const analyticsData = async () => {
      setLoading(true)
      const data = await useGetData('analytics', loggedInUser.token)
      if (!data) {
        notify()
        return
      }
      const { sectorsData, liquidationData, areas } = data
      setLiquidationData(liquidationData)
      setAreas(areas)
      setSectorsData(sectorsData)
      setLoading(false)
    }

    userIsAdmin ? analyticsData() : router.push('/signin/admin')
  }, [filterType])

  return (

    <div>
      <Toaster />
      {loading ?
        <img className='h-20 w-70 mx-auto rounded-full' src='https://miro.medium.com/v2/resize:fit:1400/1*CsJ05WEGfunYMLGfsT2sXA.gif' alt='loader' />
        :
        <div>

          {/* areas data */}
          <div className='my-10'>
            <AreasGraph areas={areas} />
          </div>

          {/* liquidation data */}
          <div className='flex items-center space-x-10'>
            <div className='flex items-start'>
              <LiquidationData filterType={filterType} liquidationData={liquidationData} />
              <button className='p-2 font-bold -ml-16 bg-red-100 flex rounded-full bg-reg-200'>
                <AdjustmentsHorizontalIcon className='h-6 w-6' />
                <select value={filterType} className='bg-transparent focus:outline-none' onChange={(e => setFilterType(e.target.value))} name='type' id='type'>
                  <option className='options' value='states'>States</option>
                  <option className='options' value='sectors'>Sectors</option>
                  <option className='options' value='district'>District</option>
                </select>
              </button>
            </div>
            <SectorsTrend sectorsData={sectorsData} />
          </div>
        </div>
      }
    </div>
  )
}

export default Analytics
