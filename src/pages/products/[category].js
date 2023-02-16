import React from 'react';
import { QueryClient, dehydrate } from '@tanstack/react-query';
import { categories } from '@/constant';
import { Loading } from '@/components';
import {
  getProducts,
  useGetProducts,
  FilterPanel,
  MobileFilterMenu,
  ProductCardBig,
  useCategory,
  useFilteredProducts
} from '@/features/products'


const Products = () => {
  const { category, categoryTitle } = useCategory();
  const { data: products, isSuccess, isLoading, isError } = useGetProducts({ category });

  const filteredProducts = isSuccess
    ? useFilteredProducts(products)
    : []

  return (
    <div className='max-w-[1400px] m-auto sm:px-10 px-3 py-16 min-h-[100vh]'>
      <div className='w-full min-h-[50vh] flex'>
        <FilterPanel title={categoryTitle} />
        <div className='w-full flex flex-col'>
          <MobileFilterMenu title={categoryTitle} />

          {isLoading ?
            <Loading /> : null
          }
          {isSuccess ?
            <div className='w-full flex flex-wrap'>
              {filteredProducts?.map((product) => (
                <ProductCardBig
                  key={product._id}
                  product={product}
                />
              ))}
            </div> : null
          }
        </div>
      </div>
    </div>
  )
}

export const getStaticPaths = async () => {
  const paths = categories.map((category) => ({
    params: {
      category: category.id
    }
  }));

  return {
    paths,
    fallback: 'blocking'
  }
}

export const getStaticProps = async ({ params: { category } }) => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["getProducts", category],
    queryFn: () => getProducts(category)
  });

  return {
    props: {
      dehydratedState: dehydrate(queryClient)
    }
  }
}

export default Products