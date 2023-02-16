import { navTabsLeading } from '@/constant';
import Link from 'next/link';

const CategoryBanner = () => (
  <div className='full'>
    {navTabsLeading.map((category) => (
      <div key={category.id} className=''>
        <Link href={category.link}>
          <img
            src='/jeans-banner2.jpg'
            alt={category.id}
            className='w-[50%] h-[500px] float-left object-cover hover:object-none'
          />
        </Link>
      </div>
    ))}
  </div>
);

export default CategoryBanner;