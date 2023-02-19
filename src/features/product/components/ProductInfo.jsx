import { useState } from "react";
import { allSizes } from "@/constant";
import { useStateContext } from "@/context/stateContext";
import { Button } from "@/components";

const ProductInfo = ({ product }) => {
  const { name, price, tags, details, gender } = product;
  const { onAdd } = useStateContext();
  const [selectedSize, setSelectedSize] = useState(null);
  const sizes = (allSizes.find((size) => size.id === gender.toLowerCase()) || allSizes[0]).options;

  const onClickSize = (size) => {
    setSelectedSize(prev => prev === size ? null : size)
  }

  return (
    <div className='md:w-[50%] w-full min-h-full md:pt-16 md:px-16 p-6 bg-gray-100'>
      <div className='flex flex-col md:max-w-[600px]'>
        <div className='flex justify-between items-center'>
          <p className='text-[28px] font-bold'>{name}</p>
          <p className='font-semibold'>${price}</p>
        </div>
        <p className='max-w-[470px] text-[14px] my-4'>{details}</p>
        <p className='text-[14px] font-semibold mb-1'>Select size:</p>
        <div className='flex flex-wrap mb-4'>
          {sizes.map((size) => (
            <div
              key={size}
              className={`w-[48px] h-[48px] flex justify-center items-center border text-[12px] cursor-pointer border-black lg:hover:text-white lg:hover:bg-primary mr-2 mb-3 ${size === selectedSize ? 'text-white bg-slate-900' : ''}`}
              onClick={() => onClickSize(size)}
            >
              {size}
            </div>
          ))}
        </div>

        <div className='mb-5 text-[14px] '>
          <p className='font-semibold'>Tags:</p>
          {tags?.map((tag) => (
            <p key={tag}>{tag}</p>
          ))}
        </div>

        <Button
          title={selectedSize ? 'Add to cart' : 'select a size'}
          theme={selectedSize ? 'primary' : 'disabled'}
          styles='!w-full'
          onClick={() => onAdd(product, selectedSize)}
          disable={!selectedSize}
        />
      </div>
    </div>
  )
}

export default ProductInfo