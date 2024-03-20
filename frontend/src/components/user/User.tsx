export default function User() {
  return (
    <div className='flex items-center space-x-4 text-sm my-6'>
      <div className='h-16 w-16 bg-neutral-200 rounded-full'>
        <img
          src={''}
          alt={'avatar'}
          className='rounded-full'
        />
      </div>
      <div className='flex-1'>
        <p className='font-medium'>{''}</p>
        <p className='text-neutral-400'>{''}</p>
      </div>
      <p className='text-blue-400 font-medium cursor-pointer'>Switch</p>
    </div>
  )
}