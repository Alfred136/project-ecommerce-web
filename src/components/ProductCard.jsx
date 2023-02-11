import React from 'react'

const ProductCard = ({ product }) => {
  const { id, name, description, price, image } = product

  return (
    <div className='flex-none w-[280px] h-[360px] bg-gray-50  rounded-sm shadow-lg hover:scale-[1.1] transition-all duration-300'>
      <img
        src='/jean-1.jpg'
        alt={id}
        className='w-full h-[280px] bg-gray-100 hover:object-none'
      />
      {/* Product Info */}
      <div className='w-full h-[80px] flex justify-between items-center px-4 py-2'>
        <div className='flex flex-col justify-center '>
          <span className='font-semibold'>{name}</span>
          <p className='text-[12px] text-gray-500'>{description}</p>
        </div>
        <h2 className='text-[18px] font-bold'>${price}</h2>
      </div>
    </div>
  )
}

export default ProductCard