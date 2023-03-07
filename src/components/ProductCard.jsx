import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { urlFor } from '@/lib/sanityClient'

const ProductCard = ({ product }) => {
  const { slug, name, price, tags, image } = product
  const router = useRouter();

  return (
    <Link href={router.pathname.includes('product')
      ? `${slug.current}`
      : `product/${slug.current}`}
    >
      <div className='flex-none w-[360px] h-[450px] bg-white rounded-md shadow-lg hover:scale-[1.08] transition-all duration-300'>
        <img
          src={image ? urlFor(image[0]) : '/no-image.png'}
          className='w-full h-[360px] rounded-t-md border-b-0 object-cover'
        />
        {/* Product Info */}
        <div className='w-full h-[80px] flex justify-between items-center px-4 py-2'>
          <div className='flex flex-col justify-center'>
            <span className='text-[18px] font-bold'>
              {name}
            </span>
            <p className='text-[14px] text-gray-500'>
              {tags?.map((tag, index) => (
                <span key={`${tag}-${index}`}>
                  {tag + (index === tags.length - 1 ? '' : ', ')}
                </span>
              ))}
            </p>
          </div>
          <h2 className='text-[18px] font-semibold'>
            ${price}
          </h2>
        </div>
      </div>
    </Link>
  )
}

export default ProductCard