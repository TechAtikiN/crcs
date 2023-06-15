import { AreasGraph, LiquidationData } from '@/components/analytics'
import { AdjustmentsHorizontalIcon } from '@heroicons/react/24/outline'
import { useEffect, useState } from 'react'

const Analytics = () => {

  const [liquidationData, setLiquidationData] = useState<string[]>([])
  const [filterType, setFilterType] = useState<string>('states')
  const [areas, setAreas] = useState<string[]>([])

  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const analyticsData = async () => {
      setLoading(true)

      const res = await fetch(`http://localhost:3000/api/analytics?type=${filterType}`)
      const data = await res.json()
      const { liquidationData, areas } = data
      setLiquidationData(liquidationData)
      setAreas(areas)
      setLoading(false)
    }
    analyticsData()
  }, [filterType])

  return (

    <div>
      {loading ?
        <img className='h-20 w-70 mx-auto rounded-full' src='https://miro.medium.com/v2/resize:fit:1400/1*CsJ05WEGfunYMLGfsT2sXA.gif' alt='loader' />
        :
        <div>

          {/* areas data */}
          <div className='my-10'>
            <AreasGraph areas={areas} />
          </div>

          {/* liquidation data */}
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
        </div>
      }
    </div>
  )
}

export default Analytics
