import React from 'react'
import { menSizes } from '@/constant'
import { Button, ProductsCarousel } from '@/components'
import { featureProducts } from '@/constant'
import Carousel from 'react-bootstrap/Carousel'

const ImageCarousel = () => (
  <div className='md:w-[50%] w-full h-full'>
    <Carousel prevLabel='' nextLabel=''>
      {featureProducts.map((product) => (
        <Carousel.Item key={product.id}>
          <img
            src='/hero-banner.jpg'
            alt='First slide'
            className='w-full h-[60vh] object-cover'
          />
        </Carousel.Item>
      ))}
    </Carousel>
  </div>
)

const ProductInfo = () => (
  <div className='md:w-[50%] w-full min-h-full flex flex-col md:p-8 p-6 bg-slate-100'>
    <div className='flex justify-between items-center'>
      <p className='text-[28px] font-bold'>product name</p>
      <p className=' font-semibold'>$0</p>
    </div>
    <p className='text-[14px] my-4'>dec desc descdesc desc</p>
    <p className='mb-1'>size:</p>
    <div className='flex flex-wrap mb-4'>
      {menSizes.map((size) => (
        <div key={size} className='w-[48px] h-[48px] flex justify-center items-center border text-[12px] cursor-pointer border-black hover:text-white hover:bg-black mr-2 mb-3'>
          {size}
        </div>
      ))}
    </div>

    <div className='mb-5 text-[14px] text-gray-700'>
      <p>product feature 1</p>
      <p>product feature 2</p>
    </div>

    <Button
      title={'Add to cart'}
      theme='primary'
      styles='!w-full'
    />
  </div>
)

// add props for SSR
const ProductDetails = () => {
  return (
    <div className='flex flex-col w-full overflow-hidden'>
      <div className='flex md:flex-row flex-col w-full min-h-[60vh] mb-10'>
        <ImageCarousel />
        <ProductInfo />
      </div>

      <ProductsCarousel
        title='Recommend for you'
        products={featureProducts}
      />
    </div>
  )
}

// export const getStaticPaths = async () => {
//   const query = `*[_type == "product"] {
//     slug {
//       current
//     }
//   }
//   `;

//   const products = await client.fetch(query);

//   const paths = products.map((product) => ({
//     params: {
//       slug: product.slug.current
//     }
//   }));

//   return {
//     paths,
//     fallback: 'blocking'
//   }
// }

// export const getStaticProps = async ({ params: { slug } }) => {
//   const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
//   const productsQuery = '*[_type == "product"]'

//   const product = await client.fetch(query);
//   const products = await client.fetch(productsQuery);

//   console.log(product);

//   return {
//     props: { products, product }
//   }
// }

export default ProductDetails