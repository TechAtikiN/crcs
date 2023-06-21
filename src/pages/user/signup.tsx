import { SignIContent, UserRegister } from '@/components/signin'
import Image from 'next/image'

const Signup = () => {

  return (
    <div className='grid grid-cols-11'>
      <div className='col-span-4 z-10 min-h-screen bg-gradient-to-br from-rose-600 to-red-400 border-r shadow-sm relative'>
        <SignIContent />

        {/* footer  */}
        <div className='absolute bottom-10 left-0 w-full text-center'>
          <p className='text-center font-semibold text-sm text-white italic'>
            &copy; 2023 MSCS. All rights reserved.
          </p>
        </div>
      </div>

      <div className='col-span-7 z-10 rounded-l-full'>
        <UserRegister />
      </div>

    </div>
  )
}

export default Signup
