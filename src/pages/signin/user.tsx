import { SignInContent, UserLogin, UserRegister } from "@/components/sigin"
import { useState } from "react"

const UserSignIn = () => {

  const [authState, setAuthState] = useState<string>('register')

  return (
    <div className='grid grid-cols-11'>
      <div className='col-span-4 flex flex-col justify-center rounded-r-3xl z-10 items-center min-h-screen bg-red-200'>
        <img className='h-72 w-72 mx-auto -mt-10' src='https://mscs.dac.gov.in/images/MSCS_LOGO.png' alt='logo' />
        <SignInContent />
      </div>

      <div className='col-span-7 z-10 rounded-l-full'>
        {
          authState === 'register' ?
            <UserRegister setAuthState={setAuthState} /> :
            <UserLogin setAuthState={setAuthState} />
        }
      </div>

    </div>
  )
}

export default UserSignIn
