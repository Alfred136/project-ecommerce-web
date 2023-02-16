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
    setSelectedSize(size === selectedSize ? null : size)
  }

  return (
    <div className='md:w-[50%] w-full min-h-full flex flex-col md:p-8 p-6 bg-slate-100'>
      <div className='flex justify-between items-center'>
        <p className='text-[28px] font-bold'>{name}</p>
        <p className=' font-semibold'>${price}</p>
      </div>
      <p className='max-w-[470px] text-[14px] my-4'>{details}</p>
      <p className='mb-1'>size:</p>
      <div className='flex flex-wrap mb-4'>
        {sizes.map((size) => (
          <div
            key={size}
            className={`w-[48px] h-[48px] flex justify-center items-center border text-[12px] cursor-pointer border-black hover:text-white hover:bg-black mr-2 mb-3 ${size === selectedSize ? 'text-white bg-slate-900' : ''}`}
            onClick={() => onClickSize(size)}
          >
            {size}
          </div>
        ))}
      </div>

      <div className='mb-5 text-[14px] text-gray-700'>
        <p>tags:</p>
        {tags?.map((tag) => (
          <p key={tag}>{tag}</p>
        ))}
      </div>

      <Button
        title={selectedSize ? 'Add to cart' : 'Pick a size'}
        theme={selectedSize ? 'primary' : 'disabled'}
        styles='!w-full'
        onClick={() => onAdd(product, selectedSize)}
        disable={!selectedSize}
      />
    </div>
  )
}

export default ProductInfo