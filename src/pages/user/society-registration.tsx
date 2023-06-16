const SocietyRegistration = () => {

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

  return (
    <div className=''>
      <h2 className='font-bold text-3xl text-red-500'>Society Registration Details</h2>

      <div className='text-gray-700 my-6 '>
        {/* Society Details */}

        <form action=''>

          <div className='grid grid-cols-2'>
            {/* society details  */}
            <div className='border-r border-gray-400 p-6'>
              <h3 className='font-bold text-2xl text-center mb-6'>Society Details</h3>
              <div className="grid grid-cols-2 gap-y-5 gap-x-7 ">
                <div className='flex flex-col col-span-2 space-y-2'>
                  <label className='form-label' htmlFor='societyName'>Enter name of the society</label>
                  <input className='form-input' type='text' />
                </div>

                <div className='flex flex-col space-y-2 col-span-2'>
                  <label className='form-label' htmlFor='societyName'>Enter complete address of the society</label>
                  <textarea className='form-input' />
                </div>

                <div className='flex flex-col space-y-2'>
                  <label className='form-label' htmlFor='societyName'>Select type of the society</label>
                  <select className='form-input' name='typeOfSociety' id='typeOfSociety'>
                    {sectors.map(sector => (
                      <option value={sector}>{sector}</option>
                    ))}
                  </select>
                </div>

                <div className='flex flex-col space-y-2'>
                  <label className='form-label' htmlFor='societyName'>Enter district name</label>
                  <input className='form-input' type='text' />
                </div>

                <div className='flex flex-col space-y-2'>
                  <label className='form-label' htmlFor='societyName'>Enter state name</label>
                  <input className='form-input' type='text' />
                </div>
              </div>
            </div>

            {/* User Details  */}
            <div className='p-6'>
              <h3 className='font-bold text-2xl text-center mb-6'>User Details</h3>
              <div className="grid grid-cols-2 gap-y-5 gap-x-7">
                <div className='flex flex-col space-y-2'>
                  <label className='form-label' htmlFor='societyName'>Enter Name</label>
                  <input className='form-input' type='text' />
                </div>

                <div className='flex flex-col space-y-2'>
                  <label className='form-label' htmlFor='societyName'>Enter Designation</label>
                  <select className='form-input' name='typeOfSociety' id='typeOfSociety'>
                    {designations.map(designation => (
                      <option value={designation}>{designation}</option>
                    ))}
                  </select>
                </div>

                <div className='flex flex-col space-y-2'>
                  <label className='form-label' htmlFor='societyName'>Enter Mobile No.</label>
                  <input className='form-input' type='text' />
                </div>

                <div className='flex flex-col space-y-2'>
                  <label className='form-label' htmlFor='societyName'>Enter PAN No.</label>
                  <input className='form-input' type='text' />
                </div>

                <div className='flex flex-col space-y-2'>
                  <label className='form-label' htmlFor='societyName'>Enter TAN No.</label>
                  <input className='form-input' type='text' />
                </div>

                <div className='flex flex-col space-y-2'>
                  <label className='form-label' htmlFor='societyName'>Enter Service Tax No.</label>
                  <input className='form-input' type='text' />
                </div>

                <div className='flex flex-col space-y-2'>
                  <label className='form-label' htmlFor='societyName'>Enter Email ID</label>
                  <input className='form-input' type='text' />
                </div>
              </div>

            </div>
          </div>
          <button className="dashboard-button w-1/4 ml-6 mt-10">Submit</button>
        </form>

      </div>
    </div>
  )
}

export default SocietyRegistration
