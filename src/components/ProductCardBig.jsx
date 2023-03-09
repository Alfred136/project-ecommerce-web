import Link from "next/link";
import Image from 'next/image'
import { useStateContext } from "@/context/stateContext";
import { urlFor } from "@/lib/sanityClient";
import { allSizes } from "@/constant";

const ProductCardBig = ({ product }) => {
  const { slug, name, price, gender, image } = product;
  const { onAdd } = useStateContext();
  const size = (allSizes.find((size) => size.id === gender.toLowerCase()) || allSizes[0]);

  return (
    <div className='xs:w-[50%] sm:w-[33.3%] w-[100%] h-[450px] md:px-3 px-2 mb-20'>
      <div className='card-container'>
        <Link href={`/product/${slug.current}`}>
          <Image
            src={`${image ? urlFor(image[0]) : '/no-image.png'}`}
            alt={image ? name : 'no image'}
            width={450}
            height={450}
            className='skeleton card-image'
          />
        </Link>

        <div className='card-overlay md:block hidden'>
          <div className='flex flex-col bg-gray-50 opacity-90 p-2'>
            <p className='mb-4 font-semibold'>
              Quick Add
            </p>
            <div className='flex flex-wrap justify-center w-full'>
              {size.options.map((size) => (
                <div
                  key={size}
                  className='w-[36px] h-[36px] flex justify-center items-center border-[0.5px] cursor-pointer border-black hover:text-white hover:bg-black mx-1 mb-3'
                  onClick={() => { onAdd(product, size) }}
                >
                  <span className='text-[14px]'>{size}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className='font-semibold mt-2'>
        {name}
      </div>
      <div>
        ${price}
      </div>
    </div>
  )
}

export default ProductCardBig