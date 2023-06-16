interface Props {
  setAuthState: (state: string) => void
}

const UserRegister = ({ setAuthState }: Props) => {
  return (
    <div className='flex flex-col align-middle text-gray-700 space-y-8 my-28 mx-48'>
      <h2 className='text-3xl font-bold text-left'>Create Account</h2>

      <input className='signin-input' type='text' placeholder='Name' />
      <input className='signin-input' type='email' placeholder='Email' />
      <input className='signin-input' type='password' placeholder='Password' />

      <p className='text-gray-500 mx-auto font-semibold'>--OR--</p>

      <button className='flex items-center hover:bg-gray-100 space-x-2 border-4 border-gray-200 px-4 py-3 font-bold rounded-lg mx-auto'>
        <img className='w-6 h-6' src='https://image.similarpng.com/very-thumbnail/2020/12/Illustration-of-Google-icon-on-transparent-background-PNG.png' alt='google' />
        <span className='font-semibold text-lg'>Sign in with Google</span>
      </button>

      <button
        className='text-center bg-red-500 hover:bg-red-600 hover:cursor-pointer text-white font-semibold px-4 py-3 w-full'
      >
        Submit
      </button>

      <div className='text-lg flex justify-between items-center'>
        <p>Already have an account? <span onClick={() => setAuthState('login')} className='hover:border-b border-red-400 font-semibold cursor-pointer text-red-500'>Login</span></p>
        <p className='text-red-500 hover:border-b border-red-400 cursor-pointer font-semibold'>Forgot Password?</p>
      </div>

    </div>
  )
}

export default UserRegister
