import React, { useState } from 'react'
import { featureProducts } from '@/constant'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { HiOutlineBars3BottomLeft, HiOutlineXMark } from 'react-icons/hi2'
import { Button } from '@/components'

const CartProduct = ({ product }) => {
  const { id, name, image, description, size, price } = product

  return (
    <div className='flex py-4 mr-3 border-b border-gray-300'>
      <img src='/jean-1.jpg' alt='jean' className='w-[100px] h-[100px] mr-4' />
      <div className='flex flex-col w-full'>
        <p className='font-semibold'>{name}</p>
        <p className='text-[12px]'>{description}</p>
        <p className='text-[12px]'>size: {size}</p>
        <div>
          + - input
        </div>
      </div>
      <div className='flex flex-col justify-between items-end'>
        <HiOutlineXMark className='w-4 h-4 cursor-pointer' onClick={() => { }} />
        <span>${price}</span>
      </div>
    </div>
  )
}


const Cart = ({ show, setShow }) => {
  return (
    <>
      {show &&
        <div className='absolute top-0 w-full h-[100vh] flex'>
          <div className='sm:w-[50%] md:w-[60%] xl:w-[70%] cursor-pointer gray-layer' onClick={() => setShow(false)} />
          <div className='sm:w-[50%] md:w-[40%] xl:w-[30%] w-full bg-white text-[16px] font-normal overflow-y-auto'>
            <div className='flex flex-col p-5'>
              <div className='relative mb-4'>
                <HiOutlineXMark className='absolute top-0 left-0 w-7 h-7 cursor-pointer hover:text-blue-600' onClick={() => setShow(false)} />
                <div className='flex justify-center'>
                  <span className='text-[18px]'>Cart({featureProducts.length} items)</span>
                  <AiOutlineShoppingCart className='w-7 h-7' />
                </div>
              </div>

              <div className='flex flex-col mb-4 sm:h-[400px] overflow-y-auto'>
                {featureProducts.map((product) => (
                  <CartProduct key={product.id} product={product} />
                ))}
              </div>

              <div className='flex flex-col mb-4'>
                <div className='flex justify-between '>
                  <span className='font-semibold'>Subtotal</span>
                  <span>$Price USD</span>
                </div>
                <div className='flex justify-between mb-4'>
                  <span className='font-semibold'>Shipping</span>
                  <span>Free</span>
                </div>
                <Button
                  title='Proceed to checkout'
                  styles='!w-full mb-4'
                />
                <Button
                  title='Clear cart'
                  theme='primary-outline'
                  styles='!w-full'
                />
              </div>
            </div>
          </div>
        </div>
      }
    </>
  )
}

export default Cart