import { HeroBanner } from '@/components'

const Contact = () => {
  return (
    <div className='w-full'>
      <HeroBanner
        imageUrl='/jeans-banner2.jpg'
        title='Contact us'
      />

      {/* info */}
      <div className='flex flex-col items-center gap-2 pb-10 px-2'>
        <span className='text-[24px] font-semibold text-center pb-2'>This site is made in Next.js + Sanity</span>
        <span className=''>Contact developer:</span>
        <span className=''>alfredtse136@gmail.com</span>
        <img src='/shark.gif' className='w-full h-[20vh] object-contain' />
      </div>
    </div>
  )
}

export default Contact