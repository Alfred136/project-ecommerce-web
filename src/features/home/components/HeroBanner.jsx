import Link from 'next/link';
import { Button } from '@/components';

const HeroBanner = () => {
  return (
    <div className='w-full h-[95vh] mb-[50px] hero-banner'>
      <div className='absolute bottom-[10%] left-[10%]'>
        <div className='flex flex-col'>
          <p className='text-[32px] text-gray-50 font-bold mb-4'>
            Spring '23 New Arrivals
          </p>
          <div className='flex sm:flex-row flex-col gap-4'>
            <Link href='/products/men'>
              <Button title='Shop Men' theme='secondary' />
            </Link>
            <Link href='/products/women'>
              <Button title='Shop Women' theme='secondary' />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
};

export default HeroBanner;