import React, { useState } from 'react'
import { menSizes, womenSizes, products, collections, tags, sortBy } from '@/constant'
import { IoSquareSharp, IoGridSharp } from 'react-icons/io5'
import { SlArrowDown } from 'react-icons/sl'
import Link from 'next/link'

const textClass = 'mb-3 text-[14px] cursor-pointer hover:underline'

const MobileFilterPanel = () => (
  <div className='md:hidden flex flex-col w-full md:px-3 px-2 pb-4'>
    <p className='text-[20px] font-bold pb-3 text-center '>All Mens</p>
    <div className='w-full flex justify-between py-3 border-y-[0.5px] border-gray-500'>
      <div className='flex'>
        <span>Filter/Sort</span>
        <SlArrowDown className='w-5 h-5 ml-4' />
      </div>
      <div onClick={() => { }}>
        <IoGridSharp className='w-5 h-5 mr-2' />
      </div>
    </div>
  </div>
)

const FilterPanel = () => (
  <div className='md:flex hidden flex-col w-[30%] pr-6'>
    <h2 className='text-[20px] font-bold mb-3'>
      All Mens
    </h2>
    {collections.map((collection) => (
      <span
        key={collection.id}
        className={textClass}
        onClick={() => { window.alert('change collection') }}
      >
        {collection.name}
      </span>
    ))}

    <div className='my-3 border-t border-gray-400' />
    <h2 className='text-[18px] font-bold mb-3'>
      Filter By
    </h2>
    {tags.map((tag) => (
      <div key={tag.id} className='flex items-center text-[14px] mb-3'>
        <input
          type='checkbox'
          onChange={(e) => { }}
          className='w-[16px] h-[16px] mt-1 mr-[4px]'
        />
        <span>{tag.name}</span>
      </div>
    ))}

    <div className='my-3 border-t border-gray-400' />
    <h2 className='text-[18px] font-bold mb-3'>
      Sort By
    </h2>
    {sortBy.map((sort) => (
      <span
        key={sort.id}
        className={textClass}
        onClick={() => { window.alert('sort by') }}
      >
        {sort.name}
      </span>
    ))}
  </div>
)

const ProductCardBig = ({ product }) => {
  const { id, name, description, price, image } = product

  return (
    <div className='sm:w-[33.3%] w-[50%] md:px-3 px-2 mb-16'>
      <div className='card-container'>
        <Link href={`/product/${id}`}>
          <img
            src='/jean-1.jpg'
            alt={product.name}
            className='card-image'
          />
        </Link>

        <div className='overlay md:block hidden'>
          <div className='flex flex-col bg-gray-50 opacity-90 p-2'>
            <p className='mb-4 font-semibold'>
              Quick Add
            </p>
            <div className='flex flex-wrap justify-center w-full'>
              {menSizes.map((size) => (
                <div key={size} className='w-[36px] h-[36px] flex justify-center items-center border-[0.5px] cursor-pointer border-black hover:text-white hover:bg-black mx-1 mb-3'>
                  {size}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className='font-semibold'>
        {name}
      </div>
      <div>
        ${price}
      </div>
    </div>
  )
}

// add props for SSR
const Products = () => {
  return (
    <div className='max-w-[1400px] m-auto sm:px-10 px-3 py-16 min-h-[100vh]'>
      <div className='w-full min-h-[50vh] flex'>
        <FilterPanel />
        <div className='w-full flex flex-col'>
          <MobileFilterPanel />

          <div className='w-full flex flex-wrap'>
            {products.map((product) => (
              <ProductCardBig
                key={product.id}
                product={product}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// export const getStaticProps = async ({ params: { category } }) => {
//   const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
//   const productsQuery = '*[_type == "product"]'

//   const product = await client.fetch(query);
//   const products = await client.fetch(productsQuery);

//   console.log(product);

//   return {
//     props: { products, product }
//   }
// }

export default Products