const Settings = () => {
  return (
    <div>
      <h2 className='font-bold text-3xl text-red-500'>Settings</h2>
      <div className="bg-[#212A3E] flex flex-col space-y-5 rounded-3xl p-5 mt-10 mx-80 ">
        <p className="font-semibold text-left text-3xl ml-7 text-red-200">This feature is under construction</p>
        <div className='flex justify-center space-x-10 items-center'>
          <div className='flex flex-col space-y-3'>
            <h3 className='font-bold text-2xl text-white'>MULTI-STATE CO-OPERATIVE SOCIETIES</h3>
            <p className='text-lg font-semibold text-gray-300'>Ministry of Cooperation, Govt. of India</p>
          </div>
          <img className='h-40 w-40' src='https://mscs.dac.gov.in/images/MSCS_LOGO.png' />
        </div>
      </div>
    </div>
  )
}

export default Settings
