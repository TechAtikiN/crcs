import Image from "next/image"

const SignInContent = () => {
  return (
    <div className='flex flex-col items-center justify-center p-4 space-y-14 mt-8'>
      <Image
        width={220}
        height={220}
        src='https://mscs.dac.gov.in/images/MSCS_LOGO.png'
        alt='logo'
        className='p-4 bg-white rounded-full'
      />

      <div className='mt-2'>
        <div className='space-y-16'>
          <h1 className='text-center font-semibold text-white text-4xl'>
            About MSCS Act, 2002
          </h1>
          <p className='mx-14 text-justify text-gray-500 bg-white rounded-r-3xl rounded-b-3xl text-md p-5 italic'>
            &lsquo;An Act to consolidate and amend the law relating to co-operative societies, with objects not confined to one State and serving the interests of members in more than one State, to facilitate the voluntary formation and democratic functioning of co-operatives as people's institutions based on self-help and mutual aid and to enable them to promote their economic and social betterment and to provide functional autonomy ,was being felt necessary by the various cooperative societies, and federation of various cooperative societies as well as by the Government.&rsquo;
          </p>
        </div>
      </div>

    </div>
  )
}

export default SignInContent
