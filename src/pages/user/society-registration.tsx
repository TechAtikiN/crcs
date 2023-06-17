import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import toast, { Toaster } from 'react-hot-toast'

type FormValues = {
  societyName: string,
  address: string,
  typeOfSociety: string,
  district: string,
  state: string
  userName: string,
  designation: string,
  contact: string,
  pan: string,
  tan: string,
  serviceTaxNo: string,
  email: string
}

const SocietyRegistration = () => {

  // form labels
  const sectors = [
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

  const designations = [
    'Chairman/President',
    'Vice Chairman/ Vice Presidet',
    'Managing Director/CEO',
    'Co-opted/Director'
  ]

  // toast notification
  const notify = () => toast.success(<p className='font-bold text-md'>Registration form submitted successfully</p>)

  // form imports
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({})

  // form submit
  const onSubmit = handleSubmit(async (data) => {
    const res = await fetch('http://localhost:3000/api/applications', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    if (res.status === 200) {
      notify()
    }
  })

  // fetch data
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('http://localhost:3000/api/applications')
      const data = await res.json()
    }
    fetchData()
  }, [])

  return (
    <div className=''>
      <h2 className='font-bold text-3xl text-red-500'>Society Registration Details</h2>

      { }

      <div className='text-gray-700 my-6 '>
        {/* Society Details */}

        <form onSubmit={onSubmit} action=''>

          <div className='grid grid-cols-2'>
            {/* society details  */}
            <div className='border-r border-gray-400 p-6'>
              <h3 className='font-bold text-2xl text-center mb-6'>Society Details</h3>
              <div className='grid grid-cols-2 gap-y-5 gap-x-7 '>
                <div className='flex flex-col col-span-2 space-y-2'>
                  <label className='form-label' htmlFor='societyName'>Enter name of the society</label>
                  <input required className='form-input' type='text' id='societyName' {...register('societyName')} />
                </div>

                <div className='flex flex-col space-y-2 col-span-2'>
                  <label className='form-label' htmlFor='address'>Enter complete address of the society</label>
                  <textarea required className='form-input' id='address' {...register('address')} />
                </div>

                <div className='flex flex-col space-y-2'>
                  <label className='form-label' htmlFor='typeOfSociety'>Select type of the society</label>
                  <select required className='form-input' id='typeOfSociety' {...register('typeOfSociety')}>
                    {sectors.map((sector, index) => (
                      <option key={index} value={sector}>{sector}</option>
                    ))}
                  </select>
                </div>

                <div className='flex flex-col space-y-2'>
                  <label className='form-label' htmlFor='district'>Enter district name</label>
                  <input required className='form-input' type='text' id='district' {...register('district')} />
                </div>

                <div className='flex flex-col space-y-2'>
                  <label className='form-label' htmlFor='state'>Enter state name</label>
                  <input required className='form-input' type='text' id='state' {...register('state')} />
                </div>
              </div>
            </div>

            {/* User Details  */}
            <div className='p-6'>
              <h3 className='font-bold text-2xl text-center mb-6'>User Details</h3>
              <div className='grid grid-cols-2 gap-y-5 gap-x-7'>
                <div className='flex flex-col space-y-2'>
                  <label className='form-label' htmlFor='name'>Enter Name</label>
                  <input required className='form-input' type='text' id='name' {...register('userName')} />
                </div>

                <div className='flex flex-col space-y-2'>
                  <label className='form-label' htmlFor='designation'>Enter Designation</label>
                  <select required className='form-input' id='designation' {...register('designation')}>
                    {designations.map((designation, index) => (
                      <option key={index} value={designation}>{designation}</option>
                    ))}
                  </select>
                </div>

                <div className='flex flex-col space-y-2'>
                  <label className='form-label' htmlFor='contact'>Enter Mobile No.</label>
                  <input required className='form-input' type='text' id='contact' {...register('contact')} />
                </div>

                <div className='flex flex-col space-y-2'>
                  <label className='form-label' htmlFor='pan'>Enter PAN No.</label>
                  <input required className='form-input' type='text' id='pan' {...register('pan')} />
                </div>

                <div className='flex flex-col space-y-2'>
                  <label className='form-label' htmlFor='tan'>Enter TAN No.</label>
                  <input required className='form-input' type='text' id='tan' {...register('tan')} />
                </div>

                <div className='flex flex-col space-y-2'>
                  <label className='form-label' htmlFor='serviceTaxNo'>Enter Service Tax No.</label>
                  <input required className='form-input' type='text' id='serviceTaxNo' {...register('serviceTaxNo')} />
                </div>

                <div className='flex flex-col space-y-2'>
                  <label className='form-label' htmlFor='email'>Enter Email ID</label>
                  <input required className='form-input' type='text' id='email' {...register('email')} />
                </div>
              </div>

            </div>
          </div>
          <button type='submit' className='dashboard-button w-1/4 ml-6 mt-10'>Submit</button>
          <Toaster />
        </form>

      </div>
    </div>
  )
}

export default SocietyRegistration
