import { useForm } from 'react-hook-form'
import { Toaster, toast } from 'react-hot-toast'

type FormValues = {
  societyName: string,
  complaint: string,
  references: string,
  additionalInfo: string,
}

const Grievances = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({})

  const notify = () => toast.success(<p className='font-bold text-md'>Grievances form submitted successfully</p>)

  const onSubmit = handleSubmit(async (data) => {
    console.log(data)
    notify()
  })

  return (
    <div>
      <h2 className='font-bold text-3xl text-red-500'>User Grievances Form</h2>

      <div className='mx-auto p-6 w-1/2'>
        <Toaster />
        <form onSubmit={() => onSubmit()} className='flex flex-col space-y-6 '>
          <div className='flex flex-col col-span-2 space-y-2'>
            <label className='form-label' htmlFor='societyName'>Enter name of the society</label>
            <input required className='form-input' type='text' id='societyName' {...register('societyName')} />
          </div>

          <div className='flex flex-col space-y-2 col-span-2'>
            <label className='form-label' htmlFor='complaint'>Enter your complaint</label>
            <textarea rows={3} required className='form-input' id='complaint' {...register('complaint')} />
          </div>

          <div className='flex flex-col space-y-2'>
            <label className='form-label' htmlFor='references'>References</label>
            <input required className='form-input' type='text' id='references' {...register('references')} />
          </div>

          <div className='flex flex-col space-y-2'>
            <label className='form-label' htmlFor='additionalInfo'>Additional Information</label>
            <input required className='form-input' type='text' id='additionalInfo' {...register('additionalInfo')} />
          </div>

          <button type='submit' className='dashboard-button w-1/2 mt-20 mx-auto'>Submit</button>

        </form>
      </div>

    </div>
  )
}

export default Grievances
