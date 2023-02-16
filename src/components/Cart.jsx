import React from 'react'
import { AiOutlineShoppingCart, AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { HiOutlineXMark } from 'react-icons/hi2'
import { toast } from 'react-hot-toast';
import { Button } from '@/components'
import { urlFor } from '@/lib/sanityClient'
import { useStateContext } from '@/context/stateContext'
import { collections } from '@/constant'

const iconClass = `w-3 h-3 text-gray-400 cursor-pointer hover:text-gray-600`

const CartItem = ({ item }) => {
  const { name, image, size, price, quantity } = item
  const collectionName = collections.find((collection) => collection.id === item.collectionId).name || ''
  const { onRemove, toggleCartItemQuanitity } = useStateContext()

  return (
    <div className='flex py-4 mr-3 border-b border-gray-300'>
      <img
        src={image ? urlFor(image[0]) : ''}
        alt={`cart item: ${name}`}
        className='w-[100px] h-[100px] mr-4'
      />
      <div className='flex flex-col w-full justify-between'>
        <p className='flex flex-col text-[12px] text-gray-600'>
          <span className='text-[16px] font-semibold'>{name}</span>
          <span>{collectionName}</span>
          <span>Size: {size}</span>
        </p>

        <div className='flex items-center w-fit border border-gray-300 px-2 py-1'>
          <AiOutlineMinus
            className={iconClass}
            onClick={() => toggleCartItemQuanitity(item, 'dec')}
          />
          <span className='text-[12px] mx-2'>{quantity}</span>
          <AiOutlinePlus
            className={iconClass}
            onClick={() => toggleCartItemQuanitity(item, 'inc')}
          />
        </div>
      </div>
      <div className='flex flex-col justify-between items-end'>
        <HiOutlineXMark
          className='w-4 h-4 cursor-pointer hover:text-blue-500'
          onClick={() => onRemove(item)}
        />
        <span>${price}</span>
      </div>
    </div>
  )
}


const Cart = () => {
  const { showCart, setShowCart, totalPrice, cartItems, totalQuantities, onClear } = useStateContext()

  const handleCheckout = async () => {
    const res = await fetch('/api/stripe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(cartItems)
    });

    if (res.statusCode === 500) return;

    const data = await res.json();
    toast.loading('Redirecting...');
    window.location.href = data.url;
  }

  return (
    <>
      {showCart ?
        <div className='absolute top-0 w-full h-[100vh] flex'>
          <div className='sm:w-[50%] md:w-[60%] xl:w-[70%] cursor-pointer gray-layer' onClick={() => setShowCart(false)} />
          <div className='sm:w-[50%] md:w-[40%] xl:w-[30%] w-full bg-white text-[16px] font-normal overflow-y-auto'>
            <div className='flex flex-col p-5'>
              <div className='relative mb-4'>
                <HiOutlineXMark className='absolute top-0 left-0 w-7 h-7 cursor-pointer hover:text-blue-600' onClick={() => setShowCart(false)} />
                <div className='flex justify-center'>
                  <span className='text-[18px]'>Cart({totalQuantities} items)</span>
                  <AiOutlineShoppingCart className='w-7 h-7' />
                </div>
              </div>

              <div className='flex flex-col mb-4 sm:h-[400px] overflow-y-auto'>
                {cartItems.map((product) => (
                  <CartItem
                    key={`${product._id}-${product.size}`}
                    item={product}
                  />
                ))}
              </div>

              <div className='flex flex-col mb-4'>
                <div className='flex justify-between '>
                  <span className='font-semibold'>Subtotal</span>
                  <span>${totalPrice} USD</span>
                </div>
                <div className='flex justify-between mb-4'>
                  <span className='font-semibold'>Shipping</span>
                  <span>Free</span>
                </div>
                <Button
                  title='Pay with stripe'
                  styles='!w-full mb-4'
                  onClick={handleCheckout}
                />
                <Button
                  title='Clear cart'
                  theme='primary-outline'
                  styles='!w-full'
                  onClick={onClear}
                />
              </div>
            </div>
          </div>
        </div> : null
      }
    </>
  )
}

export default Cart