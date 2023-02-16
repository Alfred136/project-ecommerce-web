import React from 'react'
import Link from 'next/link'
import { urlFor } from '@/lib/sanityClient'
import { useRouter } from 'next/router'

const ProductCard = ({ product }) => {
  const { slug, name, price, tags, image } = product
  const { route } = useRouter()

  return (
    <Link href={route.includes('product')
      ? `${slug.current}`
      : `product/${slug.current}`}
    >
      <div className='flex-none w-[280px] h-[360px] bg-gray-50  rounded-sm shadow-lg hover:scale-[1.1] transition-all duration-300'>
        <img
          src={image ? urlFor(image[0]) : '/no-image.png'}
          className='w-full h-[280px] bg-gray-100 hover:object-none object-cover'
        />
        {/* Product Info */}
        <div className='w-full h-[80px] flex justify-between items-center px-4 py-2'>
          <div className='flex flex-col justify-center '>
            <span className='font-semibold'>
              {name}
            </span>
            <p className='text-[12px] text-gray-500'>
              {tags?.map((tag, index) => (
                <span>
                  {tag + (index === tags.length - 1 ? '' : ' ')}
                </span>
              ))}
            </p>
          </div>
          <h2 className='text-[18px] font-bold'>
            ${price}
          </h2>
        </div>
      </div>
    </Link>
  )
}

export default ProductCard