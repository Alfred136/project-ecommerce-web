import React from 'react'

const Stores = () => {
  return (
    <div className='w-full'>
      <div className='flex flex-col items-center gap-2 pb-10'>
        <div className='relative w-full h-[65vh] mb-6'>
          <img
            src='/jeans-banner2.jpg'
            className='w-full h-full opacity-70 object-cover'
          />
          <span className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-primary text-[50px] font-bold'>
            Stores
          </span>
        </div>
        <span className='text-[24px] font-semibold'>Feature coming soon</span>
        <img src='/cat.gif' className='w-full h-[20vh] object-contain' />
        <span className=''>Contact developer:</span>
        <span className=''>alfredtse136@gmail.com</span>
      </div>
    </div>
  )
}

export default Stores