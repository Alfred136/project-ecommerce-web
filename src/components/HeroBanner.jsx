import Image from 'next/image'

const HeroBanner = ({ imageUrl, title }) => {
  return (
    <div className='relative w-full h-[70vh] mb-8 bg-slate-200'>
      <Image
        src={imageUrl}
        alt={title}
        width={1920}
        height={1280}
        priority
        className='w-full h-full object-cover opacity-80 skeleton'
      />
      <span className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-[50px] text-primary font-bold text-center leading-none'>
        {title}
      </span>
    </div>
  )
}

export default HeroBanner