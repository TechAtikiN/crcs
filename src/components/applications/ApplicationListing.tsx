import { useRouter } from 'next/router'

interface Props {
  applications: Application[]
}
const ApplicationsListingTable = ({ applications }: Props) => {
  const router = useRouter()
  applications = applications.reverse()

  return (
    <table className='mx-auto shadow-2xl overflow-y-scroll overflow-x-hidden'>
      <thead className='rounded-xl'>
        <tr className='bg-red-500 rounded-xl text-white'>
          <th className='p-4 border-r border-red-700'>ID</th>
          <th className='p-4 border-r border-red-700'>Date of Registration</th>
          <th className='p-4 border-r border-red-700'>Name</th>
          <th className='p-4 border-r border-red-700'>Sector of Society</th>
          <th className='p-4 border-r border-red-700'>Status</th>
          <th className='p-4 border-r border-red-700'>State</th>
          <th className='p-4 border-r border-red-700'>Contact User</th>
        </tr>
      </thead>
      <tbody className='border border-gray-300'>
        {applications?.map((application, index) => (
          <tr
            onClick={() => router.push(`/applications/${application.id}`)}
            key={index}
            className='bg-gray-100 text-center rounded-l-xl rounded-r-xl border-b border-red-200 px-3 py-2 hover:cursor-pointer hover:bg-red-200'
          >
            <td className='p-4 font-semibold border-r border-gray-400'>{application.id}</td>
            <td className='p-4 font-semibold border-r border-gray-400'>{application.date.split('T')[0]}</td>
            <td className='p-4 font-semibold border-r border-gray-400'>{application.societyName}</td>
            <td className='py-4 border-r border-gray-400'>{application.typeOfSociety}</td>
            <td className='p-4 border-r font-semibold border-gray-400'>{application.status}</td>
            <td className='p-4 border-r border-gray-400'>{application.state}</td>
            <td className='p-4 font-semibold border-r border-gray-400'>{application.contact}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default ApplicationsListingTable
