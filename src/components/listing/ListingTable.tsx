import { useRouter } from 'next/router'

interface Props {
  societies: Society[]
}

const ListingTable = ({ societies }: Props) => {
  const router = useRouter()

  return (
    <table className='mx-auto shadow-2xl overflow-y-scroll overflow-x-hidden'>
      <thead className='rounded-xl'>
        <tr className='bg-red-500 rounded-xl text-white'>
          <th className='p-4 border-r border-red-700'>ID</th>
          <th className='p-4 border-r border-red-700'>Society Name</th>
          <th className='p-4 border-r border-red-700'>State</th>
          <th className='p-4 border-r border-red-700'>Sector</th>
          <th className='p-4 border-r border-red-700'>Year of Registration</th>
        </tr>
      </thead>
      <tbody className='border border-gray-300'>
        {societies && societies?.map((society, index) => (
          <tr onClick={() => router.push(`listing/${society.id}`)} key={index} className='bg-gray-100 text-center rounded-l-xl rounded-r-xl border-b border-red-200 px-3 py-2 hover:cursor-pointer hover:bg-red-200'>
            <td className='p-4 font-semibold border-r border-gray-400'>{society.id}</td>
            <td className='p-4 font-semibold border-r border-gray-400'>{society.name}</td>
            <td className='py-4 border-r border-gray-400'>{society.state}</td>
            <td className='p-4 border-r border-gray-400'>{society.sectorType}</td>
            <td className='p-4 font-semibold border-r border-gray-400'>{society.dateOfRegistration}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default ListingTable
