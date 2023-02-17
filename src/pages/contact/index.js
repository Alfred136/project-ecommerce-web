import React from 'react'

const Contact = () => {
  return (
    <div className='w-full'>
      <div className='flex flex-col items-center gap-2 pb-10'>
        <div className='relative w-full h-[65vh] mb-6'>
          <img
            src='/jeans-banner2.jpg'
            className='w-full h-full opacity-70 object-cover'
          />
          <span className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-[50px] text-primary font-bold'>
            Contact us
          </span>
        </div>
        <span className='text-[24px] font-semibold'>This site is made in Next.js + Sanity</span>
        <span className=''>Contact developer:</span>
        <span className=''>alfredtse136@gmail.com</span>
        <img src='/shark.gif' className='w-full h-[20vh] object-contain' />
        <span className=''></span>
      </div>
    </div>
  )
}

export default Contact