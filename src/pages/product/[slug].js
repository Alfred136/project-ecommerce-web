import React from 'react'
import { QueryClient, dehydrate } from '@tanstack/react-query'
import {
  getProductsSlug,
  getProduct,
  getFeaturedProducts,
  useGetProduct,
  ImageCarousel,
  ProductInfo
} from '@/features/product'
import { Loading, ProductsCarousel } from '@/components'

const ProductDetails = ({ slug }) => {
  const [productQuery, featuresQuery] = useGetProduct(slug);

  return (
    <div className='flex flex-col w-full overflow-hidden'>
      <div className='flex md:flex-row flex-col justify-center w-full min-h-[60vh] mb-10'>
        {productQuery.isLoading ? <Loading /> : null}
        {productQuery.isSuccess ?
          <>
            <ImageCarousel image={productQuery.data?.image} />
            <ProductInfo product={productQuery.data ?? {}} />
          </> : null
        }
      </div>

      {featuresQuery.isLoading ? <Loading /> : null}
      {featuresQuery.isSuccess ?
        <ProductsCarousel
          title='Recommend for you'
          products={featuresQuery.data}
        /> : null
      }
    </div>
  )
}

export const getStaticPaths = async () => {
  const products = await getProductsSlug();

  const paths = products.map((product) => ({
    params: {
      slug: product.slug.current
    }
  }));

  return {
    paths,
    fallback: 'blocking'
  }
}

export const getStaticProps = async ({ params: { slug } }) => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(["getProduct", slug], () => getProduct(slug));
  await queryClient.prefetchQuery(["getProducts", "featured"], getFeaturedProducts);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      slug: slug
    }
  }
}

export default ProductDetails