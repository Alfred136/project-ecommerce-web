import { HeroBanner } from '@/components'

const Stores = () => {
  return (
    <div className='w-full'>
      <HeroBanner
        imageUrl='/jeans-banner2.jpg'
        title='Stores'
      />

      {/* info */}
      <div className='flex flex-col items-center gap-2 pb-10 px-2'>
        <span className='text-[24px] font-semibold text-center'>Feature coming soon</span>
        <img src='/cat.gif' className='w-full h-[20vh] object-contain' />
        <span className=''>Contact developer:</span>
        <span className=''>alfredtse136@gmail.com</span>
      </div>
    </div>
  )
}

export default Stores